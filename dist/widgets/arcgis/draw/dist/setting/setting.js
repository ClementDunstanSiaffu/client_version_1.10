System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui","jimu-ui/advanced/map"],(function(e,t){var s={},i={},a={},n={};return{setters:[function(e){s.React=e.React,s.classNames=e.classNames,s.css=e.css,s.jsx=e.jsx,s.polished=e.polished},function(e){i.MapWidgetSelector=e.MapWidgetSelector,i.SettingCollapse=e.SettingCollapse,i.SettingRow=e.SettingRow,i.SettingSection=e.SettingSection},function(e){a.Button=e.Button,a.Checkbox=e.Checkbox,a.Icon=e.Icon,a.Label=e.Label,a.Radio=e.Radio,a.Switch=e.Switch,a.defaultMessages=e.defaultMessages},function(e){n.DrawingElevationMode3D=e.DrawingElevationMode3D,n.useMeasurementsUnitsInfos=e.useMeasurementsUnitsInfos}],execute:function(){e((()=>{var e={748:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.5c0 .527-.074 1.036-.212 1.518l.912.438a6.5 6.5 0 1 0-6.586 4.533l-.077-1.008A5.5 5.5 0 1 1 12 6.5Zm-9 0a3.501 3.501 0 0 0 2.88 3.445L5.8 8.901a2.501 2.501 0 1 1 3.194-2.224l.949.456A3.5 3.5 0 1 0 3 6.5ZM15.5 11l-5 1-3 4-1-9.5 9 4.5Zm-5.57.094-1.702 2.269-.542-5.152 4.76 2.38-2.517.503Z" fill="#000"></path></svg>'},86567:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm1 0a7 7 0 0 0 7 7 7.009 7.009 0 0 0 7-7A7 7 0 1 0 1 8Z" fill="#000"></path></svg>'},29786:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 2h2a2 2 0 0 1 2 2v7.817l-3 2.812-3-2.812V4a2 2 0 0 1 2-2Zm5 2v8.25L8 16l-4-3.75V4a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3ZM9 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="#000"></path></svg>'},87783:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3.429V16h14V0L6.833 6.857 1 3.43ZM14 2v13H2V5.114l4.182 2.51a1.2 1.2 0 0 0 1.398-.118L14 2Z" fill="#000"></path></svg>'},43126:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.582 5 11 10.949V12H9v-1.274L5.316 7h-.515L2 12.383V14H0v-2h1.073L4 6.374V5h2v1.27L9.688 10h.716L14 4.029V3h2v2h-1.418Z" fill="#000"></path></svg>'},45859:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.002 1H14a1 1 0 0 1 1 1.002v11.997A1 1 0 0 1 14 15H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1.002-1ZM2 14h12V2H2v12Z" fill="#000"></path></svg>'},34363:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4IiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMTA4IDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHJlY3QgeD0iOCIgeT0iOCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjU2IiBmaWxsPSIjMjgyODI4Ii8+DQo8cmVjdCB4PSIxMyIgeT0iNDAiIHdpZHRoPSI1MyIgaGVpZ2h0PSI2IiBmaWxsPSIjNkE2QTZBIi8+DQo8cmVjdCB4PSIxMyIgeT0iMzIiIHdpZHRoPSI4MSIgaGVpZ2h0PSIxIiBmaWxsPSIjNDQ0NDQ0Ii8+DQo8cmVjdCB4PSIxMyIgeT0iNTIiIHdpZHRoPSI4MSIgaGVpZ2h0PSI2IiBmaWxsPSIjNkE2QTZBIi8+DQo8cmVjdCB4PSIxMyIgeT0iMTQiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiM2QTZBNkEiLz4NCjxyZWN0IHg9IjI5IiB5PSIxNCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iIzZBNkE2QSIvPg0KPHJlY3QgeD0iNDUiIHk9IjE0IiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjNkE2QTZBIi8+DQo8cmVjdCB4PSI2MSIgeT0iMTQiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiM2QTZBNkEiLz4NCjxyZWN0IHg9Ijc3IiB5PSIxNCIgd2lkdGg9IjEiIGhlaWdodD0iMTIiIGZpbGw9IiM0NDQ0NDQiLz4NCjxyZWN0IHg9IjgyIiB5PSIxNCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iIzZBNkE2QSIvPg0KPC9zdmc+DQo="},59481:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4IiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMTA4IDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHJlY3QgeD0iOCIgeT0iMjYiIHdpZHRoPSI5MiIgaGVpZ2h0PSIyMCIgZmlsbD0iIzI4MjgyOCIvPg0KPHJlY3QgeD0iMTQiIHk9IjMwIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjNkE2QTZBIi8+DQo8cmVjdCB4PSIzMCIgeT0iMzAiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiM2QTZBNkEiLz4NCjxyZWN0IHg9IjQ2IiB5PSIzMCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iIzZBNkE2QSIvPg0KPHJlY3QgeD0iNjIiIHk9IjMwIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjNkE2QTZBIi8+DQo8cmVjdCB4PSI3OCIgeT0iMzAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEyIiBmaWxsPSIjNDQ0NDQ0Ii8+DQo8cmVjdCB4PSI4MyIgeT0iMzAiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiM2QTZBNkEiLz4NCjwvc3ZnPg0K"},48891:e=>{"use strict";e.exports=s},30726:e=>{"use strict";e.exports=a},58290:e=>{"use strict";e.exports=n},77756:e=>{"use strict";e.exports=i}},t={};function o(s){var i=t[s];if(void 0!==i)return i.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var l={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(l),o.d(l,{default:()=>D});var e,t,s,i=o(48891),a=o(77756),n=o(30726);!function(e){e.Panel="Panel",e.Toolbar="Toolbar"}(e||(e={})),function(e){e.Continuous="continuous",e.Update="update"}(t||(t={})),function(e){e.Point="point",e.Polyline="polyline",e.Polygon="polygon",e.Rectangle="rectangle",e.Circle="circle"}(s||(s={}));var r=o(58290),c=o(29786),d=o.n(c);const g=e=>{const t=window.SVG,{className:s}=e,a=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s}(e,["className"]),n=(0,i.classNames)("jimu-icon jimu-icon-component",s);return t?i.React.createElement(t,Object.assign({className:n,src:d()},a)):i.React.createElement("svg",Object.assign({className:n},a))};var p=o(43126),m=o.n(p);const u=e=>{const t=window.SVG,{className:s}=e,a=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s}(e,["className"]),n=(0,i.classNames)("jimu-icon jimu-icon-component",s);return t?i.React.createElement(t,Object.assign({className:n,src:m()},a)):i.React.createElement("svg",Object.assign({className:n},a))};var h=o(87783),I=o.n(h);const f=e=>{const t=window.SVG,{className:s}=e,a=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s}(e,["className"]),n=(0,i.classNames)("jimu-icon jimu-icon-component",s);return t?i.React.createElement(t,Object.assign({className:n,src:I()},a)):i.React.createElement("svg",Object.assign({className:n},a))};var x=o(45859),j=o.n(x);const M=e=>{const t=window.SVG,{className:s}=e,a=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s}(e,["className"]),n=(0,i.classNames)("jimu-icon jimu-icon-component",s);return t?i.React.createElement(t,Object.assign({className:n,src:j()},a)):i.React.createElement("svg",Object.assign({className:n},a))};var v=o(86567),w=o.n(v);const b=e=>{const t=window.SVG,{className:s}=e,a=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s}(e,["className"]),n=(0,i.classNames)("jimu-icon jimu-icon-component",s);return t?i.React.createElement(t,Object.assign({className:n,src:w()},a)):i.React.createElement("svg",Object.assign({className:n},a))},y=i.React.memo((e=>{const t=i.React.useRef(null),a=[{id:s.Point,icon:g,des:e.intl.formatMessage({id:"drawModePoint",defaultMessage:n.defaultMessages.drawModePoint})},{id:s.Polyline,icon:u,des:e.intl.formatMessage({id:"drawModeLine",defaultMessage:n.defaultMessages.drawModeLine})},{id:s.Polygon,icon:f,des:e.intl.formatMessage({id:"drawModePolygon",defaultMessage:n.defaultMessages.drawModePolygon})},{id:s.Rectangle,icon:M,des:e.intl.formatMessage({id:"drawModeRectangle",defaultMessage:n.defaultMessages.drawModeRectangle})},{id:s.Circle,icon:b,des:e.intl.formatMessage({id:"drawModeCircle",defaultMessage:n.defaultMessages.drawModeCircle})}],o=t=>{if(!e.items||!e.items.length)return!1;for(let s=0,i=e.items.length;s<i;s++)if(t===e.items[s])return!0;return!1},l=()=>{r()},r=()=>{const s=[],i=t.current.querySelectorAll("input");for(let e=0,t=i.length;e<t;e++){const t=i[e];t.checked&&s.push(t.getAttribute("data-itemid"))}e.onDrawingToolsChange(s)};return(0,i.jsx)("div",{ref:t,css:(()=>{const t=e.theme;return i.css`
      font-size: 13px;
      font-weight: lighter;

      .items-option{
        padding: 0;
        margin: 0;
        list-style: none;
        list-style-type: none;
        /*background: ${t.colors.palette.light[200]};*/

        .item{
          margin: 6px 0;

          .icon{
            color: ${t.colors.palette.dark[600]};
          }

          .item-label{
            margin: 0;
          }
        }
      }
    `})()},(0,i.jsx)("ul",{className:"items-option",role:"group","aria-label":e.title},(()=>{const e=[];for(let t=0,s=a.length;t<s;t++){const s=a[t],r=o(s.id);e.push((0,i.jsx)("li",{className:"d-flex item",key:"key-"+t},(0,i.jsx)(s.icon,{className:"icon mr-2"}),(0,i.jsx)(n.Label,{className:"d-flex item-label justify-content-between flex-grow-1 text-break","aria-label":s.des},s.des,(0,i.jsx)(n.Switch,{className:"d-flex","data-itemid":s.id,checked:r,onChange:l,"aria-label":s.des}))))}return e})()))})),S=i.React.memo((e=>{const t=i.React.useRef(null),s=(0,r.useMeasurementsUnitsInfos)(),[a,o]=i.React.useState((()=>{const t=[];return s.forEach((s=>{const i=s.value;let a=Object.assign({},s);const n=e.measurementsUnitsInfos.find((e=>e.value===i));n&&(a=Object.assign(Object.assign({},a),n)),t.push(a)})),t})),l=e=>{const t=a.find((t=>t.value===e));return t&&t.actived},c=t=>{const s=a.map((e=>(t===e.value&&(e.actived=!e.actived),e)));o(s),e.onUnitsSettingChange(s)};return(0,i.jsx)("div",{ref:t,css:(()=>{const t=e.theme;return i.css`
      font-size: 13px;
      font-weight: lighter;
      width: 100%;

      .dotdotdot{
        text-align: left;
        justify-content: start;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .util-iteams{
        list-style: none;
        list-style-type: none;
        /*background: ${t.colors.palette.light[200]};*/

        .item{
          margin: 6px 0;
          align-items: center;

          .item-note-wapper{
            /*width: 80px;*/

            .item-note{
              display: inline-block;
              width: 100%;
            }
          }

          .item-label{
            width: 105px;
          }
        }
      }
    `})()},(0,i.jsx)("ul",{className:"util-iteams p-0 m-0",role:"group"},(()=>{const e=[];for(let t=0,s=a.length;t<s;t++){const s=a[t],o=l(s.value),r=s.note;e.push((0,i.jsx)("li",{className:"d-flex item",key:"key-"+t},(0,i.jsx)(n.Checkbox,{className:"d-flex mr-2","data-itemid":s.value,checked:o,onChange:()=>{c(s.value)},"aria-label":r}),(0,i.jsx)("div",{className:"d-flex mr-3 item-note-wapper dotdotdot"},(0,i.jsx)(n.Label,{className:"item-note dotdotdot",title:r,"aria-label":r},r))))}return e})()))}));function N(e,t){const s=e.colors.palette.light[200];return i.css`
      font-size: 13px;
      font-weight: lighter;

      .jimu-widget-setting--section {
        padding: 18px 16px;
      }

      .ui-mode-setting {
        display: flex;
      }

      /* ui-mode */
      .ui-mode-card-chooser{
        display: flex;
        align-items: start;

        .ui-mode-card-wapper {
          width: calc((100% - ${10}px - ${8}px) / 2);
        }

        .ui-mode-card-separator {
          width: ${10}px
        }
        .ui-mode-card {
          flex: 1;
          width: 100%;
          background: ${s};
          border: ${2}px solid ${s};
          margin: 0 0 0.5rem 0;

          .jimu-icon {
            margin: 0
          }
        }
        .ui-mode-card.active {
          border: ${2}px solid #00D8ED;
          background-color: ${s} !important;
        }
        .ui-mode-label {
          overflow: hidden;
          text-align: center;
        }
      }

      .placeholder-container{
        height: calc(100% - 180px);

        .placeholder{
          flex-direction: column;

          .icon{
            color: var(--dark-200);
          }
          .hint{
            font-size: ${t.rem(14)};
            font-weight: 500;
            color: var(--dark-500);
            max-width: ${t.rem(160)};
          }
        }

      }
  `}var P=o(748),O=o.n(P);const C=e=>{const t=window.SVG,{className:s}=e,a=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s}(e,["className"]),n=(0,i.classNames)("jimu-icon jimu-icon-component",s);return t?i.React.createElement(t,Object.assign({className:n,src:O()},a)):i.React.createElement("svg",Object.assign({className:n},a))};class D extends i.React.PureComponent{constructor(e){var t;super(e),this.handleMapWidgetChange=e=>{const t=!!(null==e?void 0:e[0]);this.setState({isSelectedMap:t}),this.props.onSettingChange({id:this.props.id,useMapWidgetIds:e})},this.handleIsDisplayCanvasLayerChange=()=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("isDisplayCanvasLayer",!this.props.config.isDisplayCanvasLayer)})},this.handleArrangementChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("arrangement",e)})},this.handleShowAdvancedSettingClick=()=>{this.setState({isShowAdvancedSetting:!this.state.isShowAdvancedSetting})},this.handleDrawToolsChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("drawingTools",e)})},this.handleIsEnableMeasurementChange=()=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["measurementsInfo","enableMeasurements"],!this.props.config.measurementsInfo.enableMeasurements)})},this.handleMeasurementUnitsInfoChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("measurementsUnitsInfos",e)})},this.handleDrawingElevationMode3DChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("drawingElevationMode3D",e)})},this.state={isSelectedMap:!!(null===(t=this.props.useMapWidgetIds)||void 0===t?void 0:t[0]),isShowAdvancedSetting:!1}}render(){var t;const s=this.props.id+"-uimode-description",l=this.props.id+"-uimode-0",c=this.props.id+"-uimode-1",d=this.props.intl.formatMessage({id:"selectMapWidget",defaultMessage:"Select a Map widget"}),g=this.props.intl.formatMessage({id:"selectMapHint",defaultMessage:n.defaultMessages.selectMapHint}),p=this.props.intl.formatMessage({id:"arrangementTips",defaultMessage:"Arrangement"}),m=this.props.intl.formatMessage({id:"panelTips",defaultMessage:"Panel"}),u=this.props.intl.formatMessage({id:"toolbarTips",defaultMessage:"Toolbar"}),h=this.props.intl.formatMessage({id:"advance",defaultMessage:n.defaultMessages.advance}),I=this.props.intl.formatMessage({id:"drawingToolsTips",defaultMessage:"Drawing tools"}),f=this.props.intl.formatMessage({id:"isEnableMeasurementsTips",defaultMessage:"Enable measurement"}),x=this.props.intl.formatMessage({id:"drawingElevationMode3DTips",defaultMessage:"3D drawing effect"}),j=this.props.intl.formatMessage({id:"relativeToGroundTips",defaultMessage:"Relative to ground"}),M=this.props.intl.formatMessage({id:"onTheGroundTips",defaultMessage:"On the ground"});return(0,i.jsx)("div",{css:N(this.props.theme,i.polished),className:"widget-setting-menu jimu-widget-setting"},(0,i.jsx)(a.SettingSection,{title:d,className:(0,i.classNames)("map-selector-section",{"border-0":!this.state.isSelectedMap})},(0,i.jsx)(a.SettingRow,null,(0,i.jsx)(a.MapWidgetSelector,{onSelect:this.handleMapWidgetChange,useMapWidgetIds:this.props.useMapWidgetIds}))),!this.state.isSelectedMap&&(0,i.jsx)("div",{className:"d-flex placeholder-container justify-content-center align-items-center"},(0,i.jsx)("div",{className:"d-flex text-center placeholder justify-content-center align-items-center "},(0,i.jsx)(C,{size:48,className:"d-flex icon mb-2"}),(0,i.jsx)("p",{className:"hint"},g))),this.state.isSelectedMap&&(0,i.jsx)(i.React.Fragment,null,(0,i.jsx)(a.SettingSection,{title:p},(0,i.jsx)(a.SettingRow,null,(0,i.jsx)("div",{className:"ui-mode-card-chooser"},(0,i.jsx)(n.Label,{className:"d-flex flex-column ui-mode-card-wapper"},(0,i.jsx)(n.Button,{icon:!0,className:(0,i.classNames)("ui-mode-card",{active:this.props.config.arrangement===e.Panel}),onClick:()=>this.handleArrangementChange(e.Panel),"aria-labelledby":l,"aria-describedby":s},(0,i.jsx)(n.Icon,{width:100,height:72,icon:o(34363),autoFlip:!0})),(0,i.jsx)("div",{id:l,className:"mx-1 text-break ui-mode-label"},m)),(0,i.jsx)("div",{className:"ui-mode-card-separator"}),(0,i.jsx)(n.Label,{className:"d-flex flex-column ui-mode-card-wapper"},(0,i.jsx)(n.Button,{icon:!0,className:(0,i.classNames)("ui-mode-card",{active:this.props.config.arrangement===e.Toolbar}),onClick:()=>this.handleArrangementChange(e.Toolbar),"aria-labelledby":c,"aria-describedby":s},(0,i.jsx)(n.Icon,{width:100,height:72,icon:o(59481),autoFlip:!0})),(0,i.jsx)("div",{id:c,className:"mx-1 text-break ui-mode-label"},u))))),(0,i.jsx)(a.SettingSection,null,(0,i.jsx)(a.SettingCollapse,{label:h,isOpen:this.state.isShowAdvancedSetting,onRequestOpen:this.handleShowAdvancedSettingClick,onRequestClose:this.handleShowAdvancedSettingClick},(0,i.jsx)(i.React.Fragment,null,(0,i.jsx)(a.SettingSection,{title:I,className:"px-0"},(0,i.jsx)(y,{items:this.props.config.drawingTools.asMutable(),theme:this.props.theme,intl:this.props.intl,title:"Drawing tools",onDrawingToolsChange:this.handleDrawToolsChange})),(0,i.jsx)(a.SettingSection,{className:"px-0"},(0,i.jsx)(a.SettingRow,{label:f},(0,i.jsx)(n.Switch,{checked:this.props.config.measurementsInfo.enableMeasurements,onChange:this.handleIsEnableMeasurementChange,"aria-label":f})),this.props.config.measurementsInfo.enableMeasurements&&(0,i.jsx)(a.SettingRow,null,(0,i.jsx)(S,{theme:this.props.theme,intl:this.props.intl,measurementsUnitsInfos:null===(t=this.props.config.measurementsUnitsInfos)||void 0===t?void 0:t.asMutable(),onUnitsSettingChange:this.handleMeasurementUnitsInfoChange}))),(0,i.jsx)(a.SettingSection,{title:x,className:"px-0"},(0,i.jsx)(a.SettingRow,null,(0,i.jsx)(n.Label,{style:{cursor:"pointer"},title:j},(0,i.jsx)(n.Radio,{style:{cursor:"pointer"},className:"m-0 mr-2",title:j,onChange:()=>this.handleDrawingElevationMode3DChange(r.DrawingElevationMode3D.RelativeToGround),checked:this.props.config.drawingElevationMode3D===r.DrawingElevationMode3D.RelativeToGround}),j)),(0,i.jsx)(a.SettingRow,null,(0,i.jsx)(n.Label,{style:{cursor:"pointer"},title:M},(0,i.jsx)(n.Radio,{style:{cursor:"pointer"},className:"m-0 mr-2",title:M,onChange:()=>this.handleDrawingElevationMode3DChange(r.DrawingElevationMode3D.OnTheGround),checked:this.props.config.drawingElevationMode3D===r.DrawingElevationMode3D.OnTheGround}),M))))))))}}})(),l})())}}}));