

import {React,jsx} from 'jimu-core';
import {MultiSelect,Select,Option,Slider,Button,NumericInput, Alert} from 'jimu-ui';
import {CalciteAccordion, CalciteAccordionItem} from "calcite-components";
import SelectFilterType from '../select_filter';
import { SearchWidgetContext } from '../../context/context';

export default class IndrizzoTab extends React.PureComponent<any,any>{

    static contextType?: React.Context<any> = SearchWidgetContext;

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
                                    onClickItem={searchWidget.onChangeSelectLayer}
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
                                        Valore di buffer <NumericInput defaultValue={valueBuffer} value={valueBuffer} onChange={searchWidget?.onChangeSlider} className="d-inline-block w-50"/> m
                                        <Slider
                                            className="w-100 mt-1"
                                            aria-label="Range"
                                            value={valueBuffer}
                                            defaultValue={valueBuffer}
                                            max={5000}
                                            min={0}
                                            onChange={searchWidget.onChangeSlider}
                                            step={1}
                                        />
                                    </label>
                                </div>}
                                <div className="row mb-3">
                                    <label className="w-100">
                                        Tipo di selezione
                                        <Select className="w-100 mt-2" onChange={searchWidget.onChangeSelectTypeGeometry} placeholder="Selezione tipo...">
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

                <Button type= {disableButton ?"secondary" :"primary"} className="w-100" onClick={searchWidget.onClickResearch} disabled = {disableButton}>
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