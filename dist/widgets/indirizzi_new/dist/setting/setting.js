System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-icons/svg/outlined/editor/plus.svg":
/*!*************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/plus.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z\" fill=\"#000\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/outlined/editor/plus.tsx":
/*!*********************************************!*\
  !*** ./jimu-icons/outlined/editor/plus.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlusOutlined": () => (/* binding */ PlusOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/plus.svg */ "./jimu-icons/svg/outlined/editor/plus.svg");
/* harmony import */ var _svg_outlined_editor_plus_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_plus_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const PlusOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_plus_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


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

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/indirizzi_new/src/setting/setting.tsx ***!
  \***********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_editor_plus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/editor/plus */ "./jimu-icons/outlined/editor/plus.tsx");
/** @jsx jsx */




class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            reload: false
        };
        this.onMapWidgetSelected = (useMapWidgetIds) => {
            this.props.onSettingChange({
                id: this.props.id,
                useMapWidgetIds: useMapWidgetIds
            });
        };
        this.onMapWidgetSelected = this.onMapWidgetSelected.bind(this);
        this.saveState = this.saveState.bind(this);
        this.addNewRow = this.addNewRow.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.setCol2 = this.setCol2.bind(this);
        this.setLink = this.setLink.bind(this);
    }
    saveState(key, value) {
        this.props.onSettingChange({
            id: this.props.id,
            config: this.props.config.set(key, value)
        });
    }
    addNewRow() {
        this.props.config.listvalues.push({
            listIds: "",
            link: ""
        });
        this.saveState('listvalues', this.props.config.listvalues);
        this.setState({ reload: !this.state.reload });
    }
    removeRow(e, i) {
        this.props.config.listvalues.splice(i, 1);
        this.saveState('listvalues', this.props.config.listvalues);
        this.setState({ reload: !this.state.reload });
    }
    setName(event, i) {
        this.props.config.listvalues[i].name = event.target.value;
        this.saveState('listvalues', this.props.config.listvalues);
    }
    setCol2(event, i) {
        this.props.config.listvalues[i].listIds = event.target.value;
        this.saveState('listvalues', this.props.config.listvalues);
    }
    setLink(event, i) {
        this.props.config.listvalues[i].link = event.target.value;
        this.saveState('listvalues', this.props.config.listvalues);
    }
    render() {
        let listvalues = [];
        if (this.props.config.listvalues.length) {
            for (let i = 0; i < this.props.config.listvalues.length; i++) {
                listvalues.push((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Row " + (i + 1) },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "col-" + i + "-2", defaultMessage: "Nome servizio" }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { defaultValue: this.props.config.listvalues[i].name, onChange: (e) => this.setName(e, i) })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "col-" + i + "-2", defaultMessage: "Set Ids (0,1,2)" }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { defaultValue: this.props.config.listvalues[i].listIds, onChange: (e) => this.setCol2(e, i) })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "col-" + i + "-link", defaultMessage: "Service's link" }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { defaultValue: this.props.config.listvalues[i].link, onChange: (e) => this.setLink(e, i) })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "w-100" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { type: "danger", onClick: (e) => this.removeRow(e, i) }, " Delete row"))));
            }
        }
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-setting-search-advanced" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Sorgente Mappa" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { useMapWidgetIds: this.props.useMapWidgetIds, onSelect: this.onMapWidgetSelected })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Options" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "idWidgetTable", defaultMessage: "Id Widget table" }) },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { defaultValue: this.props.config.idWidgetTable, onChange: (e) => this.saveState('idWidgetTable', e.target.value) }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "List value" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "app-root-emotion-cache-ltr-j80zov jimu-widget-setting--row form-group align-items-center row" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "w-100 data-remind" }, "Add the service's uri and layerId (0,1,2) ")),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "app-root-emotion-cache-ltr-j80zov jimu-widget-setting--row form-group align-items-center row" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "w-100" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { type: "primary", onClick: this.addNewRow },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_plus__WEBPACK_IMPORTED_MODULE_3__.PlusOutlined, null),
                            " New row")))),
            listvalues));
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9pbmRpcml6emlfbmV3L2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E2QztBQUVPO0FBRTdDLE1BQU0sWUFBWSxHQUFHLENBQUMsS0FBd0IsRUFBRSxFQUFFO0lBQ3ZELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHO0lBQ3RCLE1BQU0sRUFBRSxTQUFTLEtBQWdCLEtBQUssRUFBaEIsTUFBTSxVQUFLLEtBQUssRUFBaEMsYUFBd0IsQ0FBUTtJQUV0QyxNQUFNLE9BQU8sR0FBRyxxREFBVSxDQUFDLCtCQUErQixFQUFFLFNBQVMsQ0FBQztJQUN0RSxJQUFJLENBQUMsR0FBRztRQUFFLE9BQU8sa0ZBQUssU0FBUyxFQUFFLE9BQU8sSUFBTSxNQUFhLEVBQUk7SUFDL0QsT0FBTywyREFBQyxHQUFHLGtCQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLHNFQUFHLElBQU0sTUFBTSxFQUFJO0FBQzFELENBQUM7Ozs7Ozs7Ozs7OztBQ1hEOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObkQsZUFBZTtBQUMwQztBQUV5QztBQUNuRTtBQUM4QjtBQUc5QyxNQUFNLE9BQVEsU0FBUSwwREFBb0Q7SUFLckYsWUFBYSxLQUFLO1FBQ2QsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUpoQixVQUFLLEdBQUc7WUFDSixNQUFNLEVBQUUsS0FBSztTQUNoQjtRQVlELHdCQUFtQixHQUFHLENBQUMsZUFBeUIsRUFBRSxFQUFFO1lBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2dCQUN6QixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixlQUFlLEVBQUUsZUFBZTthQUNqQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFiSSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQVFILFNBQVMsQ0FBQyxHQUFHLEVBQUMsS0FBSztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztZQUN6QixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztTQUMxQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0MsU0FBUztRQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDOUIsT0FBTyxFQUFFLEVBQUU7WUFDWCxJQUFJLEVBQUUsRUFBRTtTQUNYLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFLLEVBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUMsSUFBSSxD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L291dGxpbmVkL2VkaXRvci9wbHVzLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvcGx1cy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2luZGlyaXp6aV9uZXcvc3JjL3NldHRpbmcvc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk03LjUgMGEuNS41IDAgMCAwLS41LjVWN0guNWEuNS41IDAgMCAwIDAgMUg3djYuNWEuNS41IDAgMCAwIDEgMFY4aDYuNWEuNS41IDAgMCAwIDAtMUg4Vi41YS41LjUgMCAwIDAtLjUtLjVaXFxcIiBmaWxsPVxcXCIjMDAwXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2VkaXRvci9wbHVzLnN2ZydcclxuXHJcbmV4cG9ydCBjb25zdCBQbHVzT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IFJlYWN0LCBqc3gsIEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tIFwiamltdS1jb3JlXCI7XHJcbmltcG9ydCB7IEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gXCJqaW11LWZvci1idWlsZGVyXCI7XHJcbmltcG9ydCB7TWFwV2lkZ2V0U2VsZWN0b3IsIFNldHRpbmdSb3csIFNldHRpbmdTZWN0aW9ufSBmcm9tIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCJqaW11LXVpXCI7XHJcbmltcG9ydCB7UGx1c091dGxpbmVkfSBmcm9tIFwiamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvcGx1c1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEFsbFdpZGdldFNldHRpbmdQcm9wczxhbnk+LCBhbnk+IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICByZWxvYWQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5vbk1hcFdpZGdldFNlbGVjdGVkID0gdGhpcy5vbk1hcFdpZGdldFNlbGVjdGVkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zYXZlU3RhdGUgPSB0aGlzLnNhdmVTdGF0ZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZE5ld1JvdyA9IHRoaXMuYWRkTmV3Um93LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVSb3cgPSB0aGlzLnJlbW92ZVJvdy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0Q29sMiA9IHRoaXMuc2V0Q29sMi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0TGluayA9IHRoaXMuc2V0TGluay5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgb25NYXBXaWRnZXRTZWxlY3RlZCA9ICh1c2VNYXBXaWRnZXRJZHM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICB1c2VNYXBXaWRnZXRJZHM6IHVzZU1hcFdpZGdldElkc1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc2F2ZVN0YXRlKGtleSx2YWx1ZSl7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldChrZXksIHZhbHVlKVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gICAgYWRkTmV3Um93KCl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jb25maWcubGlzdHZhbHVlcy5wdXNoKHtcclxuICAgICAgICAgICAgbGlzdElkczogXCJcIixcclxuICAgICAgICAgICAgbGluazogXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2F2ZVN0YXRlKCdsaXN0dmFsdWVzJyx0aGlzLnByb3BzLmNvbmZpZy5saXN0dmFsdWVzKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWxvYWQ6IXRoaXMuc3RhdGUucmVsb2FkfSk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVSb3coZSxpKXtcclxuICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5saXN0dmFsdWVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICB0aGlzLnNhdmVTdGF0ZSgnbGlzdHZhbHVlcycsdGhpcy5wcm9wcy5jb25maWcubGlzdHZhbHVlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVsb2FkOiF0aGlzLnN0YXRlLnJlbG9hZH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5hbWUoZXZlbnQsaSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jb25maWcubGlzdHZhbHVlc1tpXS5uYW1lID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2F2ZVN0YXRlKCdsaXN0dmFsdWVzJyx0aGlzLnByb3BzLmNvbmZpZy5saXN0dmFsdWVzKTtcclxuICAgIH1cclxuICAgIHNldENvbDIoZXZlbnQsaSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jb25maWcubGlzdHZhbHVlc1tpXS5saXN0SWRzID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2F2ZVN0YXRlKCdsaXN0dmFsdWVzJyx0aGlzLnByb3BzLmNvbmZpZy5saXN0dmFsdWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMaW5rKGV2ZW50LGkpe1xyXG4gICAgICAgIHRoaXMucHJvcHMuY29uZmlnLmxpc3R2YWx1ZXNbaV0ubGluayA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNhdmVTdGF0ZSgnbGlzdHZhbHVlcycsdGhpcy5wcm9wcy5jb25maWcubGlzdHZhbHVlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBsZXQgbGlzdHZhbHVlcyA9IFtdO1xyXG4gICAgICBpZih0aGlzLnByb3BzLmNvbmZpZy5saXN0dmFsdWVzLmxlbmd0aCl7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcHMuY29uZmlnLmxpc3R2YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICBsaXN0dmFsdWVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT17XCJSb3cgXCIrKGkrMSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9ezxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtcImNvbC1cIitpK1wiLTJcIn0gZGVmYXVsdE1lc3NhZ2U9e1wiTm9tZSBzZXJ2aXppb1wifS8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmNvbmZpZy5saXN0dmFsdWVzW2ldLm5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXROYW1lKGUsaSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPXs8Rm9ybWF0dGVkTWVzc2FnZSBpZD17XCJjb2wtXCIraStcIi0yXCJ9IGRlZmF1bHRNZXNzYWdlPXtcIlNldCBJZHMgKDAsMSwyKVwifS8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmNvbmZpZy5saXN0dmFsdWVzW2ldLmxpc3RJZHN9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRDb2wyKGUsaSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPXs8Rm9ybWF0dGVkTWVzc2FnZSBpZD17XCJjb2wtXCIraStcIi1saW5rXCJ9IGRlZmF1bHRNZXNzYWdlPXtcIlNlcnZpY2UncyBsaW5rXCJ9Lz59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMuY29uZmlnLmxpc3R2YWx1ZXNbaV0ubGlua30gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldExpbmsoZSxpKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRhbmdlclwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnJlbW92ZVJvdyhlLGkpfT4gRGVsZXRlIHJvdzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zZXR0aW5nLXNlYXJjaC1hZHZhbmNlZFwiPlxyXG4gICAgICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPXtcIlNvcmdlbnRlIE1hcHBhXCJ9PlxyXG4gICAgICAgICAgICA8TWFwV2lkZ2V0U2VsZWN0b3IgdXNlTWFwV2lkZ2V0SWRzPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkc30gb25TZWxlY3Q9e3RoaXMub25NYXBXaWRnZXRTZWxlY3RlZH0gLz5cclxuICAgICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9e1wiT3B0aW9uc1wifT5cclxuICAgICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9ezxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiaWRXaWRnZXRUYWJsZVwiIGRlZmF1bHRNZXNzYWdlPXtcIklkIFdpZGdldCB0YWJsZVwifS8+fT5cclxuICAgICAgICAgICAgICA8aW5wdXQgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmNvbmZpZy5pZFdpZGdldFRhYmxlfSBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2F2ZVN0YXRlKCdpZFdpZGdldFRhYmxlJyxlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICAgICAgICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPXtcIkxpc3QgdmFsdWVcIn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1yb290LWVtb3Rpb24tY2FjaGUtbHRyLWo4MHpvdiBqaW11LXdpZGdldC1zZXR0aW5nLS1yb3cgZm9ybS1ncm91cCBhbGlnbi1pdGVtcy1jZW50ZXIgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0xMDAgZGF0YS1yZW1pbmRcIj5BZGQgdGhlIHNlcnZpY2UncyB1cmkgYW5kIGxheWVySWQgKDAsMSwyKSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLXJvb3QtZW1vdGlvbi1jYWNoZS1sdHItajgwem92IGppbXUtd2lkZ2V0LXNldHRpbmctLXJvdyBmb3JtLWdyb3VwIGFsaWduLWl0ZW1zLWNlbnRlciByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmFkZE5ld1Jvd30+PFBsdXNPdXRsaW5lZC8+IE5ldyByb3c8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgICAgICAgICB7bGlzdHZhbHVlc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=