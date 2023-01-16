System.register(["jimu-core","jimu-ui","esri/layers/GraphicsLayer","esri/geometry/geometryEngine","jimu-arcgis","calcite-components","esri/Graphic","esri/widgets/Search","esri/geometry/coordinateFormatter","esri/geometry/support/webMercatorUtils","esri/layers/FeatureLayer"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_calcite_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_Graphic__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_Search__ = {};
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

/***/ "./your-extensions/widgets/indirizzi/src/helper/helper.ts":
/*!****************************************************************!*\
  !*** ./your-extensions/widgets/indirizzi/src/helper/helper.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esri/layers/FeatureLayer */ "esri/layers/FeatureLayer");

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
                            selectedIds.push(object);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************************************************!*\
  !*** ./your-extensions/widgets/indirizzi/src/runtime/widget.tsx ***!
  \******************************************************************/
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
/* harmony import */ var esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esri/geometry/coordinateFormatter */ "esri/geometry/coordinateFormatter");
/* harmony import */ var esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! esri/geometry/support/webMercatorUtils */ "esri/geometry/support/webMercatorUtils");
/* harmony import */ var esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! esri/layers/FeatureLayer */ "esri/layers/FeatureLayer");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helper/helper */ "./your-extensions/widgets/indirizzi/src/helper/helper.ts");
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
            layersIds: [],
            searchedLayers: []
        };
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
    getActiveView() {
        return Widget.activeView;
    }
    getAllCheckedLayers() {
        const activeView = Widget.activeView;
        let allCheckedLayers = [];
        if (activeView) {
            const allLayers = activeView.view.map.allLayers.items;
            const layersIds = this.state.layersIds;
            const listServices = this.state.listServices;
            if (layersIds.length) {
                for (let i = 0; i < layersIds.length; i++) {
                    const currentLayerIds = layersIds[i];
                    const serviceKey = currentLayerIds.serviceKey;
                    if (listServices.includes(serviceKey)) {
                        const layerIds = currentLayerIds.layerIds;
                        for (let j = 0; j < allLayers.length; j++) {
                            const currentLayer = allLayers[i];
                            if (layerIds.includes(currentLayer.id)) {
                                allCheckedLayers.push(currentLayer);
                            }
                        }
                    }
                }
            }
        }
        return allCheckedLayers;
    }
    getFeatureLayer() {
        const featureUrl = this.props.config.services.service_1.url;
        return new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_10__["default"]({ url: featureUrl, outFields: ["*"] });
    }
    activeViewChangeHandler(jmv) {
        if (jmv) {
            jmv.view.map.add(this.graphicLayerFound);
            jmv.view.map.add(this.graphicLayerSelected);
            Widget.activeView = jmv;
            let arraySup = [];
            let layersIds = [];
            const services = this.props.config.services;
            const serviceItems = Object.keys(services);
            serviceItems.forEach((key) => {
                arraySup.push({
                    label: services[key].title,
                    value: key
                });
            });
            const searchWidget = new esri_widgets_Search__WEBPACK_IMPORTED_MODULE_7__["default"]({
                view: jmv.view,
                resultGraphicEnabled: true,
                container: "search-widget-address" //TODO migliorare senza id cablato
            });
            searchWidget.on("select-result", (event) => {
                if (event && event.result && event.result.feature) {
                    // jmv.selectFeaturesByGraphic(event.result.feature,"contains").then((results)=>{
                    //     const searchedLayers = helper.getSelectedLayerFromSearch(results);
                    //     this.setState({searchedLayers:searchedLayers})
                    // })
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
            this.setState({
                arrayLayer: arraySup,
                jimuMapView: jmv,
                searchWidget: searchWidget,
                layersIds: layersIds
                // sketchWidget:sketch
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
        return __awaiter(this, void 0, void 0, function* () {
            if (e.target.checked) {
                const copiedListServices = [...this.state.listServices, n];
                this.setState({ listServices: copiedListServices });
            }
            else {
                let index = this.state.listServices.indexOf(n);
                if (index > -1) {
                    const copiedListServices = [...this.state.listServices];
                    copiedListServices.splice(index, 1);
                    this.setState({ listServices: copiedListServices });
                }
            }
        });
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
            yield esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_8__["default"].load();
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
            let configErrors = [];
            //TODO PRENDERE GEOMETRIA
            this.graphicLayerFound.graphics.forEach(g => {
                const services = this.props.config.services;
                const serviceKeys = Object.keys(services);
                if (serviceKeys.length) {
                    for (let i = 0; i < serviceKeys.length; i++) {
                        const currentService = services[serviceKeys[i]];
                        const searchedLayers = this.state.searchedLayers;
                        if (searchedLayers.length) {
                            const item = searchedLayers.find((item) => {
                                if (item.featureServer === currentService.url &&
                                    currentService.layerListIds.includes(item.id)) {
                                    return item;
                                }
                            });
                            if (Boolean(item)) {
                                //@ts-ignore
                                g.geometry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_3__["default"].buffer(g.geometry, this.state.valueBufferAddress, "meters");
                                arrayGeometry.push(g.geometry);
                            }
                        }
                    }
                }
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
            if (!arrayGeometry.length && configErrors.length > 0)
                arrayErrors = configErrors;
            this.setState({
                errorMessage: arrayErrors.join()
            });
            if (arrayErrors.length === 0 && this.props.config.settings.idWidgetTable !== "") {
                this.state.jimuMapView.view.map.allLayers.forEach((f, index) => {
                    var _a;
                    if (f && f.type === "feature" && this.state.listServices.indexOf(index) !== -1) {
                        if ((_a = f.labelingInfo) === null || _a === void 0 ? void 0 : _a.length) {
                            f.labelingInfo[0].symbol.font.family = "Arial"; //fix font verdana not in static esri
                            f.labelsVisible = this.state.labelVisible;
                        }
                    }
                });
                const idWidgetTable = this.props.config.settings.idWidgetTable !== " " ? this.props.config.settings.idWidgetTable : "value";
                //mando layerid ad TableList
                this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "layerOpen", {
                    typeSelected: this.state.typeSelected,
                    geometry: this.state.geometry.toJSON(),
                    listServices: this.state.listServices,
                    activeView: this.getActiveView,
                    getAllLayers: this.getAllCheckedLayers
                }));
            }
        });
    }
    onClickResearchfromCoord() {
        return __awaiter(this, void 0, void 0, function* () {
            this.state.jimuMapView.view.map.tables.removeAll();
            let long = this.state.long_e_1 + "." + this.state.long_e_2 + this.state.long_e_3 + "*";
            let lat = this.state.lat_e_1 + "." + this.state.lat_e_2 + this.state.lat_e_3 + "*";
            yield esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_8__["default"].load();
            let pointGeographic = esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_8__["default"].fromLatitudeLongitude(lat + "|" + long);
            let point = esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_9__["default"].geographicToWebMercator(pointGeographic);
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
            if (arrayErrors.length === 0 && this.props.config.settings.idWidgetTable !== "") {
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
                this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(this.props.config.settings.idWidgetTable, "layerOpen", {
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
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", null,
                                            "Layer selezionati: ",
                                            this.state.listServices.length,
                                            " / ",
                                            this.state.arrayLayer.length),
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
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", null,
                                            "Layer selezionati: ",
                                            this.state.listServices.length,
                                            " / ",
                                            this.state.arrayLayer.length),
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
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", null,
                                            "Layer selezionati: ",
                                            this.state.listServices.length,
                                            " / ",
                                            this.state.arrayLayer.length),
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

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9pbmRpcml6emkvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdvRDtBQUdwRCxNQUFNLE1BQU07SUFBWjtRQUVJLG1CQUFjLEdBQUcsQ0FBQyxVQUFpQixFQUFDLFVBQWlCLEVBQUMsRUFBRTtZQUNwRCxJQUFJLFdBQVcsR0FBRyxVQUFVLENBQUM7WUFDN0IsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQyxNQUFNLFlBQVksR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JELElBQUksWUFBWSxLQUFLLENBQUMsQ0FBQyxFQUFDO2dCQUNwQixJQUFJLFdBQVcsQ0FBQyxZQUFZLEdBQUMsQ0FBQyxDQUFDLEVBQUM7b0JBQzVCLFdBQVcsR0FBRyxXQUFXLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM3QzthQUNKO1lBQ0QsT0FBTyxXQUFXLENBQUM7UUFDdkIsQ0FBQztRQUVELHdCQUFtQixHQUFHLENBQUMsR0FBVSxFQUFDLEVBQUU7WUFDaEMsbUNBQW1DO1lBQ25DLHFDQUFxQztZQUNyQyw0QkFBNEI7WUFDNUIsa0VBQWtFO1lBQ2xFLElBQUc7Z0JBQ0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxnRUFBWSxDQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7Z0JBQzFDLE9BQU8sS0FBSzthQUNmO1lBQ0QsT0FBTSxHQUFHLEVBQUM7Z0JBQ04sT0FBTyxJQUFJLENBQUM7YUFDZjtRQUNMLENBQUM7UUFFRCwrQkFBMEIsR0FBRyxDQUFDLE9BQWEsRUFBQyxFQUFFO1lBQzFDLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO2dCQUNuQixLQUFLLElBQUksQ0FBQyxHQUFFLENBQUMsRUFBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQztvQkFDakMsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUM7d0JBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDOzRCQUN2QyxNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDOzRCQUNwQyxNQUFNLE1BQU0sR0FBRyxFQUFDLGFBQWEsRUFBQyxLQUFLLENBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxLQUFLLENBQUMsT0FBTyxFQUFDOzRCQUN6RCxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzt5QkFDM0I7cUJBQ0o7aUJBQ0o7YUFDSjtZQUNELE9BQU8sV0FBVyxDQUFDO1FBQ3ZCLENBQUM7SUFDTCxDQUFDO0NBQUE7QUFFRCxpRUFBZSxJQUFJLE1BQU0sRUFBRSxFQUFDOzs7Ozs7Ozs7Ozs7QUNwRDVCOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05uRCxlQUFlO0FBQ2lEO0FBRW9EO0FBQzlEO0FBQ0k7QUFDa0I7QUFDRjtBQUN2QztBQUNNO0FBRTJCO0FBQ0U7QUFDbEI7QUFFZDtBQUl2QixNQUFNLE1BQU8sU0FBUSwwREFBa0Q7SUFpQmxGLFlBQWEsS0FBSztRQUNoQixLQUFLLENBQUMsS0FBSyxDQUFDO1FBZGQsc0JBQWlCLEdBQUcsSUFBSSxpRUFBYSxDQUFDLEVBQUMsRUFBRSxFQUFDLHdCQUF3QixFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7UUFDbEcseUJBQW9CLEdBQUcsSUFBSSxpRUFBYSxDQUFDLEVBQUMsRUFBRSxFQUFDLDJCQUEyQixFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7UUFFeEcsZ0JBQVcsR0FBRztZQUNWLElBQUksRUFBRSxhQUFhO1lBQ25CLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUN6QixLQUFLLEVBQUUsT0FBTztZQUNkLE9BQU8sRUFBRTtnQkFDTCxLQUFLLEVBQUUsWUFBWTtnQkFDbkIsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsS0FBSyxFQUFFLENBQUM7YUFDWDtTQUNKLENBQUM7UUFJQSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsV0FBVyxFQUFFLElBQUk7WUFDakIsWUFBWSxFQUFDLElBQUk7WUFDakIsY0FBYyxFQUFFLElBQUk7WUFFcEIsZUFBZSxFQUFDO1lBQ1osTUFBTTthQUNUO1lBRUQsT0FBTztZQUNQLFFBQVEsRUFBQyxFQUFFO1lBQ1gsUUFBUSxFQUFDLEVBQUU7WUFDWCxRQUFRLEVBQUMsRUFBRTtZQUNYLE9BQU8sRUFBQyxFQUFFO1lBQ1YsT0FBTyxFQUFDLEVBQUU7WUFDVixPQUFPLEVBQUMsRUFBRTtZQUVWLFVBQVUsRUFBRSxFQUFFO1lBQ2Qsa0JBQWtCLEVBQUUsQ0FBQztZQUNyQixnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLFFBQVEsRUFBQyxJQUFJO1lBQ2IsWUFBWSxFQUFDLElBQUk7WUFDakIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsU0FBUyxFQUFDLEVBQUU7WUFDWixjQUFjLEVBQUMsRUFBRTtTQUNwQixDQUFDO1FBRUYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFaEQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFakUsQ0FBQztJQUVELGFBQWE7UUFDVCxPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDN0IsQ0FBQztJQUVELG1CQUFtQjtRQUNmLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxVQUFVLEVBQUM7WUFDWCxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQ3ZDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQzdDLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBQztnQkFDakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7b0JBQ3BDLE1BQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckMsTUFBTSxVQUFVLEdBQUcsZUFBZSxDQUFDLFVBQVU7b0JBQzdDLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBQzt3QkFDbEMsTUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQzt3QkFDMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7NEJBQ3BDLE1BQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDbEMsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBQztnQ0FDbkMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDOzZCQUN2Qzt5QkFDSjtxQkFDSjtpQkFDSjthQUNKO1NBQ0o7UUFDRCxPQUFPLGdCQUFnQixDQUFDO0lBQzVCLENBQUM7SUFFRCxlQUFlO1FBQ1gsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDNUQsT0FBTyxJQUFJLGlFQUFZLENBQUMsRUFBQyxHQUFHLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsdUJBQXVCLENBQUUsR0FBZ0I7UUFDckMsSUFBSSxHQUFHLEVBQUU7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDekMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNsQixJQUFJLFNBQVMsR0FBRyxFQUFFO1lBRWxCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDM0MsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFDLEVBQUU7Z0JBQ3hCLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ1YsS0FBSyxFQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLO29CQUN6QixLQUFLLEVBQUMsR0FBRztpQkFDWixDQUFDO1lBQ04sQ0FBQyxDQUFDO1lBRUYsTUFBTSxZQUFZLEdBQUcsSUFBSSwyREFBTSxDQUFDO2dCQUM1QixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7Z0JBQ2Qsb0JBQW9CLEVBQUMsSUFBSTtnQkFDekIsU0FBUyxFQUFFLHVCQUF1QixtQ0FBa0M7YUFDdkUsQ0FBQyxDQUFDO1lBRUgsWUFBWSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLEVBQUMsRUFBRTtnQkFDdEMsSUFBRyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQztvQkFDN0MsaUZBQWlGO29CQUNqRix5RUFBeUU7b0JBQ3pFLHFEQUFxRDtvQkFDckQsS0FBSztvQkFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUVuQyxZQUFZO29CQUNaLE1BQU0sY0FBYyxHQUFZLDJFQUFxQixDQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQ3RHLHNHQUFzRztvQkFFdEcsTUFBTSxjQUFjLEdBQUcsSUFBSSxvREFBTyxDQUFDO3dCQUMvQixRQUFRLEVBQUUsY0FBYzt3QkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXO3FCQUMzQixDQUFDLENBQUM7b0JBRUgsR0FBRyxDQUFDLHVCQUF1QixDQUFDLGNBQWMsRUFBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUMsRUFBRTt3QkFDbkUsTUFBTSxjQUFjLEdBQUcsa0ZBQWlDLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ2xFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxjQUFjLEVBQUMsY0FBYyxFQUFDLENBQUM7b0JBQ2xELENBQUMsQ0FBQztvQkFFRixJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2lCQUU5QztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsV0FBVyxFQUFFLEdBQUc7Z0JBQ2hCLFlBQVksRUFBQyxZQUFZO2dCQUN6QixTQUFTLEVBQUMsU0FBUztnQkFDbkIsc0JBQXNCO2FBQ3pCLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVELFlBQVk7UUFDUixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFDRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWTtTQUN6QyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWM7U0FDN0MsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsYUFBYTtJQUNiLG1CQUFtQixDQUFDLENBQUMsRUFBQyxJQUFJO1FBQ3hCLElBQUcsSUFBSSxJQUFFLFdBQVcsRUFBQztZQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7YUFDRztZQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjtJQUVILENBQUM7SUFDRCxTQUFTLENBQUMsR0FBRyxFQUFDLENBQUM7UUFDWCxNQUFNLFFBQVEsR0FBRyxFQUFFO1FBQ25CLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSyxtQkFBbUIsQ0FBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7O1lBQzVCLElBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUM7Z0JBQ2hCLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsWUFBWSxFQUFDLGtCQUFrQixFQUFDLENBQUM7YUFDbkQ7aUJBQUk7Z0JBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDWixNQUFNLGtCQUFrQixHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN4RCxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsWUFBWSxFQUFDLGtCQUFrQixFQUFDLENBQUM7aUJBQ25EO2FBQ0o7UUFFTCxDQUFDO0tBQUE7SUFDRCwwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hCLGFBQWE7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsVUFBVSxDQUFDLEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRztRQUMzQixNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdGLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRztZQUN6QixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSztnQkFDakQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0IsT0FBTyxNQUFNLENBQUM7WUFDbEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUsseUJBQXlCLENBQUMsQ0FBQzs7WUFDN0IsTUFBTSw4RUFBd0IsRUFBRSxDQUFDO1FBQ3JDLENBQUM7S0FBQTtJQUVELHFCQUFxQixDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdELENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixnQkFBZ0IsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztTQUMzRCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0ssMEJBQTBCOztZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUVuRCxnQkFBZ0I7WUFDaEIsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN0Qix5QkFBeUI7WUFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFFO2dCQUN2QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7Z0JBQzVDLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzFDLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBQztvQkFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7d0JBQ3RDLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDaEQsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7d0JBQ2pELElBQUksY0FBYyxDQUFDLE1BQU0sRUFBQzs0QkFDdEIsTUFBTSxJQUFJLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBQyxFQUFFO2dDQUNyQyxJQUNRLElBQUksQ0FBQyxhQUFhLEtBQUssY0FBYyxDQUFDLEdBQUc7b0NBQ3pDLGNBQWMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFDaEQ7b0NBQ0csT0FBTyxJQUFJLENBQUM7aUNBQ2Y7NEJBQ1QsQ0FBQyxDQUFDOzRCQUNGLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDO2dDQUNkLFlBQVk7Z0NBQ1osQ0FBQyxDQUFDLFFBQVEsR0FBRywyRUFBcUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0NBQ3hGLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzZCQUNsQzt5QkFDSjtxQkFDSjtpQkFDSjtZQUVMLENBQUMsQ0FBQyxDQUFDO1lBQ0gsa0JBQWtCO1lBQ2xCLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUNyQixJQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxhQUFhO2dCQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRywwRUFBb0IsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUM3RDs7Z0JBQ0ksV0FBVyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQzFELElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNO2dCQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUNyRixJQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO2dCQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQztZQUN0RixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQUUsV0FBVyxHQUFHLFlBQVk7WUFFaEYsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixZQUFZLEVBQUMsV0FBVyxDQUFDLElBQUksRUFBRTthQUNsQyxDQUFDLENBQUM7WUFFSCxJQUFHLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEtBQUssRUFBRSxFQUFDO2dCQUUzRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7O29CQUMzRCxJQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFHLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUM7d0JBQ3hFLElBQUcsT0FBQyxDQUFDLFlBQVksMENBQUUsTUFBTSxFQUFDOzRCQUN0QixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxzQ0FBcUM7NEJBQ3BGLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7eUJBQzdDO3FCQUNKO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNILE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBTztnQkFDMUgsNEJBQTRCO2dCQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDZix1RUFBZ0MsQ0FDNUIsT0FBTyxFQUNQLFdBQVcsRUFDWDtvQkFDSSxZQUFZLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO29CQUNwQyxRQUFRLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO29CQUNyQyxZQUFZLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO29CQUNwQyxVQUFVLEVBQUMsSUFBSSxDQUFDLGFBQWE7b0JBQzdCLFlBQVksRUFBQyxJQUFJLENBQUMsbUJBQW1CO2lCQUN4QyxDQUNKLENBQ0osQ0FBQzthQUNMO1FBQ0wsQ0FBQztLQUFBO0lBQ0ssd0JBQXdCOztZQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNuRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ3ZGLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFFbkYsTUFBTSw4RUFBd0IsRUFBRSxDQUFDO1lBQ2pDLElBQUksZUFBZSxHQUFHLCtGQUF5QyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDbEYsSUFBSSxLQUFLLEdBQUcsc0dBQXdDLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFdEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV4QyxJQUFJLFFBQVEsR0FBRywyRUFBcUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3pELE1BQU0sY0FBYyxHQUFHLElBQUksb0RBQU8sQ0FBQztnQkFDL0IsWUFBWTtnQkFDWixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXO2FBQzNCLENBQUMsQ0FBQztZQUdILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFM0MsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLHlCQUF5QjtZQUN6QixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUU7Z0JBQ3ZDLGFBQWE7Z0JBQ2IsQ0FBQyxDQUFDLFFBQVEsR0FBRywyRUFBcUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ3RGLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1lBRUgsa0JBQWtCO1lBQ2xCLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUNyQixJQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxhQUFhO2dCQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRywwRUFBb0IsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUM3RDs7Z0JBQ0ksV0FBVyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQzFELElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNO2dCQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUNyRixJQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO2dCQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQztZQUV0RixJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNWLFlBQVksRUFBQyxXQUFXLENBQUMsSUFBSSxFQUFFO2FBQ2xDLENBQUMsQ0FBQztZQUVILElBQUcsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsS0FBSyxFQUFFLEVBQUM7Z0JBRTNFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTs7b0JBQzNELElBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUcsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQzt3QkFDeEUsSUFBRyxPQUFDLENBQUMsWUFBWSwwQ0FBRSxNQUFNLEVBQUM7NEJBQ3RCLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLHNDQUFxQzs0QkFDcEYsQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQzt5QkFDN0M7cUJBQ0o7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsNEJBQTRCO2dCQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDZix1RUFBZ0MsQ0FDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFDeEMsV0FBVyxFQUNYO29CQUNJLFlBQVksRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVk7b0JBQ3BDLFFBQVEsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7b0JBQ3JDLFlBQVksRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVk7aUJBQ3ZDLENBQ0osQ0FDSixDQUFDO2FBQ0w7UUFDTCxDQUFDO0tBQUE7SUFHSCxNQUFNOztRQUNKLE9BQU8sQ0FDSCx3REFBSyxTQUFTLEVBQUMsNkNBQTZDLEVBQUMsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQztZQUNoRixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzVHLCtDQUFDLDZEQUFvQixJQUFDLGNBQWMsRUFBRSxVQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsMENBQUcsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixHQUFJLENBQzlIO1lBQ0Qsd0RBQUssU0FBUyxFQUFDLGVBQWU7Z0JBQzFCLHdEQUFLLFNBQVMsRUFBQyxXQUFXO29CQUN0QiwrQ0FBQywwQ0FBSyxJQUFDLE9BQU8sUUFBQyxLQUFLO3dCQUNoQiwrQ0FBQyw2Q0FBUSxJQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFZLDhCQUE4QixFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxHQUFHO3VEQUUzSSxDQUNOLENBQ0o7WUFDTix3REFBSyxTQUFTLEVBQUMsZUFBZTtnQkFDMUIsd0RBQUssU0FBUyxFQUFDLFdBQVc7b0JBQ3RCLCtDQUFDLDBDQUFLLElBQUMsT0FBTyxRQUFDLEtBQUs7d0JBQ2hCLCtDQUFDLDZDQUFRLElBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQVksOEJBQThCLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHOytDQUVoSSxDQUNOLENBQ0o7WUFDTiwrQ0FBQyx5Q0FBSSxJQUNELFlBQVksRUFBQyxPQUFPLEVBQ3BCLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUMzQixJQUFJLEVBQUMsTUFBTTtnQkFFWCwrQ0FBQyx3Q0FBRyxJQUFDLEVBQUUsRUFBQyw0QkFBNEIsRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxRQUFRO29CQUNoRTt3QkFDSSx3REFBSyxTQUFTLEVBQUMsMkJBQTJCOzRCQUN0Qyx3REFBSyxTQUFTLEVBQUMsS0FBSztnQ0FDaEIsc0ZBQW9DO2dDQUNwQyx3REFBSyxFQUFFLEVBQUMsdUJBQXVCLEVBQUMsU0FBUyxFQUFDLE9BQU8sR0FBTyxDQUN0RCxDQUNKO3dCQUNOLCtDQUFDLGdFQUFnQixJQUFDLFNBQVMsRUFBQyxXQUFXOzRCQUNuQywrQ0FBQyxvRUFBb0Isa0JBQVksS0FBSyxFQUFDLFNBQVMsRUFBQyxpQ0FBaUM7Z0NBQzlFLHdEQUFLLFNBQVMsRUFBQywyQkFBMkI7b0NBQ3RDLHdEQUFLLFNBQVMsRUFBQyxLQUFLO3dDQUNoQjs7NENBQTJCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU07OzRDQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBUzt3Q0FDbkcsK0NBQUMsZ0RBQVcsSUFDUixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQzVCLFdBQVcsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQ3JDLFdBQVcsRUFBQyxlQUFlLEdBQzdCLENBQ0EsQ0FDSixDQUNhOzRCQUN2QiwrQ0FBQyxvRUFBb0Isa0JBQVksS0FBSyxFQUFDLFNBQVMsRUFBQyxvQkFBb0I7Z0NBQ2pFLHdEQUFLLFNBQVMsRUFBQywyQkFBMkI7b0NBQ3RDLHdEQUFLLFNBQVMsRUFBQyxLQUFLO3dDQUNoQiwwREFBTyxTQUFTLEVBQUMsT0FBTzs7NENBQ0gsK0NBQUMsaURBQVksSUFBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLFNBQVMsRUFBQyxxQkFBcUIsR0FBRTs7NENBQ3pMLCtDQUFDLDJDQUFNLElBQ0gsU0FBUyxFQUFDLFlBQVksZ0JBQ1gsT0FBTyxFQUNsQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFDcEMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQzNDLEdBQUcsRUFBRSxJQUFJLEVBQ1QsR0FBRyxFQUFFLENBQUMsRUFDTixRQUFRLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUNwQyxJQUFJLEVBQUUsQ0FBQyxHQUNULENBQ0UsQ0FDTjtvQ0FDTix3REFBSyxTQUFTLEVBQUMsVUFBVTt3Q0FDckIsMERBQU8sU0FBUyxFQUFDLE9BQU87OzRDQUVwQiwrQ0FBQywyQ0FBTSxJQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQywwQkFBMEIsRUFBRSxXQUFXLEVBQUMsbUJBQW1CO2dEQUNyRywrQ0FBQywyQ0FBTSxJQUFDLEtBQUssRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLFVBQVUsaUJBQW9CO2dEQUNsRSwrQ0FBQywyQ0FBTSxJQUFDLEtBQUssRUFBQyxVQUFVLGVBQWtCO2dEQUMxQywrQ0FBQywyQ0FBTSxJQUFDLEtBQUssRUFBQyxTQUFTLGNBQWlCO2dEQUN4QywrQ0FBQywyQ0FBTSxJQUFDLEtBQUssRUFBQyxxQkFBcUIsMEJBQTZCO2dEQUNoRSwrQ0FBQywyQ0FBTSxJQUFDLEtBQUssRUFBQyxrQkFBa0IsdUJBQTBCO2dEQUMxRCwrQ0FBQywyQ0FBTSxJQUFDLEtBQUssRUFBQyxVQUFVLGVBQWtCO2dEQUMxQywrQ0FBQywyQ0FBTSxJQUFDLEtBQUssRUFBQyxTQUFTLGNBQWlCO2dEQUN4QywrQ0FBQywyQ0FBTSxJQUFDLEtBQUssRUFBQyxRQUFRLGFBQWdCO2dEQUN0QywrQ0FBQywyQ0FBTSxJQUFDLEtBQUssRUFBQyxVQUFVLGVBQWtCLENBQ3JDLENBQ0wsQ0FDTixDQUNKLENBQ2EsQ0FDUjt3QkFFbkIsK0NBQUMsMkNBQU0sSUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQywwQkFBMEIsd0JBQTRCO3dCQUU1RyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ3pELCtDQUFDLDBDQUFLLElBQ0YsSUFBSSxFQUFDLE9BQU8sRUFDWixJQUFJLFFBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUM3QixJQUFJLEVBQUMsU0FBUyxFQUNkLFNBQVMsRUFBQyxZQUFZLEVBQ3RCLFFBQVEsU0FDVixDQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQ04sQ0FDSjtnQkE2Qk4sK0NBQUMsd0NBQUcsSUFBQyxFQUFFLEVBQUMsMkJBQTJCLEVBQUMsU0FBUyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxZQUFZO29CQUNyRjt3QkFDSSx3REFBSyxTQUFTLEVBQUMsMkJBQTJCOzRCQUN0Qyx3REFBSyxTQUFTLEVBQUMsZUFBZTtnQ0FDMUIsd0RBQUssU0FBUyxFQUFDLGdCQUFnQjtvQ0FDM0IsMERBQU8sU0FBUyxFQUFDLE1BQU0saUJBRWY7b0NBQ1IsK0NBQUMsaURBQVksSUFBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMscUJBQXFCLEdBQUU7b0NBQzFILCtDQUFDLGlEQUFZLElBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLHFCQUFxQixHQUFFO29DQUMxSCwrQ0FBQyxpREFBWSxJQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBQyxxQkFBcUIsR0FBRSxDQUN4SCxDQUNKOzRCQUNOLHdEQUFLLFNBQVMsRUFBQyxVQUFVO2dDQUNyQix3REFBSyxTQUFTLEVBQUMsV0FBVztvQ0FDdEIsMERBQU8sU0FBUyxFQUFDLE1BQU0sZ0JBRWY7b0NBQ1IsK0NBQUMsaURBQVksSUFBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUMscUJBQXFCLEdBQUU7b0NBQ3hILCtDQUFDLGlEQUFZLElBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFDLHFCQUFxQixHQUFFO29DQUN4SCwrQ0FBQyxpREFBWSxJQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBQyxxQkFBcUIsR0FBRSxDQUN0SCxDQUNKLENBQ0o7d0JBQ04sK0NBQUMsZ0VBQWdCLElBQUMsU0FBUyxFQUFDLFdBQVc7NEJBQ25DLCtDQUFDLG9FQUFvQixrQkFBWSxLQUFLLEVBQUMsU0FBUyxFQUFDLGlDQUFpQztnQ0FDOUUsd0RBQUssU0FBUyxFQUFDLDJCQUEyQjtvQ0FDdEMsd0RBQUssU0FBUyxFQUFDLEtBQUs7d0NBQ2hCOzs0Q0FBMkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTTs7NENBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFTO3dDQUNuRywrQ0FBQyxnREFBVyxJQUNSLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFDNUIsV0FBVyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFDckMsV0FBVyxFQUFDLGVBQWUsR0FDN0IsQ0FDQSxDQUNKLENBQ2E7NEJBQ3ZCLCtDQUFDLG9FQUFvQixrQkFBWSxLQUFLLEVBQUMsU0FBUyxFQUFDLG9CQUFvQjtnQ0FDakUsd0RBQUssU0FBUyxFQUFDLDJCQUEyQjtvQ0FDdEMsd0RBQUssU0FBUyxFQUFDLEtBQUs7d0NBQ2hCLDBEQUFPLFNBQVMsRUFBQyxPQUFPOzs0Q0FDSCwrQ0FBQyxpREFBWSxJQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsU0FBUyxFQUFDLHFCQUFxQixHQUFFOzs0Q0FDbkwsK0NBQUMsMkNBQU0sSUFDSCxTQUFTLEVBQUMsWUFBWSxnQkFDWCxPQUFPLEVBQ2xCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUNsQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFDekMsR0FBRyxFQUFFLElBQUksRUFDVCxHQUFHLEVBQUUsQ0FBQyxFQUNOLFFBQVEsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQ2xDLElBQUksRUFBRSxDQUFDLEdBQ1QsQ0FDRSxDQUNOO29DQUNOLHdEQUFLLFNBQVMsRUFBQyxVQUFVO3dDQUNyQiwwREFBTyxTQUFTLEVBQUMsT0FBTzs7NENBRXBCLCtDQUFDLDJDQUFNLElBQUMsU0FBUyxFQUFDLFlBQVksRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLDBCQUEwQixFQUFFLFdBQVcsRUFBQyxtQkFBbUI7Z0RBQ3JHLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFDLFlBQVksRUFBQyxRQUFRLEVBQUMsVUFBVSxpQkFBb0I7Z0RBQ2xFLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFDLFVBQVUsZUFBa0I7Z0RBQzFDLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFDLFNBQVMsY0FBaUI7Z0RBQ3hDLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFDLHFCQUFxQiwwQkFBNkI7Z0RBQ2hFLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFDLGtCQUFrQix1QkFBMEI7Z0RBQzFELCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFDLFVBQVUsZUFBa0I7Z0RBQzFDLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFDLFNBQVMsY0FBaUI7Z0RBQ3hDLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFDLFFBQVEsYUFBZ0I7Z0RBQ3RDLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFDLFVBQVUsZUFBa0IsQ0FDckMsQ0FDTCxDQUNOLENBQ0osQ0FDYSxDQUNSO3dCQUVuQiwrQ0FBQywyQ0FBTSxJQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLHdCQUF3Qix3QkFBNEI7d0JBRTFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDekQsK0NBQUMsMENBQUssSUFDRixJQUFJLEVBQUMsT0FBTyxFQUNaLElBQUksUUFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQzdCLElBQUksRUFBQyxTQUFTLEVBQ2QsU0FBUyxFQUFDLFlBQVksRUFDdEIsUUFBUSxTQUNWLENBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FDTixDQUVKO2dCQUNOLCtDQUFDLHdDQUFHLElBQUMsRUFBRSxFQUFDLGdDQUFnQyxFQUFDLFNBQVMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMseUJBQXlCO29CQUN2Rzt3QkFDSSx3REFBSyxTQUFTLEVBQUMsMkJBQTJCOzRCQUN0Qyx3REFBSyxTQUFTLEVBQUMsVUFBVTtnQ0FDckIsMERBQU8sU0FBUyxFQUFDLGtCQUFrQiwyQkFFM0I7Z0NBRVIsMERBQU8sU0FBUyxFQUFDLGNBQWMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMseUJBQXlCLEdBQUc7Z0NBRXZGLHdEQUFLLFNBQVMsRUFBQyxnQkFBZ0Isc0dBR3pCLENBQ0osQ0FDSjt3QkFDTiwrQ0FBQyxnRUFBZ0IsSUFBQyxTQUFTLEVBQUMsV0FBVzs0QkFDbkMsK0NBQUMsb0VBQW9CLGtCQUFZLEtBQUssRUFBQyxTQUFTLEVBQUMsaUNBQWlDO2dDQUM5RSx3REFBSyxTQUFTLEVBQUMsMkJBQTJCO29DQUN0Qyx3REFBSyxTQUFTLEVBQUMsS0FBSzt3Q0FDaEI7OzRDQUEyQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNOzs0Q0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQVM7d0NBQ25HLCtDQUFDLGdEQUFXLElBQ1IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUM1QixXQUFXLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUNyQyxXQUFXLEVBQUMsZUFBZSxHQUM3QixDQUNBLENBQ0osQ0FDYTs0QkFDdkIsK0NBQUMsb0VBQW9CLGtCQUFZLEtBQUssRUFBQyxTQUFTLEVBQUMsb0JBQW9CO2dDQUNqRSx3REFBSyxTQUFTLEVBQUMsMkJBQTJCO29DQUN0Qyx3REFBSyxTQUFTLEVBQUMsS0FBSzt3Q0FDaEIsMERBQU8sU0FBUyxFQUFDLE9BQU87OzRDQUNILCtDQUFDLGlEQUFZLElBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxTQUFTLEVBQUMscUJBQXFCLEdBQUU7OzRDQUNuTCwrQ0FBQywyQ0FBTSxJQUNILFNBQVMsRUFBQyxZQUFZLGdCQUNYLE9BQU8sRUFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQ2xDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUN6QyxHQUFHLEVBQUUsSUFBSSxFQUNULEdBQUcsRUFBRSxDQUFDLEVBQ04sUUFBUSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFDbEMsSUFBSSxFQUFFLENBQUMsR0FDVCxDQUNFLENBQ047b0NBQ04sd0RBQUssU0FBUyxFQUFDLFVBQVU7d0NBQ3JCLDBEQUFPLFNBQVMsRUFBQyxPQUFPOzs0Q0FFcEIsK0NBQUMsMkNBQU0sSUFBQyxTQUFTLEVBQUMsWUFBWSxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsMEJBQTBCLEVBQUUsV0FBVyxFQUFDLG1CQUFtQjtnREFDckcsK0NBQUMsMkNBQU0sSUFBQyxLQUFLLEVBQUMsWUFBWSxFQUFDLFFBQVEsRUFBQyxVQUFVLGlCQUFvQjtnREFDbEUsK0NBQUMsMkNBQU0sSUFBQyxLQUFLLEVBQUMsVUFBVSxlQUFrQjtnREFDMUMsK0NBQUMsMkNBQU0sSUFBQyxLQUFLLEVBQUMsU0FBUyxjQUFpQjtnREFDeEMsK0NBQUMsMkNBQU0sSUFBQyxLQUFLLEVBQUMscUJBQXFCLDBCQUE2QjtnREFDaEUsK0NBQUMsMkNBQU0sSUFBQyxLQUFLLEVBQUMsa0JBQWtCLHVCQUEwQjtnREFDMUQsK0NBQUMsMkNBQU0sSUFBQyxLQUFLLEVBQUMsVUFBVSxlQUFrQjtnREFDMUMsK0NBQUMsMkNBQU0sSUFBQyxLQUFLLEVBQUMsU0FBUyxjQUFpQjtnREFDeEMsK0NBQUMsMkNBQU0sSUFBQyxLQUFLLEVBQUMsUUFBUSxhQUFnQjtnREFDdEMsK0NBQUMsMkNBQU0sSUFBQyxLQUFLLEVBQUMsVUFBVSxlQUFrQixDQUNyQyxDQUNMLENBQ04sQ0FDSixDQUNhLENBQ1I7d0JBRW5CLCtDQUFDLDJDQUFNLElBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsd0JBQXdCLHdCQUE0Qjt3QkFFMUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUN6RCwrQ0FBQywwQ0FBSyxJQUNGLElBQUksRUFBQyxPQUFPLEVBQ1osSUFBSSxRQUNKLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDN0IsSUFBSSxFQUFDLFNBQVMsRUFDZCxTQUFTLEVBQUMsWUFBWSxFQUN0QixRQUFRLFNBQ1YsQ0FDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUNOLENBRUosQ0FDSCxDQUNMLENBRVQ7SUFDSCxDQUFDOztBQS9xQlEsaUJBQVUsR0FBRyxJQUFJLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvaW5kaXJpenppL3NyYy9oZWxwZXIvaGVscGVyLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiY2FsY2l0ZS1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL0dyYXBoaWNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvY29vcmRpbmF0ZUZvcm1hdHRlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9zdXBwb3J0L3dlYk1lcmNhdG9yVXRpbHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS93aWRnZXRzL1NlYXJjaFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvaW5kaXJpenppL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUXVlcnkgZnJvbSBcImVzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5XCI7XG5pbXBvcnQgcXVlcnkgZnJvbSAnZXNyaS9yZXN0L3F1ZXJ5JztcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xuXG5cbmNsYXNzIEhlbHBlciB7XG5cbiAgICBnZXRTZXJ2aWNlTmFtZSA9IChzZXJ2aWNlVXJsOnN0cmluZyxzZXJ2aWNlS2V5OnN0cmluZyk9PntcbiAgICAgICAgbGV0IHNlcnZpY2VOYW1lID0gc2VydmljZUtleTtcbiAgICAgICAgY29uc3Qgc3RyaW5nQXJyYXkgPSBzZXJ2aWNlVXJsLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgY29uc3Qgc2VydmljZUluZGV4ID0gc3RyaW5nQXJyYXkuaW5kZXhPZihcInNlcnZpY2VzXCIpO1xuICAgICAgICBpZiAoc2VydmljZUluZGV4ICE9PSAtMSl7XG4gICAgICAgICAgICBpZiAoc3RyaW5nQXJyYXlbc2VydmljZUluZGV4KzFdKXtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlTmFtZSA9IHN0cmluZ0FycmF5W3NlcnZpY2VJbmRleCsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VydmljZU5hbWU7XG4gICAgfVxuXG4gICAgcXVlcnlGZWF0dXJlU2VydmljZSA9ICh1cmw6c3RyaW5nKT0+e1xuICAgICAgICAvLyBjb25zdCBxdWVyeU9iamVjdCA9IG5ldyBRdWVyeSgpO1xuICAgICAgICAvLyBxdWVyeU9iamVjdC5yZXR1cm5HZW9tZXRyeSA9IHRydWU7XG4gICAgICAgIC8vIHF1ZXJ5T2JqZWN0LndoZXJlID0gXCIxPTFcIlxuICAgICAgICAvLyBjb25zdCByZXN1bHRzID0gYXdhaXQgcXVlcnkuZXhlY3V0ZVF1ZXJ5SlNPTih1cmwsIHF1ZXJ5T2JqZWN0KTtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHt1cmw6dXJsfSk7XG4gICAgICAgICAgICByZXR1cm4gbGF5ZXJcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnIpe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTZWxlY3RlZExheWVyRnJvbVNlYXJjaCA9IChyZXN1bHRzOmFueVtdKT0+e1xuICAgICAgICBjb25zdCBzZWxlY3RlZElkcyA9IFtdO1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPTA7aSA8IHJlc3VsdHMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5uZXJSZXN1bHRzID0gcmVzdWx0c1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoaW5uZXJSZXN1bHRzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwO2ogPCBpbm5lclJlc3VsdHMubGVuZ3RoO2orKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXllciA9IGlubmVyUmVzdWx0c1tqXS5sYXllcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IHtmZWF0dXJlU2VydmVyOmxheWVyLnVybCxpZDpsYXllci5sYXllcklkfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJZHMucHVzaChvYmplY3QpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkSWRzO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEhlbHBlcigpOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYWxjaXRlX2NvbXBvbmVudHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9HcmFwaGljX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfY29vcmRpbmF0ZUZvcm1hdHRlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X2dlb21ldHJ5RW5naW5lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfc3VwcG9ydF93ZWJNZXJjYXRvclV0aWxzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0ZlYXR1cmVMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19HcmFwaGljc0xheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfd2lkZ2V0c19TZWFyY2hfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHtBbGxXaWRnZXRQcm9wcywgYXBwQWN0aW9ucywganN4LCBSZWFjdH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQge0lNQ29uZmlnfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB7QWxlcnQsIEJ1dHRvbiwgQ2hlY2tib3gsIExhYmVsLCBNdWx0aVNlbGVjdCwgTnVtZXJpY0lucHV0LCBPcHRpb24sIFNlbGVjdCwgU2xpZGVyLCBUYWIsIFRhYnN9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gXCJlc3JpL2xheWVycy9HcmFwaGljc0xheWVyXCI7XHJcbmltcG9ydCBnZW9tZXRyeUVuZ2luZSBmcm9tIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiO1xyXG5pbXBvcnQge0ppbXVMYXllclZpZXcsIEppbXVNYXBWaWV3LCBKaW11TWFwVmlld0NvbXBvbmVudH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCB7Q2FsY2l0ZUFjY29yZGlvbiwgQ2FsY2l0ZUFjY29yZGlvbkl0ZW19IGZyb20gXCJjYWxjaXRlLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEdyYXBoaWMgZnJvbSAnZXNyaS9HcmFwaGljJztcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiZXNyaS93aWRnZXRzL1NlYXJjaFwiO1xyXG5pbXBvcnQgU2tldGNoIGZyb20gXCJlc3JpL3dpZGdldHMvU2tldGNoXCI7XHJcbmltcG9ydCBjb29yZGluYXRlRm9ybWF0dGVyIGZyb20gXCJlc3JpL2dlb21ldHJ5L2Nvb3JkaW5hdGVGb3JtYXR0ZXJcIjtcclxuaW1wb3J0IHdlYk1lcmNhdG9yVXRpbHMgZnJvbSBcImVzcmkvZ2VvbWV0cnkvc3VwcG9ydC93ZWJNZXJjYXRvclV0aWxzXCI7XHJcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJztcclxuaW1wb3J0IExheWVyVmlldyBmcm9tICdlc3JpL3ZpZXdzL2xheWVycy9MYXllclZpZXcnO1xyXG5pbXBvcnQgaGVscGVyIGZyb20gJy4uL2hlbHBlci9oZWxwZXInO1xyXG5pbXBvcnQgRXh0ZW50IGZyb20gJ2VzcmkvZ2VvbWV0cnkvRXh0ZW50JztcclxuaW1wb3J0IFBvbHlnb24gZnJvbSAnZXNyaS9nZW9tZXRyeS9Qb2x5Z29uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+LCBhbnk+IHtcclxuXHJcbiAgICBzdGF0aWMgYWN0aXZlVmlldyA9IG51bGw7XHJcbiAgICBcclxuICAgIGdyYXBoaWNMYXllckZvdW5kID0gbmV3IEdyYXBoaWNzTGF5ZXIoe2lkOlwiaW5kaXJpenppLWZvdW5kLXNrZXRjaFwiLGxpc3RNb2RlOlwiaGlkZVwiLHZpc2libGU6dHJ1ZX0pO1xyXG4gICAgZ3JhcGhpY0xheWVyU2VsZWN0ZWQgPSBuZXcgR3JhcGhpY3NMYXllcih7aWQ6XCJpbmRpcml6emktc2VsZWN0ZWQtc2tldGNoXCIsbGlzdE1vZGU6XCJoaWRlXCIsdmlzaWJsZTp0cnVlfSk7XHJcblxyXG4gICAgc3ltYm9sRm91bmQgPSB7XHJcbiAgICAgICAgdHlwZTogXCJzaW1wbGUtZmlsbFwiLFxyXG4gICAgICAgIGNvbG9yOiBbNTEsIDUxLCAyMDQsIDAuNV0sXHJcbiAgICAgICAgc3R5bGU6IFwic29saWRcIixcclxuICAgICAgICBvdXRsaW5lOiB7XHJcbiAgICAgICAgICAgIHN0eWxlOiBcInNob3J0LWRhc2hcIixcclxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgd2lkdGg6IDNcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgIGppbXVNYXBWaWV3OiBudWxsLFxyXG4gICAgICAgICAgbGFiZWxWaXNpYmxlOnRydWUsXHJcbiAgICAgICAgICB2aWV3U2VsZWN0RHJhdzogdHJ1ZSxcclxuXHJcbiAgICAgICAgICBmb3JtRXh0cmFVcmJhbm86e1xyXG4gICAgICAgICAgICAgIC8vVE9ET1xyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAvL0NPT1JEXHJcbiAgICAgICAgICBsb25nX2VfMToxMixcclxuICAgICAgICAgIGxvbmdfZV8yOjYyLFxyXG4gICAgICAgICAgbG9uZ19lXzM6ODYsXHJcbiAgICAgICAgICBsYXRfZV8xOjQxLFxyXG4gICAgICAgICAgbGF0X2VfMjo4MCxcclxuICAgICAgICAgIGxhdF9lXzM6NjYsXHJcblxyXG4gICAgICAgICAgYXJyYXlMYXllcjogW10sXHJcbiAgICAgICAgICB2YWx1ZUJ1ZmZlckFkZHJlc3M6IDAsXHJcbiAgICAgICAgICB2YWx1ZUJ1ZmZlckNvb3JkOiAwLFxyXG4gICAgICAgICAgZ2VvbWV0cnk6bnVsbCxcclxuICAgICAgICAgIHR5cGVTZWxlY3RlZDpudWxsLFxyXG4gICAgICAgICAgbGlzdFNlcnZpY2VzOiBbXSxcclxuICAgICAgICAgIGxheWVyc0lkczpbXSxcclxuICAgICAgICAgIHNlYXJjaGVkTGF5ZXJzOltdXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLl92aWV3TGFiZWxzID0gdGhpcy5fdmlld0xhYmVscy5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLl92aWV3U2VsZWN0RHJhdyA9IHRoaXMuX3ZpZXdTZWxlY3REcmF3LmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSB0aGlzLmFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMuc2F2ZVN0YXRlID0gdGhpcy5zYXZlU3RhdGUuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZVRhYnMgPSB0aGlzLm9uQ2hhbmdlVGFicy5iaW5kKHRoaXMpXHJcblxyXG4gICAgICB0aGlzLm9uQ2hhbmdlU2xpZGVyQWRkcmVzcyA9IHRoaXMub25DaGFuZ2VTbGlkZXJBZGRyZXNzLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VTbGlkZXJDb29yZCA9IHRoaXMub25DaGFuZ2VTbGlkZXJDb29yZC5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlU2VsZWN0VHlwZUdlb21ldHJ5ID0gdGhpcy5vbkNoYW5nZVNlbGVjdFR5cGVHZW9tZXRyeS5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlRmlsZUNzdkNvb3JkaW5hdGUgPSB0aGlzLm9uQ2hhbmdlRmlsZUNzdkNvb3JkaW5hdGUuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZVNlbGVjdExheWVyID0gdGhpcy5vbkNoYW5nZVNlbGVjdExheWVyLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMub25DbGlja1Jlc2VhcmNoZnJvbUFkZHJlc3MgPSB0aGlzLm9uQ2xpY2tSZXNlYXJjaGZyb21BZGRyZXNzLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMub25DbGlja1Jlc2VhcmNoZnJvbUNvb3JkID0gdGhpcy5vbkNsaWNrUmVzZWFyY2hmcm9tQ29vcmQuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgIHRoaXMuZ2V0QWxsQ2hlY2tlZExheWVycyA9IHRoaXMuZ2V0QWxsQ2hlY2tlZExheWVycy5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3RpdmVWaWV3KCl7XHJcbiAgICAgICAgcmV0dXJuIFdpZGdldC5hY3RpdmVWaWV3O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbENoZWNrZWRMYXllcnMoKXtcclxuICAgICAgICBjb25zdCBhY3RpdmVWaWV3ID0gV2lkZ2V0LmFjdGl2ZVZpZXc7XHJcbiAgICAgICAgbGV0IGFsbENoZWNrZWRMYXllcnMgPSBbXTtcclxuICAgICAgICBpZiAoYWN0aXZlVmlldyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsbExheWVycyA9IGFjdGl2ZVZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLml0ZW1zO1xyXG4gICAgICAgICAgICBjb25zdCBsYXllcnNJZHMgPSB0aGlzLnN0YXRlLmxheWVyc0lkcztcclxuICAgICAgICAgICAgY29uc3QgbGlzdFNlcnZpY2VzID0gdGhpcy5zdGF0ZS5saXN0U2VydmljZXM7XHJcbiAgICAgICAgICAgIGlmIChsYXllcnNJZHMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwO2kgPCBsYXllcnNJZHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudExheWVySWRzID0gbGF5ZXJzSWRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VLZXkgPSBjdXJyZW50TGF5ZXJJZHMuc2VydmljZUtleVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXN0U2VydmljZXMuaW5jbHVkZXMoc2VydmljZUtleSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXllcklkcyA9IGN1cnJlbnRMYXllcklkcy5sYXllcklkcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7aiA8IGFsbExheWVycy5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMYXllciA9IGFsbExheWVyc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXllcklkcy5pbmNsdWRlcyhjdXJyZW50TGF5ZXIuaWQpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxDaGVja2VkTGF5ZXJzLnB1c2goY3VycmVudExheWVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsQ2hlY2tlZExheWVycztcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0RmVhdHVyZUxheWVyICgpe1xyXG4gICAgICAgIGNvbnN0IGZlYXR1cmVVcmwgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXJ2aWNlcy5zZXJ2aWNlXzEudXJsO1xyXG4gICAgICAgIHJldHVybiBuZXcgRmVhdHVyZUxheWVyKHt1cmw6ZmVhdHVyZVVybCxvdXRGaWVsZHM6IFtcIipcIl19KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgKGptdjogSmltdU1hcFZpZXcpIHtcclxuICAgICAgICBpZiAoam12KSB7XHJcbiAgICAgICAgICAgIGptdi52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljTGF5ZXJGb3VuZCk7XHJcbiAgICAgICAgICAgIGptdi52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljTGF5ZXJTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIFdpZGdldC5hY3RpdmVWaWV3ID0gam12O1xyXG4gICAgICAgICAgICBsZXQgYXJyYXlTdXAgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGxheWVyc0lkcyA9IFtdXHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZXJ2aWNlcyA9IHRoaXMucHJvcHMuY29uZmlnLnNlcnZpY2VzXHJcbiAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VJdGVtcyA9IE9iamVjdC5rZXlzKHNlcnZpY2VzKTtcclxuICAgICAgICAgICAgc2VydmljZUl0ZW1zLmZvckVhY2goKGtleSk9PntcclxuICAgICAgICAgICAgICAgIGFycmF5U3VwLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOnNlcnZpY2VzW2tleV0udGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6a2V5XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VhcmNoV2lkZ2V0ID0gbmV3IFNlYXJjaCh7XHJcbiAgICAgICAgICAgICAgICB2aWV3OiBqbXYudmlldyxcclxuICAgICAgICAgICAgICAgIHJlc3VsdEdyYXBoaWNFbmFibGVkOnRydWUsXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IFwic2VhcmNoLXdpZGdldC1hZGRyZXNzXCIvL1RPRE8gbWlnbGlvcmFyZSBzZW56YSBpZCBjYWJsYXRvXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2VhcmNoV2lkZ2V0Lm9uKFwic2VsZWN0LXJlc3VsdFwiLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICBpZihldmVudCAmJiBldmVudC5yZXN1bHQgJiYgZXZlbnQucmVzdWx0LmZlYXR1cmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGptdi5zZWxlY3RGZWF0dXJlc0J5R3JhcGhpYyhldmVudC5yZXN1bHQuZmVhdHVyZSxcImNvbnRhaW5zXCIpLnRoZW4oKHJlc3VsdHMpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IHNlYXJjaGVkTGF5ZXJzID0gaGVscGVyLmdldFNlbGVjdGVkTGF5ZXJGcm9tU2VhcmNoKHJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2hlZExheWVyczpzZWFyY2hlZExheWVyc30pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgICAgICAgICBqbXYudmlldy5ncmFwaGljcy5yZW1vdmVBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLnJlbW92ZUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZW9tZXRyeUJ1ZmZlcjogUG9seWdvbiA9IGdlb21ldHJ5RW5naW5lLmJ1ZmZlciggZXZlbnQucmVzdWx0LmZlYXR1cmUuZ2VvbWV0cnksIDEwMDAsIFwibWV0ZXJzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGdlb21ldHJ5QnVmZmVyOiBQb2x5Z29uID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKCBldmVudC5yZXN1bHQuZmVhdHVyZS5nZW9tZXRyeSwgMSwgXCJtZXRlcnNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvbHlnb25HcmFwaGljID0gbmV3IEdyYXBoaWMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTogZ2VvbWV0cnlCdWZmZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogdGhpcy5zeW1ib2xGb3VuZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBqbXYuc2VsZWN0RmVhdHVyZXNCeUdyYXBoaWMocG9seWdvbkdyYXBoaWMsXCJjb250YWluc1wiKS50aGVuKChyZXN1bHRzKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hlZExheWVycyA9IGhlbHBlci5nZXRTZWxlY3RlZExheWVyRnJvbVNlYXJjaChyZXN1bHRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoZWRMYXllcnM6c2VhcmNoZWRMYXllcnN9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY0xheWVyRm91bmQuYWRkKHBvbHlnb25HcmFwaGljKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2VhcmNoV2lkZ2V0Lm9uKFwic2VhcmNoLWNsZWFyXCIsIChldmVudCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY0xheWVyRm91bmQucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBhcnJheUxheWVyOiBhcnJheVN1cCxcclxuICAgICAgICAgICAgICAgIGppbXVNYXBWaWV3OiBqbXYsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hXaWRnZXQ6c2VhcmNoV2lkZ2V0LFxyXG4gICAgICAgICAgICAgICAgbGF5ZXJzSWRzOmxheWVyc0lkc1xyXG4gICAgICAgICAgICAgICAgLy8gc2tldGNoV2lkZ2V0OnNrZXRjaFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VUYWJzKCl7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljTGF5ZXJGb3VuZC5yZW1vdmVBbGwoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNMYXllclNlbGVjdGVkLnJlbW92ZUFsbCgpO1xyXG4gICAgfVxyXG4gICAgX3ZpZXdMYWJlbHMoKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbGFiZWxWaXNpYmxlOiAhdGhpcy5zdGF0ZS5sYWJlbFZpc2libGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfdmlld1NlbGVjdERyYXcoKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmlld1NlbGVjdERyYXc6ICF0aGlzLnN0YXRlLnZpZXdTZWxlY3REcmF3XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljTGF5ZXJGb3VuZC52aXNpYmxlID0gdGhpcy5zdGF0ZS52aWV3U2VsZWN0RHJhdztcclxuICAgIH1cclxuXHJcbiAgICAvL0V4dHJhVXJiYW5vXHJcbiAgICBvbkNoYW5nZUV4dHJhVXJiYW5vKGUsdHlwZSl7XHJcbiAgICAgIGlmKHR5cGU9PVwiaW5kaXJpenpvXCIpe1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5mb3JtRXh0cmFVcmJhbm8uaW5kaXJpenpvID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmZvcm1FeHRyYVVyYmFuby5rbSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHNhdmVTdGF0ZShrZXksZSl7XHJcbiAgICAgICAgY29uc3Qgc3RhdGVOZXcgPSB7fVxyXG4gICAgICAgIHN0YXRlTmV3W2tleV0gPSBlLnRhcmdldCA/IGUudGFyZ2V0LnZhbHVlOiBlO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlTmV3KTtcclxuICAgIH1cclxuICAgIGFzeW5jIG9uQ2hhbmdlU2VsZWN0TGF5ZXIgKGUsbixzKXtcclxuICAgICAgICBpZihlLnRhcmdldC5jaGVja2VkKXtcclxuICAgICAgICAgICAgY29uc3QgY29waWVkTGlzdFNlcnZpY2VzID0gWy4uLnRoaXMuc3RhdGUubGlzdFNlcnZpY2VzLG5dO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsaXN0U2VydmljZXM6Y29waWVkTGlzdFNlcnZpY2VzfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5zdGF0ZS5saXN0U2VydmljZXMuaW5kZXhPZihuKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvcGllZExpc3RTZXJ2aWNlcyA9IFsuLi50aGlzLnN0YXRlLmxpc3RTZXJ2aWNlc107XHJcbiAgICAgICAgICAgICAgICBjb3BpZWRMaXN0U2VydmljZXMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGlzdFNlcnZpY2VzOmNvcGllZExpc3RTZXJ2aWNlc30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgb25DaGFuZ2VTZWxlY3RUeXBlR2VvbWV0cnkoZSl7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMuc3RhdGUudHlwZVNlbGVjdGVkID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjc3ZUb0FycmF5KHN0ciwgZGVsaW1pdGVyID0gXCIsXCIpIHtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gc3RyLnNsaWNlKDAsIHN0ci5pbmRleE9mKFwiXFxuXCIpKS5zbGljZSgwLCBzdHIuaW5kZXhPZihcIlxcclwiKSkuc3BsaXQoZGVsaW1pdGVyKTtcclxuICAgICAgICBjb25zdCByb3dzID0gc3RyLnNsaWNlKHN0ci5pbmRleE9mKFwiXFxuXCIpICsgMSkuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgcmV0dXJuIHJvd3MubWFwKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gcm93LnNwbGl0KGRlbGltaXRlcik7XHJcbiAgICAgICAgICAgIHJldHVybiBoZWFkZXJzLnJlZHVjZShmdW5jdGlvbiAob2JqZWN0LCBoZWFkZXIsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RbaGVhZGVyXSA9IHZhbHVlc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgICAgICAgICB9LCB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25DaGFuZ2VGaWxlQ3N2Q29vcmRpbmF0ZShlKXtcclxuICAgICAgICBhd2FpdCBjb29yZGluYXRlRm9ybWF0dGVyLmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZVNsaWRlckFkZHJlc3MoZSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlQnVmZmVyQWRkcmVzczogcGFyc2VJbnQoaXNOYU4oZSkgPyBlLnRhcmdldC52YWx1ZTogZSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlU2xpZGVyQ29vcmQoZSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlQnVmZmVyQ29vcmQ6IHBhcnNlSW50KGlzTmFOKGUpID8gZS50YXJnZXQudmFsdWU6IGUpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBvbkNsaWNrUmVzZWFyY2hmcm9tQWRkcmVzcygpe1xyXG4gICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAudGFibGVzLnJlbW92ZUFsbCgpO1xyXG5cclxuICAgICAgICAvL3BhcmFtZXRyaSBmb3JtXHJcbiAgICAgICAgbGV0IGFycmF5R2VvbWV0cnkgPSBbXTtcclxuICAgICAgICBsZXQgY29uZmlnRXJyb3JzID0gW107XHJcbiAgICAgICAgLy9UT0RPIFBSRU5ERVJFIEdFT01FVFJJQVxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0xheWVyRm91bmQuZ3JhcGhpY3MuZm9yRWFjaChnPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VzID0gdGhpcy5wcm9wcy5jb25maWcuc2VydmljZXM7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VLZXlzID0gT2JqZWN0LmtleXMoc2VydmljZXMpO1xyXG4gICAgICAgICAgICBpZiAoc2VydmljZUtleXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwO2kgPCBzZXJ2aWNlS2V5cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50U2VydmljZSA9IHNlcnZpY2VzW3NlcnZpY2VLZXlzW2ldXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hlZExheWVycyA9IHRoaXMuc3RhdGUuc2VhcmNoZWRMYXllcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaGVkTGF5ZXJzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBzZWFyY2hlZExheWVycy5maW5kKChpdGVtKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmZlYXR1cmVTZXJ2ZXIgPT09IGN1cnJlbnRTZXJ2aWNlLnVybCAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlcnZpY2UubGF5ZXJMaXN0SWRzLmluY2x1ZGVzKGl0ZW0uaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQm9vbGVhbihpdGVtKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcuZ2VvbWV0cnkgPSBnZW9tZXRyeUVuZ2luZS5idWZmZXIoZy5nZW9tZXRyeSwgdGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckFkZHJlc3MsIFwibWV0ZXJzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlHZW9tZXRyeS5wdXNoKGcuZ2VvbWV0cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vY29udHJvbGxvIGVycm9yaVxyXG4gICAgICAgIGxldCBhcnJheUVycm9ycyA9IFtdO1xyXG4gICAgICAgIGlmKGFycmF5R2VvbWV0cnkubGVuZ3RoKSB7IC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5nZW9tZXRyeSA9IGdlb21ldHJ5RW5naW5lLnVuaW9uKGFycmF5R2VvbWV0cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGFycmF5RXJyb3JzLnB1c2goXCJTZWxlemlvbmEgdW5hIGdlb21ldHJpYSBpbiBtYXBwYVwiKTtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5saXN0U2VydmljZXMubGVuZ3RoKSBhcnJheUVycm9ycy5wdXNoKFwiU2VsZXppb25hIGFsbWVubyB1biBzZXJ2aXppb1wiKTtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS50eXBlU2VsZWN0ZWQpIGFycmF5RXJyb3JzLnB1c2goXCJTZWxlemlvbmEgdW5hIHRpcG9sb2dpYSBkaSBzZWxlemlvbmVcIik7XHJcbiAgICAgICAgaWYgKCFhcnJheUdlb21ldHJ5Lmxlbmd0aCAmJiBjb25maWdFcnJvcnMubGVuZ3RoID4gMCkgYXJyYXlFcnJvcnMgPSBjb25maWdFcnJvcnNcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTphcnJheUVycm9ycy5qb2luKClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYoYXJyYXlFcnJvcnMubGVuZ3RoID09PSAwICYmIHRoaXMucHJvcHMuY29uZmlnLnNldHRpbmdzLmlkV2lkZ2V0VGFibGUgIT09IFwiXCIpe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZiAmJiBmLnR5cGU9PT1cImZlYXR1cmVcIiAmJiB0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcy5pbmRleE9mKGluZGV4KSAhPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGYubGFiZWxpbmdJbmZvPy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmLmxhYmVsaW5nSW5mb1swXS5zeW1ib2wuZm9udC5mYW1pbHkgPSBcIkFyaWFsXCI7Ly9maXggZm9udCB2ZXJkYW5hIG5vdCBpbiBzdGF0aWMgZXNyaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmLmxhYmVsc1Zpc2libGUgPSB0aGlzLnN0YXRlLmxhYmVsVmlzaWJsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBpZFdpZGdldFRhYmxlID0gdGhpcy5wcm9wcy5jb25maWcuc2V0dGluZ3MuaWRXaWRnZXRUYWJsZSAhPT0gXCIgXCIgPyB0aGlzLnByb3BzLmNvbmZpZy5zZXR0aW5ncy5pZFdpZGdldFRhYmxlIDpcInZhbHVlXCJcclxuICAgICAgICAgICAgLy9tYW5kbyBsYXllcmlkIGFkIFRhYmxlTGlzdFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGF5ZXJPcGVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlU2VsZWN0ZWQ6dGhpcy5zdGF0ZS50eXBlU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OnRoaXMuc3RhdGUuZ2VvbWV0cnkudG9KU09OKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RTZXJ2aWNlczp0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVmlldzp0aGlzLmdldEFjdGl2ZVZpZXcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEFsbExheWVyczp0aGlzLmdldEFsbENoZWNrZWRMYXllcnNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgb25DbGlja1Jlc2VhcmNoZnJvbUNvb3JkKCl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC50YWJsZXMucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgbGV0IGxvbmcgPSB0aGlzLnN0YXRlLmxvbmdfZV8xICsgXCIuXCIgKyB0aGlzLnN0YXRlLmxvbmdfZV8yICsgdGhpcy5zdGF0ZS5sb25nX2VfMyArIFwiKlwiO1xyXG4gICAgICAgIGxldCBsYXQgPSB0aGlzLnN0YXRlLmxhdF9lXzEgKyBcIi5cIiArIHRoaXMuc3RhdGUubGF0X2VfMiArIHRoaXMuc3RhdGUubGF0X2VfMyArIFwiKlwiO1xyXG5cclxuICAgICAgICBhd2FpdCBjb29yZGluYXRlRm9ybWF0dGVyLmxvYWQoKTtcclxuICAgICAgICBsZXQgcG9pbnRHZW9ncmFwaGljID0gY29vcmRpbmF0ZUZvcm1hdHRlci5mcm9tTGF0aXR1ZGVMb25naXR1ZGUobGF0ICsgXCJ8XCIgKyBsb25nKTtcclxuICAgICAgICBsZXQgcG9pbnQgPSB3ZWJNZXJjYXRvclV0aWxzLmdlb2dyYXBoaWNUb1dlYk1lcmNhdG9yKHBvaW50R2VvZ3JhcGhpYyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHBvaW50KTtcclxuXHJcbiAgICAgICAgbGV0IGdlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKHBvaW50LCAxLCBcIm1ldGVyc1wiKTtcclxuICAgICAgICBjb25zdCBwb2x5Z29uR3JhcGhpYyA9IG5ldyBHcmFwaGljKHtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGdlb21ldHJ5OiBnZW9tZXRyeSxcclxuICAgICAgICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbEZvdW5kXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLmFkZChwb2x5Z29uR3JhcGhpYyk7XHJcblxyXG4gICAgICAgIGxldCBhcnJheUdlb21ldHJ5ID0gW107XHJcbiAgICAgICAgLy9UT0RPIFBSRU5ERVJFIEdFT01FVFJJQVxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0xheWVyRm91bmQuZ3JhcGhpY3MuZm9yRWFjaChnPT57XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgZy5nZW9tZXRyeSA9IGdlb21ldHJ5RW5naW5lLmJ1ZmZlcihnLmdlb21ldHJ5LCB0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmQsIFwibWV0ZXJzXCIpO1xyXG4gICAgICAgICAgICBhcnJheUdlb21ldHJ5LnB1c2goZy5nZW9tZXRyeSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vY29udHJvbGxvIGVycm9yaVxyXG4gICAgICAgIGxldCBhcnJheUVycm9ycyA9IFtdO1xyXG4gICAgICAgIGlmKGFycmF5R2VvbWV0cnkubGVuZ3RoKSB7IC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5nZW9tZXRyeSA9IGdlb21ldHJ5RW5naW5lLnVuaW9uKGFycmF5R2VvbWV0cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGFycmF5RXJyb3JzLnB1c2goXCJTZWxlemlvbmEgdW5hIGdlb21ldHJpYSBpbiBtYXBwYVwiKTtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5saXN0U2VydmljZXMubGVuZ3RoKSBhcnJheUVycm9ycy5wdXNoKFwiU2VsZXppb25hIGFsbWVubyB1biBzZXJ2aXppb1wiKTtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS50eXBlU2VsZWN0ZWQpIGFycmF5RXJyb3JzLnB1c2goXCJTZWxlemlvbmEgdW5hIHRpcG9sb2dpYSBkaSBzZWxlemlvbmVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6YXJyYXlFcnJvcnMuam9pbigpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKGFycmF5RXJyb3JzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnByb3BzLmNvbmZpZy5zZXR0aW5ncy5pZFdpZGdldFRhYmxlICE9PSBcIlwiKXtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PntcclxuICAgICAgICAgICAgICAgIGlmKGYgJiYgZi50eXBlPT09XCJmZWF0dXJlXCIgJiYgdGhpcy5zdGF0ZS5saXN0U2VydmljZXMuaW5kZXhPZihpbmRleCkgIT09IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihmLmxhYmVsaW5nSW5mbz8ubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZi5sYWJlbGluZ0luZm9bMF0uc3ltYm9sLmZvbnQuZmFtaWx5ID0gXCJBcmlhbFwiOy8vZml4IGZvbnQgdmVyZGFuYSBub3QgaW4gc3RhdGljIGVzcmlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZi5sYWJlbHNWaXNpYmxlID0gdGhpcy5zdGF0ZS5sYWJlbFZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9tYW5kbyBsYXllcmlkIGFkIFRhYmxlTGlzdFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuc2V0dGluZ3MuaWRXaWRnZXRUYWJsZSxcclxuICAgICAgICAgICAgICAgICAgICBcImxheWVyT3BlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZVNlbGVjdGVkOnRoaXMuc3RhdGUudHlwZVNlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTp0aGlzLnN0YXRlLmdlb21ldHJ5LnRvSlNPTigpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0U2VydmljZXM6dGhpcy5zdGF0ZS5saXN0U2VydmljZXNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtYWRkcmVzcyBqaW11LXdpZGdldCAgY29udGFpbmVyLWZsdWlkXCIgc3R5bGU9e3tvdmVyZmxvdzpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndXNlTWFwV2lkZ2V0SWRzJykgJiYgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiYgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHNbMF0gJiYgKFxyXG4gICAgICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50IHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfSBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3RoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTMgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2VudHJpYyBjaGVjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGNsYXNzTmFtZT1cIm1yLTJcIiBhcmlhLWxhYmVsPVwiVmlzdWFsaXp6YSBkaXNlZ25vIHNlbGV6aW9uZVwiIGNoZWNrZWQ9e3RoaXMuZ3JhcGhpY0xheWVyRm91bmQudmlzaWJsZX0gb25DaGFuZ2U9e3RoaXMuX3ZpZXdTZWxlY3REcmF3fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgZGlzZWdubyBzZWxlemlvbmVcclxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNlbnRyaWMgY2hlY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9XCJtci0yXCIgYXJpYS1sYWJlbD1cIlZpc3VhbGl6emEgZGlzZWdubyBzZWxlemlvbmVcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmxhYmVsVmlzaWJsZX0gb25DaGFuZ2U9e3RoaXMuX3ZpZXdMYWJlbHN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBldGljaGV0dGVcclxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwidGFiLTFcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VUYWJzfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRhYnNcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGFiIGlkPVwic2VhcmNoLWFkdmFuY2VkLXRhYi1VcmJhbm9cIiBjbGFzc05hbWU9XCIgcC0xXCIgdGl0bGU9XCJVcmJhbm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlJpY2VyY2EgcGVyIGluZGlyaXp6bzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaC13aWRnZXQtYWRkcmVzc1wiIGNsYXNzTmFtZT1cInctMTAwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uIGNsYXNzTmFtZT1cIm10LTQgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb25JdGVtIGljb24tc3RhcnQ9XCJjYXJcIiBpdGVtVGl0bGU9XCJTZWxlemlvbmEgbGF5ZXJzIGRhIGludGVycm9nYXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TGF5ZXIgc2VsZXppb25hdGk6IHt0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcy5sZW5ndGh9IC8ge3RoaXMuc3RhdGUuYXJyYXlMYXllci5sZW5ndGh9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aVNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLmFycmF5TGF5ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja0l0ZW09e3RoaXMub25DaGFuZ2VTZWxlY3RMYXllcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxpc3RhIHNlcnZpemlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb25JdGVtIGljb24tc3RhcnQ9XCJjYXJcIiBpdGVtVGl0bGU9XCJPcHppb25lIGRpIHJpY2VyY2FcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbG9yZSBkaSBidWZmZXIgPE51bWVyaWNJbnB1dCBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJBZGRyZXNzfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckFkZHJlc3N9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQWRkcmVzc30gY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgdy01MFwiLz4gbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgbXQtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXs1MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpcG8gZGkgc2VsZXppb25lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBjbGFzc05hbWU9XCJ3LTEwMCBtdC0yXCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTZWxlY3RUeXBlR2VvbWV0cnl9IHBsYWNlaG9sZGVyPVwiU2VsZXppb25lIHRpcG8uLi5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImludGVyc2VjdHNcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+SW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiY29udGFpbnNcIj5Db250YWluczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiY3Jvc3Nlc1wiPkNyb3NzZXM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImVudmVsb3BlLWludGVyc2VjdHNcIj5FbnZlbG9wZSBJbnRlcnNlY3RzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJpbmRleC1pbnRlcnNlY3RzXCI+SW5kZXggSW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiT3ZlcmxhcHNcIj5PdmVybGFwczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwidG91Y2hlc1wiPlRvdWNoZXM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIndpdGhpblwiPldpdGhpbjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicmVsYXRpb25cIj5SZWxhdGlvbjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwidy0xMDBcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tSZXNlYXJjaGZyb21BZGRyZXNzfT5SaWNlcmNhIG5laSBsYXllcjwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICYmIHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICE9PSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybT1cImJhc2ljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICB7Lyo8VGFiIGlkPVwic2VhcmNoLWFkdmFuY2VkLXRhYi1FeHRyYXVyYmFub1wiIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBwLTFcIiB0aXRsZT1cIkV4dHJhdXJiYW5vXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMiBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI1XCI+SW5kaXJpenpvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTc1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5kaXJpenpvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yNVwiPkttOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTc1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiS21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhYj4qL31cclxuICAgICAgICAgICAgICAgIDxUYWIgaWQ9XCJzZWFyY2gtYWR2YW5jZWQtdGFiLUNvb3JkXCIgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIHAtMVwiIHRpdGxlPVwiQ29vcmRpbmF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMiBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0yNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9uZy4gKFgpOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zYXZlU3RhdGUoJ2xvbmdfZV8xJyxlKX0gdmFsdWU9e3RoaXMuc3RhdGUubG9uZ19lXzF9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctMjVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1lcmljSW5wdXQgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNhdmVTdGF0ZSgnbG9uZ19lXzInLGUpfSB2YWx1ZT17dGhpcy5zdGF0ZS5sb25nX2VfMn0gY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgdy0yNVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWVyaWNJbnB1dCBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2F2ZVN0YXRlKCdsb25nX2VfMycsZSl9IHZhbHVlPXt0aGlzLnN0YXRlLmxvbmdfZV8zfSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTI1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInctMjVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhdC4gKFkpOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zYXZlU3RhdGUoJ2xhdF9lXzEnLGUpfSB2YWx1ZT17dGhpcy5zdGF0ZS5sYXRfZV8xfSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTI1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zYXZlU3RhdGUoJ2xhdF9lXzInLGUpfSB2YWx1ZT17dGhpcy5zdGF0ZS5sYXRfZV8yfSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTI1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zYXZlU3RhdGUoJ2xhdF9lXzMnLGUpfSB2YWx1ZT17dGhpcy5zdGF0ZS5sYXRfZV8zfSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTI1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FsY2l0ZUFjY29yZGlvbiBjbGFzc05hbWU9XCJtdC00IG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uSXRlbSBpY29uLXN0YXJ0PVwiY2FyXCIgaXRlbVRpdGxlPVwiU2VsZXppb25hIGxheWVycyBkYSBpbnRlcnJvZ2FyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkxheWVyIHNlbGV6aW9uYXRpOiB7dGhpcy5zdGF0ZS5saXN0U2VydmljZXMubGVuZ3RofSAvIHt0aGlzLnN0YXRlLmFycmF5TGF5ZXIubGVuZ3RofTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5hcnJheUxheWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tJdGVtPXt0aGlzLm9uQ2hhbmdlU2VsZWN0TGF5ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMaXN0YSBzZXJ2aXppXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uSXRlbSBpY29uLXN0YXJ0PVwiY2FyXCIgaXRlbVRpdGxlPVwiT3B6aW9uZSBkaSByaWNlcmNhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWxvcmUgZGkgYnVmZmVyIDxOdW1lcmljSW5wdXQgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmR9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmR9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQ29vcmR9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctNTBcIi8+IG1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIG10LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckNvb3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJDb29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXs1MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQ29vcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaXBvIGRpIHNlbGV6aW9uZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPVwidy0xMDAgbXQtMlwiIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2VsZWN0VHlwZUdlb21ldHJ5fSBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uZSB0aXBvLi4uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJpbnRlcnNlY3RzXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPkludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNvbnRhaW5zXCI+Q29udGFpbnM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNyb3NzZXNcIj5Dcm9zc2VzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJlbnZlbG9wZS1pbnRlcnNlY3RzXCI+RW52ZWxvcGUgSW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiaW5kZXgtaW50ZXJzZWN0c1wiPkluZGV4IEludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk92ZXJsYXBzXCI+T3ZlcmxhcHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInRvdWNoZXNcIj5Ub3VjaGVzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJ3aXRoaW5cIj5XaXRoaW48L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInJlbGF0aW9uXCI+UmVsYXRpb248L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cInctMTAwXCIgb25DbGljaz17dGhpcy5vbkNsaWNrUmVzZWFyY2hmcm9tQ29vcmR9PlJpY2VyY2EgbmVpIGxheWVyPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgJiYgdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgIT09IFwiXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtPVwiYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICA8VGFiIGlkPVwic2VhcmNoLWFkdmFuY2VkLXRhYi1Db29yZC1maWxlXCIgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIHAtMVwiIHRpdGxlPVwiTXVsdGljb29yZGluYXRlIGRhIGZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0xMDAgZm9ybS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZ2dpdW5naSB1biBmaWxlIENTVlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlRmlsZUNzdkNvb3JkaW5hdGV9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIGZvcm0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbCBmaWxlIGRldmUgZXNzZXJlIGZvcm1hdHRhdG8gY29uIHRyZSBjYW1waSBJRCxZLFguXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChFc2VtcGlvOiBQdW50b18xLDM4LjcyMzIzMDU2LDE2LjQ5NTk4MDU2KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FsY2l0ZUFjY29yZGlvbiBjbGFzc05hbWU9XCJtdC00IG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uSXRlbSBpY29uLXN0YXJ0PVwiY2FyXCIgaXRlbVRpdGxlPVwiU2VsZXppb25hIGxheWVycyBkYSBpbnRlcnJvZ2FyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkxheWVyIHNlbGV6aW9uYXRpOiB7dGhpcy5zdGF0ZS5saXN0U2VydmljZXMubGVuZ3RofSAvIHt0aGlzLnN0YXRlLmFycmF5TGF5ZXIubGVuZ3RofTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5hcnJheUxheWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tJdGVtPXt0aGlzLm9uQ2hhbmdlU2VsZWN0TGF5ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMaXN0YSBzZXJ2aXppXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uSXRlbSBpY29uLXN0YXJ0PVwiY2FyXCIgaXRlbVRpdGxlPVwiT3B6aW9uZSBkaSByaWNlcmNhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWxvcmUgZGkgYnVmZmVyIDxOdW1lcmljSW5wdXQgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmR9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmR9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQ29vcmR9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctNTBcIi8+IG1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIG10LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckNvb3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJDb29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXs1MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQ29vcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaXBvIGRpIHNlbGV6aW9uZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPVwidy0xMDAgbXQtMlwiIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2VsZWN0VHlwZUdlb21ldHJ5fSBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uZSB0aXBvLi4uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJpbnRlcnNlY3RzXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPkludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNvbnRhaW5zXCI+Q29udGFpbnM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNyb3NzZXNcIj5Dcm9zc2VzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJlbnZlbG9wZS1pbnRlcnNlY3RzXCI+RW52ZWxvcGUgSW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiaW5kZXgtaW50ZXJzZWN0c1wiPkluZGV4IEludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk92ZXJsYXBzXCI+T3ZlcmxhcHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInRvdWNoZXNcIj5Ub3VjaGVzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJ3aXRoaW5cIj5XaXRoaW48L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInJlbGF0aW9uXCI+UmVsYXRpb248L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cInctMTAwXCIgb25DbGljaz17dGhpcy5vbkNsaWNrUmVzZWFyY2hmcm9tQ29vcmR9PlJpY2VyY2EgbmVpIGxheWVyPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgJiYgdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgIT09IFwiXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtPVwiYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==