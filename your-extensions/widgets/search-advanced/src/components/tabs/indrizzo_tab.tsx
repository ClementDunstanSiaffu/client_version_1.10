

import {React,jsx,appActions} from 'jimu-core';
import {MultiSelect,Select,Option,Slider,Button,NumericInput, Alert} from 'jimu-ui';
import {CalciteAccordion, CalciteAccordionItem} from "calcite-components";
import SelectFilterType from '../select_filter';
import { SearchWidgetContext } from '../../context/context';
import Widget from '../../runtime/widget';
import helper from '../../helper/helper';

export default class IndrizzoTab extends React.PureComponent<any,any>{

    static contextType?: React.Context<any> = SearchWidgetContext;

    constructor(props:any){
        super(props);
        this.onClickResearch = this.onClickResearch.bind(this);
        this.onChangeSelectLayer = this.onChangeSelectLayer.bind(this);
        this.onChangeSelectTypeGeometry = this.onChangeSelectTypeGeometry.bind(this);
        this.onChangeSlider = this.onChangeSlider.bind(this)
    }

    onChangeSelectLayer (e,n,s){

        const searchWidget = this.context?.parent;
        const searchByAddress = this.context?.searchByAddress

        const checkedLayers = this.context?.checkedLayers??[];;
        const jimuLayerViews = Widget.jimuLayerViews;
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
        if (searchByAddress){
          const activeView = Widget.activeView;
          const extent = Widget.currentMapExtent;
          activeView.view.goTo(extent);
          searchWidget.setState({searchByAddress:false})
        }
        helper.activateLayerOnTheMap(jimuLayerViews,n,e.target.checked);
        searchWidget.props.dispatch(appActions.widgetStatePropChange("value","checkedLayers",copiedCheckedLayers));
        searchWidget.props.dispatch(appActions.widgetStatePropChange("value","createTable",true));
    }

    onChangeSlider(e){
        const searchWidget = this.context?.parent;
        searchWidget.setState({valueBuffer: parseInt(isNaN(e) ? e.target.value: e)});
        if (Widget.selectedResults.length){
            searchWidget.setState({disableButton:false})
        }
      }

    onChangeSelectTypeGeometry(e){
        const searchWidget = this.context?.parent;
        searchWidget.setState({typeSelected:e.target.value});
        if (Widget.selectedResults.length){
            searchWidget.setState({disableButton:false})
        }
      }

    onClickResearch(){
        
        const jimuMapView = this.context?.jimuMapView;
        const checkedLayers = this.context?.checkedLayers??[];
        const searchWidget = this.context?.parent;
        const typeSelected = this.context?.typeSelected;
        const valueBuffer = this.context?.valueBuffer;
        const geometry = this.context?.geometry;
        const idWidgetTable = this.context?.idWidgetTable

        jimuMapView.view.map.tables.removeAll();
        let arrayErrors = [];
        if(!checkedLayers.length) arrayErrors.push("Seleziona almeno un servizio");
        if(!typeSelected) arrayErrors.push("Seleziona una tipologia di selezione");
        searchWidget.setState({
          errorMessage:arrayErrors.join(),
          disableButton:true
        });
        Widget.foundGeometry = searchWidget.graphicLayerFound;
    
        if(arrayErrors.length === 0 && idWidgetTable !== ""){
    
          jimuMapView.view.map.allLayers.forEach((f, index) =>{
            if(f && f.type==="feature" && checkedLayers.indexOf(f.id) !== -1){
              if(f.labelingInfo?.length){
                f.labelingInfo[0].symbol.font.family = "Arial";//fix font verdana not in static esri
                f.labelsVisible = this.state.labelVisible;
              }
            }
          });
    
          //mando layerid ad TableList
          const results = Widget.selectedResults;
          const selectedLayersContents = helper.getSelectedContentsLayer(results,checkedLayers);
          const numberOfAttributes = helper.getNumberOfAttributes(selectedLayersContents);
          const layerOpen = {
            geometry:geometry,
            typeSelected:typeSelected,
            valueBuffer:valueBuffer,
            graphicsFound:searchWidget.getFoundGeometryArray
          }
          if (Object.keys(numberOfAttributes).length > 0){
            searchWidget.props.dispatch(appActions.widgetStatePropChange("value","createTable",true));
            searchWidget.props.dispatch(appActions.widgetStatePropChange("value","numberOfAttribute",numberOfAttributes));
            searchWidget.props.dispatch(appActions.widgetStatePropChange("value","layerOpen",layerOpen));
            searchWidget.props.dispatch(appActions.widgetStatePropChange("value","getAllLayers",searchWidget.getAllCheckedLayers));
            searchWidget.props.dispatch(appActions.widgetStatePropChange("value","getActiveView",searchWidget.getActiveView));
            searchWidget.props.dispatch(appActions.widgetStatePropChange("value","getAllJimuLayerViews",searchWidget.getAllJimuLayerViews));
          }else{
            searchWidget.props.dispatch(appActions.widgetStatePropChange("value","showAlert",true));
            searchWidget.setState({errorMessage:"No item was selected"})
          }
        }
      }

    render(): React.ReactNode {

        const checkedLayers = this.context?.checkedLayers??[];
        const searchWidget = this.context?.parent;
        const arrayLayer = this.context?.arrayLayer
        const filterValue = this.context?.filterValue??1;
        const valueBuffer = this.context?.valueBuffer;
        const disableButton = this.context?.disableButton;
        const errorMessage = this.context?.errorMessage

        return(
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
                                <label>Layer selezionati: {checkedLayers.length} / {arrayLayer.length}</label>
                                <MultiSelect
                                    items={arrayLayer}
                                    onClickItem={this.onChangeSelectLayer}
                                    placeholder="Lista servizi"
                                    values = {checkedLayers}
                                />
                            </div>
                        </div>
                    </CalciteAccordionItem>

                    <CalciteAccordionItem icon-start="car" itemTitle="Opzione di ricerca">
                        <div className="container-fluid mt-3 mb-3">
                            {filterValue === 2 && 
                                <div className="row">
                                    <label className="w-100">
                                        Valore di buffer <NumericInput defaultValue={valueBuffer} value={valueBuffer} onChange={this.onChangeSlider} className="d-inline-block w-50"/> m
                                        <Slider
                                            className="w-100 mt-1"
                                            aria-label="Range"
                                            value={valueBuffer}
                                            defaultValue={valueBuffer}
                                            max={5000}
                                            min={0}
                                            onChange={this.onChangeSlider}
                                            step={1}
                                        />
                                    </label>
                                </div>}
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

                    <CalciteAccordionItem icon-start="car" itemTitle ="Select filter type">
                        <div className="container-fluid mt-3 mb-3">
                            <SelectFilterType parent = {searchWidget} filterValue = {filterValue} />
                        </div>
                    </CalciteAccordionItem>

                </CalciteAccordion>

                <Button type= {disableButton ?"secondary" :"primary"} className="w-100" onClick={this.onClickResearch} disabled = {disableButton}>
                    Ricerca nei layer
                </Button>
                    
                <Alert 
                    open = {errorMessage && errorMessage !== ""  ?true:false}
                    text = {errorMessage}
                    type = "warning"
                    onClose={()=>searchWidget.setState({errorMessage:""})}
                />
            </div>
        )
    }
}