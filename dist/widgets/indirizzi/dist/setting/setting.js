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
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/indirizzi/src/setting/setting.tsx ***!
  \*******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/** @jsx jsx */



class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.onMapWidgetSelected = (useMapWidgetIds) => {
            this.props.onSettingChange({
                id: this.props.id,
                useMapWidgetIds: useMapWidgetIds
            });
        };
        this.state = { showInputs: false, inputsType: " ", categoryType: null };
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    saveState(val, key, value) {
        const categoryType = this.state.categoryType;
        if (categoryType) {
            const currentValue = this.props.config[categoryType];
            let newObject = this.props.config;
            if (typeof currentValue[val] === "object") {
                const innerObject = Object.assign(Object.assign({}, currentValue[val]), { [key]: value });
                newObject = Object.assign(Object.assign({}, currentValue), { [val]: innerObject });
            }
            else {
                newObject = Object.assign(Object.assign({}, currentValue), { [key]: value });
            }
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set(categoryType, newObject)
            });
        }
    }
    // saveState(val,key,value){
    //   const currentValue = this.props.config[val];
    //   let newObject = this.props.config;
    //   if (typeof currentValue === "object"){
    //     newObject = {...this.props.config[val],[key]:value};
    //   }else{
    //     newObject = value
    //   }
    //   this.props.onSettingChange({
    //     id: this.props.id,
    //     config: this.props.config.set(val,newObject)
    //   }); 
    // }
    onChangeHandler(e, category) {
        //@ts-ignore
        this.setState({ showInputs: true, inputsType: e.target.value, categoryType: category });
    }
    render() {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-setting-search-advanced" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Sorgente Mappa" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { useMapWidgetIds: this.props.useMapWidgetIds, onSelect: this.onMapWidgetSelected })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Settings" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { onChange: (e) => this.onChangeHandler(e, "settings"), placeholder: "Select search option" }, Object.keys(this.props.config["settings"]).map((el, i) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { id: i, value: el },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "text-truncate" }, el)))))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Services" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { onChange: (e) => this.onChangeHandler(e, "services"), placeholder: "Select search option" }, Object.keys(this.props.config["services"]).map((el, i) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Option, { id: i, value: el },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "text-truncate" }, el)))))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Options" }, this.state.showInputs && this.state.categoryType ?
                Object.keys(this.props.config[this.state.categoryType]).map((val, i) => {
                    if (this.state.inputsType === val) {
                        const item = this.props.config[this.state.categoryType][val];
                        let currentItem = item;
                        let keys;
                        if (typeof currentItem === "object") {
                            keys = Object.keys(currentItem);
                        }
                        if (Array.isArray(keys)) {
                            return (keys.map((key, j) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: key, defaultMessage: key }), key: `${j}` + { key } },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { defaultValue: currentItem[key], onChange: (e) => this.saveState(val, key, e.target.value) })))));
                        }
                        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: val, defaultMessage: val }) },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { defaultValue: currentItem, onChange: (e) => this.saveState(val, val, e.target.value) })));
                    }
                    return null;
                })
                : null)));
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9pbmRpcml6emkvZGlzdC9zZXR0aW5nL3NldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05uRCxlQUFlO0FBQzBDO0FBRXlDO0FBQzVEO0FBR3ZCLE1BQU0sT0FBUSxTQUFRLDBEQUFvRDtJQUV2RixZQUFZLEtBQWdDO1FBQzFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUtmLHdCQUFtQixHQUFHLENBQUMsZUFBeUIsRUFBRSxFQUFFO1lBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2dCQUN6QixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixlQUFlLEVBQUUsZUFBZTthQUNqQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFUQSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUMsVUFBVSxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsR0FBRyxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsZUFBZSxHQUFHLElB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RUFBQyxDQUFDLEVBQUMsRUFBRSxFQUNoQiwrQ0FBQywyRUFBVSxJQUFDLEtBQUssRUFBRSwrQ0FBQyx1REFBZ0IsSUFBQyxFQUFFLEVBQUksR0FBRyxFQUFFLGNBQWMsRUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUksR0FBRyxDQUFDLEVBQUUsR0FBQyxFQUFDLEdBQUcsRUFBQztnQ0FDM0YsMERBQ0UsWUFBWSxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFDOUIsUUFBUSxFQUFJLENBQUMsQ0FBQyxFQUFDLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQ3ZELENBQ1MsQ0FDZCxDQUFDLENBQ0g7eUJBQ0Y7d0JBQ0QsT0FBTyxDQUNMLCtDQUFDLDJFQUFVLElBQUMsS0FBSyxFQUFFLCtDQUFDLHVEQUFnQixJQUFDLEVBQUUsRUFBSSxHQUFHLEVBQUUsY0FBYyxFQUFJLEdBQUcsR0FBRzs0QkFDdEUsMERBQ0UsWUFBWSxFQUFFLFdBQVcsRUFDekIsUUFBUSxFQUFJLENBQUMsQ0FBQyxFQUFDLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQ3ZELENBQ08sQ0FDWjtxQkFDRjtvQkFDRCxPQUFPLElBQUksQ0FBQztnQkFDZCxDQUFDLENBQUM7Z0JBQ0YsQ0FBQyxLQUFJLENBRU0sQ0FDYixDQUNULENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2luZGlyaXp6aS9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9zZXR0aW5nX2NvbXBvbmVudHNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsgUmVhY3QsIGpzeCwgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gXCJqaW11LWNvcmVcIjtcclxuaW1wb3J0IHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSBcImppbXUtZm9yLWJ1aWxkZXJcIjtcclxuaW1wb3J0IHtNYXBXaWRnZXRTZWxlY3RvciwgU2V0dGluZ1JvdywgU2V0dGluZ1NlY3Rpb259IGZyb20gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1NlbGVjdCxPcHRpb259IGZyb20gJ2ppbXUtdWknO1xyXG5pbXBvcnQgeyBDaGFuZ2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWxsV2lkZ2V0U2V0dGluZ1Byb3BzPGFueT4sIGFueT4ge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczpBbGxXaWRnZXRTZXR0aW5nUHJvcHM8YW55Pil7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge3Nob3dJbnB1dHM6ZmFsc2UsaW5wdXRzVHlwZTpcIiBcIixjYXRlZ29yeVR5cGU6bnVsbH07XHJcbiAgICB0aGlzLm9uQ2hhbmdlSGFuZGxlciA9IHRoaXMub25DaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBvbk1hcFdpZGdldFNlbGVjdGVkID0gKHVzZU1hcFdpZGdldElkczogc3RyaW5nW10pID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIHVzZU1hcFdpZGdldElkczogdXNlTWFwV2lkZ2V0SWRzXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzYXZlU3RhdGUodmFsLGtleSx2YWx1ZSl7XHJcbiAgICBjb25zdCBjYXRlZ29yeVR5cGUgPSB0aGlzLnN0YXRlLmNhdGVnb3J5VHlwZTtcclxuICAgIGlmIChjYXRlZ29yeVR5cGUpe1xyXG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLnByb3BzLmNvbmZpZ1tjYXRlZ29yeVR5cGVdO1xyXG4gICAgICBsZXQgbmV3T2JqZWN0ID0gdGhpcy5wcm9wcy5jb25maWc7XHJcbiAgICAgIGlmICh0eXBlb2YgY3VycmVudFZhbHVlW3ZhbF0gPT09IFwib2JqZWN0XCIpe1xyXG4gICAgICAgIGNvbnN0IGlubmVyT2JqZWN0ID0gey4uLmN1cnJlbnRWYWx1ZVt2YWxdLFtrZXldOnZhbHVlfTtcclxuICAgICAgICBuZXdPYmplY3QgPSB7Li4uY3VycmVudFZhbHVlLFt2YWxdOmlubmVyT2JqZWN0fTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgbmV3T2JqZWN0ID0gey4uLmN1cnJlbnRWYWx1ZSxba2V5XTp2YWx1ZX1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoY2F0ZWdvcnlUeXBlLG5ld09iamVjdClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBzYXZlU3RhdGUodmFsLGtleSx2YWx1ZSl7XHJcbiAgLy8gICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLnByb3BzLmNvbmZpZ1t2YWxdO1xyXG4gIC8vICAgbGV0IG5ld09iamVjdCA9IHRoaXMucHJvcHMuY29uZmlnO1xyXG4gIC8vICAgaWYgKHR5cGVvZiBjdXJyZW50VmFsdWUgPT09IFwib2JqZWN0XCIpe1xyXG4gIC8vICAgICBuZXdPYmplY3QgPSB7Li4udGhpcy5wcm9wcy5jb25maWdbdmFsXSxba2V5XTp2YWx1ZX07XHJcbiAgLy8gICB9ZWxzZXtcclxuICAvLyAgICAgbmV3T2JqZWN0ID0gdmFsdWVcclxuICAvLyAgIH1cclxuICAvLyAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAvLyAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgLy8gICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KHZhbCxuZXdPYmplY3QpXHJcbiAgLy8gICB9KTsgXHJcbiAgLy8gfVxyXG5cclxuICBvbkNoYW5nZUhhbmRsZXIoZTpDaGFuZ2VFdmVudCxjYXRlZ29yeTpzdHJpbmcpe1xyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93SW5wdXRzOnRydWUsaW5wdXRzVHlwZTplLnRhcmdldC52YWx1ZSxjYXRlZ29yeVR5cGU6Y2F0ZWdvcnl9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zZXR0aW5nLXNlYXJjaC1hZHZhbmNlZFwiPlxyXG4gICAgICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPXtcIlNvcmdlbnRlIE1hcHBhXCJ9PlxyXG4gICAgICAgICAgICA8TWFwV2lkZ2V0U2VsZWN0b3IgdXNlTWFwV2lkZ2V0SWRzPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkc30gb25TZWxlY3Q9e3RoaXMub25NYXBXaWRnZXRTZWxlY3RlZH0gLz5cclxuICAgICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9e1wiU2V0dGluZ3NcIn0+XHJcbiAgICAgICAgICAgIDxTZWxlY3Qgb25DaGFuZ2U9eyhlKT0+dGhpcy5vbkNoYW5nZUhhbmRsZXIoZSxcInNldHRpbmdzXCIpfSBwbGFjZWhvbGRlcj1cIlNlbGVjdCBzZWFyY2ggb3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMuY29uZmlnW1wic2V0dGluZ3NcIl0pLm1hcCgoZWwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxPcHRpb24gaWQ9e2l9IHZhbHVlPXtlbH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZVwiPntlbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9e1wiU2VydmljZXNcIn0+XHJcbiAgICAgICAgICAgIDxTZWxlY3Qgb25DaGFuZ2U9eyhlKT0+dGhpcy5vbkNoYW5nZUhhbmRsZXIoZSxcInNlcnZpY2VzXCIpfSBwbGFjZWhvbGRlcj1cIlNlbGVjdCBzZWFyY2ggb3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMuY29uZmlnW1wic2VydmljZXNcIl0pLm1hcCgoZWwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxPcHRpb24gaWQ9e2l9IHZhbHVlPXtlbH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZVwiPntlbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9e1wiT3B0aW9uc1wifT5cclxuICAgICAgICAgICAgey8qIDxTZXR0aW5nUm93IGxhYmVsPXs8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cImlkV2lkZ2V0VGFibGVcIiBkZWZhdWx0TWVzc2FnZT17XCJJZCBXaWRnZXQgdGFibGVcIn0vPn0+XHJcbiAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmNvbmZpZy5pZFdpZGdldFRhYmxlfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zYXZlU3RhdGUoJ2lkV2lkZ2V0VGFibGUnLFwiaWRXaWRnZXRUYWJsZVwiLGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+ICovfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dJbnB1dHMgJiYgdGhpcy5zdGF0ZS5jYXRlZ29yeVR5cGUgP1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcy5jb25maWdbdGhpcy5zdGF0ZS5jYXRlZ29yeVR5cGVdKS5tYXAoKHZhbCxpKT0+e1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5pbnB1dHNUeXBlID09PSB2YWwpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnByb3BzLmNvbmZpZ1t0aGlzLnN0YXRlLmNhdGVnb3J5VHlwZV1bdmFsXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEl0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXlzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudEl0ZW0gPT09IFwib2JqZWN0XCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKGN1cnJlbnRJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5cykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzLm1hcCgoa2V5LGopPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9ezxGb3JtYXR0ZWRNZXNzYWdlIGlkID0ge2tleX0gZGVmYXVsdE1lc3NhZ2UgPSB7a2V5fS8+fSBrZXkgPSB7YCR7an1gK3trZXl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjdXJyZW50SXRlbVtrZXldfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpPT50aGlzLnNhdmVTdGF0ZSh2YWwsa2V5LGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9ezxGb3JtYXR0ZWRNZXNzYWdlIGlkID0ge3ZhbH0gZGVmYXVsdE1lc3NhZ2UgPSB7dmFsfS8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y3VycmVudEl0ZW19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyhlKT0+dGhpcy5zYXZlU3RhdGUodmFsLHZhbCxlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICA6bnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9