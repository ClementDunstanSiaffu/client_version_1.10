System.register(["jimu-core","jimu-ui","esri/layers/GraphicsLayer","esri/geometry/geometryEngine","jimu-arcgis","calcite-components","esri/Graphic","esri/widgets/Search","esri/widgets/Sketch","esri/geometry/coordinateFormatter","esri/geometry/support/webMercatorUtils","esri/layers/FeatureLayer"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_calcite_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_Graphic__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_Search__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_Sketch__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_coordinateFormatter__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_calcite_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_Graphic__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_widgets_Search__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_widgets_Sketch__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_coordinateFormatter__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_calcite_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_Graphic__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_widgets_Search__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_widgets_Sketch__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_coordinateFormatter__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-core/lib/set-public-path.ts":
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;


/***/ }),

/***/ "./your-extensions/widgets/indirizzi_new/src/helper/helper.ts":
/*!********************************************************************!*\
  !*** ./your-extensions/widgets/indirizzi_new/src/helper/helper.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esri/layers/FeatureLayer */ "esri/layers/FeatureLayer");
/* harmony import */ var _runtime_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../runtime/widget */ "./your-extensions/widgets/indirizzi_new/src/runtime/widget.tsx");


class Helper {
    constructor() {
        this.getServiceName = (serviceUrl, serviceKey) => {
            let serviceName = serviceKey;
            const stringArray = serviceUrl.split("/");
            const serviceIndex = stringArray.indexOf("services");
            if (serviceIndex !== -1) {
                if (stringArray[serviceIndex + 1]) {
                    serviceName = stringArray[serviceIndex + 1];
                }
            }
            return serviceName;
        };
        this.queryFeatureService = (url) => {
            // const queryObject = new Query();
            // queryObject.returnGeometry = true;
            // queryObject.where = "1=1"
            // const results = await query.executeQueryJSON(url, queryObject);
            try {
                const layer = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_0__["default"]({ url: url });
                return layer;
            }
            catch (err) {
                return null;
            }
        };
        this.getSelectedLayerFromSearch = (results) => {
            const selectedIds = [];
            if (results.length > 0) {
                for (let i = 0; i < results.length; i++) {
                    const innerResults = results[i];
                    if (innerResults.length) {
                        for (let j = 0; j < innerResults.length; j++) {
                            const layer = innerResults[j].layer;
                            const object = { featureServer: layer.url, id: layer.layerId };
                            _runtime_widget__WEBPACK_IMPORTED_MODULE_1__["default"].layers.push({ url: layer.url, layer: layer });
                            const index = selectedIds.findIndex((item) => item.id === layer.layerId && item.featureServer === layer.url);
                            if (index === -1) {
                                selectedIds.push(object);
                            }
                        }
                    }
                }
            }
            return selectedIds;
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Helper());


/***/ }),

/***/ "./your-extensions/widgets/indirizzi_new/src/runtime/widget.tsx":
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/indirizzi_new/src/runtime/widget.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri/layers/GraphicsLayer */ "esri/layers/GraphicsLayer");
/* harmony import */ var esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/geometry/geometryEngine */ "esri/geometry/geometryEngine");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var calcite_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! calcite-components */ "calcite-components");
/* harmony import */ var esri_Graphic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esri/Graphic */ "esri/Graphic");
/* harmony import */ var esri_widgets_Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! esri/widgets/Search */ "esri/widgets/Search");
/* harmony import */ var esri_widgets_Sketch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esri/widgets/Sketch */ "esri/widgets/Sketch");
/* harmony import */ var esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! esri/geometry/coordinateFormatter */ "esri/geometry/coordinateFormatter");
/* harmony import */ var esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! esri/geometry/support/webMercatorUtils */ "esri/geometry/support/webMercatorUtils");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helper/helper */ "./your-extensions/widgets/indirizzi_new/src/helper/helper.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */












class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.graphicLayerFound = new esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_2__["default"]({ id: "indirizzi-found-sketch", listMode: "hide", visible: true });
        this.graphicLayerSelected = new esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_2__["default"]({ id: "indirizzi-selected-sketch", listMode: "hide", visible: true });
        this.symbolFound = {
            type: "simple-fill",
            color: [51, 51, 204, 0.5],
            style: "solid",
            outline: {
                style: "short-dash",
                color: "white",
                width: 3
            }
        };
        this.getActiveView = () => Widget.activeView;
        this.getAllCheckedLayers = () => Widget.allCheckedLayers;
        this.state = {
            jimuMapView: null,
            labelVisible: true,
            viewSelectDraw: true,
            formExtraUrbano: {
            //TODO
            },
            //COORD
            long_e_1: 12,
            long_e_2: 62,
            long_e_3: 86,
            lat_e_1: 41,
            lat_e_2: 80,
            lat_e_3: 66,
            arrayLayer: [],
            valueBufferAddress: 0,
            valueBufferCoord: 0,
            geometry: null,
            typeSelected: null,
            listServices: [],
            selectedCount: 0,
            searchedLayers: []
        };
        this.arrayView = Object.assign([], this.props.config.listvalues);
        this._viewLabels = this._viewLabels.bind(this);
        this._viewSelectDraw = this._viewSelectDraw.bind(this);
        this.activeViewChangeHandler = this.activeViewChangeHandler.bind(this);
        this.saveState = this.saveState.bind(this);
        this.onChangeTabs = this.onChangeTabs.bind(this);
        this.onChangeSliderAddress = this.onChangeSliderAddress.bind(this);
        this.onChangeSliderCoord = this.onChangeSliderCoord.bind(this);
        this.onChangeSelectTypeGeometry = this.onChangeSelectTypeGeometry.bind(this);
        this.onChangeFileCsvCoordinate = this.onChangeFileCsvCoordinate.bind(this);
        this.onChangeSelectLayer = this.onChangeSelectLayer.bind(this);
        this.onClickResearchfromAddress = this.onClickResearchfromAddress.bind(this);
        this.onClickResearchfromCoord = this.onClickResearchfromCoord.bind(this);
        this.getAllCheckedLayers = this.getAllCheckedLayers.bind(this);
    }
    activeViewChangeHandler(jmv) {
        if (jmv) {
            jmv.view.map.add(this.graphicLayerFound);
            jmv.view.map.add(this.graphicLayerSelected);
            let arraySup = [];
            this.arrayView.forEach((el, index) => {
                arraySup.push({
                    label: el.name,
                    value: el
                });
            });
            const sketch = new esri_widgets_Sketch__WEBPACK_IMPORTED_MODULE_8__["default"]({
                layer: this.graphicLayerFound,
                view: jmv.view,
                creationMode: "single",
                container: "sketch-widget-address",
                availableCreateTools: ["polygon", "rectangle", "circle", "point"],
                visibleElements: {
                    selectionTools: {
                        "lasso-selection": false
                    },
                    settingsMenu: false
                }
            });
            sketch.on("create", (event) => {
                jmv.view.graphics.removeAll();
                this.graphicLayerFound.removeAll();
                if (event.state === "complete") {
                    const polygonGraphic = new esri_Graphic__WEBPACK_IMPORTED_MODULE_6__["default"]({
                        geometry: event.graphic.geometry,
                        symbol: this.symbolFound
                    });
                    this.graphicLayerFound.add(polygonGraphic);
                }
            });
            const searchWidget = new esri_widgets_Search__WEBPACK_IMPORTED_MODULE_7__["default"]({
                view: jmv.view,
                container: "search-widget-address" //TODO migliorare senza id cablato
            });
            searchWidget.on("select-result", (event) => {
                if (event && event.result && event.result.feature) {
                    jmv.view.graphics.removeAll();
                    this.graphicLayerFound.removeAll();
                    //@ts-ignore
                    const geometryBuffer = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_3__["default"].buffer(event.result.feature.geometry, 1000, "meters");
                    // const geometryBuffer: Polygon = geometryEngine.buffer( event.result.feature.geometry, 1, "meters");
                    const polygonGraphic = new esri_Graphic__WEBPACK_IMPORTED_MODULE_6__["default"]({
                        geometry: geometryBuffer,
                        symbol: this.symbolFound
                    });
                    jmv.selectFeaturesByGraphic(polygonGraphic, "contains").then((results) => {
                        const searchedLayers = _helper_helper__WEBPACK_IMPORTED_MODULE_11__["default"].getSelectedLayerFromSearch(results);
                        this.setState({ searchedLayers: searchedLayers });
                    });
                    this.graphicLayerFound.add(polygonGraphic);
                }
            });
            searchWidget.on("search-clear", (event) => {
                this.graphicLayerFound.removeAll();
            });
            Widget.activeView = jmv;
            this.setState({
                arrayLayer: arraySup,
                jimuMapView: jmv,
                searchWidget: searchWidget,
                sketchWidget: sketch
            });
        }
    }
    onChangeTabs() {
        this.graphicLayerFound.removeAll();
        this.graphicLayerSelected.removeAll();
    }
    _viewLabels() {
        this.setState({
            labelVisible: !this.state.labelVisible
        });
    }
    _viewSelectDraw() {
        this.setState({
            viewSelectDraw: !this.state.viewSelectDraw
        });
        this.graphicLayerFound.visible = this.state.viewSelectDraw;
    }
    //ExtraUrbano
    onChangeExtraUrbano(e, type) {
        if (type == "indirizzo") {
            this.state.formExtraUrbano.indirizzo = e.target.value;
            this.setState(this.state);
        }
        else {
            this.state.formExtraUrbano.km = e.target.value;
            this.setState(this.state);
        }
    }
    saveState(key, e) {
        const stateNew = {};
        stateNew[key] = e.target ? e.target.value : e;
        this.setState(stateNew);
    }
    onChangeSelectLayer(e, n, s) {
        const arrayId = n.listIds.split(",");
        for (let i = 0; i < arrayId.length; i++) {
            const id = arrayId[i];
            const url = n.link.slice(-1) !== "/" ? n.link + "/" + id : n.link + id;
            if (e.target.checked) {
                this.state.listServices.push(url);
            }
            else {
                let index = this.state.listServices.indexOf(url);
                if (index > -1) {
                    this.state.listServices.splice(index, 1);
                }
            }
        }
        this.setState(this.state);
    }
    onChangeSelectTypeGeometry(e) {
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
    onChangeFileCsvCoordinate(e) {
        return __awaiter(this, void 0, void 0, function* () {
            yield esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_9__["default"].load();
        });
    }
    onChangeSliderAddress(e) {
        this.setState({
            valueBufferAddress: parseInt(isNaN(e) ? e.target.value : e)
        });
    }
    onChangeSliderCoord(e) {
        this.setState({
            valueBufferCoord: parseInt(isNaN(e) ? e.target.value : e)
        });
    }
    onClickResearchfromAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            this.state.jimuMapView.view.map.tables.removeAll();
            //parametri form
            let arrayGeometry = [];
            const urls = [];
            const listServices = this.state.listServices;
            if (listServices.length) {
                listServices.forEach((el, index) => {
                    const currentUrl = el.substr(0, el.length - 3);
                    if (urls.length) {
                        if (!urls.includes(currentUrl)) {
                            urls.push(currentUrl);
                        }
                    }
                    else {
                        urls.push(currentUrl);
                    }
                });
            }
            //TODO PRENDERE GEOMETRIA
            this.graphicLayerFound.graphics.forEach(g => {
                const searchedLayers = this.state.searchedLayers;
                if (searchedLayers.length && urls.length) {
                    searchedLayers.forEach((el) => {
                        if (urls.includes(el.featureServer)) {
                            const layer = this.arrayView.find((item) => item.link === el.featureServer);
                            const layersIds = layer ? layer.listIds : [];
                            if (layersIds.length && layersIds.includes(el.id)) {
                                let checkedLayers = null;
                                if (Widget.layers.length) {
                                    checkedLayers = Widget.layers.find((layer) => layer.url === el.featureServer);
                                }
                                if (checkedLayers) {
                                    Widget.allCheckedLayers.push(checkedLayers);
                                }
                                // @ts-ignore
                                g.geometry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_3__["default"].buffer(g.geometry, this.state.valueBufferAddress, "meters");
                                arrayGeometry.push(g.geometry);
                            }
                        }
                    });
                }
                // // @ts-ignore
                // g.geometry = geometryEngine.buffer(g.geometry, this.state.valueBufferAddress, "meters");
                // arrayGeometry.push(g.geometry);
            });
            //controllo errori
            let arrayErrors = [];
            if (arrayGeometry.length) { // @ts-ignore
                this.state.geometry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_3__["default"].union(arrayGeometry);
            }
            else
                arrayErrors.push("Seleziona una geometria in mappa");
            if (!this.state.listServices.length)
                arrayErrors.push("Seleziona almeno un servizio");
            if (!this.state.typeSelected)
                arrayErrors.push("Seleziona una tipologia di selezione");
            this.setState({
                errorMessage: arrayErrors.join()
            });
            if (arrayErrors.length === 0 && this.props.config.idWidgetTable !== "") {
                // TODO Qui rende visibile la corrispondenza dell'indice trovato ma adesso bisogna farla sul layer inserito nel config
                this.state.jimuMapView.view.map.allLayers.forEach((f, index) => {
                    var _a;
                    if (f && f.type === "feature" && this.state.listServices.indexOf(index) !== -1) {
                        if ((_a = f.labelingInfo) === null || _a === void 0 ? void 0 : _a.length) {
                            console.log(f);
                            f.labelingInfo[0].symbol.font.family = "Arial"; //fix font verdana not in static esri
                            f.labelsVisible = this.state.labelVisible;
                        }
                    }
                });
                console.log(this.state.geometry.toJSON());
                //mando layerid ad TableList
                this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "layerOpen", {
                    listServiceUrl: true,
                    typeSelected: this.state.typeSelected,
                    geometry: this.state.geometry.toJSON(),
                    listServices: this.state.listServices,
                }));
            }
        });
    }
    onClickResearchfromCoord() {
        return __awaiter(this, void 0, void 0, function* () {
            this.state.jimuMapView.view.map.tables.removeAll();
            let long = this.state.long_e_1 + "." + this.state.long_e_2 + this.state.long_e_3 + "*";
            let lat = this.state.lat_e_1 + "." + this.state.lat_e_2 + this.state.lat_e_3 + "*";
            yield esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_9__["default"].load();
            let pointGeographic = esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_9__["default"].fromLatitudeLongitude(lat + "|" + long);
            let point = esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_10__["default"].geographicToWebMercator(pointGeographic);
            this.state.jimuMapView.view.goTo(point);
            let geometry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_3__["default"].buffer(point, 1, "meters");
            const polygonGraphic = new esri_Graphic__WEBPACK_IMPORTED_MODULE_6__["default"]({
                //@ts-ignore
                geometry: geometry,
                symbol: this.symbolFound
            });
            this.graphicLayerFound.add(polygonGraphic);
            let arrayGeometry = [];
            //TODO PRENDERE GEOMETRIA
            this.graphicLayerFound.graphics.forEach(g => {
                // @ts-ignore
                g.geometry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_3__["default"].buffer(g.geometry, this.state.valueBufferCoord, "meters");
                arrayGeometry.push(g.geometry);
            });
            //controllo errori
            let arrayErrors = [];
            if (arrayGeometry.length) { // @ts-ignore
                this.state.geometry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_3__["default"].union(arrayGeometry);
            }
            else
                arrayErrors.push("Seleziona una geometria in mappa");
            if (!this.state.listServices.length)
                arrayErrors.push("Seleziona almeno un servizio");
            if (!this.state.typeSelected)
                arrayErrors.push("Seleziona una tipologia di selezione");
            this.setState({
                errorMessage: arrayErrors.join()
            });
            if (arrayErrors.length === 0 && this.props.config.idWidgetTable !== "") {
                this.state.jimuMapView.view.map.allLayers.forEach((f, index) => {
                    var _a;
                    if (f && f.type === "feature" && this.state.listServices.indexOf(index) !== -1) {
                        if ((_a = f.labelingInfo) === null || _a === void 0 ? void 0 : _a.length) {
                            f.labelingInfo[0].symbol.font.family = "Arial"; //fix font verdana not in static esri
                            f.labelsVisible = this.state.labelVisible;
                        }
                    }
                });
                //mando layerid ad TableList
                this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(this.props.config.idWidgetTable, "layerOpen", {
                    listServiceUrl: true,
                    typeSelected: this.state.typeSelected,
                    geometry: this.state.geometry.toJSON(),
                    listServices: this.state.listServices
                }));
            }
        });
    }
    render() {
        var _a;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-address jimu-widget  container-fluid", style: { overflow: "auto" } },
            this.props.hasOwnProperty('useMapWidgetIds') && this.props.useMapWidgetIds && this.props.useMapWidgetIds[0] && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.JimuMapViewComponent, { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: this.activeViewChangeHandler })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mt-3 mb-1" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-md-12" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { centric: true, check: true },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, { className: "mr-2", "aria-label": "Visualizza disegno selezione", checked: this.graphicLayerFound.visible, onChange: this._viewSelectDraw }),
                        "Visualizza disegno selezione"))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mt-3 mb-3" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-md-12" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { centric: true, check: true },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, { className: "mr-2", "aria-label": "Visualizza disegno selezione", checked: this.state.labelVisible, onChange: this._viewLabels }),
                        "Visualizza etichette"))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tabs, { defaultValue: "tab-1", onChange: this.onChangeTabs, type: "tabs" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tab, { id: "search-advanced-tab-Urbano", className: " p-1", title: "Urbano" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", null, "Ricerca per indirizzo"),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: "search-widget-address", className: "w-100" }))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordion, { className: "mt-4 mb-2" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordionItem, { "icon-start": "car", itemTitle: "Seleziona layers da interrogare" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.MultiSelect, { items: this.state.arrayLayer, onClickItem: this.onChangeSelectLayer, placeholder: "Lista servizi" })))),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordionItem, { "icon-start": "car", itemTitle: "Opzione di ricerca" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-100" },
                                            "Valore di buffer ",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { defaultValue: this.state.valueBufferAddress, value: this.state.valueBufferAddress, onChange: this.onChangeSliderAddress, className: "d-inline-block w-50" }),
                                            " m",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Slider, { className: "w-100 mt-1", "aria-label": "Range", value: this.state.valueBufferAddress, defaultValue: this.state.valueBufferAddress, max: 5000, min: 0, onChange: this.onChangeSliderAddress, step: 1 }))),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mb-3" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-100" },
                                            "Tipo di selezione",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { className: "w-100 mt-2", onChange: this.onChangeSelectTypeGeometry, placeholder: "Selezione tipo..." },
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "intersects", selected: "selected" }, "Intersects"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "contains" }, "Contains"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "crosses" }, "Crosses"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "envelope-intersects" }, "Envelope Intersects"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "index-intersects" }, "Index Intersects"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "Overlaps" }, "Overlaps"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "touches" }, "Touches"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "within" }, "Within"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "relation" }, "Relation"))))))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: "primary", className: "w-100", onClick: this.onClickResearchfromAddress }, "Ricerca nei layer"),
                        this.state.errorMessage && this.state.errorMessage !== "" ? ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { form: "basic", open: true, text: this.state.errorMessage, type: "warning", className: "mt-2 w-100", withIcon: true })) : (""))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tab, { id: "search-advanced-tab-Coord", className: "d-flex flex-column p-1", title: "Coordinate" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mt-2 mb-1" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-md-12 mb-2" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-25" }, "Long. (X):"),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { onChange: (e) => this.saveState('long_e_1', e), value: this.state.long_e_1, className: "d-inline-block w-25" }),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { onChange: (e) => this.saveState('long_e_2', e), value: this.state.long_e_2, className: "d-inline-block w-25" }),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { onChange: (e) => this.saveState('long_e_3', e), value: this.state.long_e_3, className: "d-inline-block w-25" }))),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mb-1" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-md-12" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-25" }, "Lat. (Y):"),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { onChange: (e) => this.saveState('lat_e_1', e), value: this.state.lat_e_1, className: "d-inline-block w-25" }),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { onChange: (e) => this.saveState('lat_e_2', e), value: this.state.lat_e_2, className: "d-inline-block w-25" }),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { onChange: (e) => this.saveState('lat_e_3', e), value: this.state.lat_e_3, className: "d-inline-block w-25" })))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordion, { className: "mt-4 mb-2" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordionItem, { "icon-start": "car", itemTitle: "Seleziona layers da interrogare" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.MultiSelect, { items: this.state.arrayLayer, onClickItem: this.onChangeSelectLayer, placeholder: "Lista servizi" })))),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordionItem, { "icon-start": "car", itemTitle: "Opzione di ricerca" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-100" },
                                            "Valore di buffer ",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { defaultValue: this.state.valueBufferCoord, value: this.state.valueBufferCoord, onChange: this.onChangeSliderCoord, className: "d-inline-block w-50" }),
                                            " m",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Slider, { className: "w-100 mt-1", "aria-label": "Range", value: this.state.valueBufferCoord, defaultValue: this.state.valueBufferCoord, max: 5000, min: 0, onChange: this.onChangeSliderCoord, step: 1 }))),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mb-3" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-100" },
                                            "Tipo di selezione",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { className: "w-100 mt-2", onChange: this.onChangeSelectTypeGeometry, placeholder: "Selezione tipo..." },
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "intersects", selected: "selected" }, "Intersects"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "contains" }, "Contains"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "crosses" }, "Crosses"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "envelope-intersects" }, "Envelope Intersects"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "index-intersects" }, "Index Intersects"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "Overlaps" }, "Overlaps"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "touches" }, "Touches"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "within" }, "Within"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "relation" }, "Relation"))))))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: "primary", className: "w-100", onClick: this.onClickResearchfromCoord }, "Ricerca nei layer"),
                        this.state.errorMessage && this.state.errorMessage !== "" ? ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { form: "basic", open: true, text: this.state.errorMessage, type: "warning", className: "mt-2 w-100", withIcon: true })) : (""))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tab, { id: "search-advanced-tab-Coord-file", className: "d-flex flex-column p-1", title: "Multicoordinate da file" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mb-3" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-100 form-label" }, "Aggiungi un file CSV"),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { className: "form-control", type: "file", onChange: this.onChangeFileCsvCoordinate }),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mt-2 form-text" }, "Il file deve essere formattato con tre campi ID,Y,X. (Esempio: Punto_1,38.72323056,16.49598056)"))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordion, { className: "mt-4 mb-2" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordionItem, { "icon-start": "car", itemTitle: "Seleziona layers da interrogare" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.MultiSelect, { items: this.state.arrayLayer, onClickItem: this.onChangeSelectLayer, placeholder: "Lista servizi" })))),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordionItem, { "icon-start": "car", itemTitle: "Opzione di ricerca" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-100" },
                                            "Valore di buffer ",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { defaultValue: this.state.valueBufferCoord, value: this.state.valueBufferCoord, onChange: this.onChangeSliderCoord, className: "d-inline-block w-50" }),
                                            " m",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Slider, { className: "w-100 mt-1", "aria-label": "Range", value: this.state.valueBufferCoord, defaultValue: this.state.valueBufferCoord, max: 5000, min: 0, onChange: this.onChangeSliderCoord, step: 1 }))),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mb-3" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-100" },
                                            "Tipo di selezione",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { className: "w-100 mt-2", onChange: this.onChangeSelectTypeGeometry, placeholder: "Selezione tipo..." },
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "intersects", selected: "selected" }, "Intersects"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "contains" }, "Contains"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "crosses" }, "Crosses"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "envelope-intersects" }, "Envelope Intersects"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "index-intersects" }, "Index Intersects"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "Overlaps" }, "Overlaps"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "touches" }, "Touches"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "within" }, "Within"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "relation" }, "Relation"))))))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: "primary", className: "w-100", onClick: this.onClickResearchfromCoord }, "Ricerca nei layer"),
                        this.state.errorMessage && this.state.errorMessage !== "" ? ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { form: "basic", open: true, text: this.state.errorMessage, type: "warning", className: "mt-2 w-100", withIcon: true })) : (""))))));
    }
}
Widget.activeView = null;
Widget.allCheckedLayers = [];
Widget.layers = [];


/***/ }),

/***/ "calcite-components":
/*!*************************************!*\
  !*** external "calcite-components" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_calcite_components__;

/***/ }),

/***/ "esri/Graphic":
/*!*******************************!*\
  !*** external "esri/Graphic" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_Graphic__;

/***/ }),

/***/ "esri/geometry/coordinateFormatter":
/*!****************************************************!*\
  !*** external "esri/geometry/coordinateFormatter" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_coordinateFormatter__;

/***/ }),

/***/ "esri/geometry/geometryEngine":
/*!***********************************************!*\
  !*** external "esri/geometry/geometryEngine" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__;

/***/ }),

/***/ "esri/geometry/support/webMercatorUtils":
/*!*********************************************************!*\
  !*** external "esri/geometry/support/webMercatorUtils" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__;

/***/ }),

/***/ "esri/layers/FeatureLayer":
/*!*******************************************!*\
  !*** external "esri/layers/FeatureLayer" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__;

/***/ }),

/***/ "esri/layers/GraphicsLayer":
/*!********************************************!*\
  !*** external "esri/layers/GraphicsLayer" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__;

/***/ }),

/***/ "esri/widgets/Search":
/*!**************************************!*\
  !*** external "esri/widgets/Search" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_Search__;

/***/ }),

/***/ "esri/widgets/Sketch":
/*!**************************************!*\
  !*** external "esri/widgets/Sketch" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_Sketch__;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./jimu-core/lib/set-public-path.ts");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./your-extensions/widgets/indirizzi_new/src/runtime/widget.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9pbmRpcml6emlfbmV3L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZDO0FBQ2I7QUFHdkMsTUFBTSxNQUFNO0lBQVo7UUFFSSxtQkFBYyxHQUFHLENBQUMsVUFBaUIsRUFBQyxVQUFpQixFQUFDLEVBQUU7WUFDcEQsSUFBSSxXQUFXLEdBQUcsVUFBVSxDQUFDO1lBQzdCLE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUMsTUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyRCxJQUFJLFlBQVksS0FBSyxDQUFDLENBQUMsRUFBQztnQkFDcEIsSUFBSSxXQUFXLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQyxFQUFDO29CQUM1QixXQUFXLEdBQUcsV0FBVyxDQUFDLFlBQVksR0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0M7YUFDSjtZQUNELE9BQU8sV0FBVyxDQUFDO1FBQ3ZCLENBQUM7UUFFRCx3QkFBbUIsR0FBRyxDQUFDLEdBQVUsRUFBQyxFQUFFO1lBQ2hDLG1DQUFtQztZQUNuQyxxQ0FBcUM7WUFDckMsNEJBQTRCO1lBQzVCLGtFQUFrRTtZQUNsRSxJQUFHO2dCQUNDLE1BQU0sS0FBSyxHQUFHLElBQUksZ0VBQVksQ0FBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO2dCQUMxQyxPQUFPLEtBQUs7YUFDZjtZQUNELE9BQU0sR0FBRyxFQUFDO2dCQUNOLE9BQU8sSUFB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dEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2luZGlyaXp6aV9uZXcvc3JjL2hlbHBlci9oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2luZGlyaXp6aV9uZXcvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImNhbGNpdGUtY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9HcmFwaGljXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L2Nvb3JkaW5hdGVGb3JtYXR0ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvc3VwcG9ydC93ZWJNZXJjYXRvclV0aWxzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2hcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9Ta2V0Y2hcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJcblxuaW1wb3J0IFF1ZXJ5IGZyb20gXCJlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeVwiO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJ2VzcmkvcmVzdC9xdWVyeSc7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIjtcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4uL3J1bnRpbWUvd2lkZ2V0XCI7XG5cblxuY2xhc3MgSGVscGVyIHtcblxuICAgIGdldFNlcnZpY2VOYW1lID0gKHNlcnZpY2VVcmw6c3RyaW5nLHNlcnZpY2VLZXk6c3RyaW5nKT0+e1xuICAgICAgICBsZXQgc2VydmljZU5hbWUgPSBzZXJ2aWNlS2V5O1xuICAgICAgICBjb25zdCBzdHJpbmdBcnJheSA9IHNlcnZpY2VVcmwuc3BsaXQoXCIvXCIpO1xuICAgICAgICBjb25zdCBzZXJ2aWNlSW5kZXggPSBzdHJpbmdBcnJheS5pbmRleE9mKFwic2VydmljZXNcIik7XG4gICAgICAgIGlmIChzZXJ2aWNlSW5kZXggIT09IC0xKXtcbiAgICAgICAgICAgIGlmIChzdHJpbmdBcnJheVtzZXJ2aWNlSW5kZXgrMV0pe1xuICAgICAgICAgICAgICAgIHNlcnZpY2VOYW1lID0gc3RyaW5nQXJyYXlbc2VydmljZUluZGV4KzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXJ2aWNlTmFtZTtcbiAgICB9XG5cbiAgICBxdWVyeUZlYXR1cmVTZXJ2aWNlID0gKHVybDpzdHJpbmcpPT57XG4gICAgICAgIC8vIGNvbnN0IHF1ZXJ5T2JqZWN0ID0gbmV3IFF1ZXJ5KCk7XG4gICAgICAgIC8vIHF1ZXJ5T2JqZWN0LnJldHVybkdlb21ldHJ5ID0gdHJ1ZTtcbiAgICAgICAgLy8gcXVlcnlPYmplY3Qud2hlcmUgPSBcIjE9MVwiXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBxdWVyeS5leGVjdXRlUXVlcnlKU09OKHVybCwgcXVlcnlPYmplY3QpO1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBsYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe3VybDp1cmx9KTtcbiAgICAgICAgICAgIHJldHVybiBsYXllclxuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycil7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFNlbGVjdGVkTGF5ZXJGcm9tU2VhcmNoID0gKHJlc3VsdHM6YW55W10pPT57XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSWRzID0gW107XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9MDtpIDwgcmVzdWx0cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBpbm5lclJlc3VsdHMgPSByZXN1bHRzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChpbm5lclJlc3VsdHMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7aiA8IGlubmVyUmVzdWx0cy5sZW5ndGg7aisrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxheWVyID0gaW5uZXJSZXN1bHRzW2pdLmxheWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0ge2ZlYXR1cmVTZXJ2ZXI6bGF5ZXIudXJsLGlkOmxheWVyLmxheWVySWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBXaWRnZXQubGF5ZXJzLnB1c2goe3VybDpsYXllci51cmwsbGF5ZXI6bGF5ZXJ9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc2VsZWN0ZWRJZHMuZmluZEluZGV4KChpdGVtKT0+aXRlbS5pZCA9PT0gbGF5ZXIubGF5ZXJJZCAmJiBpdGVtLmZlYXR1cmVTZXJ2ZXIgPT09IGxheWVyLnVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZElkcy5wdXNoKG9iamVjdClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RlZElkcztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBIZWxwZXIoKTsiLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHtBbGxXaWRnZXRQcm9wcywgYXBwQWN0aW9ucywganN4LCBSZWFjdH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQge0lNQ29uZmlnfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB7QWxlcnQsIEJ1dHRvbiwgQ2hlY2tib3gsIExhYmVsLCBNdWx0aVNlbGVjdCwgTnVtZXJpY0lucHV0LCBPcHRpb24sIFNlbGVjdCwgU2xpZGVyLCBUYWIsIFRhYnN9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gXCJlc3JpL2xheWVycy9HcmFwaGljc0xheWVyXCI7XHJcbmltcG9ydCBnZW9tZXRyeUVuZ2luZSBmcm9tIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiO1xyXG5pbXBvcnQge0ppbXVNYXBWaWV3LCBKaW11TWFwVmlld0NvbXBvbmVudH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCB7Q2FsY2l0ZUFjY29yZGlvbiwgQ2FsY2l0ZUFjY29yZGlvbkl0ZW19IGZyb20gXCJjYWxjaXRlLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEdyYXBoaWMgZnJvbSAnZXNyaS9HcmFwaGljJztcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiZXNyaS93aWRnZXRzL1NlYXJjaFwiO1xyXG5pbXBvcnQgU2tldGNoIGZyb20gXCJlc3JpL3dpZGdldHMvU2tldGNoXCI7XHJcbmltcG9ydCBjb29yZGluYXRlRm9ybWF0dGVyIGZyb20gXCJlc3JpL2dlb21ldHJ5L2Nvb3JkaW5hdGVGb3JtYXR0ZXJcIjtcclxuaW1wb3J0IHdlYk1lcmNhdG9yVXRpbHMgZnJvbSBcImVzcmkvZ2VvbWV0cnkvc3VwcG9ydC93ZWJNZXJjYXRvclV0aWxzXCI7XHJcbmltcG9ydCB7TGlzdFZhbHVlfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi4vaGVscGVyL2hlbHBlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEFsbFdpZGdldFByb3BzPElNQ29uZmlnPiwgYW55PiB7XHJcblxyXG4gICAgc3RhdGljIGFjdGl2ZVZpZXcgPSBudWxsO1xyXG4gICAgc3RhdGljIGFsbENoZWNrZWRMYXllcnMgPSBbXTtcclxuICAgIHN0YXRpYyBsYXllcnMgPSBbXVxyXG5cclxuICAgIGdyYXBoaWNMYXllckZvdW5kID0gbmV3IEdyYXBoaWNzTGF5ZXIoe2lkOlwiaW5kaXJpenppLWZvdW5kLXNrZXRjaFwiLGxpc3RNb2RlOlwiaGlkZVwiLHZpc2libGU6dHJ1ZX0pO1xyXG4gICAgZ3JhcGhpY0xheWVyU2VsZWN0ZWQgPSBuZXcgR3JhcGhpY3NMYXllcih7aWQ6XCJpbmRpcml6emktc2VsZWN0ZWQtc2tldGNoXCIsbGlzdE1vZGU6XCJoaWRlXCIsdmlzaWJsZTp0cnVlfSk7XHJcbiAgICBzeW1ib2xGb3VuZCA9IHtcclxuICAgICAgICB0eXBlOiBcInNpbXBsZS1maWxsXCIsXHJcbiAgICAgICAgY29sb3I6IFs1MSwgNTEsIDIwNCwgMC41XSxcclxuICAgICAgICBzdHlsZTogXCJzb2xpZFwiLFxyXG4gICAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICAgICAgc3R5bGU6IFwic2hvcnQtZGFzaFwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICB3aWR0aDogM1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgYXJyYXlWaWV3Okxpc3RWYWx1ZVtdO1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgIGppbXVNYXBWaWV3OiBudWxsLFxyXG4gICAgICAgICAgbGFiZWxWaXNpYmxlOnRydWUsXHJcbiAgICAgICAgICB2aWV3U2VsZWN0RHJhdzogdHJ1ZSxcclxuXHJcbiAgICAgICAgICBmb3JtRXh0cmFVcmJhbm86e1xyXG4gICAgICAgICAgICAgIC8vVE9ET1xyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAvL0NPT1JEXHJcbiAgICAgICAgICBsb25nX2VfMToxMixcclxuICAgICAgICAgIGxvbmdfZV8yOjYyLFxyXG4gICAgICAgICAgbG9uZ19lXzM6ODYsXHJcbiAgICAgICAgICBsYXRfZV8xOjQxLFxyXG4gICAgICAgICAgbGF0X2VfMjo4MCxcclxuICAgICAgICAgIGxhdF9lXzM6NjYsXHJcblxyXG4gICAgICAgICAgYXJyYXlMYXllcjogW10sXHJcbiAgICAgICAgICB2YWx1ZUJ1ZmZlckFkZHJlc3M6IDAsXHJcbiAgICAgICAgICB2YWx1ZUJ1ZmZlckNvb3JkOiAwLFxyXG4gICAgICAgICAgZ2VvbWV0cnk6bnVsbCxcclxuICAgICAgICAgIHR5cGVTZWxlY3RlZDpudWxsLFxyXG4gICAgICAgICAgbGlzdFNlcnZpY2VzOiBbXSxcclxuICAgICAgICAgIHNlbGVjdGVkQ291bnQ6IDAsXHJcbiAgICAgICAgICBzZWFyY2hlZExheWVyczpbXVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmFycmF5VmlldyA9IE9iamVjdC5hc3NpZ24oW10sIHRoaXMucHJvcHMuY29uZmlnLmxpc3R2YWx1ZXMpXHJcbiAgICAgIHRoaXMuX3ZpZXdMYWJlbHMgPSB0aGlzLl92aWV3TGFiZWxzLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMuX3ZpZXdTZWxlY3REcmF3ID0gdGhpcy5fdmlld1NlbGVjdERyYXcuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5hY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciA9IHRoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5zYXZlU3RhdGUgPSB0aGlzLnNhdmVTdGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlVGFicyA9IHRoaXMub25DaGFuZ2VUYWJzLmJpbmQodGhpcylcclxuXHJcbiAgICAgIHRoaXMub25DaGFuZ2VTbGlkZXJBZGRyZXNzID0gdGhpcy5vbkNoYW5nZVNsaWRlckFkZHJlc3MuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZVNsaWRlckNvb3JkID0gdGhpcy5vbkNoYW5nZVNsaWRlckNvb3JkLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VTZWxlY3RUeXBlR2VvbWV0cnkgPSB0aGlzLm9uQ2hhbmdlU2VsZWN0VHlwZUdlb21ldHJ5LmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VGaWxlQ3N2Q29vcmRpbmF0ZSA9IHRoaXMub25DaGFuZ2VGaWxlQ3N2Q29vcmRpbmF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlU2VsZWN0TGF5ZXIgPSB0aGlzLm9uQ2hhbmdlU2VsZWN0TGF5ZXIuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5vbkNsaWNrUmVzZWFyY2hmcm9tQWRkcmVzcyA9IHRoaXMub25DbGlja1Jlc2VhcmNoZnJvbUFkZHJlc3MuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5vbkNsaWNrUmVzZWFyY2hmcm9tQ29vcmQgPSB0aGlzLm9uQ2xpY2tSZXNlYXJjaGZyb21Db29yZC5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLmdldEFsbENoZWNrZWRMYXllcnMgPSB0aGlzLmdldEFsbENoZWNrZWRMYXllcnMuYmluZCh0aGlzKTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgXHJcbiAgICBnZXRBY3RpdmVWaWV3ID0gKCk9PldpZGdldC5hY3RpdmVWaWV3O1xyXG5cclxuICAgIGdldEFsbENoZWNrZWRMYXllcnMgPSgpPT5XaWRnZXQuYWxsQ2hlY2tlZExheWVycztcclxuXHJcbiAgICBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciAoam12OiBKaW11TWFwVmlldykge1xyXG4gICAgICAgIGlmIChqbXYpIHtcclxuICAgICAgICAgICAgam12LnZpZXcubWFwLmFkZCh0aGlzLmdyYXBoaWNMYXllckZvdW5kKTtcclxuICAgICAgICAgICAgam12LnZpZXcubWFwLmFkZCh0aGlzLmdyYXBoaWNMYXllclNlbGVjdGVkKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBhcnJheVN1cCA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmFycmF5Vmlldy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFycmF5U3VwLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOmVsLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ZWxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2tldGNoID0gbmV3IFNrZXRjaCh7XHJcbiAgICAgICAgICAgICAgICBsYXllcjogdGhpcy5ncmFwaGljTGF5ZXJGb3VuZCxcclxuICAgICAgICAgICAgICAgIHZpZXc6IGptdi52aWV3LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRpb25Nb2RlOlwic2luZ2xlXCIsXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IFwic2tldGNoLXdpZGdldC1hZGRyZXNzXCIsLy9UT0RPIG1pZ2xpb3JhcmUgc2VuemEgaWQgY2FibGF0b1xyXG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlQ3JlYXRlVG9vbHM6W1wicG9seWdvblwiLCBcInJlY3RhbmdsZVwiLCBcImNpcmNsZVwiLFwicG9pbnRcIl0sXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlRWxlbWVudHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Ub29sczp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFzc28tc2VsZWN0aW9uXCI6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nc01lbnU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2tldGNoLm9uKFwiY3JlYXRlXCIsIChldmVudCk9PntcclxuICAgICAgICAgICAgICAgIGptdi52aWV3LmdyYXBoaWNzLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljTGF5ZXJGb3VuZC5yZW1vdmVBbGwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuc3RhdGUgPT09IFwiY29tcGxldGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvbHlnb25HcmFwaGljID0gbmV3IEdyYXBoaWMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTogZXZlbnQuZ3JhcGhpYy5nZW9tZXRyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbEZvdW5kXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY0xheWVyRm91bmQuYWRkKHBvbHlnb25HcmFwaGljKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hXaWRnZXQgPSBuZXcgU2VhcmNoKHtcclxuICAgICAgICAgICAgICAgIHZpZXc6IGptdi52aWV3LFxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBcInNlYXJjaC13aWRnZXQtYWRkcmVzc1wiLy9UT0RPIG1pZ2xpb3JhcmUgc2VuemEgaWQgY2FibGF0b1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNlYXJjaFdpZGdldC5vbihcInNlbGVjdC1yZXN1bHRcIiwgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZXZlbnQgJiYgZXZlbnQucmVzdWx0ICYmIGV2ZW50LnJlc3VsdC5mZWF0dXJlKXtcclxuICAgICAgICAgICAgICAgICAgICBqbXYudmlldy5ncmFwaGljcy5yZW1vdmVBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLnJlbW92ZUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZW9tZXRyeUJ1ZmZlcjogUG9seWdvbiA9IGdlb21ldHJ5RW5naW5lLmJ1ZmZlciggZXZlbnQucmVzdWx0LmZlYXR1cmUuZ2VvbWV0cnksIDEwMDAsIFwibWV0ZXJzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGdlb21ldHJ5QnVmZmVyOiBQb2x5Z29uID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKCBldmVudC5yZXN1bHQuZmVhdHVyZS5nZW9tZXRyeSwgMSwgXCJtZXRlcnNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvbHlnb25HcmFwaGljID0gbmV3IEdyYXBoaWMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTogZ2VvbWV0cnlCdWZmZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogdGhpcy5zeW1ib2xGb3VuZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBqbXYuc2VsZWN0RmVhdHVyZXNCeUdyYXBoaWMocG9seWdvbkdyYXBoaWMsXCJjb250YWluc1wiKS50aGVuKChyZXN1bHRzKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hlZExheWVycyA9IGhlbHBlci5nZXRTZWxlY3RlZExheWVyRnJvbVNlYXJjaChyZXN1bHRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoZWRMYXllcnM6c2VhcmNoZWRMYXllcnN9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY0xheWVyRm91bmQuYWRkKHBvbHlnb25HcmFwaGljKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2VhcmNoV2lkZ2V0Lm9uKFwic2VhcmNoLWNsZWFyXCIsIChldmVudCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY0xheWVyRm91bmQucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgV2lkZ2V0LmFjdGl2ZVZpZXcgPSBqbXY7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGFycmF5TGF5ZXI6IGFycmF5U3VwLFxyXG4gICAgICAgICAgICAgICAgamltdU1hcFZpZXc6IGptdixcclxuICAgICAgICAgICAgICAgIHNlYXJjaFdpZGdldDpzZWFyY2hXaWRnZXQsXHJcbiAgICAgICAgICAgICAgICBza2V0Y2hXaWRnZXQ6c2tldGNoXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZVRhYnMoKXtcclxuICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0xheWVyU2VsZWN0ZWQucmVtb3ZlQWxsKCk7XHJcbiAgICB9XHJcbiAgICBfdmlld0xhYmVscygpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsYWJlbFZpc2libGU6ICF0aGlzLnN0YXRlLmxhYmVsVmlzaWJsZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF92aWV3U2VsZWN0RHJhdygpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2aWV3U2VsZWN0RHJhdzogIXRoaXMuc3RhdGUudmlld1NlbGVjdERyYXdcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLnZpc2libGUgPSB0aGlzLnN0YXRlLnZpZXdTZWxlY3REcmF3O1xyXG4gICAgfVxyXG5cclxuICAgIC8vRXh0cmFVcmJhbm9cclxuICAgIG9uQ2hhbmdlRXh0cmFVcmJhbm8oZSx0eXBlKXtcclxuICAgICAgaWYodHlwZT09XCJpbmRpcml6em9cIil7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmZvcm1FeHRyYVVyYmFuby5pbmRpcml6em8gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgIHRoaXMuc3RhdGUuZm9ybUV4dHJhVXJiYW5vLmttID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgc2F2ZVN0YXRlKGtleSxlKXtcclxuICAgICAgICBjb25zdCBzdGF0ZU5ldyA9IHt9XHJcbiAgICAgICAgc3RhdGVOZXdba2V5XSA9IGUudGFyZ2V0ID8gZS50YXJnZXQudmFsdWU6IGU7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGVOZXcpO1xyXG4gICAgfVxyXG4gICAgb25DaGFuZ2VTZWxlY3RMYXllciAoZSxuLHMpe1xyXG4gICAgICAgIGNvbnN0IGFycmF5SWQgPSBuLmxpc3RJZHMuc3BsaXQoXCIsXCIpO1xyXG5cclxuICAgICAgICBmb3IobGV0IGk9MDtpPGFycmF5SWQubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gYXJyYXlJZFtpXTtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gbi5saW5rLnNsaWNlKC0xKSAhPT0gXCIvXCIgPyBuLmxpbmsgKyBcIi9cIiArIGlkIDogbi5saW5rICsgaWQ7XHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5saXN0U2VydmljZXMucHVzaCh1cmwpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuc3RhdGUubGlzdFNlcnZpY2VzLmluZGV4T2YodXJsKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5saXN0U2VydmljZXMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgb25DaGFuZ2VTZWxlY3RUeXBlR2VvbWV0cnkoZSl7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMuc3RhdGUudHlwZVNlbGVjdGVkID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjc3ZUb0FycmF5KHN0ciwgZGVsaW1pdGVyID0gXCIsXCIpIHtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gc3RyLnNsaWNlKDAsIHN0ci5pbmRleE9mKFwiXFxuXCIpKS5zbGljZSgwLCBzdHIuaW5kZXhPZihcIlxcclwiKSkuc3BsaXQoZGVsaW1pdGVyKTtcclxuICAgICAgICBjb25zdCByb3dzID0gc3RyLnNsaWNlKHN0ci5pbmRleE9mKFwiXFxuXCIpICsgMSkuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgcmV0dXJuIHJvd3MubWFwKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gcm93LnNwbGl0KGRlbGltaXRlcik7XHJcbiAgICAgICAgICAgIHJldHVybiBoZWFkZXJzLnJlZHVjZShmdW5jdGlvbiAob2JqZWN0LCBoZWFkZXIsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RbaGVhZGVyXSA9IHZhbHVlc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgICAgICAgICB9LCB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25DaGFuZ2VGaWxlQ3N2Q29vcmRpbmF0ZShlKXtcclxuICAgICAgICBhd2FpdCBjb29yZGluYXRlRm9ybWF0dGVyLmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZVNsaWRlckFkZHJlc3MoZSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlQnVmZmVyQWRkcmVzczogcGFyc2VJbnQoaXNOYU4oZSkgPyBlLnRhcmdldC52YWx1ZTogZSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlU2xpZGVyQ29vcmQoZSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlQnVmZmVyQ29vcmQ6IHBhcnNlSW50KGlzTmFOKGUpID8gZS50YXJnZXQudmFsdWU6IGUpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBvbkNsaWNrUmVzZWFyY2hmcm9tQWRkcmVzcygpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAudGFibGVzLnJlbW92ZUFsbCgpO1xyXG5cclxuICAgICAgICAvL3BhcmFtZXRyaSBmb3JtXHJcbiAgICAgICAgbGV0IGFycmF5R2VvbWV0cnkgPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgdXJscyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGxpc3RTZXJ2aWNlcyA9IHRoaXMuc3RhdGUubGlzdFNlcnZpY2VzO1xyXG4gICAgICAgIGlmIChsaXN0U2VydmljZXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgbGlzdFNlcnZpY2VzLmZvckVhY2goKGVsLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFVybCA9IGVsLnN1YnN0cigwLGVsLmxlbmd0aC0zKTtcclxuICAgICAgICAgICAgICAgIGlmICh1cmxzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXVybHMuaW5jbHVkZXMoY3VycmVudFVybCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxzLnB1c2goY3VycmVudFVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJscy5wdXNoKGN1cnJlbnRVcmwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vVE9ETyBQUkVOREVSRSBHRU9NRVRSSUFcclxuICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLmdyYXBoaWNzLmZvckVhY2goZz0+e1xyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hlZExheWVycyA9IHRoaXMuc3RhdGUuc2VhcmNoZWRMYXllcnM7XHJcbiAgICAgICAgICAgIGlmIChzZWFyY2hlZExheWVycy5sZW5ndGggJiYgdXJscy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoZWRMYXllcnMuZm9yRWFjaCgoZWw6e2ZlYXR1cmVTZXJ2ZXI6c3RyaW5nLGlkOnN0cmluZ30pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXJscy5pbmNsdWRlcyhlbC5mZWF0dXJlU2VydmVyKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxheWVyID0gdGhpcy5hcnJheVZpZXcuZmluZCgoaXRlbSk9Pml0ZW0ubGluayA9PT0gZWwuZmVhdHVyZVNlcnZlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxheWVyc0lkcyA9IGxheWVyID8gbGF5ZXIubGlzdElkcyA6IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5ZXJzSWRzLmxlbmd0aCAmJiBsYXllcnNJZHMuaW5jbHVkZXMoZWwuaWQpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGVja2VkTGF5ZXJzID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChXaWRnZXQubGF5ZXJzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZExheWVycyA9IFdpZGdldC5sYXllcnMuZmluZCgobGF5ZXIpPT5sYXllci51cmwgPT09IGVsLmZlYXR1cmVTZXJ2ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZExheWVycyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2lkZ2V0LmFsbENoZWNrZWRMYXllcnMucHVzaChjaGVja2VkTGF5ZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcuZ2VvbWV0cnkgPSBnZW9tZXRyeUVuZ2luZS5idWZmZXIoZy5nZW9tZXRyeSwgdGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckFkZHJlc3MsIFwibWV0ZXJzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlHZW9tZXRyeS5wdXNoKGcuZ2VvbWV0cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAvLyBnLmdlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKGcuZ2VvbWV0cnksIHRoaXMuc3RhdGUudmFsdWVCdWZmZXJBZGRyZXNzLCBcIm1ldGVyc1wiKTtcclxuICAgICAgICAgICAgLy8gYXJyYXlHZW9tZXRyeS5wdXNoKGcuZ2VvbWV0cnkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vY29udHJvbGxvIGVycm9yaVxyXG4gICAgICAgIGxldCBhcnJheUVycm9ycyA9IFtdO1xyXG4gICAgICAgIGlmKGFycmF5R2VvbWV0cnkubGVuZ3RoKSB7IC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5nZW9tZXRyeSA9IGdlb21ldHJ5RW5naW5lLnVuaW9uKGFycmF5R2VvbWV0cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGFycmF5RXJyb3JzLnB1c2goXCJTZWxlemlvbmEgdW5hIGdlb21ldHJpYSBpbiBtYXBwYVwiKTtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5saXN0U2VydmljZXMubGVuZ3RoKSBhcnJheUVycm9ycy5wdXNoKFwiU2VsZXppb25hIGFsbWVubyB1biBzZXJ2aXppb1wiKTtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS50eXBlU2VsZWN0ZWQpIGFycmF5RXJyb3JzLnB1c2goXCJTZWxlemlvbmEgdW5hIHRpcG9sb2dpYSBkaSBzZWxlemlvbmVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6YXJyYXlFcnJvcnMuam9pbigpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKGFycmF5RXJyb3JzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnByb3BzLmNvbmZpZy5pZFdpZGdldFRhYmxlICE9PSBcIlwiKXtcclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE8gUXVpIHJlbmRlIHZpc2liaWxlIGxhIGNvcnJpc3BvbmRlbnphIGRlbGwnaW5kaWNlIHRyb3ZhdG8gbWEgYWRlc3NvIGJpc29nbmEgZmFybGEgc3VsIGxheWVyIGluc2VyaXRvIG5lbCBjb25maWdcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZiAmJiBmLnR5cGU9PT1cImZlYXR1cmVcIiAmJiB0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcy5pbmRleE9mKGluZGV4KSAhPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGYubGFiZWxpbmdJbmZvPy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmLmxhYmVsaW5nSW5mb1swXS5zeW1ib2wuZm9udC5mYW1pbHkgPSBcIkFyaWFsXCI7Ly9maXggZm9udCB2ZXJkYW5hIG5vdCBpbiBzdGF0aWMgZXNyaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmLmxhYmVsc1Zpc2libGUgPSB0aGlzLnN0YXRlLmxhYmVsVmlzaWJsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmdlb21ldHJ5LnRvSlNPTigpKVxyXG4gICAgICAgICAgICAvL21hbmRvIGxheWVyaWQgYWQgVGFibGVMaXN0XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICBhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYXllck9wZW5cIixcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RTZXJ2aWNlVXJsOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVTZWxlY3RlZDp0aGlzLnN0YXRlLnR5cGVTZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6dGhpcy5zdGF0ZS5nZW9tZXRyeS50b0pTT04oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdFNlcnZpY2VzOnRoaXMuc3RhdGUubGlzdFNlcnZpY2VzLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBvbkNsaWNrUmVzZWFyY2hmcm9tQ29vcmQoKXtcclxuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLnRhYmxlcy5yZW1vdmVBbGwoKTtcclxuICAgICAgICBsZXQgbG9uZyA9IHRoaXMuc3RhdGUubG9uZ19lXzEgKyBcIi5cIiArIHRoaXMuc3RhdGUubG9uZ19lXzIgKyB0aGlzLnN0YXRlLmxvbmdfZV8zICsgXCIqXCI7XHJcbiAgICAgICAgbGV0IGxhdCA9IHRoaXMuc3RhdGUubGF0X2VfMSArIFwiLlwiICsgdGhpcy5zdGF0ZS5sYXRfZV8yICsgdGhpcy5zdGF0ZS5sYXRfZV8zICsgXCIqXCI7XHJcblxyXG4gICAgICAgIGF3YWl0IGNvb3JkaW5hdGVGb3JtYXR0ZXIubG9hZCgpO1xyXG4gICAgICAgIGxldCBwb2ludEdlb2dyYXBoaWMgPSBjb29yZGluYXRlRm9ybWF0dGVyLmZyb21MYXRpdHVkZUxvbmdpdHVkZShsYXQgKyBcInxcIiArIGxvbmcpO1xyXG4gICAgICAgIGxldCBwb2ludCA9IHdlYk1lcmNhdG9yVXRpbHMuZ2VvZ3JhcGhpY1RvV2ViTWVyY2F0b3IocG9pbnRHZW9ncmFwaGljKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmdvVG8ocG9pbnQpO1xyXG5cclxuICAgICAgICBsZXQgZ2VvbWV0cnkgPSBnZW9tZXRyeUVuZ2luZS5idWZmZXIocG9pbnQsIDEsIFwibWV0ZXJzXCIpO1xyXG4gICAgICAgIGNvbnN0IHBvbHlnb25HcmFwaGljID0gbmV3IEdyYXBoaWMoe1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgZ2VvbWV0cnk6IGdlb21ldHJ5LFxyXG4gICAgICAgICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sRm91bmRcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0xheWVyRm91bmQuYWRkKHBvbHlnb25HcmFwaGljKTtcclxuXHJcbiAgICAgICAgbGV0IGFycmF5R2VvbWV0cnkgPSBbXTtcclxuICAgICAgICAvL1RPRE8gUFJFTkRFUkUgR0VPTUVUUklBXHJcbiAgICAgICAgdGhpcy5ncmFwaGljTGF5ZXJGb3VuZC5ncmFwaGljcy5mb3JFYWNoKGc9PntcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBnLmdlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKGcuZ2VvbWV0cnksIHRoaXMuc3RhdGUudmFsdWVCdWZmZXJDb29yZCwgXCJtZXRlcnNcIik7XHJcbiAgICAgICAgICAgIGFycmF5R2VvbWV0cnkucHVzaChnLmdlb21ldHJ5KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9jb250cm9sbG8gZXJyb3JpXHJcbiAgICAgICAgbGV0IGFycmF5RXJyb3JzID0gW107XHJcbiAgICAgICAgaWYoYXJyYXlHZW9tZXRyeS5sZW5ndGgpIHsgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmdlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUudW5pb24oYXJyYXlHZW9tZXRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgYXJyYXlFcnJvcnMucHVzaChcIlNlbGV6aW9uYSB1bmEgZ2VvbWV0cmlhIGluIG1hcHBhXCIpO1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcy5sZW5ndGgpIGFycmF5RXJyb3JzLnB1c2goXCJTZWxlemlvbmEgYWxtZW5vIHVuIHNlcnZpemlvXCIpO1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLnR5cGVTZWxlY3RlZCkgYXJyYXlFcnJvcnMucHVzaChcIlNlbGV6aW9uYSB1bmEgdGlwb2xvZ2lhIGRpIHNlbGV6aW9uZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTphcnJheUVycm9ycy5qb2luKClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYoYXJyYXlFcnJvcnMubGVuZ3RoID09PSAwICYmIHRoaXMucHJvcHMuY29uZmlnLmlkV2lkZ2V0VGFibGUgIT09IFwiXCIpe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZiAmJiBmLnR5cGU9PT1cImZlYXR1cmVcIiAmJiB0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcy5pbmRleE9mKGluZGV4KSAhPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGYubGFiZWxpbmdJbmZvPy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmLmxhYmVsaW5nSW5mb1swXS5zeW1ib2wuZm9udC5mYW1pbHkgPSBcIkFyaWFsXCI7Ly9maXggZm9udCB2ZXJkYW5hIG5vdCBpbiBzdGF0aWMgZXNyaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmLmxhYmVsc1Zpc2libGUgPSB0aGlzLnN0YXRlLmxhYmVsVmlzaWJsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL21hbmRvIGxheWVyaWQgYWQgVGFibGVMaXN0XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICBhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5pZFdpZGdldFRhYmxlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGF5ZXJPcGVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0U2VydmljZVVybDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlU2VsZWN0ZWQ6dGhpcy5zdGF0ZS50eXBlU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OnRoaXMuc3RhdGUuZ2VvbWV0cnkudG9KU09OKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RTZXJ2aWNlczp0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1hZGRyZXNzIGppbXUtd2lkZ2V0ICBjb250YWluZXItZmx1aWRcIiBzdHlsZT17e292ZXJmbG93OlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmhhc093blByb3BlcnR5KCd1c2VNYXBXaWRnZXRJZHMnKSAmJiB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyAmJiB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkc1swXSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnQgdXNlTWFwV2lkZ2V0SWQ9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19IG9uQWN0aXZlVmlld0NoYW5nZT17dGhpcy5hY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMyBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjZW50cmljIGNoZWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY2xhc3NOYW1lPVwibXItMlwiIGFyaWEtbGFiZWw9XCJWaXN1YWxpenphIGRpc2Vnbm8gc2VsZXppb25lXCIgY2hlY2tlZD17dGhpcy5ncmFwaGljTGF5ZXJGb3VuZC52aXNpYmxlfSBvbkNoYW5nZT17dGhpcy5fdmlld1NlbGVjdERyYXd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBkaXNlZ25vIHNlbGV6aW9uZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2VudHJpYyBjaGVjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGNsYXNzTmFtZT1cIm1yLTJcIiBhcmlhLWxhYmVsPVwiVmlzdWFsaXp6YSBkaXNlZ25vIHNlbGV6aW9uZVwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUubGFiZWxWaXNpYmxlfSBvbkNoYW5nZT17dGhpcy5fdmlld0xhYmVsc30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWaXN1YWxpenphIGV0aWNoZXR0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJ0YWItMVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVRhYnN9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGFic1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUYWIgaWQ9XCJzZWFyY2gtYWR2YW5jZWQtdGFiLVVyYmFub1wiIGNsYXNzTmFtZT1cIiBwLTFcIiB0aXRsZT1cIlVyYmFub1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UmljZXJjYSBwZXIgaW5kaXJpenpvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2VhcmNoLXdpZGdldC1hZGRyZXNzXCIgY2xhc3NOYW1lPVwidy0xMDBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb24gY2xhc3NOYW1lPVwibXQtNCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsY2l0ZUFjY29yZGlvbkl0ZW0gaWNvbi1zdGFydD1cImNhclwiIGl0ZW1UaXRsZT1cIlNlbGV6aW9uYSBsYXllcnMgZGEgaW50ZXJyb2dhcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aVNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLmFycmF5TGF5ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja0l0ZW09e3RoaXMub25DaGFuZ2VTZWxlY3RMYXllcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxpc3RhIHNlcnZpemlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb25JdGVtIGljb24tc3RhcnQ9XCJjYXJcIiBpdGVtVGl0bGU9XCJPcHppb25lIGRpIHJpY2VyY2FcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbG9yZSBkaSBidWZmZXIgPE51bWVyaWNJbnB1dCBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJBZGRyZXNzfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckFkZHJlc3N9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQWRkcmVzc30gY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgdy01MFwiLz4gbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgbXQtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXs1MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpcG8gZGkgc2VsZXppb25lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBjbGFzc05hbWU9XCJ3LTEwMCBtdC0yXCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTZWxlY3RUeXBlR2VvbWV0cnl9IHBsYWNlaG9sZGVyPVwiU2VsZXppb25lIHRpcG8uLi5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImludGVyc2VjdHNcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+SW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiY29udGFpbnNcIj5Db250YWluczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiY3Jvc3Nlc1wiPkNyb3NzZXM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImVudmVsb3BlLWludGVyc2VjdHNcIj5FbnZlbG9wZSBJbnRlcnNlY3RzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJpbmRleC1pbnRlcnNlY3RzXCI+SW5kZXggSW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiT3ZlcmxhcHNcIj5PdmVybGFwczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwidG91Y2hlc1wiPlRvdWNoZXM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIndpdGhpblwiPldpdGhpbjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicmVsYXRpb25cIj5SZWxhdGlvbjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwidy0xMDBcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tSZXNlYXJjaGZyb21BZGRyZXNzfT5SaWNlcmNhIG5laSBsYXllcjwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICYmIHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICE9PSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybT1cImJhc2ljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICB7Lyo8VGFiIGlkPVwic2VhcmNoLWFkdmFuY2VkLXRhYi1FeHRyYXVyYmFub1wiIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBwLTFcIiB0aXRsZT1cIkV4dHJhdXJiYW5vXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMiBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI1XCI+SW5kaXJpenpvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTc1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5kaXJpenpvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yNVwiPkttOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTc1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiS21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhYj4qL31cclxuICAgICAgICAgICAgICAgIDxUYWIgaWQ9XCJzZWFyY2gtYWR2YW5jZWQtdGFiLUNvb3JkXCIgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIHAtMVwiIHRpdGxlPVwiQ29vcmRpbmF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMiBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0yNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9uZy4gKFgpOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zYXZlU3RhdGUoJ2xvbmdfZV8xJyxlKX0gdmFsdWU9e3RoaXMuc3RhdGUubG9uZ19lXzF9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctMjVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1lcmljSW5wdXQgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNhdmVTdGF0ZSgnbG9uZ19lXzInLGUpfSB2YWx1ZT17dGhpcy5zdGF0ZS5sb25nX2VfMn0gY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgdy0yNVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWVyaWNJbnB1dCBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2F2ZVN0YXRlKCdsb25nX2VfMycsZSl9IHZhbHVlPXt0aGlzLnN0YXRlLmxvbmdfZV8zfSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTI1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInctMjVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhdC4gKFkpOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zYXZlU3RhdGUoJ2xhdF9lXzEnLGUpfSB2YWx1ZT17dGhpcy5zdGF0ZS5sYXRfZV8xfSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTI1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zYXZlU3RhdGUoJ2xhdF9lXzInLGUpfSB2YWx1ZT17dGhpcy5zdGF0ZS5sYXRfZV8yfSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTI1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zYXZlU3RhdGUoJ2xhdF9lXzMnLGUpfSB2YWx1ZT17dGhpcy5zdGF0ZS5sYXRfZV8zfSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTI1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FsY2l0ZUFjY29yZGlvbiBjbGFzc05hbWU9XCJtdC00IG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uSXRlbSBpY29uLXN0YXJ0PVwiY2FyXCIgaXRlbVRpdGxlPVwiU2VsZXppb25hIGxheWVycyBkYSBpbnRlcnJvZ2FyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpU2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3RoaXMuc3RhdGUuYXJyYXlMYXllcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrSXRlbT17dGhpcy5vbkNoYW5nZVNlbGVjdExheWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGlzdGEgc2Vydml6aVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FsY2l0ZUFjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsY2l0ZUFjY29yZGlvbkl0ZW0gaWNvbi1zdGFydD1cImNhclwiIGl0ZW1UaXRsZT1cIk9wemlvbmUgZGkgcmljZXJjYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsb3JlIGRpIGJ1ZmZlciA8TnVtZXJpY0lucHV0IGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckNvb3JkfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckNvb3JkfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVNsaWRlckNvb3JkfSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTUwXCIvPiBtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBtdC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJhbmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJDb29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17NTAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVNsaWRlckNvb3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGlwbyBkaSBzZWxlemlvbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IGNsYXNzTmFtZT1cInctMTAwIG10LTJcIiBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVNlbGVjdFR5cGVHZW9tZXRyeX0gcGxhY2Vob2xkZXI9XCJTZWxlemlvbmUgdGlwby4uLlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiaW50ZXJzZWN0c1wiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj5JbnRlcnNlY3RzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJjb250YWluc1wiPkNvbnRhaW5zPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJjcm9zc2VzXCI+Q3Jvc3NlczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiZW52ZWxvcGUtaW50ZXJzZWN0c1wiPkVudmVsb3BlIEludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImluZGV4LWludGVyc2VjdHNcIj5JbmRleCBJbnRlcnNlY3RzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJPdmVybGFwc1wiPk92ZXJsYXBzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJ0b3VjaGVzXCI+VG91Y2hlczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwid2l0aGluXCI+V2l0aGluPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJyZWxhdGlvblwiPlJlbGF0aW9uPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FsY2l0ZUFjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FsY2l0ZUFjY29yZGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJ3LTEwMFwiIG9uQ2xpY2s9e3RoaXMub25DbGlja1Jlc2VhcmNoZnJvbUNvb3JkfT5SaWNlcmNhIG5laSBsYXllcjwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICYmIHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICE9PSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybT1cImJhc2ljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBpZD1cInNlYXJjaC1hZHZhbmNlZC10YWItQ29vcmQtZmlsZVwiIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBwLTFcIiB0aXRsZT1cIk11bHRpY29vcmRpbmF0ZSBkYSBmaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInctMTAwIGZvcm0tbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWdnaXVuZ2kgdW4gZmlsZSBDU1ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZUZpbGVDc3ZDb29yZGluYXRlfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBmb3JtLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWwgZmlsZSBkZXZlIGVzc2VyZSBmb3JtYXR0YXRvIGNvbiB0cmUgY2FtcGkgSUQsWSxYLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoRXNlbXBpbzogUHVudG9fMSwzOC43MjMyMzA1NiwxNi40OTU5ODA1NilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb24gY2xhc3NOYW1lPVwibXQtNCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsY2l0ZUFjY29yZGlvbkl0ZW0gaWNvbi1zdGFydD1cImNhclwiIGl0ZW1UaXRsZT1cIlNlbGV6aW9uYSBsYXllcnMgZGEgaW50ZXJyb2dhcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aVNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLmFycmF5TGF5ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja0l0ZW09e3RoaXMub25DaGFuZ2VTZWxlY3RMYXllcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxpc3RhIHNlcnZpemlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb25JdGVtIGljb24tc3RhcnQ9XCJjYXJcIiBpdGVtVGl0bGU9XCJPcHppb25lIGRpIHJpY2VyY2FcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbG9yZSBkaSBidWZmZXIgPE51bWVyaWNJbnB1dCBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJDb29yZH0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJDb29yZH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTbGlkZXJDb29yZH0gY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgdy01MFwiLz4gbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgbXQtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckNvb3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezUwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTbGlkZXJDb29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpcG8gZGkgc2VsZXppb25lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBjbGFzc05hbWU9XCJ3LTEwMCBtdC0yXCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTZWxlY3RUeXBlR2VvbWV0cnl9IHBsYWNlaG9sZGVyPVwiU2VsZXppb25lIHRpcG8uLi5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImludGVyc2VjdHNcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+SW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiY29udGFpbnNcIj5Db250YWluczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiY3Jvc3Nlc1wiPkNyb3NzZXM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImVudmVsb3BlLWludGVyc2VjdHNcIj5FbnZlbG9wZSBJbnRlcnNlY3RzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJpbmRleC1pbnRlcnNlY3RzXCI+SW5kZXggSW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiT3ZlcmxhcHNcIj5PdmVybGFwczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwidG91Y2hlc1wiPlRvdWNoZXM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIndpdGhpblwiPldpdGhpbjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicmVsYXRpb25cIj5SZWxhdGlvbjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwidy0xMDBcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tSZXNlYXJjaGZyb21Db29yZH0+UmljZXJjYSBuZWkgbGF5ZXI8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSAmJiB0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSAhPT0gXCJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm09XCJiYXNpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ3YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIHctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcIlwiKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhbGNpdGVfY29tcG9uZW50c19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX0dyYXBoaWNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9jb29yZGluYXRlRm9ybWF0dGVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfZ2VvbWV0cnlFbmdpbmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9zdXBwb3J0X3dlYk1lcmNhdG9yVXRpbHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfRmVhdHVyZUxheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0dyYXBoaWNzTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV93aWRnZXRzX1NlYXJjaF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3dpZGdldHNfU2tldGNoX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9pbmRpcml6emlfbmV3L3NyYy9ydW50aW1lL3dpZGdldC50c3hcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=