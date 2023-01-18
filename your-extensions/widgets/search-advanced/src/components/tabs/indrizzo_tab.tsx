

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

    nls = (id:string)=>{
        const searchWidget = this.context?.parent;
        return searchWidget.nls(id);
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
        const searchByAddress = this.context?.searchByAddress
        searchWidget.setState({valueBuffer: parseInt(isNaN(e) ? e.target.value: e)});
        if (Widget.selectedResults.length || searchByAddress){
            searchWidget.setState({disableButton:false})
        }
      }

    onChangeSelectTypeGeometry(e){
        const searchWidget = this.context?.parent;
        const searchByAddress = this.context?.searchByAddress
        searchWidget.setState({typeSelected:e.target.value});
        if (Widget.selectedResults.length || searchByAddress){
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
        const idWidgetTable = this.context?.idWidgetTable;
        const searchByAddress = this.context?.searchByAddress;
        const searchedLayerIds = this.context?.searchedLayerIds;

        jimuMapView.view.map.tables.removeAll();
        let arrayErrors = [];
        if(!checkedLayers.length) arrayErrors.push("Seleziona almeno un servizio");
        if(!typeSelected) arrayErrors.push("Seleziona una tipologia di selezione");
        searchWidget.setState({
          errorMessage:arrayErrors.join(),
          disableButton:true
        });
        
        if(arrayErrors.length === 0){
          const foundInSearchAdress = [];
          for (let i = 0;i < checkedLayers.length;i++){
            const currentChechedId = checkedLayers[i];
            if (searchedLayerIds.includes(currentChechedId))foundInSearchAdress.push(currentChechedId);
          }
          if (!foundInSearchAdress.length){
            arrayErrors.push("Checked layers was no found on searched address")
          }
        }

        Widget.foundGeometry = searchWidget.graphicLayerFound;
    
        if(arrayErrors.length === 0 && idWidgetTable !== ""){
    
          jimuMapView.view.map.allLayers.items.forEach((f, index) =>{
            if(f && f.type==="feature" && checkedLayers.indexOf(f.id) !== -1){
              if(f.labelingInfo?.length){
                f.labelingInfo[0].symbol.font.family = "Arial";//fix font verdana not in static esri
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

          const object = {
            results:results,
            allCheckedLayers:searchWidget.getAllCheckedLayers(),
            isLayerChecked:true,
            checkedLayers:checkedLayers,
            numberOfAttributes:numberOfAttributes,
            layerOpen:layerOpen,
            createTable:true
          }


          // const allCheckedLayers = !searchByAddress ? searchWidget.getAllCheckedLayers():null;
          // const currentCheckedLayers = !searchByAddress ? checkedLayers:null;
          // const currentNumberOfAttributes = !searchByAddress ? numberOfAttributes:null;
          // const isLayerChecked = !searchByAddress ? true:false

          // const object = {
          //   results:results,
          //   allCheckedLayers:allCheckedLayers,
          //   isLayerChecked:isLayerChecked,
          //   checkedLayers:currentCheckedLayers,
          //   numberOfAttributes:currentNumberOfAttributes,
          //   layerOpen:layerOpen,
          //   createTable:true
          // }

          Widget.attributeConnector.init(object);
          try{
            Widget.attributeConnector.dispatchingAll();
          }
          catch(err){
            if (arrayErrors.length <= 0){
              const errorString = this.nls(err);
              arrayErrors.push(errorString)
              searchWidget.setState({errorMessage:arrayErrors.join()})
            }
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
                        
                    <CalciteAccordionItem active={true} itemTitle = {this.nls("selectAddress")}>
                        <div className="container-fluid mt-3 mb-3">
                            <div className="row">
                                <label>{this.nls("searchByAddress")}</label>
                                <div id="search-widget-search-advanced" className="w-100"></div>
                            </div>
                            <div className="row mt-2">
                                <label>{this.nls("searchByGeometry")}</label>
                                <div id="sketch-widget-search-advanced" className="w-100"></div>
                            </div>
                        </div>
                    </CalciteAccordionItem>

                    <CalciteAccordionItem icon-start="car" itemTitle = {this.nls("selectLayerQuery")}>
                        <div className="container-fluid mt-3 mb-3">
                            <div className="row">
                                <label>{this.nls("selectedLayers")}: {checkedLayers.length} / {arrayLayer.length}</label>
                                <MultiSelect
                                    items={arrayLayer}
                                    onClickItem={this.onChangeSelectLayer}
                                    placeholder={this.nls("listServices")}
                                    values = {checkedLayers}
                                />
                            </div>
                        </div>
                    </CalciteAccordionItem>

                    <CalciteAccordionItem icon-start="car" itemTitle = {this.nls("researchOption")}>
                        <div className="container-fluid mt-3 mb-3">
                            {filterValue === 2 && 
                                <div className="row">
                                    <label className="w-100">
                                        {this.nls("bufferValue")} <NumericInput defaultValue={valueBuffer} value={valueBuffer} onChange={this.onChangeSlider} className="d-inline-block w-50"/> m
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
                                        {this.nls("typeOfSelection")}
                                        <Select className="w-100 mt-2" onChange={this.onChangeSelectTypeGeometry} placeholder = {this.nls("typeSelection")}>
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

                    <CalciteAccordionItem icon-start="car" itemTitle = {this.nls("selectFilterType")}>
                        <div className="container-fluid mt-3 mb-3">
                            <SelectFilterType parent = {searchWidget} filterValue = {filterValue} />
                        </div>
                    </CalciteAccordionItem>

                </CalciteAccordion>

                <Button type= {disableButton ?"secondary" :"primary"} className="w-100" onClick={this.onClickResearch} disabled = {disableButton}>
                    {this.nls("searchInLayers")}
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