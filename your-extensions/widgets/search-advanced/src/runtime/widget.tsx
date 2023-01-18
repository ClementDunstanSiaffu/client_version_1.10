/** @jsx jsx */
import {React, AllWidgetProps, jsx, appActions, WidgetState, getAppStore,IMState} from 'jimu-core'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import '../style.css'
import {Tabs, Tab} from 'jimu-ui'
import { IMConfig } from '../config'
import Query from 'esri/rest/support/Query'
import query from 'esri/rest/query'
import Polygon from 'esri/geometry/Polygon'
import Graphic from 'esri/Graphic'
import GraphicsLayer from 'esri/layers/GraphicsLayer'
import geometryEngine from "esri/geometry/geometryEngine";
import Search from "esri/widgets/Search";
import Sketch from "esri/widgets/Sketch";
import helper from '../helper/helper';
import { SearchWidgetContext } from '../context/context'
import IndrizzoTab from '../components/tabs/indrizzo_tab'
import ComuniTab from '../components/tabs/comuni_tab'
import SitoTab from '../components/tabs/sito_tab'
import AmbitoTab from '../components/tabs/ambito_tab'
import defaultMessages from './translations/default'
import AttributeTableConnector from '../connectors/attribute_table_connector'

type stateValueType = {stateValue:{value:{checkedLayers:string[],filterValue:number}}}

export default class Widget extends React.PureComponent<AllWidgetProps<IMConfig>&stateValueType, any> {

  static mapExtraStateProps(state:IMState){return {stateValue:state.widgetsState}};
  static jimuLayerViews = {};
  static activeView = null;
  static selectedResults = [];
  static currentMapExtent = null;
  static foundGeometry = null;
  static attributeConnector = null;

  graphicLayerFound = new GraphicsLayer({listMode:"hide",visible:true});
  graphicLayerSelected = new GraphicsLayer({listMode:"hide",visible:true});

  symbolFound = {
    type: "simple-fill",
    color: [51, 51, 204, 0.5],
    style: "solid",
    outline: {
      style: "short-dash",
      color: "white",
      width: 3
    }
  };

  symbolSelected = {
    type: "simple-fill",
    color: [51, 51, 204, 0.5],
    style: "solid",
    outline: {
      style: "short-dash",
      color: "white",
      width: 3
    }
  };

  constructor (props) {
    super(props)
    this.state = {
      jimuMapView: null,

      arrayLayer: [],
      valueBuffer: 0,

      listComuni: [],
      listAmbiti: [],
      listSTO: [],

      resultSTO: [],
      resultsAmbiti: [],

      geometry:null,
      typeSelected:null,
      listServices: [],
      searchByAddress:false,
      disableButton:true,
      urlFetched:{"comuni":false,"sito":false,"ambito":false},
      locatingPosition:{"status":false,"error":false},
      searchedLayerIds:[]
    }

    this.activeViewChangeHandler = this.activeViewChangeHandler.bind(this);

    //COMUNI
    this.populateComuni();

    // //STO
    this.populateSTO();
    this.onClickViewTable = this.onClickViewTable.bind(this);

    // //AMBITI
    this.populateAmbiti();

    this.onChangeTabs = this.onChangeTabs.bind(this);
    this.getAllCheckedLayers = this.getAllCheckedLayers.bind(this);
  }

  componentDidMount(): void {this.props.dispatch(appActions.widgetStatePropChange("value","filterValue",2));}

  componentDidUpdate() {
    let widgetState: WidgetState = getAppStore().getState().widgetsRuntimeInfo[this.props.id].state;
    if(widgetState === WidgetState.Closed){
      //if(this.state.currentWidget) this.state.currentWidget.cancel();
      this.graphicLayerFound.visible = false;
      this.graphicLayerSelected.visible = false;
    }else if(widgetState === WidgetState.Opened){
      //if(this.state.currentWidget) this.state.currentWidget.create();
      this.graphicLayerFound.visible = true;
      this.graphicLayerSelected.visible = true;
    }
  }

  getAllJimuLayerViews = ()=>{
    const jimuLayerViews = Widget.jimuLayerViews;
    return jimuLayerViews
  }

  getActiveView = ()=>{
    const activeView = Widget.activeView;
    return activeView;
  }

  getFoundGeometryArray = ()=>Widget.foundGeometry;

  nls = (id: string) => {
    return this.props.intl ? this.props.intl.formatMessage({ id: id, defaultMessage: defaultMessages[id] }) : id
  }

  getAllCheckedLayers = ()=>{
    const activeView = Widget.activeView;
    const allMapLayers = activeView.view.map.allLayers?.items;
    const checkedLayers = this.props.stateValue?.value?.checkedLayers??[];
    let newMapLayer = [];
    if (allMapLayers?.length > 0 && checkedLayers.length > 0){
        newMapLayer = allMapLayers.reduce((newArray,item)=>{
            if (checkedLayers.includes(item.id)){
                newArray.push(item);
            }
            return newArray;
        },[])
    }
    return newMapLayer;
  }

  selectFeatureLayer = (geometry:any)=>{
    const activeView = Widget.activeView;
    if (activeView){
        activeView?.selectFeaturesByGraphic(geometry,"contains").then((results)=>{
            if (results?.length){
              helper.unhighlightLayer();
              Widget.selectedResults = results;
              const searchedLayerIds = helper.getLayersFromSearchResults(results);
              this.setState({disableButton:false,searchedLayerIds:searchedLayerIds})
            }else{
              this.setState({errorMessage:"No item was selected"})
            }
        })
        .catch((err)=>{})
    }
  }

  activeViewChangeHandler (jmv: JimuMapView) {
    if (jmv) {
      Widget.activeView = jmv;
      Widget.currentMapExtent = jmv.view.extent;
      jmv.view.map.add(this.graphicLayerFound);
      jmv.view.map.add(this.graphicLayerSelected);
      const arraySup = Object.keys(jmv.jimuLayerViews)?.reduce((newLayerArray,item)=>{
        if (jmv.jimuLayerViews[item]?.view && jmv.jimuLayerViews[item].layer.type === "feature"){
            let object = {
              label:jmv.jimuLayerViews[item].layer.title??item,
              value:jmv.jimuLayerViews[item].layer.id
            };
            newLayerArray.push(object);
        }
        return newLayerArray;
      },[])
      Widget.jimuLayerViews = jmv.jimuLayerViews;

      const sketch = new Sketch({
        layer: this.graphicLayerFound,
        view: jmv.view,
        creationMode:"single",
        container: "sketch-widget-search-advanced",//TODO migliorare senza id cablato
        availableCreateTools:["polygon", "rectangle", "circle"],
        visibleElements: {selectionTools:{"lasso-selection": false},settingsMenu: false}
      });

      sketch.on("create", (event)=>{
        jmv.view.graphics.removeAll();
        this.graphicLayerFound.removeAll();
        if (event.state === "complete") {
          const polygonGraphic = new Graphic({geometry: event.graphic.geometry,symbol: this.symbolFound});
          this.graphicLayerFound.add(polygonGraphic);
          this.selectFeatureLayer(event.graphic);
        }
      });

      const searchWidget = new Search({
        view: jmv.view,
        container: "search-widget-search-advanced"//TODO migliorare senza id cablato
      });

      searchWidget.on("select-result", (event)=>{
        if(event && event.result && event.result.feature){
          jmv.view.graphics.removeAll();
          this.graphicLayerFound.removeAll();
          
  
          //@ts-ignore
          const geometryBuffer: Polygon = geometryEngine.buffer( event.result.feature.geometry, 100, "meters");
          const polygonGraphic = new Graphic({geometry: geometryBuffer,symbol: this.symbolFound});
          this.selectFeatureLayer(polygonGraphic);
          this.graphicLayerFound.add(polygonGraphic);
          this.setState({searchByAddress:true,disableButton:false});
        }
      });
  
      searchWidget.on("search-clear", (event)=>{this.graphicLayerFound.removeAll();});
      this.setState({
        arrayLayer: arraySup,
        jimuMapView: jmv,
        searchWidget:searchWidget,
        sketchWidget:sketch
      });
      Widget.attributeConnector = new AttributeTableConnector(jmv,this);
    }
  }

  onChangeTabs(){
    this.graphicLayerFound.removeAll();
    this.graphicLayerSelected.removeAll();
    this.setState({
      resultSTO:[],
      resultsAmbiti:[],
      listComuni: [],
      listAmbiti: [],
      listSTO: [],
      urlFetched:{"comuni":false,"sito":false,"ambito":false},
      locatingPosition:{"status":false,"error":false}
    },()=>{
      this.populateComuni();
      this.populateSTO();
      this.populateAmbiti();
    });
  }

  updateFetchStatus (key:string,bool:boolean){
    const copiedFectedUrl = {...this.state.urlFetched};
    copiedFectedUrl[key] = bool;
    this.setState({urlFetched:copiedFectedUrl})
  }

  /**==============================================
   * POPULATE SELECT
   ==============================================*/

  async populateComuni () {
    const queryObject = new Query();
    queryObject.where = this.props.config.searchItems.queryWhere;
    queryObject.returnGeometry = false;
    // @ts-expect-error
    queryObject.outFields = this.props.config.searchItems.outFields;
    const results = await query.executeQueryJSON(this.props.config.searchItems.url, queryObject);
    //--- TODO ---//
    // results.features.sort(function (a, b) {
    //   return ((a.attributes.NOMECOMUNE < b.attributes.NOMECOMUNE) ? -1 : ((a.attributes.NOMECOMUNE == b.attributes.NOMECOMUNE) ? 0 : 1));
    // })
 
    this.setState({listComuni: results.features,})
    this.updateFetchStatus("comuni",true)
  }

  async populateSTO () {
    const queryObject = new Query();
    queryObject.where = this.props.config.searchSTO.queryWhere;
    queryObject.returnGeometry = false;
    // @ts-expect-error
    queryObject.outFields = this.props.config.searchSTO.outFields;
    const results = await query.executeQueryJSON(this.props.config.searchSTO.url, queryObject);
    this.setState({listSTO: results.features})
    this.updateFetchStatus("sito",true)
  }

  async populateAmbiti () {
    const queryObject = new Query();
    queryObject.where = this.props.config.searchAmbiti.queryWhere;
    queryObject.returnGeometry = false;
    // @ts-expect-error
    queryObject.outFields = this.props.config.searchAmbiti.outFields;

    const results = await query.executeQueryJSON(this.props.config.searchAmbiti.url, queryObject);
    //---TODO--//
    // results.features.sort(function (a, b) {
    //   return ((a.attributes.IDAMBITO < b.attributes.IDAMBITO) ? -1 : ((a.attributes.IDAMBITO == b.attributes.IDAMBITO) ? 0 : 1));
    // })

    this.setState({
      listAmbiti: results.features
    })
    this.updateFetchStatus("ambito",true)
  }

  /**==============================================
   * EVENT CLICK SELECT
   ==============================================*/
  async onClickViewTable (e,field:string) {
    this.graphicLayerSelected.removeAll();
    const queryObject = new Query();
    // queryObject.where = `OBJECTID = ${e.target.id}`;---TODO
    queryObject.where = `FID = ${e.target.id}`;
    queryObject.returnGeometry = true;
    //@ts-ignore
    queryObject.outFields = this.props.config[field]?.outFields ? this.props.config[field].outFields : ['*']
    const results = await query.executeQueryJSON(this.props.config.searchItems.url, queryObject);
    if(results && results.features?.length){
      const feature = results.features[0];
      let arrayFieldsContentPopupTemplate = []
      const polygon = helper.returnGraphicsGeometry(feature);
      for(let i=0;i<results.fields.length;i++){
        let itemField = results.fields[i];
        arrayFieldsContentPopupTemplate.push({fieldName: itemField.name,label: itemField.alias})
      }
      const polygonGraphic = new Graphic({
        geometry: polygon,
        popupTemplate:{
          title:"Feature selezionata",
          content:[{type:"fields",fieldInfos:arrayFieldsContentPopupTemplate}],
        },
        attributes:feature.attributes,
        symbol:this.symbolSelected,
      });

      this.graphicLayerSelected.add(polygonGraphic);
      this.state.jimuMapView.view.goTo({center: polygonGraphic});
      this.state.jimuMapView.view.popup.open({location:polygon,features:[polygonGraphic]});
    }
  }

  setLocatingPostion(locatingStatus:boolean,errorStatus:boolean){
    const copiedLocatingPosition = {...this.state.locatingPosition};
    copiedLocatingPosition["status"] = locatingStatus;
    copiedLocatingPosition["error"] = errorStatus;
    this.setState({locatingPosition:copiedLocatingPosition});
  }

  //TODO defaultValue spostare in config
  //TODO config abilitare tab true/false
  render () {
    return (
      <SearchWidgetContext.Provider value={{...this.state,...this.props.stateValue?.value,...this.props.config,"parent":this}}>
        <div className="widget-attribute-table jimu-widget">
          {this.props.hasOwnProperty('useMapWidgetIds') && this.props.useMapWidgetIds && this.props.useMapWidgetIds[0] && (
              <JimuMapViewComponent useMapWidgetId={this.props.useMapWidgetIds?.[0]} onActiveViewChange={this.activeViewChangeHandler} />
          )}
          <Tabs defaultValue="search-advanced-tab-indirizzi" type="tabs" onChange={this.onChangeTabs}>
            <Tab id="search-advanced-tab-indirizzi" title = {this.nls("addresses")}><IndrizzoTab /></Tab>
            <Tab id="search-advanced-tab-comuni" title = {this.nls("municipalities")}><ComuniTab /></Tab>
            <Tab id="search-advanced-tab-sito" title = {this.nls("site")}><SitoTab /></Tab>
            <Tab id="search-advanced-tab-Ambito" title = {this.nls("scope")}><AmbitoTab /></Tab>
          </Tabs>
        </div>
        </SearchWidgetContext.Provider>
    )
  }
}
