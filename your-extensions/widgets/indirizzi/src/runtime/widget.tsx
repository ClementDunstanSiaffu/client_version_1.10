/** @jsx jsx */
import {AllWidgetProps, appActions, jsx, React} from 'jimu-core'
import {IMConfig} from '../config'
import {Alert, Button, Checkbox, Label, MultiSelect, NumericInput, Option, Select, Slider, Tab, Tabs} from 'jimu-ui'
import GraphicsLayer from "esri/layers/GraphicsLayer";
import geometryEngine from "esri/geometry/geometryEngine";
import {JimuLayerView, JimuMapView, JimuMapViewComponent} from 'jimu-arcgis'
import {CalciteAccordion, CalciteAccordionItem} from "calcite-components";
import Graphic from 'esri/Graphic';
import Search from "esri/widgets/Search";
import Sketch from "esri/widgets/Sketch";
import coordinateFormatter from "esri/geometry/coordinateFormatter";
import webMercatorUtils from "esri/geometry/support/webMercatorUtils";
import FeatureLayer from 'esri/layers/FeatureLayer';
import LayerView from 'esri/views/layers/LayerView';

export default class Widget extends React.PureComponent<AllWidgetProps<IMConfig>, any> {

    static activeView = null;
    
    graphicLayerFound = new GraphicsLayer({id:"indirizzi-found-sketch",listMode:"hide",visible:true});
    graphicLayerSelected = new GraphicsLayer({id:"indirizzi-selected-sketch",listMode:"hide",visible:true});

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
    constructor (props) {
      super(props)

      this.state = {
          jimuMapView: null,
          labelVisible:true,
          viewSelectDraw: true,

          formExtraUrbano:{
              //TODO
          },

          //COORD
          long_e_1:12,
          long_e_2:62,
          long_e_3:86,
          lat_e_1:41,
          lat_e_2:80,
          lat_e_3:66,

          arrayLayer: [],
          valueBufferAddress: 0,
          valueBufferCoord: 0,
          geometry:null,
          typeSelected:null,
          listServices: []
      };

      this._viewLabels = this._viewLabels.bind(this);
      this._viewSelectDraw = this._viewSelectDraw.bind(this);
      this.activeViewChangeHandler = this.activeViewChangeHandler.bind(this);
      this.saveState = this.saveState.bind(this);
      this.onChangeTabs = this.onChangeTabs.bind(this)

      this.onChangeSliderAddress = this.onChangeSliderAddress.bind(this);
      this.onChangeSliderCoord = this.onChangeSliderCoord.bind(this);
      this.onChangeSelectTypeGeometry = this.onChangeSelectTypeGeometry.bind(this);
      this.onChangeFileCsvCoordinate = this.onChangeFileCsvCoordinate.bind(this);
      this.onChangeSelectLayer = this.onChangeSelectLayer.bind(this);
      this.onClickResearchfromAddress = this.onClickResearchfromAddress.bind(this);
      this.onClickResearchfromCoord = this.onClickResearchfromCoord.bind(this);

    }

    getActiveView(){
        return Widget.activeView;
    }
    
    getFeatureLayer (){
        const featureUrl = this.props.config.services.service_1.url;
        return new FeatureLayer({url:featureUrl,outFields: ["*"]});
    }
    
    activeViewChangeHandler (jmv: JimuMapView) {
        if (jmv) {
            jmv.view.map.add(this.graphicLayerFound);
            jmv.view.map.add(this.graphicLayerSelected);
            Widget.activeView = jmv;
            let arraySup = [];

            // const featureLayer = this.getFeatureLayer();
            // const layerViewProps = new LayerView({layer:featureLayer,visible:true,spatialReferenceSupported:true})
            // const layerView = new JimuLayerView({layer:featureLayer,view:layerViewProps});
            // jmv.view.map.add(featureLayer);

            const services = this.props.config.services
            const serviceItems = Object.keys(services);
            serviceItems.forEach((key)=>{
                arraySup.push({
                    label:services[key].title,
                    value:key
                })
            })

            // jmv.view.map.allLayers.forEach((f, index) =>{
            //     if(f.type === "feature"){
            //         arraySup.push({
            //             label:f.title,
            //             value:f.id
            //         });
            //     }
            // });


            //TODO -we don't use it now//
            // const sketch = new Sketch({
            //     layer: this.graphicLayerFound,
            //     view: jmv.view,
            //     creationMode:"single",
            //     container: "sketch-widget-address",//TODO migliorare senza id cablato
            //     availableCreateTools:["polygon", "rectangle", "circle","point"],
            //     visibleElements: {
            //         selectionTools:{
            //             "lasso-selection": false
            //         },
            //         settingsMenu: false
            //     }
            // });

            // sketch.on("create", (event)=>{
            //     jmv.view.graphics.removeAll();
            //     this.graphicLayerFound.removeAll();

            //     if (event.state === "complete") {
            //         const polygonGraphic = new Graphic({
            //             geometry: event.graphic.geometry,
            //             symbol: this.symbolFound
            //         });

            //         this.graphicLayerFound.add(polygonGraphic);
            //     }
            // });

            // const sources = [{
            //     layer:featureLayer,
            //     maxResults: 5,
            //     searchFields:featureLayer.displayField,
            //     displayField:featureLayer.displayField,
            //     maxSuggestions: 6,
            //     exactMatch:false,
            //     minSuggestCharacters:0,
            //     outFields: ["*"],
            // }]

            const searchWidget = new Search({
                view: jmv.view,
                // sources:sources,
                container: "search-widget-address"//TODO migliorare senza id cablato
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

            this.setState({
                arrayLayer: arraySup,
                jimuMapView: jmv,
                searchWidget:searchWidget,
                // sketchWidget:sketch
            });
        }
    }

    onChangeTabs(){
        this.graphicLayerFound.removeAll();
        this.graphicLayerSelected.removeAll();
    }
    _viewLabels(){
        this.setState({
            labelVisible: !this.state.labelVisible
        });
    }

    _viewSelectDraw(){
        this.setState({
            viewSelectDraw: !this.state.viewSelectDraw
        });
        this.graphicLayerFound.visible = this.state.viewSelectDraw;
    }

    //ExtraUrbano
    onChangeExtraUrbano(e,type){
      if(type=="indirizzo"){
          this.state.formExtraUrbano.indirizzo = e.target.value;
          this.setState(this.state);
      }
      else{
          this.state.formExtraUrbano.km = e.target.value;
          this.setState(this.state);
      }

    }
    saveState(key,e){
        const stateNew = {}
        stateNew[key] = e.target ? e.target.value: e;

        this.setState(stateNew);
    }
    async onChangeSelectLayer (e,n,s){
        const view = this.state.jimuMapView.view;
        // const layer = view.map.allLayers.find((item)=>item.id === n);
        if(e.target.checked){
            const copiedListServices = [...this.state.listServices,n];
            this.setState({listServices:copiedListServices})
            // this.state.listServices.push(n);
            // view.goTo(layer.fullExtent)
        }else{
            let index = this.state.listServices.indexOf(n);
            if (index > -1) {
                const copiedListServices = [...this.state.listServices];
                copiedListServices.splice(index,1);
                this.setState({listServices:copiedListServices})
                // this.state.listServices.splice(index,1);
            }
        }

        // this.setState(this.state);
    }
    onChangeSelectTypeGeometry(e){
        // @ts-ignore
        this.state.typeSelected = e.target.value;
        this.setState(this.state);
    }

    csvToArray(str, delimiter = ",") {
        const headers = str.slice(0, str.indexOf("\n")).slice(0, str.indexOf("\r")).split(delimiter);
        const rows = str.slice(str.indexOf("\n") + 1).split("\n");
        return rows.map(function (row) {
            const values = row.split(delimiter);
            return headers.reduce(function (object, header, index) {
                object[header] = values[index];
                return object;
            }, {});
        });
    }

    async onChangeFileCsvCoordinate(e){
        await coordinateFormatter.load();
    }

    onChangeSliderAddress(e){
        this.setState({
            valueBufferAddress: parseInt(isNaN(e) ? e.target.value: e)
        });
    }
    onChangeSliderCoord(e){
        this.setState({
            valueBufferCoord: parseInt(isNaN(e) ? e.target.value: e)
        });
    }
    async onClickResearchfromAddress(){
        this.state.jimuMapView.view.map.tables.removeAll();

        //parametri form
        let arrayGeometry = [];
        //TODO PRENDERE GEOMETRIA
        this.graphicLayerFound.graphics.forEach(g=>{
            // @ts-ignore
            g.geometry = geometryEngine.buffer(g.geometry, this.state.valueBufferAddress, "meters");
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

        if(arrayErrors.length === 0 && this.props.config.settings.idWidgetTable !== ""){

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
                    this.props.config.settings.idWidgetTable,
                    "layerOpen",
                    {
                        typeSelected:this.state.typeSelected,
                        geometry:this.state.geometry.toJSON(),
                        listServices:this.state.listServices,
                        activeView:this.getActiveView
                    }
                )
            );
        }
    }
    async onClickResearchfromCoord(){
        this.state.jimuMapView.view.map.tables.removeAll();
        let long = this.state.long_e_1 + "." + this.state.long_e_2 + this.state.long_e_3 + "*";
        let lat = this.state.lat_e_1 + "." + this.state.lat_e_2 + this.state.lat_e_3 + "*";

        await coordinateFormatter.load();
        let pointGeographic = coordinateFormatter.fromLatitudeLongitude(lat + "|" + long);
        let point = webMercatorUtils.geographicToWebMercator(pointGeographic);

        this.state.jimuMapView.view.goTo(point);

        let geometry = geometryEngine.buffer(point, 1, "meters");
        const polygonGraphic = new Graphic({
            //@ts-ignore
            geometry: geometry,
            symbol: this.symbolFound
        });


        this.graphicLayerFound.add(polygonGraphic);

        let arrayGeometry = [];
        //TODO PRENDERE GEOMETRIA
        this.graphicLayerFound.graphics.forEach(g=>{
            // @ts-ignore
            g.geometry = geometryEngine.buffer(g.geometry, this.state.valueBufferCoord, "meters");
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

        if(arrayErrors.length === 0 && this.props.config.settings.idWidgetTable !== ""){

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
                    this.props.config.settings.idWidgetTable,
                    "layerOpen",
                    {
                        typeSelected:this.state.typeSelected,
                        geometry:this.state.geometry.toJSON(),
                        listServices:this.state.listServices
                    }
                )
            );
        }
    }


  render () {
    return (
        <div className="widget-address jimu-widget  container-fluid" style={{overflow:"auto"}}>
            {this.props.hasOwnProperty('useMapWidgetIds') && this.props.useMapWidgetIds && this.props.useMapWidgetIds[0] && (
                <JimuMapViewComponent useMapWidgetId={this.props.useMapWidgetIds?.[0]} onActiveViewChange={this.activeViewChangeHandler} />
            )}
            <div className="row mt-3 mb-1">
                <div className="col-md-12">
                    <Label centric check>
                        <Checkbox className="mr-2" aria-label="Visualizza disegno selezione" checked={this.graphicLayerFound.visible} onChange={this._viewSelectDraw}/>
                        Visualizza disegno selezione
                    </Label>
                </div>
            </div>
            <div className="row mt-3 mb-3">
                <div className="col-md-12">
                    <Label centric check>
                        <Checkbox className="mr-2" aria-label="Visualizza disegno selezione" checked={this.state.labelVisible} onChange={this._viewLabels}/>
                        Visualizza etichette
                    </Label>
                </div>
            </div>
            <Tabs
                defaultValue="tab-1"
                onChange={this.onChangeTabs}
                type="tabs"
            >
                <Tab id="search-advanced-tab-Urbano" className=" p-1" title="Urbano">
                    <div>
                        <div className="container-fluid mt-3 mb-3">
                            <div className="row">
                                <label>Ricerca per indirizzo</label>
                                <div id="search-widget-address" className="w-100"></div>
                            </div>
                        </div>
                        <CalciteAccordion className="mt-4 mb-2">
                            <CalciteAccordionItem icon-start="car" itemTitle="Seleziona layers da interrogare">
                                <div className="container-fluid mt-3 mb-3">
                                    <div className="row">
                                        <label>Layer selezionati: {this.state.listServices.length} / {this.state.arrayLayer.length}</label>
                                        <MultiSelect
                                            items={this.state.arrayLayer}
                                            onClickItem={this.onChangeSelectLayer}
                                            placeholder="Lista servizi"
                                        />
                                    </div>
                                </div>
                            </CalciteAccordionItem>
                            <CalciteAccordionItem icon-start="car" itemTitle="Opzione di ricerca">
                                <div className="container-fluid mt-3 mb-3">
                                    <div className="row">
                                        <label className="w-100">
                                            Valore di buffer <NumericInput defaultValue={this.state.valueBufferAddress} value={this.state.valueBufferAddress} onChange={this.onChangeSliderAddress} className="d-inline-block w-50"/> m
                                            <Slider
                                                className="w-100 mt-1"
                                                aria-label="Range"
                                                value={this.state.valueBufferAddress}
                                                defaultValue={this.state.valueBufferAddress}
                                                max={5000}
                                                min={0}
                                                onChange={this.onChangeSliderAddress}
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

                        <Button type="primary" className="w-100" onClick={this.onClickResearchfromAddress}>Ricerca nei layer</Button>

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
                {/*<Tab id="search-advanced-tab-Extraurbano" className="d-flex flex-column p-1" title="Extraurbano">
                    <div className="row mt-2 mb-1">
                        <div className="col-md-12">
                                <Label className="d-flex flex-row align-items-center">
                                    <div className="w-25">Indirizzo:</div>
                                    <TextInput
                                        type="text"
                                        className="w-75"
                                        placeholder="Indirizzo"
                                    />
                                </Label>
                        </div>
                    </div>
                    <div className="row mb-1">
                        <div className="col-md-12">
                            <div>
                                <Label className="d-flex flex-row align-items-center">
                                    <div className="w-25">Km:</div>
                                    <TextInput
                                        type="text"
                                        className="w-75"
                                        placeholder="Km"
                                    />
                                </Label>
                            </div>
                        </div>
                    </div>
                </Tab>*/}
                <Tab id="search-advanced-tab-Coord" className="d-flex flex-column p-1" title="Coordinate">
                    <div>
                        <div className="container-fluid mt-3 mb-3">
                            <div className="row mt-2 mb-1">
                                <div className="col-md-12 mb-2">
                                    <label className="w-25">
                                        Long. (X):
                                    </label>
                                    <NumericInput onChange={(e) => this.saveState('long_e_1',e)} value={this.state.long_e_1} className="d-inline-block w-25"/>
                                    <NumericInput onChange={(e) => this.saveState('long_e_2',e)} value={this.state.long_e_2} className="d-inline-block w-25"/>
                                    <NumericInput onChange={(e) => this.saveState('long_e_3',e)} value={this.state.long_e_3} className="d-inline-block w-25"/>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <div className="col-md-12">
                                    <label className="w-25">
                                        Lat. (Y):
                                    </label>
                                    <NumericInput onChange={(e) => this.saveState('lat_e_1',e)} value={this.state.lat_e_1} className="d-inline-block w-25"/>
                                    <NumericInput onChange={(e) => this.saveState('lat_e_2',e)} value={this.state.lat_e_2} className="d-inline-block w-25"/>
                                    <NumericInput onChange={(e) => this.saveState('lat_e_3',e)} value={this.state.lat_e_3} className="d-inline-block w-25"/>
                                </div>
                            </div>
                        </div>
                        <CalciteAccordion className="mt-4 mb-2">
                            <CalciteAccordionItem icon-start="car" itemTitle="Seleziona layers da interrogare">
                                <div className="container-fluid mt-3 mb-3">
                                    <div className="row">
                                        <label>Layer selezionati: {this.state.listServices.length} / {this.state.arrayLayer.length}</label>
                                        <MultiSelect
                                            items={this.state.arrayLayer}
                                            onClickItem={this.onChangeSelectLayer}
                                            placeholder="Lista servizi"
                                        />
                                    </div>
                                </div>
                            </CalciteAccordionItem>
                            <CalciteAccordionItem icon-start="car" itemTitle="Opzione di ricerca">
                                <div className="container-fluid mt-3 mb-3">
                                    <div className="row">
                                        <label className="w-100">
                                            Valore di buffer <NumericInput defaultValue={this.state.valueBufferCoord} value={this.state.valueBufferCoord} onChange={this.onChangeSliderCoord} className="d-inline-block w-50"/> m
                                            <Slider
                                                className="w-100 mt-1"
                                                aria-label="Range"
                                                value={this.state.valueBufferCoord}
                                                defaultValue={this.state.valueBufferCoord}
                                                max={5000}
                                                min={0}
                                                onChange={this.onChangeSliderCoord}
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

                        <Button type="primary" className="w-100" onClick={this.onClickResearchfromCoord}>Ricerca nei layer</Button>

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
                <Tab id="search-advanced-tab-Coord-file" className="d-flex flex-column p-1" title="Multicoordinate da file">
                    <div>
                        <div className="container-fluid mt-3 mb-3">
                            <div className="row mb-3">
                                <label className="w-100 form-label">
                                    Aggiungi un file CSV
                                </label>

                                <input className="form-control" type="file" onChange={this.onChangeFileCsvCoordinate}/>

                                <div className="mt-2 form-text">
                                    Il file deve essere formattato con tre campi ID,Y,X.
                                    (Esempio: Punto_1,38.72323056,16.49598056)
                                </div>
                            </div>
                        </div>
                        <CalciteAccordion className="mt-4 mb-2">
                            <CalciteAccordionItem icon-start="car" itemTitle="Seleziona layers da interrogare">
                                <div className="container-fluid mt-3 mb-3">
                                    <div className="row">
                                        <label>Layer selezionati: {this.state.listServices.length} / {this.state.arrayLayer.length}</label>
                                        <MultiSelect
                                            items={this.state.arrayLayer}
                                            onClickItem={this.onChangeSelectLayer}
                                            placeholder="Lista servizi"
                                        />
                                    </div>
                                </div>
                            </CalciteAccordionItem>
                            <CalciteAccordionItem icon-start="car" itemTitle="Opzione di ricerca">
                                <div className="container-fluid mt-3 mb-3">
                                    <div className="row">
                                        <label className="w-100">
                                            Valore di buffer <NumericInput defaultValue={this.state.valueBufferCoord} value={this.state.valueBufferCoord} onChange={this.onChangeSliderCoord} className="d-inline-block w-50"/> m
                                            <Slider
                                                className="w-100 mt-1"
                                                aria-label="Range"
                                                value={this.state.valueBufferCoord}
                                                defaultValue={this.state.valueBufferCoord}
                                                max={5000}
                                                min={0}
                                                onChange={this.onChangeSliderCoord}
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

                        <Button type="primary" className="w-100" onClick={this.onClickResearchfromCoord}>Ricerca nei layer</Button>

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
            </Tabs>
        </div>

    )
  }
}
