System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/rest/support/Query","esri/layers/GraphicsLayer"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__, "__esModule", { value: true });
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

/***/ "./your-extensions/widgets/query-builder/src/attribute_table_connector.ts":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/attribute_table_connector.ts ***!
  \********************************************************************************/
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
                        console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnn', numberOfAttributes);
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
                    throw "There is no number of attributes";
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
/* harmony import */ var _attribute_table_connector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../attribute_table_connector */ "./your-extensions/widgets/query-builder/src/attribute_table_connector.ts");
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
                        // f.visible = true;
                        // console.log(
                        //   `${firstQuery} IN (${"'" + secondQueryTarget.join("', '") + "'"})`
                        // );
                        // layerView.visible = true;
                        // layerView.queryFeatures(query).then(function(results){
                        //   let layerViewArr = [layerView.layer]; 
                        //   const selectedLayersContents = helper.getSelectedContentsLayer(results,layerViewArr);
                        //   console.log('ccccccccccccccccccccccccccccc',this.state.resultsLayerSelected.title)
                        // });
                    }
                    else {
                        // query.where = `${firstQuery} IN (${secondQueryTarget.join(",")})`;
                        query.returnGeometry = true;
                        query.outFields = ['*'];
                        // query.outFields = [`${firstQuery}`];
                        layerView.filter = {
                            where: query.where,
                        };
                        // f.visible = true;
                        // console.log(`${firstQuery} IN (${secondQueryTarget.join(",")})`);
                        layerView.visible = true;
                        layerView.queryFeatures(query).then((results) => {
                            console.log(results, "check results from uutuutut");
                        });
                        // layerView.queryFeatures(query).then(function(results){
                        //   console.log('',layerView.layer.title)
                        //   let checkedLayer_ = [layerView.layer.id];
                        //   const selectedLayersContents = helper.getSelectedContentsLayer([results.features],checkedLayer_);
                        //   const numberOfAttributes = helper.getNumberOfAttributes(selectedLayersContents);
                        // this.state.jimuMapView.view.whenLayerView(layerView.layer).then((layerview)=>{
                        //  const result = layerview.queryFeatures(query).then((resu)=>{
                        //   //  console.log(resu,"check results");
                        //  })
                        // });
                        // console.log('query',layerView.layer);
                        // console.log('pppppppppppppppppppppppppppppppppppp',results.features[0])
                        // if (layerView?._highlightIds){
                        //     for (const key of layerView._highlightIds.keys()){
                        //         highlightIds.push(key);
                        //     }
                        // }
                        // const result = await layerView.queryFeatures(query);
                        // dispatch ........................
                        // connector({checkedLayer_,selectedLayersContents,numberOfAttributes,results:[results.features],layer:layerView.layer});
                        // });
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
        this.connector = (data) => {
            console.log('rrrrrrrrrrrrrrrrrrrrrrrrr', data);
            let obj = {
                results: data.results,
                allCheckedLayers: [data.layer],
            };
            Widget.anyvariable.init(obj);
            Widget.anyvariable.dispatchingAll();
            // let activeV =this.state.jimuMapView;
            // this.setState({layerContents:data.selectedLayersContents});
            // this.setState({checkedLayer_:data.checkedLayer_});
            // const geometry = Polygon.fromExtent(activeV.view.extent).toJSON();
            // const layerOpen = {
            //   geometry:geometry,
            //   typeSelected:"contains",
            // }
            // this.props.dispatch(appActions.widgetStatePropChange("value","createTable",true));
            //   if (Object.keys(data.numberOfAttributes).length > 0){
            //     this.props.dispatch(appActions.widgetStatePropChange("value","createTable",true));
            //     this.props.dispatch(appActions.widgetStatePropChange("value","numberOfAttribute",data.numberOfAttributes));
            //     this.props.dispatch(appActions.widgetStatePropChange("value","layerOpen",layerOpen));
            //     this.props.dispatch(appActions.widgetStatePropChange("value","getAllLayers",this.getAllCheckedLayers));
            //     this.props.dispatch(appActions.widgetStatePropChange("value","getActiveView",this.getActiveView));
            //     this.props.dispatch(appActions.widgetStatePropChange("value","getAllJimuLayerViews",this.getAllJimuLayerViews));
            // }else{
            //   this.props.dispatch(appActions.widgetStatePropChange("value","showAlert",true));
            // }
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
        this.connector = this.connector.bind(this);
    }
    activeViewChangeHandler(jmv) {
        if (jmv) {
            jmv.view.map.add(this.graphicLayerFound);
            jmv.view.map.add(this.graphicLayerSelected);
            const resultLayerList = [];
            Widget.anyvariable = new _attribute_table_connector__WEBPACK_IMPORTED_MODULE_8__["default"](jmv, this);
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
                                    layerView, attributeQuery, queryValue, value, this.state.AndOr, this.connector);
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
                if (this.state.jimuMapView) { // 
                    this.state.jimuMapView.view.map.allLayers.forEach((f, index) => {
                        if (f.title === this.state.currentTargetText) {
                            this.state.jimuMapView.view.whenLayerView(f).then((layerView) => {
                                let queryOr = `${normalizedWhereToSendQuery.join(" OR ")}`;
                                console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', layerView.layer.title);
                                query.outFields = [`*`];
                                layerView.filter = {
                                    where: query.where,
                                };
                                console.log('yyyyyyyyyyyyyyyyyyyyy', layerView);
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

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9xdWVyeS1idWlsZGVyL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNtSDtBQUNqQjtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkRBQTZELG9CQUFvQixnQ0FBZ0Msd0JBQXdCLDBCQUEwQixvQkFBb0IscUJBQXFCLGtCQUFrQix1QkFBdUIsZ0NBQWdDLFNBQVMsc0hBQXNILFVBQVUsa0JBQWtCLE1BQU0sWUFBWSxXQUFXLGdCQUFnQixNQUFNLFlBQVksd0RBQXdELHdCQUF3QixrQ0FBa0MsS0FBSyx3QkFBd0IsOEJBQThCLHdCQUF3Qix1QkFBdUIsS0FBSyxpQkFBaUIsMkJBQTJCLGtDQUFrQyxLQUFLLHVCQUF1QjtBQUMxekI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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Q3RCLGtCQUFXLEdBQUcsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9zdHlsZS5jc3M/YWJiYiIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9zZXR0aW5nLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvZWRpdG9yL2Nsb3NlLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9zZXR0aW5nLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvY2xvc2UudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9hdHRyaWJ1dGVfdGFibGVfY29ubmVjdG9yLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvVGFibGUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL3V0aWxzL3F1ZXJ5VGFibGVWYWx1ZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pdGVtLXRhYmxlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWY3ZmY7IH1cXG5cXG4uc2V0dGluZy1zdmc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICMwMDVlY2E7IH1cXG5cXG4uc2V0dGluZy1zdmcge1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGVBQWU7RUFDZix5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLml0ZW0tdGFibGU6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZjdmZjtcXHJcXG59XFxyXFxuLnNldHRpbmctc3ZnOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjMDA1ZWNhO1xcclxcbn1cXHJcXG4uc2V0dGluZy1zdmd7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAxcztcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk05LjQzOC45OTRjLjIxMyAwIC4zOTcuMTQ2LjQ0LjM1LjE1MS43MjIuMjU3IDEuMzQuMzE2IDEuODUyLjM3NC4xNi43MjUuMzYyIDEuMDQ4LjU5OWwxLjcyOC0uNjc2YS40NTUuNDU1IDAgMCAxIC41NTYuMTg4bDEuNDIgMi4zOTRhLjQzLjQzIDAgMCAxLS4wOTEuNTQ3IDIxLjk4IDIxLjk4IDAgMCAxLTEuNDkgMS4xOTQgNS4xNyA1LjE3IDAgMCAxLS4wMDcgMS4xODNsMS40NjQgMS4xMTlhLjQzLjQzIDAgMCAxIC4xMTEuNTYzbC0xLjQyIDIuMzk0YS40NTQuNDU0IDAgMCAxLS41My4xOTcgMjIuNDQ1IDIyLjQ0NSAwIDAgMS0xLjgwNy0uNjZjLS4zMjUuMjMzLS42NzkuNDMtMS4wNTUuNTg2bC0uMjYzIDEuNzk0YS40NDYuNDQ2IDAgMCAxLS40NDUuMzc2SDYuNTc0YS40NDYuNDQ2IDAgMCAxLS40NC0uMzUgMjEuMDE5IDIxLjAxOSAwIDAgMS0uMzE3LTEuODUzIDUuMzQgNS4zNCAwIDAgMS0xLjA0Ny0uNTk4bC0xLjcyOC42NzVhLjQ1NS40NTUgMCAwIDEtLjU1Ni0uMTg3bC0xLjQyLTIuMzk1YS40My40MyAwIDAgMSAuMDkxLS41NDZjLjU2Ny0uNDkgMS4wNjMtLjg4OCAxLjQ5LTEuMTk0YTUuMTY3IDUuMTY3IDAgMCAxIC4wMDgtMS4xODNMMS4xOSA2LjI0M2EuNDMuNDMgMCAwIDEtLjExMi0uNTYybDEuNDItMi4zOTVhLjQ1NS40NTUgMCAwIDEgLjUzMS0uMTk2Yy43MTkuMjMzIDEuMzIxLjQ1MyAxLjgwNy42Ni4zMjQtLjIzMy42NzktLjQzIDEuMDU2LS41ODdsLjI2Mi0xLjc5NEEuNDQ2LjQ0NiAwIDAgMSA2LjYuOTk0aDIuODM5Wm0tLjM2NSAxSDYuOTg1bC0uMjggMS44NjYtLjQ2Ny4xOWMtLjIzNS4wOTUtLjQ2LjIxLS42NzIuMzRsLS4yMDcuMTM2LS40Mi4yOTMtLjQ3Ni0uMTk3Yy0uMzI4LS4xMzctLjcxOC0uMjgxLTEuMTY5LS40MzNsLS4yMjEtLjA3NC0xLjA0NSAxLjcxOUwzLjU5IDYuOTk5bC0uMDYuNDc5YTQuMTI3IDQuMTI3IDAgMCAwLS4wMjEuODE2bC4wMTQuMTQ0LjA1OC40OTItLjQxOS4yOTRjLS4yODguMjAzLS42MTUuNDUxLS45NzkuNzQ2bC0uMTc3LjE0NSAxLjA0MyAxLjcyIDEuODQ1LS43MDMuNDA2LjI5Yy4yMDQuMTQ2LjQyLjI3NC42NDUuMzg0bC4yMjguMTAzLjQ3NC4xOTkuMDU5LjQ5Yy4wNC4zMzguMTAzLjczMS4xOSAxLjE3N2wuMDQzLjIxOWgyLjA4OGwuMjgyLTEuODY3LjQ2Ni0uMTljLjIzNi0uMDk1LjQ2LS4yMS42NzItLjM0bC4yMDctLjEzNi40MTktLjI5My40NzYuMTk4Yy4zMy4xMzYuNzIuMjggMS4xNy40MzNsLjIyLjA3MiAxLjA0NC0xLjcxOC0xLjU2LTEuMTY1LjA2LS40NzlhNC4xMzEgNC4xMzEgMCAwIDAgLjAyLS44MTVsLS4wMTMtLjE0NC0uMDYtLjQ5Mi40Mi0uMjk1YTE4LjEgMTguMSAwIDAgMCAuOTgtLjc0NmwuMTc2LS4xNDYtMS4wNDMtMS43Mi0xLjg0NC43MDUtLjQwNi0uMjlhNC40OTYgNC40OTYgMCAwIDAtLjY0Ni0uMzg1bC0uMjI4LS4xMDMtLjQ3NC0uMTk5LS4wNTgtLjQ5Yy0uMDMyLS4yNy0uMDgtLjU3Ni0uMTQtLjkxNmwtLjA5NC0uNDhabS0xLjA2NyAzYTMgMyAwIDEgMSAwIDYgMyAzIDAgMCAxIDAtNlptMCAxYTIgMiAwIDEgMCAwIDQgMiAyIDAgMCAwIDAtNFpcXFwiIGZpbGw9XFxcIiMwMDBcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJtOC43NDUgOCA2LjEgNi4xYS41MjcuNTI3IDAgMSAxLS43NDUuNzQ2TDggOC43NDZsLTYuMSA2LjFhLjUyNy41MjcgMCAxIDEtLjc0Ni0uNzQ2bDYuMS02LjEtNi4xLTYuMWEuNTI3LjUyNyAwIDAgMSAuNzQ2LS43NDZsNi4xIDYuMSA2LjEtNi4xYS41MjcuNTI3IDAgMCAxIC43NDYuNzQ2TDguNzQ2IDhaXFxcIiBmaWxsPVxcXCIjMDAwXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2FwcGxpY2F0aW9uL3NldHRpbmcuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFNldHRpbmdPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9lZGl0b3IvY2xvc2Uuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENsb3NlT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsIlxuaW1wb3J0IHsgSmltdU1hcFZpZXcgfSBmcm9tIFwiamltdS1hcmNnaXNcIjtcbmltcG9ydCB7IGFwcEFjdGlvbnMgfSBmcm9tIFwiamltdS1jb3JlXCI7XG5cbnR5cGUgc3BhdGlhbFJlbGF0aW9uc2hpcFR5cGUgPSBcImludGVyc2VjdHNcIiB8IFwiY29udGFpbnNcIiB8IFwiY3Jvc3Nlc1wiIHwgXCJkaXNqb2ludFwiIHwgXCJlbnZlbG9wZS1pbnRlcnNlY3RzXCIgfCBcImluZGV4LWludGVyc2VjdHNcIiB8IFwib3ZlcmxhcHNcIiB8IFwidG91Y2hlc1wiIHwgXCJ3aXRoaW5cIiB8IFwicmVsYXRpb25cIlxuXG50eXBlIGxheWVyT3BlblR5cGUgPSB7XG4gICAgZ2VvbWV0cnk6YW55LFxuICAgIHR5cGVTZWxlY3RlZDpzcGF0aWFsUmVsYXRpb25zaGlwVHlwZSxcbiAgICB3aGVyZT86c3RyaW5nLFxuICAgIGdyYXBoaWNzRm91bmQ/OmFueSxcbiAgICB2YWx1ZUJ1ZmZlcj86YW55XG59XG5cbnR5cGUgaW5pdE9ialR5cGUgPSB7XG4gICAgcmVzdWx0czphbnlbXSxcbiAgICBhbGxDaGVja2VkTGF5ZXJzOmFueVtdLFxuICAgIGlzTGF5ZXJDaGVja2VkPzpib29sZWFuLFxuICAgIGNoZWNrZWRMYXllcnM/OnN0cmluZ1tdLFxuICAgIG51bWJlck9mQXR0cmlidXRlcz86e1trZXk6c3RyaW5nXTpzdHJpbmd9LFxuICAgIGxheWVyT3Blbj86bGF5ZXJPcGVuVHlwZSxcbiAgICBjcmVhdGVUYWJsZT86dHJ1ZVxufVxuXG50eXBlIHNlbGVjdGVkTGF5ZXJUeXBlID0ge2lkOnN0cmluZyxhdHRyaWJ1dGVzOmFueVtdfVxuXG5jbGFzcyBBdHRyaWJ1dGVUYWJsZUNvbm5lY3RvciB7XG5cbiAgICBzdGF0aWMgYWN0aXZlVmlldzpKaW11TWFwVmlldyA9IG51bGw7XG4gICAgc3RhdGljIHNlbGY6YW55ID0gbnVsbDtcblxuICAgIGFsbENoZWNrZWRMYXllcnM6YW55W107XG4gICAgY2hlY2tlZExheWVycz86c3RyaW5nW107XG4gICAgbnVtYmVyT2ZBdHRyaWJ1dGVzPzp7W2tleTpzdHJpbmddOnN0cmluZ307XG4gICAgY3JlYXRlVGFibGU6Ym9vbGVhbjtcbiAgICBsYXllck9wZW46bGF5ZXJPcGVuVHlwZTtcbiAgICBpc0xheWVyQ2hlY2tlZDpib29sZWFuXG5cblxuICAgIGNvbnN0cnVjdG9yKGFjdGl2ZVZpZXc6SmltdU1hcFZpZXcsc2VsZjphbnkpe1xuICAgICAgICBBdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5hY3RpdmVWaWV3ID0gYWN0aXZlVmlldztcbiAgICAgICAgQXR0cmlidXRlVGFibGVDb25uZWN0b3Iuc2VsZiA9IHNlbGY7XG4gICAgfVxuXG4gICAgaW5pdChvYmo6aW5pdE9ialR5cGUpeyAgXG5cbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IG9iai5yZXN1bHRzO1xuICAgICAgICBjb25zdCBhbGxDaGVja2VkTGF5ZXJzID0gb2JqLmFsbENoZWNrZWRMYXllcnM7XG4gICAgICAgIGxldCBjcmVhdGVUYWJsZSA9IHRydWU7XG4gICAgICAgIGxldCBpc0xheWVyQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgY2hlY2tlZExheWVycyA9IG51bGw7XG4gICAgICAgIGxldCBudW1iZXJPZkF0dHJpYnV0ZXMgPSBudWxsO1xuICAgICAgICBsZXQgbGF5ZXJPcGVuID0gbnVsbDtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShcImNyZWF0ZVRhYmxlXCIpKXtcbiAgICAgICAgICAgIGNyZWF0ZVRhYmxlID0gb2JqLmNyZWF0ZVRhYmxlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoXCJpc0xheWVyQ2hlY2tlZFwiKSl7XG4gICAgICAgICAgICBpc0xheWVyQ2hlY2tlZCA9IG9iai5pc0xheWVyQ2hlY2tlZCBcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KFwiY2hlY2tlZExheWVyc1wiKSl7XG4gICAgICAgICAgICBjaGVja2VkTGF5ZXJzID0gb2JqLmNoZWNrZWRMYXllcnMgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShcIm51bWJlck9mQXR0cmlidXRlc1wiKSl7XG4gICAgICAgICAgICBudW1iZXJPZkF0dHJpYnV0ZXMgPSBvYmoubnVtYmVyT2ZBdHRyaWJ1dGVzIFxuICAgICAgICB9XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoXCJsYXllck9wZW5cIikpe1xuICAgICAgICAgICAgbGF5ZXJPcGVuID0gb2JqLmxheWVyT3BlbiBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNyZWF0ZVRhYmxlID0gY3JlYXRlVGFibGU7XG4gICAgICAgIHRoaXMuaXNMYXllckNoZWNrZWQgPSBpc0xheWVyQ2hlY2tlZDtcbiAgICAgICAgdGhpcy5zZXRDaGVja2VkTGF5ZXJzKGFsbENoZWNrZWRMYXllcnMsY2hlY2tlZExheWVycyk7XG4gICAgICAgIHRoaXMuc2V0QWxsQ2hlY2tlZExheWVycyhhbGxDaGVja2VkTGF5ZXJzKTtcbiAgICAgICAgdGhpcy5zZXROdW1iZXJPZkF0dHJpYnV0ZXMocmVzdWx0cyxudW1iZXJPZkF0dHJpYnV0ZXMpO1xuICAgICAgICB0aGlzLnNldExheWVyT3BlbihsYXllck9wZW4pO1xuICAgIH1cblxuICAgIGlzQXJyYXkgPSAodmFsKT0+QXJyYXkuaXNBcnJheSh2YWwpO1xuXG4gICAgaXNPYmplY3QgPSAodmFsKT0+T2JqZWN0LmtleXModmFsKS5sZW5ndGggPiAwO1xuXG4gICAgbG9vcExheWVyR2V0SWRzID0gKGxheWVyOmFueVtdKT0+e1xuICAgICAgICBsZXQgaWRzQXJyYXkgPSBbXTtcbiAgICAgICAgaWYgKGxheWVyLmxlbmd0aCl7XG4gICAgICAgICAgICBpZHNBcnJheSA9IGxheWVyLnJlZHVjZSgobmV3QXJyYXksaXRlbSk9PntcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCl7XG4gICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goaXRlbS5pZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgICAgICAgICAgfSxbXSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWRzQXJyYXk7XG4gICAgfVxuXG4gICAgc2V0Q2hlY2tlZExheWVycyA9IChhbGxDaGVja2VkTGF5ZXJzOmFueSxjaGVja2VkTGF5ZXJzPzpzdHJpbmdbXSwpPT57XG4gICAgICAgIGlmIChjaGVja2VkTGF5ZXJzKXtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZExheWVycyA9IGNoZWNrZWRMYXllcnM7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNoZWNrZWRMYXllcnNBcnIgPSBbXTtcbiAgICAgICAgaWYgKGFsbENoZWNrZWRMYXllcnMpe1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNPYmplY3QoYWxsQ2hlY2tlZExheWVycykpe1xuICAgICAgICAgICAgICAgIGNoZWNrZWRMYXllcnNBcnIucHVzaChhbGxDaGVja2VkTGF5ZXJzLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzQXJyYXkoYWxsQ2hlY2tlZExheWVycykpe1xuICAgICAgICAgICAgICAgIGNoZWNrZWRMYXllcnNBcnIgPSBbLi4uY2hlY2tlZExheWVyc0Fycix0aGlzLmxvb3BMYXllckdldElkcyhhbGxDaGVja2VkTGF5ZXJzKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja2VkTGF5ZXJzID0gY2hlY2tlZExheWVyc0FyclxuICAgIH1cblxuICAgIHNldEFsbENoZWNrZWRMYXllcnMgPSAoYWxsQ2hlY2tlZExheWVyczphbnkpPT57XG4gICAgICAgIGlmICh0aGlzLmlzT2JqZWN0KGFsbENoZWNrZWRMYXllcnMpKXtcbiAgICAgICAgICAgIHRoaXMuYWxsQ2hlY2tlZExheWVycyA9IFthbGxDaGVja2VkTGF5ZXJzXVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzQXJyYXkoYWxsQ2hlY2tlZExheWVycykpe1xuICAgICAgICAgICAgdGhpcy5hbGxDaGVja2VkTGF5ZXJzID0gYWxsQ2hlY2tlZExheWVyc1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBnZXRTZWxlY3RlZENvbnRlbnRzTGF5ZXIgPShyZXN1bHRzOmFueSk6c2VsZWN0ZWRMYXllclR5cGVbXT0+e1xuICAgICAgICBjb25zdCBjaGVja2VkTGF5ZXJzID0gdGhpcy5jaGVja2VkTGF5ZXJzPz9bXTtcbiAgICAgICAgbGV0IHNlbGVjdGVkTGF5ZXJzQXJyYXkgPSBbXTtcbiAgICAgICAgaWYgKHJlc3VsdHM/Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgc2VsZWN0ZWRMYXllcnNBcnJheSA9IHJlc3VsdHMucmVkdWNlKChuZXdBcnJheSxpdGVtczphbnlbXSk9PntcbiAgICAgICAgICAgICAgICBpZiAoaXRlbXM/Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRMYXllckNvbnRlbnRzID0ge307XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50TGF5ZXJJZCA9IGl0ZW1zWzBdPy5sYXllcj8uaWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2VkTGF5ZXJzLmluZGV4T2YoY3VycmVudExheWVySWQpICE9PSAtMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExheWVyQ29udGVudHNbXCJpZFwiXSA9IGl0ZW1zWzBdPy5sYXllcj8uaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExheWVyQ29udGVudHNbXCJhdHRyaWJ1dGVzXCJdID0gdGhpcy5nZXRBdHRyaWJ1dGVzKGl0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goc2VsZWN0ZWRMYXllckNvbnRlbnRzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICAgICAgICAgIH0sW10pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkTGF5ZXJzQXJyYXk7XG4gICAgfVxuXG4gICAgZ2V0QXR0cmlidXRlcyA9IChpdGVtczphbnlbXSk6YW55W109PntcbiAgICAgICAgY29uc3QgYXR0cmlidXRlc0FycmF5ID0gaXRlbXMucmVkdWNlKChuZXdBcnJheSxpdGVtKT0+e1xuICAgICAgICAgICAgaWYgKGl0ZW0/LmF0dHJpYnV0ZXMpe1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmdlb21ldHJ5KXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBpdGVtLmdlb21ldHJ5O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXRpdHVkZSA9IGdlb21ldHJ5Py5sYXRpdHVkZT8/Z2VvbWV0cnk/LmV4dGVudD8uY2VudGVyPy5sYXRpdHVkZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9uZ2l0dWRlID0gZ2VvbWV0cnk/LmxvbmdpdHVkZT8/Z2VvbWV0cnk/LmV4dGVudD8uY2VudGVyPy5sb25naXR1ZGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb25naXR1ZGUgJiYgbGF0aXR1ZGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaCh7Li4uaXRlbS5hdHRyaWJ1dGVzLGxvY2F0aW9uOltsYXRpdHVkZSxsb25naXR1ZGVdfSk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChpdGVtLmF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgICAgICAgICB9ICAgICAgIFxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKGl0ZW0uYXR0cmlidXRlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICAgIH0sW10pXG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVzQXJyYXk7XG4gICAgfVxuXG4gICAgc2V0TnVtYmVyT2ZBdHRyaWJ1dGVzID0gKHJlc3VsdHM6YW55W10sbnVtYmVyT2ZBdHRyaWJ1dGVzPzp7W2tleTpzdHJpbmddOnN0cmluZ30sKT0+e1xuICAgICAgICBpZiAobnVtYmVyT2ZBdHRyaWJ1dGVzKXtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyT2ZBdHRyaWJ1dGVzID0gbnVtYmVyT2ZBdHRyaWJ1dGVzO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxheWVyc0NvbnRlbnRzID0gdGhpcy5nZXRTZWxlY3RlZENvbnRlbnRzTGF5ZXIocmVzdWx0cyk7XG4gICAgICAgIGxldCBsYXllckNvbnRlbnRzT2JqZWN0ID0ge307XG4gICAgICAgIGZvciAobGV0IGk9MDtpIDwgbGF5ZXJzQ29udGVudHMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgbGF5ZXJDb250ZW50c09iamVjdCA9IHsuLi5sYXllckNvbnRlbnRzT2JqZWN0LFtsYXllcnNDb250ZW50c1tpXT8uaWRdOmxheWVyc0NvbnRlbnRzW2ldPy5hdHRyaWJ1dGVzPy5sZW5ndGg/PzB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5udW1iZXJPZkF0dHJpYnV0ZXMgPSBsYXllckNvbnRlbnRzT2JqZWN0XG4gICAgfVxuXG4gICAgc2V0TGF5ZXJPcGVuID0gKGxheWVyT3Blbj86bGF5ZXJPcGVuVHlwZSk9PntcbiAgICAgICAgaWYgKGxheWVyT3Blbil7XG4gICAgICAgICAgICB0aGlzLmxheWVyT3BlbiA9IGxheWVyT3BlbjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheWVyT3BlbiA9IHtcbiAgICAgICAgICAgIGdlb21ldHJ5Om51bGwsXG4gICAgICAgICAgICB0eXBlU2VsZWN0ZWQ6XCJjb250YWluc1wiLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QWN0aXZlVmlldyA9ICgpPT5BdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5hY3RpdmVWaWV3O1xuICAgIFxuICAgIGdldEFsbENoZWNrZWRMYXllcnMgPSAoKT0+IHRoaXMuYWxsQ2hlY2tlZExheWVycztcblxuICAgIGRpc3BhdGNoaW5nQWxsID0gKCk9PntcbiAgICAgICAgY29uc3Qgc2VsZiA9IEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLnNlbGY7XG4gICAgICAgIGNvbnN0IHByb3BzID0gc2VsZi5wcm9wc1xuICAgICAgICBpZiAocHJvcHMgJiYgcHJvcHMuaGFzT3duUHJvcGVydHkoXCJkaXNwYXRjaFwiKSApe1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZBdHRyaWJ1dGVzID0gdGhpcy5udW1iZXJPZkF0dHJpYnV0ZXM7XG4gICAgICAgICAgICBjb25zdCBsYXllck9wZW4gPSB0aGlzLmxheWVyT3BlbjtcbiAgICAgICAgICAgIGNvbnN0IGFsbENoZWNrZWRMYXllcnMgPSB0aGlzLmFsbENoZWNrZWRMYXllcnM7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVWaWV3ID0gdGhpcy5nZXRBY3RpdmVWaWV3KCk7XG4gICAgICAgICAgICBpZiAobnVtYmVyT2ZBdHRyaWJ1dGVzICYmIGxheWVyT3BlbiAmJiBhbGxDaGVja2VkTGF5ZXJzICYmIGFjdGl2ZVZpZXcpe1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhudW1iZXJPZkF0dHJpYnV0ZXMpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5uJyxudW1iZXJPZkF0dHJpYnV0ZXMpXG5cbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiY3JlYXRlVGFibGVcIix0cnVlKSk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcIm51bWJlck9mQXR0cmlidXRlXCIsbnVtYmVyT2ZBdHRyaWJ1dGVzKSk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImxheWVyT3BlblwiLGxheWVyT3BlbikpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJnZXRBbGxMYXllcnNcIix0aGlzLmdldEFsbENoZWNrZWRMYXllcnMpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiZ2V0QWN0aXZlVmlld1wiLHRoaXMuZ2V0QWN0aXZlVmlldykpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNMYXllckNoZWNrZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiY2hlY2tlZExheWVyc1wiLHRoaXMuY2hlY2tlZExheWVycykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJUaGVyZSBpcyBubyBudW1iZXIgb2YgYXR0cmlidXRlc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWxheWVyT3Blbil0aHJvdyBcIlRoZXJlIGlzIG5vIGxheWVyIG9wZW5cIlxuICAgICAgICAgICAgaWYgKGFsbENoZWNrZWRMYXllcnMpdGhyb3cgXCJUaGVyZSBpcyBubyBhbGwgY2hlY2tlZCBsYXllcnMgbWFrZSBzdXJlIHRvIHBhc3MgbGF5ZXJcIlxuICAgICAgICAgICAgaWYgKGFjdGl2ZVZpZXcpdGhyb3cgXCJUaGVyZSBpcyBubyBhY3RpdmVWaWV3LHBhc3MgamltdU1hcFZpZXcgd2hlbiBtYXAgbG9hZFwiXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgXCJQYXNzIHBhcmVudCB3aWRnZXQgdG8gdGhlIEF0dHJpYnV0ZUNvbm5lY3RvclwiXG5cbiAgICB9XG5cbiAgICBnZXRQcm9wcyA9ICgpPT57XG4gICAgICAgIGNvbnN0IHNlbGYgPSBBdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5zZWxmO1xuICAgICAgICBjb25zdCBwcm9wcyA9IHNlbGYucHJvcHM7XG4gICAgICAgIGNvbnN0IG51bWJlck9mQXR0cmlidXRlcyA9IHRoaXMubnVtYmVyT2ZBdHRyaWJ1dGVzO1xuICAgICAgICBjb25zdCBsYXllck9wZW4gPSB0aGlzLmxheWVyT3BlbjtcbiAgICAgICAgY29uc3QgYWxsQ2hlY2tlZExheWVycyA9IHRoaXMuYWxsQ2hlY2tlZExheWVycztcbiAgICAgICAgY29uc3QgYWN0aXZlVmlldyA9IHRoaXMuZ2V0QWN0aXZlVmlldygpOyBcbiAgICAgICAgaWYgKHByb3BzICYmIHByb3BzLmhhc093blByb3BlcnR5KFwiZGlzcGF0Y2hcIikpe1xuICAgICAgICAgICAgaWYoIWxheWVyT3Blbil0aHJvdyBcIlRoZXJlIGlzIG5vIGxheWVyIG9wZW5cIlxuICAgICAgICAgICAgaWYgKCFhbGxDaGVja2VkTGF5ZXJzKXRocm93IFwiVGhlcmUgaXMgbm8gYWxsIGNoZWNrZWQgbGF5ZXJzIG1ha2Ugc3VyZSB0byBwYXNzIGxheWVyXCJcbiAgICAgICAgICAgIGlmICghYWN0aXZlVmlldyl0aHJvdyBcIlRoZXJlIGlzIG5vIGFjdGl2ZVZpZXcscGFzcyBqaW11TWFwVmlldyB3aGVuIG1hcCBsb2FkXCJcbiAgICAgICAgICAgIGlmIChudW1iZXJPZkF0dHJpYnV0ZXMgJiYgT2JqZWN0LmtleXMobnVtYmVyT2ZBdHRyaWJ1dGVzKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgXCJQYXNzIHBhcmVudCB3aWRnZXQgdG8gdGhlIEF0dHJpYnV0ZUNvbm5lY3RvclwiXG4gICAgfVxuXG4gICAgZGlzcGF0Y2hDcmVhdGVUYWJsZSA9ICgpPT57XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5nZXRQcm9wcygpO1xuICAgICAgICBpZiAocHJvcHMpe1xuICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiY3JlYXRlVGFibGVcIix0cnVlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwYXRjaENoZWNoZWRMYXllcnMgPSAoY2hlY2tlZExheWVyczpzdHJpbmdbXSk9PntcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLmdldFByb3BzKCk7XG4gICAgICAgIGlmIChwcm9wcyl7XG4gICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJjaGVja2VkTGF5ZXJzXCIsY2hlY2tlZExheWVycykpO1xuICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiY3JlYXRlVGFibGVcIix0cnVlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwYXRjaEZpbHRlclZhbHVlID0gKGZpbHRlclZhbHVlOm51bWJlcik9PntcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLmdldFByb3BzKCk7XG4gICAgICAgIGlmIChwcm9wcyl7XG4gICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJmaWx0ZXJWYWx1ZVwiLCBmaWx0ZXJWYWx1ZSkpO1xuICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiY3JlYXRlVGFibGVcIix0cnVlKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yOyIsImltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENoZWNrYm94LFxyXG4gIERyb3Bkb3duLFxyXG4gIERyb3Bkb3duQnV0dG9uLFxyXG4gIERyb3Bkb3duSXRlbSxcclxuICBEcm9wZG93bk1lbnUsXHJcbiAgSW5wdXQsXHJcbiAgTXVsdGlTZWxlY3QsXHJcbiAgT3B0aW9uLFxyXG4gIFNlbGVjdCxcclxuICBUZXh0SW5wdXQsXHJcbn0gZnJvbSBcImppbXUtdWlcIjtcclxuaW1wb3J0IHsgU2V0dGluZ091dGxpbmVkIH0gZnJvbSBcImppbXUtaWNvbnMvb3V0bGluZWQvYXBwbGljYXRpb24vc2V0dGluZ1wiO1xyXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJqaW11LWNvcmVcIjtcclxuaW1wb3J0IHsgQ2xvc2VPdXRsaW5lZCB9IGZyb20gXCJqaW11LWljb25zL291dGxpbmVkL2VkaXRvci9jbG9zZVwiO1xyXG5pbXBvcnQge1xyXG4gIHF1ZXJ5Q29uc3RydWN0b3JOdW1iZXIsXHJcbiAgcXVlcnlDb25zdHJ1Y3RvclN0cmluZyxcclxufSBmcm9tIFwiLi4vdXRpbHMvcXVlcnlUYWJsZVZhbHVlXCI7XHJcbi8vIGltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gVGFibGUocHJvcHMpIHtcclxuICBjb25zdCB7XHJcbiAgICBsaXN0LFxyXG4gICAgaGFuZGxlVGhpcmRRdWVyeSxcclxuICAgIHRleHRJbnB1dEhhbmRsZXIsXHJcbiAgICBtdWx0aVNlbGVjdEhhbmRsZXIsXHJcbiAgICBkcm9wZG93bkl0ZW1IYW5kbGVyLFxyXG4gICAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyLFxyXG4gICAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcixcclxuICAgIGRyb3Bkb3duVmFsdWVRdWVyeSxcclxuICAgIGhhbmRsZUNoZWNrQm94LFxyXG4gICAgaXNDaGVja2VkLFxyXG4gICAgY291bnRlcklzQ2hlY2tlZCxcclxuICAgIGRyb3BEb3duVG9nZ2xlcixcclxuICAgIGZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZCxcclxuICAgIGNoZWNrZWRUb1F1ZXJ5LFxyXG4gICAgZGVsZXRlVGFibGUsXHJcbiAgICB0YWJsZXNJZCxcclxuICAgIGdldFF1ZXJ5QXR0cmlidXRlLFxyXG4gICAgd2hlcmVDbGF1c2VzLFxyXG4gICAgdGFibGVzLFxyXG4gICAgZ2V0UXVlcnksXHJcbiAgICB1bml2b2NvU2VsZWN0SGFuZGxlcixcclxuICAgIGRyb3BEb3duLFxyXG4gICAgaXNPcGVuRHJvcEQsXHJcbiAgICBvbkNoYW5nZUNoZWNrQm94LFxyXG4gICAgb3BlbkRyb3AsXHJcbiAgICBjbG9zZURyb3AsXHJcbiAgICBvcGVuZWQsXHJcbiAgICBhdXRPcGVuLFxyXG4gICAgbW91c2VsZWF2ZSxcclxuICAgIG9ubW91c2VMZWF2ZSxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTFcIj5cclxuICAgICAge2xpc3QuZmllbGRzID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtLTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdy0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0yIGNvbC0xIHNlbGYtZW5kXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2RlbGV0ZVRhYmxlfVxyXG4gICAgICAgICAgICAgICAgaWNvblxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDbG9zZU91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTQgbWItMlwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2dldFF1ZXJ5QXR0cmlidXRlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGNhbXBvXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovfVxyXG4gICAgICAgICAgICAgIHtsaXN0LmZpZWxkcy5tYXAoKGVsLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwib2lkXCIgfHxcclxuICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJzbWFsbC1pbnRlZ2VyXCIgfHxcclxuICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJpbnRlZ2VyXCIgfHxcclxuICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJzdHJpbmdcIiB8fFxyXG4gICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcImRvdWJsZVwiXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT17ZWwubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlPXtlbC50eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlbC5hbGlhc30gKHtlbC50eXBlfSlcclxuICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbWItMlwiPlxyXG4gICAgICAgICAgICAgIDxTZWxlY3Qgb25DaGFuZ2U9e2dldFF1ZXJ5fSBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBjYW1wb1wiPlxyXG4gICAgICAgICAgICAgICAge3doZXJlQ2xhdXNlc1t0YWJsZXNJZF0gJiZcclxuICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlc1t0YWJsZXNJZF0uYXR0cmlidXRlUXVlcnlUeXBlID09PSBcInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgID8gcXVlcnlDb25zdHJ1Y3RvclN0cmluZy5tYXAoKG8sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtvLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge28ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIDogcXVlcnlDb25zdHJ1Y3Rvck51bWJlci5tYXAoKG8sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtvLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge28ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFNlY29uZENvbnN0cnVjdG9yXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTRcIlxyXG4gICAgICAgICAgICAgIGhhbmRsZVRoaXJkUXVlcnk9e2hhbmRsZVRoaXJkUXVlcnl9XHJcbiAgICAgICAgICAgICAgdGV4dElucHV0SGFuZGxlcj17dGV4dElucHV0SGFuZGxlcn1cclxuICAgICAgICAgICAgICBtdWx0aVNlbGVjdEhhbmRsZXI9e211bHRpU2VsZWN0SGFuZGxlcn1cclxuICAgICAgICAgICAgICBkcm9wZG93bkl0ZW1IYW5kbGVyPXtkcm9wZG93bkl0ZW1IYW5kbGVyfVxyXG4gICAgICAgICAgICAgIHRleHRGaXJzdEluY2x1ZGVkSGFuZGxlcj17dGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgIHRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXI9e3RleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgZHJvcGRvd25WYWx1ZVF1ZXJ5PXtkcm9wZG93blZhbHVlUXVlcnl9XHJcbiAgICAgICAgICAgICAgaGFuZGxlQ2hlY2tCb3g9e2hhbmRsZUNoZWNrQm94fVxyXG4gICAgICAgICAgICAgIGlzQ2hlY2tlZD17aXNDaGVja2VkfVxyXG4gICAgICAgICAgICAgIGNvdW50ZXJJc0NoZWNrZWQ9e2NvdW50ZXJJc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgZnVuY3Rpb25Db3VudGVySXNDaGVja2VkPXtmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgY2hlY2tlZFRvUXVlcnk9e2NoZWNrZWRUb1F1ZXJ5fVxyXG4gICAgICAgICAgICAgIGdldFF1ZXJ5QXR0cmlidXRlPXtnZXRRdWVyeUF0dHJpYnV0ZX1cclxuICAgICAgICAgICAgICB3aGVyZUNsYXVzZXM9e3doZXJlQ2xhdXNlc31cclxuICAgICAgICAgICAgICB0YWJsZXNJZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgZHJvcERvd25Ub2dnbGVyPXtkcm9wRG93blRvZ2dsZXJ9XHJcbiAgICAgICAgICAgICAgdW5pdm9jb1NlbGVjdEhhbmRsZXI9e3VuaXZvY29TZWxlY3RIYW5kbGVyfVxyXG4gICAgICAgICAgICAgIGRyb3BEb3duPXtkcm9wRG93bn1cclxuICAgICAgICAgICAgICBpc09wZW5Ecm9wRD17aXNPcGVuRHJvcER9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2VDaGVja0JveD17b25DaGFuZ2VDaGVja0JveH1cclxuICAgICAgICAgICAgICBvcGVuRHJvcD17b3BlbkRyb3B9XHJcbiAgICAgICAgICAgICAgY2xvc2VEcm9wPXtjbG9zZURyb3B9XHJcbiAgICAgICAgICAgICAgb3BlbmVkPXtvcGVuZWR9XHJcbiAgICAgICAgICAgICAgYXV0T3Blbj17YXV0T3Blbn1cclxuICAgICAgICAgICAgICBtb3VzZWxlYXZlPXttb3VzZWxlYXZlfVxyXG4gICAgICAgICAgICAgIG9ubW91c2VMZWF2ZT17b25tb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5jb25zdCBTd2l0Y2ggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHF1ZXJ5VmFsdWVzLCBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgLy8gZmlsdGVyIG91dCBvbmx5IGNoaWxkcmVuIHdpdGggYSBtYXRjaGluZyBwcm9wXHJcbiAgcmV0dXJuIGNoaWxkcmVuLmZpbmQoKGNoaWxkKSA9PiB7XHJcbiAgICByZXR1cm4gY2hpbGQucHJvcHMudmFsdWUgPT09IHF1ZXJ5VmFsdWVzO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgU2Vjb25kQ29uc3RydWN0b3IgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0ZXh0SW5wdXRIYW5kbGVyLFxyXG4gICAgZHJvcGRvd25JdGVtSGFuZGxlcixcclxuICAgIHRleHRGaXJzdEluY2x1ZGVkSGFuZGxlcixcclxuICAgIHRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXIsXHJcbiAgICBjb3VudGVySXNDaGVja2VkLFxyXG4gICAgZnVuY3Rpb25Db3VudGVySXNDaGVja2VkLFxyXG4gICAgdGFibGVzSWQsXHJcbiAgICB3aGVyZUNsYXVzZXMsXHJcbiAgICBkcm9wRG93blRvZ2dsZXIsXHJcbiAgICB1bml2b2NvU2VsZWN0SGFuZGxlcixcclxuICAgIGRyb3BEb3duLFxyXG4gICAgaXNPcGVuRHJvcEQsXHJcbiAgICBvbkNoYW5nZUNoZWNrQm94LFxyXG4gICAgb3BlbkRyb3AsXHJcbiAgICBjbG9zZURyb3AsXHJcbiAgICBvcGVuZWQ6IGQsXHJcbiAgICBhdXRPcGVuLFxyXG4gICAgb25tb3VzZUxlYXZlLFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBub3JtYWxpemVkVGhpcmRRdWVyeSA9IFtdO1xyXG4gIGxldCBkZWZhdWx0VmFsdWUgPSBcIj1cIjtcclxuICBsZXQgZHJvcGRvd25WYWx1ZVF1ZXJ5ID0gXCJ2YWxvcmVcIjtcclxuICBsZXQgb3BlbmVkID0gZmFsc2U7XHJcbiAgbGV0IGNoZWNrZWQgPSAwO1xyXG4gIGxldCBhdSA9IHRydWU7XHJcblxyXG4gIC8vIHZhbHVlVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7IG5vcm1hbGl6ZWRUaGlyZFF1ZXJ5LnB1c2goeyBsYWJlbDogZWwubGFiZWxbMF0udG9TdHJpbmcoKSwgdmFsdWU6IGVsLnZhbHVlWzBdLnRvU3RyaW5nKCkgfSkgfSlcclxuICBpZiAod2hlcmVDbGF1c2VzW3RhYmxlc0lkXSAmJiB3aGVyZUNsYXVzZXNbdGFibGVzSWRdLmlmSW5Pck5vdEluUXVlcnlWYWx1ZSkge1xyXG4gICAgd2hlcmVDbGF1c2VzW3RhYmxlc0lkXS5pZkluT3JOb3RJblF1ZXJ5VmFsdWUubWFwKChlbCwgaSkgPT4ge1xyXG4gICAgICBub3JtYWxpemVkVGhpcmRRdWVyeS5wdXNoKHtcclxuICAgICAgICBpZDogdGFibGVzSWQudG9TdHJpbmcoKSxcclxuICAgICAgICBsYWJlbDogZWwubGFiZWxbMF0udG9TdHJpbmcoKSxcclxuICAgICAgICB2YWx1ZTogZWwudmFsdWVbMF0udG9TdHJpbmcoKSxcclxuICAgICAgICBsaXN0ZWw6IHdoZXJlQ2xhdXNlc1t0YWJsZXNJZF0uY2hlY2tlZExpc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmICh3aGVyZUNsYXVzZXNbdGFibGVzSWRdICYmIHdoZXJlQ2xhdXNlc1t0YWJsZXNJZF0ucXVlcnlWYWx1ZSkge1xyXG4gICAgZGVmYXVsdFZhbHVlID0gd2hlcmVDbGF1c2VzW3RhYmxlc0lkXS5xdWVyeVZhbHVlO1xyXG4gIH1cclxuICBpZiAod2hlcmVDbGF1c2VzW3RhYmxlc0lkXSAmJiB3aGVyZUNsYXVzZXNbdGFibGVzSWRdLmRyb3Bkb3duVmFsdWVRdWVyeSkge1xyXG4gICAgZHJvcGRvd25WYWx1ZVF1ZXJ5ID0gd2hlcmVDbGF1c2VzW3RhYmxlc0lkXS5kcm9wZG93blZhbHVlUXVlcnk7XHJcbiAgfVxyXG4gIGlmICh3aGVyZUNsYXVzZXNbdGFibGVzSWRdICYmIHdoZXJlQ2xhdXNlc1t0YWJsZXNJZF0uaXNPcGVuKSB7XHJcbiAgICAvLyBvcGVuZWQgPSB3aGVyZUNsYXVzZXNbdGFibGVzSWRdLmlzT3BlbjtcclxuICB9XHJcblxyXG4gIGlmICh3aGVyZUNsYXVzZXNbdGFibGVzSWRdICYmIHdoZXJlQ2xhdXNlc1t0YWJsZXNJZF0uY2hlY2tlZExpc3QpIHtcclxuICAgIGNoZWNrZWQgPSB3aGVyZUNsYXVzZXNbdGFibGVzSWRdLmNoZWNrZWRMaXN0Lmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRlc3QgPSAocHJvcHMpID0+IHt9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3dpdGNoIHF1ZXJ5VmFsdWVzPXtkZWZhdWx0VmFsdWV9PlxyXG4gICAgICA8ZGl2IHZhbHVlPXtcIj1cIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC1tZC00XCI+XHJcbiAgICAgICAge2Ryb3Bkb3duVmFsdWVRdWVyeSA9PT0gXCJ1bml2b2NvXCIgPyAoXHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt1bml2b2NvU2VsZWN0SGFuZGxlcn1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgaWwgTGF5ZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bm9ybWFsaXplZFRoaXJkUXVlcnkubWFwKChlbCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtpfSBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH0+XHJcbiAgICAgICAgICAgICAgICAgIHtlbC5sYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XHJcbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxyXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTFcIj5cclxuICAgICAgICAgIHt9XHJcbiAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbj5cclxuICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQgY2xhc3NOYW1lPVwic2V0dGluZy1zdmdcIiAvPlxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxyXG4gICAgICAgICAgICA8RHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPkltcG9ydGEgaWwgdGlwbyBkaSBpbnB1dDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cclxuICAgICAgICAgICAgICAgIHZhbHVlPVwidmFsb3JlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Ryb3Bkb3duSXRlbUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBWYWxvcmVcclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cImNhbXBvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Ryb3Bkb3duSXRlbUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2FtcG9cclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInVuaXZvY29cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZHJvcGRvd25JdGVtSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFVuaXZvY2lcclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiB2YWx1ZT17XCI8PlwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cclxuICAgICAgICB7ZHJvcGRvd25WYWx1ZVF1ZXJ5ID09PSBcInVuaXZvY29cIiA/IChcclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3VuaXZvY29TZWxlY3RIYW5kbGVyfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtub3JtYWxpemVkVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2l9IGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfT5cclxuICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGV4dElucHV0SGFuZGxlcn1cclxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXHJcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMVwiPlxyXG4gICAgICAgICAgPERyb3Bkb3duIGFjdGl2ZUljb24+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGNsYXNzTmFtZT1cInNldHRpbmctc3ZnXCIgLz5cclxuICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cclxuICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhlYWRlcj5JbXBvcnRhIGlsIHRpcG8gZGkgaW5wdXQ8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInZhbG9yZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtkcm9wZG93bkl0ZW1IYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVmFsb3JlXHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJjYW1wb1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtkcm9wZG93bkl0ZW1IYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENhbXBvXHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ1bml2b2NvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Ryb3Bkb3duSXRlbUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBVbml2b2NpXHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgdmFsdWU9e1wiSU5cIn0gb25Nb3VzZUxlYXZlPXsoKSA9PiBvbm1vdXNlTGVhdmUoKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbiBpc09wZW49e2F1dE9wZW59IHRvZ2dsZT17KCkgPT4gZHJvcERvd259PlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvcGVuRHJvcCgpfT5cclxuICAgICAgICAgICAgICAgIHtjaGVja2VkfSBlbGVtZW50aSBzZWxlemlvbmF0aVxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPk11bHRpIHNlbGV6aW9uZSBhdHRpdmE8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAge25vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lm1hcCgoZWwsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJhdGVneT17XCJmaXhlZFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDaGVja0JveH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtlbC5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbC5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwubGlzdGVsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmxpc3RlbC5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5jaGVja1ZhbHVlID09PSBlbC5sYWJlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMyBtYi0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHsvKjxNdWx0aVNlbGVjdCovfVxyXG4gICAgICAgICAgey8qICAgIGRpc3BsYXlCeVZhbHVlcz17ZnVuY3Rpb24gbXlGdW5jdGlvbiAoZSkgeyByZXR1cm4gYCR7Y291bnRlcklzQ2hlY2tlZC5sZW5ndGh9IGVsZW1lbnRpIHNlbGV6aW9uYXRpYCB9fSovfVxyXG4gICAgICAgICAgey8qICAgIGl0ZW1zPXtub3JtYWxpemVkVGhpcmRRdWVyeX0qL31cclxuICAgICAgICAgIHsvKiAgICBvbkNsaWNrSXRlbT17ZnVuY3Rpb25Db3VudGVySXNDaGVja2VkfSovfVxyXG4gICAgICAgICAgey8qICAgIHBsYWNlaG9sZGVyPXsnMCBlbGVtZW50aSBzZWxlemlvbmF0aSd9Ki99XHJcbiAgICAgICAgICB7LyogICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9Ki99XHJcbiAgICAgICAgICB7LyogICAgb25DbGljaz17dGVzdH0qL31cclxuICAgICAgICAgIHsvKi8+Ki99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHZhbHVlPXtcIk5PVF9JTlwifSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICA8TXVsdGlTZWxlY3RcclxuICAgICAgICAgICAgZGlzcGxheUJ5VmFsdWVzPXtmdW5jdGlvbiBteUZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gYCR7Y291bnRlcklzQ2hlY2tlZC5sZW5ndGh9IGVsZW1lbnRpIHNlbGV6aW9uYXRpYDtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaXRlbXM9e25vcm1hbGl6ZWRUaGlyZFF1ZXJ5fVxyXG4gICAgICAgICAgICBvbkNsaWNrSXRlbT17ZnVuY3Rpb25Db3VudGVySXNDaGVja2VkfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0ZXN0fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17XCIwIGVsZW1lbnRpIHNlbGV6aW9uYXRpXCJ9XHJcbiAgICAgICAgICAgIGlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHZhbHVlPXtcIjw9XCJ9IGNsYXNzTmFtZT1cImQtZmxleCAgY29sLW1kLTRcIj5cclxuICAgICAgICB7ZHJvcGRvd25WYWx1ZVF1ZXJ5ID09PSBcInVuaXZvY29cIiA/IChcclxuICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgaWwgTGF5ZXJcIj5cclxuICAgICAgICAgICAge25vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lm1hcCgoZWwsIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17aX0gZGF0YS10YWJsZS1pZD17dGFibGVzSWR9PlxyXG4gICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0ZXh0SW5wdXRIYW5kbGVyfVxyXG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcclxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0xXCI+XHJcbiAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbj5cclxuICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQgY2xhc3NOYW1lPVwic2V0dGluZy1zdmdcIiAvPlxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxyXG4gICAgICAgICAgICA8RHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPkltcG9ydGEgaWwgdGlwbyBkaSBpbnB1dDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cclxuICAgICAgICAgICAgICAgIHZhbHVlPVwidmFsb3JlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Ryb3Bkb3duSXRlbUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBWYWxvcmVcclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cImNhbXBvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Ryb3Bkb3duSXRlbUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2FtcG9cclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInVuaXZvY29cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZHJvcGRvd25JdGVtSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFVuaXZvY2lcclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiB2YWx1ZT17XCI+PVwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cclxuICAgICAgICB7ZHJvcGRvd25WYWx1ZVF1ZXJ5ID09PSBcInVuaXZvY29cIiA/IChcclxuICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgaWwgTGF5ZXJcIj5cclxuICAgICAgICAgICAge25vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lm1hcCgoZWwsIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17aX0gZGF0YS10YWJsZS1pZD17dGFibGVzSWR9PlxyXG4gICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0ZXh0SW5wdXRIYW5kbGVyfVxyXG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcclxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0xXCI+XHJcbiAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbj5cclxuICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQgY2xhc3NOYW1lPVwic2V0dGluZy1zdmdcIiAvPlxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxyXG4gICAgICAgICAgICA8RHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPkltcG9ydGEgaWwgdGlwbyBkaSBpbnB1dDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cclxuICAgICAgICAgICAgICAgIHZhbHVlPVwidmFsb3JlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Ryb3Bkb3duSXRlbUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBWYWxvcmVcclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cImNhbXBvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Ryb3Bkb3duSXRlbUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2FtcG9cclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInVuaXZvY29cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZHJvcGRvd25JdGVtSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFVuaXZvY2lcclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiB2YWx1ZT17XCI8XCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxyXG4gICAgICAgIHtkcm9wZG93blZhbHVlUXVlcnkgPT09IFwidW5pdm9jb1wiID8gKFxyXG4gICAgICAgICAgPFNlbGVjdCBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiPlxyXG4gICAgICAgICAgICB7bm9ybWFsaXplZFRoaXJkUXVlcnkubWFwKChlbCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtpfSBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH0+XHJcbiAgICAgICAgICAgICAgICAgIHtlbC5sYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XHJcbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxyXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTFcIj5cclxuICAgICAgICAgIDxEcm9wZG93biBhY3RpdmVJY29uPlxyXG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBjbGFzc05hbWU9XCJzZXR0aW5nLXN2Z1wiIC8+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBoZWFkZXI+SW1wb3J0YSBpbCB0aXBvIGRpIGlucHV0PC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ2YWxvcmVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZHJvcGRvd25JdGVtSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFZhbG9yZVxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cclxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2FtcG9cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZHJvcGRvd25JdGVtSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW1wb1xyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cclxuICAgICAgICAgICAgICAgIHZhbHVlPVwidW5pdm9jb1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtkcm9wZG93bkl0ZW1IYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVW5pdm9jaVxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHZhbHVlPXtcIj5cIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC1tZC00XCI+XHJcbiAgICAgICAge2Ryb3Bkb3duVmFsdWVRdWVyeSA9PT0gXCJ1bml2b2NvXCIgPyAoXHJcbiAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGlsIExheWVyXCI+XHJcbiAgICAgICAgICAgIHtub3JtYWxpemVkVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2l9IGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfT5cclxuICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGV4dElucHV0SGFuZGxlcn1cclxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXHJcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMVwiPlxyXG4gICAgICAgICAgPERyb3Bkb3duIGFjdGl2ZUljb24+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGNsYXNzTmFtZT1cInNldHRpbmctc3ZnXCIgLz5cclxuICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cclxuICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhlYWRlcj5JbXBvcnRhIGlsIHRpcG8gZGkgaW5wdXQ8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInZhbG9yZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtkcm9wZG93bkl0ZW1IYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVmFsb3JlXHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJjYW1wb1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtkcm9wZG93bkl0ZW1IYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENhbXBvXHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ1bml2b2NvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Ryb3Bkb3duSXRlbUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBVbml2b2NpXHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgdmFsdWU9e1wiaXMgbnVsbFwifT48L2Rpdj5cclxuICAgICAgPGRpdiB2YWx1ZT17XCJpcyBub3QgbnVsbFwifT48L2Rpdj5cclxuICAgICAgPGRpdiB2YWx1ZT17XCJpbmNsdWRlZFwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RleHRGaXJzdEluY2x1ZGVkSGFuZGxlcn1cclxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcclxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29sLW1kLTIgdGV4dC1jZW50ZXJcIj5lPC9wPlxyXG4gICAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcn1cclxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcclxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiB2YWx1ZT17XCJpc19ub3RfaW5jbHVkZWRcIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC1tZC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXHJcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbC1tZC0yIHRleHQtY2VudGVyXCI+ZTwvcD5cclxuICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXHJcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgdmFsdWU9e1wiTElLRSVcIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC1tZC00XCI+XHJcbiAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XHJcbiAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxyXG4gICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgdmFsdWU9e1wiJUxJS0VcIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC1tZC00XCI+XHJcbiAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XHJcbiAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxyXG4gICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgdmFsdWU9e1wiTElLRSVcIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC1tZC00XCI+XHJcbiAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XHJcbiAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxyXG4gICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgdmFsdWU9e1wiJUxJS0UlXCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxyXG4gICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgIG9uQ2hhbmdlPXt0ZXh0SW5wdXRIYW5kbGVyfVxyXG4gICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcclxuICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHZhbHVlPXtcIk5PVCBMSUtFXCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxyXG4gICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgIG9uQ2hhbmdlPXt0ZXh0SW5wdXRIYW5kbGVyfVxyXG4gICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcclxuICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Td2l0Y2g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xyXG4iLCIvKipcclxuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBfd2lkZ2V0TGFiZWw6ICdDb3N0cnV0dG9yZSBRdWVyeScsXHJcbiAgICBzZWxlY3RHZW9tZXRyeTpcIlNlbGV6aW9uYXJlIGxhIGdlb21ldHJpYVwiLFxyXG4gICAgbGF5ZXJzOlwiU3RyYXRpXCIsXHJcbiAgICB6b29tQTpcIlpvb20gQVwiLFxyXG4gICAgZXhwb3J0Q3N2OlwiRXNwb3J0YXppb25lIGluIGZpbGUgY3N2XCIsXHJcbiAgICBleHBvcnRKc29uOlwiRXNwb3J0YXppb25lIGluIHVuYSByYWNjb2x0YSBkaSBmdW56aW9uaVwiLFxyXG4gICAgc3RhdGlzdGljczpcIlN0YXRpc3RpY2hlXCIsXHJcbiAgICBjcmVhdGVMYXllcjpcIkNyZWFyZSBpbCBsaXZlbGxvXCIsXHJcbiAgICBhdHRyaWJ1dGVUYWJsZTpcIlZpc3RhIG5lbGxhIHRhYmVsbGEgZGVnbGkgYXR0cmlidXRpXCIsXHJcbiAgICBkZWxldGU6XCJDYW5jZWxsYXJlXCIsXHJcbiAgICBjb3VudE9mSXRlbXM6XCJDb250ZWdnaW8gZGVnbGkgYXJ0aWNvbGlcIixcclxuICAgIHN1bU9mVmFsdWVzOlwiU29tbWEgZGVpIHZhbG9yaVwiLFxyXG4gICAgbWluaW11bTpcIk1pbmltb1wiLFxyXG4gICAgbWF4aW11bTpcIk1hc3NpbW9cIixcclxuICAgIGF2ZXJhZ2U6XCJNZWRpYVwiLFxyXG4gICAgc2VsZWN0QnlQb2ludDpcIlNlbGV6aW9uZSBwZXIgcHVudG9cIixcclxuICAgIHNlbGVjdGlvbkJ5TGluZTpcIlNlbGV6aW9uZSBwZXIgbGluZWFcIixcclxuICAgIHNlbGVjdGlvbkJ5UG9seWdvbjpcIlNlbGV6aW9uZSBwZXIgcG9saWdvbm9cIixcclxuICAgIHNlbGVjdGlvbkJ5UmVjdGFuZ3VsYXI6XCJTZWxlemlvbmUgcGVyIHJldHRhbmdvbG9cIixcclxuICAgIHNlbGVjdGlvbkJ5Q2lyY2xlOlwiU2VsZXppb25lIHBlciBjZXJjaGlvXCIsXHJcbiAgICByZWZyZXNoOlwiQWdnaW9ybmFyZVwiLFxyXG4gICAgb2s6XCJPS1wiLFxyXG4gICAgY2FuY2VsOlwiQW5udWxsYW1lbnRvXCIsXHJcbiAgICBmaWVsZHM6XCJDYW1waVwiLFxyXG4gICAgc2VsZWN0aW9uQWN0aW9uOlwiU2VsZXppb25lIEF6aW9uZVwiLFxyXG4gICAgbWFwTG9hZGluZzpcIkluIGF0dGVzYSBkZWwgY2FyaWNhbWVudG8gZGVsbGEgbWFwcGEuLi5cIixcclxuICAgIG5vU2VsZWN0ZWRJdGVtOlwiTm9uIMOoIHN0YXRhIHNlbGV6aW9uYXRhIGFsY3VuYSB2b2NlXCJcclxufVxyXG4iLCJjb25zdCAgcXVlcnlDb25zdHJ1Y3Rvck51bWJlciA9IFtcclxuICAgIHsgbmFtZTogJ8OoJywgdmFsdWU6ICc9JyB9LFxyXG4gICAgeyBuYW1lOiAnbm9uIMOoJywgdmFsdWU6ICc8PicgfSxcclxuICAgIHsgbmFtZTogJ8OoIHVubyBkaScsIHZhbHVlOiAnSU4nIH0sIC8vIE9CSkVDVElEIElOICgxLDIsMylcclxuICAgIHsgbmFtZTogJ25vbiDDqCBuZXNzdW5vIGRpJywgdmFsdWU6ICdOT1RfSU4nIH0sIC8vICAgT0JKRUNUSUQgTk9UX0lOICgxLDIsMylcclxuICAgIHsgbmFtZTogJ8OoIGFsbWVubycsIHZhbHVlOiAnPD0nIH0sXHJcbiAgICB7IG5hbWU6ICfDqCBhbCBtYXNzaW1vJywgdmFsdWU6ICc+PScgfSxcclxuICAgIHsgbmFtZTogJ8OoIG1pbm9yZSBkaScsIHZhbHVlOiAnPCcgfSxcclxuICAgIHsgbmFtZTogJ8OoIG1hZ2dpb3JlIGRpJywgdmFsdWU6ICc+JyB9LFxyXG4gICAgeyBuYW1lOiAnw6ggdnVvdG8nLCB2YWx1ZTogJ2lzIG51bGwnIH0sXHJcbiAgICB7IG5hbWU6ICdub24gw6ggdnVvdG8nLCB2YWx1ZTogJ2lzIG5vdCBudWxsJyB9LFxyXG4gICAgeyBuYW1lOiAnw6ggY29tcHJlc28gdHJhJywgdmFsdWU6ICdpbmNsdWRlZCcgfSwgLy8gT0JKRUNUSUQgPCAyIEFORCBPQkpFQ1RJRCA+IDRcclxuICAgIHsgbmFtZTogJ25vbiDDqCBjb21wcmVzbyB0cmEnLCB2YWx1ZTogJ2lzX25vdF9pbmNsdWRlZCcgfSAvL2RhIHRyb3ZhcmVcclxuXTtcclxuY29uc3QgICBxdWVyeUNvbnN0cnVjdG9yU3RyaW5nID0gW1xyXG4gICAgeyBuYW1lOiAnw6gnLCB2YWx1ZTogJz0nIH0sXHJcbiAgICB7IG5hbWU6ICdub24gw6gnLCB2YWx1ZTogJzw+JyB9LFxyXG4gICAgeyBuYW1lOiAnw6ggdW5vIGRpJywgdmFsdWU6ICdJTicgfSxcclxuICAgIHsgbmFtZTogJ25vbiDDqCBuZXNzdW5vIGRpJywgdmFsdWU6ICdOT1RfSU4nIH0sXHJcbiAgICB7IG5hbWU6ICdpbml6aWEgY29uJywgdmFsdWU6ICdMSUtFJScgfSxcclxuICAgIHsgbmFtZTogJ3Rlcm1pbmEgY29uJywgdmFsdWU6ICclTElLRScgfSxcclxuICAgIHsgbmFtZTogJ2NvbnRpZW5lJywgdmFsdWU6ICclTElLRSUnIH0sXHJcbiAgICB7IG5hbWU6ICdub24gY29udGllbmUnLCB2YWx1ZTogJ05PVCBMSUtFJyB9LFxyXG4gICAgeyBuYW1lOiAnw6ggdnVvdG8nLCB2YWx1ZTogJ2lzIG51bGwnIH0sXHJcbiAgICB7IG5hbWU6ICdub24gw6ggdnVvdG8nLCB2YWx1ZTogJ2lzIG5vdCBudWxsJyB9XHJcbl07XHJcbmV4cG9ydCB7IHF1ZXJ5Q29uc3RydWN0b3JOdW1iZXIsIHF1ZXJ5Q29uc3RydWN0b3JTdHJpbmcgfSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19HcmFwaGljc0xheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfcmVzdF9zdXBwb3J0X1F1ZXJ5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBSZWFjdCwgQWxsV2lkZ2V0UHJvcHMsIGpzeCxhcHBBY3Rpb25zIH0gZnJvbSBcImppbXUtY29yZVwiO1xyXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgSmltdU1hcFZpZXcgfSBmcm9tIFwiamltdS1hcmNnaXNcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IFNlbGVjdCwgT3B0aW9uLCBBbGVydCwgQnV0dG9uLCBJY29uIH0gZnJvbSBcImppbXUtdWlcIjtcclxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tIFwiLi90cmFuc2xhdGlvbnMvZGVmYXVsdFwiO1xyXG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IFF1ZXJ5IGZyb20gXCJlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeVwiO1xyXG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tIFwiZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllclwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIi4vY29tcG9uZW50cy9UYWJsZVwiO1xyXG5pbXBvcnQgaGVscGVyIGZyb20gJy4uL2hlbHBlcic7XHJcbmltcG9ydCBQb2x5Z29uIGZyb20gJ2VzcmkvZ2VvbWV0cnkvUG9seWdvbic7XHJcbmltcG9ydCBhdHRyaWJ1dGVfdGFibGVfY29ubmVjdG9yIGZyb20gJy4uL2F0dHJpYnV0ZV90YWJsZV9jb25uZWN0b3InXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XHJcbiAgQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+LFxyXG4gIGFueVxyXG4+IHtcclxuICBncmFwaGljTGF5ZXJGb3VuZCA9IG5ldyBHcmFwaGljc0xheWVyKHsgbGlzdE1vZGU6IFwiaGlkZVwiLCB2aXNpYmxlOiB0cnVlIH0pO1xyXG4gIGdyYXBoaWNMYXllclNlbGVjdGVkID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBsaXN0TW9kZTogXCJoaWRlXCIsIHZpc2libGU6IHRydWUgfSk7XHJcblxyXG4gIHN0YXRpYyBhY3RpdmVWID0gbnVsbDtcclxuICBzdGF0aWMgamltdUxheWVyVmlld3ogPSBudWxsO1xyXG4gIHN0YXRpYyBhbnl2YXJpYWJsZSA9IG51bGxcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBqaW11TWFwVmlldzogbnVsbCxcclxuICAgICAgbGF5ZXJDb250ZW50czpbXSxcclxuICAgICAgY2hlY2tlZExheWVyXzpbXSxcclxuICAgICAgcmVzdWx0TGF5ZXJMaXN0OiBbXSxcclxuICAgICAgaXNMYXllclNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgcmVzdWx0c0xheWVyU2VsZWN0ZWQ6IFtdLFxyXG4gICAgICBjdXJyZW50VGFyZ2V0VGV4dDogbnVsbCxcclxuICAgICAgZ2VvbWV0cnk6IG51bGwsXHJcbiAgICAgIHR5cGVTZWxlY3RlZDogbnVsbCxcclxuICAgICAgbGlzdFNlcnZpY2VzOiBbXSxcclxuICAgICAgY3VycmVudEZpcnN0UXVlcnk6IFwiXCIsXHJcbiAgICAgIGN1cnJlbnRGaXJzdFF1ZXJ5VHlwZTogbnVsbCxcclxuICAgICAgZHJvcGRvd25WYWx1ZVF1ZXJ5OiBcInZhbG9yZVwiLFxyXG4gICAgICBmaXJzdFRleHRJbmNsdWRlZEhhbmRsZXI6IFwiMFwiLFxyXG4gICAgICBzZWNvbmRUZXh0SW5jbHVkZWRIYW5kbGVyOiBcIjBcIixcclxuICAgICAgdGFibGVzOiBbXSxcclxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcclxuICAgICAgY291bnRlcklzQ2hlY2tlZDogW10sXHJcbiAgICAgIGNoZWNrZWRUb1F1ZXJ5OiBbXSxcclxuICAgICAgdGFibGVDb3VudGVyOiAwLFxyXG4gICAgICB3aGVyZUNsYXVzZXM6IFtdLFxyXG4gICAgICB0YWJsZXNJZDogbnVsbCxcclxuICAgICAgaXNPcGVuOiBmYWxzZSxcclxuICAgICAgQW5kT3I6IFwiQU5EXCIsXHJcbiAgICAgIG9wZW5lZDogZmFsc2UsXHJcbiAgICAgIGF1dE9wZW46IHRydWUsXHJcbiAgICAgIG1vdXNlbGVhdmU6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIHRoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSB0aGlzLmFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICAvL0xheWVyXHJcbiAgICB0aGlzLm9uQ2hhbmdlU2VsZWN0TGF5ZXIgPSB0aGlzLm9uQ2hhbmdlU2VsZWN0TGF5ZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZ2V0UXVlcnlBdHRyaWJ1dGUgPSB0aGlzLmdldFF1ZXJ5QXR0cmlidXRlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmdldFF1ZXJ5ID0gdGhpcy5nZXRRdWVyeS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZW5kUXVlcnkgPSB0aGlzLnNlbmRRdWVyeS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy50aGlyZFF1ZXJ5ID0gdGhpcy50aGlyZFF1ZXJ5LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRyb3Bkb3duSXRlbUNsaWNrID0gdGhpcy5kcm9wZG93bkl0ZW1DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jaG9vc2VBbmRPciA9IHRoaXMuY2hvb3NlQW5kT3IuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY2xvc2VEcm9wID0gdGhpcy5jbG9zZURyb3AuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub3BlbkRyb3AgPSB0aGlzLm9wZW5Ecm9wLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNsb3NlRHJvcE9uY2xpY2tPdXRzaWRlID0gdGhpcy5jbG9zZURyb3BPbmNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbm1vdXNlTGVhdmUgPSB0aGlzLm9ubW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5nZXRBbGxDaGVja2VkTGF5ZXJzID0gdGhpcy5nZXRBbGxDaGVja2VkTGF5ZXJzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmdldEFsbEppbXVMYXllclZpZXdzID0gdGhpcy5nZXRBbGxKaW11TGF5ZXJWaWV3cy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jb25uZWN0b3IgPSB0aGlzLmNvbm5lY3Rvci5iaW5kKHRoaXMpO1xyXG5cclxuICB9XHJcblxyXG4gIG5scyA9IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pbnRsXHJcbiAgICAgID8gdGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlc1tpZF0sXHJcbiAgICAgICAgfSlcclxuICAgICAgOiBpZDtcclxuICB9O1xyXG5cclxuICBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcihqbXY6IEppbXVNYXBWaWV3KSB7XHJcbiAgICBpZiAoam12KSB7XHJcbiAgICAgIGptdi52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljTGF5ZXJGb3VuZCk7XHJcbiAgICAgIGptdi52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljTGF5ZXJTZWxlY3RlZCk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdExheWVyTGlzdCA9IFtdO1xyXG4gICAgICBXaWRnZXQuYW55dmFyaWFibGUgPSBuZXcgYXR0cmlidXRlX3RhYmxlX2Nvbm5lY3RvcihqbXYsdGhpcyk7XHJcbiAgICAgIGptdi52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoZi50eXBlID09PSBcImZlYXR1cmVcIikge1xyXG4gICAgICAgICAgam12LnZpZXcud2hlbkxheWVyVmlldyhmKS50aGVuKChsYXllclZpZXcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKTtcclxuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBcIjE9MVwiO1xyXG4gICAgICAgICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbXCIqXCJdO1xyXG4gICAgICAgICAgICBsYXllclZpZXcuZmlsdGVyID0ge1xyXG4gICAgICAgICAgICAgIHdoZXJlOiBxdWVyeS53aGVyZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxheWVyVmlldy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJlc3VsdExheWVyTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgZWxlbWVudDogZixcclxuICAgICAgICAgICAgbGFiZWw6IGYudGl0bGUsXHJcbiAgICAgICAgICAgIHZhbHVlOiBpbmRleCxcclxuICAgICAgICAgICAgbGF5ZXJJRDogZi5sYXllcklkLFxyXG4gICAgICAgICAgICB1cmxTZXJ2aWNlU2VydmVyOiBmLnVybCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIFdpZGdldC5hY3RpdmVWPWptdjtcclxuICAgICAgV2lkZ2V0LmppbXVMYXllclZpZXd6ID0gam12Py5qaW11TGF5ZXJWaWV3cztcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgcmVzdWx0TGF5ZXJMaXN0OiByZXN1bHRMYXllckxpc3QsXHJcbiAgICAgICAgamltdU1hcFZpZXc6IGptdixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmlzTGF5ZXJTZWxlY3RlZCAhPT0gcHJldlByb3BzLmlzTGF5ZXJTZWxlY3RlZCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIsOoIHN0YXRvIHNlbGV6aW9uYXRvIHVuIGxheWVyXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzICE9PSBwcmV2UHJvcHMud2hlcmVDbGF1c2VzKSB7XHJcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe3doZXJlQ2xhdXNlczogdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXN9KVxyXG4gICAgfVxyXG4gICAgaWYgKHByZXZQcm9wcy5zdGF0ZSA9PSBcIkNMT1NFRFwiKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGlzTGF5ZXJTZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgY3VycmVudFRhcmdldFRleHQ6IG51bGwsXHJcbiAgICAgICAgZ2VvbWV0cnk6IG51bGwsXHJcbiAgICAgICAgdHlwZVNlbGVjdGVkOiBudWxsLFxyXG4gICAgICAgIGxpc3RTZXJ2aWNlczogW10sXHJcbiAgICAgICAgY3VycmVudEZpcnN0UXVlcnk6IFwiXCIsXHJcbiAgICAgICAgY3VycmVudEZpcnN0UXVlcnlUeXBlOiBudWxsLFxyXG4gICAgICAgIGRyb3Bkb3duVmFsdWVRdWVyeTogXCJ2YWxvcmVcIixcclxuICAgICAgICBmaXJzdFRleHRJbmNsdWRlZEhhbmRsZXI6IFwiMFwiLFxyXG4gICAgICAgIHNlY29uZFRleHRJbmNsdWRlZEhhbmRsZXI6IFwiMFwiLFxyXG4gICAgICAgIHRhYmxlczogW10sXHJcbiAgICAgICAgaXNDaGVja2VkOiBmYWxzZSxcclxuICAgICAgICBjb3VudGVySXNDaGVja2VkOiBbXSxcclxuICAgICAgICBjaGVja2VkVG9RdWVyeTogW10sXHJcbiAgICAgICAgdGFibGVDb3VudGVyOiAwLFxyXG4gICAgICAgIHdoZXJlQ2xhdXNlczogW10sXHJcbiAgICAgICAgdGFibGVzSWQ6IG51bGwsXHJcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcclxuICAgICAgICBBbmRPcjogXCJBTkRcIixcclxuICAgICAgICBvcGVuZWQ6IGZhbHNlLFxyXG4gICAgICAgIGF1dE9wZW46IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7fVxyXG4gIC8qKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgKiBFVkVOVCBDTElDSyBTRUxFQ1RcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4gIGFzeW5jIGdldFF1ZXJ5QXR0cmlidXRlKGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlKVxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5sZW5ndGgpIHtcclxuICAgICAgbGV0IHdoZXJlQ2xhdXNlID0ge1xyXG4gICAgICAgIGlkOiBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1sxXS52YWx1ZSxcclxuICAgICAgICBhdHRyaWJ1dGVRdWVyeTogZS5jdXJyZW50VGFyZ2V0Lm5hbWUsXHJcbiAgICAgICAgYXR0cmlidXRlUXVlcnlUeXBlOiBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlcy5kYXRhdHlwZS52YWx1ZSxcclxuICAgICAgICBxdWVyeVZhbHVlOiBcIj1cIixcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgd2hlcmVDbGF1c2VzOiBbd2hlcmVDbGF1c2VdLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgcXVlcnlJbmRleCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzXHJcbiAgICAgICAgLm1hcCgob2JqKSA9PiBvYmouaWQpXHJcbiAgICAgICAgLmluZGV4T2YoZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMV0udmFsdWUpO1xyXG4gICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLm1hcCgob2JqKSA9PiB7XHJcbiAgICAgICAgICBpZiAob2JqLmlkID09PSBxdWVyeUluZGV4LnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgb2JqID0ge1xyXG4gICAgICAgICAgICAgIC4uLm9iaixcclxuICAgICAgICAgICAgICBhdHRyaWJ1dGVRdWVyeTogZS5jdXJyZW50VGFyZ2V0Lm5hbWUsXHJcbiAgICAgICAgICAgICAgYXR0cmlidXRlUXVlcnlUeXBlOiBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlcy5kYXRhdHlwZS52YWx1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzW3F1ZXJ5SW5kZXhdID0gb2JqXHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmZpbHRlcihcclxuICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcclxuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4geyBvYmogfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgd2hlcmVDbGF1c2UgPSB7XHJcbiAgICAgICAgICBpZDogZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMV0udmFsdWUsXHJcbiAgICAgICAgICBhdHRyaWJ1dGVRdWVyeTogZS5jdXJyZW50VGFyZ2V0Lm5hbWUsXHJcbiAgICAgICAgICBhdHRyaWJ1dGVRdWVyeVR5cGU6IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzLmRhdGF0eXBlLnZhbHVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICB3aGVyZUNsYXVzZXM6IFsuLi50aGlzLnN0YXRlLndoZXJlQ2xhdXNlcywgd2hlcmVDbGF1c2VdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGZvciBjYWxsZWQgb24gZHJvcCBzZWxlY3QgbGlzdFxyXG4gIGFzeW5jIGdldFF1ZXJ5KGUpIHtcclxuICAgIGxldCBjbGlja2VkUXVlcnlUYWJsZUlkID0gZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMV0udmFsdWU7XHJcbiAgICBsZXQgY3VycmVudENsaWNrZWRRdWVyeUF0dHJpYnV0ZTtcclxuICAgIGxldCBxdWVyeUluZGV4O1xyXG4gICAgaWYgKHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmxlbmd0aCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImNpIHNvbm8gcGnDuSBxdWVyeVwiKTtcclxuICAgICAgcXVlcnlJbmRleCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzXHJcbiAgICAgICAgLm1hcCgob2JqKSA9PiBvYmouaWQpXHJcbiAgICAgICAgLmluZGV4T2YoY2xpY2tlZFF1ZXJ5VGFibGVJZCk7XHJcbiAgICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMubWFwKChvYmopID0+IHtcclxuICAgICAgICAgIGlmIChvYmouaWQgPT09IHF1ZXJ5SW5kZXgudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICBjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlID0gb2JqLmF0dHJpYnV0ZVF1ZXJ5O1xyXG4gICAgICAgICAgICBvYmogPSB7IC4uLm9iaiwgcXVlcnlWYWx1ZTogZS5jdXJyZW50VGFyZ2V0Lm5hbWUgfTtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzW3F1ZXJ5SW5kZXhdID0gb2JqXHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmZpbHRlcihcclxuICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcclxuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4geyBvYmogfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGUuY3VycmVudFRhcmdldC5uYW1lID09PSBcIklOXCIgfHwgZS5jdXJyZW50VGFyZ2V0Lm5hbWUgPT09IFwiTk9UX0lOXCIpIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGYudGl0bGUgPT09IHRoaXMuc3RhdGUuY3VycmVudFRhcmdldFRleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LndoZW5MYXllclZpZXcoZikudGhlbigobGF5ZXJWaWV3KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKTtcclxuICAgICAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2N1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGV9IGlzIG5vdCBudWxsYDtcclxuICAgICAgICAgICAgICAvLyBxdWVyeS5vdXRGaWVsZHMgPSBbdGhpcy5zdGF0ZS5jdXJyZW50Rmlyc3RRdWVyeV07XHJcbiAgICAgICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW2Ake2N1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGV9YF07XHJcbiAgICAgICAgICAgICAgbGF5ZXJWaWV3LmZpbHRlciA9IHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiBxdWVyeS53aGVyZSxcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIC8vIGYudmlzaWJsZSA9IHRydWVcclxuICAgICAgICAgICAgICAvLyBsYXllclZpZXcudmlzaWJsZSA9IHRydWVcclxuICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gZi5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcclxuICAgICAgICAgICAgICByZXN1bHRzLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsVGhpcmRRdWVyeSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVsLmF0dHJpYnV0ZXMpXHJcbiAgICAgICAgICAgICAgICAgIGRldGFpbFRoaXJkUXVlcnkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IE9iamVjdC52YWx1ZXMoZWwuYXR0cmlidXRlcyksXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IE9iamVjdC52YWx1ZXMoZWwuYXR0cmlidXRlcyksXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5tYXAoKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouaWQgPT09IHF1ZXJ5SW5kZXgudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqID0geyAuLi5vYmosIGlmSW5Pck5vdEluUXVlcnlWYWx1ZTogZGV0YWlsVGhpcmRRdWVyeSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzW3F1ZXJ5SW5kZXhdID0gb2JqXHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBvYmogfTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL1RPRE8gbGEgc2VuZFF1ZXJ5IGFuZHLDoCByaXNpc3RlbWF0YSBxdWFuZG8gc2kgYWdnaXVuZ2Vyw6Agb2x0cmUgYWxsJ2VzcHJlc3Npb25lIGFuY2hlIGlsIHNldCBkaSBlc3ByZXNzaW9uaVxyXG4gIC8vIHBlcmNow6kgb3JhIHBlciBsJ0FORCBmYSBpbCBjaWNsbyBmb3Igc3Ugb2duaSB3aGVyZSBpbnNlcml0YSBuZWxsJ2FycmF5IG1hIGRvcG8gc2Fyw6AgbmVjZXNzYXJpbyBzY29tcG9ycmUgcGVyIGNyZWFyZSBsZSBlc3ByZXNzaW9uaVxyXG5cclxuICAvLyBzdGVwMSBcclxuICBhc3luYyBzZW5kUXVlcnkoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5BbmRPciA9PT0gXCJBTkRcIikge1xyXG4gICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5mb3JFYWNoKChlbCwgaWQpID0+IHtcclxuICAgICAgICBsZXQgYXR0cmlidXRlUXVlcnkgPSBlbC5hdHRyaWJ1dGVRdWVyeTtcclxuICAgICAgICBsZXQgcXVlcnlWYWx1ZSA9IGVsLnF1ZXJ5VmFsdWU7XHJcbiAgICAgICAgbGV0IHZhbHVlO1xyXG4gICAgICAgIGlmIChxdWVyeVZhbHVlID09PSBcImlzIG51bGxcIiB8fCBxdWVyeVZhbHVlID09PSBcImlzIG5vdCBudWxsXCIpIHtcclxuICAgICAgICAgIHZhbHVlID0gZWwudmFsdWU/LnR4dCA/PyBcIlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocXVlcnlWYWx1ZSA9PT0gXCJJTlwiIHx8IHF1ZXJ5VmFsdWUgPT09IFwiTk9UX0lOXCIpIHtcclxuICAgICAgICAgIHZhbHVlID0gW107XHJcbiAgICAgICAgICBlbC5jaGVja2VkTGlzdC5mb3JFYWNoKChlbCkgPT4gdmFsdWUucHVzaChlbC5jaGVja1ZhbHVlKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgIHF1ZXJ5VmFsdWUgPT09IFwiaW5jbHVkZWRcIiB8fFxyXG4gICAgICAgICAgcXVlcnlWYWx1ZSA9PT0gXCJpc19ub3RfaW5jbHVkZWRcIlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdmFsdWUgPSB7XHJcbiAgICAgICAgICAgIGZpcnN0VHh0OiBlbC5maXJzdFR4dC52YWx1ZSxcclxuICAgICAgICAgICAgc2Vjb25kVHh0OiBlbC5zZWNvbmRUeHQudmFsdWUsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2YWx1ZSA9IGVsLnZhbHVlPy50eHQgPz8gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcclxuICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmLnRpdGxlID09PSB0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LndoZW5MYXllclZpZXcoZikudGhlbigobGF5ZXJWaWV3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5Q29uc3RydWN0b3IoIC8vc3RlcCAyIHN0YXJ0IHF1ZXJ5aW5nXHJcbiAgICAgICAgICAgICAgICAgIGxheWVyVmlldyxcclxuICAgICAgICAgICAgICAgICAgYXR0cmlidXRlUXVlcnksXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLkFuZE9yLHRoaXMuY29ubmVjdG9yXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKTtcclxuICAgICAgbGV0IG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5OiBhbnkgPSBbXTtcclxuICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZm9yRWFjaCgoZWwsIGlkKSA9PiB7XHJcbiAgICAgICAgbGV0IGF0dHJpYnV0ZVF1ZXJ5ID0gZWwuYXR0cmlidXRlUXVlcnk7XHJcbiAgICAgICAgbGV0IHF1ZXJ5VmFsdWUgPSBlbC5xdWVyeVZhbHVlO1xyXG4gICAgICAgIGxldCB2YWx1ZTtcclxuICAgICAgICBpZiAocXVlcnlWYWx1ZSA9PT0gXCJpcyBudWxsXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJpcyBub3QgbnVsbFwiKSB7XHJcbiAgICAgICAgICBsZXQgcXVlcnlJbiA9IGAke2F0dHJpYnV0ZVF1ZXJ5fSAke3F1ZXJ5VmFsdWV9YDtcclxuICAgICAgICAgIG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5LnB1c2gocXVlcnlJbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChxdWVyeVZhbHVlID09PSBcIklOXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJOT1RfSU5cIikge1xyXG4gICAgICAgICAgdmFsdWUgPSBbXTtcclxuICAgICAgICAgIGVsLmNoZWNrZWRMaXN0LmZvckVhY2goKGVsKSA9PiB2YWx1ZS5wdXNoKGVsLmNoZWNrVmFsdWUpKTtcclxuICAgICAgICAgIGlmICh0aGlzLmNvbnRhaW5zQW55TGV0dGVycyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgbGV0IHF1ZXJ5SW4gPSBgJHthdHRyaWJ1dGVRdWVyeX0gSU4gKCR7XHJcbiAgICAgICAgICAgICAgXCInXCIgKyB2YWx1ZS5qb2luKFwiJywgJ1wiKSArIFwiJ1wiXHJcbiAgICAgICAgICAgIH0pYDtcclxuICAgICAgICAgICAgbm9ybWFsaXplZFdoZXJlVG9TZW5kUXVlcnkucHVzaChxdWVyeUluKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBxdWVyeUluID0gYCR7YXR0cmlidXRlUXVlcnl9IElOICgke3ZhbHVlLmpvaW4oXCIsXCIpfSlgO1xyXG4gICAgICAgICAgICBub3JtYWxpemVkV2hlcmVUb1NlbmRRdWVyeS5wdXNoKHF1ZXJ5SW4pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocXVlcnlWYWx1ZSA9PT0gXCJpbmNsdWRlZFwiIHx8IHF1ZXJ5VmFsdWUgPT09IFwiaXNfbm90X2luY2x1ZGVkXCIpIHtcclxuICAgICAgICAgIGxldCBxdWVyeUluO1xyXG4gICAgICAgICAgcXVlcnlWYWx1ZSA9PT0gXCJpbmNsdWRlZFwiXHJcbiAgICAgICAgICAgID8gKHF1ZXJ5SW4gPSBgJHthdHRyaWJ1dGVRdWVyeX0gPiAke2VsLmZpcnN0VHh0LnZhbHVlfSBBTkQgJHthdHRyaWJ1dGVRdWVyeX0gPCAke2VsLnNlY29uZFR4dC52YWx1ZX1gKVxyXG4gICAgICAgICAgICA6IChxdWVyeUluID0gYCR7YXR0cmlidXRlUXVlcnl9IDwgJHtlbC5maXJzdFR4dC52YWx1ZX0gT1IgJHthdHRyaWJ1dGVRdWVyeX0gPiAke2VsLnNlY29uZFR4dC52YWx1ZX1gKTtcclxuICAgICAgICAgIG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5LnB1c2gocXVlcnlJbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZhbHVlID0gZWwudmFsdWU/LnR4dCA/PyBcIlwiO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY29udGFpbnNBbnlMZXR0ZXJzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBsZXQgcXVlcnlJbnB1dCA9IGAke2F0dHJpYnV0ZVF1ZXJ5fSAke3F1ZXJ5VmFsdWV9ICcke3ZhbHVlfSdgO1xyXG4gICAgICAgICAgICBub3JtYWxpemVkV2hlcmVUb1NlbmRRdWVyeS5wdXNoKHF1ZXJ5SW5wdXQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHF1ZXJ5SW5wdXQgPSBgJHthdHRyaWJ1dGVRdWVyeX0gJHtxdWVyeVZhbHVlfSAke3ZhbHVlfWA7XHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5LnB1c2gocXVlcnlJbnB1dCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHsvLyBcclxuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGYudGl0bGUgPT09IHRoaXMuc3RhdGUuY3VycmVudFRhcmdldFRleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LndoZW5MYXllclZpZXcoZikudGhlbigobGF5ZXJWaWV3KSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IHF1ZXJ5T3IgPSBgJHtub3JtYWxpemVkV2hlcmVUb1NlbmRRdWVyeS5qb2luKFwiIE9SIFwiKX1gO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4JyxsYXllclZpZXcubGF5ZXIudGl0bGUpO1xyXG4gICAgICAgICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgKmBdO1xyXG4gICAgICAgICAgICAgIGxheWVyVmlldy5maWx0ZXIgPSB7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogcXVlcnkud2hlcmUsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygneXl5eXl5eXl5eXl5eXl5eXl5eXl5JyxsYXllclZpZXcpO1xyXG4gICAgICAgICAgICAgIGxheWVyVmlldy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHRoaXJkUXVlcnkoZSkge1xyXG4gICAgLy8gY29uc3QgYXJyQ2hvb3NlID0gW11cclxuICAgIGNvbnN0IGN1cnJlbnRRdWVyeVRlc3QgPSBlLmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoZi50aXRsZSA9PT0gdGhpcy5zdGF0ZS5jdXJyZW50VGFyZ2V0VGV4dCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy53aGVuTGF5ZXJWaWV3KGYpLnRoZW4oKGxheWVyVmlldykgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pblF1ZXJ5Q29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIGxheWVyVmlldyxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50Rmlyc3RRdWVyeSxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50U2Vjb25kUXVlcnksXHJcbiAgICAgICAgICAgIGN1cnJlbnRRdWVyeVRlc3RcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25DaGFuZ2VTZWxlY3RMYXllcihlKSB7XHJcbiAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLnJlbW92ZUFsbCgpO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcclxuICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoZi50aXRsZSA9PT0gZS5jdXJyZW50VGFyZ2V0LmlubmVyVGV4dCkge1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LndoZW5MYXllclZpZXcoZikudGhlbigobGF5ZXJWaWV3KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHJlc3VsdHNMYXllclNlbGVjdGVkOiBmLFxyXG4gICAgICAgICAgICAgIGN1cnJlbnRUYXJnZXRUZXh0OiBlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRUYWJsZSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICB0YWJsZXM6IFsuLi50aGlzLnN0YXRlLnRhYmxlcywgeyBpZDogdGhpcy5zdGF0ZS50YWJsZUNvdW50ZXIgfV0sXHJcbiAgICAgIHRhYmxlQ291bnRlcjogdGhpcy5zdGF0ZS50YWJsZUNvdW50ZXIgKyAxLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgYWRkVHdvVGFibGUgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdGFibGVzOiBbXHJcbiAgICAgICAgLi4udGhpcy5zdGF0ZS50YWJsZXMsXHJcbiAgICAgICAgeyBpZDogdGhpcy5zdGF0ZS50YWJsZUNvdW50ZXIgfSxcclxuICAgICAgICB7IGlkOiB0aGlzLnN0YXRlLnRhYmxlQ291bnRlciB9LFxyXG4gICAgICBdLFxyXG4gICAgICB0YWJsZUNvdW50ZXI6IHRoaXMuc3RhdGUudGFibGVDb3VudGVyICsgMSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGRlbGV0ZVRhYmxlID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUYWJsZXMgPSB0aGlzLnN0YXRlLnRhYmxlcy5maWx0ZXIoKGVsKSA9PiB7XHJcbiAgICAgIHJldHVybiBlbC5pZCAhPT0gaWQ7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRlbGV0ZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5maWx0ZXIoKGVsKSA9PiB7XHJcbiAgICAgIHJldHVybiBlbC5pZCAhPT0gaWQudG9TdHJpbmcoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHRhYmxlczogWy4uLm5ld1RhYmxlc10sXHJcbiAgICAgIHdoZXJlQ2xhdXNlczogZGVsZXRlZFdoZXJlQ2xhdXNlcyxcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUudGFibGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB3aGVyZUNsYXVzZXM6IFtdLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB0ZXh0SW5wdXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIGxldCB0eHQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGxldCBjdXJyZW50VGFibGVJZCA9IGUudGFyZ2V0LmF0dHJpYnV0ZXNbMF0udmFsdWU7XHJcbiAgICB0aGlzLnF1ZXJ5VGV4dENvbnN0cnVjdG9yKHR4dCwgY3VycmVudFRhYmxlSWQpO1xyXG4gIH07XHJcbiAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIGxldCB0eHQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGxldCBjdXJyZW50VGFibGVJZCA9IGUudGFyZ2V0LmF0dHJpYnV0ZXNbMF0udmFsdWU7XHJcbiAgICBsZXQgaW5wdXQgPSBcImZpcnN0XCI7XHJcbiAgICB0aGlzLnF1ZXJ5VGV4dEluY2x1ZGVkQ29uc3RydWN0b3IodHh0LCBjdXJyZW50VGFibGVJZCwgaW5wdXQpO1xyXG4gIH07XHJcblxyXG4gIHRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgbGV0IHR4dCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgbGV0IGN1cnJlbnRUYWJsZUlkID0gZS50YXJnZXQuYXR0cmlidXRlc1swXS52YWx1ZTtcclxuICAgIGxldCBpbnB1dCA9IFwic2Vjb25kXCI7XHJcbiAgICB0aGlzLnF1ZXJ5VGV4dEluY2x1ZGVkQ29uc3RydWN0b3IodHh0LCBjdXJyZW50VGFibGVJZCwgaW5wdXQpO1xyXG4gIH07XHJcbiAgdW5pdm9jb1NlbGVjdEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgbGV0IHR4dCA9IGUuY3VycmVudFRhcmdldC50ZXh0Q29udGVudDtcclxuICAgIGxldCBjdXJyZW50VGFibGVJZCA9IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzJdLnZhbHVlO1xyXG4gICAgdGhpcy5xdWVyeVRleHRDb25zdHJ1Y3Rvcih0eHQsIGN1cnJlbnRUYWJsZUlkKTtcclxuICB9O1xyXG5cclxuICBjb250YWluc0FueUxldHRlcnMgPSAoc3RyKSA9PiB7XHJcbiAgICByZXR1cm4gL1thLXpBLVpdLy50ZXN0KHN0cik7XHJcbiAgfTtcclxuXHJcbiAgcXVlcnlUZXh0Q29uc3RydWN0b3IgPSAodHh0LCBjdXJyZW50VGFibGVJZCkgPT4ge1xyXG4gICAgbGV0IHF1ZXJ5SW5kZXg7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMubGVuZ3RoKSB7XHJcbiAgICAgIHF1ZXJ5SW5kZXggPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlc1xyXG4gICAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmlkKVxyXG4gICAgICAgIC5pbmRleE9mKGN1cnJlbnRUYWJsZUlkKTtcclxuICAgICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5tYXAoKG9iaikgPT4ge1xyXG4gICAgICAgICAgaWYgKG9iai5pZCA9PT0gcXVlcnlJbmRleC50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHsgLi4ub2JqLCB2YWx1ZTogeyB0eHQ6IHR4dCB9IH07XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlc1txdWVyeUluZGV4XSA9IG9ialxyXG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdoZXJlQ2xhdXNlczogZmlsdGVyZWRXaGVyZUNsYXVzZXMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHsgb2JqIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIHF1ZXJ5VGV4dEluY2x1ZGVkQ29uc3RydWN0b3IgPSAodHh0LCBjdXJyZW50VGFibGVJZCwgaW5wdXQpID0+IHtcclxuICAgIGxldCBxdWVyeUluZGV4O1xyXG4gICAgaWYgKHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmxlbmd0aCkge1xyXG4gICAgICBxdWVyeUluZGV4ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXNcclxuICAgICAgICAubWFwKChvYmopID0+IG9iai5pZClcclxuICAgICAgICAuaW5kZXhPZihjdXJyZW50VGFibGVJZCk7XHJcbiAgICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMubWFwKChvYmopID0+IHtcclxuICAgICAgICAgIGlmIChvYmouaWQgPT09IHF1ZXJ5SW5kZXgudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICBpbnB1dCA9PT0gXCJmaXJzdFwiXHJcbiAgICAgICAgICAgICAgPyAob2JqID0geyAuLi5vYmosIGZpcnN0VHh0OiB7IHZhbHVlOiB0eHQgfSB9KVxyXG4gICAgICAgICAgICAgIDogKG9iaiA9IHsgLi4ub2JqLCBzZWNvbmRUeHQ6IHsgdmFsdWU6IHR4dCB9IH0pO1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXNbcXVlcnlJbmRleF0gPSBvYmpcclxuICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xyXG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3aGVyZUNsYXVzZXM6IGZpbHRlcmVkV2hlcmVDbGF1c2VzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB7IG9iaiB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZHJvcGRvd25JdGVtQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgbGV0IGNsaWNrZWRRdWVyeVRhYmxlSWQgPSBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1syXS52YWx1ZTtcclxuICAgIGxldCBjbGlja2VkVmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICBsZXQgY3VycmVudENsaWNrZWRRdWVyeUF0dHJpYnV0ZTtcclxuICAgIGxldCBxdWVyeUluZGV4O1xyXG4gICAgcXVlcnlJbmRleCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzXHJcbiAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmlkKVxyXG4gICAgICAuaW5kZXhPZihjbGlja2VkUXVlcnlUYWJsZUlkKTtcclxuICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xyXG4gICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLm1hcCgob2JqKSA9PiB7XHJcbiAgICAgICAgaWYgKG9iai5pZCA9PT0gcXVlcnlJbmRleC50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICBvYmogPSB7IC4uLm9iaiwgZHJvcGRvd25WYWx1ZVF1ZXJ5OiBjbGlja2VkVmFsdWUgfTtcclxuICAgICAgICAgIC8vIHJldHVybiB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlc1txdWVyeUluZGV4XSA9IG9ialxyXG4gICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZmlsdGVyKFxyXG4gICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xyXG4gICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlQ2xhdXNlczogZmlsdGVyZWRXaGVyZUNsYXVzZXMsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgb2JqIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuY3VycmVudFRhcmdldC52YWx1ZSA9PT0gXCJ1bml2b2NvXCIpIHtcclxuICAgICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5tYXAoKG9iaikgPT4ge1xyXG4gICAgICAgICAgaWYgKG9iai5pZCA9PT0gcXVlcnlJbmRleC50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGUgPSBvYmouYXR0cmlidXRlUXVlcnk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChmLnRpdGxlID09PSB0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlld1xyXG4gICAgICAgICAgICAgICAgICAgIC53aGVuTGF5ZXJWaWV3KGYpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGxheWVyVmlldykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Y3VycmVudENsaWNrZWRRdWVyeUF0dHJpYnV0ZX0gaXMgbm90IG51bGxgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW2Ake2N1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGV9YF07XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYXllclZpZXcuZmlsdGVyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVyZTogcXVlcnkud2hlcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGYucXVlcnlGZWF0dXJlcyhxdWVyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWxUaGlyZFF1ZXJ5ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbFRoaXJkUXVlcnkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogT2JqZWN0LnZhbHVlcyhlbC5hdHRyaWJ1dGVzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBPYmplY3QudmFsdWVzKGVsLmF0dHJpYnV0ZXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmouaWQgPT09IHF1ZXJ5SW5kZXgudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm9iaixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmSW5Pck5vdEluUXVlcnlWYWx1ZTogZGV0YWlsVGhpcmRRdWVyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duVmFsdWVRdWVyeTogY2xpY2tlZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzW3F1ZXJ5SW5kZXhdID0gb2JqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhLmlkID09IGIuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZXM6IGZpbHRlcmVkV2hlcmVDbGF1c2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG9iaiB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkcm9wZG93blZhbHVlUXVlcnk6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZHJvcERvd24gPSAoaWQpID0+IHtcclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgLy8gZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGF1dE9wZW46IHRydWUgfSk7XHJcbiAgICBsZXQgcXVlcnlJbmRleDtcclxuICAgIHF1ZXJ5SW5kZXggPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlc1xyXG4gICAgICAubWFwKChvYmopID0+IG9iai5pZClcclxuICAgICAgLmluZGV4T2YoaWQudG9TdHJpbmcoKSk7XHJcbiAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcclxuICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5tYXAoKG9iaikgPT4ge1xyXG4gICAgICAgIGlmIChvYmouaWQgPT09IHF1ZXJ5SW5kZXgudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgaWYgKCFvYmouaXNPcGVuKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHsgLi4ub2JqLCBpc09wZW46IHRydWUgfTtcclxuICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xyXG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3aGVyZUNsYXVzZXM6IGZpbHRlcmVkV2hlcmVDbGF1c2VzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHsgLi4ub2JqLCBpc09wZW46IGZhbHNlIH07XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmZpbHRlcihcclxuICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcclxuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyByZXR1cm4gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXNbcXVlcnlJbmRleF0gPSBvYmpcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgb2JqIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgaGFuZGxlQ2hlY2tCb3ggPSAoZXZlbnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpc0NoZWNrZWQ6IGV2ZW50LnRhcmdldC5jaGVja2VkLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgb25DaGFuZ2VDaGVja0JveCA9IChldmVudCkgPT4ge1xyXG4gICAgbGV0IGN1cnJlbnRJZCA9IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLmlkLnZhbHVlO1xyXG4gICAgbGV0IHF1ZXJ5SW5kZXg7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgcXVlcnlJbmRleCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzXHJcbiAgICAgICAgLm1hcCgob2JqKSA9PiBvYmouaWQpXHJcbiAgICAgICAgLmluZGV4T2YoY3VycmVudElkKTtcclxuICAgICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMubWFwKChvYmopID0+IHtcclxuICAgICAgICAgIGlmIChvYmouaWQgPT09IHF1ZXJ5SW5kZXgudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICBpZiAoIW9iai5jaGVja2VkTGlzdCkge1xyXG4gICAgICAgICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgICAgICAgIC4uLm9iaixcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRMaXN0OiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja1ZhbHVlOiBldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQ2hlY2tlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGUgZW50cmllcyBmcm9tIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzOiBBcnJheS5mcm9tKG5ldyBTZXQodGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMpKSxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zdCBpZkFscmVhZHlDaGVjayA9IG9iai5jaGVja2VkTGlzdFxyXG4gICAgICAgICAgICAgICAgLm1hcCgob2JqKSA9PiBvYmouY2hlY2tWYWx1ZSlcclxuICAgICAgICAgICAgICAgIC5pbmRleE9mKGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLm5hbWUudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGlmIChpZkFscmVhZHlDaGVjayA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJub24gw6ggcHJlc2VudGUgaWwgdmFsb3JlIHRyYSBpIGNoZWNrZWRcIik7XHJcbiAgICAgICAgICAgICAgICBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLm9iaixcclxuICAgICAgICAgICAgICAgICAgY2hlY2tlZExpc3Q6IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5vYmouY2hlY2tlZExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWx1ZTogZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGlzQ2hlY2tlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBvYmogb2JqZWN0IGluIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAgICAgICAoYSkgPT4gYS5pZCA9PT0gb2JqLmlkXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBvYmogb2JqZWN0IGZyb20gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgdXBkYXRlZCBvYmogb2JqZWN0IHRvIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZXM6IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZSBlbnRyaWVzIGZyb20gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzOiBBcnJheS5mcm9tKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgU2V0KHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICAvLyAgIFwiw6ggZ2nDoCBwcmVzZW50ZSB0cmEgaSB2YWxvcmkgcXVpbmRpIG5vbiBhZ2dpdW50byBhbGxhIGxpc3RhXCJcclxuICAgICAgICAgICAgICAgIC8vICk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4geyBvYmogfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xyXG4gICAgICAvLyBGaW5kIHRoZSBvYmogb2JqZWN0IGluIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcclxuICAgICAgY29uc3Qgb2JqID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gY3VycmVudElkKTtcclxuICAgICAgLy8gUmVtb3ZlIHRoZSBjaGVja1ZhbHVlIGZyb20gdGhlIGNoZWNrZWRMaXN0IGFycmF5XHJcbiAgICAgIG9iai5jaGVja2VkTGlzdCA9IG9iai5jaGVja2VkTGlzdC5maWx0ZXIoXHJcbiAgICAgICAgKGEpID0+IGEuY2hlY2tWYWx1ZSAhPT0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZVxyXG4gICAgICApO1xyXG4gICAgICAvLyBVcGRhdGUgdGhlIG9iaiBvYmplY3QgaW4gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmZpbmRJbmRleChcclxuICAgICAgICAoYSkgPT4gYS5pZCA9PT0gY3VycmVudElkXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzW2luZGV4XSA9IG9iajtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICB3aGVyZUNsYXVzZXM6IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvLyBSZW1vdmUgZHVwbGljYXRlIGVudHJpZXMgZnJvbSB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgd2hlcmVDbGF1c2VzOiBBcnJheS5mcm9tKG5ldyBTZXQodGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMpKSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBxdWVyeUNvbnN0cnVjdG9yID0gKFxyXG4gICAgbGF5ZXJWaWV3LFxyXG4gICAgZmlyc3RRdWVyeSxcclxuICAgIHF1ZXJ5UmVxdWVzdCxcclxuICAgIHNlY29uZFF1ZXJ5VGFyZ2V0LFxyXG4gICAgQW5kT3IsY29ubmVjdG9yXHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpO1xyXG4gICAgc3dpdGNoIChxdWVyeVJlcXVlc3QpIHtcclxuICAgICAgY2FzZSBcIkxJS0UlXCI6XHJcbiAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSBMSUtFICcke3NlY29uZFF1ZXJ5VGFyZ2V0fSUnYDtcclxuICAgICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbYCR7Zmlyc3RRdWVyeX1gXTtcclxuICAgICAgICBsYXllclZpZXcuZmlsdGVyID0ge1xyXG4gICAgICAgICAgd2hlcmU6IHF1ZXJ5LndoZXJlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gZi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHtmaXJzdFF1ZXJ5fSBMSUtFICcke3NlY29uZFF1ZXJ5VGFyZ2V0fSUnYCk7XHJcbiAgICAgICAgbGF5ZXJWaWV3LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiJUxJS0VcIjpcclxuICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9IExJS0UgJyUke3NlY29uZFF1ZXJ5VGFyZ2V0fSdgO1xyXG4gICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtmaXJzdFF1ZXJ5fWBdO1xyXG4gICAgICAgIGxheWVyVmlldy5maWx0ZXIgPSB7XHJcbiAgICAgICAgICB3aGVyZTogcXVlcnkud2hlcmUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBmLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAke2ZpcnN0UXVlcnl9IExJS0UgJyUke3NlY29uZFF1ZXJ5VGFyZ2V0fSdgKTtcclxuICAgICAgICBsYXllclZpZXcudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCIlTElLRSVcIjpcclxuICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9IExJS0UgJyUke3NlY29uZFF1ZXJ5VGFyZ2V0fSUnYDtcclxuICAgICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbYCR7Zmlyc3RRdWVyeX1gXTtcclxuICAgICAgICBsYXllclZpZXcuZmlsdGVyID0ge1xyXG4gICAgICAgICAgd2hlcmU6IHF1ZXJ5LndoZXJlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gZi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHtmaXJzdFF1ZXJ5fSBMSUtFICclJHtzZWNvbmRRdWVyeVRhcmdldH0nYCk7XHJcbiAgICAgICAgbGF5ZXJWaWV3LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiTk9UIExJS0VcIjpcclxuICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9IE5PVCBMSUtFICclJHtzZWNvbmRRdWVyeVRhcmdldH0lJ2A7XHJcbiAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW2Ake2ZpcnN0UXVlcnl9YF07XHJcbiAgICAgICAgbGF5ZXJWaWV3LmZpbHRlciA9IHtcclxuICAgICAgICAgIHdoZXJlOiBxdWVyeS53aGVyZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGYudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYCR7Zmlyc3RRdWVyeX0gTk9UIExJS0UgJyUke3NlY29uZFF1ZXJ5VGFyZ2V0fSUnYCk7XHJcbiAgICAgICAgbGF5ZXJWaWV3LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiaXMgbnVsbFwiOlxyXG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gaXMgbnVsbGA7XHJcbiAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW2Ake2ZpcnN0UXVlcnl9YF07XHJcbiAgICAgICAgbGF5ZXJWaWV3LmZpbHRlciA9IHtcclxuICAgICAgICAgIHdoZXJlOiBxdWVyeS53aGVyZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGYudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYCR7Zmlyc3RRdWVyeX0gaXMgbnVsbGApO1xyXG4gICAgICAgIGxheWVyVmlldy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImlzIG5vdCBudWxsXCI6XHJcbiAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSBpcyBub3QgbnVsbGA7XHJcbiAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW2Ake2ZpcnN0UXVlcnl9YF07XHJcbiAgICAgICAgbGF5ZXJWaWV3LmZpbHRlciA9IHtcclxuICAgICAgICAgIHdoZXJlOiBxdWVyeS53aGVyZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGYudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYCR7Zmlyc3RRdWVyeX0gaXMgbm90IG51bGxgKTtcclxuICAgICAgICBsYXllclZpZXcudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJJTlwiOlxyXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5zQW55TGV0dGVycyhzZWNvbmRRdWVyeVRhcmdldCkpIHtcclxuICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gSU4gKCR7XHJcbiAgICAgICAgICAgIFwiJ1wiICsgc2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIicsICdcIikgKyBcIidcIlxyXG4gICAgICAgICAgfSlgO1xyXG4gICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW2Ake2ZpcnN0UXVlcnl9YF07XHJcbiAgICAgICAgICBsYXllclZpZXcuZmlsdGVyID0ge1xyXG4gICAgICAgICAgICB3aGVyZTogcXVlcnkud2hlcmUsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgLy8gZi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgLy8gICBgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtcIidcIiArIHNlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCInLCAnXCIpICsgXCInXCJ9KWBcclxuICAgICAgICAgIC8vICk7XHJcbiAgICAgICAgICAvLyBsYXllclZpZXcudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAvLyBsYXllclZpZXcucXVlcnlGZWF0dXJlcyhxdWVyeSkudGhlbihmdW5jdGlvbihyZXN1bHRzKXtcclxuICAgICAgICAgIC8vICAgbGV0IGxheWVyVmlld0FyciA9IFtsYXllclZpZXcubGF5ZXJdOyBcclxuICAgICAgICAgIC8vICAgY29uc3Qgc2VsZWN0ZWRMYXllcnNDb250ZW50cyA9IGhlbHBlci5nZXRTZWxlY3RlZENvbnRlbnRzTGF5ZXIocmVzdWx0cyxsYXllclZpZXdBcnIpO1xyXG4gICAgICAgICAgLy8gICBjb25zb2xlLmxvZygnY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2MnLHRoaXMuc3RhdGUucmVzdWx0c0xheWVyU2VsZWN0ZWQudGl0bGUpXHJcbiAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gSU4gKCR7c2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIixcIil9KWA7XHJcbiAgICAgICAgICBxdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWU7XHJcbiAgICAgICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbJyonXTtcclxuICAgICAgICAgIC8vIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtmaXJzdFF1ZXJ5fWBdO1xyXG4gICAgICAgICAgbGF5ZXJWaWV3LmZpbHRlciA9IHtcclxuICAgICAgICAgICAgd2hlcmU6IHF1ZXJ5LndoZXJlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIC8vIGYudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiLFwiKX0pYCk7XHJcbiAgICAgICAgICBsYXllclZpZXcudmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgbGF5ZXJWaWV3LnF1ZXJ5RmVhdHVyZXMocXVlcnkpLnRoZW4oKHJlc3VsdHMpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMsXCJjaGVjayByZXN1bHRzIGZyb20gdXV0dXV0dXRcIilcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAvLyBsYXllclZpZXcucXVlcnlGZWF0dXJlcyhxdWVyeSkudGhlbihmdW5jdGlvbihyZXN1bHRzKXtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCcnLGxheWVyVmlldy5sYXllci50aXRsZSlcclxuICAgICAgICAvLyAgIGxldCBjaGVja2VkTGF5ZXJfID0gW2xheWVyVmlldy5sYXllci5pZF07XHJcbiAgICAgICAgLy8gICBjb25zdCBzZWxlY3RlZExheWVyc0NvbnRlbnRzID0gaGVscGVyLmdldFNlbGVjdGVkQ29udGVudHNMYXllcihbcmVzdWx0cy5mZWF0dXJlc10sY2hlY2tlZExheWVyXyk7XHJcbiAgICAgICAgLy8gICBjb25zdCBudW1iZXJPZkF0dHJpYnV0ZXMgPSBoZWxwZXIuZ2V0TnVtYmVyT2ZBdHRyaWJ1dGVzKHNlbGVjdGVkTGF5ZXJzQ29udGVudHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy53aGVuTGF5ZXJWaWV3KGxheWVyVmlldy5sYXllcikudGhlbigobGF5ZXJ2aWV3KT0+e1xyXG4gICAgICAgIC8vICBjb25zdCByZXN1bHQgPSBsYXllcnZpZXcucXVlcnlGZWF0dXJlcyhxdWVyeSkudGhlbigocmVzdSk9PntcclxuICAgICAgICAvLyAgIC8vICBjb25zb2xlLmxvZyhyZXN1LFwiY2hlY2sgcmVzdWx0c1wiKTtcclxuICAgICAgICAvLyAgfSlcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncXVlcnknLGxheWVyVmlldy5sYXllcik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3BwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcCcscmVzdWx0cy5mZWF0dXJlc1swXSlcclxuXHJcbiAgICAgICAgLy8gaWYgKGxheWVyVmlldz8uX2hpZ2hsaWdodElkcyl7XHJcbiAgICAgICAgLy8gICAgIGZvciAoY29uc3Qga2V5IG9mIGxheWVyVmlldy5faGlnaGxpZ2h0SWRzLmtleXMoKSl7XHJcbiAgICAgICAgLy8gICAgICAgICBoaWdobGlnaHRJZHMucHVzaChrZXkpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGxheWVyVmlldy5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcclxuICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAvLyBkaXNwYXRjaCAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cclxuICAgICAgICAvLyBjb25uZWN0b3Ioe2NoZWNrZWRMYXllcl8sc2VsZWN0ZWRMYXllcnNDb250ZW50cyxudW1iZXJPZkF0dHJpYnV0ZXMscmVzdWx0czpbcmVzdWx0cy5mZWF0dXJlc10sbGF5ZXI6bGF5ZXJWaWV3LmxheWVyfSk7XHJcbiAgICAgICAgICAvLyB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiTk9UX0lOXCI6XHJcbiAgICAgICAgcXVlcnkud2hlcmUgPSBgTk9UICAke2ZpcnN0UXVlcnl9IElOICgke3NlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCIsXCIpfSlgO1xyXG4gICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtmaXJzdFF1ZXJ5fWBdO1xyXG4gICAgICAgIGxheWVyVmlldy5maWx0ZXIgPSB7XHJcbiAgICAgICAgICB3aGVyZTogcXVlcnkud2hlcmUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBmLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBOT1QgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiLFwiKX0pYCk7XHJcbiAgICAgICAgbGF5ZXJWaWV3LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiaW5jbHVkZWRcIjpcclxuICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9ID4gJHtzZWNvbmRRdWVyeVRhcmdldC5maXJzdFR4dH0gQU5EICR7Zmlyc3RRdWVyeX0gPCAke3NlY29uZFF1ZXJ5VGFyZ2V0LnNlY29uZFR4dH1gO1xyXG4gICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtmaXJzdFF1ZXJ5fWBdO1xyXG4gICAgICAgIGxheWVyVmlldy5maWx0ZXIgPSB7XHJcbiAgICAgICAgICB3aGVyZTogcXVlcnkud2hlcmUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyAvLyBmLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIC8vICAgYCR7Zmlyc3RRdWVyeX0gPiAke3NlY29uZFF1ZXJ5VGFyZ2V0LmZpcnN0VHh0fSBBTkQgJHtmaXJzdFF1ZXJ5fSA8ICR7c2Vjb25kUXVlcnlUYXJnZXQuc2Vjb25kVHh0fWBcclxuICAgICAgICAvLyApO1xyXG4gICAgICAgIGxheWVyVmlldy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImlzX25vdF9pbmNsdWRlZFwiOlxyXG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gPCAke3NlY29uZFF1ZXJ5VGFyZ2V0LmZpcnN0VHh0fSBPUiAke2ZpcnN0UXVlcnl9ID4gJHtzZWNvbmRRdWVyeVRhcmdldC5zZWNvbmRUeHR9YDtcclxuICAgICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbYCR7Zmlyc3RRdWVyeX1gXTtcclxuICAgICAgICBsYXllclZpZXcuZmlsdGVyID0ge1xyXG4gICAgICAgICAgd2hlcmU6IHF1ZXJ5LndoZXJlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gLy8gZi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcclxuICAgICAgICAvLyAgIGAke2ZpcnN0UXVlcnl9IDwgJHtzZWNvbmRRdWVyeVRhcmdldC5maXJzdFR4dH0gT1IgJHtmaXJzdFF1ZXJ5fSA+ICR7c2Vjb25kUXVlcnlUYXJnZXQuc2Vjb25kVHh0fWBcclxuICAgICAgICAvLyApO1xyXG4gICAgICAgIGxheWVyVmlldy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBpZiAodGhpcy5jb250YWluc0FueUxldHRlcnMoc2Vjb25kUXVlcnlUYXJnZXQpKSB7XHJcbiAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9ICR7cXVlcnlSZXF1ZXN0fSAnJHtzZWNvbmRRdWVyeVRhcmdldH0nYDtcclxuICAgICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtmaXJzdFF1ZXJ5fWBdO1xyXG4gICAgICAgICAgbGF5ZXJWaWV3LmZpbHRlciA9IHtcclxuICAgICAgICAgICAgd2hlcmU6IHF1ZXJ5LndoZXJlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIC8vIGYudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHtmaXJzdFF1ZXJ5fSAke3F1ZXJ5UmVxdWVzdH0gJyR7c2Vjb25kUXVlcnlUYXJnZXR9J2ApO1xyXG4gICAgICAgICAgbGF5ZXJWaWV3LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9ICR7cXVlcnlSZXF1ZXN0fSAke3NlY29uZFF1ZXJ5VGFyZ2V0fWA7XHJcbiAgICAgICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbYCR7Zmlyc3RRdWVyeX1gXTtcclxuICAgICAgICAgIGxheWVyVmlldy5maWx0ZXIgPSB7XHJcbiAgICAgICAgICAgIHdoZXJlOiBxdWVyeS53aGVyZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICAvLyBmLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYCR7Zmlyc3RRdWVyeX0gJHtxdWVyeVJlcXVlc3R9ICR7c2Vjb25kUXVlcnlUYXJnZXR9YCk7XHJcbiAgICAgICAgICBsYXllclZpZXcudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICBjaG9vc2VBbmRPciA9IChlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgQW5kT3I6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLkFuZE9yKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBvcGVuRHJvcCA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmF1dE9wZW4pIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgYXV0T3BlbjogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgYXV0T3BlbjogdHJ1ZSxcclxuICAgICAgICBtb3VzZWxlYXZlOiBmYWxzZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY2xvc2VEcm9wID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG9wZW5lZDogZmFsc2UsXHJcbiAgICAgIGF1dE9wZW46IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdGhpcy5hdXRPcGVuPWZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGNsb3NlRHJvcE9uY2xpY2tPdXRzaWRlID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuYXV0T3BlbiAmJiB0aGlzLnN0YXRlLm1vdXNlbGVhdmUpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgYXV0T3BlbjogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgb25tb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuYXV0T3Blbikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtb3VzZWxlYXZlOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBtZXRob2RzIGZvciBhdHRyaWJ1dGUgdGFibGVcclxuXHJcbiAgZ2V0QWxsQ2hlY2tlZExheWVycyA9ICgpPT57XHJcbiAgICBjb25zdCBhY3RpdmVWaWV3ID0gV2lkZ2V0LmFjdGl2ZVY7XHJcbiAgICBjb25zdCBhbGxNYXBMYXllcnMgPSBhY3RpdmVWaWV3LnZpZXcubWFwLmFsbExheWVycz8uaXRlbXM7XHJcbiAgICBjb25zdCBjaGVja2VkTGF5ZXJzID0gdGhpcy5zdGF0ZS5jaGVja2VkTGF5ZXJfO1xyXG4gICAgbGV0IG5ld01hcExheWVyID0gW107XHJcbiAgICBpZiAoYWxsTWFwTGF5ZXJzPy5sZW5ndGggPiAwICYmIGNoZWNrZWRMYXllcnMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgbmV3TWFwTGF5ZXIgPSBhbGxNYXBMYXllcnMucmVkdWNlKChuZXdBcnJheSxpdGVtKT0+e1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tlZExheWVycy5pbmNsdWRlcyhpdGVtLmlkKSl7XHJcbiAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcclxuICAgICAgICB9LFtdKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld01hcExheWVyO1xyXG59XHJcblxyXG5nZXRBY3RpdmVWaWV3ID0gKCk9PntcclxuICBjb25zdCBhY3RpdmVWaWV3ID0gV2lkZ2V0LmFjdGl2ZVY7XHJcbiAgcmV0dXJuIGFjdGl2ZVZpZXc7XHJcbn1cclxuXHJcblxyXG5nZXRBbGxKaW11TGF5ZXJWaWV3cyA9ICgpPT57XHJcbiAgY29uc3QgamltdUxheWVyVmlld3MgPSBXaWRnZXQuamltdUxheWVyVmlld3o7XHJcbiAgcmV0dXJuIGppbXVMYXllclZpZXdzXHJcbn1cclxuXHJcbmNvbm5lY3RvciA9IChkYXRhKT0+e1xyXG4gIGNvbnNvbGUubG9nKCdycnJycnJycnJycnJycnJycnJycnJycnJyJyxkYXRhKVxyXG5cclxuICBsZXQgb2JqID0geyAgICAgXHJcbiAgICByZXN1bHRzOmRhdGEucmVzdWx0cyxcclxuICAgIGFsbENoZWNrZWRMYXllcnM6W2RhdGEubGF5ZXJdLFxyXG59XHJcblxyXG5cclxuICBXaWRnZXQuYW55dmFyaWFibGUuaW5pdChvYmopO1xyXG4gIFdpZGdldC5hbnl2YXJpYWJsZS5kaXNwYXRjaGluZ0FsbCgpO1xyXG4gIC8vIGxldCBhY3RpdmVWID10aGlzLnN0YXRlLmppbXVNYXBWaWV3O1xyXG4gIC8vIHRoaXMuc2V0U3RhdGUoe2xheWVyQ29udGVudHM6ZGF0YS5zZWxlY3RlZExheWVyc0NvbnRlbnRzfSk7XHJcbiAgLy8gdGhpcy5zZXRTdGF0ZSh7Y2hlY2tlZExheWVyXzpkYXRhLmNoZWNrZWRMYXllcl99KTtcclxuICAvLyBjb25zdCBnZW9tZXRyeSA9IFBvbHlnb24uZnJvbUV4dGVudChhY3RpdmVWLnZpZXcuZXh0ZW50KS50b0pTT04oKTtcclxuICAvLyBjb25zdCBsYXllck9wZW4gPSB7XHJcbiAgLy8gICBnZW9tZXRyeTpnZW9tZXRyeSxcclxuICAvLyAgIHR5cGVTZWxlY3RlZDpcImNvbnRhaW5zXCIsXHJcbiAgLy8gfVxyXG4gIC8vIHRoaXMucHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiY3JlYXRlVGFibGVcIix0cnVlKSk7XHJcblxyXG4vLyAgIGlmIChPYmplY3Qua2V5cyhkYXRhLm51bWJlck9mQXR0cmlidXRlcykubGVuZ3RoID4gMCl7XHJcbi8vICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNyZWF0ZVRhYmxlXCIsdHJ1ZSkpO1xyXG4vLyAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJudW1iZXJPZkF0dHJpYnV0ZVwiLGRhdGEubnVtYmVyT2ZBdHRyaWJ1dGVzKSk7XHJcbi8vICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImxheWVyT3BlblwiLGxheWVyT3BlbikpO1xyXG4vLyAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJnZXRBbGxMYXllcnNcIix0aGlzLmdldEFsbENoZWNrZWRMYXllcnMpKTtcclxuLy8gICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiZ2V0QWN0aXZlVmlld1wiLHRoaXMuZ2V0QWN0aXZlVmlldykpO1xyXG4vLyAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJnZXRBbGxKaW11TGF5ZXJWaWV3c1wiLHRoaXMuZ2V0QWxsSmltdUxheWVyVmlld3MpKTtcclxuLy8gfWVsc2V7XHJcbi8vICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJzaG93QWxlcnRcIix0cnVlKSk7XHJcbi8vIH1cclxuICBcclxufVxyXG5cclxuICAvL1RPRE8gY29uZmlnIGFiaWxpdGFyZSB0YWIgdHJ1ZS9mYWxzZVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJ3aWRnZXQtYXR0cmlidXRlLXRhYmxlIGppbXUtd2lkZ2V0XCJcclxuICAgICAgICBpZD1cIndyYXBcIlxyXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlRHJvcE9uY2xpY2tPdXRzaWRlKCk7XHJcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7dGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eShcInVzZU1hcFdpZGdldElkc1wiKSAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdICYmIChcclxuICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XHJcbiAgICAgICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXt0aGlzLmFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGlkPVwic2VhcmNoLWFkdmFuY2VkLXRhYi1BbWJpdG9cIiB0aXRsZT1cIkFtYml0b1wiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IGNvbnRhaW5lci1mbHVpZCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gZmxleC1jb2x1bW5cIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8QWxlcnRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybT1cImJhc2ljXCJcclxuICAgICAgICAgICAgICAgICAgICBvcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cIlNlbGV6aW9uYXJlIHByaW1hIGlsIGxheWVyLCBwb2kgY29udGludWEgY29uIGlsIGNvc3RydXR0b3JlIGRlbGxhIHF1ZXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgd2l0aEljb25cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3LTEwMFwiPlNlbGV6aW9uYSBpbCBsYXllcjo8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTZWxlY3RMYXllcn1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZXN1bHRMYXllckxpc3QubWFwKChlbCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbC5lbGVtZW50LmxheWVySWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkVXJsPXtlbC5lbGVtZW50LnBhcnNlZFVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtlbC5lbGVtZW50LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50YWJsZXMubGVuZ3RoIDwgMiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgbGUgZmVhdHVyZSBuZWwgbGF5ZXIgY29ycmlzcG9uZGVudGkgYWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2VndWVudGUgZXNwcmVzc2lvbmVcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hvb3NlQW5kT3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiBWaXN1YWxpenphIGxlIGZlYXR1cmUgbmVsIGxheWVyIGNoZSBjb3JyaXNwb25kb25vIGEgdHV0dGUgbGUgZXNwcmVzc2lvbmkgc2VndWVudGlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiQU5EXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiQU5EXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgbGUgZmVhdHVyZSBuZWwgbGF5ZXIgY2hlIGNvcnJpc3BvbmRvbm8gYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0dXR0ZSBsZSBlc3ByZXNzaW9uaSBzZWd1ZW50aVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiT1JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBsZSBmZWF0dXJlIG5lbCBsYXllciBjaGUgY29ycmlzcG9uZG9ubyBhZCB1bmFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbHNpYXNpIGRlbGxlIGVzcHJlc3Npb25pIHNlZ3VlbnRpXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMSBtYi0zIGp1c3RpZnktY29udGVudC1hcm91bmRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXJyZW50VGFyZ2V0VGV4dH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRUYWJsZX1cclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyICBtYi0yXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGljb249Jzxzdmcgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNNy41IDBhLjUuNSAwIDAgMC0uNS41VjdILjVhLjUuNSAwIDAgMCAwIDFIN3Y2LjVhLjUuNSAwIDAgMCAxIDBWOGg2LjVhLjUuNSAwIDAgMCAwLTFIOFYuNWEuNS41IDAgMCAwLS41LS41WlwiIGZpbGw9XCIjMDAwXCI+PC9wYXRoPjwvc3ZnPidcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMCBwLTBcIj5BZ2dpdW5naSBlc3ByZXNzaW9uZTwvcD5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZW5kUXVlcnl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMCBwLTBcIj5BcHBsaWNhPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IGhlaWdodDogXCI1MCVcIiwgb3ZlcmZsb3dZOiBcInNjcm9sbFwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50YWJsZXMubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtgcm93LSR7aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q9e3RoaXMuc3RhdGUucmVzdWx0c0xheWVyU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuRHJvcEQ9e3RoaXMuc3RhdGUuaXNPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3BEb3duPXsoKSA9PiB0aGlzLmRyb3BEb3duKGVsLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93blZhbHVlUXVlcnk9e3RoaXMuc3RhdGUuZHJvcGRvd25WYWx1ZVF1ZXJ5fVxyXG4gICAgICAgICAgICAgICAgICAgIGlzQ2hlY2tlZD17dGhpcy5zdGF0ZS5pc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcklzQ2hlY2tlZD17dGhpcy5zdGF0ZS5jb3VudGVySXNDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWRUb1F1ZXJ5PXt0aGlzLnN0YXRlLmNoZWNrZWRUb1F1ZXJ5fVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlcz17dGhpcy5zdGF0ZS50YWJsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGVzSWQ9e2VsLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlcz17dGhpcy5zdGF0ZS53aGVyZUNsYXVzZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0UXVlcnlBdHRyaWJ1dGU9e3RoaXMuZ2V0UXVlcnlBdHRyaWJ1dGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0UXVlcnk9e3RoaXMuZ2V0UXVlcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGhpcmRRdWVyeT17dGhpcy50aGlyZFF1ZXJ5fVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRJbnB1dEhhbmRsZXI9e3RoaXMudGV4dElucHV0SGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkl0ZW1IYW5kbGVyPXt0aGlzLmRyb3Bkb3duSXRlbUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRGaXJzdEluY2x1ZGVkSGFuZGxlcj17dGhpcy50ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcj17dGhpcy50ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3BEb3duVG9nZ2xlcj17dGhpcy5kcm9wRG93bn1cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGVja0JveD17dGhpcy5oYW5kbGVDaGVja0JveH1cclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVUYWJsZT17KCkgPT4gdGhpcy5kZWxldGVUYWJsZShlbC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pdm9jb1NlbGVjdEhhbmRsZXI9e3RoaXMudW5pdm9jb1NlbGVjdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VDaGVja0JveD17dGhpcy5vbkNoYW5nZUNoZWNrQm94fVxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5Ecm9wPXt0aGlzLm9wZW5Ecm9wfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlRHJvcD17dGhpcy5jbG9zZURyb3B9XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVkPXt0aGlzLnN0YXRlLm9wZW5lZH1cclxuICAgICAgICAgICAgICAgICAgICBhdXRPcGVuPXt0aGlzLnN0YXRlLmF1dE9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgbW91c2VsZWF2ZT17dGhpcy5zdGF0ZS5tb3VzZWxlYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9ubW91c2VMZWF2ZT17dGhpcy5vbm1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=