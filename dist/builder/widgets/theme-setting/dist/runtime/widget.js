System.register(["jimu-core","jimu-for-builder","jimu-theme","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/advanced/style-setting-components","jimu-ui/basic/color-picker"],(function(e,t){var o={},a={},n={},l={},r={},s={},c={};return{setters:[function(e){o.CONSTANTS=e.CONSTANTS,o.Immutable=e.Immutable,o.React=e.React,o.ReactRedux=e.ReactRedux,o.ThemeThemeAlertColorKeys=e.ThemeThemeAlertColorKeys,o.ThemeThemeColorKeys=e.ThemeThemeColorKeys,o.classNames=e.classNames,o.css=e.css,o.injectIntl=e.injectIntl,o.jsx=e.jsx,o.urlUtils=e.urlUtils,o.utils=e.utils},function(e){a.getAppConfigAction=e.getAppConfigAction},function(e){n.styled=e.styled,n.useTheme2=e.useTheme2},function(e){l.Button=e.Button,l.Dropdown=e.Dropdown,l.DropdownButton=e.DropdownButton,l.DropdownItem=e.DropdownItem,l.DropdownMenu=e.DropdownMenu,l.Label=e.Label,l.PanelHeader=e.PanelHeader,l.Slider=e.Slider,l.Tooltip=e.Tooltip,l.defaultMessages=e.defaultMessages,l.hooks=e.hooks},function(e){r.SettingRow=e.SettingRow,r.SettingSection=e.SettingSection},function(e){s.FontFamilySelector=e.FontFamilySelector},function(e){c.ColorPicker=e.ColorPicker}],execute:function(){e((()=>{var e={8371:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6.036 12.157 8.01-8.01a.5.5 0 1 1 .707.707l-8.01 8.01a1 1 0 0 1-1.415 0L1.146 8.682a.5.5 0 1 1 .708-.707l4.182 4.182Z" fill="#000"></path></svg>'},3869:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 7.5a.522.522 0 0 1-.516.527H2.976L6.473 11.6a.535.535 0 0 1 0 .746.508.508 0 0 1-.73 0L1 7.5l4.743-4.846a.508.508 0 0 1 .73 0 .535.535 0 0 1 0 .746L2.976 6.973h11.508c.285 0 .516.236.516.527Z" fill="#000"></path></svg>'},9788:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .538.538 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.538.538 0 0 1 0-.738Z" fill="#000"></path></svg>'},3273:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0Z" fill="#000"></path></svg>'},9216:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.226 1.312c-.403-.404-1.044-.417-1.431-.03L2.49 8.587l-.48 2.674a.637.637 0 0 0 .73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431l-1.462-1.462Zm-8.113 9.575.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991-1.781.32Zm7.473-6.012 1.402-1.4-1.462-1.463-1.401 1.402 1.461 1.461Z" fill="#000"></path><path d="M1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z" fill="#000"></path></svg>'},8891:e=>{"use strict";e.exports=o},3137:e=>{"use strict";e.exports=a},4796:e=>{"use strict";e.exports=n},726:e=>{"use strict";e.exports=l},7756:e=>{"use strict";e.exports=r},5505:e=>{"use strict";e.exports=s},1362:e=>{"use strict";e.exports=c}},t={};function i(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="";var m={};return i.p=window.jimuConfig.baseUrl,(()=>{"use strict";i.r(m),i.d(m,{default:()=>W});var e=i(8891),t=i(3137),o=i(4796);const a=o.styled.div`
  height: 100%;
  flex: 1;
  overflow: auto;
`,n=t=>{const{active:o,children:n}=t;return e.React.createElement(a,{className:(0,e.classNames)("stepper",{"d-none":!o})},o&&n)};var l=i(726),r=i(8371),s=i.n(r);const c=t=>{const o=window.SVG,{className:a}=t,n=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o}(t,["className"]),l=(0,e.classNames)("jimu-icon jimu-icon-component",a);return o?e.React.createElement(o,Object.assign({className:l,src:s()},n)):e.React.createElement("svg",Object.assign({className:l},n))},d=t=>{var o,a;const{className:n,themeInfo:r,selectedTheme:s,onSelect:i}=t,m=r.uri===s,d=null!==(a=null===(o=r.i18nLabel)||void 0===o?void 0:o[window.locale])&&void 0!==a?a:r.label,p=r.font,u=((t,o)=>e.React.useMemo((()=>{var a,n,l;return e.css`
    display: flex;
    flex-direction: column;
    align-items: center;
    > .btn {
      width: 100%;
      height:auto;
      background: var(--light-200);
      border: 2px solid transparent;
      &:hover {
        border: 2px solid transparent;
      }
      &:not(:disabled):not(.disabled):active, 
      &:not(:disabled):not(.disabled).active {
        background: var(--light-200);
        border: 2px solid var(--primary-700);
      }
      > .theme-preview {
        width: 100%;
        height: 140px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background: url(${t}) no-repeat center;
        background-size: cover;
        .theme-preview--inner {
          font-size: small;
          text-align: center;
          line-height: 1;
          > img {
            width: 100%;
          }
          label {
            margin-bottom: 0;
            line-height: 1.25;
            font-size: 1.25rem;
            font-family: ${null!==(a=null==o?void 0:o.fontFamily)&&void 0!==a?a:"inherit"};
            font-weight: ${null!==(n=null==o?void 0:o.fontWeight)&&void 0!==n?n:"inherit"};
            color: ${null!==(l=null==o?void 0:o.color)&&void 0!==l?l:"inherit"};
          }
        }
        > label {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          max-width: 100%;
          margin-top: .5rem;
          margin-bottom: 1rem;
        }
      }
    }
    > label {
      margin-bottom: 0;
      margin-top: 0.25rem;
    }
    + .theme-card {
      margin-left: 1rem;
    }
    &.active {
      position: relative;
      .check-ribbon {
        position: absolute;
        padding: .25rem;
        background: var(--primary-700);
        inline-size: inherit;
        line-height: 1;
        z-index: 1;
        right: 0px;
        top: 0px;
        color: var(--white);
      }
    }
  `}),[o,t]))(`../${r.uri}thumbnail.png`,p),h=(0,e.classNames)("theme-selector-card",n,{active:m});return(0,e.jsx)("div",{className:h,css:u},m&&(0,e.jsx)("span",{className:"check-ribbon"},(0,e.jsx)(c,null)),(0,e.jsx)(l.Button,{className:"p-0",onClick:()=>{null==i||i(r.uri)},active:m},(0,e.jsx)("div",{className:"theme-preview",title:d},(0,e.jsx)("div",{className:"theme-preview--inner text-break"},(0,e.jsx)(l.Label,{className:"mx-3"},d)))))},p={chooseTheme:"Theme",customTheme:"Customize",resetTheme:"Reset",backToMainThemePanel:"Back",customPaletteTitle:"Customize palette colors",customFontsetTitle:"Customize font set",customAppElementsTitle:"App elements"},u=o.styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .themes-pane {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
    flex: 1 1 0%;
    > .themes-selectors {
      display: flex;
      flex-direction: column;
      > .theme-selector-card + .theme-selector-card {
        margin-top: 1rem;
      }
    }
  }
  > .btn-container {
    display: flex;
    > button {
      font-size: 1rem;
    }
  }
`,h=t=>{const{className:o,themeListInfo:a,disabled:n,selectedTheme:r,onChange:s,onCustomize:c}=t,i=(0,e.classNames)("theme-selector",o),m=l.hooks.useTranslate(p,l.defaultMessages);return e.React.createElement(u,{className:i},e.React.createElement(l.PanelHeader,{className:"px-3 pt-3",title:m("chooseTheme"),showClose:!1}),a&&e.React.createElement("div",{className:"themes-pane px-3 mt-3"},e.React.createElement("div",{className:"themes-selectors"},a.map((t=>e.React.createElement(d,{key:t.name,selectedTheme:r,themeInfo:t,onSelect:s}))))),a&&e.React.createElement("div",{className:"btn-container w-100 p-3"},e.React.createElement(l.Button,{type:"primary",className:"flex-fill theme-setting--customize-btn text-truncate",onClick:c,disabled:n},m("customTheme"))),!a&&e.React.createElement("div",{className:"loading"},m("loading")))};var f=i(7756),g=i(9216),v=i.n(g);const b=t=>{const o=window.SVG,{className:a}=t,n=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o}(t,["className"]),l=(0,e.classNames)("jimu-icon jimu-icon-component",a);return o?e.React.createElement(o,Object.assign({className:l,src:v()},n)):e.React.createElement("svg",Object.assign({className:l},n))};var y=i(1362);const w=(0,o.styled)(y.ColorPicker)`
  width: 3rem;
  height: 3rem;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.15);
  transition: box-shadow 0.15s ease-out;
  border-radius: 100%;
  outline: 0;
  color: white;
  &:hover {
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.5);
  }
`,x=t=>{const{className:o}=t,a=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o}(t,["className"]),n=(0,e.classNames)(o,"primary-color-picker");return e.React.createElement(w,Object.assign({className:n,icon:e.React.createElement(b,null),type:"icon-only"},a))},R=t=>{const{className:o,label:a,value:n,onChange:l}=t,r=(0,e.classNames)("single-color-configurator",o,"d-flex flex-column");return e.React.createElement("div",{className:r},e.React.createElement("div",{className:"jumbo-color-picker"},e.React.createElement(x,{className:"mx-auto mb-2",color:n,onChange:l})),e.React.createElement("label",null,a))};var E=i(5505);const N=o.styled.div((({theme:e})=>{var t,o,a,n,l,r,s;return`\n    position: relative;\n    padding-bottom: 1.5rem;\n    > i {\n      font-style: normal;\n      min-width: 1.25rem;\n      text-align: center;\n    }\n    .slider-rules {\n      position: absolute;\n      bottom: 0;\n      left: 2.25rem;\n      right: 2.25rem;\n      font-size: ${null===(o=null===(t=null==e?void 0:e.typography)||void 0===t?void 0:t.sizes)||void 0===o?void 0:o.body2};\n      color: ${null===(n=null===(a=null==e?void 0:e.colors)||void 0===a?void 0:a.palette)||void 0===n?void 0:n.dark[400]};\n      > span {\n        display: inline-block;\n        transform: translateX(-50%);\n        position: absolute;\n        bottom: 0;\n        &.active {\n          color: ${null===(l=null==e?void 0:e.body)||void 0===l?void 0:l.color};\n          font-size: ${null===(s=null===(r=null==e?void 0:e.typography)||void 0===r?void 0:r.sizes)||void 0===s?void 0:s.body1};\n          margin-bottom: -1px;\n        }\n      }\n    }\n  `}));class C extends e.React.PureComponent{constructor(){super(...arguments),this.onFontSizeChange=e=>{const t=e.currentTarget.value,o=this.props.options[t-1];this.props&&this.props.onChange&&this.props.onChange(o)}}render(){const{fontSize:t,options:o,className:a}=this.props,n=(0,e.classNames)("setting--fontsize-selector",a,"d-flex align-items-center"),r=null===window||void 0===window?void 0:window._appState.appContext.isRTL,s=o?o.length:1,c=o.length>1?100/(o.length-1):0;let i=1;return o&&o.some(((e,o)=>e===t&&(i=o+1,!0))),e.React.createElement(N,{className:n},(null==o?void 0:o.length)>0?e.React.createElement(e.React.Fragment,null,e.React.createElement("i",{style:{fontSize:"12px"}},"A"),e.React.createElement(l.Slider,{min:1,max:s,value:i,className:"mx-3",onChange:this.onFontSizeChange}),e.React.createElement("div",{className:"slider-rules"},o.map(((t,o)=>e.React.createElement("span",{key:o,className:i===o+1?"active":void 0,style:{[r?"right":"left"]:o*c+"%"}},e.utils.formatPercentageNumber(t))))),e.React.createElement("i",{style:{fontSize:"18px"}},"A")):null)}}C.defaultProps={options:["87.5%","100%","125%"]};const k=["75%","87.5%","100%","125%"];class j extends e.React.PureComponent{constructor(){super(...arguments),this.onFontChange=e=>{this.props.onChange({typography:{fontFamilyBase:e}})},this.onFontSizeChange=e=>{this.props.onChange({typography:{fontSizeRoot:e}})},this.i18n=e=>{const t=this.props.intl;return t?t.formatMessage({id:e,defaultMessage:l.defaultMessages[e]}):e}}render(){var t,o;const{className:a,themeVariables:n}=this.props,l=(0,e.classNames)("jimu-builder-theme-fontset-configurator",a,"w-100");let r=null===(t=null==n?void 0:n.typography)||void 0===t?void 0:t.fontFamilyBase;return"string"==typeof r&&(r=r.split(",")[0].replace(/['"]+/g,"")),e.React.createElement("div",{className:l},e.React.createElement(f.SettingRow,null,e.React.createElement(E.FontFamilySelector,{font:r,onChange:e=>this.onFontChange(e)})),e.React.createElement(f.SettingRow,null,e.React.createElement(C,{className:"w-100",fontSize:null===(o=null==n?void 0:n.typography)||void 0===o?void 0:o.fontSizeRoot,options:k,onChange:e=>this.onFontSizeChange(e)})))}}const O=(0,e.injectIntl)(j);var T=i(3273),S=i.n(T);const P=t=>{const o=window.SVG,{className:a}=t,n=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o}(t,["className"]),l=(0,e.classNames)("jimu-icon jimu-icon-component",a);return o?e.React.createElement(o,Object.assign({className:l,src:S()},n)):e.React.createElement("svg",Object.assign({className:l},n))};var I=i(3869),A=i.n(I);const M=t=>{const o=window.SVG,{className:a}=t,n=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o}(t,["className"]),l=(0,e.classNames)("jimu-icon jimu-icon-component",a);return o?e.React.createElement(o,Object.assign({className:l,src:A()},n)):e.React.createElement("svg",Object.assign({className:l},n))},z=o.styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .theme-quick-style {
    height: 100%;
    flex: 1 1 0%;
    overflow: auto;
  }
  .back-main-btn {
    font-size: 1rem;
    font-weight: 500;
    > svg {
      position: relative;
      top: -2px;
    }
  }
`,B=t=>{var o;const{className:a,theme:n,onChange:r,onReset:s,onBack:c,onAdvance:i}=t,m=l.hooks.useTranslate(p,l.defaultMessages),d=(0,e.classNames)("jimu-builder-theme-quickstyler",a);return e.React.createElement(z,{className:d},e.React.createElement("div",{className:"jimu-widget-setting--header px-1 pb-0"},e.React.createElement(l.Button,{className:"back-main-btn",type:"tertiary",onClick:c},e.React.createElement(M,{className:"mr-1",autoFlip:!0}),m("backToMainThemePanel"))),n&&e.React.createElement(e.React.Fragment,null,e.React.createElement("div",{className:"theme-quick-style"},e.React.createElement(f.SettingSection,{title:m("themeSettingThemeColors")},e.React.createElement(f.SettingRow,{flow:"wrap"},e.React.createElement(R,{label:m("variableColorPrimary"),value:null===(o=null==n?void 0:n.colors)||void 0===o?void 0:o.primary,className:"m-auto",onChange:e=>((e,t)=>{null==r||r({colors:{primary:t}})})(0,e)})),e.React.createElement(f.SettingRow,null,e.React.createElement(l.Button,{type:"tertiary",className:"w-100 p-0 d-flex justify-content-between align-items-center",onClick:i},m("themeSettingThemeColorAdvanced"),e.React.createElement(P,{className:"m-0",autoFlip:!0})))),e.React.createElement(f.SettingSection,{title:m("themeSettingThemeFont")},e.React.createElement(f.SettingRow,null,e.React.createElement(O,{themeVariables:n,onChange:r})))),e.React.createElement(f.SettingSection,{className:"d-flex"},e.React.createElement(l.Button,{className:"flex-fill",type:"secondary",onClick:s},m("resetTheme")))))};var F=i(9788),$=i.n(F);const D=t=>{const o=window.SVG,{className:a}=t,n=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o}(t,["className"]),l=(0,e.classNames)("jimu-icon jimu-icon-component",a);return o?e.React.createElement(o,Object.assign({className:l,src:$()},n)):e.React.createElement("svg",Object.assign({className:l},n))},L=o.styled.div((({color:e})=>`\n    width: 2rem;\n    height: 1.25rem;\n    background: ${e};\n    margin-left: -1px;\n  `)),K=t=>{const{colors:o,hideAlertColors:a,darkTheme:n}=t,l=e.React.useMemo((()=>{const t=[];let l,r;return Object.keys(e.ThemeThemeColorKeys).forEach(((n,s)=>{const c=Object.keys(e.ThemeThemeAlertColorKeys);a&&c.includes(n)||("Dark"===n?l=s:"Light"===n&&(r=s),t.push(e.React.createElement(L,{key:n,className:"color-palette-block border border-light-800",color:o[e.ThemeThemeColorKeys[n]]})))})),n&&l>-1&&r>-1&&([t[l],t[r]]=[t[r],t[l]]),t}),[o,n,a]);return e.React.createElement(e.React.Fragment,null,o?e.React.createElement("div",{className:"color-palette d-flex flex-fill"},l):e.React.createElement("span",null,"---"))};class _ extends e.React.PureComponent{constructor(t){super(t),this._optionsToKeep=(0,e.Immutable)([]),this.getColorPaletteOptions=t=>{const o=[];let a=!1;const n=this.props.isDarkTheme;if(n&&(t=t.merge({light:t.dark,dark:t.light})),this._optionsToKeep.concat(Z).forEach(((r,s)=>{const c=t.merge(r);let i=!1;a||(a=this.arePalettesEqual(t,c),a&&(i=!0)),o.push(e.React.createElement(l.DropdownItem,{className:"py-2",onClick:()=>this.onPaletteClick(c),key:s+1,active:i},e.React.createElement(K,{colors:c,hideAlertColors:!1,darkTheme:n})))})),!a){const a=e.React.createElement(l.DropdownItem,{className:"py-2",onClick:()=>this.onPaletteClick(t),key:0,active:!0},e.React.createElement(K,{colors:t,hideAlertColors:!1,darkTheme:n}));o.splice(0,0,a),this._optionsToKeep=(0,e.Immutable)([t])}return o},this.i18n=e=>{const t=this.props.intl;return t?t.formatMessage({id:e,defaultMessage:l.defaultMessages[e]}):e},this.state={menuOpened:!1}}onPaletteClick(e){this.props&&this.props.onChange&&this.props.onChange(e)}arePalettesEqual(e,t){return!(!e||!t)&&!Object.keys(e).some((o=>e[o].toLowerCase()!==t[o].toLowerCase()))}render(){const{colors:t,className:o,style:a}=this.props,n=(0,e.classNames)("setting--palette-selector",o);return e.React.createElement(l.Dropdown,{style:a,direction:"right",isOpen:this.state.menuOpened,toggle:e=>this.setState({menuOpened:!this.state.menuOpened}),className:n,activeIcon:!0,menuItemCheckMode:"singleCheck"},e.React.createElement(l.DropdownButton,{type:"tertiary",className:"p-0",arrow:e.React.createElement(D,null)}),e.React.createElement(l.DropdownMenu,null,this.getColorPaletteOptions(t)))}}const Z=(0,e.Immutable)([{primary:"#0a77c6",secondary:"#ecf1f8",info:"#4aa0e2",success:"#7ed321",warning:"#f8e71c",danger:"#f6143a",light:"#f8f8f8",dark:"#080808"},{primary:"#ff7121",secondary:"#2d1754",info:"#09acf8",success:"#00cca5",warning:"#ffab21",danger:"#f6146f",light:"#fff",dark:"#333"},{primary:"#21cfca",secondary:"#242933",info:"#00b7ff",success:"#07ea58",warning:"#f8e71c",danger:"#d0021b",light:"#fff",dark:"#000"},{primary:"#f74d61",secondary:"#153054",info:"#00b7ff",success:"#07ea58",warning:"#f8e71c",danger:"#ff001f",light:"#fff",dark:"#111"},{primary:"#4ccded",secondary:"#1b476d",info:"#00b7ff",success:"#07ea58",warning:"#f8e71c",danger:"#d0021b",light:"#fff",dark:"#111"},{primary:"#442b57",secondary:"#ffd11c",info:"#09acf8",success:"#00cca5",warning:"#ffab21",danger:"#f6146f",light:"#fff",dark:"#2d3235"}]),U=(0,e.injectIntl)(_),V=o.styled.div`
  display: flex;
  justify-content: space-between;
  .color-picker-block {
    width: auto;
    height: auto;
    padding: 0;
  }
  .theme-color-configurator--shades {
    width: 1.25rem;
    border: 1px solid var(--light-500);
    > span {
      display: block;
      width: 100%;
      height: 1.25rem;
      background: currentColor;
      &.main-color-shade {
        &::after {
          content: ' ';
          display: block;
          width: 0;
          height: 0;
          border: 4px solid transparent;
          border-left-color: var(--dark-500);
          position: relative;
          left: -5px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
`,H=t=>{const{colors:o,onChange:a}=t,n=null==o?void 0:o.palette,r=e.React.useMemo((()=>{let t=(0,e.Immutable)({});return Object.keys(e.ThemeThemeColorKeys).forEach((a=>{t=t.set(e.ThemeThemeColorKeys[a],o[e.ThemeThemeColorKeys[a]])})),t}),[o]),s=l.hooks.useTranslate();return e.React.createElement(V,null,Object.keys(r).map((t=>{const o=s(`variableColor${t.charAt(0).toUpperCase()+t.slice(1)}`),c="light"===t?"100":"dark"===t?"900":"500";return e.React.createElement("div",{className:"theme-color-configurator--column",key:t},e.React.createElement(l.Tooltip,{showArrow:!0,placement:"top",title:"string"==typeof t&&s(`variableColor${t.charAt(0).toUpperCase()+t.slice(1)}`)},e.React.createElement(y.ColorPicker,{style:{color:r[t]},className:"mr-2 mb-4 rounded-pill",id:`colorConfigurator_colorPicker_${t}`,color:r[t],onChange:e=>a(t,e)},e.React.createElement("span",null))),e.React.createElement("div",{className:"theme-color-configurator--shades"},n&&Object.keys(n[t]).map((a=>e.React.createElement("span",{title:`${o}-${a}${a===c?` (${o})`:""}: ${n[t][a]}`,className:a===c?"main-color-shade":void 0,key:`${t}-${a}`,style:{color:n[t][a]}})))))})))},q=o.styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  .back-main-btn {
    font-size: 1rem;
    font-weight: 500;
    > svg {
      position: relative;
      top: -2px;
    }
  }
  .palette-selector {
    display: flex;
  }
  .setting--palette-selector {
    margin-top: -2px;
  }
  .color-block {
    width: 1.125rem;
    height: 1.125rem;
    justify-content: center;
    display: flex;
    border: 0;
    position: relative;
    box-shadow: 0 0 0 2px rgba(255,255,255, 0.15);
    transition: box-shadow .15s ease-out;
    border-radius: 100%;
    outline: 0;
    &::after {
      content: ' ';
      display: block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-top-color: currentColor;
      border-bottom-width: 0;
      top: 1.5rem;
      position: relative;
    }
    &:hover {
      box-shadow: 0 0 0 4px rgba(255,255,255,.5);
    }
    > .color-presenter {
      border: 0;
      border-radius: 100%;
      margin: -1px;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
`,G=t=>{const{className:o,theme:a,onChange:n,onBack:r,onReset:s}=t,c=l.hooks.useTranslate(p,l.defaultMessages),i=e.React.useMemo((()=>{let t=(0,e.Immutable)({});return Object.keys(e.ThemeThemeColorKeys).forEach((o=>{t=t.set(e.ThemeThemeColorKeys[o],null==a?void 0:a.colors[e.ThemeThemeColorKeys[o]])})),t}),[null==a?void 0:a.colors]),m=(0,e.classNames)("theme-color-configurator",o);return e.React.createElement(q,{className:m},e.React.createElement("div",{className:"jimu-widget-setting--header px-1 pb-0"},e.React.createElement(l.Button,{className:"back-main-btn",type:"tertiary",onClick:r},e.React.createElement(M,{className:"mr-1",autoFlip:!0}),c("backToMainThemePanel"))),e.React.createElement(f.SettingSection,{title:c("themeSettingThemeColors"),className:"widget-builder-themes--pane flex-fill"},e.React.createElement("p",{className:"text-dark-400 text-break"},c("themeSettingThemeColorsDescription")),e.React.createElement("div",{className:"palette-selector"},e.React.createElement(H,{colors:null==a?void 0:a.colors,onChange:(e,t)=>{null==n||n({colors:{[e]:t}})}}),e.React.createElement(U,{className:"d-block",colors:i,isDarkTheme:a.darkTheme,onChange:e=>{null==n||n({colors:e})}}))),e.React.createElement(f.SettingSection,{className:"d-flex"},e.React.createElement(l.Button,{className:"flex-fill",type:"secondary",onClick:s},c("resetTheme"))))};const W=()=>{const a=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig})),l=(0,o.useTheme2)(),[r,s]=e.React.useState(1),[c,i]=e.React.useState(null),m=(null==a?void 0:a.theme)&&l;e.React.useEffect((()=>{var t,o,a,n;(t=void 0,o=void 0,a=void 0,n=function*(){const t=yield fetch(`${e.urlUtils.getAbsoluteRootUrl()}themes/themes-info.json`);return yield Promise.resolve((0,e.Immutable)(yield t.json()))},new(a||(a=Promise))((function(e,l){function r(e){try{c(n.next(e))}catch(e){l(e)}}function s(e){try{c(n.throw(e))}catch(e){l(e)}}function c(t){var o;t.done?e(t.value):(o=t.value,o instanceof a?o:new a((function(e){e(o)}))).then(r,s)}c((n=n.apply(t,o||[])).next())}))).then((e=>{i(e)}))}),[]);const d=o=>{var n;if(!o)return;let l=null!==(n=a.customTheme)&&void 0!==n?n:(0,e.Immutable)({});l=l.merge(o,{deep:!0}),(0,t.getAppConfigAction)(a).editCustomTheme(l).exec()},p=()=>{(0,t.getAppConfigAction)(a).editCustomTheme((0,e.Immutable)({})).exec()};return e.React.createElement("div",{className:"jimu-widget widget-builder-themes d-flex flex-column bg-light-300 w-100 h-100"},m&&e.React.createElement(e.React.Fragment,null,e.React.createElement(n,{active:1===r},e.React.createElement(h,{themeListInfo:c,selectedTheme:null==a?void 0:a.theme,onChange:o=>{if(!o)return;const n=(0,e.Immutable)({});(0,t.getAppConfigAction)(a).editTheme(o).editCustomTheme(n).exec()},disabled:(null==a?void 0:a.theme)===e.CONSTANTS.SHARED_THEME,onCustomize:()=>s(2)})),e.React.createElement(n,{active:2===r},e.React.createElement(B,{theme:l,onChange:d,onReset:p,onBack:()=>s(1),onAdvance:()=>s(3)})),e.React.createElement(n,{active:3===r},e.React.createElement(G,{theme:l,onChange:d,onReset:p,onBack:()=>s(2)}))))}})(),m})())}}}));