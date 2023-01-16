System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/rest/support/Query","esri/layers/GraphicsLayer","esri/geometry/Polygon"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/query-builder/src/style.css":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/query-builder/src/style.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".item-table:hover {\n  cursor: pointer;\n  background-color: #e5f7ff; }\n\n.setting-svg:hover {\n  transform: scale(1.2);\n  cursor: pointer;\n  color: #005eca; }\n\n.setting-svg {\n  transition: all 1s;\n  transform-origin: 50% 50%; }\n", "",{"version":3,"sources":["webpack://./your-extensions/widgets/query-builder/src/style.css"],"names":[],"mappings":"AAAA;EACI,eAAe;EACf,yBAAyB,EAAA;;AAE7B;EACI,qBAAqB;EACrB,eAAe;EACf,cAAc,EAAA;;AAElB;EACI,kBAAkB;EAClB,yBAAyB,EAAA","sourcesContent":[".item-table:hover{\r\n    cursor: pointer;\r\n    background-color: #e5f7ff;\r\n}\r\n.setting-svg:hover {\r\n    transform: scale(1.2);\r\n    cursor: pointer;\r\n    color: #005eca;\r\n}\r\n.setting-svg{\r\n    transition: all 1s;\r\n    transform-origin: 50% 50%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./your-extensions/widgets/query-builder/src/style.css":
/*!*************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/style.css ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/query-builder/src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./jimu-icons/svg/outlined/application/setting.svg":
/*!*********************************************************!*\
  !*** ./jimu-icons/svg/outlined/application/setting.svg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.438.994c.213 0 .397.146.44.35.151.722.257 1.34.316 1.852.374.16.725.362 1.048.599l1.728-.676a.455.455 0 0 1 .556.188l1.42 2.394a.43.43 0 0 1-.091.547 21.98 21.98 0 0 1-1.49 1.194 5.17 5.17 0 0 1-.007 1.183l1.464 1.119a.43.43 0 0 1 .111.563l-1.42 2.394a.454.454 0 0 1-.53.197 22.445 22.445 0 0 1-1.807-.66c-.325.233-.679.43-1.055.586l-.263 1.794a.446.446 0 0 1-.445.376H6.574a.446.446 0 0 1-.44-.35 21.019 21.019 0 0 1-.317-1.853 5.34 5.34 0 0 1-1.047-.598l-1.728.675a.455.455 0 0 1-.556-.187l-1.42-2.395a.43.43 0 0 1 .091-.546c.567-.49 1.063-.888 1.49-1.194a5.167 5.167 0 0 1 .008-1.183L1.19 6.243a.43.43 0 0 1-.112-.562l1.42-2.395a.455.455 0 0 1 .531-.196c.719.233 1.321.453 1.807.66.324-.233.679-.43 1.056-.587l.262-1.794A.446.446 0 0 1 6.6.994h2.839Zm-.365 1H6.985l-.28 1.866-.467.19c-.235.095-.46.21-.672.34l-.207.136-.42.293-.476-.197c-.328-.137-.718-.281-1.169-.433l-.221-.074-1.045 1.719L3.59 6.999l-.06.479a4.127 4.127 0 0 0-.021.816l.014.144.058.492-.419.294c-.288.203-.615.451-.979.746l-.177.145 1.043 1.72 1.845-.703.406.29c.204.146.42.274.645.384l.228.103.474.199.059.49c.04.338.103.731.19 1.177l.043.219h2.088l.282-1.867.466-.19c.236-.095.46-.21.672-.34l.207-.136.419-.293.476.198c.33.136.72.28 1.17.433l.22.072 1.044-1.718-1.56-1.165.06-.479a4.131 4.131 0 0 0 .02-.815l-.013-.144-.06-.492.42-.295a18.1 18.1 0 0 0 .98-.746l.176-.146-1.043-1.72-1.844.705-.406-.29a4.496 4.496 0 0 0-.646-.385l-.228-.103-.474-.199-.058-.49c-.032-.27-.08-.576-.14-.916l-.094-.48Zm-1.067 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z\" fill=\"#000\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/close.svg":
/*!**************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/close.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z\" fill=\"#000\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/outlined/application/setting.tsx":
/*!*****************************************************!*\
  !*** ./jimu-icons/outlined/application/setting.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingOutlined": () => (/* binding */ SettingOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_application_setting_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/application/setting.svg */ "./jimu-icons/svg/outlined/application/setting.svg");
/* harmony import */ var _svg_outlined_application_setting_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_application_setting_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const SettingOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_application_setting_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/close.tsx":
/*!**********************************************!*\
  !*** ./jimu-icons/outlined/editor/close.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseOutlined": () => (/* binding */ CloseOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/close.svg */ "./jimu-icons/svg/outlined/editor/close.svg");
/* harmony import */ var _svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const CloseOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./your-extensions/widgets/query-builder/src/connector.ts":
/*!****************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/connector.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Helper {
    constructor() {
        this.getLayerAttributes = (selectedLayerId, layerContents) => {
            let attributes = [];
            if ((layerContents === null || layerContents === void 0 ? void 0 : layerContents.length) > 0) {
                const attributesObject = layerContents.find((layerContent) => {
                    if ((layerContent === null || layerContent === void 0 ? void 0 : layerContent.id) === selectedLayerId) {
                        return layerContent === null || layerContent === void 0 ? void 0 : layerContent.attributes;
                    }
                });
                attributes = attributesObject === null || attributesObject === void 0 ? void 0 : attributesObject.attributes;
            }
            return attributes;
        };
        this.getAttributeKeyArray = (attributes) => {
            let returnedKeys = [];
            if (attributes && Object.keys(attributes).length > 0) {
                returnedKeys = Object.keys(attributes);
            }
            return returnedKeys;
        };
        this.getSelectedContentsLayer = (results, checkedLayers) => {
            let selectedLayersArray = [];
            if ((results === null || results === void 0 ? void 0 : results.length) > 0) {
                selectedLayersArray = results.reduce((newArray, items) => {
                    var _a, _b, _c, _d;
                    if ((items === null || items === void 0 ? void 0 : items.length) > 0) {
                        let selectedLayerContents = {};
                        let currentLayerId = (_b = (_a = items[0]) === null || _a === void 0 ? void 0 : _a.layer) === null || _b === void 0 ? void 0 : _b.id;
                        if (checkedLayers.indexOf(currentLayerId) !== -1) {
                            selectedLayerContents["id"] = (_d = (_c = items[0]) === null || _c === void 0 ? void 0 : _c.layer) === null || _d === void 0 ? void 0 : _d.id;
                            selectedLayerContents["attributes"] = this.getAttributes(items); //step6 packaging attributes and keeping lon and latit
                            newArray.push(selectedLayerContents);
                        }
                    }
                    return newArray;
                }, []);
            }
            return selectedLayersArray;
        };
        this.getAttributes = (items) => {
            const attributesArray = items.reduce((newArray, item) => {
                var _a, _b, _c, _d, _e, _f;
                if (item === null || item === void 0 ? void 0 : item.attributes) {
                    if (item.geometry) {
                        const geometry = item.geometry;
                        const latitude = (_a = geometry === null || geometry === void 0 ? void 0 : geometry.latitude) !== null && _a !== void 0 ? _a : (_c = (_b = geometry === null || geometry === void 0 ? void 0 : geometry.extent) === null || _b === void 0 ? void 0 : _b.center) === null || _c === void 0 ? void 0 : _c.latitude;
                        const longitude = (_d = geometry === null || geometry === void 0 ? void 0 : geometry.longitude) !== null && _d !== void 0 ? _d : (_f = (_e = geometry === null || geometry === void 0 ? void 0 : geometry.extent) === null || _e === void 0 ? void 0 : _e.center) === null || _f === void 0 ? void 0 : _f.longitude;
                        if (longitude && latitude) {
                            newArray.push(Object.assign(Object.assign({}, item.attributes), { location: [latitude, longitude] }));
                        }
                        else {
                            newArray.push(item.attributes);
                        }
                    }
                    else {
                        newArray.push(item.attributes);
                    }
                }
                return newArray;
            }, []);
            return attributesArray;
        };
        this.getNumberOfAttributes = (layersContents) => {
            var _a, _b, _c, _d;
            let layerContentsObject = {};
            for (let i = 0; i < layersContents.length; i++) {
                layerContentsObject = Object.assign(Object.assign({}, layerContentsObject), { [(_a = layersContents[i]) === null || _a === void 0 ? void 0 : _a.id]: (_d = (_c = (_b = layersContents[i]) === null || _b === void 0 ? void 0 : _b.attributes) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0 });
            }
            return layerContentsObject;
        };
        this.getClickedLayerStatus = (results, selectedLayer) => {
            var _a, _b, _c;
            let status = false;
            let index = -1;
            if ((results === null || results === void 0 ? void 0 : results.length) > 0 && (selectedLayer === null || selectedLayer === void 0 ? void 0 : selectedLayer.length) > 0) {
                for (let i = 0; i < results.length; i++) {
                    let layerId = (_c = (_b = (_a = results[i]) === null || _a === void 0 ? void 0 : _a.graphic) === null || _b === void 0 ? void 0 : _b.layer) === null || _c === void 0 ? void 0 : _c.id;
                    index = selectedLayer.findIndex((item) => item.id === layerId);
                    if (index != -1) {
                        return true;
                    }
                }
            }
            return status;
        };
        this.checkIfLayerWasAdded = (layerId, mapLayersItems) => {
            let index = -1;
            let status = false;
            if ((mapLayersItems === null || mapLayersItems === void 0 ? void 0 : mapLayersItems.length) > 0) {
                index = mapLayersItems.findIndex((item) => (item === null || item === void 0 ? void 0 : item.id) === layerId);
                if (index !== -1) {
                    status = true;
                }
            }
            return status;
        };
        this.openTableAttribute = () => {
            const ariaExpandedElement = document.querySelector(".sidebar-controller");
            if (ariaExpandedElement.ariaExpanded === "false") {
                //@ts-ignore
                ariaExpandedElement.click();
            }
        };
        this.closeAttributeTable = () => {
            const ariaExpandedElement = document.querySelector(".sidebar-controller");
            if (ariaExpandedElement.ariaExpanded === "true") {
                //@ts-ignore
                ariaExpandedElement.click();
            }
        };
        this.getNumberOfItemsInField = (field, selectedAttributes) => {
            let numberOfItems = 0;
            if ((selectedAttributes === null || selectedAttributes === void 0 ? void 0 : selectedAttributes.length) > 0) {
                let valueArr = [];
                for (let i = 0; i < selectedAttributes.length; i++) {
                    valueArr.push(selectedAttributes[i][field]);
                }
                numberOfItems = valueArr.length;
            }
            return numberOfItems;
        };
        this.getSumOfValues = (field, selectedAttributes) => {
            let numberToAdd = 0;
            if ((selectedAttributes === null || selectedAttributes === void 0 ? void 0 : selectedAttributes.length) > 0) {
                for (let i = 0; i < selectedAttributes.length; i++) {
                    const val = selectedAttributes[i][field];
                    if (typeof val === "number" && !isNaN(val)) {
                        numberToAdd += val;
                    }
                }
            }
            return numberToAdd;
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Helper());


/***/ }),

/***/ "./your-extensions/widgets/query-builder/src/connector/connector.ts":
/*!**************************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/connector/connector.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

class AttributeTableConnector {
    constructor(activeView, self) {
        this.isArray = (val) => Array.isArray(val);
        this.isObject = (val) => Object.keys(val).length > 0;
        this.loopLayerGetIds = (layer) => {
            let idsArray = [];
            if (layer.length) {
                idsArray = layer.reduce((newArray, item) => {
                    if (item.id) {
                        newArray.push(item.id);
                    }
                    return newArray;
                }, []);
            }
            return idsArray;
        };
        this.setCheckedLayers = (allCheckedLayers, checkedLayers) => {
            if (checkedLayers) {
                this.checkedLayers = checkedLayers;
                return;
            }
            let checkedLayersArr = [];
            if (allCheckedLayers) {
                if (this.isObject(allCheckedLayers)) {
                    checkedLayersArr.push(allCheckedLayers.id);
                }
                if (this.isArray(allCheckedLayers)) {
                    checkedLayersArr = [...checkedLayersArr, this.loopLayerGetIds(allCheckedLayers)];
                }
            }
            this.checkedLayers = checkedLayersArr;
        };
        this.setAllCheckedLayers = (allCheckedLayers) => {
            if (this.isObject(allCheckedLayers)) {
                this.allCheckedLayers = [allCheckedLayers];
            }
            if (this.isArray(allCheckedLayers)) {
                this.allCheckedLayers = allCheckedLayers;
            }
        };
        this.getSelectedContentsLayer = (results) => {
            var _a;
            const checkedLayers = (_a = this.checkedLayers) !== null && _a !== void 0 ? _a : [];
            let selectedLayersArray = [];
            if ((results === null || results === void 0 ? void 0 : results.length) > 0) {
                selectedLayersArray = results.reduce((newArray, items) => {
                    var _a, _b, _c, _d;
                    if ((items === null || items === void 0 ? void 0 : items.length) > 0) {
                        let selectedLayerContents = {};
                        let currentLayerId = (_b = (_a = items[0]) === null || _a === void 0 ? void 0 : _a.layer) === null || _b === void 0 ? void 0 : _b.id;
                        if (checkedLayers.indexOf(currentLayerId) !== -1) {
                            selectedLayerContents["id"] = (_d = (_c = items[0]) === null || _c === void 0 ? void 0 : _c.layer) === null || _d === void 0 ? void 0 : _d.id;
                            selectedLayerContents["attributes"] = this.getAttributes(items);
                            newArray.push(selectedLayerContents);
                        }
                    }
                    return newArray;
                }, []);
            }
            return selectedLayersArray;
        };
        this.getAttributes = (items) => {
            const attributesArray = items.reduce((newArray, item) => {
                var _a, _b, _c, _d, _e, _f;
                if (item === null || item === void 0 ? void 0 : item.attributes) {
                    if (item.geometry) {
                        const geometry = item.geometry;
                        const latitude = (_a = geometry === null || geometry === void 0 ? void 0 : geometry.latitude) !== null && _a !== void 0 ? _a : (_c = (_b = geometry === null || geometry === void 0 ? void 0 : geometry.extent) === null || _b === void 0 ? void 0 : _b.center) === null || _c === void 0 ? void 0 : _c.latitude;
                        const longitude = (_d = geometry === null || geometry === void 0 ? void 0 : geometry.longitude) !== null && _d !== void 0 ? _d : (_f = (_e = geometry === null || geometry === void 0 ? void 0 : geometry.extent) === null || _e === void 0 ? void 0 : _e.center) === null || _f === void 0 ? void 0 : _f.longitude;
                        if (longitude && latitude) {
                            newArray.push(Object.assign(Object.assign({}, item.attributes), { location: [latitude, longitude] }));
                        }
                        else {
                            newArray.push(item.attributes);
                        }
                    }
                    else {
                        newArray.push(item.attributes);
                    }
                }
                return newArray;
            }, []);
            return attributesArray;
        };
        this.setNumberOfAttributes = (results, numberOfAttributes) => {
            var _a, _b, _c, _d;
            if (numberOfAttributes) {
                this.numberOfAttributes = numberOfAttributes;
                return;
            }
            const layersContents = this.getSelectedContentsLayer(results);
            console.log(layersContents, "check layers contents");
            let layerContentsObject = {};
            for (let i = 0; i < layersContents.length; i++) {
                layerContentsObject = Object.assign(Object.assign({}, layerContentsObject), { [(_a = layersContents[i]) === null || _a === void 0 ? void 0 : _a.id]: (_d = (_c = (_b = layersContents[i]) === null || _b === void 0 ? void 0 : _b.attributes) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0 });
            }
            this.numberOfAttributes = layerContentsObject;
        };
        this.setLayerOpen = (layerOpen) => {
            if (layerOpen) {
                this.layerOpen = layerOpen;
                return;
            }
            this.layerOpen = {
                geometry: null,
                typeSelected: "contains",
            };
        };
        this.getActiveView = () => AttributeTableConnector.activeView;
        this.getAllCheckedLayers = () => this.allCheckedLayers;
        this.dispatchingAll = () => {
            const self = AttributeTableConnector.self;
            const props = self.props;
            if (props && props.hasOwnProperty("dispatch")) {
                const numberOfAttributes = this.numberOfAttributes;
                const layerOpen = this.layerOpen;
                const allCheckedLayers = this.allCheckedLayers;
                const activeView = this.getActiveView();
                if (numberOfAttributes && layerOpen && allCheckedLayers && activeView) {
                    if (Object.keys(numberOfAttributes).length > 0) {
                        props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "createTable", true));
                        props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "numberOfAttribute", numberOfAttributes));
                        props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "layerOpen", layerOpen));
                        props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "getAllLayers", this.getAllCheckedLayers));
                        props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "getActiveView", this.getActiveView));
                        if (!this.isLayerChecked) {
                            props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "checkedLayers", this.checkedLayers));
                        }
                        return;
                    }
                    throw "noItemSelected";
                }
                if (!layerOpen)
                    throw "There is no layer open";
                if (allCheckedLayers)
                    throw "There is no all checked layers make sure to pass layer";
                if (activeView)
                    throw "There is no activeView,pass jimuMapView when map load";
                return;
            }
            throw "Pass parent widget to the AttributeConnector";
        };
        this.getProps = () => {
            const self = AttributeTableConnector.self;
            const props = self.props;
            const numberOfAttributes = this.numberOfAttributes;
            const layerOpen = this.layerOpen;
            const allCheckedLayers = this.allCheckedLayers;
            const activeView = this.getActiveView();
            if (props && props.hasOwnProperty("dispatch")) {
                if (!layerOpen)
                    throw "There is no layer open";
                if (!allCheckedLayers)
                    throw "There is no all checked layers make sure to pass layer";
                if (!activeView)
                    throw "There is no activeView,pass jimuMapView when map load";
                if (numberOfAttributes && Object.keys(numberOfAttributes)) {
                    return props;
                }
                return null;
            }
            throw "Pass parent widget to the AttributeConnector";
        };
        this.dispatchCreateTable = () => {
            const props = this.getProps();
            if (props) {
                props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "createTable", true));
            }
        };
        this.dispatchChechedLayers = (checkedLayers) => {
            const props = this.getProps();
            if (props) {
                props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "checkedLayers", checkedLayers));
                props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "createTable", true));
            }
        };
        this.dispatchFilterValue = (filterValue) => {
            const props = this.getProps();
            if (props) {
                props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "filterValue", filterValue));
                props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "createTable", true));
            }
        };
        AttributeTableConnector.activeView = activeView;
        AttributeTableConnector.self = self;
    }
    init(obj) {
        const results = obj.results;
        const allCheckedLayers = obj.allCheckedLayers;
        let createTable = true;
        let isLayerChecked = false;
        let checkedLayers = null;
        let numberOfAttributes = null;
        let layerOpen = null;
        console.log(results, "check results");
        if (obj.hasOwnProperty("createTable")) {
            createTable = obj.createTable;
        }
        if (obj.hasOwnProperty("isLayerChecked")) {
            isLayerChecked = obj.isLayerChecked;
        }
        if (obj.hasOwnProperty("checkedLayers")) {
            checkedLayers = obj.checkedLayers;
        }
        if (obj.hasOwnProperty("numberOfAttributes")) {
            numberOfAttributes = obj.numberOfAttributes;
        }
        if (obj.hasOwnProperty("layerOpen")) {
            layerOpen = obj.layerOpen;
        }
        this.createTable = createTable;
        this.isLayerChecked = isLayerChecked;
        this.setCheckedLayers(allCheckedLayers, checkedLayers);
        this.setAllCheckedLayers(allCheckedLayers);
        this.setNumberOfAttributes(results, numberOfAttributes);
        this.setLayerOpen(layerOpen);
    }
}
AttributeTableConnector.activeView = null;
AttributeTableConnector.self = null;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttributeTableConnector);


/***/ }),

/***/ "./your-extensions/widgets/query-builder/src/runtime/components/Table.tsx":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/runtime/components/Table.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-icons/outlined/application/setting */ "./jimu-icons/outlined/application/setting.tsx");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/editor/close */ "./jimu-icons/outlined/editor/close.tsx");
/* harmony import */ var _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/queryTableValue */ "./your-extensions/widgets/query-builder/src/runtime/utils/queryTableValue.js");





// import {useState} from 'react'
function Table(props) {
    const { list, handleThirdQuery, textInputHandler, multiSelectHandler, dropdownItemHandler, textFirstIncludedHandler, textSecondIncludedHandler, dropdownValueQuery, handleCheckBox, isChecked, counterIsChecked, dropDownToggler, functionCounterIsChecked, checkedToQuery, deleteTable, tablesId, getQueryAttribute, whereClauses, tables, getQuery, univocoSelectHandler, dropDown, isOpenDropD, onChangeCheckBox, openDrop, closeDrop, opened, autOpen, mouseleave, onmouseLeave, } = props;
    return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "my-1" }, list.fields ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "d-flex flex-column" },
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "row m-0" },
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "row w-100 d-flex justify-content-end" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Button, { className: "mb-2 col-1 self-end", onClick: deleteTable, icon: true },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_3__.CloseOutlined, null))),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { className: "col-md-4 mb-2", onChange: getQueryAttribute, placeholder: "Seleziona campo" }, list.fields.map((el, i) => {
                if (el.type === "oid" ||
                    el.type === "small-integer" ||
                    el.type === "integer" ||
                    el.type === "string" ||
                    el.type === "double") {
                    return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesId, value: i, name: el.name, dataType: el.type },
                        el.alias,
                        " (",
                        el.type,
                        ")"));
                }
            })),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "col-md-4 mb-2" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { onChange: getQuery, placeholder: "Seleziona campo" }, whereClauses[tablesId] &&
                    whereClauses[tablesId].attributeQueryType === "string"
                    ? _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_4__.queryConstructorString.map((o, i) => {
                        return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesId, value: i, name: o.value }, o.name));
                    })
                    : _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_4__.queryConstructorNumber.map((o, i) => {
                        return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesId, value: i, name: o.value }, o.name));
                    }))),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(SecondConstructor, { className: "col-md-4", handleThirdQuery: handleThirdQuery, textInputHandler: textInputHandler, multiSelectHandler: multiSelectHandler, dropdownItemHandler: dropdownItemHandler, textFirstIncludedHandler: textFirstIncludedHandler, textSecondIncludedHandler: textSecondIncludedHandler, dropdownValueQuery: dropdownValueQuery, handleCheckBox: handleCheckBox, isChecked: isChecked, counterIsChecked: counterIsChecked, functionCounterIsChecked: functionCounterIsChecked, checkedToQuery: checkedToQuery, getQueryAttribute: getQueryAttribute, whereClauses: whereClauses, tablesId: tablesId, dropDownToggler: dropDownToggler, univocoSelectHandler: univocoSelectHandler, dropDown: dropDown, isOpenDropD: isOpenDropD, onChangeCheckBox: onChangeCheckBox, openDrop: openDrop, closeDrop: closeDrop, opened: opened, autOpen: autOpen, mouseleave: mouseleave, onmouseLeave: onmouseLeave })))) : ("")));
}
const Switch = (props) => {
    const { queryValues, children } = props;
    // filter out only children with a matching prop
    return children.find((child) => {
        return child.props.value === queryValues;
    });
};
const SecondConstructor = (props) => {
    const { textInputHandler, dropdownItemHandler, textFirstIncludedHandler, textSecondIncludedHandler, counterIsChecked, functionCounterIsChecked, tablesId, whereClauses, dropDownToggler, univocoSelectHandler, dropDown, isOpenDropD, onChangeCheckBox, openDrop, closeDrop, opened: d, autOpen, onmouseLeave, } = props;
    const normalizedThirdQuery = [];
    let defaultValue = "=";
    let dropdownValueQuery = "valore";
    let opened = false;
    let checked = 0;
    let au = true;
    // valueThirdQuery.map((el, i) => { normalizedThirdQuery.push({ label: el.label[0].toString(), value: el.value[0].toString() }) })
    if (whereClauses[tablesId] && whereClauses[tablesId].ifInOrNotInQueryValue) {
        whereClauses[tablesId].ifInOrNotInQueryValue.map((el, i) => {
            normalizedThirdQuery.push({
                id: tablesId.toString(),
                label: el.label[0].toString(),
                value: el.value[0].toString(),
                listel: whereClauses[tablesId].checkedList,
            });
        });
    }
    if (whereClauses[tablesId] && whereClauses[tablesId].queryValue) {
        defaultValue = whereClauses[tablesId].queryValue;
    }
    if (whereClauses[tablesId] && whereClauses[tablesId].dropdownValueQuery) {
        dropdownValueQuery = whereClauses[tablesId].dropdownValueQuery;
    }
    if (whereClauses[tablesId] && whereClauses[tablesId].isOpen) {
        // opened = whereClauses[tablesId].isOpen;
    }
    if (whereClauses[tablesId] && whereClauses[tablesId].checkedList) {
        checked = whereClauses[tablesId].checkedList.length;
    }
    const test = (props) => { };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(Switch, { queryValues: defaultValue },
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "=", className: "d-flex col-md-4" },
            dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { onChange: univocoSelectHandler, placeholder: "Seleziona il Layer" }, normalizedThirdQuery.map((el, i) => {
                return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesId }, el.label));
            }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: dropdownItemHandler, "data-table-id": tablesId }, "Valore"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: dropdownItemHandler, disabled: true, "data-table-id": tablesId }, "Campo"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: dropdownItemHandler, "data-table-id": tablesId }, "Univoci"))))),
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "<>", className: "d-flex col-md-4" },
            dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { onChange: univocoSelectHandler, placeholder: "Seleziona il Layer" }, normalizedThirdQuery.map((el, i) => {
                return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesId }, el.label));
            }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: dropdownItemHandler, "data-table-id": tablesId }, "Valore"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: dropdownItemHandler, disabled: true, "data-table-id": tablesId }, "Campo"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: dropdownItemHandler, "data-table-id": tablesId }, "Univoci"))))),
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "IN", onMouseLeave: () => onmouseLeave() },
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "w-100" }, jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true, isOpen: autOpen, toggle: () => dropDown },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, { onClick: () => openDrop() },
                    checked,
                    " elementi selezionati"),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Multi selezione attiva"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                    normalizedThirdQuery.map((el, i) => {
                        return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: i, "data-table-id": tablesId, className: "d-flex justify-content-start", strategy: "fixed" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Input, { onChange: onChangeCheckBox, type: "checkbox", id: tablesId, name: el.label, value: el.label, defaultChecked: el.listel &&
                                        el.listel.filter(function (e) {
                                            return e.checkValue === el.label;
                                        }).length > 0 }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("label", { htmlFor: tablesId, className: "ml-3 mb-0", id: tablesId },
                                    " ",
                                    el.label))));
                    }))))),
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "NOT_IN", className: "d-flex justify-content-between" },
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "w-100" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.MultiSelect, { displayByValues: function myFunction(e) {
                        return `${counterIsChecked.length} elementi selezionati`;
                    }, items: normalizedThirdQuery, onClickItem: functionCounterIsChecked, onClick: test, placeholder: "0 elementi selezionati", id: tablesId }))),
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "<=", className: "d-flex  col-md-4" },
            dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { placeholder: "Seleziona il Layer" }, normalizedThirdQuery.map((el, i) => {
                return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesId }, el.label));
            }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: dropdownItemHandler, "data-table-id": tablesId }, "Valore"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: dropdownItemHandler, disabled: true, "data-table-id": tablesId }, "Campo"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: dropdownItemHandler, "data-table-id": tablesId }, "Univoci"))))),
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: ">=", className: "d-flex col-md-4" },
            dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { placeholder: "Seleziona il Layer" }, normalizedThirdQuery.map((el, i) => {
                return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesId }, el.label));
            }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: dropdownItemHandler, "data-table-id": tablesId }, "Valore"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: dropdownItemHandler, disabled: true, "data-table-id": tablesId }, "Campo"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: dropdownItemHandler, "data-table-id": tablesId }, "Univoci"))))),
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "<", className: "d-flex col-md-4" },
            dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { placeholder: "Seleziona il Layer" }, normalizedThirdQuery.map((el, i) => {
                return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesId }, el.label));
            }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: dropdownItemHandler, "data-table-id": tablesId }, "Valore"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: dropdownItemHandler, disabled: true, "data-table-id": tablesId }, "Campo"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: dropdownItemHandler, "data-table-id": tablesId }, "Univoci"))))),
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: ">", className: "d-flex col-md-4" },
            dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { placeholder: "Seleziona il Layer" }, normalizedThirdQuery.map((el, i) => {
                return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesId }, el.label));
            }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: dropdownItemHandler, "data-table-id": tablesId }, "Valore"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: dropdownItemHandler, disabled: true, "data-table-id": tablesId }, "Campo"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: dropdownItemHandler, "data-table-id": tablesId }, "Univoci"))))),
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "is null" }),
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "is not null" }),
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "included", className: "d-flex col-md-4" },
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "row d-flex justify-content-between" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textFirstIncludedHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: "w-100", "data-table-id": tablesId }),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("p", { className: "col-md-2 text-center" }, "e"),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textSecondIncludedHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: "w-100", "data-table-id": tablesId }))),
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "is_not_included", className: "d-flex col-md-4" },
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "row d-flex justify-content-between" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textFirstIncludedHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: "w-100", "data-table-id": tablesId }),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("p", { className: "col-md-2 text-center" }, "e"),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textSecondIncludedHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: "w-100", "data-table-id": tablesId }))),
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "LIKE%", className: "d-flex col-md-4" },
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "%LIKE", className: "d-flex col-md-4" },
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "LIKE%", className: "d-flex col-md-4" },
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "%LIKE%", className: "d-flex col-md-4" },
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "NOT LIKE", className: "d-flex col-md-4" },
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);


/***/ }),

/***/ "./your-extensions/widgets/query-builder/src/runtime/translations/default.ts":
/*!***********************************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/runtime/translations/default.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**

 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Costruttore Query',
    selectGeometry: "Selezionare la geometria",
    layers: "Strati",
    zoomA: "Zoom A",
    exportCsv: "Esportazione in file csv",
    exportJson: "Esportazione in una raccolta di funzioni",
    statistics: "Statistiche",
    createLayer: "Creare il livello",
    attributeTable: "Vista nella tabella degli attributi",
    delete: "Cancellare",
    countOfItems: "Conteggio degli articoli",
    sumOfValues: "Somma dei valori",
    minimum: "Minimo",
    maximum: "Massimo",
    average: "Media",
    selectByPoint: "Selezione per punto",
    selectionByLine: "Selezione per linea",
    selectionByPolygon: "Selezione per poligono",
    selectionByRectangular: "Selezione per rettangolo",
    selectionByCircle: "Selezione per cerchio",
    refresh: "Aggiornare",
    ok: "OK",
    cancel: "Annullamento",
    fields: "Campi",
    selectionAction: "Selezione Azione",
    mapLoading: "In attesa del caricamento della mappa...",
    noSelectedItem: "Non è stata selezionata alcuna voce"
});


/***/ }),

/***/ "./your-extensions/widgets/query-builder/src/runtime/utils/queryTableValue.js":
/*!************************************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/runtime/utils/queryTableValue.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryConstructorNumber": () => (/* binding */ queryConstructorNumber),
/* harmony export */   "queryConstructorString": () => (/* binding */ queryConstructorString)
/* harmony export */ });
const  queryConstructorNumber = [
    { name: 'è', value: '=' },
    { name: 'non è', value: '<>' },
    { name: 'è uno di', value: 'IN' }, // OBJECTID IN (1,2,3)
    { name: 'non è nessuno di', value: 'NOT_IN' }, //   OBJECTID NOT_IN (1,2,3)
    { name: 'è almeno', value: '<=' },
    { name: 'è al massimo', value: '>=' },
    { name: 'è minore di', value: '<' },
    { name: 'è maggiore di', value: '>' },
    { name: 'è vuoto', value: 'is null' },
    { name: 'non è vuoto', value: 'is not null' },
    { name: 'è compreso tra', value: 'included' }, // OBJECTID < 2 AND OBJECTID > 4
    { name: 'non è compreso tra', value: 'is_not_included' } //da trovare
];
const   queryConstructorString = [
    { name: 'è', value: '=' },
    { name: 'non è', value: '<>' },
    { name: 'è uno di', value: 'IN' },
    { name: 'non è nessuno di', value: 'NOT_IN' },
    { name: 'inizia con', value: 'LIKE%' },
    { name: 'termina con', value: '%LIKE' },
    { name: 'contiene', value: '%LIKE%' },
    { name: 'non contiene', value: 'NOT LIKE' },
    { name: 'è vuoto', value: 'is null' },
    { name: 'non è vuoto', value: 'is not null' }
];


/***/ }),

/***/ "esri/geometry/Polygon":
/*!****************************************!*\
  !*** external "esri/geometry/Polygon" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__;

/***/ }),

/***/ "esri/layers/GraphicsLayer":
/*!********************************************!*\
  !*** external "esri/layers/GraphicsLayer" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__;

/***/ }),

/***/ "esri/rest/support/Query":
/*!******************************************!*\
  !*** external "esri/rest/support/Query" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/runtime/widget.tsx ***!
  \**********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.css */ "./your-extensions/widgets/query-builder/src/style.css");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/query-builder/src/runtime/translations/default.ts");
/* harmony import */ var esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri/rest/support/Query */ "esri/rest/support/Query");
/* harmony import */ var esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esri/layers/GraphicsLayer */ "esri/layers/GraphicsLayer");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Table */ "./your-extensions/widgets/query-builder/src/runtime/components/Table.tsx");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../connector */ "./your-extensions/widgets/query-builder/src/connector.ts");
/* harmony import */ var esri_geometry_Polygon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! esri/geometry/Polygon */ "esri/geometry/Polygon");
/* harmony import */ var _connector_connector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../connector/connector */ "./your-extensions/widgets/query-builder/src/connector/connector.ts");
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
        this.graphicLayerFound = new esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_6__["default"]({ listMode: "hide", visible: true });
        this.graphicLayerSelected = new esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_6__["default"]({ listMode: "hide", visible: true });
        this.nls = (id) => {
            return this.props.intl
                ? this.props.intl.formatMessage({
                    id: id,
                    defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"][id],
                })
                : id;
        };
        this.addTable = () => {
            this.setState({
                tables: [...this.state.tables, { id: this.state.tableCounter }],
                tableCounter: this.state.tableCounter + 1,
            });
        };
        this.addTwoTable = () => {
            this.setState({
                tables: [
                    ...this.state.tables,
                    { id: this.state.tableCounter },
                    { id: this.state.tableCounter },
                ],
                tableCounter: this.state.tableCounter + 1,
            });
        };
        this.deleteTable = (id) => {
            const newTables = this.state.tables.filter((el) => {
                return el.id !== id;
            });
            const deletedWhereClauses = this.state.whereClauses.filter((el) => {
                return el.id !== id.toString();
            });
            this.setState({
                tables: [...newTables],
                whereClauses: deletedWhereClauses,
            });
            if (this.state.tables.length === 0) {
                this.setState({
                    whereClauses: [],
                });
            }
        };
        this.textInputHandler = (e) => {
            let txt = e.target.value;
            let currentTableId = e.target.attributes[0].value;
            this.queryTextConstructor(txt, currentTableId);
        };
        this.textFirstIncludedHandler = (e) => {
            let txt = e.target.value;
            let currentTableId = e.target.attributes[0].value;
            let input = "first";
            this.queryTextIncludedConstructor(txt, currentTableId, input);
        };
        this.textSecondIncludedHandler = (e) => {
            let txt = e.target.value;
            let currentTableId = e.target.attributes[0].value;
            let input = "second";
            this.queryTextIncludedConstructor(txt, currentTableId, input);
        };
        this.univocoSelectHandler = (e) => {
            let txt = e.currentTarget.textContent;
            let currentTableId = e.currentTarget.attributes[2].value;
            this.queryTextConstructor(txt, currentTableId);
        };
        this.containsAnyLetters = (str) => {
            return /[a-zA-Z]/.test(str);
        };
        this.queryTextConstructor = (txt, currentTableId) => {
            let queryIndex;
            if (this.state.whereClauses.length) {
                queryIndex = this.state.whereClauses
                    .map((obj) => obj.id)
                    .indexOf(currentTableId);
                if (queryIndex !== -1) {
                    const updateState = this.state.whereClauses.map((obj) => {
                        if (obj.id === queryIndex.toString()) {
                            obj = Object.assign(Object.assign({}, obj), { value: { txt: txt } });
                            // return this.state.whereClauses[queryIndex] = obj
                            let filteredWhereClauses = this.state.whereClauses.filter((a) => a.id !== obj.id);
                            filteredWhereClauses.push(obj);
                            filteredWhereClauses.sort(function (a, b) {
                                return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                            });
                            return this.setState({
                                whereClauses: filteredWhereClauses,
                            });
                        }
                        return { obj };
                    });
                }
            }
        };
        this.queryTextIncludedConstructor = (txt, currentTableId, input) => {
            let queryIndex;
            if (this.state.whereClauses.length) {
                queryIndex = this.state.whereClauses
                    .map((obj) => obj.id)
                    .indexOf(currentTableId);
                if (queryIndex !== -1) {
                    const updateState = this.state.whereClauses.map((obj) => {
                        if (obj.id === queryIndex.toString()) {
                            input === "first"
                                ? (obj = Object.assign(Object.assign({}, obj), { firstTxt: { value: txt } }))
                                : (obj = Object.assign(Object.assign({}, obj), { secondTxt: { value: txt } }));
                            // return this.state.whereClauses[queryIndex] = obj
                            let filteredWhereClauses = this.state.whereClauses.filter((a) => a.id !== obj.id);
                            filteredWhereClauses.push(obj);
                            filteredWhereClauses.sort(function (a, b) {
                                return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                            });
                            return this.setState({
                                whereClauses: filteredWhereClauses,
                            });
                        }
                        return { obj };
                    });
                }
            }
        };
        this.dropdownItemClick = (e) => {
            let clickedQueryTableId = e.currentTarget.attributes[2].value;
            let clickedValue = e.currentTarget.value;
            let currentClickedQueryAttribute;
            let queryIndex;
            queryIndex = this.state.whereClauses
                .map((obj) => obj.id)
                .indexOf(clickedQueryTableId);
            if (queryIndex !== -1) {
                const updateState = this.state.whereClauses.map((obj) => {
                    if (obj.id === queryIndex.toString()) {
                        obj = Object.assign(Object.assign({}, obj), { dropdownValueQuery: clickedValue });
                        // return this.state.whereClauses[queryIndex] = obj
                        let filteredWhereClauses = this.state.whereClauses.filter((a) => a.id !== obj.id);
                        filteredWhereClauses.push(obj);
                        filteredWhereClauses.sort(function (a, b) {
                            return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                        });
                        return this.setState({
                            whereClauses: filteredWhereClauses,
                        });
                    }
                    return { obj };
                });
            }
            if (e.currentTarget.value === "univoco") {
                if (queryIndex !== -1) {
                    const updateState = this.state.whereClauses.map((obj) => {
                        if (obj.id === queryIndex.toString()) {
                            currentClickedQueryAttribute = obj.attributeQuery;
                            if (this.state.jimuMapView) {
                                this.state.jimuMapView.view.map.allLayers.forEach((f, index) => {
                                    if (f.title === this.state.currentTargetText) {
                                        this.state.jimuMapView.view
                                            .whenLayerView(f)
                                            .then((layerView) => {
                                            const query = new esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_5__["default"]();
                                            query.where = `${currentClickedQueryAttribute} is not null`;
                                            query.outFields = [`${currentClickedQueryAttribute}`];
                                            layerView.filter = {
                                                where: query.where,
                                            };
                                            const results = f.queryFeatures(query);
                                            results.then((result) => {
                                                const detailThirdQuery = [];
                                                result.features.forEach((el) => {
                                                    detailThirdQuery.push({
                                                        value: Object.values(el.attributes),
                                                        label: Object.values(el.attributes),
                                                    });
                                                });
                                                if (queryIndex !== -1) {
                                                    const updateState = this.state.whereClauses.map((obj) => {
                                                        if (obj.id === queryIndex.toString()) {
                                                            obj = Object.assign(Object.assign({}, obj), { ifInOrNotInQueryValue: detailThirdQuery, dropdownValueQuery: clickedValue });
                                                            // return this.state.whereClauses[queryIndex] = obj
                                                            let filteredWhereClauses = this.state.whereClauses.filter((a) => a.id !== obj.id);
                                                            filteredWhereClauses.push(obj);
                                                            filteredWhereClauses.sort(function (a, b) {
                                                                return a.id < b.id
                                                                    ? -1
                                                                    : a.id == b.id
                                                                        ? 0
                                                                        : 1;
                                                            });
                                                            return this.setState({
                                                                whereClauses: filteredWhereClauses,
                                                            });
                                                        }
                                                        return { obj };
                                                    });
                                                }
                                            });
                                        });
                                    }
                                });
                            }
                        }
                    });
                }
            }
            this.setState({
                dropdownValueQuery: e.target.value,
            });
        };
        this.dropDown = (id) => {
            // e.preventDefault()
            // e.stopPropagation()
            this.setState({ autOpen: true });
            let queryIndex;
            queryIndex = this.state.whereClauses
                .map((obj) => obj.id)
                .indexOf(id.toString());
            if (queryIndex !== -1) {
                const updateState = this.state.whereClauses.map((obj) => {
                    if (obj.id === queryIndex.toString()) {
                        if (!obj.isOpen) {
                            obj = Object.assign(Object.assign({}, obj), { isOpen: true });
                            let filteredWhereClauses = this.state.whereClauses.filter((a) => a.id !== obj.id);
                            filteredWhereClauses.push(obj);
                            filteredWhereClauses.sort(function (a, b) {
                                return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                            });
                            return this.setState({
                                whereClauses: filteredWhereClauses,
                            });
                        }
                        else {
                            obj = Object.assign(Object.assign({}, obj), { isOpen: false });
                            let filteredWhereClauses = this.state.whereClauses.filter((a) => a.id !== obj.id);
                            filteredWhereClauses.push(obj);
                            filteredWhereClauses.sort(function (a, b) {
                                return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                            });
                            return this.setState({
                                whereClauses: filteredWhereClauses,
                            });
                        }
                        // return this.state.whereClauses[queryIndex] = obj
                    }
                    return { obj };
                });
            }
        };
        this.handleCheckBox = (event) => {
            this.setState({
                isChecked: event.target.checked,
            });
        };
        this.onChangeCheckBox = (event) => {
            let currentId = event.target.attributes.id.value;
            let queryIndex;
            if (event.target.checked) {
                queryIndex = this.state.whereClauses
                    .map((obj) => obj.id)
                    .indexOf(currentId);
                if (queryIndex !== -1) {
                    this.state.whereClauses.map((obj) => {
                        if (obj.id === queryIndex.toString()) {
                            if (!obj.checkedList) {
                                obj = Object.assign(Object.assign({}, obj), { checkedList: [
                                        {
                                            checkValue: event.target.attributes.name.value,
                                            isChecked: true,
                                        },
                                    ] });
                                let filteredWhereClauses = this.state.whereClauses.filter((a) => a.id !== obj.id);
                                filteredWhereClauses.push(obj);
                                this.setState({
                                    whereClauses: filteredWhereClauses,
                                }, () => {
                                    this.state.whereClauses.sort(function (a, b) {
                                        return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                                    });
                                    // Remove duplicate entries from the whereClauses array
                                    this.setState({
                                        whereClauses: Array.from(new Set(this.state.whereClauses)),
                                    });
                                });
                            }
                            else {
                                const ifAlreadyCheck = obj.checkedList
                                    .map((obj) => obj.checkValue)
                                    .indexOf(event.target.attributes.name.value);
                                if (ifAlreadyCheck == -1) {
                                    // console.log("non è presente il valore tra i checked");
                                    obj = Object.assign(Object.assign({}, obj), { checkedList: [
                                            ...obj.checkedList,
                                            {
                                                checkValue: event.target.attributes.name.value,
                                                isChecked: true,
                                            },
                                        ] });
                                    // Find the index of the obj object in the whereClauses array
                                    const index = this.state.whereClauses.findIndex((a) => a.id === obj.id);
                                    // Remove the obj object from the whereClauses array
                                    this.state.whereClauses.splice(index, 1);
                                    // Add the updated obj object to the whereClauses array
                                    this.state.whereClauses.push(obj);
                                    this.setState({
                                        whereClauses: this.state.whereClauses,
                                    }, () => {
                                        this.state.whereClauses.sort(function (a, b) {
                                            return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                                        });
                                        // Remove duplicate entries from the whereClauses array
                                        this.setState({
                                            whereClauses: Array.from(new Set(this.state.whereClauses)),
                                        });
                                    });
                                }
                                else {
                                    // console.log(
                                    //   "è già presente tra i valori quindi non aggiunto alla lista"
                                    // );
                                }
                            }
                        }
                        return { obj };
                    });
                }
            }
            if (event.target.checked === false) {
                // Find the obj object in the whereClauses array
                const obj = this.state.whereClauses.find((a) => a.id === currentId);
                // Remove the checkValue from the checkedList array
                obj.checkedList = obj.checkedList.filter((a) => a.checkValue !== event.target.attributes.name.value);
                // Update the obj object in the whereClauses array
                const index = this.state.whereClauses.findIndex((a) => a.id === currentId);
                this.state.whereClauses[index] = obj;
                this.setState({
                    whereClauses: this.state.whereClauses,
                }, () => {
                    this.state.whereClauses.sort(function (a, b) {
                        return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                    });
                    // Remove duplicate entries from the whereClauses array
                    this.setState({
                        whereClauses: Array.from(new Set(this.state.whereClauses)),
                    });
                });
            }
        };
        this.queryConstructor = (layerView, firstQuery, queryRequest, secondQueryTarget, AndOr, connector) => {
            const query = new esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_5__["default"]();
            switch (queryRequest) {
                case "LIKE%":
                    query.where = `${firstQuery} LIKE '${secondQueryTarget}%'`;
                    query.outFields = [`${firstQuery}`];
                    layerView.filter = {
                        where: query.where,
                    };
                    // f.visible = true;
                    // console.log(`${firstQuery} LIKE '${secondQueryTarget}%'`);
                    layerView.visible = true;
                    break;
                case "%LIKE":
                    query.where = `${firstQuery} LIKE '%${secondQueryTarget}'`;
                    query.outFields = [`${firstQuery}`];
                    layerView.filter = {
                        where: query.where,
                    };
                    // f.visible = true;
                    // console.log(`${firstQuery} LIKE '%${secondQueryTarget}'`);
                    layerView.visible = true;
                    break;
                case "%LIKE%":
                    query.where = `${firstQuery} LIKE '%${secondQueryTarget}%'`;
                    query.outFields = [`${firstQuery}`];
                    layerView.filter = {
                        where: query.where,
                    };
                    // f.visible = true;
                    // console.log(`${firstQuery} LIKE '%${secondQueryTarget}'`);
                    layerView.visible = true;
                    break;
                case "NOT LIKE":
                    query.where = `${firstQuery} NOT LIKE '%${secondQueryTarget}%'`;
                    query.outFields = [`${firstQuery}`];
                    layerView.filter = {
                        where: query.where,
                    };
                    // f.visible = true;
                    // console.log(`${firstQuery} NOT LIKE '%${secondQueryTarget}%'`);
                    layerView.visible = true;
                    break;
                case "is null":
                    query.where = `${firstQuery} is null`;
                    query.outFields = [`${firstQuery}`];
                    layerView.filter = {
                        where: query.where,
                    };
                    // f.visible = true;
                    // console.log(`${firstQuery} is null`);
                    layerView.visible = true;
                    break;
                case "is not null":
                    query.where = `${firstQuery} is not null`;
                    query.outFields = [`${firstQuery}`];
                    layerView.filter = {
                        where: query.where,
                    };
                    // f.visible = true;
                    // console.log(`${firstQuery} is not null`);
                    layerView.visible = true;
                    break;
                case "IN":
                    if (this.containsAnyLetters(secondQueryTarget)) {
                        query.where = `${firstQuery} IN (${"'" + secondQueryTarget.join("', '") + "'"})`;
                        query.outFields = [`${firstQuery}`];
                        layerView.filter = {
                            where: query.where,
                        };
                    }
                    else {
                        query.where = `${firstQuery} IN (${secondQueryTarget.join(",")})`;
                        query.outFields = [`${firstQuery}`];
                        layerView.filter = {
                            where: query.where,
                        };
                        // f.visible = true;
                        // console.log(`${firstQuery} IN (${secondQueryTarget.join(",")})`);
                        layerView.visible = true;
                        layerView.queryFeatures(query).then(function (results) {
                            let checkedLayer_ = [layerView.layer.id];
                            const selectedLayersContents = connector.getSelectedContentsLayer([results.features], checkedLayer_);
                            const numberOfAttributes = connector.getNumberOfAttributes(selectedLayersContents);
                            const obj = {
                                results: results,
                                allCheckedLayers: Widget.activeV.view.map.allLayers.items
                            };
                            Widget.connector.init(obj);
                            Widget.connector.dispatchingAll();
                            // console.log(results,"check results")
                            // dispatch ........................
                            // this.connector_function({checkedLayer_,selectedLayersContents,numberOfAttributes,results:[results.features],layer:layerView.layer});
                        });
                    }
                    break;
                case "NOT_IN":
                    query.where = `NOT  ${firstQuery} IN (${secondQueryTarget.join(",")})`;
                    query.outFields = [`${firstQuery}`];
                    layerView.filter = {
                        where: query.where,
                    };
                    // f.visible = true;
                    // console.log(`NOT ${firstQuery} IN (${secondQueryTarget.join(",")})`);
                    layerView.visible = true;
                    break;
                case "included":
                    query.where = `${firstQuery} > ${secondQueryTarget.firstTxt} AND ${firstQuery} < ${secondQueryTarget.secondTxt}`;
                    query.outFields = [`${firstQuery}`];
                    layerView.filter = {
                        where: query.where,
                    };
                    // // f.visible = true;
                    // console.log(
                    //   `${firstQuery} > ${secondQueryTarget.firstTxt} AND ${firstQuery} < ${secondQueryTarget.secondTxt}`
                    // );
                    layerView.visible = true;
                    break;
                case "is_not_included":
                    query.where = `${firstQuery} < ${secondQueryTarget.firstTxt} OR ${firstQuery} > ${secondQueryTarget.secondTxt}`;
                    query.outFields = [`${firstQuery}`];
                    layerView.filter = {
                        where: query.where,
                    };
                    // // f.visible = true;
                    // console.log(
                    //   `${firstQuery} < ${secondQueryTarget.firstTxt} OR ${firstQuery} > ${secondQueryTarget.secondTxt}`
                    // );
                    layerView.visible = true;
                    break;
                default:
                    if (this.containsAnyLetters(secondQueryTarget)) {
                        query.where = `${firstQuery} ${queryRequest} '${secondQueryTarget}'`;
                        query.outFields = [`${firstQuery}`];
                        layerView.filter = {
                            where: query.where,
                        };
                        // f.visible = true;
                        // console.log(`${firstQuery} ${queryRequest} '${secondQueryTarget}'`);
                        layerView.visible = true;
                    }
                    else {
                        query.where = `${firstQuery} ${queryRequest} ${secondQueryTarget}`;
                        query.outFields = [`${firstQuery}`];
                        layerView.filter = {
                            where: query.where,
                        };
                        // f.visible = true;
                        // console.log(`${firstQuery} ${queryRequest} ${secondQueryTarget}`);
                        layerView.visible = true;
                    }
            }
        };
        this.chooseAndOr = (e) => {
            this.setState({
                AndOr: e.target.value,
            }, () => console.log(this.state.AndOr));
        };
        this.openDrop = () => {
            if (this.state.autOpen) {
                this.setState({
                    autOpen: false,
                });
            }
            else {
                this.setState({
                    autOpen: true,
                    mouseleave: false,
                });
            }
        };
        this.closeDrop = () => {
            this.setState({
                opened: false,
                autOpen: false,
            });
            // this.autOpen=false;
        };
        this.closeDropOnclickOutside = () => {
            if (this.state.autOpen && this.state.mouseleave) {
                this.setState({
                    autOpen: false,
                });
            }
        };
        this.onmouseLeave = () => {
            if (this.state.autOpen) {
                this.setState({
                    mouseleave: true,
                });
            }
        };
        // methods for attribute table
        this.getAllCheckedLayers = () => {
            var _a;
            const activeView = Widget.activeV;
            const allMapLayers = (_a = activeView.view.map.allLayers) === null || _a === void 0 ? void 0 : _a.items;
            const checkedLayers = this.state.checkedLayer_;
            let newMapLayer = [];
            if ((allMapLayers === null || allMapLayers === void 0 ? void 0 : allMapLayers.length) > 0 && checkedLayers.length > 0) {
                newMapLayer = allMapLayers.reduce((newArray, item) => {
                    if (checkedLayers.includes(item.id)) {
                        newArray.push(item);
                    }
                    return newArray;
                }, []);
            }
            return newMapLayer;
        };
        this.getActiveView = () => {
            const activeView = Widget.activeV;
            return activeView;
        };
        this.getAllJimuLayerViews = () => {
            const jimuLayerViews = Widget.jimuLayerViewz;
            return jimuLayerViews;
        };
        // conector
        this.connector_function = (data) => {
            let activeV = this.state.jimuMapView;
            this.setState({ layerContents: data.selectedLayersContents });
            this.setState({ checkedLayer_: data.checkedLayer_ });
            const geometry = esri_geometry_Polygon__WEBPACK_IMPORTED_MODULE_9__["default"].fromExtent(activeV.view.extent).toJSON();
            const layerOpen = {
                geometry: geometry,
                typeSelected: "contains",
            };
            this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "createTable", true));
            if (Object.keys(data.numberOfAttributes).length > 0) {
                this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "createTable", true));
                this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "numberOfAttribute", data.numberOfAttributes));
                this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "layerOpen", layerOpen));
                this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "getAllLayers", this.getAllCheckedLayers));
                this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "getActiveView", this.getActiveView));
                this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "getAllJimuLayerViews", this.getAllJimuLayerViews));
            }
            else {
                this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "showAlert", true));
            }
        };
        this.state = {
            jimuMapView: null,
            layerContents: [],
            checkedLayer_: [],
            resultLayerList: [],
            isLayerSelected: false,
            resultsLayerSelected: [],
            currentTargetText: null,
            geometry: null,
            typeSelected: null,
            listServices: [],
            currentFirstQuery: "",
            currentFirstQueryType: null,
            dropdownValueQuery: "valore",
            firstTextIncludedHandler: "0",
            secondTextIncludedHandler: "0",
            tables: [],
            isChecked: false,
            counterIsChecked: [],
            checkedToQuery: [],
            tableCounter: 0,
            whereClauses: [],
            tablesId: null,
            isOpen: false,
            AndOr: "AND",
            opened: false,
            autOpen: true,
            mouseleave: false,
        };
        this.activeViewChangeHandler = this.activeViewChangeHandler.bind(this);
        //Layer
        this.onChangeSelectLayer = this.onChangeSelectLayer.bind(this);
        this.getQueryAttribute = this.getQueryAttribute.bind(this);
        this.getQuery = this.getQuery.bind(this);
        this.sendQuery = this.sendQuery.bind(this);
        this.thirdQuery = this.thirdQuery.bind(this);
        this.dropdownItemClick = this.dropdownItemClick.bind(this);
        this.chooseAndOr = this.chooseAndOr.bind(this);
        this.closeDrop = this.closeDrop.bind(this);
        this.openDrop = this.openDrop.bind(this);
        this.closeDropOnclickOutside = this.closeDropOnclickOutside.bind(this);
        this.onmouseLeave = this.onmouseLeave.bind(this);
        this.getAllCheckedLayers = this.getAllCheckedLayers.bind(this);
        this.getAllJimuLayerViews = this.getAllJimuLayerViews.bind(this);
        this.connector_function = this.connector_function.bind(this);
    }
    activeViewChangeHandler(jmv) {
        if (jmv) {
            jmv.view.map.add(this.graphicLayerFound);
            jmv.view.map.add(this.graphicLayerSelected);
            const resultLayerList = [];
            jmv.view.map.allLayers.forEach((f, index) => {
                if (f.type === "feature") {
                    jmv.view.whenLayerView(f).then((layerView) => {
                        const query = new esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_5__["default"]();
                        query.where = "1=1";
                        query.outFields = ["*"];
                        layerView.filter = {
                            where: query.where,
                        };
                        f.visible = false;
                        layerView.visible = false;
                    });
                    resultLayerList.push({
                        element: f,
                        label: f.title,
                        value: index,
                        layerID: f.layerId,
                        urlServiceServer: f.url,
                    });
                }
            });
            Widget.activeV = jmv;
            Widget.jimuLayerViewz = jmv === null || jmv === void 0 ? void 0 : jmv.jimuLayerViews;
            Widget.connector = new _connector_connector__WEBPACK_IMPORTED_MODULE_10__["default"](jmv, this);
            this.setState({
                resultLayerList: resultLayerList,
                jimuMapView: jmv,
            });
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.isLayerSelected !== prevProps.isLayerSelected) {
            // console.log("è stato selezionato un layer");
        }
        if (this.state.whereClauses !== prevProps.whereClauses) {
            // this.setState({whereClauses: this.state.whereClauses})
        }
        if (prevProps.state == "CLOSED") {
            this.setState({
                isLayerSelected: false,
                currentTargetText: null,
                geometry: null,
                typeSelected: null,
                listServices: [],
                currentFirstQuery: "",
                currentFirstQueryType: null,
                dropdownValueQuery: "valore",
                firstTextIncludedHandler: "0",
                secondTextIncludedHandler: "0",
                tables: [],
                isChecked: false,
                counterIsChecked: [],
                checkedToQuery: [],
                tableCounter: 0,
                whereClauses: [],
                tablesId: null,
                isOpen: false,
                AndOr: "AND",
                opened: false,
                autOpen: true,
            });
        }
    }
    componentWillUnmount() { }
    /**==============================================
     * EVENT CLICK SELECT
     ==============================================*/
    getQueryAttribute(e) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(e.currentTarget.attributes[1].value)
            if (!this.state.whereClauses.length) {
                let whereClause = {
                    id: e.currentTarget.attributes[1].value,
                    attributeQuery: e.currentTarget.name,
                    attributeQueryType: e.currentTarget.attributes.datatype.value,
                    queryValue: "=",
                };
                this.setState({
                    whereClauses: [whereClause],
                });
            }
            if (this.state.whereClauses.length) {
                const queryIndex = this.state.whereClauses
                    .map((obj) => obj.id)
                    .indexOf(e.currentTarget.attributes[1].value);
                if (queryIndex !== -1) {
                    const updateState = this.state.whereClauses.map((obj) => {
                        if (obj.id === queryIndex.toString()) {
                            obj = Object.assign(Object.assign({}, obj), { attributeQuery: e.currentTarget.name, attributeQueryType: e.currentTarget.attributes.datatype.value });
                            // return this.state.whereClauses[queryIndex] = obj
                            let filteredWhereClauses = this.state.whereClauses.filter((a) => a.id !== obj.id);
                            filteredWhereClauses.push(obj);
                            filteredWhereClauses.sort(function (a, b) {
                                return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                            });
                            return this.setState({
                                whereClauses: filteredWhereClauses,
                            });
                        }
                        return { obj };
                    });
                }
                else {
                    let whereClause = {
                        id: e.currentTarget.attributes[1].value,
                        attributeQuery: e.currentTarget.name,
                        attributeQueryType: e.currentTarget.attributes.datatype.value,
                    };
                    this.setState({
                        whereClauses: [...this.state.whereClauses, whereClause],
                    });
                    this.state.whereClauses.sort(function (a, b) {
                        return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                    });
                }
            }
        });
    }
    // for called on drop select list
    getQuery(e) {
        return __awaiter(this, void 0, void 0, function* () {
            let clickedQueryTableId = e.currentTarget.attributes[1].value;
            let currentClickedQueryAttribute;
            let queryIndex;
            if (this.state.whereClauses.length) {
                // console.log("ci sono più query");
                queryIndex = this.state.whereClauses
                    .map((obj) => obj.id)
                    .indexOf(clickedQueryTableId);
                if (queryIndex !== -1) {
                    const updateState = this.state.whereClauses.map((obj) => {
                        if (obj.id === queryIndex.toString()) {
                            currentClickedQueryAttribute = obj.attributeQuery;
                            obj = Object.assign(Object.assign({}, obj), { queryValue: e.currentTarget.name });
                            // return this.state.whereClauses[queryIndex] = obj
                            let filteredWhereClauses = this.state.whereClauses.filter((a) => a.id !== obj.id);
                            filteredWhereClauses.push(obj);
                            filteredWhereClauses.sort(function (a, b) {
                                return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                            });
                            return this.setState({
                                whereClauses: filteredWhereClauses,
                            });
                        }
                        return { obj };
                    });
                }
            }
            if (e.currentTarget.name === "IN" || e.currentTarget.name === "NOT_IN") {
                if (this.state.jimuMapView) {
                    this.state.jimuMapView.view.map.allLayers.forEach((f, index) => {
                        if (f.title === this.state.currentTargetText) {
                            this.state.jimuMapView.view.whenLayerView(f).then((layerView) => {
                                const query = new esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_5__["default"]();
                                query.where = `${currentClickedQueryAttribute} is not null`;
                                // query.outFields = [this.state.currentFirstQuery];
                                query.outFields = [`${currentClickedQueryAttribute}`];
                                layerView.filter = {
                                    where: query.where,
                                };
                                // f.visible = true
                                // layerView.visible = true
                                const results = f.queryFeatures(query);
                                results.then((result) => {
                                    const detailThirdQuery = [];
                                    result.features.forEach((el) => {
                                        // console.log(el.attributes)
                                        detailThirdQuery.push({
                                            value: Object.values(el.attributes),
                                            label: Object.values(el.attributes),
                                        });
                                    });
                                    if (queryIndex !== -1) {
                                        const updateState = this.state.whereClauses.map((obj) => {
                                            if (obj.id === queryIndex.toString()) {
                                                obj = Object.assign(Object.assign({}, obj), { ifInOrNotInQueryValue: detailThirdQuery });
                                                // return this.state.whereClauses[queryIndex] = obj
                                                let filteredWhereClauses = this.state.whereClauses.filter((a) => a.id !== obj.id);
                                                filteredWhereClauses.push(obj);
                                                filteredWhereClauses.sort(function (a, b) {
                                                    return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                                                });
                                                return this.setState({
                                                    whereClauses: filteredWhereClauses,
                                                });
                                            }
                                            return { obj };
                                        });
                                    }
                                });
                            });
                        }
                    });
                }
            }
        });
    }
    //TODO la sendQuery andrà risistemata quando si aggiungerà oltre all'espressione anche il set di espressioni
    // perché ora per l'AND fa il ciclo for su ogni where inserita nell'array ma dopo sarà necessario scomporre per creare le espressioni
    // step1 
    sendQuery() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.state.AndOr === "AND") {
                this.state.whereClauses.forEach((el, id) => {
                    var _a, _b, _c, _d;
                    let attributeQuery = el.attributeQuery;
                    let queryValue = el.queryValue;
                    let value;
                    if (queryValue === "is null" || queryValue === "is not null") {
                        value = (_b = (_a = el.value) === null || _a === void 0 ? void 0 : _a.txt) !== null && _b !== void 0 ? _b : "";
                    }
                    else if (queryValue === "IN" || queryValue === "NOT_IN") {
                        value = [];
                        el.checkedList.forEach((el) => value.push(el.checkValue));
                    }
                    else if (queryValue === "included" ||
                        queryValue === "is_not_included") {
                        value = {
                            firstTxt: el.firstTxt.value,
                            secondTxt: el.secondTxt.value,
                        };
                    }
                    else {
                        value = (_d = (_c = el.value) === null || _c === void 0 ? void 0 : _c.txt) !== null && _d !== void 0 ? _d : "";
                    }
                    if (this.state.jimuMapView) {
                        this.state.jimuMapView.view.map.allLayers.forEach((f, index) => {
                            if (f.title === this.state.currentTargetText) {
                                this.state.jimuMapView.view.whenLayerView(f).then((layerView) => {
                                    this.queryConstructor(//step 2 start querying
                                    layerView, attributeQuery, queryValue, value, this.state.AndOr, _connector__WEBPACK_IMPORTED_MODULE_8__["default"]);
                                });
                            }
                        });
                    }
                });
            }
            else {
                const query = new esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_5__["default"]();
                let normalizedWhereToSendQuery = [];
                this.state.whereClauses.forEach((el, id) => {
                    var _a, _b;
                    let attributeQuery = el.attributeQuery;
                    let queryValue = el.queryValue;
                    let value;
                    if (queryValue === "is null" || queryValue === "is not null") {
                        let queryIn = `${attributeQuery} ${queryValue}`;
                        normalizedWhereToSendQuery.push(queryIn);
                    }
                    if (queryValue === "IN" || queryValue === "NOT_IN") {
                        value = [];
                        el.checkedList.forEach((el) => value.push(el.checkValue));
                        if (this.containsAnyLetters(value)) {
                            let queryIn = `${attributeQuery} IN (${"'" + value.join("', '") + "'"})`;
                            normalizedWhereToSendQuery.push(queryIn);
                        }
                        else {
                            let queryIn = `${attributeQuery} IN (${value.join(",")})`;
                            normalizedWhereToSendQuery.push(queryIn);
                        }
                    }
                    if (queryValue === "included" || queryValue === "is_not_included") {
                        let queryIn;
                        queryValue === "included"
                            ? (queryIn = `${attributeQuery} > ${el.firstTxt.value} AND ${attributeQuery} < ${el.secondTxt.value}`)
                            : (queryIn = `${attributeQuery} < ${el.firstTxt.value} OR ${attributeQuery} > ${el.secondTxt.value}`);
                        normalizedWhereToSendQuery.push(queryIn);
                    }
                    else {
                        value = (_b = (_a = el.value) === null || _a === void 0 ? void 0 : _a.txt) !== null && _b !== void 0 ? _b : "";
                        if (this.containsAnyLetters(value)) {
                            let queryInput = `${attributeQuery} ${queryValue} '${value}'`;
                            normalizedWhereToSendQuery.push(queryInput);
                        }
                        else {
                            let queryInput = `${attributeQuery} ${queryValue} ${value}`;
                            normalizedWhereToSendQuery.push(queryInput);
                        }
                    }
                });
                if (this.state.jimuMapView) {
                    this.state.jimuMapView.view.map.allLayers.forEach((f, index) => {
                        if (f.title === this.state.currentTargetText) {
                            this.state.jimuMapView.view.whenLayerView(f).then((layerView) => {
                                let queryOr = `${normalizedWhereToSendQuery.join(" OR ")}`;
                                query.outFields = [`*`];
                                layerView.filter = {
                                    where: query.where,
                                };
                                layerView.visible = true;
                            });
                        }
                    });
                }
            }
        });
    }
    thirdQuery(e) {
        return __awaiter(this, void 0, void 0, function* () {
            // const arrChoose = []
            const currentQueryTest = e.currentTarget.textContent;
            this.state.jimuMapView.view.map.allLayers.forEach((f, index) => {
                if (f.title === this.state.currentTargetText) {
                    this.state.jimuMapView.view.whenLayerView(f).then((layerView) => {
                        this.inQueryConstructor(layerView, this.state.currentFirstQuery, this.state.currentSecondQuery, currentQueryTest);
                    });
                }
            });
        });
    }
    onChangeSelectLayer(e) {
        return __awaiter(this, void 0, void 0, function* () {
            this.graphicLayerFound.removeAll();
            if (this.state.jimuMapView) {
                this.state.jimuMapView.view.map.allLayers.forEach((f, index) => {
                    if (f.title === e.currentTarget.innerText) {
                        this.state.jimuMapView.view.whenLayerView(f).then((layerView) => {
                            this.setState({
                                resultsLayerSelected: f,
                                currentTargetText: e.currentTarget.innerText,
                            });
                            this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "checkedLayers", [f.id]));
                        });
                    }
                });
            }
        });
    }
    //TODO config abilitare tab true/false
    render() {
        var _a;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-attribute-table jimu-widget", id: "wrap", onClick: (e) => {
                this.closeDropOnclickOutside();
                e.stopPropagation();
            } },
            this.props.hasOwnProperty("useMapWidgetIds") &&
                this.props.useMapWidgetIds &&
                this.props.useMapWidgetIds[0] && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: this.activeViewChangeHandler })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: "search-advanced-tab-Ambito", title: "Ambito" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mt-4 container-fluid d-flex justify-content-between flex-column", style: { height: "100%" } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-md-12" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mb-2" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, { className: "w-100", form: "basic", open: true, text: "Selezionare prima il layer, poi continua con il costruttore della query", type: "info", withIcon: true })),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mb-2" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: "w-100" }, "Seleziona il layer:"),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { onChange: this.onChangeSelectLayer, placeholder: "Seleziona il Layer" }, this.state.resultLayerList.map((el, i) => {
                                    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: el.element.layerId, parsedUrl: el.element.parsedUrl }, el.element.title));
                                })),
                                this.state.tables.length < 2 ? ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, "Visualizza le feature nel layer corrispondenti alla seguente espressione")) : ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { onChange: this.chooseAndOr, placeholder: " Visualizza le feature nel layer che corrispondono a tutte le espressioni seguenti", defaultValue: "AND" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: "AND" }, "Visualizza le feature nel layer che corrispondono a tutte le espressioni seguenti"),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: "OR" }, "Visualizza le feature nel layer che corrispondono ad una qualsiasi delle espressioni seguenti")))))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mt-1 mb-3 justify-content-around" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-md-5 d-flex justify-content-center text-center" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { disabled: !this.state.currentTargetText, onClick: this.addTable, size: "default", className: "d-flex align-items-center  mb-2", type: "primary" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { icon: '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z" fill="#000"></path></svg>', size: "m" }),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "m-0 p-0" }, "Aggiungi espressione"))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-md-5 d-flex justify-content-center text-center" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { size: "default", className: "d-flex align-items-center mb-2", type: "secondary", onClick: this.sendQuery },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "m-0 p-0" }, "Applica")))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row", style: { height: "50%", overflowY: "scroll" } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-md-12" }, this.state.tables.map((el, i) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_7__["default"], { className: "w-100", key: i, id: `row-${i}`, list: this.state.resultsLayerSelected, isOpenDropD: this.state.isOpen, dropDown: () => this.dropDown(el.id), dropdownValueQuery: this.state.dropdownValueQuery, isChecked: this.state.isChecked, counterIsChecked: this.state.counterIsChecked, checkedToQuery: this.state.checkedToQuery, tables: this.state.tables, tablesId: el.id, whereClauses: this.state.whereClauses, getQueryAttribute: this.getQueryAttribute, getQuery: this.getQuery, handleThirdQuery: this.thirdQuery, textInputHandler: this.textInputHandler, dropdownItemHandler: this.dropdownItemClick, textFirstIncludedHandler: this.textFirstIncludedHandler, textSecondIncludedHandler: this.textSecondIncludedHandler, dropDownToggler: this.dropDown, handleCheckBox: this.handleCheckBox, deleteTable: () => this.deleteTable(el.id), univocoSelectHandler: this.univocoSelectHandler, onChangeCheckBox: this.onChangeCheckBox, openDrop: this.openDrop, closeDrop: this.closeDrop, opened: this.state.opened, autOpen: this.state.autOpen, mouseleave: this.state.mouseleave, onmouseLeave: this.onmouseLeave })))))))));
    }
}
Widget.activeV = null;
Widget.jimuLayerViewz = null;
Widget.anyvariable = null;
Widget.connector = null;

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9xdWVyeS1idWlsZGVyL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDbUg7QUFDakI7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDZEQUE2RCxvQkFBb0IsZ0NBQWdDLHdCQUF3QiwwQkFBMEIsb0JBQW9CLHFCQUFxQixrQkFBa0IsdUJBQXVCLGdDQUFnQyxTQUFTLHNIQUFzSCxVQUFVLGtCQUFrQixNQUFNLFlBQVksV0FBVyxnQkFBZ0IsTUFBTSxZQUFZLHdEQUF3RCx3QkFBd0Isa0NBQWtDLEtBQUssd0JBQXdCLDhCQUE4Qix3QkFBd0IsdUJBQXVCLEtBQUssaUJBQWlCLDJCQUEyQixrQ0FBa0MsS0FBSyx1QkFBdUI7QUFDMXpCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7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QUMsUUFBUSxFQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQzNCLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFDakMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQy9CLENBQ0gsQ0FBQyxDQUNFLENBQ0YsQ0FDRixDQUNGLENBQ0YsQ0FDUCxDQUFDO0lBQ0osQ0FBQzs7QUF0ckNNLGNBQU8sR0FBRyxJQUFJLENBQUM7QUFDZixxQkFBYyxHQUFHLElBQUksQ0FBQztBQUN0QixrQkFBVyxHQUFHLElBQUksQ0FBQztBQUNuQixnQkFBUyxHQUFHLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvc3R5bGUuY3NzP2FiYmIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvYXBwbGljYXRpb24vc2V0dGluZy5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvYXBwbGljYXRpb24vc2V0dGluZy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL2Nsb3NlLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvY29ubmVjdG9yLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9jb25uZWN0b3IvY29ubmVjdG9yLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvVGFibGUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL3V0aWxzL3F1ZXJ5VGFibGVWYWx1ZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvUG9seWdvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9yZXN0L3N1cHBvcnQvUXVlcnlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLml0ZW0tdGFibGU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZjdmZjsgfVxcblxcbi5zZXR0aW5nLXN2Zzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzAwNWVjYTsgfVxcblxcbi5zZXR0aW5nLXN2ZyB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksZUFBZTtFQUNmLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaXRlbS10YWJsZTpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVmN2ZmO1xcclxcbn1cXHJcXG4uc2V0dGluZy1zdmc6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6ICMwMDVlY2E7XFxyXFxufVxcclxcbi5zZXR0aW5nLXN2Z3tcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTkuNDM4Ljk5NGMuMjEzIDAgLjM5Ny4xNDYuNDQuMzUuMTUxLjcyMi4yNTcgMS4zNC4zMTYgMS44NTIuMzc0LjE2LjcyNS4zNjIgMS4wNDguNTk5bDEuNzI4LS42NzZhLjQ1NS40NTUgMCAwIDEgLjU1Ni4xODhsMS40MiAyLjM5NGEuNDMuNDMgMCAwIDEtLjA5MS41NDcgMjEuOTggMjEuOTggMCAwIDEtMS40OSAxLjE5NCA1LjE3IDUuMTcgMCAwIDEtLjAwNyAxLjE4M2wxLjQ2NCAxLjExOWEuNDMuNDMgMCAwIDEgLjExMS41NjNsLTEuNDIgMi4zOTRhLjQ1NC40NTQgMCAwIDEtLjUzLjE5NyAyMi40NDUgMjIuNDQ1IDAgMCAxLTEuODA3LS42NmMtLjMyNS4yMzMtLjY3OS40My0xLjA1NS41ODZsLS4yNjMgMS43OTRhLjQ0Ni40NDYgMCAwIDEtLjQ0NS4zNzZINi41NzRhLjQ0Ni40NDYgMCAwIDEtLjQ0LS4zNSAyMS4wMTkgMjEuMDE5IDAgMCAxLS4zMTctMS44NTMgNS4zNCA1LjM0IDAgMCAxLTEuMDQ3LS41OThsLTEuNzI4LjY3NWEuNDU1LjQ1NSAwIDAgMS0uNTU2LS4xODdsLTEuNDItMi4zOTVhLjQzLjQzIDAgMCAxIC4wOTEtLjU0NmMuNTY3LS40OSAxLjA2My0uODg4IDEuNDktMS4xOTRhNS4xNjcgNS4xNjcgMCAwIDEgLjAwOC0xLjE4M0wxLjE5IDYuMjQzYS40My40MyAwIDAgMS0uMTEyLS41NjJsMS40Mi0yLjM5NWEuNDU1LjQ1NSAwIDAgMSAuNTMxLS4xOTZjLjcxOS4yMzMgMS4zMjEuNDUzIDEuODA3LjY2LjMyNC0uMjMzLjY3OS0uNDMgMS4wNTYtLjU4N2wuMjYyLTEuNzk0QS40NDYuNDQ2IDAgMCAxIDYuNi45OTRoMi44MzlabS0uMzY1IDFINi45ODVsLS4yOCAxLjg2Ni0uNDY3LjE5Yy0uMjM1LjA5NS0uNDYuMjEtLjY3Mi4zNGwtLjIwNy4xMzYtLjQyLjI5My0uNDc2LS4xOTdjLS4zMjgtLjEzNy0uNzE4LS4yODEtMS4xNjktLjQzM2wtLjIyMS0uMDc0LTEuMDQ1IDEuNzE5TDMuNTkgNi45OTlsLS4wNi40NzlhNC4xMjcgNC4xMjcgMCAwIDAtLjAyMS44MTZsLjAxNC4xNDQuMDU4LjQ5Mi0uNDE5LjI5NGMtLjI4OC4yMDMtLjYxNS40NTEtLjk3OS43NDZsLS4xNzcuMTQ1IDEuMDQzIDEuNzIgMS44NDUtLjcwMy40MDYuMjljLjIwNC4xNDYuNDIuMjc0LjY0NS4zODRsLjIyOC4xMDMuNDc0LjE5OS4wNTkuNDljLjA0LjMzOC4xMDMuNzMxLjE5IDEuMTc3bC4wNDMuMjE5aDIuMDg4bC4yODItMS44NjcuNDY2LS4xOWMuMjM2LS4wOTUuNDYtLjIxLjY3Mi0uMzRsLjIwNy0uMTM2LjQxOS0uMjkzLjQ3Ni4xOThjLjMzLjEzNi43Mi4yOCAxLjE3LjQzM2wuMjIuMDcyIDEuMDQ0LTEuNzE4LTEuNTYtMS4xNjUuMDYtLjQ3OWE0LjEzMSA0LjEzMSAwIDAgMCAuMDItLjgxNWwtLjAxMy0uMTQ0LS4wNi0uNDkyLjQyLS4yOTVhMTguMSAxOC4xIDAgMCAwIC45OC0uNzQ2bC4xNzYtLjE0Ni0xLjA0My0xLjcyLTEuODQ0LjcwNS0uNDA2LS4yOWE0LjQ5NiA0LjQ5NiAwIDAgMC0uNjQ2LS4zODVsLS4yMjgtLjEwMy0uNDc0LS4xOTktLjA1OC0uNDljLS4wMzItLjI3LS4wOC0uNTc2LS4xNC0uOTE2bC0uMDk0LS40OFptLTEuMDY3IDNhMyAzIDAgMSAxIDAgNiAzIDMgMCAwIDEgMC02Wm0wIDFhMiAyIDAgMSAwIDAgNCAyIDIgMCAwIDAgMC00WlxcXCIgZmlsbD1cXFwiIzAwMFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIm04Ljc0NSA4IDYuMSA2LjFhLjUyNy41MjcgMCAxIDEtLjc0NS43NDZMOCA4Ljc0NmwtNi4xIDYuMWEuNTI3LjUyNyAwIDEgMS0uNzQ2LS43NDZsNi4xLTYuMS02LjEtNi4xYS41MjcuNTI3IDAgMCAxIC43NDYtLjc0Nmw2LjEgNi4xIDYuMS02LjFhLjUyNy41MjcgMCAwIDEgLjc0Ni43NDZMOC43NDYgOFpcXFwiIGZpbGw9XFxcIiMwMDBcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvYXBwbGljYXRpb24vc2V0dGluZy5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgU2V0dGluZ091dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXHJcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XHJcbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cclxufVxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2VkaXRvci9jbG9zZS5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgQ2xvc2VPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiXHJcbnR5cGUgbGF5ZXJDb250ZW50c09iamVjdFR5cGUgPSB7XHJcbiAgICBpZDpzdHJpbmcsXHJcbiAgICBhdHRyaWJ1dGVzOmFueVtdXHJcbn1cclxuXHJcbnR5cGUgc2VsZWN0ZWRMYXllclR5cGUgPSB7XHJcbiAgICBpZDpzdHJpbmcsXHJcbiAgICBhdHRyaWJ1dGVzOmFueVtdXHJcbn1cclxuXHJcbmNsYXNzIEhlbHBlciB7XHJcblxyXG4gICAgZ2V0TGF5ZXJBdHRyaWJ1dGVzID0gKHNlbGVjdGVkTGF5ZXJJZDpzdHJpbmcsbGF5ZXJDb250ZW50czpsYXllckNvbnRlbnRzT2JqZWN0VHlwZVtdKTphbnlbXT0+e1xyXG4gICAgICAgIGxldCBhdHRyaWJ1dGVzID0gW107XHJcbiAgICAgICAgaWYgKGxheWVyQ29udGVudHM/Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzT2JqZWN0ID0gbGF5ZXJDb250ZW50cy5maW5kKChsYXllckNvbnRlbnQ6bGF5ZXJDb250ZW50c09iamVjdFR5cGUpPT57XHJcbiAgICAgICAgICAgICAgICBpZiAobGF5ZXJDb250ZW50Py5pZCA9PT0gc2VsZWN0ZWRMYXllcklkKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGF5ZXJDb250ZW50Py5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gYXR0cmlidXRlc09iamVjdD8uYXR0cmlidXRlcztcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gYXR0cmlidXRlcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRBdHRyaWJ1dGVLZXlBcnJheSA9IChhdHRyaWJ1dGVzOmFueSk6c3RyaW5nW109PntcclxuICAgICAgICBsZXQgcmV0dXJuZWRLZXlzID0gW107XHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMgJiYgT2JqZWN0LmtleXMoYXR0cmlidXRlcykubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHJldHVybmVkS2V5cyA9IE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuZWRLZXlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlbGVjdGVkQ29udGVudHNMYXllciA9KHJlc3VsdHM6YW55LGNoZWNrZWRMYXllcnM6c3RyaW5nW10pOnNlbGVjdGVkTGF5ZXJUeXBlW109PnsvL3N0ZXA1IGZyb20gc2VsZWN0ZWQgaXRlbXMgZ2V0IHRoZWlyIGxheWVyc1xyXG4gICAgICAgIGxldCBzZWxlY3RlZExheWVyc0FycmF5ID0gW107XHJcbiAgICAgICAgaWYgKHJlc3VsdHM/Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBzZWxlY3RlZExheWVyc0FycmF5ID0gcmVzdWx0cy5yZWR1Y2UoKG5ld0FycmF5LGl0ZW1zOmFueVtdKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1zPy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRMYXllckNvbnRlbnRzID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRMYXllcklkID0gaXRlbXNbMF0/LmxheWVyPy5pZDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZExheWVycy5pbmRleE9mKGN1cnJlbnRMYXllcklkKSAhPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExheWVyQ29udGVudHNbXCJpZFwiXSA9IGl0ZW1zWzBdPy5sYXllcj8uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTGF5ZXJDb250ZW50c1tcImF0dHJpYnV0ZXNcIl0gPSB0aGlzLmdldEF0dHJpYnV0ZXMoaXRlbXMpOy8vc3RlcDYgcGFja2FnaW5nIGF0dHJpYnV0ZXMgYW5kIGtlZXBpbmcgbG9uIGFuZCBsYXRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKHNlbGVjdGVkTGF5ZXJDb250ZW50cylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7XHJcbiAgICAgICAgICAgIH0sW10pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZWxlY3RlZExheWVyc0FycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEF0dHJpYnV0ZXMgPSAoaXRlbXM6YW55W10pOmFueVtdPT57XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlc0FycmF5ID0gaXRlbXMucmVkdWNlKChuZXdBcnJheSxpdGVtKT0+e1xyXG4gICAgICAgICAgICBpZiAoaXRlbT8uYXR0cmlidXRlcyl7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5nZW9tZXRyeSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBpdGVtLmdlb21ldHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdGl0dWRlID0gZ2VvbWV0cnk/LmxhdGl0dWRlPz9nZW9tZXRyeT8uZXh0ZW50Py5jZW50ZXI/LmxhdGl0dWRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvbmdpdHVkZSA9IGdlb21ldHJ5Py5sb25naXR1ZGU/P2dlb21ldHJ5Py5leHRlbnQ/LmNlbnRlcj8ubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb25naXR1ZGUgJiYgbGF0aXR1ZGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKHsuLi5pdGVtLmF0dHJpYnV0ZXMsbG9jYXRpb246W2xhdGl0dWRlLGxvbmdpdHVkZV19KTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChpdGVtLmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKGl0ZW0uYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcclxuICAgICAgICB9LFtdKVxyXG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVzQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TnVtYmVyT2ZBdHRyaWJ1dGVzID0gKGxheWVyc0NvbnRlbnRzOntpZDpzdHJpbmcsYXR0cmlidXRlczphbnlbXX1bXSk9PntcclxuICAgICAgICBsZXQgbGF5ZXJDb250ZW50c09iamVjdCA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGk9MDtpIDwgbGF5ZXJzQ29udGVudHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICBsYXllckNvbnRlbnRzT2JqZWN0ID0gey4uLmxheWVyQ29udGVudHNPYmplY3QsW2xheWVyc0NvbnRlbnRzW2ldPy5pZF06bGF5ZXJzQ29udGVudHNbaV0/LmF0dHJpYnV0ZXM/Lmxlbmd0aD8/MH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxheWVyQ29udGVudHNPYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICBcclxuXHJcbiAgICBcclxuICAgIGdldENsaWNrZWRMYXllclN0YXR1cyA9IChyZXN1bHRzOmFueVtdLHNlbGVjdGVkTGF5ZXI6c2VsZWN0ZWRMYXllclR5cGVbXSk6Ym9vbGVhbj0+e1xyXG4gICAgICAgIGxldCBzdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgICAgICBpZiAocmVzdWx0cz8ubGVuZ3RoID4gMCAmJiBzZWxlY3RlZExheWVyPy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7aSA8IHJlc3VsdHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGF5ZXJJZCA9IHJlc3VsdHNbaV0/LmdyYXBoaWM/LmxheWVyPy5pZDtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gc2VsZWN0ZWRMYXllci5maW5kSW5kZXgoKGl0ZW0pPT5pdGVtLmlkID09PSBsYXllcklkKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPSAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0lmTGF5ZXJXYXNBZGRlZCA9IChsYXllcklkOnN0cmluZyxtYXBMYXllcnNJdGVtczphbnlbXSk9PntcclxuICAgICAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgICAgICBsZXQgc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKG1hcExheWVyc0l0ZW1zPy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgaW5kZXggPSBtYXBMYXllcnNJdGVtcy5maW5kSW5kZXgoKGl0ZW0pPT5pdGVtPy5pZCA9PT0gbGF5ZXJJZCk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvcGVuVGFibGVBdHRyaWJ1dGUgPSAoKT0+e1xyXG4gICAgICAgIGNvbnN0IGFyaWFFeHBhbmRlZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItY29udHJvbGxlclwiKTtcclxuICAgICAgICBpZiAoYXJpYUV4cGFuZGVkRWxlbWVudC5hcmlhRXhwYW5kZWQgPT09IFwiZmFsc2VcIil7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBhcmlhRXhwYW5kZWRFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlQXR0cmlidXRlVGFibGUgPSAoKT0+e1xyXG4gICAgICAgIGNvbnN0IGFyaWFFeHBhbmRlZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItY29udHJvbGxlclwiKTtcclxuICAgICAgICBpZiAoYXJpYUV4cGFuZGVkRWxlbWVudC5hcmlhRXhwYW5kZWQgPT09IFwidHJ1ZVwiKXtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGFyaWFFeHBhbmRlZEVsZW1lbnQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TnVtYmVyT2ZJdGVtc0luRmllbGQgPSAoZmllbGQ6c3RyaW5nLHNlbGVjdGVkQXR0cmlidXRlczphbnlbXSk9PntcclxuICAgICAgICBsZXQgbnVtYmVyT2ZJdGVtcyA9IDA7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkQXR0cmlidXRlcz8ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZUFyciA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7aTwgc2VsZWN0ZWRBdHRyaWJ1dGVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgdmFsdWVBcnIucHVzaChzZWxlY3RlZEF0dHJpYnV0ZXNbaV1bZmllbGRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBudW1iZXJPZkl0ZW1zID0gdmFsdWVBcnIubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVtYmVyT2ZJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdW1PZlZhbHVlcyA9IChmaWVsZDpzdHJpbmcsc2VsZWN0ZWRBdHRyaWJ1dGVzOmFueVtdKT0+e1xyXG4gICAgICAgIGxldCBudW1iZXJUb0FkZCA9IDA7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkQXR0cmlidXRlcz8ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPTA7aSA8IHNlbGVjdGVkQXR0cmlidXRlcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHNlbGVjdGVkQXR0cmlidXRlc1tpXVtmaWVsZF07XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIiAmJiAhaXNOYU4odmFsKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyVG9BZGQgKz0gdmFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW1iZXJUb0FkZDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBIZWxwZXIoKTsiLCJcbmltcG9ydCB7IEppbXVNYXBWaWV3IH0gZnJvbSBcImppbXUtYXJjZ2lzXCI7XG5pbXBvcnQgeyBhcHBBY3Rpb25zIH0gZnJvbSBcImppbXUtY29yZVwiO1xuXG50eXBlIHNwYXRpYWxSZWxhdGlvbnNoaXBUeXBlID0gXCJpbnRlcnNlY3RzXCIgfCBcImNvbnRhaW5zXCIgfCBcImNyb3NzZXNcIiB8IFwiZGlzam9pbnRcIiB8IFwiZW52ZWxvcGUtaW50ZXJzZWN0c1wiIHwgXCJpbmRleC1pbnRlcnNlY3RzXCIgfCBcIm92ZXJsYXBzXCIgfCBcInRvdWNoZXNcIiB8IFwid2l0aGluXCIgfCBcInJlbGF0aW9uXCJcblxudHlwZSBsYXllck9wZW5UeXBlID0ge1xuICAgIGdlb21ldHJ5OmFueSxcbiAgICB0eXBlU2VsZWN0ZWQ6c3BhdGlhbFJlbGF0aW9uc2hpcFR5cGUsXG4gICAgd2hlcmU/OnN0cmluZyxcbiAgICBncmFwaGljc0ZvdW5kPzphbnksXG4gICAgdmFsdWVCdWZmZXI/OmFueVxufVxuXG50eXBlIGluaXRPYmpUeXBlID0ge1xuICAgIHJlc3VsdHM6YW55W10sXG4gICAgYWxsQ2hlY2tlZExheWVyczphbnlbXSxcbiAgICBpc0xheWVyQ2hlY2tlZD86Ym9vbGVhbixcbiAgICBjaGVja2VkTGF5ZXJzPzpzdHJpbmdbXSxcbiAgICBudW1iZXJPZkF0dHJpYnV0ZXM/Ontba2V5OnN0cmluZ106c3RyaW5nfSxcbiAgICBsYXllck9wZW4/OmxheWVyT3BlblR5cGUsXG4gICAgY3JlYXRlVGFibGU/OnRydWVcbn1cblxudHlwZSBzZWxlY3RlZExheWVyVHlwZSA9IHtpZDpzdHJpbmcsYXR0cmlidXRlczphbnlbXX1cblxuY2xhc3MgQXR0cmlidXRlVGFibGVDb25uZWN0b3Ige1xuXG4gICAgc3RhdGljIGFjdGl2ZVZpZXc6SmltdU1hcFZpZXcgPSBudWxsO1xuICAgIHN0YXRpYyBzZWxmOmFueSA9IG51bGw7XG5cbiAgICBhbGxDaGVja2VkTGF5ZXJzOmFueVtdO1xuICAgIGNoZWNrZWRMYXllcnM/OnN0cmluZ1tdO1xuICAgIG51bWJlck9mQXR0cmlidXRlcz86e1trZXk6c3RyaW5nXTpzdHJpbmd9O1xuICAgIGNyZWF0ZVRhYmxlOmJvb2xlYW47XG4gICAgbGF5ZXJPcGVuOmxheWVyT3BlblR5cGU7XG4gICAgaXNMYXllckNoZWNrZWQ6Ym9vbGVhblxuXG5cbiAgICBjb25zdHJ1Y3RvcihhY3RpdmVWaWV3OkppbXVNYXBWaWV3LHNlbGY6YW55KXtcbiAgICAgICAgQXR0cmlidXRlVGFibGVDb25uZWN0b3IuYWN0aXZlVmlldyA9IGFjdGl2ZVZpZXc7XG4gICAgICAgIEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLnNlbGYgPSBzZWxmO1xuICAgIH1cblxuICAgIGluaXQob2JqOmluaXRPYmpUeXBlKXsgIFxuICAgICAgICBjb25zdCByZXN1bHRzID0gb2JqLnJlc3VsdHM7XG4gICAgICAgIGNvbnN0IGFsbENoZWNrZWRMYXllcnMgPSBvYmouYWxsQ2hlY2tlZExheWVycztcbiAgICAgICAgbGV0IGNyZWF0ZVRhYmxlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGlzTGF5ZXJDaGVja2VkID0gZmFsc2U7XG4gICAgICAgIGxldCBjaGVja2VkTGF5ZXJzID0gbnVsbDtcbiAgICAgICAgbGV0IG51bWJlck9mQXR0cmlidXRlcyA9IG51bGw7XG4gICAgICAgIGxldCBsYXllck9wZW4gPSBudWxsO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzLFwiY2hlY2sgcmVzdWx0c1wiKVxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KFwiY3JlYXRlVGFibGVcIikpe1xuICAgICAgICAgICAgY3JlYXRlVGFibGUgPSBvYmouY3JlYXRlVGFibGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShcImlzTGF5ZXJDaGVja2VkXCIpKXtcbiAgICAgICAgICAgIGlzTGF5ZXJDaGVja2VkID0gb2JqLmlzTGF5ZXJDaGVja2VkIFxuICAgICAgICB9XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoXCJjaGVja2VkTGF5ZXJzXCIpKXtcbiAgICAgICAgICAgIGNoZWNrZWRMYXllcnMgPSBvYmouY2hlY2tlZExheWVycyBcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KFwibnVtYmVyT2ZBdHRyaWJ1dGVzXCIpKXtcbiAgICAgICAgICAgIG51bWJlck9mQXR0cmlidXRlcyA9IG9iai5udW1iZXJPZkF0dHJpYnV0ZXMgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShcImxheWVyT3BlblwiKSl7XG4gICAgICAgICAgICBsYXllck9wZW4gPSBvYmoubGF5ZXJPcGVuIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3JlYXRlVGFibGUgPSBjcmVhdGVUYWJsZTtcbiAgICAgICAgdGhpcy5pc0xheWVyQ2hlY2tlZCA9IGlzTGF5ZXJDaGVja2VkO1xuICAgICAgICB0aGlzLnNldENoZWNrZWRMYXllcnMoYWxsQ2hlY2tlZExheWVycyxjaGVja2VkTGF5ZXJzKTtcbiAgICAgICAgdGhpcy5zZXRBbGxDaGVja2VkTGF5ZXJzKGFsbENoZWNrZWRMYXllcnMpO1xuICAgICAgICB0aGlzLnNldE51bWJlck9mQXR0cmlidXRlcyhyZXN1bHRzLG51bWJlck9mQXR0cmlidXRlcyk7XG4gICAgICAgIHRoaXMuc2V0TGF5ZXJPcGVuKGxheWVyT3Blbik7XG4gICAgfVxuXG4gICAgaXNBcnJheSA9ICh2YWwpPT5BcnJheS5pc0FycmF5KHZhbCk7XG5cbiAgICBpc09iamVjdCA9ICh2YWwpPT5PYmplY3Qua2V5cyh2YWwpLmxlbmd0aCA+IDA7XG5cbiAgICBsb29wTGF5ZXJHZXRJZHMgPSAobGF5ZXI6YW55W10pPT57XG4gICAgICAgIGxldCBpZHNBcnJheSA9IFtdO1xuICAgICAgICBpZiAobGF5ZXIubGVuZ3RoKXtcbiAgICAgICAgICAgIGlkc0FycmF5ID0gbGF5ZXIucmVkdWNlKChuZXdBcnJheSxpdGVtKT0+e1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkKXtcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChpdGVtLmlkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICAgICAgICB9LFtdKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZHNBcnJheTtcbiAgICB9XG5cbiAgICBzZXRDaGVja2VkTGF5ZXJzID0gKGFsbENoZWNrZWRMYXllcnM6YW55LGNoZWNrZWRMYXllcnM/OnN0cmluZ1tdLCk9PntcbiAgICAgICAgaWYgKGNoZWNrZWRMYXllcnMpe1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkTGF5ZXJzID0gY2hlY2tlZExheWVycztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2hlY2tlZExheWVyc0FyciA9IFtdO1xuICAgICAgICBpZiAoYWxsQ2hlY2tlZExheWVycyl7XG4gICAgICAgICAgICBpZiAodGhpcy5pc09iamVjdChhbGxDaGVja2VkTGF5ZXJzKSl7XG4gICAgICAgICAgICAgICAgY2hlY2tlZExheWVyc0Fyci5wdXNoKGFsbENoZWNrZWRMYXllcnMuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNBcnJheShhbGxDaGVja2VkTGF5ZXJzKSl7XG4gICAgICAgICAgICAgICAgY2hlY2tlZExheWVyc0FyciA9IFsuLi5jaGVja2VkTGF5ZXJzQXJyLHRoaXMubG9vcExheWVyR2V0SWRzKGFsbENoZWNrZWRMYXllcnMpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoZWNrZWRMYXllcnMgPSBjaGVja2VkTGF5ZXJzQXJyO1xuICAgIH1cblxuICAgIHNldEFsbENoZWNrZWRMYXllcnMgPSAoYWxsQ2hlY2tlZExheWVyczphbnkpPT57XG4gICAgICAgIGlmICh0aGlzLmlzT2JqZWN0KGFsbENoZWNrZWRMYXllcnMpKXtcbiAgICAgICAgICAgIHRoaXMuYWxsQ2hlY2tlZExheWVycyA9IFthbGxDaGVja2VkTGF5ZXJzXVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzQXJyYXkoYWxsQ2hlY2tlZExheWVycykpe1xuICAgICAgICAgICAgdGhpcy5hbGxDaGVja2VkTGF5ZXJzID0gYWxsQ2hlY2tlZExheWVyc1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBnZXRTZWxlY3RlZENvbnRlbnRzTGF5ZXIgPShyZXN1bHRzOmFueSk6c2VsZWN0ZWRMYXllclR5cGVbXT0+e1xuICAgICAgICBjb25zdCBjaGVja2VkTGF5ZXJzID0gdGhpcy5jaGVja2VkTGF5ZXJzPz9bXTtcbiAgICAgICAgbGV0IHNlbGVjdGVkTGF5ZXJzQXJyYXkgPSBbXTtcbiAgICAgICAgaWYgKHJlc3VsdHM/Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgc2VsZWN0ZWRMYXllcnNBcnJheSA9IHJlc3VsdHMucmVkdWNlKChuZXdBcnJheSxpdGVtczphbnlbXSk9PntcbiAgICAgICAgICAgICAgICBpZiAoaXRlbXM/Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRMYXllckNvbnRlbnRzID0ge307XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50TGF5ZXJJZCA9IGl0ZW1zWzBdPy5sYXllcj8uaWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2VkTGF5ZXJzLmluZGV4T2YoY3VycmVudExheWVySWQpICE9PSAtMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExheWVyQ29udGVudHNbXCJpZFwiXSA9IGl0ZW1zWzBdPy5sYXllcj8uaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExheWVyQ29udGVudHNbXCJhdHRyaWJ1dGVzXCJdID0gdGhpcy5nZXRBdHRyaWJ1dGVzKGl0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goc2VsZWN0ZWRMYXllckNvbnRlbnRzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICAgICAgICAgIH0sW10pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkTGF5ZXJzQXJyYXk7XG4gICAgfVxuXG4gICAgZ2V0QXR0cmlidXRlcyA9IChpdGVtczphbnlbXSk6YW55W109PntcbiAgICAgICAgY29uc3QgYXR0cmlidXRlc0FycmF5ID0gaXRlbXMucmVkdWNlKChuZXdBcnJheSxpdGVtKT0+e1xuICAgICAgICAgICAgaWYgKGl0ZW0/LmF0dHJpYnV0ZXMpe1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmdlb21ldHJ5KXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBpdGVtLmdlb21ldHJ5O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXRpdHVkZSA9IGdlb21ldHJ5Py5sYXRpdHVkZT8/Z2VvbWV0cnk/LmV4dGVudD8uY2VudGVyPy5sYXRpdHVkZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9uZ2l0dWRlID0gZ2VvbWV0cnk/LmxvbmdpdHVkZT8/Z2VvbWV0cnk/LmV4dGVudD8uY2VudGVyPy5sb25naXR1ZGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb25naXR1ZGUgJiYgbGF0aXR1ZGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaCh7Li4uaXRlbS5hdHRyaWJ1dGVzLGxvY2F0aW9uOltsYXRpdHVkZSxsb25naXR1ZGVdfSk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChpdGVtLmF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgICAgICAgICB9ICAgICAgIFxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKGl0ZW0uYXR0cmlidXRlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICAgIH0sW10pXG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVzQXJyYXk7XG4gICAgfVxuXG4gICAgc2V0TnVtYmVyT2ZBdHRyaWJ1dGVzID0gKHJlc3VsdHM6YW55W10sbnVtYmVyT2ZBdHRyaWJ1dGVzPzp7W2tleTpzdHJpbmddOnN0cmluZ30sKT0+e1xuICAgICAgICBpZiAobnVtYmVyT2ZBdHRyaWJ1dGVzKXtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyT2ZBdHRyaWJ1dGVzID0gbnVtYmVyT2ZBdHRyaWJ1dGVzO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxheWVyc0NvbnRlbnRzID0gdGhpcy5nZXRTZWxlY3RlZENvbnRlbnRzTGF5ZXIocmVzdWx0cyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGxheWVyc0NvbnRlbnRzLFwiY2hlY2sgbGF5ZXJzIGNvbnRlbnRzXCIpXG4gICAgICAgIGxldCBsYXllckNvbnRlbnRzT2JqZWN0ID0ge307XG4gICAgICAgIGZvciAobGV0IGk9MDtpIDwgbGF5ZXJzQ29udGVudHMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgbGF5ZXJDb250ZW50c09iamVjdCA9IHsuLi5sYXllckNvbnRlbnRzT2JqZWN0LFtsYXllcnNDb250ZW50c1tpXT8uaWRdOmxheWVyc0NvbnRlbnRzW2ldPy5hdHRyaWJ1dGVzPy5sZW5ndGg/PzB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5udW1iZXJPZkF0dHJpYnV0ZXMgPSBsYXllckNvbnRlbnRzT2JqZWN0XG4gICAgfVxuXG4gICAgc2V0TGF5ZXJPcGVuID0gKGxheWVyT3Blbj86bGF5ZXJPcGVuVHlwZSk9PntcbiAgICAgICAgaWYgKGxheWVyT3Blbil7XG4gICAgICAgICAgICB0aGlzLmxheWVyT3BlbiA9IGxheWVyT3BlbjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheWVyT3BlbiA9IHtcbiAgICAgICAgICAgIGdlb21ldHJ5Om51bGwsXG4gICAgICAgICAgICB0eXBlU2VsZWN0ZWQ6XCJjb250YWluc1wiLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QWN0aXZlVmlldyA9ICgpPT5BdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5hY3RpdmVWaWV3O1xuICAgIFxuICAgIGdldEFsbENoZWNrZWRMYXllcnMgPSAoKT0+IHRoaXMuYWxsQ2hlY2tlZExheWVycztcblxuICAgIGRpc3BhdGNoaW5nQWxsID0gKCk9PntcbiAgICAgICAgY29uc3Qgc2VsZiA9IEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLnNlbGY7XG4gICAgICAgIGNvbnN0IHByb3BzID0gc2VsZi5wcm9wc1xuICAgICAgICBpZiAocHJvcHMgJiYgcHJvcHMuaGFzT3duUHJvcGVydHkoXCJkaXNwYXRjaFwiKSApe1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZBdHRyaWJ1dGVzID0gdGhpcy5udW1iZXJPZkF0dHJpYnV0ZXM7XG4gICAgICAgICAgICBjb25zdCBsYXllck9wZW4gPSB0aGlzLmxheWVyT3BlbjtcbiAgICAgICAgICAgIGNvbnN0IGFsbENoZWNrZWRMYXllcnMgPSB0aGlzLmFsbENoZWNrZWRMYXllcnM7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVWaWV3ID0gdGhpcy5nZXRBY3RpdmVWaWV3KCk7XG4gICAgICAgICAgICBpZiAobnVtYmVyT2ZBdHRyaWJ1dGVzICYmIGxheWVyT3BlbiAmJiBhbGxDaGVja2VkTGF5ZXJzICYmIGFjdGl2ZVZpZXcpe1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhudW1iZXJPZkF0dHJpYnV0ZXMpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJjcmVhdGVUYWJsZVwiLHRydWUpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwibnVtYmVyT2ZBdHRyaWJ1dGVcIixudW1iZXJPZkF0dHJpYnV0ZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwibGF5ZXJPcGVuXCIsbGF5ZXJPcGVuKSk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImdldEFsbExheWVyc1wiLHRoaXMuZ2V0QWxsQ2hlY2tlZExheWVycykpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJnZXRBY3RpdmVWaWV3XCIsdGhpcy5nZXRBY3RpdmVWaWV3KSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0xheWVyQ2hlY2tlZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJjaGVja2VkTGF5ZXJzXCIsdGhpcy5jaGVja2VkTGF5ZXJzKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBcIm5vSXRlbVNlbGVjdGVkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbGF5ZXJPcGVuKXRocm93IFwiVGhlcmUgaXMgbm8gbGF5ZXIgb3BlblwiXG4gICAgICAgICAgICBpZiAoYWxsQ2hlY2tlZExheWVycyl0aHJvdyBcIlRoZXJlIGlzIG5vIGFsbCBjaGVja2VkIGxheWVycyBtYWtlIHN1cmUgdG8gcGFzcyBsYXllclwiXG4gICAgICAgICAgICBpZiAoYWN0aXZlVmlldyl0aHJvdyBcIlRoZXJlIGlzIG5vIGFjdGl2ZVZpZXcscGFzcyBqaW11TWFwVmlldyB3aGVuIG1hcCBsb2FkXCJcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBcIlBhc3MgcGFyZW50IHdpZGdldCB0byB0aGUgQXR0cmlidXRlQ29ubmVjdG9yXCJcblxuICAgIH1cblxuICAgIGdldFByb3BzID0gKCk9PntcbiAgICAgICAgY29uc3Qgc2VsZiA9IEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLnNlbGY7XG4gICAgICAgIGNvbnN0IHByb3BzID0gc2VsZi5wcm9wcztcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZBdHRyaWJ1dGVzID0gdGhpcy5udW1iZXJPZkF0dHJpYnV0ZXM7XG4gICAgICAgIGNvbnN0IGxheWVyT3BlbiA9IHRoaXMubGF5ZXJPcGVuO1xuICAgICAgICBjb25zdCBhbGxDaGVja2VkTGF5ZXJzID0gdGhpcy5hbGxDaGVja2VkTGF5ZXJzO1xuICAgICAgICBjb25zdCBhY3RpdmVWaWV3ID0gdGhpcy5nZXRBY3RpdmVWaWV3KCk7IFxuICAgICAgICBpZiAocHJvcHMgJiYgcHJvcHMuaGFzT3duUHJvcGVydHkoXCJkaXNwYXRjaFwiKSl7XG4gICAgICAgICAgICBpZighbGF5ZXJPcGVuKXRocm93IFwiVGhlcmUgaXMgbm8gbGF5ZXIgb3BlblwiXG4gICAgICAgICAgICBpZiAoIWFsbENoZWNrZWRMYXllcnMpdGhyb3cgXCJUaGVyZSBpcyBubyBhbGwgY2hlY2tlZCBsYXllcnMgbWFrZSBzdXJlIHRvIHBhc3MgbGF5ZXJcIlxuICAgICAgICAgICAgaWYgKCFhY3RpdmVWaWV3KXRocm93IFwiVGhlcmUgaXMgbm8gYWN0aXZlVmlldyxwYXNzIGppbXVNYXBWaWV3IHdoZW4gbWFwIGxvYWRcIlxuICAgICAgICAgICAgaWYgKG51bWJlck9mQXR0cmlidXRlcyAmJiBPYmplY3Qua2V5cyhudW1iZXJPZkF0dHJpYnV0ZXMpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBcIlBhc3MgcGFyZW50IHdpZGdldCB0byB0aGUgQXR0cmlidXRlQ29ubmVjdG9yXCJcbiAgICB9XG5cbiAgICBkaXNwYXRjaENyZWF0ZVRhYmxlID0gKCk9PntcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLmdldFByb3BzKCk7XG4gICAgICAgIGlmIChwcm9wcyl7XG4gICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJjcmVhdGVUYWJsZVwiLHRydWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BhdGNoQ2hlY2hlZExheWVycyA9IChjaGVja2VkTGF5ZXJzOnN0cmluZ1tdKT0+e1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMuZ2V0UHJvcHMoKTtcbiAgICAgICAgaWYgKHByb3BzKXtcbiAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNoZWNrZWRMYXllcnNcIixjaGVja2VkTGF5ZXJzKSk7XG4gICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJjcmVhdGVUYWJsZVwiLHRydWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BhdGNoRmlsdGVyVmFsdWUgPSAoZmlsdGVyVmFsdWU6bnVtYmVyKT0+e1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMuZ2V0UHJvcHMoKTtcbiAgICAgICAgaWYgKHByb3BzKXtcbiAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImZpbHRlclZhbHVlXCIsIGZpbHRlclZhbHVlKSk7XG4gICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJjcmVhdGVUYWJsZVwiLHRydWUpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXR0cmlidXRlVGFibGVDb25uZWN0b3I7IiwiaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ2hlY2tib3gsXHJcbiAgRHJvcGRvd24sXHJcbiAgRHJvcGRvd25CdXR0b24sXHJcbiAgRHJvcGRvd25JdGVtLFxyXG4gIERyb3Bkb3duTWVudSxcclxuICBJbnB1dCxcclxuICBNdWx0aVNlbGVjdCxcclxuICBPcHRpb24sXHJcbiAgU2VsZWN0LFxyXG4gIFRleHRJbnB1dCxcclxufSBmcm9tIFwiamltdS11aVwiO1xyXG5pbXBvcnQgeyBTZXR0aW5nT3V0bGluZWQgfSBmcm9tIFwiamltdS1pY29ucy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9zZXR0aW5nXCI7XHJcbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcImppbXUtY29yZVwiO1xyXG5pbXBvcnQgeyBDbG9zZU91dGxpbmVkIH0gZnJvbSBcImppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL2Nsb3NlXCI7XHJcbmltcG9ydCB7XHJcbiAgcXVlcnlDb25zdHJ1Y3Rvck51bWJlcixcclxuICBxdWVyeUNvbnN0cnVjdG9yU3RyaW5nLFxyXG59IGZyb20gXCIuLi91dGlscy9xdWVyeVRhYmxlVmFsdWVcIjtcclxuLy8gaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBUYWJsZShwcm9wcykge1xyXG4gIGNvbnN0IHtcclxuICAgIGxpc3QsXHJcbiAgICBoYW5kbGVUaGlyZFF1ZXJ5LFxyXG4gICAgdGV4dElucHV0SGFuZGxlcixcclxuICAgIG11bHRpU2VsZWN0SGFuZGxlcixcclxuICAgIGRyb3Bkb3duSXRlbUhhbmRsZXIsXHJcbiAgICB0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXIsXHJcbiAgICB0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyLFxyXG4gICAgZHJvcGRvd25WYWx1ZVF1ZXJ5LFxyXG4gICAgaGFuZGxlQ2hlY2tCb3gsXHJcbiAgICBpc0NoZWNrZWQsXHJcbiAgICBjb3VudGVySXNDaGVja2VkLFxyXG4gICAgZHJvcERvd25Ub2dnbGVyLFxyXG4gICAgZnVuY3Rpb25Db3VudGVySXNDaGVja2VkLFxyXG4gICAgY2hlY2tlZFRvUXVlcnksXHJcbiAgICBkZWxldGVUYWJsZSxcclxuICAgIHRhYmxlc0lkLFxyXG4gICAgZ2V0UXVlcnlBdHRyaWJ1dGUsXHJcbiAgICB3aGVyZUNsYXVzZXMsXHJcbiAgICB0YWJsZXMsXHJcbiAgICBnZXRRdWVyeSxcclxuICAgIHVuaXZvY29TZWxlY3RIYW5kbGVyLFxyXG4gICAgZHJvcERvd24sXHJcbiAgICBpc09wZW5Ecm9wRCxcclxuICAgIG9uQ2hhbmdlQ2hlY2tCb3gsXHJcbiAgICBvcGVuRHJvcCxcclxuICAgIGNsb3NlRHJvcCxcclxuICAgIG9wZW5lZCxcclxuICAgIGF1dE9wZW4sXHJcbiAgICBtb3VzZWxlYXZlLFxyXG4gICAgb25tb3VzZUxlYXZlLFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMVwiPlxyXG4gICAgICB7bGlzdC5maWVsZHMgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG0tMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB3LTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTIgY29sLTEgc2VsZi1lbmRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZGVsZXRlVGFibGV9XHJcbiAgICAgICAgICAgICAgICBpY29uXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENsb3NlT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYi0yXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17Z2V0UXVlcnlBdHRyaWJ1dGV9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgY2FtcG9cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm4gKi99XHJcbiAgICAgICAgICAgICAge2xpc3QuZmllbGRzLm1hcCgoZWwsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJvaWRcIiB8fFxyXG4gICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcInNtYWxsLWludGVnZXJcIiB8fFxyXG4gICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcImludGVnZXJcIiB8fFxyXG4gICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcInN0cmluZ1wiIHx8XHJcbiAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwiZG91YmxlXCJcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxPcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtlbC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU9e2VsLnR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2VsLmFsaWFzfSAoe2VsLnR5cGV9KVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdCBvbkNoYW5nZT17Z2V0UXVlcnl9IHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGNhbXBvXCI+XHJcbiAgICAgICAgICAgICAgICB7d2hlcmVDbGF1c2VzW3RhYmxlc0lkXSAmJlxyXG4gICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzW3RhYmxlc0lkXS5hdHRyaWJ1dGVRdWVyeVR5cGUgPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgICAgPyBxdWVyeUNvbnN0cnVjdG9yU3RyaW5nLm1hcCgobywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e28udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7by5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgOiBxdWVyeUNvbnN0cnVjdG9yTnVtYmVyLm1hcCgobywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e28udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7by5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8U2Vjb25kQ29uc3RydWN0b3JcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtNFwiXHJcbiAgICAgICAgICAgICAgaGFuZGxlVGhpcmRRdWVyeT17aGFuZGxlVGhpcmRRdWVyeX1cclxuICAgICAgICAgICAgICB0ZXh0SW5wdXRIYW5kbGVyPXt0ZXh0SW5wdXRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgIG11bHRpU2VsZWN0SGFuZGxlcj17bXVsdGlTZWxlY3RIYW5kbGVyfVxyXG4gICAgICAgICAgICAgIGRyb3Bkb3duSXRlbUhhbmRsZXI9e2Ryb3Bkb3duSXRlbUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyPXt0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcj17dGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcn1cclxuICAgICAgICAgICAgICBkcm9wZG93blZhbHVlUXVlcnk9e2Ryb3Bkb3duVmFsdWVRdWVyeX1cclxuICAgICAgICAgICAgICBoYW5kbGVDaGVja0JveD17aGFuZGxlQ2hlY2tCb3h9XHJcbiAgICAgICAgICAgICAgaXNDaGVja2VkPXtpc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgY291bnRlcklzQ2hlY2tlZD17Y291bnRlcklzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICBmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWQ9e2Z1bmN0aW9uQ291bnRlcklzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICBjaGVja2VkVG9RdWVyeT17Y2hlY2tlZFRvUXVlcnl9XHJcbiAgICAgICAgICAgICAgZ2V0UXVlcnlBdHRyaWJ1dGU9e2dldFF1ZXJ5QXR0cmlidXRlfVxyXG4gICAgICAgICAgICAgIHdoZXJlQ2xhdXNlcz17d2hlcmVDbGF1c2VzfVxyXG4gICAgICAgICAgICAgIHRhYmxlc0lkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICBkcm9wRG93blRvZ2dsZXI9e2Ryb3BEb3duVG9nZ2xlcn1cclxuICAgICAgICAgICAgICB1bml2b2NvU2VsZWN0SGFuZGxlcj17dW5pdm9jb1NlbGVjdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgZHJvcERvd249e2Ryb3BEb3dufVxyXG4gICAgICAgICAgICAgIGlzT3BlbkRyb3BEPXtpc09wZW5Ecm9wRH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZUNoZWNrQm94PXtvbkNoYW5nZUNoZWNrQm94fVxyXG4gICAgICAgICAgICAgIG9wZW5Ecm9wPXtvcGVuRHJvcH1cclxuICAgICAgICAgICAgICBjbG9zZURyb3A9e2Nsb3NlRHJvcH1cclxuICAgICAgICAgICAgICBvcGVuZWQ9e29wZW5lZH1cclxuICAgICAgICAgICAgICBhdXRPcGVuPXthdXRPcGVufVxyXG4gICAgICAgICAgICAgIG1vdXNlbGVhdmU9e21vdXNlbGVhdmV9XHJcbiAgICAgICAgICAgICAgb25tb3VzZUxlYXZlPXtvbm1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICBcIlwiXHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmNvbnN0IFN3aXRjaCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcXVlcnlWYWx1ZXMsIGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICAvLyBmaWx0ZXIgb3V0IG9ubHkgY2hpbGRyZW4gd2l0aCBhIG1hdGNoaW5nIHByb3BcclxuICByZXR1cm4gY2hpbGRyZW4uZmluZCgoY2hpbGQpID0+IHtcclxuICAgIHJldHVybiBjaGlsZC5wcm9wcy52YWx1ZSA9PT0gcXVlcnlWYWx1ZXM7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBTZWNvbmRDb25zdHJ1Y3RvciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRleHRJbnB1dEhhbmRsZXIsXHJcbiAgICBkcm9wZG93bkl0ZW1IYW5kbGVyLFxyXG4gICAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyLFxyXG4gICAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcixcclxuICAgIGNvdW50ZXJJc0NoZWNrZWQsXHJcbiAgICBmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWQsXHJcbiAgICB0YWJsZXNJZCxcclxuICAgIHdoZXJlQ2xhdXNlcyxcclxuICAgIGRyb3BEb3duVG9nZ2xlcixcclxuICAgIHVuaXZvY29TZWxlY3RIYW5kbGVyLFxyXG4gICAgZHJvcERvd24sXHJcbiAgICBpc09wZW5Ecm9wRCxcclxuICAgIG9uQ2hhbmdlQ2hlY2tCb3gsXHJcbiAgICBvcGVuRHJvcCxcclxuICAgIGNsb3NlRHJvcCxcclxuICAgIG9wZW5lZDogZCxcclxuICAgIGF1dE9wZW4sXHJcbiAgICBvbm1vdXNlTGVhdmUsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWRUaGlyZFF1ZXJ5ID0gW107XHJcbiAgbGV0IGRlZmF1bHRWYWx1ZSA9IFwiPVwiO1xyXG4gIGxldCBkcm9wZG93blZhbHVlUXVlcnkgPSBcInZhbG9yZVwiO1xyXG4gIGxldCBvcGVuZWQgPSBmYWxzZTtcclxuICBsZXQgY2hlY2tlZCA9IDA7XHJcbiAgbGV0IGF1ID0gdHJ1ZTtcclxuXHJcbiAgLy8gdmFsdWVUaGlyZFF1ZXJ5Lm1hcCgoZWwsIGkpID0+IHsgbm9ybWFsaXplZFRoaXJkUXVlcnkucHVzaCh7IGxhYmVsOiBlbC5sYWJlbFswXS50b1N0cmluZygpLCB2YWx1ZTogZWwudmFsdWVbMF0udG9TdHJpbmcoKSB9KSB9KVxyXG4gIGlmICh3aGVyZUNsYXVzZXNbdGFibGVzSWRdICYmIHdoZXJlQ2xhdXNlc1t0YWJsZXNJZF0uaWZJbk9yTm90SW5RdWVyeVZhbHVlKSB7XHJcbiAgICB3aGVyZUNsYXVzZXNbdGFibGVzSWRdLmlmSW5Pck5vdEluUXVlcnlWYWx1ZS5tYXAoKGVsLCBpKSA9PiB7XHJcbiAgICAgIG5vcm1hbGl6ZWRUaGlyZFF1ZXJ5LnB1c2goe1xyXG4gICAgICAgIGlkOiB0YWJsZXNJZC50b1N0cmluZygpLFxyXG4gICAgICAgIGxhYmVsOiBlbC5sYWJlbFswXS50b1N0cmluZygpLFxyXG4gICAgICAgIHZhbHVlOiBlbC52YWx1ZVswXS50b1N0cmluZygpLFxyXG4gICAgICAgIGxpc3RlbDogd2hlcmVDbGF1c2VzW3RhYmxlc0lkXS5jaGVja2VkTGlzdCxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKHdoZXJlQ2xhdXNlc1t0YWJsZXNJZF0gJiYgd2hlcmVDbGF1c2VzW3RhYmxlc0lkXS5xdWVyeVZhbHVlKSB7XHJcbiAgICBkZWZhdWx0VmFsdWUgPSB3aGVyZUNsYXVzZXNbdGFibGVzSWRdLnF1ZXJ5VmFsdWU7XHJcbiAgfVxyXG4gIGlmICh3aGVyZUNsYXVzZXNbdGFibGVzSWRdICYmIHdoZXJlQ2xhdXNlc1t0YWJsZXNJZF0uZHJvcGRvd25WYWx1ZVF1ZXJ5KSB7XHJcbiAgICBkcm9wZG93blZhbHVlUXVlcnkgPSB3aGVyZUNsYXVzZXNbdGFibGVzSWRdLmRyb3Bkb3duVmFsdWVRdWVyeTtcclxuICB9XHJcbiAgaWYgKHdoZXJlQ2xhdXNlc1t0YWJsZXNJZF0gJiYgd2hlcmVDbGF1c2VzW3RhYmxlc0lkXS5pc09wZW4pIHtcclxuICAgIC8vIG9wZW5lZCA9IHdoZXJlQ2xhdXNlc1t0YWJsZXNJZF0uaXNPcGVuO1xyXG4gIH1cclxuXHJcbiAgaWYgKHdoZXJlQ2xhdXNlc1t0YWJsZXNJZF0gJiYgd2hlcmVDbGF1c2VzW3RhYmxlc0lkXS5jaGVja2VkTGlzdCkge1xyXG4gICAgY2hlY2tlZCA9IHdoZXJlQ2xhdXNlc1t0YWJsZXNJZF0uY2hlY2tlZExpc3QubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdGVzdCA9IChwcm9wcykgPT4ge307XHJcbiAgcmV0dXJuIChcclxuICAgIDxTd2l0Y2ggcXVlcnlWYWx1ZXM9e2RlZmF1bHRWYWx1ZX0+XHJcbiAgICAgIDxkaXYgdmFsdWU9e1wiPVwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cclxuICAgICAgICB7ZHJvcGRvd25WYWx1ZVF1ZXJ5ID09PSBcInVuaXZvY29cIiA/IChcclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3VuaXZvY29TZWxlY3RIYW5kbGVyfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtub3JtYWxpemVkVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2l9IGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfT5cclxuICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGV4dElucHV0SGFuZGxlcn1cclxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXHJcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMVwiPlxyXG4gICAgICAgICAge31cclxuICAgICAgICAgIDxEcm9wZG93biBhY3RpdmVJY29uPlxyXG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBjbGFzc05hbWU9XCJzZXR0aW5nLXN2Z1wiIC8+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBoZWFkZXI+SW1wb3J0YSBpbCB0aXBvIGRpIGlucHV0PC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ2YWxvcmVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZHJvcGRvd25JdGVtSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFZhbG9yZVxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cclxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2FtcG9cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZHJvcGRvd25JdGVtSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW1wb1xyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cclxuICAgICAgICAgICAgICAgIHZhbHVlPVwidW5pdm9jb1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtkcm9wZG93bkl0ZW1IYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVW5pdm9jaVxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHZhbHVlPXtcIjw+XCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxyXG4gICAgICAgIHtkcm9wZG93blZhbHVlUXVlcnkgPT09IFwidW5pdm9jb1wiID8gKFxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dW5pdm9jb1NlbGVjdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGlsIExheWVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge25vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lm1hcCgoZWwsIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17aX0gZGF0YS10YWJsZS1pZD17dGFibGVzSWR9PlxyXG4gICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0ZXh0SW5wdXRIYW5kbGVyfVxyXG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcclxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0xXCI+XHJcbiAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbj5cclxuICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQgY2xhc3NOYW1lPVwic2V0dGluZy1zdmdcIiAvPlxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxyXG4gICAgICAgICAgICA8RHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPkltcG9ydGEgaWwgdGlwbyBkaSBpbnB1dDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cclxuICAgICAgICAgICAgICAgIHZhbHVlPVwidmFsb3JlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Ryb3Bkb3duSXRlbUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBWYWxvcmVcclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cImNhbXBvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Ryb3Bkb3duSXRlbUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2FtcG9cclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInVuaXZvY29cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZHJvcGRvd25JdGVtSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFVuaXZvY2lcclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiB2YWx1ZT17XCJJTlwifSBvbk1vdXNlTGVhdmU9eygpID0+IG9ubW91c2VMZWF2ZSgpfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIDxEcm9wZG93biBhY3RpdmVJY29uIGlzT3Blbj17YXV0T3Blbn0gdG9nZ2xlPXsoKSA9PiBkcm9wRG93bn0+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uIG9uQ2xpY2s9eygpID0+IG9wZW5Ecm9wKCl9PlxyXG4gICAgICAgICAgICAgICAge2NoZWNrZWR9IGVsZW1lbnRpIHNlbGV6aW9uYXRpXHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBoZWFkZXI+TXVsdGkgc2VsZXppb25lIGF0dGl2YTwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICB7bm9ybWFsaXplZFRoaXJkUXVlcnkubWFwKChlbCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmF0ZWd5PXtcImZpeGVkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNoZWNrQm94fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2VsLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5saXN0ZWwgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwubGlzdGVsLmZpbHRlcihmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmNoZWNrVmFsdWUgPT09IGVsLmxhYmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zIG1iLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgey8qPE11bHRpU2VsZWN0Ki99XHJcbiAgICAgICAgICB7LyogICAgZGlzcGxheUJ5VmFsdWVzPXtmdW5jdGlvbiBteUZ1bmN0aW9uIChlKSB7IHJldHVybiBgJHtjb3VudGVySXNDaGVja2VkLmxlbmd0aH0gZWxlbWVudGkgc2VsZXppb25hdGlgIH19Ki99XHJcbiAgICAgICAgICB7LyogICAgaXRlbXM9e25vcm1hbGl6ZWRUaGlyZFF1ZXJ5fSovfVxyXG4gICAgICAgICAgey8qICAgIG9uQ2xpY2tJdGVtPXtmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWR9Ki99XHJcbiAgICAgICAgICB7LyogICAgcGxhY2Vob2xkZXI9eycwIGVsZW1lbnRpIHNlbGV6aW9uYXRpJ30qL31cclxuICAgICAgICAgIHsvKiAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH0qL31cclxuICAgICAgICAgIHsvKiAgICBvbkNsaWNrPXt0ZXN0fSovfVxyXG4gICAgICAgICAgey8qLz4qL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgdmFsdWU9e1wiTk9UX0lOXCJ9IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgIDxNdWx0aVNlbGVjdFxyXG4gICAgICAgICAgICBkaXNwbGF5QnlWYWx1ZXM9e2Z1bmN0aW9uIG15RnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBgJHtjb3VudGVySXNDaGVja2VkLmxlbmd0aH0gZWxlbWVudGkgc2VsZXppb25hdGlgO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBpdGVtcz17bm9ybWFsaXplZFRoaXJkUXVlcnl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2tJdGVtPXtmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWR9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Rlc3R9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIjAgZWxlbWVudGkgc2VsZXppb25hdGlcIn1cclxuICAgICAgICAgICAgaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgdmFsdWU9e1wiPD1cIn0gY2xhc3NOYW1lPVwiZC1mbGV4ICBjb2wtbWQtNFwiPlxyXG4gICAgICAgIHtkcm9wZG93blZhbHVlUXVlcnkgPT09IFwidW5pdm9jb1wiID8gKFxyXG4gICAgICAgICAgPFNlbGVjdCBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiPlxyXG4gICAgICAgICAgICB7bm9ybWFsaXplZFRoaXJkUXVlcnkubWFwKChlbCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtpfSBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH0+XHJcbiAgICAgICAgICAgICAgICAgIHtlbC5sYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XHJcbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxyXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTFcIj5cclxuICAgICAgICAgIDxEcm9wZG93biBhY3RpdmVJY29uPlxyXG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBjbGFzc05hbWU9XCJzZXR0aW5nLXN2Z1wiIC8+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBoZWFkZXI+SW1wb3J0YSBpbCB0aXBvIGRpIGlucHV0PC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ2YWxvcmVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZHJvcGRvd25JdGVtSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFZhbG9yZVxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cclxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2FtcG9cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZHJvcGRvd25JdGVtSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW1wb1xyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cclxuICAgICAgICAgICAgICAgIHZhbHVlPVwidW5pdm9jb1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtkcm9wZG93bkl0ZW1IYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVW5pdm9jaVxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHZhbHVlPXtcIj49XCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxyXG4gICAgICAgIHtkcm9wZG93blZhbHVlUXVlcnkgPT09IFwidW5pdm9jb1wiID8gKFxyXG4gICAgICAgICAgPFNlbGVjdCBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiPlxyXG4gICAgICAgICAgICB7bm9ybWFsaXplZFRoaXJkUXVlcnkubWFwKChlbCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtpfSBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH0+XHJcbiAgICAgICAgICAgICAgICAgIHtlbC5sYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XHJcbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxyXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTFcIj5cclxuICAgICAgICAgIDxEcm9wZG93biBhY3RpdmVJY29uPlxyXG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBjbGFzc05hbWU9XCJzZXR0aW5nLXN2Z1wiIC8+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBoZWFkZXI+SW1wb3J0YSBpbCB0aXBvIGRpIGlucHV0PC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ2YWxvcmVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZHJvcGRvd25JdGVtSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFZhbG9yZVxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cclxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2FtcG9cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZHJvcGRvd25JdGVtSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW1wb1xyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cclxuICAgICAgICAgICAgICAgIHZhbHVlPVwidW5pdm9jb1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtkcm9wZG93bkl0ZW1IYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVW5pdm9jaVxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHZhbHVlPXtcIjxcIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC1tZC00XCI+XHJcbiAgICAgICAge2Ryb3Bkb3duVmFsdWVRdWVyeSA9PT0gXCJ1bml2b2NvXCIgPyAoXHJcbiAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGlsIExheWVyXCI+XHJcbiAgICAgICAgICAgIHtub3JtYWxpemVkVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2l9IGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfT5cclxuICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGV4dElucHV0SGFuZGxlcn1cclxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXHJcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMVwiPlxyXG4gICAgICAgICAgPERyb3Bkb3duIGFjdGl2ZUljb24+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGNsYXNzTmFtZT1cInNldHRpbmctc3ZnXCIgLz5cclxuICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cclxuICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhlYWRlcj5JbXBvcnRhIGlsIHRpcG8gZGkgaW5wdXQ8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInZhbG9yZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtkcm9wZG93bkl0ZW1IYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVmFsb3JlXHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJjYW1wb1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtkcm9wZG93bkl0ZW1IYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENhbXBvXHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ1bml2b2NvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Ryb3Bkb3duSXRlbUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBVbml2b2NpXHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgdmFsdWU9e1wiPlwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cclxuICAgICAgICB7ZHJvcGRvd25WYWx1ZVF1ZXJ5ID09PSBcInVuaXZvY29cIiA/IChcclxuICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgaWwgTGF5ZXJcIj5cclxuICAgICAgICAgICAge25vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lm1hcCgoZWwsIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17aX0gZGF0YS10YWJsZS1pZD17dGFibGVzSWR9PlxyXG4gICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0ZXh0SW5wdXRIYW5kbGVyfVxyXG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcclxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0xXCI+XHJcbiAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbj5cclxuICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQgY2xhc3NOYW1lPVwic2V0dGluZy1zdmdcIiAvPlxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxyXG4gICAgICAgICAgICA8RHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPkltcG9ydGEgaWwgdGlwbyBkaSBpbnB1dDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cclxuICAgICAgICAgICAgICAgIHZhbHVlPVwidmFsb3JlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Ryb3Bkb3duSXRlbUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBWYWxvcmVcclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cImNhbXBvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Ryb3Bkb3duSXRlbUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2FtcG9cclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInVuaXZvY29cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZHJvcGRvd25JdGVtSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFVuaXZvY2lcclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiB2YWx1ZT17XCJpcyBudWxsXCJ9PjwvZGl2PlxyXG4gICAgICA8ZGl2IHZhbHVlPXtcImlzIG5vdCBudWxsXCJ9PjwvZGl2PlxyXG4gICAgICA8ZGl2IHZhbHVlPXtcImluY2x1ZGVkXCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyfVxyXG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxyXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb2wtbWQtMiB0ZXh0LWNlbnRlclwiPmU8L3A+XHJcbiAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyfVxyXG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxyXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHZhbHVlPXtcImlzX25vdF9pbmNsdWRlZFwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RleHRGaXJzdEluY2x1ZGVkSGFuZGxlcn1cclxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcclxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29sLW1kLTIgdGV4dC1jZW50ZXJcIj5lPC9wPlxyXG4gICAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcn1cclxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcclxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiB2YWx1ZT17XCJMSUtFJVwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cclxuICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGV4dElucHV0SGFuZGxlcn1cclxuICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXHJcbiAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiB2YWx1ZT17XCIlTElLRVwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cclxuICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGV4dElucHV0SGFuZGxlcn1cclxuICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXHJcbiAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiB2YWx1ZT17XCJMSUtFJVwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cclxuICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGV4dElucHV0SGFuZGxlcn1cclxuICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXHJcbiAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiB2YWx1ZT17XCIlTElLRSVcIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC1tZC00XCI+XHJcbiAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XHJcbiAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxyXG4gICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgdmFsdWU9e1wiTk9UIExJS0VcIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC1tZC00XCI+XHJcbiAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XHJcbiAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxyXG4gICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1N3aXRjaD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGU7XHJcbiIsIi8qKlxyXG5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIF93aWRnZXRMYWJlbDogJ0Nvc3RydXR0b3JlIFF1ZXJ5JyxcclxuICAgIHNlbGVjdEdlb21ldHJ5OlwiU2VsZXppb25hcmUgbGEgZ2VvbWV0cmlhXCIsXHJcbiAgICBsYXllcnM6XCJTdHJhdGlcIixcclxuICAgIHpvb21BOlwiWm9vbSBBXCIsXHJcbiAgICBleHBvcnRDc3Y6XCJFc3BvcnRhemlvbmUgaW4gZmlsZSBjc3ZcIixcclxuICAgIGV4cG9ydEpzb246XCJFc3BvcnRhemlvbmUgaW4gdW5hIHJhY2NvbHRhIGRpIGZ1bnppb25pXCIsXHJcbiAgICBzdGF0aXN0aWNzOlwiU3RhdGlzdGljaGVcIixcclxuICAgIGNyZWF0ZUxheWVyOlwiQ3JlYXJlIGlsIGxpdmVsbG9cIixcclxuICAgIGF0dHJpYnV0ZVRhYmxlOlwiVmlzdGEgbmVsbGEgdGFiZWxsYSBkZWdsaSBhdHRyaWJ1dGlcIixcclxuICAgIGRlbGV0ZTpcIkNhbmNlbGxhcmVcIixcclxuICAgIGNvdW50T2ZJdGVtczpcIkNvbnRlZ2dpbyBkZWdsaSBhcnRpY29saVwiLFxyXG4gICAgc3VtT2ZWYWx1ZXM6XCJTb21tYSBkZWkgdmFsb3JpXCIsXHJcbiAgICBtaW5pbXVtOlwiTWluaW1vXCIsXHJcbiAgICBtYXhpbXVtOlwiTWFzc2ltb1wiLFxyXG4gICAgYXZlcmFnZTpcIk1lZGlhXCIsXHJcbiAgICBzZWxlY3RCeVBvaW50OlwiU2VsZXppb25lIHBlciBwdW50b1wiLFxyXG4gICAgc2VsZWN0aW9uQnlMaW5lOlwiU2VsZXppb25lIHBlciBsaW5lYVwiLFxyXG4gICAgc2VsZWN0aW9uQnlQb2x5Z29uOlwiU2VsZXppb25lIHBlciBwb2xpZ29ub1wiLFxyXG4gICAgc2VsZWN0aW9uQnlSZWN0YW5ndWxhcjpcIlNlbGV6aW9uZSBwZXIgcmV0dGFuZ29sb1wiLFxyXG4gICAgc2VsZWN0aW9uQnlDaXJjbGU6XCJTZWxlemlvbmUgcGVyIGNlcmNoaW9cIixcclxuICAgIHJlZnJlc2g6XCJBZ2dpb3JuYXJlXCIsXHJcbiAgICBvazpcIk9LXCIsXHJcbiAgICBjYW5jZWw6XCJBbm51bGxhbWVudG9cIixcclxuICAgIGZpZWxkczpcIkNhbXBpXCIsXHJcbiAgICBzZWxlY3Rpb25BY3Rpb246XCJTZWxlemlvbmUgQXppb25lXCIsXHJcbiAgICBtYXBMb2FkaW5nOlwiSW4gYXR0ZXNhIGRlbCBjYXJpY2FtZW50byBkZWxsYSBtYXBwYS4uLlwiLFxyXG4gICAgbm9TZWxlY3RlZEl0ZW06XCJOb24gw6ggc3RhdGEgc2VsZXppb25hdGEgYWxjdW5hIHZvY2VcIlxyXG59XHJcbiIsImNvbnN0ICBxdWVyeUNvbnN0cnVjdG9yTnVtYmVyID0gW1xyXG4gICAgeyBuYW1lOiAnw6gnLCB2YWx1ZTogJz0nIH0sXHJcbiAgICB7IG5hbWU6ICdub24gw6gnLCB2YWx1ZTogJzw+JyB9LFxyXG4gICAgeyBuYW1lOiAnw6ggdW5vIGRpJywgdmFsdWU6ICdJTicgfSwgLy8gT0JKRUNUSUQgSU4gKDEsMiwzKVxyXG4gICAgeyBuYW1lOiAnbm9uIMOoIG5lc3N1bm8gZGknLCB2YWx1ZTogJ05PVF9JTicgfSwgLy8gICBPQkpFQ1RJRCBOT1RfSU4gKDEsMiwzKVxyXG4gICAgeyBuYW1lOiAnw6ggYWxtZW5vJywgdmFsdWU6ICc8PScgfSxcclxuICAgIHsgbmFtZTogJ8OoIGFsIG1hc3NpbW8nLCB2YWx1ZTogJz49JyB9LFxyXG4gICAgeyBuYW1lOiAnw6ggbWlub3JlIGRpJywgdmFsdWU6ICc8JyB9LFxyXG4gICAgeyBuYW1lOiAnw6ggbWFnZ2lvcmUgZGknLCB2YWx1ZTogJz4nIH0sXHJcbiAgICB7IG5hbWU6ICfDqCB2dW90bycsIHZhbHVlOiAnaXMgbnVsbCcgfSxcclxuICAgIHsgbmFtZTogJ25vbiDDqCB2dW90bycsIHZhbHVlOiAnaXMgbm90IG51bGwnIH0sXHJcbiAgICB7IG5hbWU6ICfDqCBjb21wcmVzbyB0cmEnLCB2YWx1ZTogJ2luY2x1ZGVkJyB9LCAvLyBPQkpFQ1RJRCA8IDIgQU5EIE9CSkVDVElEID4gNFxyXG4gICAgeyBuYW1lOiAnbm9uIMOoIGNvbXByZXNvIHRyYScsIHZhbHVlOiAnaXNfbm90X2luY2x1ZGVkJyB9IC8vZGEgdHJvdmFyZVxyXG5dO1xyXG5jb25zdCAgIHF1ZXJ5Q29uc3RydWN0b3JTdHJpbmcgPSBbXHJcbiAgICB7IG5hbWU6ICfDqCcsIHZhbHVlOiAnPScgfSxcclxuICAgIHsgbmFtZTogJ25vbiDDqCcsIHZhbHVlOiAnPD4nIH0sXHJcbiAgICB7IG5hbWU6ICfDqCB1bm8gZGknLCB2YWx1ZTogJ0lOJyB9LFxyXG4gICAgeyBuYW1lOiAnbm9uIMOoIG5lc3N1bm8gZGknLCB2YWx1ZTogJ05PVF9JTicgfSxcclxuICAgIHsgbmFtZTogJ2luaXppYSBjb24nLCB2YWx1ZTogJ0xJS0UlJyB9LFxyXG4gICAgeyBuYW1lOiAndGVybWluYSBjb24nLCB2YWx1ZTogJyVMSUtFJyB9LFxyXG4gICAgeyBuYW1lOiAnY29udGllbmUnLCB2YWx1ZTogJyVMSUtFJScgfSxcclxuICAgIHsgbmFtZTogJ25vbiBjb250aWVuZScsIHZhbHVlOiAnTk9UIExJS0UnIH0sXHJcbiAgICB7IG5hbWU6ICfDqCB2dW90bycsIHZhbHVlOiAnaXMgbnVsbCcgfSxcclxuICAgIHsgbmFtZTogJ25vbiDDqCB2dW90bycsIHZhbHVlOiAnaXMgbm90IG51bGwnIH1cclxuXTtcclxuZXhwb3J0IHsgcXVlcnlDb25zdHJ1Y3Rvck51bWJlciwgcXVlcnlDb25zdHJ1Y3RvclN0cmluZyB9IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfUG9seWdvbl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19HcmFwaGljc0xheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfcmVzdF9zdXBwb3J0X1F1ZXJ5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBSZWFjdCwgQWxsV2lkZ2V0UHJvcHMsIGpzeCxhcHBBY3Rpb25zIH0gZnJvbSBcImppbXUtY29yZVwiO1xyXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgSmltdU1hcFZpZXcgfSBmcm9tIFwiamltdS1hcmNnaXNcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IFNlbGVjdCwgT3B0aW9uLCBBbGVydCwgQnV0dG9uLCBJY29uIH0gZnJvbSBcImppbXUtdWlcIjtcclxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tIFwiLi90cmFuc2xhdGlvbnMvZGVmYXVsdFwiO1xyXG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IFF1ZXJ5IGZyb20gXCJlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeVwiO1xyXG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tIFwiZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllclwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIi4vY29tcG9uZW50cy9UYWJsZVwiO1xyXG5pbXBvcnQgY29ubmVjdG9yIGZyb20gJy4uL2Nvbm5lY3Rvcic7XHJcbmltcG9ydCBQb2x5Z29uIGZyb20gJ2VzcmkvZ2VvbWV0cnkvUG9seWdvbic7XHJcbmltcG9ydCBBdHRyaWJ1dGVUYWJsZUNvbm5lY3RvciBmcm9tIFwiLi4vY29ubmVjdG9yL2Nvbm5lY3RvclwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxyXG4gIEFsbFdpZGdldFByb3BzPElNQ29uZmlnPixcclxuICBhbnlcclxuPiB7XHJcbiAgZ3JhcGhpY0xheWVyRm91bmQgPSBuZXcgR3JhcGhpY3NMYXllcih7IGxpc3RNb2RlOiBcImhpZGVcIiwgdmlzaWJsZTogdHJ1ZSB9KTtcclxuICBncmFwaGljTGF5ZXJTZWxlY3RlZCA9IG5ldyBHcmFwaGljc0xheWVyKHsgbGlzdE1vZGU6IFwiaGlkZVwiLCB2aXNpYmxlOiB0cnVlIH0pO1xyXG5cclxuICBzdGF0aWMgYWN0aXZlViA9IG51bGw7XHJcbiAgc3RhdGljIGppbXVMYXllclZpZXd6ID0gbnVsbDtcclxuICBzdGF0aWMgYW55dmFyaWFibGUgPSBudWxsO1xyXG4gIHN0YXRpYyBjb25uZWN0b3IgPSBudWxsXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBqaW11TWFwVmlldzogbnVsbCxcclxuICAgICAgbGF5ZXJDb250ZW50czpbXSxcclxuICAgICAgY2hlY2tlZExheWVyXzpbXSxcclxuICAgICAgcmVzdWx0TGF5ZXJMaXN0OiBbXSxcclxuICAgICAgaXNMYXllclNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgcmVzdWx0c0xheWVyU2VsZWN0ZWQ6IFtdLFxyXG4gICAgICBjdXJyZW50VGFyZ2V0VGV4dDogbnVsbCxcclxuICAgICAgZ2VvbWV0cnk6IG51bGwsXHJcbiAgICAgIHR5cGVTZWxlY3RlZDogbnVsbCxcclxuICAgICAgbGlzdFNlcnZpY2VzOiBbXSxcclxuICAgICAgY3VycmVudEZpcnN0UXVlcnk6IFwiXCIsXHJcbiAgICAgIGN1cnJlbnRGaXJzdFF1ZXJ5VHlwZTogbnVsbCxcclxuICAgICAgZHJvcGRvd25WYWx1ZVF1ZXJ5OiBcInZhbG9yZVwiLFxyXG4gICAgICBmaXJzdFRleHRJbmNsdWRlZEhhbmRsZXI6IFwiMFwiLFxyXG4gICAgICBzZWNvbmRUZXh0SW5jbHVkZWRIYW5kbGVyOiBcIjBcIixcclxuICAgICAgdGFibGVzOiBbXSxcclxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcclxuICAgICAgY291bnRlcklzQ2hlY2tlZDogW10sXHJcbiAgICAgIGNoZWNrZWRUb1F1ZXJ5OiBbXSxcclxuICAgICAgdGFibGVDb3VudGVyOiAwLFxyXG4gICAgICB3aGVyZUNsYXVzZXM6IFtdLFxyXG4gICAgICB0YWJsZXNJZDogbnVsbCxcclxuICAgICAgaXNPcGVuOiBmYWxzZSxcclxuICAgICAgQW5kT3I6IFwiQU5EXCIsXHJcbiAgICAgIG9wZW5lZDogZmFsc2UsXHJcbiAgICAgIGF1dE9wZW46IHRydWUsXHJcbiAgICAgIG1vdXNlbGVhdmU6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIHRoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSB0aGlzLmFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICAvL0xheWVyXHJcbiAgICB0aGlzLm9uQ2hhbmdlU2VsZWN0TGF5ZXIgPSB0aGlzLm9uQ2hhbmdlU2VsZWN0TGF5ZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZ2V0UXVlcnlBdHRyaWJ1dGUgPSB0aGlzLmdldFF1ZXJ5QXR0cmlidXRlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmdldFF1ZXJ5ID0gdGhpcy5nZXRRdWVyeS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZW5kUXVlcnkgPSB0aGlzLnNlbmRRdWVyeS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy50aGlyZFF1ZXJ5ID0gdGhpcy50aGlyZFF1ZXJ5LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRyb3Bkb3duSXRlbUNsaWNrID0gdGhpcy5kcm9wZG93bkl0ZW1DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jaG9vc2VBbmRPciA9IHRoaXMuY2hvb3NlQW5kT3IuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY2xvc2VEcm9wID0gdGhpcy5jbG9zZURyb3AuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub3BlbkRyb3AgPSB0aGlzLm9wZW5Ecm9wLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNsb3NlRHJvcE9uY2xpY2tPdXRzaWRlID0gdGhpcy5jbG9zZURyb3BPbmNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbm1vdXNlTGVhdmUgPSB0aGlzLm9ubW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5nZXRBbGxDaGVja2VkTGF5ZXJzID0gdGhpcy5nZXRBbGxDaGVja2VkTGF5ZXJzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmdldEFsbEppbXVMYXllclZpZXdzID0gdGhpcy5nZXRBbGxKaW11TGF5ZXJWaWV3cy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24gPSB0aGlzLmNvbm5lY3Rvcl9mdW5jdGlvbi5iaW5kKHRoaXMpO1xyXG5cclxuICB9XHJcblxyXG4gIG5scyA9IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pbnRsXHJcbiAgICAgID8gdGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlc1tpZF0sXHJcbiAgICAgICAgfSlcclxuICAgICAgOiBpZDtcclxuICB9O1xyXG5cclxuICBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcihqbXY6IEppbXVNYXBWaWV3KSB7XHJcbiAgICBpZiAoam12KSB7XHJcbiAgICAgIGptdi52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljTGF5ZXJGb3VuZCk7XHJcbiAgICAgIGptdi52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljTGF5ZXJTZWxlY3RlZCk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdExheWVyTGlzdCA9IFtdO1xyXG4gICAgICBqbXYudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGYudHlwZSA9PT0gXCJmZWF0dXJlXCIpIHtcclxuICAgICAgICAgIGptdi52aWV3LndoZW5MYXllclZpZXcoZikudGhlbigobGF5ZXJWaWV3KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KCk7XHJcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gXCIxPTFcIjtcclxuICAgICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW1wiKlwiXTtcclxuICAgICAgICAgICAgbGF5ZXJWaWV3LmZpbHRlciA9IHtcclxuICAgICAgICAgICAgICB3aGVyZTogcXVlcnkud2hlcmUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGYudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsYXllclZpZXcudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXN1bHRMYXllckxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IGYsXHJcbiAgICAgICAgICAgIGxhYmVsOiBmLnRpdGxlLFxyXG4gICAgICAgICAgICB2YWx1ZTogaW5kZXgsXHJcbiAgICAgICAgICAgIGxheWVySUQ6IGYubGF5ZXJJZCxcclxuICAgICAgICAgICAgdXJsU2VydmljZVNlcnZlcjogZi51cmwsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBXaWRnZXQuYWN0aXZlVj1qbXY7XHJcbiAgICAgIFdpZGdldC5qaW11TGF5ZXJWaWV3eiA9IGptdj8uamltdUxheWVyVmlld3M7XHJcbiAgICAgIFdpZGdldC5jb25uZWN0b3IgPSBuZXcgQXR0cmlidXRlVGFibGVDb25uZWN0b3Ioam12LHRoaXMpXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHJlc3VsdExheWVyTGlzdDogcmVzdWx0TGF5ZXJMaXN0LFxyXG4gICAgICAgIGppbXVNYXBWaWV3OiBqbXYsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0xheWVyU2VsZWN0ZWQgIT09IHByZXZQcm9wcy5pc0xheWVyU2VsZWN0ZWQpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCLDqCBzdGF0byBzZWxlemlvbmF0byB1biBsYXllclwiKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcyAhPT0gcHJldlByb3BzLndoZXJlQ2xhdXNlcykge1xyXG4gICAgICAvLyB0aGlzLnNldFN0YXRlKHt3aGVyZUNsYXVzZXM6IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzfSlcclxuICAgIH1cclxuICAgIGlmIChwcmV2UHJvcHMuc3RhdGUgPT0gXCJDTE9TRURcIikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpc0xheWVyU2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIGN1cnJlbnRUYXJnZXRUZXh0OiBudWxsLFxyXG4gICAgICAgIGdlb21ldHJ5OiBudWxsLFxyXG4gICAgICAgIHR5cGVTZWxlY3RlZDogbnVsbCxcclxuICAgICAgICBsaXN0U2VydmljZXM6IFtdLFxyXG4gICAgICAgIGN1cnJlbnRGaXJzdFF1ZXJ5OiBcIlwiLFxyXG4gICAgICAgIGN1cnJlbnRGaXJzdFF1ZXJ5VHlwZTogbnVsbCxcclxuICAgICAgICBkcm9wZG93blZhbHVlUXVlcnk6IFwidmFsb3JlXCIsXHJcbiAgICAgICAgZmlyc3RUZXh0SW5jbHVkZWRIYW5kbGVyOiBcIjBcIixcclxuICAgICAgICBzZWNvbmRUZXh0SW5jbHVkZWRIYW5kbGVyOiBcIjBcIixcclxuICAgICAgICB0YWJsZXM6IFtdLFxyXG4gICAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXHJcbiAgICAgICAgY291bnRlcklzQ2hlY2tlZDogW10sXHJcbiAgICAgICAgY2hlY2tlZFRvUXVlcnk6IFtdLFxyXG4gICAgICAgIHRhYmxlQ291bnRlcjogMCxcclxuICAgICAgICB3aGVyZUNsYXVzZXM6IFtdLFxyXG4gICAgICAgIHRhYmxlc0lkOiBudWxsLFxyXG4gICAgICAgIGlzT3BlbjogZmFsc2UsXHJcbiAgICAgICAgQW5kT3I6IFwiQU5EXCIsXHJcbiAgICAgICAgb3BlbmVkOiBmYWxzZSxcclxuICAgICAgICBhdXRPcGVuOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge31cclxuICAvKio9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICogRVZFTlQgQ0xJQ0sgU0VMRUNUXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuICBhc3luYyBnZXRRdWVyeUF0dHJpYnV0ZShlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1sxXS52YWx1ZSlcclxuICAgIGlmICghdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMubGVuZ3RoKSB7XHJcbiAgICAgIGxldCB3aGVyZUNsYXVzZSA9IHtcclxuICAgICAgICBpZDogZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMV0udmFsdWUsXHJcbiAgICAgICAgYXR0cmlidXRlUXVlcnk6IGUuY3VycmVudFRhcmdldC5uYW1lLFxyXG4gICAgICAgIGF0dHJpYnV0ZVF1ZXJ5VHlwZTogZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXMuZGF0YXR5cGUudmFsdWUsXHJcbiAgICAgICAgcXVlcnlWYWx1ZTogXCI9XCIsXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHdoZXJlQ2xhdXNlczogW3doZXJlQ2xhdXNlXSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5SW5kZXggPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlc1xyXG4gICAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmlkKVxyXG4gICAgICAgIC5pbmRleE9mKGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlKTtcclxuICAgICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5tYXAoKG9iaikgPT4ge1xyXG4gICAgICAgICAgaWYgKG9iai5pZCA9PT0gcXVlcnlJbmRleC50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgICAgICAuLi5vYmosXHJcbiAgICAgICAgICAgICAgYXR0cmlidXRlUXVlcnk6IGUuY3VycmVudFRhcmdldC5uYW1lLFxyXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZVF1ZXJ5VHlwZTogZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXMuZGF0YXR5cGUudmFsdWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlc1txdWVyeUluZGV4XSA9IG9ialxyXG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdoZXJlQ2xhdXNlczogZmlsdGVyZWRXaGVyZUNsYXVzZXMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHsgb2JqIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHdoZXJlQ2xhdXNlID0ge1xyXG4gICAgICAgICAgaWQ6IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlLFxyXG4gICAgICAgICAgYXR0cmlidXRlUXVlcnk6IGUuY3VycmVudFRhcmdldC5uYW1lLFxyXG4gICAgICAgICAgYXR0cmlidXRlUXVlcnlUeXBlOiBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlcy5kYXRhdHlwZS52YWx1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgd2hlcmVDbGF1c2VzOiBbLi4udGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMsIHdoZXJlQ2xhdXNlXSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBmb3IgY2FsbGVkIG9uIGRyb3Agc2VsZWN0IGxpc3RcclxuICBhc3luYyBnZXRRdWVyeShlKSB7XHJcbiAgICBsZXQgY2xpY2tlZFF1ZXJ5VGFibGVJZCA9IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlO1xyXG4gICAgbGV0IGN1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGU7XHJcbiAgICBsZXQgcXVlcnlJbmRleDtcclxuICAgIGlmICh0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5sZW5ndGgpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJjaSBzb25vIHBpw7kgcXVlcnlcIik7XHJcbiAgICAgIHF1ZXJ5SW5kZXggPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlc1xyXG4gICAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmlkKVxyXG4gICAgICAgIC5pbmRleE9mKGNsaWNrZWRRdWVyeVRhYmxlSWQpO1xyXG4gICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLm1hcCgob2JqKSA9PiB7XHJcbiAgICAgICAgICBpZiAob2JqLmlkID09PSBxdWVyeUluZGV4LnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgY3VycmVudENsaWNrZWRRdWVyeUF0dHJpYnV0ZSA9IG9iai5hdHRyaWJ1dGVRdWVyeTtcclxuICAgICAgICAgICAgb2JqID0geyAuLi5vYmosIHF1ZXJ5VmFsdWU6IGUuY3VycmVudFRhcmdldC5uYW1lIH07XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlc1txdWVyeUluZGV4XSA9IG9ialxyXG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdoZXJlQ2xhdXNlczogZmlsdGVyZWRXaGVyZUNsYXVzZXMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHsgb2JqIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQubmFtZSA9PT0gXCJJTlwiIHx8IGUuY3VycmVudFRhcmdldC5uYW1lID09PSBcIk5PVF9JTlwiKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGlmIChmLnRpdGxlID09PSB0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy53aGVuTGF5ZXJWaWV3KGYpLnRoZW4oKGxheWVyVmlldykgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KCk7XHJcbiAgICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlfSBpcyBub3QgbnVsbGA7XHJcbiAgICAgICAgICAgICAgLy8gcXVlcnkub3V0RmllbGRzID0gW3RoaXMuc3RhdGUuY3VycmVudEZpcnN0UXVlcnldO1xyXG4gICAgICAgICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlfWBdO1xyXG4gICAgICAgICAgICAgIGxheWVyVmlldy5maWx0ZXIgPSB7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogcXVlcnkud2hlcmUsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAvLyBmLnZpc2libGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgLy8gbGF5ZXJWaWV3LnZpc2libGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGYucXVlcnlGZWF0dXJlcyhxdWVyeSk7XHJcbiAgICAgICAgICAgICAgcmVzdWx0cy50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbFRoaXJkUXVlcnkgPSBbXTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlbC5hdHRyaWJ1dGVzKVxyXG4gICAgICAgICAgICAgICAgICBkZXRhaWxUaGlyZFF1ZXJ5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBPYmplY3QudmFsdWVzKGVsLmF0dHJpYnV0ZXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBPYmplY3QudmFsdWVzKGVsLmF0dHJpYnV0ZXMpLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMubWFwKChvYmopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmlkID09PSBxdWVyeUluZGV4LnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IHsgLi4ub2JqLCBpZkluT3JOb3RJblF1ZXJ5VmFsdWU6IGRldGFpbFRoaXJkUXVlcnkgfTtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlc1txdWVyeUluZGV4XSA9IG9ialxyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlczogZmlsdGVyZWRXaGVyZUNsYXVzZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgb2JqIH07XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9UT0RPIGxhIHNlbmRRdWVyeSBhbmRyw6AgcmlzaXN0ZW1hdGEgcXVhbmRvIHNpIGFnZ2l1bmdlcsOgIG9sdHJlIGFsbCdlc3ByZXNzaW9uZSBhbmNoZSBpbCBzZXQgZGkgZXNwcmVzc2lvbmlcclxuICAvLyBwZXJjaMOpIG9yYSBwZXIgbCdBTkQgZmEgaWwgY2ljbG8gZm9yIHN1IG9nbmkgd2hlcmUgaW5zZXJpdGEgbmVsbCdhcnJheSBtYSBkb3BvIHNhcsOgIG5lY2Vzc2FyaW8gc2NvbXBvcnJlIHBlciBjcmVhcmUgbGUgZXNwcmVzc2lvbmlcclxuXHJcbiAgLy8gc3RlcDEgXHJcbiAgYXN5bmMgc2VuZFF1ZXJ5KCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuQW5kT3IgPT09IFwiQU5EXCIpIHtcclxuICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZm9yRWFjaCgoZWwsIGlkKSA9PiB7XHJcbiAgICAgICAgbGV0IGF0dHJpYnV0ZVF1ZXJ5ID0gZWwuYXR0cmlidXRlUXVlcnk7XHJcbiAgICAgICAgbGV0IHF1ZXJ5VmFsdWUgPSBlbC5xdWVyeVZhbHVlO1xyXG4gICAgICAgIGxldCB2YWx1ZTtcclxuICAgICAgICBpZiAocXVlcnlWYWx1ZSA9PT0gXCJpcyBudWxsXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJpcyBub3QgbnVsbFwiKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9IGVsLnZhbHVlPy50eHQgPz8gXCJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiSU5cIiB8fCBxdWVyeVZhbHVlID09PSBcIk5PVF9JTlwiKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9IFtdO1xyXG4gICAgICAgICAgZWwuY2hlY2tlZExpc3QuZm9yRWFjaCgoZWwpID0+IHZhbHVlLnB1c2goZWwuY2hlY2tWYWx1ZSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICBxdWVyeVZhbHVlID09PSBcImluY2x1ZGVkXCIgfHxcclxuICAgICAgICAgIHF1ZXJ5VmFsdWUgPT09IFwiaXNfbm90X2luY2x1ZGVkXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHZhbHVlID0ge1xyXG4gICAgICAgICAgICBmaXJzdFR4dDogZWwuZmlyc3RUeHQudmFsdWUsXHJcbiAgICAgICAgICAgIHNlY29uZFR4dDogZWwuc2Vjb25kVHh0LnZhbHVlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmFsdWUgPSBlbC52YWx1ZT8udHh0ID8/IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZi50aXRsZSA9PT0gdGhpcy5zdGF0ZS5jdXJyZW50VGFyZ2V0VGV4dCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy53aGVuTGF5ZXJWaWV3KGYpLnRoZW4oKGxheWVyVmlldykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyeUNvbnN0cnVjdG9yKCAvL3N0ZXAgMiBzdGFydCBxdWVyeWluZ1xyXG4gICAgICAgICAgICAgICAgICBsYXllclZpZXcsXHJcbiAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgICBxdWVyeVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5BbmRPcixcclxuICAgICAgICAgICAgICAgICAgY29ubmVjdG9yXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKTtcclxuICAgICAgbGV0IG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5OiBhbnkgPSBbXTtcclxuICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZm9yRWFjaCgoZWwsIGlkKSA9PiB7XHJcbiAgICAgICAgbGV0IGF0dHJpYnV0ZVF1ZXJ5ID0gZWwuYXR0cmlidXRlUXVlcnk7XHJcbiAgICAgICAgbGV0IHF1ZXJ5VmFsdWUgPSBlbC5xdWVyeVZhbHVlO1xyXG4gICAgICAgIGxldCB2YWx1ZTtcclxuICAgICAgICBpZiAocXVlcnlWYWx1ZSA9PT0gXCJpcyBudWxsXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJpcyBub3QgbnVsbFwiKSB7XHJcbiAgICAgICAgICBsZXQgcXVlcnlJbiA9IGAke2F0dHJpYnV0ZVF1ZXJ5fSAke3F1ZXJ5VmFsdWV9YDtcclxuICAgICAgICAgIG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5LnB1c2gocXVlcnlJbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChxdWVyeVZhbHVlID09PSBcIklOXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJOT1RfSU5cIikge1xyXG4gICAgICAgICAgdmFsdWUgPSBbXTtcclxuICAgICAgICAgIGVsLmNoZWNrZWRMaXN0LmZvckVhY2goKGVsKSA9PiB2YWx1ZS5wdXNoKGVsLmNoZWNrVmFsdWUpKTtcclxuICAgICAgICAgIGlmICh0aGlzLmNvbnRhaW5zQW55TGV0dGVycyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgbGV0IHF1ZXJ5SW4gPSBgJHthdHRyaWJ1dGVRdWVyeX0gSU4gKCR7XHJcbiAgICAgICAgICAgICAgXCInXCIgKyB2YWx1ZS5qb2luKFwiJywgJ1wiKSArIFwiJ1wiXHJcbiAgICAgICAgICAgIH0pYDtcclxuICAgICAgICAgICAgbm9ybWFsaXplZFdoZXJlVG9TZW5kUXVlcnkucHVzaChxdWVyeUluKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBxdWVyeUluID0gYCR7YXR0cmlidXRlUXVlcnl9IElOICgke3ZhbHVlLmpvaW4oXCIsXCIpfSlgO1xyXG4gICAgICAgICAgICBub3JtYWxpemVkV2hlcmVUb1NlbmRRdWVyeS5wdXNoKHF1ZXJ5SW4pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocXVlcnlWYWx1ZSA9PT0gXCJpbmNsdWRlZFwiIHx8IHF1ZXJ5VmFsdWUgPT09IFwiaXNfbm90X2luY2x1ZGVkXCIpIHtcclxuICAgICAgICAgIGxldCBxdWVyeUluO1xyXG4gICAgICAgICAgcXVlcnlWYWx1ZSA9PT0gXCJpbmNsdWRlZFwiXHJcbiAgICAgICAgICAgID8gKHF1ZXJ5SW4gPSBgJHthdHRyaWJ1dGVRdWVyeX0gPiAke2VsLmZpcnN0VHh0LnZhbHVlfSBBTkQgJHthdHRyaWJ1dGVRdWVyeX0gPCAke2VsLnNlY29uZFR4dC52YWx1ZX1gKVxyXG4gICAgICAgICAgICA6IChxdWVyeUluID0gYCR7YXR0cmlidXRlUXVlcnl9IDwgJHtlbC5maXJzdFR4dC52YWx1ZX0gT1IgJHthdHRyaWJ1dGVRdWVyeX0gPiAke2VsLnNlY29uZFR4dC52YWx1ZX1gKTtcclxuICAgICAgICAgIG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5LnB1c2gocXVlcnlJbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZhbHVlID0gZWwudmFsdWU/LnR4dCA/PyBcIlwiO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY29udGFpbnNBbnlMZXR0ZXJzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBsZXQgcXVlcnlJbnB1dCA9IGAke2F0dHJpYnV0ZVF1ZXJ5fSAke3F1ZXJ5VmFsdWV9ICcke3ZhbHVlfSdgO1xyXG4gICAgICAgICAgICBub3JtYWxpemVkV2hlcmVUb1NlbmRRdWVyeS5wdXNoKHF1ZXJ5SW5wdXQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHF1ZXJ5SW5wdXQgPSBgJHthdHRyaWJ1dGVRdWVyeX0gJHtxdWVyeVZhbHVlfSAke3ZhbHVlfWA7XHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5LnB1c2gocXVlcnlJbnB1dCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGYudGl0bGUgPT09IHRoaXMuc3RhdGUuY3VycmVudFRhcmdldFRleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LndoZW5MYXllclZpZXcoZikudGhlbigobGF5ZXJWaWV3KSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IHF1ZXJ5T3IgPSBgJHtub3JtYWxpemVkV2hlcmVUb1NlbmRRdWVyeS5qb2luKFwiIE9SIFwiKX1gO1xyXG4gICAgICAgICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgKmBdO1xyXG4gICAgICAgICAgICAgIGxheWVyVmlldy5maWx0ZXIgPSB7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogcXVlcnkud2hlcmUsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBsYXllclZpZXcudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyB0aGlyZFF1ZXJ5KGUpIHtcclxuICAgIC8vIGNvbnN0IGFyckNob29zZSA9IFtdXHJcbiAgICBjb25zdCBjdXJyZW50UXVlcnlUZXN0ID0gZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGYudGl0bGUgPT09IHRoaXMuc3RhdGUuY3VycmVudFRhcmdldFRleHQpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcud2hlbkxheWVyVmlldyhmKS50aGVuKChsYXllclZpZXcpID0+IHtcclxuICAgICAgICAgIHRoaXMuaW5RdWVyeUNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBsYXllclZpZXcsXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudEZpcnN0UXVlcnksXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFNlY29uZFF1ZXJ5LFxyXG4gICAgICAgICAgICBjdXJyZW50UXVlcnlUZXN0XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uQ2hhbmdlU2VsZWN0TGF5ZXIoZSkge1xyXG4gICAgdGhpcy5ncmFwaGljTGF5ZXJGb3VuZC5yZW1vdmVBbGwoKTtcclxuICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XHJcbiAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGYudGl0bGUgPT09IGUuY3VycmVudFRhcmdldC5pbm5lclRleHQpIHtcclxuICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy53aGVuTGF5ZXJWaWV3KGYpLnRoZW4oKGxheWVyVmlldykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICByZXN1bHRzTGF5ZXJTZWxlY3RlZDogZixcclxuICAgICAgICAgICAgICBjdXJyZW50VGFyZ2V0VGV4dDogZS5jdXJyZW50VGFyZ2V0LmlubmVyVGV4dCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiY2hlY2tlZExheWVyc1wiLFtmLmlkXSkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZFRhYmxlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHRhYmxlczogWy4uLnRoaXMuc3RhdGUudGFibGVzLCB7IGlkOiB0aGlzLnN0YXRlLnRhYmxlQ291bnRlciB9XSxcclxuICAgICAgdGFibGVDb3VudGVyOiB0aGlzLnN0YXRlLnRhYmxlQ291bnRlciArIDEsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBhZGRUd29UYWJsZSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICB0YWJsZXM6IFtcclxuICAgICAgICAuLi50aGlzLnN0YXRlLnRhYmxlcyxcclxuICAgICAgICB7IGlkOiB0aGlzLnN0YXRlLnRhYmxlQ291bnRlciB9LFxyXG4gICAgICAgIHsgaWQ6IHRoaXMuc3RhdGUudGFibGVDb3VudGVyIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIHRhYmxlQ291bnRlcjogdGhpcy5zdGF0ZS50YWJsZUNvdW50ZXIgKyAxLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZGVsZXRlVGFibGUgPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IG5ld1RhYmxlcyA9IHRoaXMuc3RhdGUudGFibGVzLmZpbHRlcigoZWwpID0+IHtcclxuICAgICAgcmV0dXJuIGVsLmlkICE9PSBpZDtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGVsZXRlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmZpbHRlcigoZWwpID0+IHtcclxuICAgICAgcmV0dXJuIGVsLmlkICE9PSBpZC50b1N0cmluZygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdGFibGVzOiBbLi4ubmV3VGFibGVzXSxcclxuICAgICAgd2hlcmVDbGF1c2VzOiBkZWxldGVkV2hlcmVDbGF1c2VzLFxyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS50YWJsZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHdoZXJlQ2xhdXNlczogW10sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHRleHRJbnB1dEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgbGV0IHR4dCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgbGV0IGN1cnJlbnRUYWJsZUlkID0gZS50YXJnZXQuYXR0cmlidXRlc1swXS52YWx1ZTtcclxuICAgIHRoaXMucXVlcnlUZXh0Q29uc3RydWN0b3IodHh0LCBjdXJyZW50VGFibGVJZCk7XHJcbiAgfTtcclxuICB0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgbGV0IHR4dCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgbGV0IGN1cnJlbnRUYWJsZUlkID0gZS50YXJnZXQuYXR0cmlidXRlc1swXS52YWx1ZTtcclxuICAgIGxldCBpbnB1dCA9IFwiZmlyc3RcIjtcclxuICAgIHRoaXMucXVlcnlUZXh0SW5jbHVkZWRDb25zdHJ1Y3Rvcih0eHQsIGN1cnJlbnRUYWJsZUlkLCBpbnB1dCk7XHJcbiAgfTtcclxuXHJcbiAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBsZXQgdHh0ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBsZXQgY3VycmVudFRhYmxlSWQgPSBlLnRhcmdldC5hdHRyaWJ1dGVzWzBdLnZhbHVlO1xyXG4gICAgbGV0IGlucHV0ID0gXCJzZWNvbmRcIjtcclxuICAgIHRoaXMucXVlcnlUZXh0SW5jbHVkZWRDb25zdHJ1Y3Rvcih0eHQsIGN1cnJlbnRUYWJsZUlkLCBpbnB1dCk7XHJcbiAgfTtcclxuICB1bml2b2NvU2VsZWN0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBsZXQgdHh0ID0gZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgbGV0IGN1cnJlbnRUYWJsZUlkID0gZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMl0udmFsdWU7XHJcbiAgICB0aGlzLnF1ZXJ5VGV4dENvbnN0cnVjdG9yKHR4dCwgY3VycmVudFRhYmxlSWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnRhaW5zQW55TGV0dGVycyA9IChzdHIpID0+IHtcclxuICAgIHJldHVybiAvW2EtekEtWl0vLnRlc3Qoc3RyKTtcclxuICB9O1xyXG5cclxuICBxdWVyeVRleHRDb25zdHJ1Y3RvciA9ICh0eHQsIGN1cnJlbnRUYWJsZUlkKSA9PiB7XHJcbiAgICBsZXQgcXVlcnlJbmRleDtcclxuICAgIGlmICh0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5sZW5ndGgpIHtcclxuICAgICAgcXVlcnlJbmRleCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzXHJcbiAgICAgICAgLm1hcCgob2JqKSA9PiBvYmouaWQpXHJcbiAgICAgICAgLmluZGV4T2YoY3VycmVudFRhYmxlSWQpO1xyXG4gICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLm1hcCgob2JqKSA9PiB7XHJcbiAgICAgICAgICBpZiAob2JqLmlkID09PSBxdWVyeUluZGV4LnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgb2JqID0geyAuLi5vYmosIHZhbHVlOiB7IHR4dDogdHh0IH0gfTtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzW3F1ZXJ5SW5kZXhdID0gb2JqXHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmZpbHRlcihcclxuICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcclxuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4geyBvYmogfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgcXVlcnlUZXh0SW5jbHVkZWRDb25zdHJ1Y3RvciA9ICh0eHQsIGN1cnJlbnRUYWJsZUlkLCBpbnB1dCkgPT4ge1xyXG4gICAgbGV0IHF1ZXJ5SW5kZXg7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMubGVuZ3RoKSB7XHJcbiAgICAgIHF1ZXJ5SW5kZXggPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlc1xyXG4gICAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmlkKVxyXG4gICAgICAgIC5pbmRleE9mKGN1cnJlbnRUYWJsZUlkKTtcclxuICAgICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5tYXAoKG9iaikgPT4ge1xyXG4gICAgICAgICAgaWYgKG9iai5pZCA9PT0gcXVlcnlJbmRleC50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgIGlucHV0ID09PSBcImZpcnN0XCJcclxuICAgICAgICAgICAgICA/IChvYmogPSB7IC4uLm9iaiwgZmlyc3RUeHQ6IHsgdmFsdWU6IHR4dCB9IH0pXHJcbiAgICAgICAgICAgICAgOiAob2JqID0geyAuLi5vYmosIHNlY29uZFR4dDogeyB2YWx1ZTogdHh0IH0gfSk7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlc1txdWVyeUluZGV4XSA9IG9ialxyXG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdoZXJlQ2xhdXNlczogZmlsdGVyZWRXaGVyZUNsYXVzZXMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHsgb2JqIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBkcm9wZG93bkl0ZW1DbGljayA9IChlKSA9PiB7XHJcbiAgICBsZXQgY2xpY2tlZFF1ZXJ5VGFibGVJZCA9IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzJdLnZhbHVlO1xyXG4gICAgbGV0IGNsaWNrZWRWYWx1ZSA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgIGxldCBjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlO1xyXG4gICAgbGV0IHF1ZXJ5SW5kZXg7XHJcbiAgICBxdWVyeUluZGV4ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXNcclxuICAgICAgLm1hcCgob2JqKSA9PiBvYmouaWQpXHJcbiAgICAgIC5pbmRleE9mKGNsaWNrZWRRdWVyeVRhYmxlSWQpO1xyXG4gICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMubWFwKChvYmopID0+IHtcclxuICAgICAgICBpZiAob2JqLmlkID09PSBxdWVyeUluZGV4LnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgIG9iaiA9IHsgLi4ub2JqLCBkcm9wZG93blZhbHVlUXVlcnk6IGNsaWNrZWRWYWx1ZSB9O1xyXG4gICAgICAgICAgLy8gcmV0dXJuIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzW3F1ZXJ5SW5kZXhdID0gb2JqXHJcbiAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5maWx0ZXIoXHJcbiAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XHJcbiAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgd2hlcmVDbGF1c2VzOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBvYmogfTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LnZhbHVlID09PSBcInVuaXZvY29cIikge1xyXG4gICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLm1hcCgob2JqKSA9PiB7XHJcbiAgICAgICAgICBpZiAob2JqLmlkID09PSBxdWVyeUluZGV4LnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgY3VycmVudENsaWNrZWRRdWVyeUF0dHJpYnV0ZSA9IG9iai5hdHRyaWJ1dGVRdWVyeTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcclxuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGYudGl0bGUgPT09IHRoaXMuc3RhdGUuY3VycmVudFRhcmdldFRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgLndoZW5MYXllclZpZXcoZilcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigobGF5ZXJWaWV3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlfSBpcyBub3QgbnVsbGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbYCR7Y3VycmVudENsaWNrZWRRdWVyeUF0dHJpYnV0ZX1gXTtcclxuICAgICAgICAgICAgICAgICAgICAgIGxheWVyVmlldy5maWx0ZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiBxdWVyeS53aGVyZSxcclxuICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gZi5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbFRoaXJkUXVlcnkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsVGhpcmRRdWVyeS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBPYmplY3QudmFsdWVzKGVsLmF0dHJpYnV0ZXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IE9iamVjdC52YWx1ZXMoZWwuYXR0cmlidXRlcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvYmopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5pZCA9PT0gcXVlcnlJbmRleC50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ub2JqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWZJbk9yTm90SW5RdWVyeVZhbHVlOiBkZXRhaWxUaGlyZFF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25WYWx1ZVF1ZXJ5OiBjbGlja2VkVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXNbcXVlcnlJbmRleF0gPSBvYmpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGEuaWQgPT0gYi5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlczogZmlsdGVyZWRXaGVyZUNsYXVzZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgb2JqIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRyb3Bkb3duVmFsdWVRdWVyeTogZS50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBkcm9wRG93biA9IChpZCkgPT4ge1xyXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAvLyBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYXV0T3BlbjogdHJ1ZSB9KTtcclxuICAgIGxldCBxdWVyeUluZGV4O1xyXG4gICAgcXVlcnlJbmRleCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzXHJcbiAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmlkKVxyXG4gICAgICAuaW5kZXhPZihpZC50b1N0cmluZygpKTtcclxuICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xyXG4gICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLm1hcCgob2JqKSA9PiB7XHJcbiAgICAgICAgaWYgKG9iai5pZCA9PT0gcXVlcnlJbmRleC50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICBpZiAoIW9iai5pc09wZW4pIHtcclxuICAgICAgICAgICAgb2JqID0geyAuLi5vYmosIGlzT3BlbjogdHJ1ZSB9O1xyXG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdoZXJlQ2xhdXNlczogZmlsdGVyZWRXaGVyZUNsYXVzZXMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb2JqID0geyAuLi5vYmosIGlzT3BlbjogZmFsc2UgfTtcclxuICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xyXG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3aGVyZUNsYXVzZXM6IGZpbHRlcmVkV2hlcmVDbGF1c2VzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIHJldHVybiB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlc1txdWVyeUluZGV4XSA9IG9ialxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBvYmogfTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBoYW5kbGVDaGVja0JveCA9IChldmVudCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlzQ2hlY2tlZDogZXZlbnQudGFyZ2V0LmNoZWNrZWQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBvbkNoYW5nZUNoZWNrQm94ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBsZXQgY3VycmVudElkID0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMuaWQudmFsdWU7XHJcbiAgICBsZXQgcXVlcnlJbmRleDtcclxuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICBxdWVyeUluZGV4ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXNcclxuICAgICAgICAubWFwKChvYmopID0+IG9iai5pZClcclxuICAgICAgICAuaW5kZXhPZihjdXJyZW50SWQpO1xyXG4gICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5tYXAoKG9iaikgPT4ge1xyXG4gICAgICAgICAgaWYgKG9iai5pZCA9PT0gcXVlcnlJbmRleC50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgIGlmICghb2JqLmNoZWNrZWRMaXN0KSB7XHJcbiAgICAgICAgICAgICAgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgLi4ub2JqLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZExpc3Q6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVmFsdWU6IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLm5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZXM6IGZpbHRlcmVkV2hlcmVDbGF1c2VzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZSBlbnRyaWVzIGZyb20gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZXM6IEFycmF5LmZyb20obmV3IFNldCh0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcykpLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGlmQWxyZWFkeUNoZWNrID0gb2JqLmNoZWNrZWRMaXN0XHJcbiAgICAgICAgICAgICAgICAubWFwKChvYmopID0+IG9iai5jaGVja1ZhbHVlKVxyXG4gICAgICAgICAgICAgICAgLmluZGV4T2YoZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgaWYgKGlmQWxyZWFkeUNoZWNrID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vbiDDqCBwcmVzZW50ZSBpbCB2YWxvcmUgdHJhIGkgY2hlY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgLi4ub2JqLFxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkTGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLm9iai5jaGVja2VkTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja1ZhbHVlOiBldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIG9iaiBvYmplY3QgaW4gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgICAgICAgIChhKSA9PiBhLmlkID09PSBvYmouaWRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIG9iaiBvYmplY3QgZnJvbSB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSB1cGRhdGVkIG9iaiBvYmplY3QgdG8gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMucHVzaChvYmopO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlczogdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZHVwbGljYXRlIGVudHJpZXMgZnJvbSB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZXM6IEFycmF5LmZyb20oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBTZXQodGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgIC8vICAgXCLDqCBnacOgIHByZXNlbnRlIHRyYSBpIHZhbG9yaSBxdWluZGkgbm9uIGFnZ2l1bnRvIGFsbGEgbGlzdGFcIlxyXG4gICAgICAgICAgICAgICAgLy8gKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB7IG9iaiB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgIC8vIEZpbmQgdGhlIG9iaiBvYmplY3QgaW4gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxyXG4gICAgICBjb25zdCBvYmogPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5maW5kKChhKSA9PiBhLmlkID09PSBjdXJyZW50SWQpO1xyXG4gICAgICAvLyBSZW1vdmUgdGhlIGNoZWNrVmFsdWUgZnJvbSB0aGUgY2hlY2tlZExpc3QgYXJyYXlcclxuICAgICAgb2JqLmNoZWNrZWRMaXN0ID0gb2JqLmNoZWNrZWRMaXN0LmZpbHRlcihcclxuICAgICAgICAoYSkgPT4gYS5jaGVja1ZhbHVlICE9PSBldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlXHJcbiAgICAgICk7XHJcbiAgICAgIC8vIFVwZGF0ZSB0aGUgb2JqIG9iamVjdCBpbiB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZmluZEluZGV4KFxyXG4gICAgICAgIChhKSA9PiBhLmlkID09PSBjdXJyZW50SWRcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXNbaW5kZXhdID0gb2JqO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHdoZXJlQ2xhdXNlczogdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGUgZW50cmllcyBmcm9tIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZXM6IEFycmF5LmZyb20obmV3IFNldCh0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcykpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHF1ZXJ5Q29uc3RydWN0b3IgPSAoXHJcbiAgICBsYXllclZpZXcsXHJcbiAgICBmaXJzdFF1ZXJ5LFxyXG4gICAgcXVlcnlSZXF1ZXN0LFxyXG4gICAgc2Vjb25kUXVlcnlUYXJnZXQsXHJcbiAgICBBbmRPcixcclxuICAgIGNvbm5lY3RvclxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKTtcclxuICAgIHN3aXRjaCAocXVlcnlSZXF1ZXN0KSB7XHJcbiAgICAgIGNhc2UgXCJMSUtFJVwiOlxyXG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gTElLRSAnJHtzZWNvbmRRdWVyeVRhcmdldH0lJ2A7XHJcbiAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW2Ake2ZpcnN0UXVlcnl9YF07XHJcbiAgICAgICAgbGF5ZXJWaWV3LmZpbHRlciA9IHtcclxuICAgICAgICAgIHdoZXJlOiBxdWVyeS53aGVyZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGYudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYCR7Zmlyc3RRdWVyeX0gTElLRSAnJHtzZWNvbmRRdWVyeVRhcmdldH0lJ2ApO1xyXG4gICAgICAgIGxheWVyVmlldy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIiVMSUtFXCI6XHJcbiAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSBMSUtFICclJHtzZWNvbmRRdWVyeVRhcmdldH0nYDtcclxuICAgICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbYCR7Zmlyc3RRdWVyeX1gXTtcclxuICAgICAgICBsYXllclZpZXcuZmlsdGVyID0ge1xyXG4gICAgICAgICAgd2hlcmU6IHF1ZXJ5LndoZXJlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gZi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHtmaXJzdFF1ZXJ5fSBMSUtFICclJHtzZWNvbmRRdWVyeVRhcmdldH0nYCk7XHJcbiAgICAgICAgbGF5ZXJWaWV3LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiJUxJS0UlXCI6XHJcbiAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSBMSUtFICclJHtzZWNvbmRRdWVyeVRhcmdldH0lJ2A7XHJcbiAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW2Ake2ZpcnN0UXVlcnl9YF07XHJcbiAgICAgICAgbGF5ZXJWaWV3LmZpbHRlciA9IHtcclxuICAgICAgICAgIHdoZXJlOiBxdWVyeS53aGVyZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGYudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYCR7Zmlyc3RRdWVyeX0gTElLRSAnJSR7c2Vjb25kUXVlcnlUYXJnZXR9J2ApO1xyXG4gICAgICAgIGxheWVyVmlldy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIk5PVCBMSUtFXCI6XHJcbiAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSBOT1QgTElLRSAnJSR7c2Vjb25kUXVlcnlUYXJnZXR9JSdgO1xyXG4gICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtmaXJzdFF1ZXJ5fWBdO1xyXG4gICAgICAgIGxheWVyVmlldy5maWx0ZXIgPSB7XHJcbiAgICAgICAgICB3aGVyZTogcXVlcnkud2hlcmUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBmLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAke2ZpcnN0UXVlcnl9IE5PVCBMSUtFICclJHtzZWNvbmRRdWVyeVRhcmdldH0lJ2ApO1xyXG4gICAgICAgIGxheWVyVmlldy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImlzIG51bGxcIjpcclxuICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9IGlzIG51bGxgO1xyXG4gICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtmaXJzdFF1ZXJ5fWBdO1xyXG4gICAgICAgIGxheWVyVmlldy5maWx0ZXIgPSB7XHJcbiAgICAgICAgICB3aGVyZTogcXVlcnkud2hlcmUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBmLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAke2ZpcnN0UXVlcnl9IGlzIG51bGxgKTtcclxuICAgICAgICBsYXllclZpZXcudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJpcyBub3QgbnVsbFwiOlxyXG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gaXMgbm90IG51bGxgO1xyXG4gICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtmaXJzdFF1ZXJ5fWBdO1xyXG4gICAgICAgIGxheWVyVmlldy5maWx0ZXIgPSB7XHJcbiAgICAgICAgICB3aGVyZTogcXVlcnkud2hlcmUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBmLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAke2ZpcnN0UXVlcnl9IGlzIG5vdCBudWxsYCk7XHJcbiAgICAgICAgbGF5ZXJWaWV3LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiSU5cIjpcclxuICAgICAgICBpZiAodGhpcy5jb250YWluc0FueUxldHRlcnMoc2Vjb25kUXVlcnlUYXJnZXQpKSB7XHJcbiAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9IElOICgke1xyXG4gICAgICAgICAgICBcIidcIiArIHNlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCInLCAnXCIpICsgXCInXCJcclxuICAgICAgICAgIH0pYDtcclxuICAgICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtmaXJzdFF1ZXJ5fWBdO1xyXG4gICAgICAgICAgbGF5ZXJWaWV3LmZpbHRlciA9IHtcclxuICAgICAgICAgICAgd2hlcmU6IHF1ZXJ5LndoZXJlLFxyXG4gICAgICAgICAgfTsgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9IElOICgke3NlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCIsXCIpfSlgO1xyXG4gICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW2Ake2ZpcnN0UXVlcnl9YF07XHJcbiAgICAgICAgICBsYXllclZpZXcuZmlsdGVyID0ge1xyXG4gICAgICAgICAgICB3aGVyZTogcXVlcnkud2hlcmUsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgLy8gZi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke2ZpcnN0UXVlcnl9IElOICgke3NlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCIsXCIpfSlgKTtcclxuICAgICAgICAgIGxheWVyVmlldy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIGxheWVyVmlldy5xdWVyeUZlYXR1cmVzKHF1ZXJ5KS50aGVuKGZ1bmN0aW9uKHJlc3VsdHMpe1xyXG4gICAgICAgICAgbGV0IGNoZWNrZWRMYXllcl8gPSBbbGF5ZXJWaWV3LmxheWVyLmlkXTtcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTGF5ZXJzQ29udGVudHMgPSBjb25uZWN0b3IuZ2V0U2VsZWN0ZWRDb250ZW50c0xheWVyKFtyZXN1bHRzLmZlYXR1cmVzXSxjaGVja2VkTGF5ZXJfKTtcclxuICAgICAgICAgIGNvbnN0IG51bWJlck9mQXR0cmlidXRlcyA9IGNvbm5lY3Rvci5nZXROdW1iZXJPZkF0dHJpYnV0ZXMoc2VsZWN0ZWRMYXllcnNDb250ZW50cyk7XHJcbiAgICAgICAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgICAgIHJlc3VsdHM6cmVzdWx0cyxcclxuICAgICAgICAgICAgYWxsQ2hlY2tlZExheWVyczpXaWRnZXQuYWN0aXZlVi52aWV3Lm1hcC5hbGxMYXllcnMuaXRlbXNcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFdpZGdldC5jb25uZWN0b3IuaW5pdChvYmopXHJcbiAgICAgICAgICBXaWRnZXQuY29ubmVjdG9yLmRpc3BhdGNoaW5nQWxsKCk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHRzLFwiY2hlY2sgcmVzdWx0c1wiKVxyXG4gICAgICAvLyBkaXNwYXRjaCAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cclxuICAgICAgLy8gdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24oe2NoZWNrZWRMYXllcl8sc2VsZWN0ZWRMYXllcnNDb250ZW50cyxudW1iZXJPZkF0dHJpYnV0ZXMscmVzdWx0czpbcmVzdWx0cy5mZWF0dXJlc10sbGF5ZXI6bGF5ZXJWaWV3LmxheWVyfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiTk9UX0lOXCI6XHJcbiAgICAgICAgcXVlcnkud2hlcmUgPSBgTk9UICAke2ZpcnN0UXVlcnl9IElOICgke3NlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCIsXCIpfSlgO1xyXG4gICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtmaXJzdFF1ZXJ5fWBdO1xyXG4gICAgICAgIGxheWVyVmlldy5maWx0ZXIgPSB7XHJcbiAgICAgICAgICB3aGVyZTogcXVlcnkud2hlcmUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBmLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBOT1QgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiLFwiKX0pYCk7XHJcbiAgICAgICAgbGF5ZXJWaWV3LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiaW5jbHVkZWRcIjpcclxuICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9ID4gJHtzZWNvbmRRdWVyeVRhcmdldC5maXJzdFR4dH0gQU5EICR7Zmlyc3RRdWVyeX0gPCAke3NlY29uZFF1ZXJ5VGFyZ2V0LnNlY29uZFR4dH1gO1xyXG4gICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtmaXJzdFF1ZXJ5fWBdO1xyXG4gICAgICAgIGxheWVyVmlldy5maWx0ZXIgPSB7XHJcbiAgICAgICAgICB3aGVyZTogcXVlcnkud2hlcmUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyAvLyBmLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIC8vICAgYCR7Zmlyc3RRdWVyeX0gPiAke3NlY29uZFF1ZXJ5VGFyZ2V0LmZpcnN0VHh0fSBBTkQgJHtmaXJzdFF1ZXJ5fSA8ICR7c2Vjb25kUXVlcnlUYXJnZXQuc2Vjb25kVHh0fWBcclxuICAgICAgICAvLyApO1xyXG4gICAgICAgIGxheWVyVmlldy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImlzX25vdF9pbmNsdWRlZFwiOlxyXG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gPCAke3NlY29uZFF1ZXJ5VGFyZ2V0LmZpcnN0VHh0fSBPUiAke2ZpcnN0UXVlcnl9ID4gJHtzZWNvbmRRdWVyeVRhcmdldC5zZWNvbmRUeHR9YDtcclxuICAgICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbYCR7Zmlyc3RRdWVyeX1gXTtcclxuICAgICAgICBsYXllclZpZXcuZmlsdGVyID0ge1xyXG4gICAgICAgICAgd2hlcmU6IHF1ZXJ5LndoZXJlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gLy8gZi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcclxuICAgICAgICAvLyAgIGAke2ZpcnN0UXVlcnl9IDwgJHtzZWNvbmRRdWVyeVRhcmdldC5maXJzdFR4dH0gT1IgJHtmaXJzdFF1ZXJ5fSA+ICR7c2Vjb25kUXVlcnlUYXJnZXQuc2Vjb25kVHh0fWBcclxuICAgICAgICAvLyApO1xyXG4gICAgICAgIGxheWVyVmlldy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBpZiAodGhpcy5jb250YWluc0FueUxldHRlcnMoc2Vjb25kUXVlcnlUYXJnZXQpKSB7XHJcbiAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9ICR7cXVlcnlSZXF1ZXN0fSAnJHtzZWNvbmRRdWVyeVRhcmdldH0nYDtcclxuICAgICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtmaXJzdFF1ZXJ5fWBdO1xyXG4gICAgICAgICAgbGF5ZXJWaWV3LmZpbHRlciA9IHtcclxuICAgICAgICAgICAgd2hlcmU6IHF1ZXJ5LndoZXJlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIC8vIGYudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHtmaXJzdFF1ZXJ5fSAke3F1ZXJ5UmVxdWVzdH0gJyR7c2Vjb25kUXVlcnlUYXJnZXR9J2ApO1xyXG4gICAgICAgICAgbGF5ZXJWaWV3LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9ICR7cXVlcnlSZXF1ZXN0fSAke3NlY29uZFF1ZXJ5VGFyZ2V0fWA7XHJcbiAgICAgICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbYCR7Zmlyc3RRdWVyeX1gXTtcclxuICAgICAgICAgIGxheWVyVmlldy5maWx0ZXIgPSB7XHJcbiAgICAgICAgICAgIHdoZXJlOiBxdWVyeS53aGVyZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICAvLyBmLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYCR7Zmlyc3RRdWVyeX0gJHtxdWVyeVJlcXVlc3R9ICR7c2Vjb25kUXVlcnlUYXJnZXR9YCk7XHJcbiAgICAgICAgICBsYXllclZpZXcudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICBjaG9vc2VBbmRPciA9IChlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgQW5kT3I6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLkFuZE9yKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBvcGVuRHJvcCA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmF1dE9wZW4pIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgYXV0T3BlbjogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgYXV0T3BlbjogdHJ1ZSxcclxuICAgICAgICBtb3VzZWxlYXZlOiBmYWxzZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY2xvc2VEcm9wID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG9wZW5lZDogZmFsc2UsXHJcbiAgICAgIGF1dE9wZW46IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdGhpcy5hdXRPcGVuPWZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGNsb3NlRHJvcE9uY2xpY2tPdXRzaWRlID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuYXV0T3BlbiAmJiB0aGlzLnN0YXRlLm1vdXNlbGVhdmUpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgYXV0T3BlbjogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgb25tb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuYXV0T3Blbikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtb3VzZWxlYXZlOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBtZXRob2RzIGZvciBhdHRyaWJ1dGUgdGFibGVcclxuXHJcbiAgZ2V0QWxsQ2hlY2tlZExheWVycyA9ICgpPT57XHJcbiAgICBjb25zdCBhY3RpdmVWaWV3ID0gV2lkZ2V0LmFjdGl2ZVY7XHJcbiAgICBjb25zdCBhbGxNYXBMYXllcnMgPSBhY3RpdmVWaWV3LnZpZXcubWFwLmFsbExheWVycz8uaXRlbXM7XHJcbiAgICBjb25zdCBjaGVja2VkTGF5ZXJzID0gdGhpcy5zdGF0ZS5jaGVja2VkTGF5ZXJfO1xyXG4gICAgbGV0IG5ld01hcExheWVyID0gW107XHJcbiAgICBpZiAoYWxsTWFwTGF5ZXJzPy5sZW5ndGggPiAwICYmIGNoZWNrZWRMYXllcnMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgbmV3TWFwTGF5ZXIgPSBhbGxNYXBMYXllcnMucmVkdWNlKChuZXdBcnJheSxpdGVtKT0+e1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tlZExheWVycy5pbmNsdWRlcyhpdGVtLmlkKSl7XHJcbiAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcclxuICAgICAgICB9LFtdKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld01hcExheWVyO1xyXG59XHJcblxyXG5nZXRBY3RpdmVWaWV3ID0gKCk9PntcclxuICBjb25zdCBhY3RpdmVWaWV3ID0gV2lkZ2V0LmFjdGl2ZVY7XHJcbiAgcmV0dXJuIGFjdGl2ZVZpZXc7XHJcbn1cclxuXHJcblxyXG5nZXRBbGxKaW11TGF5ZXJWaWV3cyA9ICgpPT57XHJcbiAgY29uc3QgamltdUxheWVyVmlld3MgPSBXaWRnZXQuamltdUxheWVyVmlld3o7XHJcbiAgcmV0dXJuIGppbXVMYXllclZpZXdzXHJcbn1cclxuXHJcbi8vIGNvbmVjdG9yXHJcbmNvbm5lY3Rvcl9mdW5jdGlvbiA9IChkYXRhKT0+e1xyXG4gIGxldCBhY3RpdmVWID10aGlzLnN0YXRlLmppbXVNYXBWaWV3O1xyXG4gIHRoaXMuc2V0U3RhdGUoe2xheWVyQ29udGVudHM6ZGF0YS5zZWxlY3RlZExheWVyc0NvbnRlbnRzfSk7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7Y2hlY2tlZExheWVyXzpkYXRhLmNoZWNrZWRMYXllcl99KTtcclxuICBjb25zdCBnZW9tZXRyeSA9IFBvbHlnb24uZnJvbUV4dGVudChhY3RpdmVWLnZpZXcuZXh0ZW50KS50b0pTT04oKTtcclxuICBjb25zdCBsYXllck9wZW4gPSB7XHJcbiAgICBnZW9tZXRyeTpnZW9tZXRyeSxcclxuICAgIHR5cGVTZWxlY3RlZDpcImNvbnRhaW5zXCIsXHJcbiAgfVxyXG4gIHRoaXMucHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiY3JlYXRlVGFibGVcIix0cnVlKSk7XHJcbiAgaWYgKE9iamVjdC5rZXlzKGRhdGEubnVtYmVyT2ZBdHRyaWJ1dGVzKS5sZW5ndGggPiAwKXtcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiY3JlYXRlVGFibGVcIix0cnVlKSk7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcIm51bWJlck9mQXR0cmlidXRlXCIsZGF0YS5udW1iZXJPZkF0dHJpYnV0ZXMpKTtcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwibGF5ZXJPcGVuXCIsbGF5ZXJPcGVuKSk7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImdldEFsbExheWVyc1wiLHRoaXMuZ2V0QWxsQ2hlY2tlZExheWVycykpO1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJnZXRBY3RpdmVWaWV3XCIsdGhpcy5nZXRBY3RpdmVWaWV3KSk7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImdldEFsbEppbXVMYXllclZpZXdzXCIsdGhpcy5nZXRBbGxKaW11TGF5ZXJWaWV3cykpO1xyXG59ZWxzZXtcclxuICB0aGlzLnByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcInNob3dBbGVydFwiLHRydWUpKTtcclxufVxyXG59XHJcblxyXG4gIC8vVE9ETyBjb25maWcgYWJpbGl0YXJlIHRhYiB0cnVlL2ZhbHNlXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIndpZGdldC1hdHRyaWJ1dGUtdGFibGUgamltdS13aWRnZXRcIlxyXG4gICAgICAgIGlkPVwid3JhcFwiXHJcbiAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgIHRoaXMuY2xvc2VEcm9wT25jbGlja091dHNpZGUoKTtcclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmhhc093blByb3BlcnR5KFwidXNlTWFwV2lkZ2V0SWRzXCIpICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHNbMF0gJiYgKFxyXG4gICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cclxuICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3RoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgaWQ9XCJzZWFyY2gtYWR2YW5jZWQtdGFiLUFtYml0b1wiIHRpdGxlPVwiQW1iaXRvXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgY29udGFpbmVyLWZsdWlkIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBmbGV4LWNvbHVtblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxBbGVydFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBmb3JtPVwiYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiU2VsZXppb25hcmUgcHJpbWEgaWwgbGF5ZXIsIHBvaSBjb250aW51YSBjb24gaWwgY29zdHJ1dHRvcmUgZGVsbGEgcXVlcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJpbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICB3aXRoSWNvblxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInctMTAwXCI+U2VsZXppb25hIGlsIGxheWVyOjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVNlbGVjdExheWVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGlsIExheWVyXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlc3VsdExheWVyTGlzdC5tYXAoKGVsLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsLmVsZW1lbnQubGF5ZXJJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRVcmw9e2VsLmVsZW1lbnQucGFyc2VkVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLmVsZW1lbnQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRhYmxlcy5sZW5ndGggPCAyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBsZSBmZWF0dXJlIG5lbCBsYXllciBjb3JyaXNwb25kZW50aSBhbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWd1ZW50ZSBlc3ByZXNzaW9uZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaG9vc2VBbmRPcn1cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiIFZpc3VhbGl6emEgbGUgZmVhdHVyZSBuZWwgbGF5ZXIgY2hlIGNvcnJpc3BvbmRvbm8gYSB0dXR0ZSBsZSBlc3ByZXNzaW9uaSBzZWd1ZW50aVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJBTkRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJBTkRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBsZSBmZWF0dXJlIG5lbCBsYXllciBjaGUgY29ycmlzcG9uZG9ubyBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR1dHRlIGxlIGVzcHJlc3Npb25pIHNlZ3VlbnRpXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJPUlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWaXN1YWxpenphIGxlIGZlYXR1cmUgbmVsIGxheWVyIGNoZSBjb3JyaXNwb25kb25vIGFkIHVuYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFsc2lhc2kgZGVsbGUgZXNwcmVzc2lvbmkgc2VndWVudGlcclxuICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0xIG1iLTMganVzdGlmeS1jb250ZW50LWFyb3VuZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZFRhYmxlfVxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj0nPHN2ZyB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk03LjUgMGEuNS41IDAgMCAwLS41LjVWN0guNWEuNS41IDAgMCAwIDAgMUg3djYuNWEuNS41IDAgMCAwIDEgMFY4aDYuNWEuNS41IDAgMCAwIDAtMUg4Vi41YS41LjUgMCAwIDAtLjUtLjVaXCIgZmlsbD1cIiMwMDBcIj48L3BhdGg+PC9zdmc+J1xyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMFwiPkFnZ2l1bmdpIGVzcHJlc3Npb25lPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbmRRdWVyeX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMFwiPkFwcGxpY2E8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjUwJVwiLCBvdmVyZmxvd1k6IFwic2Nyb2xsXCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRhYmxlcy5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2Byb3ctJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdD17dGhpcy5zdGF0ZS5yZXN1bHRzTGF5ZXJTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICBpc09wZW5Ecm9wRD17dGhpcy5zdGF0ZS5pc09wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcERvd249eygpID0+IHRoaXMuZHJvcERvd24oZWwuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duVmFsdWVRdWVyeT17dGhpcy5zdGF0ZS5kcm9wZG93blZhbHVlUXVlcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkPXt0aGlzLnN0YXRlLmlzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVySXNDaGVja2VkPXt0aGlzLnN0YXRlLmNvdW50ZXJJc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFRvUXVlcnk9e3RoaXMuc3RhdGUuY2hlY2tlZFRvUXVlcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGVzPXt0aGlzLnN0YXRlLnRhYmxlc31cclxuICAgICAgICAgICAgICAgICAgICB0YWJsZXNJZD17ZWwuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzPXt0aGlzLnN0YXRlLndoZXJlQ2xhdXNlc31cclxuICAgICAgICAgICAgICAgICAgICBnZXRRdWVyeUF0dHJpYnV0ZT17dGhpcy5nZXRRdWVyeUF0dHJpYnV0ZX1cclxuICAgICAgICAgICAgICAgICAgICBnZXRRdWVyeT17dGhpcy5nZXRRdWVyeX1cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVUaGlyZFF1ZXJ5PXt0aGlzLnRoaXJkUXVlcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dElucHV0SGFuZGxlcj17dGhpcy50ZXh0SW5wdXRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duSXRlbUhhbmRsZXI9e3RoaXMuZHJvcGRvd25JdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyPXt0aGlzLnRleHRGaXJzdEluY2x1ZGVkSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyPXt0aGlzLnRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcERvd25Ub2dnbGVyPXt0aGlzLmRyb3BEb3dufVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoZWNrQm94PXt0aGlzLmhhbmRsZUNoZWNrQm94fVxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRhYmxlPXsoKSA9PiB0aGlzLmRlbGV0ZVRhYmxlKGVsLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICB1bml2b2NvU2VsZWN0SGFuZGxlcj17dGhpcy51bml2b2NvU2VsZWN0SGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZUNoZWNrQm94PXt0aGlzLm9uQ2hhbmdlQ2hlY2tCb3h9XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbkRyb3A9e3RoaXMub3BlbkRyb3B9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VEcm9wPXt0aGlzLmNsb3NlRHJvcH1cclxuICAgICAgICAgICAgICAgICAgICBvcGVuZWQ9e3RoaXMuc3RhdGUub3BlbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dE9wZW49e3RoaXMuc3RhdGUuYXV0T3Blbn1cclxuICAgICAgICAgICAgICAgICAgICBtb3VzZWxlYXZlPXt0aGlzLnN0YXRlLm1vdXNlbGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25tb3VzZUxlYXZlPXt0aGlzLm9ubW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==