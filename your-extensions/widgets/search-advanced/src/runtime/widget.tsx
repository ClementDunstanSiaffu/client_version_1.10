/** @jsx jsx */
import {React, AllWidgetProps, jsx, appActions, WidgetState, getAppStore,IMState} from 'jimu-core'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import '../style.css'
import {Tabs, Tab, Select, Option, Button, Alert, MultiSelect, NumericInput, Slider} from 'jimu-ui'
import { IMConfig } from '../config'
import Query from 'esri/rest/support/Query'
import query from 'esri/rest/query'
import Polygon from 'esri/geometry/Polygon'
import Graphic from 'esri/Graphic'
import GraphicsLayer from 'esri/layers/GraphicsLayer'
import {CalciteAccordion, CalciteAccordionItem} from "calcite-components";
import geometryEngine from "esri/geometry/geometryEngine";
import Search from "esri/widgets/Search";
import Sketch from "esri/widgets/Sketch";
import helper from '../helper/helper'

function Table (props) {
  const { list, handleClick } = props

  return (
      <table>
        <caption></caption>
        <thead>
        <tr>
          <th>Comune</th>
          <th>Codice Istat</th>
        </tr>
        </thead>
        <tbody>
        {list.map((sto, i) => (
            <tr className="item-row" key={i}>
              <td className="item-table" id={sto.attributes.OBJECTID} onClick={handleClick}>{sto.attributes.NOMECOMUNE}</td>
              <td className="item-table" id={sto.attributes.OBJECTID} onClick={handleClick}>{sto.attributes.ISTAT}</td>
            </tr>
        ))}
        </tbody>
      </table>
  )
}

type stateValueType = {
  stateValue:{
    value:{
      getActiveView:()=>any,
      createTable:boolean,
      checkedLayers:string[],            
      getAllJimuLayerViews:()=>any,
}}}

export default class Widget extends React.PureComponent<AllWidgetProps<IMConfig>&stateValueType, any> {

  static mapExtraStateProps(state:IMState){return {stateValue:state.widgetsState}};
  static sketch = null;
  static searchWidget = null;
  static activeView = null;

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
      listServices: []
    }

    this.activeViewChangeHandler = this.activeViewChangeHandler.bind(this);

    //INDIRIZZI
    this.onChangeSelectLayer = this.onChangeSelectLayer.bind(this);
    this.onChangeSlider = this.onChangeSlider.bind(this);
    this.onChangeSelectTypeGeometry = this.onChangeSelectTypeGeometry.bind(this);
    this.onClickResearch = this.onClickResearch.bind(this);

    //COMUNI
    this.populateComuni();
    this.onChangeSelectComuni = this.onChangeSelectComuni.bind(this);

    //STO
    this.populateSTO();
    this.onClickViewTable = this.onClickViewTable.bind(this);
    this.onChangeSelectSTO = this.onChangeSelectSTO.bind(this);

    //AMBITI
    this.populateAmbiti();
    this.onChangeSelectAmbiti = this.onChangeSelectAmbiti.bind(this);

    this.onChangeTabs = this.onChangeTabs.bind(this)
  }

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
    // if (this.props.stateValue?.value?.createTable && this.props.stateValue?.value?.getActiveView){
    //   const activeView = this.props.stateValue.value.getActiveView();
    //   if (activeView && widgetState === WidgetState.Opened){
    //     this.activeViewChangeHandler(activeView);
    //     this.props.dispatch(appActions.widgetStatePropChange("value","createTable",false));
    //   }
    // }
    if (!Widget.activeView && widgetState === WidgetState.Opened){
      const activeView = this.props.stateValue.value.getActiveView();
      if (activeView){
        this.activeViewChangeHandler(activeView);
        Widget.activeView = activeView;
      }
    }
   
  }

  componentDidMount(): void {
    if (this.props.stateValue?.value?.getActiveView){
      const activeView = this.props.stateValue.value.getActiveView();
      if (activeView){
        this.activeViewChangeHandler(activeView);
      }
    }
  }

  activeViewChangeHandler (jmv: JimuMapView) {
    if (jmv) {
      jmv.view.map.add(this.graphicLayerFound);
      jmv.view.map.add(this.graphicLayerSelected);

      let arraySup = [];
      let  allLayers = [];
      if (jmv.view.map.allLayers.length){
        allLayers = [...jmv.view.map.allLayers];
        allLayers.reverse();
        allLayers.forEach((f, index) =>{
          if(f.type === "feature"){
            arraySup.push({
              label:f.title,
              value:f.id
            });
          }
        });
      } 
      // jmv.view.map.allLayers.forEach((f, index) =>{
      //   if(f.type === "feature"){
      //     arraySup.push({
      //       label:f.title,
      //       value:f.id
      //       // value:index
      //     });
      //   }
      // });
      if (!Widget.sketch && !Widget.searchWidget){
        const sketch = new Sketch({
          layer: this.graphicLayerFound,
          view: jmv.view,
          creationMode:"single",
          container: "sketch-widget-search-advanced",//TODO migliorare senza id cablato
          availableCreateTools:["polygon", "rectangle", "circle"],
          visibleElements: {
            selectionTools:{
              "lasso-selection": false
            },
            settingsMenu: false
          }
        });
  
        sketch.on("create", (event)=>{
          jmv.view.graphics.removeAll();
          this.graphicLayerFound.removeAll();
  
          if (event.state === "complete") {
            const polygonGraphic = new Graphic({
              geometry: event.graphic.geometry,
              symbol: this.symbolFound
            });
            this.graphicLayerFound.add(polygonGraphic);
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
            const geometryBuffer: Polygon = geometryEngine.buffer( event.result.feature.geometry, 1, "meters");
  
            const polygonGraphic = new Graphic({
              geometry: geometryBuffer,
              symbol: this.symbolFound
            });
  
            this.graphicLayerFound.add(polygonGraphic);
  
          }
        });
  
        searchWidget.on("search-clear", (event)=>{
          this.graphicLayerFound.removeAll();
        });
        Widget.sketch = sketch;
        Widget.searchWidget = searchWidget

        this.setState({
          jimuMapView: jmv,
          searchWidget:searchWidget,
          sketchWidget:sketch
        });
      }
    

      // const searchWidget = new Search({
      //   view: jmv.view,
      //   container: "search-widget-search-advanced"//TODO migliorare senza id cablato
      // });

      // searchWidget.on("select-result", (event)=>{
      //   if(event && event.result && event.result.feature){
      //     jmv.view.graphics.removeAll();
      //     this.graphicLayerFound.removeAll();

      //     //@ts-ignore
      //     const geometryBuffer: Polygon = geometryEngine.buffer( event.result.feature.geometry, 1, "meters");

      //     const polygonGraphic = new Graphic({
      //       geometry: geometryBuffer,
      //       symbol: this.symbolFound
      //     });

      //     this.graphicLayerFound.add(polygonGraphic);

      //   }
      // });

      // searchWidget.on("search-clear", (event)=>{
      //   this.graphicLayerFound.removeAll();
      // });

      this.setState({
        arrayLayer: arraySup,
        // jimuMapView: jmv,
        // searchWidget:searchWidget,
        // sketchWidget:this.sketch
      });
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
    });

    this.populateComuni();
    this.populateSTO();
    this.populateAmbiti();
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
    results.features.sort(function (a, b) {
      return ((a.attributes.NOMECOMUNE < b.attributes.NOMECOMUNE) ? -1 : ((a.attributes.NOMECOMUNE == b.attributes.NOMECOMUNE) ? 0 : 1));
    })
    this.setState({
      listComuni: results.features
    })
  }

  async populateSTO () {
    const queryObject = new Query();
    queryObject.where = this.props.config.searchSTO.queryWhere;
    queryObject.returnGeometry = false;
    // @ts-expect-error
    queryObject.outFields = this.props.config.searchSTO.outFields;
    const results = await query.executeQueryJSON(this.props.config.searchSTO.url, queryObject);
    this.setState({
      listSTO: results.features
    })
  }

  async populateAmbiti () {
    const queryObject = new Query();
    queryObject.where = this.props.config.searchAmbiti.queryWhere;
    queryObject.returnGeometry = false;
    // @ts-expect-error
    queryObject.outFields = this.props.config.searchAmbiti.outFields;

    const results = await query.executeQueryJSON(this.props.config.searchAmbiti.url, queryObject);
    results.features.sort(function (a, b) {
      return ((a.attributes.IDAMBITO < b.attributes.IDAMBITO) ? -1 : ((a.attributes.IDAMBITO == b.attributes.IDAMBITO) ? 0 : 1));
    })

    this.setState({
      listAmbiti: results.features
    })
  }


  /**==============================================
   * EVENT CLICK SELECT
   ==============================================*/
  async onClickViewTable (e) {
    this.graphicLayerSelected.removeAll();
    const queryObject = new Query();
    queryObject.where = `OBJECTID = "${e.target.id}"`;
    queryObject.returnGeometry = true;
    //@ts-ignore
    queryObject.outFields = this.props.config.searchItems.outFieldsDisplay ? this.props.config.searchItems.outFieldsDisplay : ["*"];
    const results = await query.executeQueryJSON(this.props.config.searchItems.url, queryObject);
    if(results && results.features?.length){
      const feature = results.features[0];
      const polygon = new Polygon(feature.geometry);
      let arrayFieldsContentPopupTemplate = []
      for(let i=0;i<results.fields.length;i++){
        let itemField = results.fields[i];
        arrayFieldsContentPopupTemplate.push({
          fieldName: itemField.name,
          label: itemField.alias
        })
      }

      const polygonGraphic = new Graphic({
        geometry: polygon,
        popupTemplate:{
          title:"Feature selezionata",
          content:[{
            type:"fields",
            fieldInfos:arrayFieldsContentPopupTemplate
          }]
        },
        attributes:feature.attributes,
        symbol: this.symbolSelected
      });

      this.graphicLayerSelected.add(polygonGraphic);

      this.state.jimuMapView.view.goTo({
        center: polygonGraphic
      });


      this.state.jimuMapView.view.popup.open({
        features: [polygonGraphic],
        location: polygon.centroid
      });
    }else{
      console.log("Errore view STO")
    }

  }

  async onChangeSelectComuni (e) {
    this.graphicLayerFound.removeAll();
    const queryObject = new Query();
    queryObject.where = `OBJECTID = "${e.target.value}"`;
    queryObject.returnGeometry = true;
    // @ts-expect-error
    queryObject.outFields = this.props.config.searchItems.outFields;
    const results = await query.executeQueryJSON(this.props.config.searchItems.url, queryObject);
    if(results && results.features?.length){
      const feature = results.features[0];
      const polygon = new Polygon(feature.geometry)

      const polygonGraphic = new Graphic({
        geometry: polygon,
        symbol: this.symbolFound
      })

      this.graphicLayerFound.add(polygonGraphic);

      this.state.jimuMapView.view.goTo({
        center: polygonGraphic
      });
    }else{
      console.log("Errore select comuni");
    }
  }

  async onChangeSelectSTO (e) {
    this.graphicLayerFound.removeAll();
    const queryObject = new Query();
    queryObject.where = `IDCOMPARTIMENTO = "${e.target.value}"`;
    queryObject.returnGeometry = true;
    // @ts-expect-error
    queryObject.outFields = '*';
    const results = await query.executeQueryJSON(this.props.config.searchItems.url, queryObject);
    results.features.sort(function (a, b) {
      return ((a.attributes.NOMECOMUNE < b.attributes.NOMECOMUNE) ? -1 : ((a.attributes.NOMECOMUNE == b.attributes.NOMECOMUNE) ? 0 : 1));
    })

    const totalpolygonGraphic = []
    results.features.forEach((el, i) => {
      const geometryComune = el.geometry;
      const polygon = new Polygon(geometryComune);
      const polygonGraphic = new Graphic({
        geometry: polygon,
        symbol: this.symbolFound
      })

      this.graphicLayerFound.add(polygonGraphic);
      totalpolygonGraphic.push(polygonGraphic);
    })

    if(totalpolygonGraphic?.length){
      this.state.jimuMapView.view.goTo({
        center: [totalpolygonGraphic]
      })
    }

    this.setState({
      resultSTO: results.features
    })
  }

  async onChangeSelectAmbiti (e) {
    this.graphicLayerFound.removeAll();
    const queryObject = new Query();
    queryObject.where = `IDAMBITO = "${e.target.value}"`;
    queryObject.returnGeometry = true;
    // @ts-expect-error
    queryObject.outFields = '*';
    const results = await query.executeQueryJSON(this.props.config.searchItems.url, queryObject);
    results.features.sort(function (a, b) {
      return ((a.attributes.NOMECOMUNE < b.attributes.NOMECOMUNE) ? -1 : ((a.attributes.NOMECOMUNE == b.attributes.NOMECOMUNE) ? 0 : 1))
    })
    const totalpolygonGraphic = [];
    results.features.forEach((el, i) => {
      const geometryComune = el.geometry;
      const polygon = new Polygon(geometryComune);
      const polygonGraphic = new Graphic({
        geometry: polygon,
        symbol: this.symbolFound
      })
      this.graphicLayerFound.add(polygonGraphic);
      totalpolygonGraphic.push(polygonGraphic);
    })

    this.state.jimuMapView.view.goTo({
      center: [totalpolygonGraphic]
    })

    this.setState({
      resultsAmbiti: results.features
    })
  }


  /**==============================================
   * INDIRIZZI
   ==============================================*/

  onChangeSelectLayer (e,n,s){
    const checkedLayers = this.props.stateValue?.value?.checkedLayers??[];
    let jimuLayerViews = {};
    if (this.props.stateValue?.value?.getAllJimuLayerViews){
      jimuLayerViews = this.props.stateValue?.value?.getAllJimuLayerViews();
    }
    let copiedCheckedLayers = [];
    if (checkedLayers.length ){
      copiedCheckedLayers = [...checkedLayers]
      if(e.target.checked){
        copiedCheckedLayers.push(n);
      }else{
        let index = copiedCheckedLayers.indexOf(n);
        if (index > -1) {
          copiedCheckedLayers.splice(index,1);
        }
      }
    }else{
      copiedCheckedLayers.push(n);
    }
    helper.activateLayerOnTheMap(jimuLayerViews,n,e.target.checked);
    this.props.dispatch(appActions.widgetStatePropChange("value","checkedLayers",copiedCheckedLayers));
    this.props.dispatch(appActions.widgetStatePropChange("value","createTable",true));
    // if(e.target.checked){
      
    //   this.state.listServices.push(n);
    // }else{
    //   let index = this.state.listServices.indexOf(n);
    //   if (index > -1) {
    //     this.state.listServices.splice(index,1);
    //   }
    // }

    // this.setState(this.state);
  }

  onChangeSlider(e){
    this.setState({
      valueBuffer: parseInt(isNaN(e) ? e.target.value: e)
    });
  }

  onChangeSelectTypeGeometry(e){
    // @ts-ignore
    this.state.typeSelected = e.target.value;
    this.setState(this.state);
  }

  async onClickResearch(){
    this.state.jimuMapView.view.map.tables.removeAll();

    //parametri form
    let arrayGeometry = [];
    //TODO PRENDERE GEOMETRIA
    this.graphicLayerFound.graphics.forEach(g=>{
      // @ts-ignore
      g.geometry = geometryEngine.buffer(g.geometry, this.state.valueBuffer, "meters");
      arrayGeometry.push(g.geometry);
    });

    //controllo errori
    let arrayErrors = [];
    if(arrayGeometry.length) { // @ts-ignore
      this.state.geometry = geometryEngine.union(arrayGeometry);
    }
    else arrayErrors.push("Seleziona una geometria in mappa");
    if(!this.state.listServices.length) arrayErrors.push("Seleziona almeno un servizio");
    if(!this.state.typeSelected) arrayErrors.push("Seleziona una tipologia di selezione");

    this.setState({
      errorMessage:arrayErrors.join()
    });

    if(arrayErrors.length === 0 && this.props.config.idWidgetTable !== ""){

      this.state.jimuMapView.view.map.allLayers.forEach((f, index) =>{
        if(f && f.type==="feature" && this.state.listServices.indexOf(index) !== -1){
          if(f.labelingInfo?.length){
            f.labelingInfo[0].symbol.font.family = "Arial";//fix font verdana not in static esri
            f.labelsVisible = this.state.labelVisible;
          }
        }
      });

      //mando layerid ad TableList
      this.props.dispatch(
          appActions.widgetStatePropChange(
              this.props.config.idWidgetTable,
              "layerOpen",
              {
                typeSelected:this.state.typeSelected,
                geometry:this.state.geometry.toJSON(),
                // listServices:this.state.listServices
              }
          )
      );
    }
  }

  //TODO defaultValue spostare in config
  //TODO config abilitare tab true/false
  render () {
    const checkedLayers = this.props.stateValue?.value?.checkedLayers??[];
    return (
        <div className="widget-attribute-table jimu-widget">
          {/* {this.props.hasOwnProperty('useMapWidgetIds') && this.props.useMapWidgetIds && this.props.useMapWidgetIds[0] && (
              <JimuMapViewComponent useMapWidgetId={this.props.useMapWidgetIds?.[0]} onActiveViewChange={this.activeViewChangeHandler} />
          )} */}
          <Tabs defaultValue="search-advanced-tab-indirizzi" type="tabs" onChange={this.onChangeTabs}>
            <Tab id="search-advanced-tab-indirizzi" title="Indirizzi">
              <div>
                <CalciteAccordion className="mt-4 mb-2">
                  <CalciteAccordionItem active={true} itemTitle="Seleziona indirizzo">
                    <div className="container-fluid mt-3 mb-3">
                      <div className="row">
                        <label>Ricerca per indirizzo</label>
                        <div id="search-widget-search-advanced" className="w-100"></div>
                      </div>
                      <div className="row mt-2">
                        <label>Ricerca per geometria</label>
                        <div id="sketch-widget-search-advanced" className="w-100"></div>
                      </div>
                    </div>
                  </CalciteAccordionItem>
                  <CalciteAccordionItem icon-start="car" itemTitle="Seleziona layers da interrogare">
                    <div className="container-fluid mt-3 mb-3">
                      <div className="row">
                        {/* <label>Layer selezionati: {this.state.listServices.length} / {this.state.arrayLayer.length}</label> */}
                        <label>Layer selezionati: {checkedLayers.length} / {this.state.arrayLayer.length}</label>
                        <MultiSelect
                            items={this.state.arrayLayer}
                            onClickItem={this.onChangeSelectLayer}
                            placeholder="Lista servizi"
                            values = {checkedLayers}
                        />
                      </div>
                    </div>
                  </CalciteAccordionItem>
                  <CalciteAccordionItem icon-start="car" itemTitle="Opzione di ricerca">
                    <div className="container-fluid mt-3 mb-3">
                      <div className="row">
                        <label className="w-100">
                          Valore di buffer <NumericInput defaultValue={this.state.valueBuffer} value={this.state.valueBuffer} onChange={this.onChangeSlider} className="d-inline-block w-50"/> m
                          <Slider
                              className="w-100 mt-1"
                              aria-label="Range"
                              value={this.state.valueBuffer}
                              defaultValue={this.state.valueBuffer}
                              max={5000}
                              min={0}
                              onChange={this.onChangeSlider}
                              step={1}
                          />
                        </label>
                      </div>
                      <div className="row mb-3">
                        <label className="w-100">
                          Tipo di selezione
                          <Select className="w-100 mt-2" onChange={this.onChangeSelectTypeGeometry} placeholder="Selezione tipo...">
                            <Option value="intersects" selected="selected">Intersects</Option>
                            <Option value="contains">Contains</Option>
                            <Option value="crosses">Crosses</Option>
                            <Option value="envelope-intersects">Envelope Intersects</Option>
                            <Option value="index-intersects">Index Intersects</Option>
                            <Option value="Overlaps">Overlaps</Option>
                            <Option value="touches">Touches</Option>
                            <Option value="within">Within</Option>
                            <Option value="relation">Relation</Option>
                          </Select>
                        </label>
                      </div>
                    </div>
                  </CalciteAccordionItem>
                </CalciteAccordion>

                <Button type="primary" className="w-100" onClick={this.onClickResearch}>Ricerca nei layer</Button>

                {this.state.errorMessage && this.state.errorMessage !== "" ? (
                    <Alert
                        form="basic"
                        open
                        text={this.state.errorMessage}
                        type="warning"
                        className="mt-2 w-100"
                        withIcon
                    />
                ) : ("")}
              </div>
            </Tab>
            <Tab id="search-advanced-tab-comuni" title="Comuni">
              <div className="mt-4 container-fluid" style={{overflow: 'hidden'}}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-2">
                      <Alert className="w-100" form="basic" open text="Selezionare il comune" type="info" withIcon/>
                    </div>
                    <div className="mb-2">
                      <Select className="w-100" onChange={this.onChangeSelectComuni} placeholder="Seleziona un comune">
                        {this.state.listComuni.map((el, i) => {
                          return <Option value={el.attributes.OBJECTID}>
                            {el.attributes.NOMECOMUNE}
                          </Option>
                        })}
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab id="search-advanced-tab-sito" title="Sito">
              <div className="mt-4 container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-2">
                      <Alert className="w-100" form="basic" open text="Selezionare prima lo STO, poi fare click sul comune per evidenziarlo." type="info" withIcon/>
                    </div>
                    <div className="mb-2">
                      <Select className="w-100" onChange={this.onChangeSelectSTO} placeholder="Seleziona un comune">
                        {this.state.listSTO.map((el, i) => {
                          return <Option value={el.attributes.IDCOMPARTIMENTO}>
                            {el.attributes.NOMECOMPARTIMENTO}
                          </Option>
                        })}
                      </Select>
                    </div>
                    <div style={{maxHeight: 350, overflowY: 'auto'}}>
                      { !this.state.resultSTO?.length
                          ? ""
                          : <Table className="w-100" list={this.state.resultSTO} handleClick={this.onClickViewTable}/>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab id="search-advanced-tab-Ambito" title="Ambito">
              <div className="mt-4 container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-2">
                      <Alert className="w-100" form="basic" open text="Selezionare prima l'ambito, poi fare click sul comune per evidenziarlo" type="info" withIcon/>
                    </div>
                    <div className="mb-2">
                      <Select onChange={this.onChangeSelectAmbiti} placeholder="Seleziona un comune">
                        {this.state.listAmbiti.map((el, i) => {
                          return <Option value={el.attributes.IDAMBITO}>
                            {el.attributes.NOMEAMBITO}
                          </Option>
                        })}
                      </Select>
                    </div>
                    <div style={{maxHeight: 350, overflowY: 'auto'}}>
                      { !this.state.resultsAmbiti?.length
                          ? ""
                          : <Table className="w-100" list={this.state.resultsAmbiti} handleClick={this.onClickViewTable} />
                      }
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
    )
  }
}
