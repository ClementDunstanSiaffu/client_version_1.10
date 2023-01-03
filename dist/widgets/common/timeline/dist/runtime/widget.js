System.register(["jimu-core","jimu-arcgis","jimu-ui","jimu-core/dnd","jimu-theme"],(function(e,t){var n={},a={},l={},i={},o={};return{setters:[function(e){n.AllDataSourceTypes=e.AllDataSourceTypes,n.AppMode=e.AppMode,n.DataSourceManager=e.DataSourceManager,n.DataSourceStatus=e.DataSourceStatus,n.DataSourceTypes=e.DataSourceTypes,n.Immutable=e.Immutable,n.MultipleDataSourceComponent=e.MultipleDataSourceComponent,n.React=e.React,n.ReactRedux=e.ReactRedux,n.ReactResizeDetector=e.ReactResizeDetector,n.classNames=e.classNames,n.css=e.css,n.dataSourceUtils=e.dataSourceUtils,n.dateUtils=e.dateUtils,n.defaultMessages=e.defaultMessages,n.getAppStore=e.getAppStore,n.jsx=e.jsx,n.lodash=e.lodash,n.polished=e.polished,n.useIntl=e.useIntl},function(e){a.ArcGISDataSourceTypes=e.ArcGISDataSourceTypes,a.MapViewManager=e.MapViewManager,a.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules},function(e){l.Alert=e.Alert,l.Button=e.Button,l.Dropdown=e.Dropdown,l.DropdownButton=e.DropdownButton,l.DropdownItem=e.DropdownItem,l.DropdownMenu=e.DropdownMenu,l.Icon=e.Icon,l.Label=e.Label,l.Popper=e.Popper,l.Switch=e.Switch,l.Tooltip=e.Tooltip,l.WidgetPlaceholder=e.WidgetPlaceholder,l.defaultMessages=e.defaultMessages,l.hooks=e.hooks},function(e){i.interact=e.interact},function(e){o.getThemeColorValue=e.getThemeColorValue}],execute:function(){e((()=>{var e={43269:e=>{e.exports='<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m9 6.809 3.276 1.638.448-.894L10 6.19V3H9v3.809Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.293 11.943A5.501 5.501 0 0 0 9.5 1a5.5 5.5 0 0 0-.792 10.943L9.5 13l.793-1.057ZM14 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM12 16.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="#000"></path><path d="M6 16H0v1h6v-1ZM13 16h6v1h-6v-1Z" fill="#000"></path></svg>'},43980:e=>{e.exports='<svg viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.322.03A.504.504 0 0 1 .96.305L4 8 .96 15.694a.504.504 0 0 1-.638.276.464.464 0 0 1-.29-.606L2.94 8 .031.636A.464.464 0 0 1 .322.03Z" fill="#282828"></path></svg>'},74695:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 3c1.175 0 2.27.337 3.195.92l.9-.598A7 7 0 0 0 2.5 13.33h10.999A6.97 6.97 0 0 0 15 9a6.968 6.968 0 0 0-1.256-4.002l-.603.906C13.686 6.808 14 7.867 14 9a5.968 5.968 0 0 1-1.008 3.33H3.008A6 6 0 0 1 8 3Zm-.183 6.9a1.322 1.322 0 0 1-.43-2.159L13 4 9.258 9.612a1.322 1.322 0 0 1-1.441.287Z" fill="#000"></path></svg>'},59455:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Zm1 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8Z" fill="#000"></path></svg>'},83909:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 2.22V1l1 .7 8.128 5.69L12 8l-.872.61L3 14.3 2 15V2.22ZM10.256 8 3 13.08V2.92L10.256 8ZM14 1h-1v14h1V1Z" fill="#000"></path></svg>'},57986:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 1H4v14h1V1Zm7 0h-1v14h1V1Z" fill="#000"></path></svg>'},56097:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m2 1 12 7-12 7V1Zm9.983 6.999L3 2.723v10.553l8.983-5.277Z" fill="#000"></path></svg>'},80272:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Zm1 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM7.5 4.5a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3Z" fill="#000"></path></svg>'},10148:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 2.22V1l-1 .7-8.128 5.69L4 8l.872.61L13 14.3l1 .7V2.22ZM5.744 8 13 13.08V2.92L5.744 8ZM2 1h1v14H2V1Z" fill="#000"></path></svg>'},88866:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z" fill="#000"></path></svg>'},26826:e=>{"use strict";e.exports=a},48891:e=>{"use strict";e.exports=n},54020:e=>{"use strict";e.exports=i},34796:e=>{"use strict";e.exports=o},30726:e=>{"use strict";e.exports=l}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,s),l.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var r={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(r),s.d(r,{default:()=>ue});var e,t,n,a=s(48891),l=s(26826),i=s(30726);!function(e){e.Classic="CLASSIC",e.Modern="MODERN"}(e||(e={})),function(e){e.Slowest="SLOWEST",e.Slow="SLOW",e.Medium="MEDIUM",e.Fast="FAST",e.Fastest="FASTEST"}(t||(t={})),function(e){e.current="CURRENT",e.cumulatively="CUMULATIVE"}(n||(n={}));const o=["year","month","day"],c=["hour","minute"],u="d/M/y",d="h:mm:ss a";var m;!function(e){e[e.year=31536e3]="year",e[e.month=2592e3]="month",e[e.day=86400]="day",e[e.hour=3600]="hour",e[e.minute=60]="minute",e[e.second=1]="second"}(m||(m={}));const p={slowest:5e3,slow:4e3,medium:3e3,fast:2e3,fastest:1e3};function h(e,t=!0){let n=null;if(e)if("number"==typeof e.value)n=e.value;else{const l=new Date;l.setMinutes(0),l.setSeconds(0),l.setMilliseconds(0),e.value===a.dateUtils.VirtualDateType.Today?(l.setHours(0),n=l.getTime()+g(e),n=t?n:n+1e3*m.day):e.value===a.dateUtils.VirtualDateType.Now&&(n=l.getTime()+g(e),n=t?n:n+1e3*m.hour)}return n}function g(e){return e.offset?e.offset.val*m[e.offset.unit]*1e3:0}function f(e,t){let n=null;const i=Object.keys(e).map((t=>e[t]))[0];if(i.type===l.ArcGISDataSourceTypes.WebMap){const e=[];i.getAllChildDataSources().forEach((t=>{(t.type===a.DataSourceTypes.MapService&&t.supportTime()||t.type===a.DataSourceTypes.FeatureLayer&&null===a.dataSourceUtils.findMapServiceDataSource(t)&&t.supportTime())&&e.push(t)}));const l=(null==t?void 0:t.map((e=>e.dataSourceId)))||[];n={},e.forEach((e=>{(0===l.length||l.includes(e.id))&&(n[e.id]=e)}))}return n}function v(e,t){const n=[...o,...c],a=[],l=t-e;return n.forEach((e=>{l>=1e3*m[e]&&a.push(e)})),a}var y;function b(e,t,n){let a=!1;const l=n.day.value;if(1!==l){const n=e.getMonth()+1;2===l?(2===n&&28===t||30===t)&&(a=!0):7===l?(2===n&&21===t||28===t)&&(a=!0):10===l?20===t&&(a=!0):15===l&&15===t&&(a=!0)}return a}function w(e,t,n,a,l){if(e){const i=a[a.length-1];if(!i)return!0;const o=D(i.label),s=D(t);o/(1===a.length?1:2)+s/2>(n-parseFloat(i.position)/100)*l&&(e=!1)}return e}function x(e,t,n=!1){let a="";return e.day?a=t.getFullYear():e.month?(a=t.getFullYear(),n&&(a+="/"+(t.getMonth()+1))):a=t.getFullYear(),a}function M(e,t){const n=t.getMonth()+1;let a="";return!e.day||e.hour&&1===e.hour.value?1!==n&&(a=n):a=n+"/"+t.getDate(),a}function S(e,t){let n=e.getDate();const a=e.getMonth()+1;return t.hour&&(n=a+"/"+n),n}function j(e,t){return e.getHours()+":00"}function k(e,t){let n=e.getMinutes();return t.second&&(n=e.getHours()+":"+n),n}!function(e){e[e.year=1]="year",e[e.month=2]="month",e[e.day=3]="day",e[e.hour=4]="hour",e[e.minute=5]="minute",e[e.second=6]="second"}(y||(y={}));const T={};function D(e,t,n){const a=window;if(void 0===a.measureCanvasCTX){const e=document.createElement("canvas");a.measureCanvasCTX=e.getContext("2d")}if(T[e])return T[e];const l=a.measureCanvasCTX.measureText(e).width+10;return T[e]=l,l}function O(e,t,n){switch(e){case"year":t.setFullYear(t.getFullYear()+n);break;case"month":t.setMonth(t.getMonth()+n);break;case"day":t.setDate(t.getDate()+n);break;case"hour":t.setHours(t.getHours()+n);break;case"minute":t.setMinutes(t.getMinutes()+n)}return t.getTime()}function R(e,t,n,a,l,i=!0){let o;const s=i?1:-1;if(l)o=n+1/l*(t-e)*s,o=Math.round(o),Math.abs(o-e)<1e4?o=e:Math.abs(o-t)<1e4&&(o=t);else{const e=new Date(n),t=a.val*s;switch(null==a?void 0:a.unit){case"year":e.setFullYear(e.getFullYear()+t);break;case"month":e.setMonth(e.getMonth()+t);break;case"day":e.setDate(e.getDate()+t);break;case"hour":e.setHours(e.getHours()+t);break;case"minute":e.setMinutes(e.getMinutes()+t)}o=e.getTime()}return o}function C(e,t,n,a){let l=!1;const i=1/a/2*100;return n>=e-i&&n<=t+i&&(l=!0),l}function E(e,t,n){return(null==n?void 0:n.zoomLevel)===t&&0!==t?n.maxWidth/e:Math.pow(2,t)}function N(e,t,n){return e*E(e,t,n)}var L=s(54020);const I={_widgetLabel:"Timeline",overallTimeExtent:"Overall time extent",filteringApplied:"Timeline filtering applied",noTlFromHonoredMapWarning:"Oops! Seems like something went wrong with this map and we cannot get any valid time settings.",invalidTimeSpanWarning:"Please check the widget configurations to make sure the time span is valid."};var P=s(80272),A=s.n(P);const V=e=>{const t=window.SVG,{className:n}=e,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n}(e,["className"]),i=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:i,src:A()},l)):a.React.createElement("svg",Object.assign({className:i},l))};var W=s(59455),z=s.n(W);const F=e=>{const t=window.SVG,{className:n}=e,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n}(e,["className"]),i=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:i,src:z()},l)):a.React.createElement("svg",Object.assign({className:i},l))};var $=s(88866),U=s.n($);const Z=e=>{const t=window.SVG,{className:n}=e,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n}(e,["className"]),i=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:i,src:U()},l)):a.React.createElement("svg",Object.assign({className:i},l))};var B=s(56097),H=s.n(B);const Y=e=>{const t=window.SVG,{className:n}=e,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n}(e,["className"]),i=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:i,src:H()},l)):a.React.createElement("svg",Object.assign({className:i},l))};var G=s(57986),_=s.n(G);const X=e=>{const t=window.SVG,{className:n}=e,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n}(e,["className"]),i=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:i,src:_()},l)):a.React.createElement("svg",Object.assign({className:i},l))};var J=s(10148),Q=s.n(J);const q=e=>{const t=window.SVG,{className:n}=e,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n}(e,["className"]),i=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:i,src:Q()},l)):a.React.createElement("svg",Object.assign({className:i},l))};var K=s(83909),ee=s.n(K);const te=e=>{const t=window.SVG,{className:n}=e,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n}(e,["className"]),i=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:i,src:ee()},l)):a.React.createElement("svg",Object.assign({className:i},l))};var ne=s(74695),ae=s.n(ne);const le=e=>{const t=window.SVG,{className:n}=e,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n}(e,["className"]),i=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:i,src:ae()},l)):a.React.createElement("svg",Object.assign({className:i},l))};var ie=s(34796);const oe=s(43980),se=Object.assign({},I,a.defaultMessages,i.defaultMessages),re=function(n){const{width:l,height:o,applied:s,timeStyle:r=e.Classic,foregroundColor:c,backgroundColor:h,sliderColor:g,theme:f,startTime:v,endTime:T,accuracy:D="year",stepLength:I,dividedCount:P,cumulatively:A=!1,enablePlayControl:W=!1,speed:z=t.Medium,autoPlay:$,updating:U=!1,onTimeChanged:B,onApplyStateChanged:H}=n,[G,_]=a.React.useState(l),[J,Q]=a.React.useState(o);a.React.useEffect((()=>{_(l-(r===e.Classic?64:80)),Q(r===e.Classic?52:80)}),[l,o,r]);const[K,ee]=a.React.useState(0),[ne,ae]=a.React.useState(null),re=(0,a.useIntl)(),ce=(()=>{const e=(0,a.useIntl)();return a.React.useCallback(((t,n)=>e.formatMessage({id:t,defaultMessage:se[t]},n)),[e])})(),ue=a.React.useMemo((()=>[{value:t.Slowest,label:ce("slowest")},{value:t.Slow,label:ce("slow")},{value:t.Medium,label:ce("medium")},{value:t.Fast,label:ce("fast")},{value:t.Fastest,label:ce("fastest")}]),[]),[de,me]=a.React.useState(z);a.React.useEffect((()=>{me(z)}),[z]);const[pe,he]=a.React.useState($||!1),ge=a.React.useRef(null),fe=a.React.useRef(null),[ve,ye]=a.React.useState(null),[be,we]=a.React.useState(0),[xe,Me]=a.React.useState(v),[Se,je]=a.React.useState(null),[ke,Te]=a.React.useState(null),[De,Oe]=a.React.useState(null),[Re,Ce]=a.React.useState(null),[Ee,Ne]=a.React.useState(null),[Le,Ie]=a.React.useState(null),Pe=a.React.useRef(null),Ae=a.React.useRef(null),Ve=a.React.useRef(null),We=a.React.useRef(null),ze=a.React.useRef(null),[Fe,$e]=a.React.useState(!1);a.React.useEffect((()=>(ge.current.addEventListener("mousedown",_e),()=>{var e;null===(e=ge.current)||void 0===e||e.removeEventListener("mousedown",_e),null==Ee||Ee.unset(),null==Le||Le.unset()})),[]),a.React.useEffect((()=>{Pe.current&&(Ne(function(e,t,n,a,l){let i,o,s,r,c,u,d,p;return e(t).resizable({edges:{left:".resize-left",right:".resize-right"}}).on("resizestart",(e=>{e.stopPropagation(),s=n(),c=s.startValue,u=s.endValue,d=s.startValue,p=s.endValue,r=u-c,i=0;const a=t.getBoundingClientRect();o=a.width,t.style.minWidth="0px"})).on("resizemove",(e=>{const{extent:t}=s;e.stopPropagation();const n=e.deltaRect;i+=n.width;const l=r&&o+i,h=function(e,t,n,a,l,i){let o=e,s=t;const r=(n[1]-n[0])/a*l;return i.edges.left?o=e-r:s=t+r,{newStart:o,newEnd:s}}(d,p,t,l,i,e),g=function(e,t,n,a,l,i,o){const{width:s,extent:r,stepLength:c,accuracy:u,dividedCount:d}=n;let p=a,h=l;if(c){const n=Math.round((r[1]-r[0])*t/s/m[u]/1e3);e.edges.left?p=O(u,new Date(o),-n):h=O(u,new Date(i),n)}else{const n=(r[1]-r[0])/d,a=Math.round((r[1]-r[0])*t/s/n);e.edges.left?p=o-a*n:h=i+a*n}return e.edges.left?(p=Math.min(p,h),p=Math.max(r[0],p),p=Math.min(r[1],p)):(h=Math.max(p,h),h=Math.min(r[1],h),h=Math.max(r[0],h)),{newStart:p,newEnd:h}}(e,l||i,s,c,u,h.newStart,h.newEnd);a(g.newStart,g.newEnd),d=g.newStart,p=g.newEnd})).on("resizeend",(e=>{e.stopPropagation(),l(d,p)}))}(L.interact,Pe.current,Be,et,tt)),Ie(function(e,t,n,a,l){let i,o,s,r,c,u,d=null;return e(t).draggable({inertia:!1,modifiers:[],autoScroll:!0,onstart:e=>{e.stopPropagation(),e.preventDefault(),o=n(),s=o.startValue,r=o.endValue,c=o.startValue,u=o.endValue,i=0},onmove:e=>{e.stopPropagation(),e.preventDefault();const{extent:t,width:n}=o;i=e.clientX-e.clientX0;const l=function(e,t,n){return(e[1]-e[0])/t*n}(t,n,i),p=function(e,t,n,a,l,i,o){const{extent:s,stepLength:r,dividedCount:c}=t;let u=n,d=a;if(r){const t=Math.round(e/m[r.unit]/r.val/1e3);0!==t&&(u=O(r.unit,new Date(u),t*r.val),d=O(r.unit,new Date(d),t*r.val))}else{const t=(s[1]-s[0])/c,n=Math.round(e/t);0!==n&&(u+=n*t,d+=n*t)}return e>0?d>s[1]?r?u>=s[1]?(u=l,d=i):o=s[1]:(u=s[1]-(a-n),d=s[1]):o=null:(o=null,u<s[0]&&(u=s[0],d=u+(a-n))),{newStart:u,newEnd:d,newTempEnd:o}}(l,o,s,r,c,u,d);a(p.newStart,p.newEnd),c=p.newStart,u=p.newEnd,d=p.newTempEnd},onend:e=>{e.stopPropagation(),l(c,u,d)}})}(L.interact,Pe.current,He,et,tt)))}),[r]),a.React.useEffect((()=>{fe.current={left:0,x:0},$e(!1),we(0),ee(0),he($),Te(null),Me(v);const e=A?v:R(v,T,v,I,P);je(e),U?setTimeout((()=>{B(v,e)}),2e3):B(v,e)}),[$,v,A,T,D,I,P]),a.React.useEffect((()=>{const e=function(e){const{width:t,startTime:n,endTime:a,accuracy:l="hour"}=e,i=y[l],o={year:null,month:null,day:null,hour:null,minute:null,second:null},s=function(e,t,n){const a=n/4;let l,i;const o=(t.getTime()-e.getTime())/31536e6,s=a/o;return s>=1?(l=1,i=4*s):(s>=.2?l=5:s>=.1&&s<.2?l=10:s>=.02&&s<.1?l=50:s<.02&&(l=100),i=n/(o/l)),{value:l,tickWidth:i/n}}(new Date(n),new Date(a),t);if(o.year={value:s.value,tickWidth:s.tickWidth},y.month<=i&&1===s.value){const e=function(e,t){const n=e*t/4;let a=null;return n>=12?a=1:n>=4?a=3:n>=2&&(a=6),{value:a,tickWidth:e/(12/a)}}(s.tickWidth,t);if(null!==e.value&&(o.month={value:e.value,tickWidth:e.tickWidth},y.day<=i&&1===e.value)){const e=function(e,t,n){let a;const l=(t-e)/864e5,i=n/4/l;return a=i>=1?1:i>=.5&&i<1?2:i>=1/7&&i<.5?7:i>=.1&&i<1/7?10:i>=1/15&&i<.1?15:null,{value:a,tickWidth:1/(l/a)}}(n,a,t);if(null!==e.value&&(o.day={value:e.value,tickWidth:e.tickWidth},y.hour<=i&&1===e.value)){const n=function(e,t){const n=e*t/4;let a;return n>=24?a=1:n>=12&&n<24?a=2:n>=4&&n<12?a=6:n>=3&&n<4?a=8:n>=2&&n<3?a=12:n<2&&(a=null),{value:a,tickWidth:e/(24/a)}}(e.tickWidth,t);if(null!==n.value&&(o.hour={value:n.value,tickWidth:n.tickWidth},y.minute<=i&&1===n.value)){const e=function(e,t){const n=e*t/4;let a;return n>=60?a=1:n>=12&&n<60?a=5:n>=6&&n<12?a=10:n>=4&&n<6?a=15:n>=2&&n<4?a=30:n<2&&(a=null),{value:a,tickWidth:e/(60/a)}}(n.tickWidth,t);null!==e.value&&(o.minute={value:e.value,tickWidth:e.tickWidth})}}}}return o}({width:N(G,K,ne),startTime:v,endTime:T,accuracy:D});ye(e)}),[G,v,T,D,K,ne]),a.React.useEffect((()=>{const e=function(e,t,n,a){if(e<0)return;const l=(n-t)/m[a]/1e3,i=Math.max(e,32*l);let o=0;for(;N(e,o)<i||30===o;)o++;return{maxWidth:i,zoomLevel:o}}(G,v,T,D);ae(e)}),[G,v,T,D]);const Ue=a.ReactRedux.useSelector((e=>{var t,n;return pe?(null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.appMode)===a.AppMode.Design||(null===(n=e.appRuntimeInfo)||void 0===n?void 0:n.isPrintPreview):null})),Ze=a.React.useRef(Ue),Be=i.hooks.useEventCallback((()=>({startValue:De||xe,endValue:Re||ke||Se,extent:[v,T],width:N(G,K,ne),accuracy:D,stepLength:I,dividedCount:P}))),He=i.hooks.useEventCallback((()=>({startValue:De||xe,endValue:Re||Se,extent:[v,T],width:N(G,K,ne),accuracy:D,stepLength:I,dividedCount:P}))),Ye=i.hooks.useEventCallback((e=>{a.lodash.debounce((()=>{if(De)return;const t=E(G,K,ne),n=e.clientX-fe.current.x;let a=fe.current.left-n/(t*G)*100;a=Math.min(a/100,(t-1)/t),a=a<0?0:a,we(100*a)}),50)()})),Ge=i.hooks.useEventCallback((()=>{ge.current.style.cursor="grab",ge.current.style.removeProperty("user-select"),document.removeEventListener("mousemove",Ye),document.removeEventListener("mouseup",Ge)})),_e=i.hooks.useEventCallback((e=>{0!==K&&"BUTTON"!==e.target.tagName&&(ge.current.style.cursor="grabbing",ge.current.style.userSelect="none",fe.current={left:be,x:e.clientX},document.addEventListener("mousemove",Ye),document.addEventListener("mouseup",Ge))})),Xe=a.React.useCallback(((e=xe,t=Se,n)=>{if(e<=v)return void we(0);const a=T-v,l=a/E(G,K,ne),i=v+be/100*a,o=i+l;let s;if(n&&(t<=i||e>=o))s=Math.min(e,T-l);else{if(n||!(e>=o||t<=i))return;s=Math.max(v,t-l)}we((s-v)/(T-v)*100)}),[K,v,T,be,xe,Se,G,ne]),Je=a.React.useCallback((e=>{const t=K+(e?1:-1);if(0===t)return void we(0);const n=T-v,a=E(G,K,ne),l=E(G,t,ne),i=n/a,o=v+be/100*n,s=o+i;let r=be;const c=ke||Se;if(c===T&&c===s)r=(l-1)/l*100;else if(xe<o&&c>o&&c<s)r=(c-(c-o)/(l/a)-v)/(T-v)*100;else{const t=xe<o&&Se>s;if(xe>=s||Se<=o&&xe!==Se||t)r=(xe+(Se-xe)/2-i*a/l/2-v)/(T-v)*100;else{const t=(xe-v)/(T-v)*100-be;r=e?be+t/2:be-t}}r=Math.max(0,r),r=Math.min(r,(l-1)/l*100),we(r)}),[K,v,T,be,G,xe,Se,ke,ne]),Qe=a.React.useCallback((e=>{const t=R(v,T,Se,I,P,e);let n=v,a=T;if(A){const n=e&&Se>=T,l=!e&&v===Se;if(e&&t>T)(ke||P)&&e?(a=v,Te(null)):(a=t,Te(T));else{if(l)return;a=n?v:t,Te(null)}}else{const l=R(v,T,xe,I,P,e),i=!e&&v===xe,o=!e&&l<v,s=e&&l>=T;if(l<T&&t>T)(ke||P)&&e?(n=v,a=v+Se-xe,Te(null)):(n=l,a=t,Te(T));else{if(i)return;o||s?(n=v,a=v+Se-xe):(n=l,a=t),Te(null)}Me(n)}je(a),0!==K&&Xe(n,a,e),B(n,a)}),[P,T,Se,v,xe,I,A,B,Xe]),qe=a.React.useCallback((()=>{We.current&&(clearInterval(We.current),We.current=null)}),[]),Ke=a.React.useCallback((()=>{qe(),We.current=setInterval((()=>{U||Qe(!0)}),p[de.toLowerCase()])}),[de,qe,U,Qe]);a.React.useEffect((()=>{if(!We.current){if(Ue||!pe||U)return void qe();Ke()}return()=>{qe()}}),[pe,U,Ue,qe,Ke]),a.React.useEffect((()=>{if(Ze.current!==Ue&&null!==Ue){if(Ze.current=Ue,Ue)return void qe();pe&&!U&&Ke()}}),[Ue,Ke,qe,pe,U]);const et=(e,t)=>{Oe(e),Ce(t)},tt=(e,t,n)=>{et(null,null),Me(e),je(t),Te(n),B(e,n||t)},nt=a.React.useMemo((()=>{if(!ve)return null;const e=N(G,K,ne),t=G/e*100+be,n=e/G,l=function(e,t,n,a,l,i,o,s){const r=new Date(n),c=new Date(a),u=r.getFullYear(),d=c.getFullYear(),m=[],p=[],h={value:u,label:x(e,r,!0),position:0};C(l,i,0,o)&&(m.push(h),p.push(h));let g=function(e,t){let n=new Date(e).getFullYear(),a=null;for(;!a;)n%100%t==0&&(a=n),n++;return a}(n,e.year.value);g===u&&(g=u+e.year.value);for(let s=g;s<=d;s+=e.year.value){const r=new Date(s,0,1,0,0,0),c=(r.getTime()-n)/(a-n);if(!C(l,i,100*c,o))continue;let d=!1;const h=e.year.tickWidth*t/52;h>=1?d=!0:h<.03?d=s%50==0&&s-u>=49:h<.15?d=s%(10*e.year.value)==0&&s-u>=9:h<.3?d=s%(5*e.year.value)==0&&s-u>=4:h<1&&(d=s%2==0);const g=x(e,r);d=w(d,g,c,p,t);const f={value:s,label:d?g:null,position:100*c+"%"};d&&p.push(f),m.push(f)}return m}(ve,e,v,T,be,t,n),i=function(e,t,n,a,l,i,o){if(!e.month||e.month.tickWidth>1&&new Date(a).getMonth()===new Date(n).getMonth())return[];const s=new Date(n),r=new Date(a),c=s.getMonth()+1,u=r.getMonth()+1,d=s.getFullYear(),m=12-c+12*(r.getFullYear()-d-1)+u+1,p=[],h=[];let g=function(e,t){const n=new Date(e);n.setDate(1),n.setHours(0),n.setMinutes(0),n.setSeconds(0),n.setMilliseconds(0),e>n.getTime()&&n.setMonth(n.getMonth()+1);let a=n.getMonth(),l=null;for(;!l;)a%t!=0&&11!==a||(l=a),a++;return l+1}(n,e.month.value);g===c&&(g=c+e.month.value);let f=!1;for(let s=g-c;s<=m-1;s+=e.month.value){const r=new Date(d,c+s-1,1,0,0,0),u=(r.getTime()-n)/(a-n);if(!C(l,i,100*u,o))continue;if(!f||0===r.getMonth()){const t=new Date(r.getFullYear(),r.getMonth()-1,1,0,0,0),l=t.getTime()-n,i=Math.max(l,0)/(a-n);if(h.unshift({value:t.getFullYear(),label:x(e,t,!f),position:100*i+"%"}),f=!0,0===r.getMonth())continue}let m=!1;const g=e.month.tickWidth*t;e.year.tickWidth*t>58&&(m=g>=28||(g>=15?r.getMonth()%3==0:(r.getMonth()+1)%12==7));const v=M(e,r);m=w(m,v,u,h,t);const y={value:r.getMonth()+1,label:m?v:null,position:100*u+"%"};m&&h.push(y),p.push(y)}return p}(ve,e,v,T,be,t,n),o=function(e,t,n,a,l,i,o){if(!e.day)return[];const s=new Date(n),r=s.getDate(),c=s.getFullYear(),u=s.getMonth(),d=Math.ceil((a-n)/864e5)+1,m=[],p=[],h={value:r,label:M(e,s),position:0};p.push(h);let g=function(e,t){let n=new Date(e).getDate(),a=null;for(;!a;)(n-1)%t==0&&1!==n&&(a=n),n++;return a}(n,e.day.value);g===r&&(g=r+e.day.value);for(let s=g-r;s<=d-1;s+=e.day.value){const d=new Date(c,u,r+s,0,0,0),h=d.getDate();if(1===h)continue;const g=(d.getTime()-n)/(a-n);if(!C(l,i,100*g,o))continue;let f=!1;const v=e.day.tickWidth*t;e.month.tickWidth*t>100&&(v>=30?f=!0:v>=15?f=h%2==0:v>=8?f=(h-1)%7==0:v>=3&&(f=11===h||21===h));const y=S(d,e);f=w(f,y,g,p,t);const x={value:h,label:f?y:"",position:100*g+"%"};if(f&&p.push(x),m.push(x),b(d,h,e)){const e=new Date(d.getTime());e.setDate(1),e.setMonth(e.getMonth()+1),s+=(e.getTime()-d.getTime())/864e5-1}}return m}(ve,e,v,T,be,t,n),s=function(e,t,n,a,l,i,o){if(!e.hour)return[];const s=new Date(n),r=s.getHours(),c=s.getFullYear(),u=s.getMonth(),d=s.getDate(),m=Math.ceil((a-n)/36e5)+1,p=[],h=[],g={value:r,label:S(s,e),position:0};h.push(g);let f=function(e,t){let n=new Date(e).getHours(),a=null;for(;!a;)n%t==0&&(a=n),n++;return a}(n,e.hour.value);f===r&&(f=r+e.hour.value);for(let s=f-r;s<=m-1;s+=e.hour.value){const m=new Date(c,u,d,r+s,0,0),g=m.getHours();if(0===g)continue;if(m.getTime()>a)break;const f=(m.getTime()-n)/(a-n);if(!C(l,i,100*f,o))continue;let v=!1;const y=e.day.tickWidth*t,b=e.hour.tickWidth*t;y<60?v=!1:y<100?v=g%12==0:b>=40?v=!0:b>=20?v=g%2==0:b>=6.67?v=g%6==0:b>=5?v=g%8==0:b>=3.3&&(v=g%12==0);const x=j(m);v=w(v,x,f,h,t);const M={value:g,label:v?x:"",position:100*f+"%"};v&&h.push(M),p.push(M)}return p}(ve,e,v,T,be,t,n),r=function(e,t,n,a,l,i,o){if(!e.minute)return[];const s=new Date(n),r=s.getMinutes(),c=s.getFullYear(),u=s.getMonth(),d=s.getDate(),m=s.getHours(),p=(a-n)/6e4+1,h=[],g=[],f={value:r,label:j(s),position:0};g.push(f);let v=function(e,t){let n=new Date(e).getMinutes(),a=null;for(;!a;)n%t==0&&(a=n),n++;return a}(n,e.minute.value);v===r&&(v=r+e.minute.value);for(let s=v-r;s<=p-1;s+=e.minute.value){const p=new Date(c,u,d,m,r+s,0),f=p.getMinutes();if(0===p.getMinutes())continue;const v=(p.getTime()-n)/(a-n);if(!C(l,i,100*v,o))continue;let y=!1;const b=e.hour.tickWidth*t,x=e.minute.tickWidth*t;b<60?y=!1:b<=160?y=f%30==0:b<300?y=f%15==0:x>28?y=!0:x>20?y=f%2==0:b>15?y=f%5==0:b>10&&(y=f%10==0);const M=k(p,e);y=w(y,M,v,g,t);const S={value:p.getMinutes(),label:y?M:"",position:100*v+"%"};y&&g.push(S),h.push(S)}return h}(ve,e,v,T,be,t,n),c=function(e,t,n,a,l,i){const o={labels:{},ticks:{}},s=[];t.length>1&&s.push("year"),n.length>1&&s.push("month"),a.length>1&&s.push("day"),l.length>1&&s.push("hour"),i.length>1&&s.push("minute");const r=s[s.length-1],c=Object.keys(e).filter((t=>e[t]));if(1===s.length)c.forEach((e=>{o.ticks[e]="medium",o.labels[e]="short"}));else{if(2===s.length)o.ticks[r]="medium",c.forEach((e=>{e!==r&&(o.ticks[e]="long")}));else{const e=s[s.length-2];o.ticks[r]="short",o.ticks[e]="medium",c.forEach((t=>{t!==r&&t!==e&&(o.ticks[t]="long")}))}o.labels=o.ticks}return o}(ve,l,i,o,s,r),u=["year","month","day","hour","minute"];return(0,a.jsx)("div",{className:"timeline-ticks"},[l,i,o,s,r].map(((e,t)=>e.map(((e,n)=>{const l=e.position,i=u[t];return(0,a.jsx)("div",{key:`item-${t}-${n}`,className:"timeline-tick-container","data-unit":i,style:{left:l}},e.label&&(0,a.jsx)("div",{className:`timeline-tick_label ${c.labels[i]}-label ${"year"===i&&0===n&&0===be?"timeline-first_label":""}`},e.label),(0,a.jsx)("div",{key:n,className:(0,a.classNames)(`timeline-tick ${c.ticks[i]}-tick`,e.label?"has-label":"no-label")}))})))))}),[ve,K,be]),at=a.React.useMemo((()=>function(e,t,n,l,i){const o=(0,a.getAppStore)().getState().appContext.isRTL;return n=(0,ie.getThemeColorValue)(n||e.colors.black,e),l=l||e.colors.white,i=(0,ie.getThemeColorValue)(i||e.colors.palette.primary[600]),a.css`
    color: red;
    height: fit-content;
    color: ${n};
    background: ${l||"transparent"};

    // Common style
    .timeline-header, .timeline-footer {
      height: 16px;
      display: flex;
      flex-direction: ${o?"row-reverse":"row"};
      align-items: center;
      justify-content: space-between;
      .zoom-container {
        min-width: 36px;
        display: flex;
        flex-direction: ${o?"row-reverse":"row"};
      }
      .range-label {
        display: flex;
        align-items: center;
        font-size: ${a.polished.rem(12)};
        font-weight: 500;
        line-height: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .range-label-badge {
          width: 8px;
          height: 8px;
          border-radius: 4px;
          margin-right: 0.25rem;
        }
      }
    }
    .timeline-content {
      overflow-x: hidden;

      .timeline-whole {
        .timeline-ticks {
          position: relative;
          .timeline-tick-container {
            position: absolute;
            user-select: none;
            .timeline-tick {
              width: 1px;
              background: ${a.polished.rgba(n,.5)};
            }
            .timeline-tick_label {
              font-size: ${a.polished.rem(11)};
              font-weight: 400;
              line-height: 15px;
              width: max-content;
              transform: translate(${o?"50%":"-50%"});
              color: foregroundColor;
              &.long-label {
                font-weight: 600;
              }
              &.medium-label {
                font-weight: 500;
              }
              &.short-label {
                font-weight: 400;
              }
              &.timeline-first_label {
                /* transform: ${"translate(-7px)"}; */
                transform: translate(0);
              }
            }

          }

        }
        .timeline-arrow {
          position: absolute;
          &.left-arrow{
            transform: scaleX(-1);
          }
        }
      }

      .timeline-range-container {
        height: 8px;
        /* width: ${"calc(100% - 14px)"}; */
        width: 100%;
        border-radius: 4px;
        background-color: ${a.polished.rgba(n,.2)};
        .resize-handlers {
          height: 100%;
          border-radius: 4px;
          display: flex;
          justify-content: space-between;
          background-color: ${i};

          .resize-handler {
            width: 8px;
            height: 8px;
            padding: 0;
            overflow: visible;
            border-radius: 8px;
            background: ${i};
            border: 2px solid ${i};
          }

          &:hover {
            .resize-handler {
              background: ${l};
            }
          }
        }
      }
    }
    .jimu-btn {
        color: ${n};
        border-radius: 16px;
        &:hover:not(:disabled) {
          color: ${n};
          background-color: ${a.polished.rgba(n,.2)};
        }
        &.disabled {
          color: ${a.polished.rgba(n,.2)};
          &:hover {
            color: ${a.polished.rgba(n,.2)};
          }
        }
        .jimu-icon {
          margin: 0
        }

        .icon-btn-sizer {
          min-width: 0;
          min-height: 0;
        }
    }

    .jimu-dropdown-button {
      &:not(:disabled):not(.disabled):active,
      &[aria-expanded="true"]{
        border-color: transparent !important;
        color: unset !important;
      }
    }

    // Clasic style
    &.timeline-classic {
      padding: 1rem 1.5rem;
      .timeline-header .range-label .range-label-badge {
        background-color: ${i};
      }
      .timeline-middle {
        .timeline-content {
          margin: 1rem 0.5rem;
          .timeline-whole {
            .timeline-ticks {
              padding-top: 0.75rem;
              .timeline-tick-container {
                .timeline-tick {
                  &.long-tick {
                    height: 12px;
                    &.no-label {
                      margin-top: 19px;
                    }
                    &.has-label {
                      margin-top: 0;
                    }
                  }
                  &.medium-tick {
                    height: 8px;
                    &.no-label {
                      margin-top: 23px;
                    }
                    &.has-label {
                      margin-top: 8px;
                    }
                  }
                  &.short-tick {
                    height: 4px;
                    &.no-label {
                      margin-top: 27px;
                    }
                    &.has-label {
                      margin-top: 12px;
                    }
                  }
                }
                .timeline-tick_label {
                  margin-bottom: 4px;
                }
              }
            }
            .timeline-arrow {
              top: 78px;
              &.left-arrow{
                left: ${o?"unset":"20px"};
                right: ${o?"20px":"unset"};
              }
              &.right-arrow{
                left: ${o?"20px":"unset"};
                right: ${o?"unset":"20px"};
              }
            }
          }
          .timeline-range-container .resize-handlers .resize-handler {
            min-width: 8px;
          }
        }
      }
      .timeline-footer {
        flex-direction: ${o?"row-reverse":"row"};
        .play-container {
          min-width: 65px;
          .play-btn {
            /* margin: 0 0.25rem; */
          }
        }
      }
    }

    // Modern style
    &.timeline-modern {
      display: flex;
      flex-direction: ${o?"row-reverse":"row"};
      padding: 1rem;
      height: 156px;
      .timeline-left, .timeline-right {
        display: flex;
        .play-container {
          display: flex;
          margin-top: 0.5rem;
          flex-direction: column-reverse;
          justify-content: center;
          .next-btn {
            margin-bottom: 0.5rem;
          }
          .play-btn {
            margin-top: 0.5rem;
          }
        }
      }
      .timeline-middle {
        flex-grow: 1;
        .timeline-header{
          .range-label {
            margin: 0 0.25rem;
            .range-label-badge {
              background-color: ${a.polished.rgba(i,.7)};
            }
          }
        }

        .timeline-content {
          height: 115px;
          margin: 0.5rem;
          margin-bottom: 0;
          .timeline-content-inside {
            border: 1px solid ${a.polished.rgba(n,.5)};
            border-radius: 8px;
          }

          .timeline-whole {
            display: flex;
            flex-direction: column;
            .timeline-ticks {
              .timeline-tick-container {
                display: flex;
                flex-direction: column-reverse;
                .timeline-tick {
                  &.long-tick {
                    height: 32px;
                  }
                  &.medium-tick {
                    height: 16px;
                    margin-top: 16px;
                  }
                  &.short-tick {
                    height: 8px;
                    margin-top: 24px;
                  }
                }
                .timeline-tick_label {
                  margin-top: 0.5rem;
                }
              }
            }
            .timeline-arrow {
              z-index: 2;
              top: 68px;
              &.left-arrow{
                left: ${o?"unset":"50px"};
                right: ${o?"50px":"unset"};
              }
              &.right-arrow{
                left: ${o?"50px":"unset"};
                right: ${o?"unset":"50px"};
              }
            }

            .timeline-range-container {
              z-index: 1;
              width: 100%;
              background: transparent;
              .resize-handlers {
                background-color: ${a.polished.rgba(i,.7)};
                .resize-handler {
                  min-width: 4px;
                  width: 4px;
                  height: calc(100% - 10px);
                  margin: 5px 0;
                  /**TODO */
                  background: transparent;
                  border: none;
                  &.show-bg { /** When handlers.w = 0 */
                    background-color: ${a.polished.rgba(i,.7)};
                    height: 100%;
                    margin: 0;
                    &:hover {
                      background-color: ${a.polished.rgba(i,.9)};
                    }
                  }
                }
                &:hover {
                  .resize-handler {
                    background: ${a.polished.rgba(i,.7)};
                  }
                }
              }
            }
          }
        }
      }

    }
  `}(f,0,c,h,g)),[f,7,c,h,g]),lt=a.React.useMemo((()=>(0,a.jsx)(i.Button,{icon:!0,type:"tertiary",size:"sm",disabled:0===K,onClick:()=>{Je(!1),ee(Math.max(0,K-1))}},(0,a.jsx)(F,null))),[K,Je]),it=a.React.useMemo((()=>(0,a.jsx)(i.Button,{icon:!0,type:"tertiary",size:"sm",disabled:K===(null==ne?void 0:ne.zoomLevel),onClick:()=>{Je(!0),ee(Math.min(null==ne?void 0:ne.zoomLevel,K+1))}},(0,a.jsx)(V,null))),[K,ne,Je]),ot=a.React.useMemo((()=>W?(0,a.jsx)(i.Tooltip,{title:ce(pe?"pause":"play"),placement:"bottom"},(0,a.jsx)(i.Button,{icon:!0,type:"tertiary",size:"sm",className:"play-btn",onClick:()=>he(!pe)},pe?(0,a.jsx)(X,null):(0,a.jsx)(Y,null))):null),[W,pe,ce]),st=a.React.useMemo((()=>(0,a.jsx)(a.React.Fragment,null,(0,a.jsx)(i.Tooltip,{title:ce("previous"),placement:"bottom"},(0,a.jsx)(i.Button,{icon:!0,type:"tertiary",size:"sm",onClick:e=>Qe(!1)},(0,a.jsx)(q,null))),r===e.Classic&&ot,(0,a.jsx)(i.Tooltip,{title:ce("next"),placement:"bottom"},(0,a.jsx)(i.Button,{icon:!0,type:"tertiary",size:"sm",className:"next-btn",onClick:e=>Qe(!0)},(0,a.jsx)(te,null))))),[ce,r,Qe,ot]),rt=a.React.useMemo((()=>{const e=a.dateUtils.formatDateLocally(v,re,u,d),t=a.dateUtils.formatDateLocally(T,re,u,d);return(0,a.jsx)(a.React.Fragment,null,(0,a.jsx)(i.Button,{icon:!0,type:"tertiary",onClick:e=>$e(!Fe),ref:e=>{ze.current=e}},(0,a.jsx)(Z,null)),(0,a.jsx)(i.Popper,{open:Fe,keepMount:!0,showArrow:!0,reference:ze,toggle:e=>{$e(!e),a.lodash.defer((()=>{ze.current.focus()}))}},(0,a.jsx)("div",{className:"p-3"},(0,a.jsx)("h6",{className:"mb-2"},ce("overallTimeExtent")),(0,a.jsx)("div",{className:"mb-3"},`${e} - ${t}`),(0,a.jsx)(i.Label,{check:!0,className:"d-flex align-items-center"},(0,a.jsx)("h6",{className:"flex-grow-1 mb-0 mr-1"},ce("filteringApplied")),(0,a.jsx)(i.Switch,{checked:s,onChange:(e,t)=>{H(t)}})))))}),[ce,v,T,re,Fe,s,H]),ct=a.React.useMemo((()=>(0,a.jsx)(i.Dropdown,{activeIcon:!0},(0,a.jsx)(i.Tooltip,{title:ce("speed"),placement:"bottom"},(0,a.jsx)(i.DropdownButton,{icon:!0,type:"tertiary",arrow:!1,"aria-label":ce("speed"),"a11y-description":ue.filter((e=>e.value===de))[0].label},(0,a.jsx)(le,null))),(0,a.jsx)(i.DropdownMenu,null,ue.map((e=>(0,a.jsx)(i.DropdownItem,{key:e.value,value:e.value,active:e.value===de,onClick:e=>me(e.target.value)},e.label)))))),[ue,de,ce]),ut=i.hooks.useEventCallback((e=>{const t=T-v,n=E(G,K,ne);let a=(v+be/100*t+t/n*(e?1:-1)-v)/(T-v)*100;a=Math.max(0,a),a=Math.min(a,(n-1)/n*100),we(a)})),dt=E(G,K,ne),mt=(0,a.getAppStore)().getState().appContext.isRTL,pt=De||xe,ht=Re||ke||Se,{startPositionForStep:gt,widthForStep:ft}=((t,n)=>{let a=(t-v)/(T-v),l=(n-v)/(T-v)-a;return t===T?(a=r===e.Classic?"calc(100% - 16px)":"calc(100% - 8px)",l=0):a=100*a+"%",{startPositionForStep:a,widthForStep:l}})(pt,ht),vt=a.dateUtils.formatDateLocally(pt,re,u,d),yt=a.dateUtils.formatDateLocally(ht,re,u,d),bt=0!==be,wt=100-be-1/dt*100>1e-11;return(0,a.jsx)("div",{css:at,dir:"ltr",className:(0,a.classNames)("timeline w-100",{"timeline-classic":r===e.Classic,"timeline-modern":r===e.Modern})},r===e.Modern&&(0,a.jsx)("div",{className:"timeline-left"},(0,a.jsx)("div",{className:"play-container"},st)),(0,a.jsx)("div",{className:"timeline-middle"},(0,a.jsx)("div",{className:"timeline-header"},r===e.Classic&&(0,a.jsx)("div",{className:"range-label",dir:mt?"rtl":"ltr"},(0,a.jsx)("div",{className:"range-label-badge"}),vt+" - "+yt),r===e.Modern&&(0,a.jsx)(a.React.Fragment,null,rt,(0,a.jsx)("div",{className:"range-label",dir:mt?"rtl":"ltr"},(0,a.jsx)("div",{className:"range-label-badge"}),vt+" - "+yt)),(0,a.jsx)("div",{className:"zoom-container"},0===K?lt:(0,a.jsx)(i.Tooltip,{title:ce("zoomOut"),placement:"bottom"},lt),K===(null==ne?void 0:ne.zoomLevel)?it:(0,a.jsx)(i.Tooltip,{title:ce("zoomIn"),placement:"bottom"},it))),(0,a.jsx)("div",{className:"timeline-content"},(0,a.jsx)("div",{className:"timeline-content-inside"},(0,a.jsx)("div",{className:"timeline-whole",ref:e=>ge.current=e,style:{width:100*dt+"%",height:J+"px",marginLeft:-be*dt+"%"}},r===e.Modern&&(0,a.jsx)("div",{style:{height:J-32+"px"}}),nt,r===e.Modern&&(0,a.jsx)("div",{className:"timeline-range-container",style:{height:J+"px",marginTop:-(J-32)+"px"}},(0,a.jsx)("div",{className:"resize-handlers",ref:e=>Pe.current=e,style:{marginLeft:gt,width:100*ft+"%"}},(0,a.jsx)("button",{className:"resize-handler resize-left "+(pt===ht?"show-bg":""),ref:e=>{Ae.current=e},title:vt}),(0,a.jsx)("button",{className:"resize-handler resize-right "+(pt===ht?"show-bg":""),ref:e=>{Ve.current=e},title:yt}))),bt&&(0,a.jsx)(i.Button,{icon:!0,type:"tertiary",size:"sm",className:"timeline-arrow left-arrow",style:{left:r===e.Modern&&!W&&mt?"25px":"null"},onClick:e=>ut(!1)},(0,a.jsx)(i.Icon,{width:4,height:16,icon:oe})),wt&&(0,a.jsx)(i.Button,{icon:!0,type:"tertiary",size:"sm",className:"timeline-arrow right-arrow",style:{right:r!==e.Modern||W||mt?"null":"25px"},onClick:e=>ut(!0)},(0,a.jsx)(i.Icon,{width:4,height:16,icon:oe}))),r===e.Classic&&(0,a.jsx)("div",{className:"timeline-range-container",style:{width:100*dt+"%",marginLeft:-be*dt+"%"}},(0,a.jsx)("div",{className:"resize-handlers",ref:e=>Pe.current=e,style:{marginLeft:gt,width:100*ft+"%"}},(0,a.jsx)("button",{className:"resize-handler resize-left",ref:e=>{Ae.current=e},title:vt}),(0,a.jsx)("button",{className:"resize-handler resize-right",ref:e=>{Ve.current=e},title:yt}))))),r===e.Classic&&(0,a.jsx)("div",{className:"timeline-footer"},rt,(0,a.jsx)("div",{className:"play-container"},st),W?ct:(0,a.jsx)("div",null))),r===e.Modern&&(0,a.jsx)("div",{className:"timeline-right"},(0,a.jsx)("div",{className:"play-container"},ot,W&&ct)))},ce=s(43269),ue=e=>{var o,s,r,c;const{useDataSources:u,theme:d,id:g,config:y,intl:b}=e,{enablePlayControl:w,speed:x,autoPlay:M,timeSettings:S,honorTimeSettings:j,dataSourceType:k,timeStyle:T,foregroundColor:D,backgroundColor:O,sliderColor:R}=y,[C,E]=a.React.useState(null),[N,L]=a.React.useState(!0),[P,A]=a.React.useState(x),[V,W]=a.React.useState(null),[z,F]=a.React.useState(null),[$,U]=a.React.useState(null),[Z,B]=a.React.useState(!0),[H,Y]=a.React.useState(!0),[G,_]=a.React.useState(null),[X,J]=a.React.useState(null),Q=a.React.useRef(null),q=a.React.useMemo((()=>l.MapViewManager.getInstance()),[]),K=a.React.useMemo((()=>a.DataSourceManager.getInstance()),[]);a.React.useEffect((()=>{var e;return _(null===(e=Q.current)||void 0===e?void 0:e.clientWidth),(0,l.loadArcGISJSAPIModules)(["esri/core/watchUtils"]).then((e=>{F(e[0])})),()=>{ee(null,null,!0)}}),[]),a.React.useEffect((()=>{if(U(null),k!==a.DataSourceTypes.FeatureLayer){let e=null;if((null==u?void 0:u.length)>0){e=[];const t=[];u.forEach((e=>{t.push(K.createDataSourceByUseDataSource((0,a.Immutable)(e)))})),Promise.all(t).then((t=>{const n={};t.forEach((e=>{n[e.id]=e})),t.forEach((t=>{t.getAllChildDataSources().forEach((t=>{var n,l;t.type===a.DataSourceTypes.FeatureLayer&&t.supportTime()&&e.push({dataSourceId:t.id,mainDataSourceId:null===(n=t.getMainDataSource())||void 0===n?void 0:n.id,dataViewId:t.dataViewId,rootDataSourceId:null===(l=t.getRootDataSource())||void 0===l?void 0:l.id})}))})),U(n),W((0,a.Immutable)(e))})).catch((e=>{}))}}else W(u)}),[u,K,k,W,U]),a.React.useEffect((()=>{if($&&z)if(j){const{settings:e,speed:a}=function(e,a=!1){var i,o,s;let r=null;const c=e[Object.keys(e).filter((t=>e[t].type===l.ArcGISDataSourceTypes.WebMap))[0]],u=null===(s=null===(o=null===(i=null==c?void 0:c.getItemData())||void 0===i?void 0:i.widgets)||void 0===o?void 0:o.timeSlider)||void 0===s?void 0:s.properties;let d;if(u){const{startTime:e,endTime:l,timeStopInterval:i,numberOfStops:o,thumbMovingRate:s,thumbCount:c}=u;if(a&&(d=function(e){let n;const a=1e3*Math.ceil(e/1e3);return Object.keys(p).some((e=>p[e]===a&&(n=e.toUpperCase(),!0))),n||(a>p.slowest?n=t.Slowest:a<p.fastest&&(n=t.Fastest)),n}(s)),r={layerList:null,startTime:{value:e},endTime:{value:l},timeDisplayStrategy:2===c?n.current:n.cumulatively},i){const e=function(e){switch(e){case"esriTimeUnitsMonths":return"month";case"esriTimeUnitsDays":return"day";case"esriTimeUnitsHours":return"hour";case"esriTimeUnitsMinutes":return"minute";default:return"year"}}(i.units);r.accuracy=e,r.stepLength={val:i.interval,unit:e}}else if(o){r.dividedCount=o;const t=v(e,l);r.accuracy=t[0];const n=(l-e)/o;t.some((e=>n>=1e3*m[e]&&(r.accuracy=e,!0)))}}return{settings:r,speed:d}}($,!0);A(a),J(e)}else{const e=function(e,t,n=!1){const{startTime:l,endTime:i,layerList:o,accuracy:s,stepLength:r}=e||{};let c;const{startTime:u,endTime:d}=function(e,t,n,a){let l=h(n),i=h(a,!1),o=null,s=null;if(!l||!i){const n=f(e,t);n&&(e=n),Object.keys(e).forEach((t=>{var n,a;const r=e[t].getTimeInfo();if(!l){const e=null===(n=null==r?void 0:r.timeExtent)||void 0===n?void 0:n[0];o=o?Math.min(o,e):e}if(!i){const e=null===(a=null==r?void 0:r.timeExtent)||void 0===a?void 0:a[1];s=s?Math.max(s,e):e}})),l=l||o,i=i||s}return{startTime:l,endTime:i}}(t,o,l,i),p=v(u,d),g=p[0],y=function(e,t,n){const a=(t-e)/1e3/m[n];return{val:a>10?10:a>5?5:1,unit:n}}(u,d,g);if(e){c=(0,a.Immutable)(e);const t=!p.includes(s);t&&(c=c.set("accuracy",g)),r&&(t||m[r.unit]>m[g]||1e3*m[r.unit]*r.val>d-u)&&(c=c.set("stepLength",y))}else c=(0,a.Immutable)(function(e,t){return{layerList:null,startTime:{value:a.dateUtils.VirtualDateType.Min},endTime:{value:a.dateUtils.VirtualDateType.Max},timeDisplayStrategy:"CURRENT",dividedCount:null,accuracy:e,stepLength:t}}(g,y));return n?(c=c.set("startTime",{value:u}).set("endTime",{value:d}),c):(0,a.Immutable)({config:c,exactStartTime:u,exactEndTime:d,minAccuracy:g,accuracyList:p})}(S,$,!0);A(x),J(e)}}),[$,z,j,x,S]);const ee=i.hooks.useEventCallback(((e,t,n=!1)=>{var l;if(!$)return;const i={time:n?null:[e,t]};if(n||(()=>{let e=[],t=null;const n=q.getAllJimuMapViewIds();k===a.AllDataSourceTypes.WebMap?(t=$[Object.keys($)[0]],e=t.getAllChildDataSources().map((e=>e.id))):e=Object.keys($);const l=[];e.forEach((e=>{const i=t||$[e].getRootDataSource();if((null==i?void 0:i.type)===a.AllDataSourceTypes.WebMap){const t=n.filter((e=>q.getJimuMapViewById(e).dataSourceId===i.id));t.forEach((t=>{const n=((e,t)=>{let n=null;return Object.keys(e.jimuLayerViews).forEach((a=>{e.jimuLayerViews[a].layerDataSourceId===t&&(n=e.jimuLayerViews[a])})),n})(q.getJimuMapViewById(t),e);(null==n?void 0:n.view)&&l.push(z.whenFalseOnce(n.view,"updating"))}))}})),Promise.all(l).then((e=>{B(!1)}))})(),k===a.AllDataSourceTypes.WebMap){const e=f($,null===(l=y.timeSettings)||void 0===l?void 0:l.layerList);Object.keys(e).forEach((t=>{te(e[t],i,g)}))}else Object.keys($).forEach((e=>{te($[e],i,g)}))}));a.React.useEffect((()=>{C&&ee(C[0],C[1],!N)}),[C,N,ee]);const te=(e,t,n)=>{var l,i,o,s;e.type===a.DataSourceTypes.MapService?(null===(l=e.supportTime)||void 0===l?void 0:l.call(e))&&(t=ne(e,t),null===(i=e.changeTimeExtent)||void 0===i||i.call(e,t.time,n)):e.type===a.DataSourceTypes.FeatureLayer&&(null===(o=e.supportTime)||void 0===o?void 0:o.call(e))&&(t=ne(e,t),null===(s=e.updateQueryParams)||void 0===s||s.call(e,t,n))},ne=(e,t)=>{const n=e.getTimeInfo().exportOptions||{},{TimeOffset:a=0,timeOffsetUnits:l}=n;if((null==t?void 0:t.time)&&0!==a){let e=t.time[0],n=t.time[1];const i=new Date(e),o=new Date(n);switch(l){case"esriTimeUnitsCenturies":case"esriTimeUnitsDecades":case"esriTimeUnitsYears":const t="esriTimeUnitsCenturies"===l?100:"esriTimeUnitsDecades"===l?10:1;e=i.setFullYear(i.getFullYear()-a*t),n=o.setFullYear(o.getFullYear()-a*t);break;case"esriTimeUnitsMonths":e=i.setMonth(i.getMonth()-a),n=o.setMonth(o.getMonth()-a);break;case"esriTimeUnitsWeeks":case"esriTimeUnitsDays":const s="esriTimeUnitsWeeks"===l?7:1;e=i.setDate(i.getDate()-a*s),n=o.setDate(o.getDate()-a*s);break;case"esriTimeUnitsHours":e=i.setHours(i.getHours()-a),n=o.setHours(o.getHours()-a);break;case"esriTimeUnitsMinutes":e=i.setMinutes(i.getMinutes()-a),n=o.setMinutes(o.getMinutes()-a);break;case"esriTimeUnitsSeconds":e=i.setSeconds(i.getSeconds()-a),n=o.setSeconds(o.getSeconds()-a);break;case"esriTimeUnitsMilliseconds":e=i.setMilliseconds(i.getMilliseconds()-a),n=o.setMilliseconds(o.getMilliseconds()-a)}t.time=[e,n]}return t},ae=e=>{_(e)};if(u&&0!==u.length){if($&&z&&null===X||(null===(o=null==X?void 0:X.startTime)||void 0===o?void 0:o.value)>(null===(s=null==X?void 0:X.endTime)||void 0===s?void 0:s.value)){const e=b.formatMessage({id:"noTlFromHonoredMapWarning",defaultMessage:I.noTlFromHonoredMapWarning}),t=b.formatMessage({id:"invalidTimeSpanWarning",defaultMessage:I.invalidTimeSpanWarning});return(0,a.jsx)("div",{className:"placeholder-container w-100 h-100 position-relative"},(0,a.jsx)(i.WidgetPlaceholder,{icon:ce,widgetId:g,message:b.formatMessage({id:"_widgetLabel",defaultMessage:I._widgetLabel})}),(0,a.jsx)(i.Alert,{buttonType:"tertiary",form:"tooltip",size:"small",type:"warning",withIcon:!0,className:"position-absolute",style:{bottom:10,right:10,backgroundColor:"var(--warning-100)",border:"1px solid var(--warning-300)"},text:null===X?e:t}))}return(0,a.jsx)("div",{className:"timeline-widget",ref:e=>Q.current=e},(0,a.jsx)(a.ReactResizeDetector,{handleWidth:!0,onResize:ae}),(null==V?void 0:V.length)>0&&(0,a.jsx)(a.MultipleDataSourceComponent,{useDataSources:V},((e,t)=>{if(k===a.DataSourceTypes.FeatureLayer){const n=Object.keys(t).filter((e=>{var n;return[a.DataSourceStatus.Created,a.DataSourceStatus.CreateError].includes(null===(n=t[e])||void 0===n?void 0:n.instanceStatus)})).length===u.length;!$&&n&&Object.keys(e).length===u.length&&setTimeout((()=>{U(e)}),0)}const n=Object.keys(t).filter((e=>t[e]&&t[e].status!==a.DataSourceStatus.Loading)).length===Object.keys(t).length;setTimeout((()=>{Y(!n)}),0)})),$&&X&&G&&(0,a.jsx)(re,{theme:d,width:G,updating:H||Z,startTime:null===(r=X.startTime)||void 0===r?void 0:r.value,endTime:null===(c=X.endTime)||void 0===c?void 0:c.value,accuracy:X.accuracy,stepLength:X.stepLength,dividedCount:X.dividedCount,cumulatively:X.timeDisplayStrategy===n.cumulatively,timeStyle:T,foregroundColor:D,backgroundColor:O,sliderColor:R,enablePlayControl:w,speed:P,autoPlay:M,applied:N,onTimeChanged:(e,t)=>E([e,t]),onApplyStateChanged:e=>L(e)}))}return(0,a.jsx)(i.WidgetPlaceholder,{icon:ce,widgetId:g,message:b.formatMessage({id:"_widgetLabel",defaultMessage:I._widgetLabel})})}})(),r})())}}}));