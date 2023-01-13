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
        // graphicLayerFound = new GraphicsLayer({id:"indirizzi-found-sketch",listMode:"hide",visible:true});
        this.graphicLayerFound = new esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_2__["default"]({ listMode: "hide", visible: true });
        this.graphicLayerSelected = new esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_2__["default"]({ listMode: "hide", visible: true });
        // graphicLayerSelected = new GraphicsLayer({id:"indirizzi-selected-sketch",listMode:"hide",visible:true});
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
            // const featureLayer = this.getFeatureLayer();
            // const layerViewProps = new LayerView({layer:featureLayer,visible:true,spatialReferenceSupported:true})
            // const layerView = new JimuLayerView({layer:featureLayer,view:layerViewProps});
            // jmv.view.map.add(featureLayer);
            const services = this.props.config.services;
            const serviceItems = Object.keys(services);
            serviceItems.forEach((key) => {
                arraySup.push({
                    label: services[key].title,
                    value: key
                });
                // const listIds = services[key].layerListIds;
                // let availableIds = [];
                // if (listIds.length){
                // for (let i = 0;i < listIds.length;i++){
                //     // const url = services[key].url??" ";
                //     // const newUrl = `${url}/${listIds[i]}`
                //     // const layer = helper.queryFeatureService(newUrl);
                //     // if (layer){
                //     //     // layer.load()
                //     //     // .then((loadedLayer)=>{
                //     //         if (layer.id){
                //     //             availableIds.push(layer?.id);
                //     //         }
                //     //     // })
                //     //     // .catch((err)=>{})
                //     // }
                //     // console.log(layer?.geometryType,layer,"check layer geometry")
                //     // //@ts-ignore
                //     // if (layer?.id && layer?.geometryType === "polygon"){
                //     //      //@ts-ignore
                //     //     // layersIds.push(layer.id);
                //     // }
                // }
                // const object = {featureServer:services[key].url,layerIds:availableIds}
                // layersIds.push(object);
                // }
                // availableIds = [];
                // const url = services[key].url??" ";
                // const newUrl = url + "/0"
                // helper.queryFeatureService(url)
            });
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
            const searchWidget = new esri_widgets_Search__WEBPACK_IMPORTED_MODULE_7__["default"]({
                view: jmv.view,
                resultGraphicEnabled: true,
                // sources:sources,
                container: "search-widget-address" //TODO migliorare senza id cablato
            });
            searchWidget.on("select-result", (event) => {
                if (event && event.result && event.result.feature) {
                    jmv.selectFeaturesByGraphic(event.result.feature, "contains").then((results) => {
                        const searchedLayers = _helper_helper__WEBPACK_IMPORTED_MODULE_11__["default"].getSelectedLayerFromSearch(results);
                        console.log(results, "check results");
                        this.setState({ searchedLayers: searchedLayers });
                    });
                    jmv.view.graphics.removeAll();
                    this.graphicLayerFound.removeAll();
                    //@ts-ignore
                    const geometryBuffer = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_3__["default"].buffer(event.result.feature.geometry, 1, "meters");
                    const polygonGraphic = new esri_Graphic__WEBPACK_IMPORTED_MODULE_6__["default"]({
                        geometry: geometryBuffer,
                        symbol: this.symbolFound
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
            const view = this.state.jimuMapView.view;
            // const layer = view.map.allLayers.find((item)=>item.id === n);
            if (e.target.checked) {
                const copiedListServices = [...this.state.listServices, n];
                this.setState({ listServices: copiedListServices });
                // this.state.listServices.push(n);
                // view.goTo(layer.fullExtent)
            }
            else {
                let index = this.state.listServices.indexOf(n);
                if (index > -1) {
                    const copiedListServices = [...this.state.listServices];
                    copiedListServices.splice(index, 1);
                    this.setState({ listServices: copiedListServices });
                    // this.state.listServices.splice(index,1);
                }
            }
            // this.setState(this.state);
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
                        console.log(searchedLayers, currentService);
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
                // const layersIds = this.state.layersIds;
                // if (layersIds.length){
                //     for (let i = 0;i < layersIds.length;i++){
                //         const currentLayerid = layersIds[i];
                //         const serviceKey = currentLayerid.serviceKey;
                //         const listServices = this.state.listServices;
                //         if (listServices.includes(serviceKey)){
                //             const listIds = currentLayerid.layerIds;
                //             if (listIds.includes(g.layer.id)){
                //                 // @ts-ignore
                //                 g.geometry = geometryEngine.buffer(g.geometry, this.state.valueBufferAddress, "meters");
                //                 arrayGeometry.push(g.geometry);
                //             }else{
                //                 configErrors.push("Layer id was not found in config file")
                //             }
                //         }
                //     }
                // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9pbmRpcml6emkvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdvRDtBQUdwRCxNQUFNLE1BQU07SUFBWjtRQUVJLG1CQUFjLEdBQUcsQ0FBQyxVQUFpQixFQUFDLFVBQWlCLEVBQUMsRUFBRTtZQUNwRCxJQUFJLFdBQVcsR0FBRyxVQUFVLENBQUM7WUFDN0IsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQyxNQUFNLFlBQVksR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JELElBQUksWUFBWSxLQUFLLENBQUMsQ0FBQyxFQUFDO2dCQUNwQixJQUFJLFdBQVcsQ0FBQyxZQUFZLEdBQUMsQ0FBQyxDQUFDLEVBQUM7b0JBQzVCLFdBQVcsR0FBRyxXQUFXLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM3QzthQUNKO1lBQ0QsT0FBTyxXQUFXLENBQUM7UUFDdkIsQ0FBQztRQUVELHdCQUFtQixHQUFHLENBQUMsR0FBVSxFQUFDLEVBQUU7WUFDaEMsbUNBQW1DO1lBQ25DLHFDQUFxQztZQUNyQyw0QkFBNEI7WUFDNUIsa0VBQWtFO1lBQ2xFLElBQUc7Z0JBQ0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxnRUFBWSxDQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7Z0JBQzFDLE9BQU8sS0FBSzthQUNmO1lBQ0QsT0FBTSxHQUFHLEVBQUM7Z0JBQ04sT0FBTyxJQUFJLENBQUM7YUFDZjtRQUNMLENBQUM7UUFFRCwrQkFBMEIsR0FBRyxDQUFDLE9BQWEsRUFBQyxFQUFFO1lBQzFDLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFJLE9B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QUFDLHdCQUF3Qix3QkFBNEI7d0JBRTFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDekQsK0NBQUMsMENBQUssSUFDRixJQUFJLEVBQUMsT0FBTyxFQUNaLElBQUksUUFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQzdCLElBQUksRUFBQyxTQUFTLEVBQ2QsU0FBUyxFQUFDLFlBQVksRUFDdEIsUUFBUSxTQUNWLENBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FDTixDQUVKLENBQ0gsQ0FDTCxDQUVUO0lBQ0gsQ0FBQzs7QUFyeUJRLGlCQUFVLEdBQUcsSUFBSSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2luZGlyaXp6aS9zcmMvaGVscGVyL2hlbHBlci50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImNhbGNpdGUtY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9HcmFwaGljXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L2Nvb3JkaW5hdGVGb3JtYXR0ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvc3VwcG9ydC93ZWJNZXJjYXRvclV0aWxzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2hcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2luZGlyaXp6aS9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFF1ZXJ5IGZyb20gXCJlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeVwiO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJ2VzcmkvcmVzdC9xdWVyeSc7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIjtcblxuXG5jbGFzcyBIZWxwZXIge1xuXG4gICAgZ2V0U2VydmljZU5hbWUgPSAoc2VydmljZVVybDpzdHJpbmcsc2VydmljZUtleTpzdHJpbmcpPT57XG4gICAgICAgIGxldCBzZXJ2aWNlTmFtZSA9IHNlcnZpY2VLZXk7XG4gICAgICAgIGNvbnN0IHN0cmluZ0FycmF5ID0gc2VydmljZVVybC5zcGxpdChcIi9cIik7XG4gICAgICAgIGNvbnN0IHNlcnZpY2VJbmRleCA9IHN0cmluZ0FycmF5LmluZGV4T2YoXCJzZXJ2aWNlc1wiKTtcbiAgICAgICAgaWYgKHNlcnZpY2VJbmRleCAhPT0gLTEpe1xuICAgICAgICAgICAgaWYgKHN0cmluZ0FycmF5W3NlcnZpY2VJbmRleCsxXSl7XG4gICAgICAgICAgICAgICAgc2VydmljZU5hbWUgPSBzdHJpbmdBcnJheVtzZXJ2aWNlSW5kZXgrMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlcnZpY2VOYW1lO1xuICAgIH1cblxuICAgIHF1ZXJ5RmVhdHVyZVNlcnZpY2UgPSAodXJsOnN0cmluZyk9PntcbiAgICAgICAgLy8gY29uc3QgcXVlcnlPYmplY3QgPSBuZXcgUXVlcnkoKTtcbiAgICAgICAgLy8gcXVlcnlPYmplY3QucmV0dXJuR2VvbWV0cnkgPSB0cnVlO1xuICAgICAgICAvLyBxdWVyeU9iamVjdC53aGVyZSA9IFwiMT0xXCJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0cyA9IGF3YWl0IHF1ZXJ5LmV4ZWN1dGVRdWVyeUpTT04odXJsLCBxdWVyeU9iamVjdCk7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7dXJsOnVybH0pO1xuICAgICAgICAgICAgcmV0dXJuIGxheWVyXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2VsZWN0ZWRMYXllckZyb21TZWFyY2ggPSAocmVzdWx0czphbnlbXSk9PntcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJZHMgPSBbXTtcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0wO2kgPCByZXN1bHRzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyUmVzdWx0cyA9IHJlc3VsdHNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGlubmVyUmVzdWx0cy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDtqIDwgaW5uZXJSZXN1bHRzLmxlbmd0aDtqKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSBpbm5lclJlc3VsdHNbal0ubGF5ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmplY3QgPSB7ZmVhdHVyZVNlcnZlcjpsYXllci51cmwsaWQ6bGF5ZXIubGF5ZXJJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSWRzLnB1c2gob2JqZWN0KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RlZElkcztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBIZWxwZXIoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2FsY2l0ZV9jb21wb25lbnRzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfR3JhcGhpY19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X2Nvb3JkaW5hdGVGb3JtYXR0ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9nZW9tZXRyeUVuZ2luZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X3N1cHBvcnRfd2ViTWVyY2F0b3JVdGlsc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfR3JhcGhpY3NMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3dpZGdldHNfU2VhcmNoX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7QWxsV2lkZ2V0UHJvcHMsIGFwcEFjdGlvbnMsIGpzeCwgUmVhY3R9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHtJTUNvbmZpZ30gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQge0FsZXJ0LCBCdXR0b24sIENoZWNrYm94LCBMYWJlbCwgTXVsdGlTZWxlY3QsIE51bWVyaWNJbnB1dCwgT3B0aW9uLCBTZWxlY3QsIFNsaWRlciwgVGFiLCBUYWJzfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tIFwiZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllclwiO1xyXG5pbXBvcnQgZ2VvbWV0cnlFbmdpbmUgZnJvbSBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIjtcclxuaW1wb3J0IHtKaW11TGF5ZXJWaWV3LCBKaW11TWFwVmlldywgSmltdU1hcFZpZXdDb21wb25lbnR9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQge0NhbGNpdGVBY2NvcmRpb24sIENhbGNpdGVBY2NvcmRpb25JdGVtfSBmcm9tIFwiY2FsY2l0ZS1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYyc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2hcIjtcclxuaW1wb3J0IFNrZXRjaCBmcm9tIFwiZXNyaS93aWRnZXRzL1NrZXRjaFwiO1xyXG5pbXBvcnQgY29vcmRpbmF0ZUZvcm1hdHRlciBmcm9tIFwiZXNyaS9nZW9tZXRyeS9jb29yZGluYXRlRm9ybWF0dGVyXCI7XHJcbmltcG9ydCB3ZWJNZXJjYXRvclV0aWxzIGZyb20gXCJlc3JpL2dlb21ldHJ5L3N1cHBvcnQvd2ViTWVyY2F0b3JVdGlsc1wiO1xyXG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XHJcbmltcG9ydCBMYXllclZpZXcgZnJvbSAnZXNyaS92aWV3cy9sYXllcnMvTGF5ZXJWaWV3JztcclxuaW1wb3J0IGhlbHBlciBmcm9tICcuLi9oZWxwZXIvaGVscGVyJztcclxuaW1wb3J0IEV4dGVudCBmcm9tICdlc3JpL2dlb21ldHJ5L0V4dGVudCc7XHJcbmltcG9ydCBQb2x5Z29uIGZyb20gJ2VzcmkvZ2VvbWV0cnkvUG9seWdvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEFsbFdpZGdldFByb3BzPElNQ29uZmlnPiwgYW55PiB7XHJcblxyXG4gICAgc3RhdGljIGFjdGl2ZVZpZXcgPSBudWxsO1xyXG4gICAgXHJcbiAgICAvLyBncmFwaGljTGF5ZXJGb3VuZCA9IG5ldyBHcmFwaGljc0xheWVyKHtpZDpcImluZGlyaXp6aS1mb3VuZC1za2V0Y2hcIixsaXN0TW9kZTpcImhpZGVcIix2aXNpYmxlOnRydWV9KTtcclxuICAgIGdyYXBoaWNMYXllckZvdW5kID0gbmV3IEdyYXBoaWNzTGF5ZXIoe2xpc3RNb2RlOlwiaGlkZVwiLHZpc2libGU6dHJ1ZX0pO1xyXG4gICAgZ3JhcGhpY0xheWVyU2VsZWN0ZWQgPSBuZXcgR3JhcGhpY3NMYXllcih7bGlzdE1vZGU6XCJoaWRlXCIsdmlzaWJsZTp0cnVlfSk7XHJcbiAgICAvLyBncmFwaGljTGF5ZXJTZWxlY3RlZCA9IG5ldyBHcmFwaGljc0xheWVyKHtpZDpcImluZGlyaXp6aS1zZWxlY3RlZC1za2V0Y2hcIixsaXN0TW9kZTpcImhpZGVcIix2aXNpYmxlOnRydWV9KTtcclxuXHJcbiAgICBzeW1ib2xGb3VuZCA9IHtcclxuICAgICAgICB0eXBlOiBcInNpbXBsZS1maWxsXCIsXHJcbiAgICAgICAgY29sb3I6IFs1MSwgNTEsIDIwNCwgMC41XSxcclxuICAgICAgICBzdHlsZTogXCJzb2xpZFwiLFxyXG4gICAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICAgICAgc3R5bGU6IFwic2hvcnQtZGFzaFwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICB3aWR0aDogM1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgamltdU1hcFZpZXc6IG51bGwsXHJcbiAgICAgICAgICBsYWJlbFZpc2libGU6dHJ1ZSxcclxuICAgICAgICAgIHZpZXdTZWxlY3REcmF3OiB0cnVlLFxyXG5cclxuICAgICAgICAgIGZvcm1FeHRyYVVyYmFubzp7XHJcbiAgICAgICAgICAgICAgLy9UT0RPXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIC8vQ09PUkRcclxuICAgICAgICAgIGxvbmdfZV8xOjEyLFxyXG4gICAgICAgICAgbG9uZ19lXzI6NjIsXHJcbiAgICAgICAgICBsb25nX2VfMzo4NixcclxuICAgICAgICAgIGxhdF9lXzE6NDEsXHJcbiAgICAgICAgICBsYXRfZV8yOjgwLFxyXG4gICAgICAgICAgbGF0X2VfMzo2NixcclxuXHJcbiAgICAgICAgICBhcnJheUxheWVyOiBbXSxcclxuICAgICAgICAgIHZhbHVlQnVmZmVyQWRkcmVzczogMCxcclxuICAgICAgICAgIHZhbHVlQnVmZmVyQ29vcmQ6IDAsXHJcbiAgICAgICAgICBnZW9tZXRyeTpudWxsLFxyXG4gICAgICAgICAgdHlwZVNlbGVjdGVkOm51bGwsXHJcbiAgICAgICAgICBsaXN0U2VydmljZXM6IFtdLFxyXG4gICAgICAgICAgbGF5ZXJzSWRzOltdLFxyXG4gICAgICAgICAgc2VhcmNoZWRMYXllcnM6W11cclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuX3ZpZXdMYWJlbHMgPSB0aGlzLl92aWV3TGFiZWxzLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMuX3ZpZXdTZWxlY3REcmF3ID0gdGhpcy5fdmlld1NlbGVjdERyYXcuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5hY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciA9IHRoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5zYXZlU3RhdGUgPSB0aGlzLnNhdmVTdGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlVGFicyA9IHRoaXMub25DaGFuZ2VUYWJzLmJpbmQodGhpcylcclxuXHJcbiAgICAgIHRoaXMub25DaGFuZ2VTbGlkZXJBZGRyZXNzID0gdGhpcy5vbkNoYW5nZVNsaWRlckFkZHJlc3MuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZVNsaWRlckNvb3JkID0gdGhpcy5vbkNoYW5nZVNsaWRlckNvb3JkLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VTZWxlY3RUeXBlR2VvbWV0cnkgPSB0aGlzLm9uQ2hhbmdlU2VsZWN0VHlwZUdlb21ldHJ5LmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VGaWxlQ3N2Q29vcmRpbmF0ZSA9IHRoaXMub25DaGFuZ2VGaWxlQ3N2Q29vcmRpbmF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlU2VsZWN0TGF5ZXIgPSB0aGlzLm9uQ2hhbmdlU2VsZWN0TGF5ZXIuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5vbkNsaWNrUmVzZWFyY2hmcm9tQWRkcmVzcyA9IHRoaXMub25DbGlja1Jlc2VhcmNoZnJvbUFkZHJlc3MuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5vbkNsaWNrUmVzZWFyY2hmcm9tQ29vcmQgPSB0aGlzLm9uQ2xpY2tSZXNlYXJjaGZyb21Db29yZC5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgdGhpcy5nZXRBbGxDaGVja2VkTGF5ZXJzID0gdGhpcy5nZXRBbGxDaGVja2VkTGF5ZXJzLmJpbmQodGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGl2ZVZpZXcoKXtcclxuICAgICAgICByZXR1cm4gV2lkZ2V0LmFjdGl2ZVZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsQ2hlY2tlZExheWVycygpe1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVZpZXcgPSBXaWRnZXQuYWN0aXZlVmlldztcclxuICAgICAgICBsZXQgYWxsQ2hlY2tlZExheWVycyA9IFtdO1xyXG4gICAgICAgIGlmIChhY3RpdmVWaWV3KXtcclxuICAgICAgICAgICAgY29uc3QgYWxsTGF5ZXJzID0gYWN0aXZlVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuaXRlbXM7XHJcbiAgICAgICAgICAgIGNvbnN0IGxheWVyc0lkcyA9IHRoaXMuc3RhdGUubGF5ZXJzSWRzO1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0U2VydmljZXMgPSB0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcztcclxuICAgICAgICAgICAgaWYgKGxheWVyc0lkcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7aSA8IGxheWVyc0lkcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50TGF5ZXJJZHMgPSBsYXllcnNJZHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VydmljZUtleSA9IGN1cnJlbnRMYXllcklkcy5zZXJ2aWNlS2V5XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RTZXJ2aWNlcy5pbmNsdWRlcyhzZXJ2aWNlS2V5KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxheWVySWRzID0gY3VycmVudExheWVySWRzLmxheWVySWRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDtqIDwgYWxsTGF5ZXJzLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudExheWVyID0gYWxsTGF5ZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheWVySWRzLmluY2x1ZGVzKGN1cnJlbnRMYXllci5pZCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbENoZWNrZWRMYXllcnMucHVzaChjdXJyZW50TGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxDaGVja2VkTGF5ZXJzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRGZWF0dXJlTGF5ZXIgKCl7XHJcbiAgICAgICAgY29uc3QgZmVhdHVyZVVybCA9IHRoaXMucHJvcHMuY29uZmlnLnNlcnZpY2VzLnNlcnZpY2VfMS51cmw7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGZWF0dXJlTGF5ZXIoe3VybDpmZWF0dXJlVXJsLG91dEZpZWxkczogW1wiKlwiXX0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciAoam12OiBKaW11TWFwVmlldykge1xyXG4gICAgICAgIGlmIChqbXYpIHtcclxuICAgICAgICAgICAgam12LnZpZXcubWFwLmFkZCh0aGlzLmdyYXBoaWNMYXllckZvdW5kKTtcclxuICAgICAgICAgICAgam12LnZpZXcubWFwLmFkZCh0aGlzLmdyYXBoaWNMYXllclNlbGVjdGVkKTtcclxuICAgICAgICAgICAgV2lkZ2V0LmFjdGl2ZVZpZXcgPSBqbXY7XHJcbiAgICAgICAgICAgIGxldCBhcnJheVN1cCA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgbGF5ZXJzSWRzID0gW11cclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGZlYXR1cmVMYXllciA9IHRoaXMuZ2V0RmVhdHVyZUxheWVyKCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGxheWVyVmlld1Byb3BzID0gbmV3IExheWVyVmlldyh7bGF5ZXI6ZmVhdHVyZUxheWVyLHZpc2libGU6dHJ1ZSxzcGF0aWFsUmVmZXJlbmNlU3VwcG9ydGVkOnRydWV9KVxyXG4gICAgICAgICAgICAvLyBjb25zdCBsYXllclZpZXcgPSBuZXcgSmltdUxheWVyVmlldyh7bGF5ZXI6ZmVhdHVyZUxheWVyLHZpZXc6bGF5ZXJWaWV3UHJvcHN9KTtcclxuICAgICAgICAgICAgLy8gam12LnZpZXcubWFwLmFkZChmZWF0dXJlTGF5ZXIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VydmljZXMgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXJ2aWNlc1xyXG4gICAgICAgICAgICBjb25zdCBzZXJ2aWNlSXRlbXMgPSBPYmplY3Qua2V5cyhzZXJ2aWNlcyk7XHJcbiAgICAgICAgICAgIHNlcnZpY2VJdGVtcy5mb3JFYWNoKChrZXkpPT57XHJcbiAgICAgICAgICAgICAgICBhcnJheVN1cC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDpzZXJ2aWNlc1trZXldLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOmtleVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGxpc3RJZHMgPSBzZXJ2aWNlc1trZXldLmxheWVyTGlzdElkcztcclxuICAgICAgICAgICAgICAgIC8vIGxldCBhdmFpbGFibGVJZHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIChsaXN0SWRzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7aSA8IGxpc3RJZHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGNvbnN0IHVybCA9IHNlcnZpY2VzW2tleV0udXJsPz9cIiBcIjtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gY29uc3QgbmV3VXJsID0gYCR7dXJsfS8ke2xpc3RJZHNbaV19YFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBjb25zdCBsYXllciA9IGhlbHBlci5xdWVyeUZlYXR1cmVTZXJ2aWNlKG5ld1VybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGlmIChsYXllcil7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vICAgICAvLyBsYXllci5sb2FkKClcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gICAgIC8vIC50aGVuKChsb2FkZWRMYXllcik9PntcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gICAgICAgICBpZiAobGF5ZXIuaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICBhdmFpbGFibGVJZHMucHVzaChsYXllcj8uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gICAgIC8vIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vICAgICAvLyAuY2F0Y2goKGVycik9Pnt9KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGxheWVyPy5nZW9tZXRyeVR5cGUsbGF5ZXIsXCJjaGVjayBsYXllciBnZW9tZXRyeVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gaWYgKGxheWVyPy5pZCAmJiBsYXllcj8uZ2VvbWV0cnlUeXBlID09PSBcInBvbHlnb25cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgLy8gbGF5ZXJzSWRzLnB1c2gobGF5ZXIuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IG9iamVjdCA9IHtmZWF0dXJlU2VydmVyOnNlcnZpY2VzW2tleV0udXJsLGxheWVySWRzOmF2YWlsYWJsZUlkc31cclxuICAgICAgICAgICAgICAgICAgICAvLyBsYXllcnNJZHMucHVzaChvYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGF2YWlsYWJsZUlkcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgdXJsID0gc2VydmljZXNba2V5XS51cmw/P1wiIFwiO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbmV3VXJsID0gdXJsICsgXCIvMFwiXHJcbiAgICAgICAgICAgICAgICAvLyBoZWxwZXIucXVlcnlGZWF0dXJlU2VydmljZSh1cmwpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAvLyBqbXYudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PntcclxuICAgICAgICAgICAgLy8gICAgIGlmKGYudHlwZSA9PT0gXCJmZWF0dXJlXCIpe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGFycmF5U3VwLnB1c2goe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpmLnRpdGxlLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpmLmlkXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vVE9ETyAtd2UgZG9uJ3QgdXNlIGl0IG5vdy8vXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHNrZXRjaCA9IG5ldyBTa2V0Y2goe1xyXG4gICAgICAgICAgICAvLyAgICAgbGF5ZXI6IHRoaXMuZ3JhcGhpY0xheWVyRm91bmQsXHJcbiAgICAgICAgICAgIC8vICAgICB2aWV3OiBqbXYudmlldyxcclxuICAgICAgICAgICAgLy8gICAgIGNyZWF0aW9uTW9kZTpcInNpbmdsZVwiLFxyXG4gICAgICAgICAgICAvLyAgICAgY29udGFpbmVyOiBcInNrZXRjaC13aWRnZXQtYWRkcmVzc1wiLC8vVE9ETyBtaWdsaW9yYXJlIHNlbnphIGlkIGNhYmxhdG9cclxuICAgICAgICAgICAgLy8gICAgIGF2YWlsYWJsZUNyZWF0ZVRvb2xzOltcInBvbHlnb25cIiwgXCJyZWN0YW5nbGVcIiwgXCJjaXJjbGVcIixcInBvaW50XCJdLFxyXG4gICAgICAgICAgICAvLyAgICAgdmlzaWJsZUVsZW1lbnRzOiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc2VsZWN0aW9uVG9vbHM6e1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBcImxhc3NvLXNlbGVjdGlvblwiOiBmYWxzZVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc2V0dGluZ3NNZW51OiBmYWxzZVxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNrZXRjaC5vbihcImNyZWF0ZVwiLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIC8vICAgICBqbXYudmlldy5ncmFwaGljcy5yZW1vdmVBbGwoKTtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuZ3JhcGhpY0xheWVyRm91bmQucmVtb3ZlQWxsKCk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgaWYgKGV2ZW50LnN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBwb2x5Z29uR3JhcGhpYyA9IG5ldyBHcmFwaGljKHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZ2VvbWV0cnk6IGV2ZW50LmdyYXBoaWMuZ2VvbWV0cnksXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHN5bWJvbDogdGhpcy5zeW1ib2xGb3VuZFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLmFkZChwb2x5Z29uR3JhcGhpYyk7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc3Qgc291cmNlcyA9IFt7XHJcbiAgICAgICAgICAgIC8vICAgICBsYXllcjpmZWF0dXJlTGF5ZXIsXHJcbiAgICAgICAgICAgIC8vICAgICBtYXhSZXN1bHRzOiA1LFxyXG4gICAgICAgICAgICAvLyAgICAgc2VhcmNoRmllbGRzOmZlYXR1cmVMYXllci5kaXNwbGF5RmllbGQsXHJcbiAgICAgICAgICAgIC8vICAgICBkaXNwbGF5RmllbGQ6ZmVhdHVyZUxheWVyLmRpc3BsYXlGaWVsZCxcclxuICAgICAgICAgICAgLy8gICAgIG1heFN1Z2dlc3Rpb25zOiA2LFxyXG4gICAgICAgICAgICAvLyAgICAgZXhhY3RNYXRjaDpmYWxzZSxcclxuICAgICAgICAgICAgLy8gICAgIG1pblN1Z2dlc3RDaGFyYWN0ZXJzOjAsXHJcbiAgICAgICAgICAgIC8vICAgICBvdXRGaWVsZHM6IFtcIipcIl0sXHJcbiAgICAgICAgICAgIC8vIH1dXHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VhcmNoV2lkZ2V0ID0gbmV3IFNlYXJjaCh7XHJcbiAgICAgICAgICAgICAgICB2aWV3OiBqbXYudmlldyxcclxuICAgICAgICAgICAgICAgIHJlc3VsdEdyYXBoaWNFbmFibGVkOnRydWUsXHJcbiAgICAgICAgICAgICAgICAvLyBzb3VyY2VzOnNvdXJjZXMsXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IFwic2VhcmNoLXdpZGdldC1hZGRyZXNzXCIvL1RPRE8gbWlnbGlvcmFyZSBzZW56YSBpZCBjYWJsYXRvXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2VhcmNoV2lkZ2V0Lm9uKFwic2VsZWN0LXJlc3VsdFwiLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICBpZihldmVudCAmJiBldmVudC5yZXN1bHQgJiYgZXZlbnQucmVzdWx0LmZlYXR1cmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGptdi5zZWxlY3RGZWF0dXJlc0J5R3JhcGhpYyhldmVudC5yZXN1bHQuZmVhdHVyZSxcImNvbnRhaW5zXCIpLnRoZW4oKHJlc3VsdHMpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaGVkTGF5ZXJzID0gaGVscGVyLmdldFNlbGVjdGVkTGF5ZXJGcm9tU2VhcmNoKHJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzLFwiY2hlY2sgcmVzdWx0c1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2hlZExheWVyczpzZWFyY2hlZExheWVyc30pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBqbXYudmlldy5ncmFwaGljcy5yZW1vdmVBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLnJlbW92ZUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZW9tZXRyeUJ1ZmZlcjogUG9seWdvbiA9IGdlb21ldHJ5RW5naW5lLmJ1ZmZlciggZXZlbnQucmVzdWx0LmZlYXR1cmUuZ2VvbWV0cnksIDEsIFwibWV0ZXJzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb2x5Z29uR3JhcGhpYyA9IG5ldyBHcmFwaGljKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IGdlb21ldHJ5QnVmZmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sRm91bmRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljTGF5ZXJGb3VuZC5hZGQocG9seWdvbkdyYXBoaWMpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZWFyY2hXaWRnZXQub24oXCJzZWFyY2gtY2xlYXJcIiwgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljTGF5ZXJGb3VuZC5yZW1vdmVBbGwoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGFycmF5TGF5ZXI6IGFycmF5U3VwLFxyXG4gICAgICAgICAgICAgICAgamltdU1hcFZpZXc6IGptdixcclxuICAgICAgICAgICAgICAgIHNlYXJjaFdpZGdldDpzZWFyY2hXaWRnZXQsXHJcbiAgICAgICAgICAgICAgICBsYXllcnNJZHM6bGF5ZXJzSWRzXHJcbiAgICAgICAgICAgICAgICAvLyBza2V0Y2hXaWRnZXQ6c2tldGNoXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZVRhYnMoKXtcclxuICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0xheWVyU2VsZWN0ZWQucmVtb3ZlQWxsKCk7XHJcbiAgICB9XHJcbiAgICBfdmlld0xhYmVscygpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsYWJlbFZpc2libGU6ICF0aGlzLnN0YXRlLmxhYmVsVmlzaWJsZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF92aWV3U2VsZWN0RHJhdygpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2aWV3U2VsZWN0RHJhdzogIXRoaXMuc3RhdGUudmlld1NlbGVjdERyYXdcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLnZpc2libGUgPSB0aGlzLnN0YXRlLnZpZXdTZWxlY3REcmF3O1xyXG4gICAgfVxyXG5cclxuICAgIC8vRXh0cmFVcmJhbm9cclxuICAgIG9uQ2hhbmdlRXh0cmFVcmJhbm8oZSx0eXBlKXtcclxuICAgICAgaWYodHlwZT09XCJpbmRpcml6em9cIil7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmZvcm1FeHRyYVVyYmFuby5pbmRpcml6em8gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgIHRoaXMuc3RhdGUuZm9ybUV4dHJhVXJiYW5vLmttID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgc2F2ZVN0YXRlKGtleSxlKXtcclxuICAgICAgICBjb25zdCBzdGF0ZU5ldyA9IHt9XHJcbiAgICAgICAgc3RhdGVOZXdba2V5XSA9IGUudGFyZ2V0ID8gZS50YXJnZXQudmFsdWU6IGU7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGVOZXcpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgb25DaGFuZ2VTZWxlY3RMYXllciAoZSxuLHMpe1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXc7XHJcbiAgICAgICAgLy8gY29uc3QgbGF5ZXIgPSB2aWV3Lm1hcC5hbGxMYXllcnMuZmluZCgoaXRlbSk9Pml0ZW0uaWQgPT09IG4pO1xyXG4gICAgICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQpe1xyXG4gICAgICAgICAgICBjb25zdCBjb3BpZWRMaXN0U2VydmljZXMgPSBbLi4udGhpcy5zdGF0ZS5saXN0U2VydmljZXMsbl07XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xpc3RTZXJ2aWNlczpjb3BpZWRMaXN0U2VydmljZXN9KVxyXG4gICAgICAgICAgICAvLyB0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcy5wdXNoKG4pO1xyXG4gICAgICAgICAgICAvLyB2aWV3LmdvVG8obGF5ZXIuZnVsbEV4dGVudClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5zdGF0ZS5saXN0U2VydmljZXMuaW5kZXhPZihuKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvcGllZExpc3RTZXJ2aWNlcyA9IFsuLi50aGlzLnN0YXRlLmxpc3RTZXJ2aWNlc107XHJcbiAgICAgICAgICAgICAgICBjb3BpZWRMaXN0U2VydmljZXMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGlzdFNlcnZpY2VzOmNvcGllZExpc3RTZXJ2aWNlc30pXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZVNlbGVjdFR5cGVHZW9tZXRyeShlKXtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5zdGF0ZS50eXBlU2VsZWN0ZWQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNzdlRvQXJyYXkoc3RyLCBkZWxpbWl0ZXIgPSBcIixcIikge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBzdHIuc2xpY2UoMCwgc3RyLmluZGV4T2YoXCJcXG5cIikpLnNsaWNlKDAsIHN0ci5pbmRleE9mKFwiXFxyXCIpKS5zcGxpdChkZWxpbWl0ZXIpO1xyXG4gICAgICAgIGNvbnN0IHJvd3MgPSBzdHIuc2xpY2Uoc3RyLmluZGV4T2YoXCJcXG5cIikgKyAxKS5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICByZXR1cm4gcm93cy5tYXAoZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSByb3cuc3BsaXQoZGVsaW1pdGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcnMucmVkdWNlKGZ1bmN0aW9uIChvYmplY3QsIGhlYWRlciwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdFtoZWFkZXJdID0gdmFsdWVzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICAgICAgICAgIH0sIHt9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkNoYW5nZUZpbGVDc3ZDb29yZGluYXRlKGUpe1xyXG4gICAgICAgIGF3YWl0IGNvb3JkaW5hdGVGb3JtYXR0ZXIubG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlU2xpZGVyQWRkcmVzcyhlKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWVCdWZmZXJBZGRyZXNzOiBwYXJzZUludChpc05hTihlKSA/IGUudGFyZ2V0LnZhbHVlOiBlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25DaGFuZ2VTbGlkZXJDb29yZChlKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWVCdWZmZXJDb29yZDogcGFyc2VJbnQoaXNOYU4oZSkgPyBlLnRhcmdldC52YWx1ZTogZSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFzeW5jIG9uQ2xpY2tSZXNlYXJjaGZyb21BZGRyZXNzKCl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC50YWJsZXMucmVtb3ZlQWxsKCk7XHJcblxyXG4gICAgICAgIC8vcGFyYW1ldHJpIGZvcm1cclxuICAgICAgICBsZXQgYXJyYXlHZW9tZXRyeSA9IFtdO1xyXG4gICAgICAgIGxldCBjb25maWdFcnJvcnMgPSBbXTtcclxuICAgICAgICAvL1RPRE8gUFJFTkRFUkUgR0VPTUVUUklBXHJcbiAgICAgICAgdGhpcy5ncmFwaGljTGF5ZXJGb3VuZC5ncmFwaGljcy5mb3JFYWNoKGc9PntcclxuICAgICAgICAgICAgY29uc3Qgc2VydmljZXMgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXJ2aWNlcztcclxuICAgICAgICAgICAgY29uc3Qgc2VydmljZUtleXMgPSBPYmplY3Qua2V5cyhzZXJ2aWNlcyk7XHJcbiAgICAgICAgICAgIGlmIChzZXJ2aWNlS2V5cy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7aSA8IHNlcnZpY2VLZXlzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTZXJ2aWNlID0gc2VydmljZXNbc2VydmljZUtleXNbaV1dO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaGVkTGF5ZXJzID0gdGhpcy5zdGF0ZS5zZWFyY2hlZExheWVycztcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWFyY2hlZExheWVycyxjdXJyZW50U2VydmljZSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoZWRMYXllcnMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHNlYXJjaGVkTGF5ZXJzLmZpbmQoKGl0ZW0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZmVhdHVyZVNlcnZlciA9PT0gY3VycmVudFNlcnZpY2UudXJsICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2VydmljZS5sYXllckxpc3RJZHMuaW5jbHVkZXMoaXRlbS5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChCb29sZWFuKGl0ZW0pKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZy5nZW9tZXRyeSA9IGdlb21ldHJ5RW5naW5lLmJ1ZmZlcihnLmdlb21ldHJ5LCB0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQWRkcmVzcywgXCJtZXRlcnNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheUdlb21ldHJ5LnB1c2goZy5nZW9tZXRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyBjb25zdCBsYXllcnNJZHMgPSB0aGlzLnN0YXRlLmxheWVyc0lkcztcclxuICAgICAgICAgICAgLy8gaWYgKGxheWVyc0lkcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7aSA8IGxheWVyc0lkcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBjdXJyZW50TGF5ZXJpZCA9IGxheWVyc0lkc1tpXTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBzZXJ2aWNlS2V5ID0gY3VycmVudExheWVyaWQuc2VydmljZUtleTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBsaXN0U2VydmljZXMgPSB0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcztcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAobGlzdFNlcnZpY2VzLmluY2x1ZGVzKHNlcnZpY2VLZXkpKXtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgbGlzdElkcyA9IGN1cnJlbnRMYXllcmlkLmxheWVySWRzO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpZiAobGlzdElkcy5pbmNsdWRlcyhnLmxheWVyLmlkKSl7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBnLmdlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKGcuZ2VvbWV0cnksIHRoaXMuc3RhdGUudmFsdWVCdWZmZXJBZGRyZXNzLCBcIm1ldGVyc1wiKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGFycmF5R2VvbWV0cnkucHVzaChnLmdlb21ldHJ5KTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25maWdFcnJvcnMucHVzaChcIkxheWVyIGlkIHdhcyBub3QgZm91bmQgaW4gY29uZmlnIGZpbGVcIilcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgLy8gLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAvLyBnLmdlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKGcuZ2VvbWV0cnksIHRoaXMuc3RhdGUudmFsdWVCdWZmZXJBZGRyZXNzLCBcIm1ldGVyc1wiKTtcclxuICAgICAgICAgICAgLy8gYXJyYXlHZW9tZXRyeS5wdXNoKGcuZ2VvbWV0cnkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vY29udHJvbGxvIGVycm9yaVxyXG4gICAgICAgIGxldCBhcnJheUVycm9ycyA9IFtdO1xyXG4gICAgICAgIGlmKGFycmF5R2VvbWV0cnkubGVuZ3RoKSB7IC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5nZW9tZXRyeSA9IGdlb21ldHJ5RW5naW5lLnVuaW9uKGFycmF5R2VvbWV0cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGFycmF5RXJyb3JzLnB1c2goXCJTZWxlemlvbmEgdW5hIGdlb21ldHJpYSBpbiBtYXBwYVwiKTtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5saXN0U2VydmljZXMubGVuZ3RoKSBhcnJheUVycm9ycy5wdXNoKFwiU2VsZXppb25hIGFsbWVubyB1biBzZXJ2aXppb1wiKTtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS50eXBlU2VsZWN0ZWQpIGFycmF5RXJyb3JzLnB1c2goXCJTZWxlemlvbmEgdW5hIHRpcG9sb2dpYSBkaSBzZWxlemlvbmVcIik7XHJcbiAgICAgICAgaWYgKCFhcnJheUdlb21ldHJ5Lmxlbmd0aCAmJiBjb25maWdFcnJvcnMubGVuZ3RoID4gMCkgYXJyYXlFcnJvcnMgPSBjb25maWdFcnJvcnNcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTphcnJheUVycm9ycy5qb2luKClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYoYXJyYXlFcnJvcnMubGVuZ3RoID09PSAwICYmIHRoaXMucHJvcHMuY29uZmlnLnNldHRpbmdzLmlkV2lkZ2V0VGFibGUgIT09IFwiXCIpe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZiAmJiBmLnR5cGU9PT1cImZlYXR1cmVcIiAmJiB0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcy5pbmRleE9mKGluZGV4KSAhPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGYubGFiZWxpbmdJbmZvPy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmLmxhYmVsaW5nSW5mb1swXS5zeW1ib2wuZm9udC5mYW1pbHkgPSBcIkFyaWFsXCI7Ly9maXggZm9udCB2ZXJkYW5hIG5vdCBpbiBzdGF0aWMgZXNyaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmLmxhYmVsc1Zpc2libGUgPSB0aGlzLnN0YXRlLmxhYmVsVmlzaWJsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBpZFdpZGdldFRhYmxlID0gdGhpcy5wcm9wcy5jb25maWcuc2V0dGluZ3MuaWRXaWRnZXRUYWJsZSAhPT0gXCIgXCIgPyB0aGlzLnByb3BzLmNvbmZpZy5zZXR0aW5ncy5pZFdpZGdldFRhYmxlIDpcInZhbHVlXCJcclxuICAgICAgICAgICAgLy9tYW5kbyBsYXllcmlkIGFkIFRhYmxlTGlzdFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGF5ZXJPcGVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlU2VsZWN0ZWQ6dGhpcy5zdGF0ZS50eXBlU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OnRoaXMuc3RhdGUuZ2VvbWV0cnkudG9KU09OKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RTZXJ2aWNlczp0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVmlldzp0aGlzLmdldEFjdGl2ZVZpZXcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEFsbExheWVyczp0aGlzLmdldEFsbENoZWNrZWRMYXllcnNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgb25DbGlja1Jlc2VhcmNoZnJvbUNvb3JkKCl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC50YWJsZXMucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgbGV0IGxvbmcgPSB0aGlzLnN0YXRlLmxvbmdfZV8xICsgXCIuXCIgKyB0aGlzLnN0YXRlLmxvbmdfZV8yICsgdGhpcy5zdGF0ZS5sb25nX2VfMyArIFwiKlwiO1xyXG4gICAgICAgIGxldCBsYXQgPSB0aGlzLnN0YXRlLmxhdF9lXzEgKyBcIi5cIiArIHRoaXMuc3RhdGUubGF0X2VfMiArIHRoaXMuc3RhdGUubGF0X2VfMyArIFwiKlwiO1xyXG5cclxuICAgICAgICBhd2FpdCBjb29yZGluYXRlRm9ybWF0dGVyLmxvYWQoKTtcclxuICAgICAgICBsZXQgcG9pbnRHZW9ncmFwaGljID0gY29vcmRpbmF0ZUZvcm1hdHRlci5mcm9tTGF0aXR1ZGVMb25naXR1ZGUobGF0ICsgXCJ8XCIgKyBsb25nKTtcclxuICAgICAgICBsZXQgcG9pbnQgPSB3ZWJNZXJjYXRvclV0aWxzLmdlb2dyYXBoaWNUb1dlYk1lcmNhdG9yKHBvaW50R2VvZ3JhcGhpYyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHBvaW50KTtcclxuXHJcbiAgICAgICAgbGV0IGdlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKHBvaW50LCAxLCBcIm1ldGVyc1wiKTtcclxuICAgICAgICBjb25zdCBwb2x5Z29uR3JhcGhpYyA9IG5ldyBHcmFwaGljKHtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGdlb21ldHJ5OiBnZW9tZXRyeSxcclxuICAgICAgICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbEZvdW5kXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLmFkZChwb2x5Z29uR3JhcGhpYyk7XHJcblxyXG4gICAgICAgIGxldCBhcnJheUdlb21ldHJ5ID0gW107XHJcbiAgICAgICAgLy9UT0RPIFBSRU5ERVJFIEdFT01FVFJJQVxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0xheWVyRm91bmQuZ3JhcGhpY3MuZm9yRWFjaChnPT57XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgZy5nZW9tZXRyeSA9IGdlb21ldHJ5RW5naW5lLmJ1ZmZlcihnLmdlb21ldHJ5LCB0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmQsIFwibWV0ZXJzXCIpO1xyXG4gICAgICAgICAgICBhcnJheUdlb21ldHJ5LnB1c2goZy5nZW9tZXRyeSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vY29udHJvbGxvIGVycm9yaVxyXG4gICAgICAgIGxldCBhcnJheUVycm9ycyA9IFtdO1xyXG4gICAgICAgIGlmKGFycmF5R2VvbWV0cnkubGVuZ3RoKSB7IC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5nZW9tZXRyeSA9IGdlb21ldHJ5RW5naW5lLnVuaW9uKGFycmF5R2VvbWV0cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGFycmF5RXJyb3JzLnB1c2goXCJTZWxlemlvbmEgdW5hIGdlb21ldHJpYSBpbiBtYXBwYVwiKTtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5saXN0U2VydmljZXMubGVuZ3RoKSBhcnJheUVycm9ycy5wdXNoKFwiU2VsZXppb25hIGFsbWVubyB1biBzZXJ2aXppb1wiKTtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS50eXBlU2VsZWN0ZWQpIGFycmF5RXJyb3JzLnB1c2goXCJTZWxlemlvbmEgdW5hIHRpcG9sb2dpYSBkaSBzZWxlemlvbmVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6YXJyYXlFcnJvcnMuam9pbigpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKGFycmF5RXJyb3JzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnByb3BzLmNvbmZpZy5zZXR0aW5ncy5pZFdpZGdldFRhYmxlICE9PSBcIlwiKXtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PntcclxuICAgICAgICAgICAgICAgIGlmKGYgJiYgZi50eXBlPT09XCJmZWF0dXJlXCIgJiYgdGhpcy5zdGF0ZS5saXN0U2VydmljZXMuaW5kZXhPZihpbmRleCkgIT09IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihmLmxhYmVsaW5nSW5mbz8ubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZi5sYWJlbGluZ0luZm9bMF0uc3ltYm9sLmZvbnQuZmFtaWx5ID0gXCJBcmlhbFwiOy8vZml4IGZvbnQgdmVyZGFuYSBub3QgaW4gc3RhdGljIGVzcmlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZi5sYWJlbHNWaXNpYmxlID0gdGhpcy5zdGF0ZS5sYWJlbFZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9tYW5kbyBsYXllcmlkIGFkIFRhYmxlTGlzdFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuc2V0dGluZ3MuaWRXaWRnZXRUYWJsZSxcclxuICAgICAgICAgICAgICAgICAgICBcImxheWVyT3BlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZVNlbGVjdGVkOnRoaXMuc3RhdGUudHlwZVNlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTp0aGlzLnN0YXRlLmdlb21ldHJ5LnRvSlNPTigpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0U2VydmljZXM6dGhpcy5zdGF0ZS5saXN0U2VydmljZXNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtYWRkcmVzcyBqaW11LXdpZGdldCAgY29udGFpbmVyLWZsdWlkXCIgc3R5bGU9e3tvdmVyZmxvdzpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndXNlTWFwV2lkZ2V0SWRzJykgJiYgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiYgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHNbMF0gJiYgKFxyXG4gICAgICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50IHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfSBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3RoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTMgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2VudHJpYyBjaGVjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGNsYXNzTmFtZT1cIm1yLTJcIiBhcmlhLWxhYmVsPVwiVmlzdWFsaXp6YSBkaXNlZ25vIHNlbGV6aW9uZVwiIGNoZWNrZWQ9e3RoaXMuZ3JhcGhpY0xheWVyRm91bmQudmlzaWJsZX0gb25DaGFuZ2U9e3RoaXMuX3ZpZXdTZWxlY3REcmF3fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgZGlzZWdubyBzZWxlemlvbmVcclxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNlbnRyaWMgY2hlY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9XCJtci0yXCIgYXJpYS1sYWJlbD1cIlZpc3VhbGl6emEgZGlzZWdubyBzZWxlemlvbmVcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmxhYmVsVmlzaWJsZX0gb25DaGFuZ2U9e3RoaXMuX3ZpZXdMYWJlbHN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBldGljaGV0dGVcclxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwidGFiLTFcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VUYWJzfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRhYnNcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGFiIGlkPVwic2VhcmNoLWFkdmFuY2VkLXRhYi1VcmJhbm9cIiBjbGFzc05hbWU9XCIgcC0xXCIgdGl0bGU9XCJVcmJhbm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlJpY2VyY2EgcGVyIGluZGlyaXp6bzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaC13aWRnZXQtYWRkcmVzc1wiIGNsYXNzTmFtZT1cInctMTAwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uIGNsYXNzTmFtZT1cIm10LTQgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb25JdGVtIGljb24tc3RhcnQ9XCJjYXJcIiBpdGVtVGl0bGU9XCJTZWxlemlvbmEgbGF5ZXJzIGRhIGludGVycm9nYXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TGF5ZXIgc2VsZXppb25hdGk6IHt0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcy5sZW5ndGh9IC8ge3RoaXMuc3RhdGUuYXJyYXlMYXllci5sZW5ndGh9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aVNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLmFycmF5TGF5ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja0l0ZW09e3RoaXMub25DaGFuZ2VTZWxlY3RMYXllcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxpc3RhIHNlcnZpemlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb25JdGVtIGljb24tc3RhcnQ9XCJjYXJcIiBpdGVtVGl0bGU9XCJPcHppb25lIGRpIHJpY2VyY2FcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbG9yZSBkaSBidWZmZXIgPE51bWVyaWNJbnB1dCBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJBZGRyZXNzfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckFkZHJlc3N9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQWRkcmVzc30gY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgdy01MFwiLz4gbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgbXQtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXs1MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpcG8gZGkgc2VsZXppb25lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBjbGFzc05hbWU9XCJ3LTEwMCBtdC0yXCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTZWxlY3RUeXBlR2VvbWV0cnl9IHBsYWNlaG9sZGVyPVwiU2VsZXppb25lIHRpcG8uLi5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImludGVyc2VjdHNcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+SW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiY29udGFpbnNcIj5Db250YWluczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiY3Jvc3Nlc1wiPkNyb3NzZXM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImVudmVsb3BlLWludGVyc2VjdHNcIj5FbnZlbG9wZSBJbnRlcnNlY3RzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJpbmRleC1pbnRlcnNlY3RzXCI+SW5kZXggSW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiT3ZlcmxhcHNcIj5PdmVybGFwczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwidG91Y2hlc1wiPlRvdWNoZXM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIndpdGhpblwiPldpdGhpbjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicmVsYXRpb25cIj5SZWxhdGlvbjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwidy0xMDBcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tSZXNlYXJjaGZyb21BZGRyZXNzfT5SaWNlcmNhIG5laSBsYXllcjwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICYmIHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICE9PSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybT1cImJhc2ljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICB7Lyo8VGFiIGlkPVwic2VhcmNoLWFkdmFuY2VkLXRhYi1FeHRyYXVyYmFub1wiIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBwLTFcIiB0aXRsZT1cIkV4dHJhdXJiYW5vXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMiBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI1XCI+SW5kaXJpenpvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTc1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5kaXJpenpvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yNVwiPkttOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTc1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiS21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhYj4qL31cclxuICAgICAgICAgICAgICAgIDxUYWIgaWQ9XCJzZWFyY2gtYWR2YW5jZWQtdGFiLUNvb3JkXCIgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIHAtMVwiIHRpdGxlPVwiQ29vcmRpbmF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMiBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0yNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9uZy4gKFgpOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zYXZlU3RhdGUoJ2xvbmdfZV8xJyxlKX0gdmFsdWU9e3RoaXMuc3RhdGUubG9uZ19lXzF9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctMjVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1lcmljSW5wdXQgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNhdmVTdGF0ZSgnbG9uZ19lXzInLGUpfSB2YWx1ZT17dGhpcy5zdGF0ZS5sb25nX2VfMn0gY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgdy0yNVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWVyaWNJbnB1dCBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2F2ZVN0YXRlKCdsb25nX2VfMycsZSl9IHZhbHVlPXt0aGlzLnN0YXRlLmxvbmdfZV8zfSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTI1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInctMjVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhdC4gKFkpOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zYXZlU3RhdGUoJ2xhdF9lXzEnLGUpfSB2YWx1ZT17dGhpcy5zdGF0ZS5sYXRfZV8xfSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTI1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zYXZlU3RhdGUoJ2xhdF9lXzInLGUpfSB2YWx1ZT17dGhpcy5zdGF0ZS5sYXRfZV8yfSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTI1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zYXZlU3RhdGUoJ2xhdF9lXzMnLGUpfSB2YWx1ZT17dGhpcy5zdGF0ZS5sYXRfZV8zfSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTI1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FsY2l0ZUFjY29yZGlvbiBjbGFzc05hbWU9XCJtdC00IG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uSXRlbSBpY29uLXN0YXJ0PVwiY2FyXCIgaXRlbVRpdGxlPVwiU2VsZXppb25hIGxheWVycyBkYSBpbnRlcnJvZ2FyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkxheWVyIHNlbGV6aW9uYXRpOiB7dGhpcy5zdGF0ZS5saXN0U2VydmljZXMubGVuZ3RofSAvIHt0aGlzLnN0YXRlLmFycmF5TGF5ZXIubGVuZ3RofTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5hcnJheUxheWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tJdGVtPXt0aGlzLm9uQ2hhbmdlU2VsZWN0TGF5ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMaXN0YSBzZXJ2aXppXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uSXRlbSBpY29uLXN0YXJ0PVwiY2FyXCIgaXRlbVRpdGxlPVwiT3B6aW9uZSBkaSByaWNlcmNhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWxvcmUgZGkgYnVmZmVyIDxOdW1lcmljSW5wdXQgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmR9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmR9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQ29vcmR9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctNTBcIi8+IG1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIG10LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckNvb3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJDb29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXs1MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQ29vcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaXBvIGRpIHNlbGV6aW9uZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPVwidy0xMDAgbXQtMlwiIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2VsZWN0VHlwZUdlb21ldHJ5fSBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uZSB0aXBvLi4uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJpbnRlcnNlY3RzXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPkludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNvbnRhaW5zXCI+Q29udGFpbnM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNyb3NzZXNcIj5Dcm9zc2VzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJlbnZlbG9wZS1pbnRlcnNlY3RzXCI+RW52ZWxvcGUgSW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiaW5kZXgtaW50ZXJzZWN0c1wiPkluZGV4IEludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk92ZXJsYXBzXCI+T3ZlcmxhcHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInRvdWNoZXNcIj5Ub3VjaGVzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJ3aXRoaW5cIj5XaXRoaW48L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInJlbGF0aW9uXCI+UmVsYXRpb248L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cInctMTAwXCIgb25DbGljaz17dGhpcy5vbkNsaWNrUmVzZWFyY2hmcm9tQ29vcmR9PlJpY2VyY2EgbmVpIGxheWVyPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgJiYgdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgIT09IFwiXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtPVwiYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICA8VGFiIGlkPVwic2VhcmNoLWFkdmFuY2VkLXRhYi1Db29yZC1maWxlXCIgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIHAtMVwiIHRpdGxlPVwiTXVsdGljb29yZGluYXRlIGRhIGZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0xMDAgZm9ybS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZ2dpdW5naSB1biBmaWxlIENTVlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlRmlsZUNzdkNvb3JkaW5hdGV9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIGZvcm0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbCBmaWxlIGRldmUgZXNzZXJlIGZvcm1hdHRhdG8gY29uIHRyZSBjYW1waSBJRCxZLFguXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChFc2VtcGlvOiBQdW50b18xLDM4LjcyMzIzMDU2LDE2LjQ5NTk4MDU2KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FsY2l0ZUFjY29yZGlvbiBjbGFzc05hbWU9XCJtdC00IG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uSXRlbSBpY29uLXN0YXJ0PVwiY2FyXCIgaXRlbVRpdGxlPVwiU2VsZXppb25hIGxheWVycyBkYSBpbnRlcnJvZ2FyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkxheWVyIHNlbGV6aW9uYXRpOiB7dGhpcy5zdGF0ZS5saXN0U2VydmljZXMubGVuZ3RofSAvIHt0aGlzLnN0YXRlLmFycmF5TGF5ZXIubGVuZ3RofTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5hcnJheUxheWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tJdGVtPXt0aGlzLm9uQ2hhbmdlU2VsZWN0TGF5ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMaXN0YSBzZXJ2aXppXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uSXRlbSBpY29uLXN0YXJ0PVwiY2FyXCIgaXRlbVRpdGxlPVwiT3B6aW9uZSBkaSByaWNlcmNhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWxvcmUgZGkgYnVmZmVyIDxOdW1lcmljSW5wdXQgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmR9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmR9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQ29vcmR9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctNTBcIi8+IG1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIG10LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckNvb3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJDb29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXs1MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQ29vcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaXBvIGRpIHNlbGV6aW9uZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPVwidy0xMDAgbXQtMlwiIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2VsZWN0VHlwZUdlb21ldHJ5fSBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uZSB0aXBvLi4uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJpbnRlcnNlY3RzXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPkludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNvbnRhaW5zXCI+Q29udGFpbnM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNyb3NzZXNcIj5Dcm9zc2VzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJlbnZlbG9wZS1pbnRlcnNlY3RzXCI+RW52ZWxvcGUgSW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiaW5kZXgtaW50ZXJzZWN0c1wiPkluZGV4IEludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk92ZXJsYXBzXCI+T3ZlcmxhcHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInRvdWNoZXNcIj5Ub3VjaGVzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJ3aXRoaW5cIj5XaXRoaW48L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInJlbGF0aW9uXCI+UmVsYXRpb248L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cInctMTAwXCIgb25DbGljaz17dGhpcy5vbkNsaWNrUmVzZWFyY2hmcm9tQ29vcmR9PlJpY2VyY2EgbmVpIGxheWVyPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgJiYgdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgIT09IFwiXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtPVwiYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==