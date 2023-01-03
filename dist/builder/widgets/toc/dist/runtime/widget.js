System.register(["jimu-core","jimu-core/dnd","jimu-for-builder","jimu-for-builder/templates","jimu-layouts/layout-builder","jimu-layouts/layout-runtime","jimu-theme","jimu-ui","jimu-ui/advanced/resource-selector","jimu-ui/advanced/setting-components"],(function(e,t){var i={},o={},n={},s={},a={},l={},r={},d={},c={},p={};return{setters:[function(e){i.APP_FRAME_NAME_IN_BUILDER=e.APP_FRAME_NAME_IN_BUILDER,i.AppMode=e.AppMode,i.BrowserSizeMode=e.BrowserSizeMode,i.ContainerType=e.ContainerType,i.DialogMode=e.DialogMode,i.Immutable=e.Immutable,i.LayoutItemType=e.LayoutItemType,i.LayoutType=e.LayoutType,i.LinkType=e.LinkType,i.LoadingType=e.LoadingType,i.PageMode=e.PageMode,i.PagePart=e.PagePart,i.PageType=e.PageType,i.React=e.React,i.ReactRedux=e.ReactRedux,i.WidgetType=e.WidgetType,i.appActions=e.appActions,i.appConfigUtils=e.appConfigUtils,i.classNames=e.classNames,i.css=e.css,i.defaultMessages=e.defaultMessages,i.getAppStore=e.getAppStore,i.jsx=e.jsx,i.lodash=e.lodash,i.polished=e.polished,i.urlUtils=e.urlUtils},function(e){o.interact=e.interact},function(e){n.appConfigUtils=e.appConfigUtils,n.builderActions=e.builderActions,n.builderAppSync=e.builderAppSync,n.getAppConfigAction=e.getAppConfigAction,n.utils=e.utils},function(e){s.getWindowTemplates=e.getWindowTemplates},function(e){a.createDialogFromTemplate=e.createDialogFromTemplate,a.createPageFromTemplate=e.createPageFromTemplate,a.duplicateLayoutItem=e.duplicateLayoutItem,a.fixedLayoutActions=e.fixedLayoutActions,a.floatingLayoutItem=e.floatingLayoutItem,a.pendLayoutItem=e.pendLayoutItem,a.sinkingLayoutItem=e.sinkingLayoutItem,a.supportFloating=e.supportFloating,a.supportSinking=e.supportSinking},function(e){l.defaultMessages=e.defaultMessages},function(e){r.withTheme=e.withTheme},function(e){d.Button=e.Button,d.Collapse=e.Collapse,d.Dropdown=e.Dropdown,d.DropdownButton=e.DropdownButton,d.DropdownItem=e.DropdownItem,d.DropdownMenu=e.DropdownMenu,d.DropdownSubMenuItem=e.DropdownSubMenuItem,d.Icon=e.Icon,d.ListGroupItem=e.ListGroupItem,d.Modal=e.Modal,d.ModalBody=e.ModalBody,d.ModalFooter=e.ModalFooter,d.ModalHeader=e.ModalHeader,d.Tab=e.Tab,d.Tabs=e.Tabs,d.TextInput=e.TextInput,d.Tooltip=e.Tooltip,d.defaultMessages=e.defaultMessages},function(e){c.IconPicker=e.IconPicker},function(e){p.LinkSelectorSidePopper=e.LinkSelectorSidePopper,p.OpenTypes=e.OpenTypes,p.PageTemplatePopper=e.PageTemplatePopper,p.TemplateSelector=e.TemplateSelector,p.changeCurrentDialog=e.changeCurrentDialog,p.changeCurrentPage=e.changeCurrentPage,p.handelDialogInfos=e.handelDialogInfos}],execute:function(){e((()=>{var e={687:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.667 4.667 11.333 0 16 4.667l-4.667 4.666-4.666-4.666ZM0 1.333V8h6.667V1.333H0ZM6.667 16H0V9.333h6.667V16ZM8 16V9.333h6.667V16H8Z" fill="#000"></path></svg>'},6465:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.5 6a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5Zm0 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5Z" fill="#000"></path></svg>'},2640:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.29 6.208 8 1 .71 6.208a.5.5 0 1 0 .58.813L2 6.515V15h12V6.514l.71.507a.5.5 0 0 0 .58-.813ZM13 5.8 8 2.229 3 5.8V14h3v-4h4v4h3V5.8ZM9 14H7v-3h2v3Z" fill="#000"></path></svg>'},9775:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.154 3.154a.527.527 0 0 1 .746 0l1.317 1.317A8.618 8.618 0 0 1 8 4c2.667 0 5.667 1.333 7 4-.696 1.393-1.847 2.422-3.168 3.087l1.014 1.013a.527.527 0 1 1-.746.746l-1.317-1.317A8.617 8.617 0 0 1 8 12c-2.667 0-5.667-1.333-7-4 .696-1.393 1.847-2.422 3.168-3.087L3.154 3.9a.527.527 0 0 1 0-.746Zm1.698 2.443C3.726 6.087 2.782 6.882 2 8c1.422 2.033 3.382 3 6 3a8.66 8.66 0 0 0 2.03-.225l-.675-.674A2.5 2.5 0 0 1 5.9 6.644L4.852 5.598Zm6.296 4.805C12.275 9.912 13.218 9.118 14 8c-1.422-2.033-3.382-3-6-3-.726 0-1.402.074-2.03.225l.675.674a2.5 2.5 0 0 1 3.457 3.456l1.046 1.047ZM6.5 8c0-.221.048-.431.134-.62l1.987 1.986A1.5 1.5 0 0 1 6.5 8Zm.88-1.366 1.986 1.987a1.5 1.5 0 0 0-1.987-1.987Z" fill="#000"></path></svg>'},5369:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="#000"></path></svg>'},710:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 2c3.314 0 6 2.574 6 5.75s-2.686 5.75-6 5.75c-.78 0-1.524-.142-2.207-.402-.395-.15-1.66.151-3.793.902l.198-.52c.586-1.586.769-2.569.549-2.95A5.538 5.538 0 0 1 2 7.75C2 4.574 4.686 2 8 2Zm0 1C5.23 3 3 5.136 3 7.75c0 .809.212 1.587.613 2.28.282.49.294 1.153.068 2.09l-.08.304.155-.044c1.092-.306 1.81-.391 2.297-.248l.094.031A5.212 5.212 0 0 0 8 12.5c2.77 0 5-2.136 5-4.75S10.77 3 8 3ZM6 5H5v5h1V8h2v2h1V5H8v2H6V5Zm4 2h1v3h-1V7Zm1-2h-1v1h1V5Z" fill="#000"></path></svg>'},4767:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 2H2v2h12V2ZM2 1H1v4h14V1H2Zm2 7H2v6h2V8ZM2 7H1v8h4V7H2Zm6 1h6v6H8V8ZM7 7h8v8H7V7Z" fill="#000"></path></svg>'},5467:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 12c-2.667 0-5.667-1.333-7-4 1.333-2.667 4.333-4 7-4s5.667 1.333 7 4c-1.333 2.667-4.333 4-7 4Zm0-7c-2.618 0-4.578.967-6 3 1.422 2.033 3.382 3 6 3s4.578-.967 6-3c-1.422-2.033-3.382-3-6-3Zm0 5.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#000"></path></svg>'},8683:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 5H2v6h4V5ZM1 4v8h6V4H1ZM14 5h-4v6h4V5ZM9 4v8h6V4H9Z" fill="#000"></path></svg>'},760:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 2h12v4H2V2ZM1 7V1h14v6H1Zm1 3h12v4H2v-4Zm-1 5V9h14v6H1Z" fill="#000"></path></svg>'},1745:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 2h12v12H2V2ZM1 15V1h14v14H1Zm4-9h6v4H5V6Zm-1 5V5h8v6H4Z" fill="#000"></path></svg>'},4175:e=>{e.exports='<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 2a2 2 0 0 1 2-2v1a1 1 0 0 0-1 1H0ZM18 0v1a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2ZM2 20v-1a1 1 0 0 1-1-1H0a2 2 0 0 0 2 2ZM18 20v-1a1 1 0 0 0 1-1h1a2 2 0 0 1-2 2Z" fill="#000"></path><path d="M3 0h2v1H3V0ZM0 3h1v2H0V3ZM0 7h1v2H0V7ZM0 11h1v2H0v-2ZM0 15h1v2H0v-2ZM19 3h1v2h-1V3ZM19 7h1v2h-1V7ZM19 11h1v2h-1v-2ZM19 15h1v2h-1v-2ZM7 0h2v1H7V0ZM11 0h2v1h-2V0ZM15 0h2v1h-2V0ZM3 19h2v1H3v-1ZM7 19h2v1H7v-1ZM11 19h2v1h-2v-1ZM15 19h2v1h-2v-1Z" fill="#000"></path></svg>'},5543:e=>{e.exports='<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2ZM2 1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20 8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8ZM8 7h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" fill="#000"></path></svg>'},1513:e=>{e.exports='<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.167 0H1.833A.845.845 0 0 0 1 .857v10.286c0 .473.373.857.833.857h8.334c.46 0 .833-.384.833-.857V.857A.845.845 0 0 0 10.167 0ZM2 11V1h8v10H2Zm1.6-8h4.8c.331 0 .6.224.6.5s-.269.5-.6.5H3.6c-.331 0-.6-.224-.6-.5s.269-.5.6-.5Zm4.8 3H3.6c-.331 0-.6.224-.6.5s.269.5.6.5h4.8c.331 0 .6-.224.6-.5S8.731 6 8.4 6Z" fill="#000"></path></svg>'},9788:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .538.538 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.538.538 0 0 1 0-.738Z" fill="#000"></path></svg>'},3273:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0Z" fill="#000"></path></svg>'},6009:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .538.538 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.538.538 0 0 1 0 .738Z" fill="#000"></path></svg>'},1964:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5l-5 3V2a2 2 0 0 1 2-2h11Zm0 1H2a1 1 0 0 0-.994.883L1 2v12.233L4.723 12H13a1 1 0 0 0 .993-.883L14 11V2a1 1 0 0 0-.883-.993L13 1ZM7 3.5a.5.5 0 0 1 1 0V6h2.5a.5.5 0 0 1 0 1H8v2.5a.5.5 0 0 1-1 0V7H4.5a.5.5 0 0 1 0-1H7V3.5Z" fill="#000"></path></svg>'},6593:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.793.293A1 1 0 0 0 10.086 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4.914a1 1 0 0 0-.293-.707L10.793.293ZM2 1h8v4h4v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm11.086 3L11 1.914V4h2.086ZM7.5 5a.5.5 0 0 0-.5.5V8H4.5a.5.5 0 0 0 0 1H7v2.5a.5.5 0 0 0 1 0V9h2.5a.5.5 0 0 0 0-1H8V5.5a.5.5 0 0 0-.5-.5Z" fill="#000"></path></svg>'},224:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-1.27 4.936a6.5 6.5 0 1 1 .707-.707l4.136 4.137a.5.5 0 1 1-.707.707l-4.137-4.137Z" fill="#000"></path></svg>'},8891:e=>{"use strict";e.exports=i},4020:e=>{"use strict";e.exports=o},3137:e=>{"use strict";e.exports=n},6262:e=>{"use strict";e.exports=s},7282:e=>{"use strict";e.exports=a},4758:e=>{"use strict";e.exports=l},4796:e=>{"use strict";e.exports=r},726:e=>{"use strict";e.exports=d},663:e=>{"use strict";e.exports=c},7756:e=>{"use strict";e.exports=p}},t={};function g(i){var o=t[i];if(void 0!==o)return o.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,g),n.exports}g.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return g.d(t,{a:t}),t},g.d=(e,t)=>{for(var i in t)g.o(t,i)&&!g.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},g.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),g.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},g.p="";var h={};return g.p=window.jimuConfig.baseUrl,(()=>{"use strict";g.r(h),g.d(h,{default:()=>vt});var e=g(8891),t=g(3137),i=g(726),o=g(7282),n=g(4758),s=g(7756),a=g(4020);const l={tocChooseTemplate:"Select a page template",newPage:"New page",addPage:"Add page",addLink:"Add link",addFolder:"Add folder",addDialog:"Add window",makeHome:"Make homepage",makeSplash:"Set as splash",openedWithPages:"Opened with {pages}.",hideFromMenu:"Hide from menu",showFromMenu:"Show in menu",outline:"Outline",removePageTip:"There is(are) {subCount} subpage(s) in {label}, do you really want to remove it?",fullScreenApp:"Fullscreen app",fullScreenAppTip:"Best for creating a web app that takes the full area of the browser window.",scrollingPage:"Scrolling page",scrollingPageTip:"Best for creating a web page that scrolls in the browser window."},r="-toc-";class d extends e.React.Component{constructor(i){super(i),this.formatMessage=e=>this.props.intl.formatMessage({id:e,defaultMessage:l[e]}),this.handleArrowClick=e=>{const{onArrowClick:t,itemJson:i}=this.props;t&&t(i),e.stopPropagation()},this.handleClick=e=>{const{itemJson:t,editable:i}=this.props;t.allowEditable&&i&&e.stopPropagation()},this.handleMouseEnter=e=>{e.stopPropagation();const{itemJson:i}=this.props,o=i.id.split(r);o[0]&&o[1]&&t.builderAppSync.publishTocHoverInfoToApp({layoutId:o[0],layoutItemId:o[1]},!0)},this.handleMouseLeave=e=>{e.stopPropagation();const{itemJson:i}=this.props,o=i.id.split(r);o[0]&&o[1]&&t.builderAppSync.publishTocHoverInfoToApp({layoutId:o[0],layoutItemId:o[1]},!1)},this.handleDoubleClickItem=e=>{const{itemJson:t,onDoubleClick:i}=this.props;i&&i(t,e),e.stopPropagation()},this.renameItemClick=t=>{t&&t.stopPropagation(),this.editor&&e.lodash.defer((()=>{this.editor.focus(),this.editor.select()}))},this._checkLabel=(e,i,o)=>{if("view"===e&&o.includes(","))return{valid:!1,msg:this.formatMessage("noCommaInLabel")};const n=(0,t.getAppConfigAction)().appConfig;return t.appConfigUtils.isLabelDuplicated(n,e,i,o)?{valid:!1,msg:this.formatMessage("duplicatedLabel")}:{valid:!0}},this.onRenameAccept=t=>{e.lodash.defer((()=>{var e,i;null===(i=(e=this.props).renameItem)||void 0===i||i.call(e,this.props.itemJson,t)}))},this.editor=null}componentDidMount(){const{editable:e}=this.props;e&&this.renameItemClick()}componentDidUpdate(e){const{itemJson:t,editable:i}=this.props;t.label!==e.itemJson.label&&this.setState({currentLabel:t.label}),t.allowEditable&&i!==e.editable&&i&&this.renameItemClick()}}var c=g(3273),p=g.n(c);const u=t=>{const i=window.SVG,{className:o}=t,n=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",o);return i?e.React.createElement(i,Object.assign({className:s,src:p()},n)):e.React.createElement("svg",Object.assign({className:s},n))};class m extends d{constructor(t){super(t),this.onDropHover=e=>{this.state.dropType!==e&&this.setState({dropType:e})},this.labelChanged=e=>{this.setState({currentLabel:e})},this.handleLabelBlur=(e,t)=>{var i,o;let n=""!==e.trim();n&&(n=this._checkLabel("page",t,e).valid),n||(e=this.props.itemJson.label,null===(o=(i=this.props).renameItem)||void 0===o||o.call(i,this.props.itemJson,e)),this.labelChanged(e)},this.getStyle=()=>{var t,i,o;const n=(0,e.getAppStore)().getState(),s=null===(t=null==n?void 0:n.appContext)||void 0===t?void 0:t.isRTL,{theme:a,editable:l,itemJson:r,isTocDragging:d}=this.props,{mustShowArrow:c,children:p,level:g,isActive:h,isExpand:u}=r,{isDragging:m,isHovering:v}=this.state;return e.css`
      min-height: ${30}px;
      width: auto;
      min-width: 100%;
      align-items: center;
      cursor: pointer;
      ${m?"z-index: 100;":""}

      &.drag-move-into {
        border: 1px solid ${a.colors.palette.primary[700]};
      }

      .page-item-home-btn {
        display: ${r.showDefault&&(null===(i=null==r?void 0:r.data)||void 0===i?void 0:i.isDefault)&&!l?"inline-flex":"none"};
      }

      :hover {
        ${h||d?"":`background-color: ${a.colors.palette.light[400]};`}
        .dropDown {
          .btn {
            display: ${d||l?"none":"inline-flex"};
          }
          z-index: 2;
        }
        .page-item-visible-btn {
          display: ${d||l?"none":"inline-flex"};
          z-index: 2;
        }
        .page-item-home-btn {
          display: ${r.showDefault?d&&!(null===(o=null==r?void 0:r.data)||void 0===o?void 0:o.isDefault)||l?"none":"inline-flex":"none"};
          z-index: 2;
        }
      }

      &.active {
        ${d?"":`background-color: ${a.colors.primary};`}
        border: 0;
      }

      .toc-item-dropzone {
        touch-action: none;
        position: relative;

        .toc-item-drag:hover {
          cursor: pointer !important;
        }

        .toc-item-drag {
          pointer-events: ${v?"all":"none"};
          visibility: ${r.allowEditable&&l?"hidden":"visible"};
          z-index: 1;
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background-color: ${m?e.polished.rgba(a.colors.palette.light[400],.6):"transparent"};
          box-shadow: ${m?a.boxShadows.lg:a.boxShadows.none};
        }

        .toc-item {
          padding: 0;
          border: 0;
          position: relative;
          .toc-item-content {
            margin-left: ${10*g}px;
            position: relative;
            .toc-arrow {
              z-index: 2;
              padding-right: ${e.polished.rem(1)};
              visibility: ${c||p&&p.length>0?"visible":"hidden"};
              .toc-arrow-icon {
                fill: ${a.colors.black};
                transform-origin: center;
                transform: ${`rotate(${u?90:s?180:0}deg)`};
                transition: transform .5s;
              }
            }

            .left-and-right {
              overflow-x: hidden;
              margin-left: -5px;
              .left-content {
                align-items: center;
                overflow-x: hidden;
                flex: auto;
                .editor {
                  overflow: hidden;
                  text-overflow: ${l?"clip":"ellipsis"};
                  white-space: nowrap;
                  font-size: ${.875}rem;
                  user-select: none;
                  flex: auto;
                  text-align: start;
                }
                [contenteditable="true"] {
                  user-select: text;
                  -webkit-user-select: text;
                  background-color: ${a.colors.white};
                }
                .header-icon {
                  margin-right: 0.3rem;
                  flex: none;
                }
              }
            }
          }

          &.toc-drag-move-last {
            :after{
              content: '';
              position: absolute;
              left: 0;
              top: auto;
              bottom: 0;
              right: auto;
              height: 2px;
              width: 100%;
              background-color: ${a.colors.palette.primary[700]};
            }
          }

          &.toc-drag-move-first {
            :before {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              bottom: auto;
              right: auto;
              height: 2px;
              width: 100%;
              background-color: ${a.colors.palette.primary[700]};
            }
          }

          .drag-move-out-order-bottom {
            :after{
              content: '';
              position: absolute;
              left: 0;
              top: auto;
              bottom: 0;
              right: auto;
              height: 2px;
              width: 100%;
              background-color: ${a.colors.palette.primary[700]};
            }
          }

          .drag-move-out-order-top {
            :before {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              bottom: auto;
              right: auto;
              height: 2px;
              width: 100%;
              background-color: ${a.colors.palette.primary[700]};
            }
          }
        }
      }
    `},this.state={dropType:"none",isDragging:!1,isHovering:!1,currentLabel:this.props.itemJson.label},this.dropZoneRef=e.React.createRef(),this.dragRef=e.React.createRef()}componentWillUnmount(){this.dragInteractable&&(this.dragInteractable.unset(),this.dragInteractable=null),this.dropZoneInteractable&&(this.dropZoneInteractable.unset(),this.dropZoneInteractable=null)}componentDidMount(){super.componentDidMount();const{canDnd:e,canDragFunc:t,canDropFunc:i,onDidDrop:o,canOrderFunc:n,canDropIntoFunc:s,itemJson:l}=this.props,{index:r}=l;if(e&&this.dropZoneRef.current&&this.dragRef.current){let e=null;this.dropZoneInteractable=(0,a.interact)(this.dropZoneRef.current).dropzone({accept:".toc-item-drag",overlap:"pointer",ondropmove:e=>{const t=e.relatedTarget,o=e.target,a=JSON.parse(t.getAttribute("data-itemJson"));if(!i||!i(l.data,a.data))return;const d=o.getBoundingClientRect(),c=d.bottom-d.top,p=2*c/3,g=1*c/3,h=c/2,u=e.dragEvent.client.y-d.top;let m=this.state.dropType;m=n&&n(a.data,l.data)?s&&s(a.data,l.data)?u>p?"bottom":u<g?"top":"moveInto":0===r?u>h?"bottom":"top":"bottom":s&&s(a.data,l.data)?"moveInto":"none",this.onDropHover(m)},ondragleave:e=>{this.onDropHover("none")},ondropactivate:e=>{this.dragRef.current.setAttribute("data-itemJson",JSON.stringify(l))},ondrop:e=>{const t=this.state.dropType;if("none"===t)return;const i=e.relatedTarget,n=JSON.parse(i.getAttribute("data-itemJson"));o&&o(n,l,t),this.onDropHover("none")}}),t&&t(l.data)&&(this.dragInteractable=(0,a.interact)(this.dragRef.current).draggable({inertia:!1,modifiers:[],autoScroll:!0,onstart:e=>{this.setState({isDragging:!0});const{onTocDragStatusChage:t}=this.props;t&&t(!0)},onmove:t=>{const{clientX:i,clientY:o,clientX0:n,clientY0:s,target:a}=t,l=parseFloat(a.getAttribute("start-x"))||0,r=parseFloat(a.getAttribute("start-y"))||0;let d=i-n+l,c=o-s+r;const p=-a.clientWidth/2,g=a.clientWidth/2;d<p?d=p:d>g&&(d=g);const{parentBoundBottom:h,parentBoundTop:u}=this.props;if(h>-1&&u>-1){const e=u-s,t=h-s;c<=e?c=e:c>=t&&(c=t)}e&&cancelAnimationFrame(e),e=requestAnimationFrame((()=>{a.style.webkitTransform=a.style.transform="translate("+d+"px, "+c+"px)",e=null}))},onend:t=>{const{target:i}=t;e&&cancelAnimationFrame(e),i.style.webkitTransform=i.style.transform="translate(0px, 0px)",this.setState({isDragging:!1});const{onTocDragStatusChage:o}=this.props;o&&o(!1)}}))}}componentDidUpdate(e){super.componentDidUpdate(e)}render(){const{itemJson:t,renderRightContent:o,editable:n,canDnd:s,theme:a,isFirstItem:l,isLastItem:r,tocDraggingStatus:d,isTocDragging:c}=this.props,{icon:p}=t,{dropType:g,isDragging:h}=this.state;let m;m=p&&p.svg?p:{svg:p};const v="moveInto"===g?"drag-move-into":"",f="drag-move-out-order-"+g;let b="";return c&&"on"!==d&&("bottom"===d&&r?b="toc-drag-move-last":"top"===d&&l&&(b="toc-drag-move-first")),(0,e.jsx)("div",{className:`d-flex ${t.isActive?"active":""}   ${v}`,css:this.getStyle(),onMouseEnter:e=>this.setState({isHovering:!0}),onMouseLeave:e=>this.setState({isHovering:!1})},(0,e.jsx)("div",{ref:this.dropZoneRef,className:"toc-item-dropzone h-100 w-100"},(0,e.jsx)("div",{className:"d-flex w-100 h-100",onDoubleClick:this.handleDoubleClickItem,onClick:this.handleClick},(0,e.jsx)("div",{className:`d-flex justify-content-between w-100 toc-item ${b}`},(0,e.jsx)("div",{className:`d-flex toc-item-content ${f} w-100`},(0,e.jsx)(i.Button,{className:"toc-arrow jimu-outline-inside","aria-expanded":t.isExpand,icon:!0,type:"tertiary",onClick:this.handleArrowClick},(0,e.jsx)(u,{className:"toc-arrow-icon",size:"s"})),(0,e.jsx)("div",{className:"left-and-right d-flex justify-content-between w-100"},(0,e.jsx)("div",{className:"d-flex left-content "+(o?"pr-0":"pr-2")},p&&(0,e.jsx)(i.Icon,{autoFlip:t.needFlip,className:"header-icon",color:a.colors.palette.dark[600],size:12,icon:m.svg}),(0,e.jsx)("div",{title:this.state.currentLabel,className:"item-label editor"},t.allowEditable&&n?(0,e.jsx)(i.TextInput,{size:"sm",ref:e=>{this.editor=e},value:this.state.currentLabel,onChange:e=>this.labelChanged(e.target.value),onAcceptValue:this.onRenameAccept,checkValidityOnChange:e=>this._checkLabel("page",t.id,e),checkValidityOnAccept:e=>this._checkLabel("page",t.id,e),onBlur:e=>this.handleLabelBlur(e.target.value,t.id)}):(0,e.jsx)(e.React.Fragment,null,this.state.currentLabel))),o&&o(t)))),s&&(0,e.jsx)("div",{className:"toc-item-drag",ref:this.dragRef},h&&(0,e.jsx)("div",{className:"d-flex justify-content-between w-100 toc-item"},(0,e.jsx)("div",{className:"d-flex toc-item-content w-100"},(0,e.jsx)(i.Button,{icon:!0,type:"tertiary",className:"toc-arrow"},(0,e.jsx)(u,{className:"toc-arrow-icon",size:"s"})),(0,e.jsx)("div",{className:"left-and-right d-flex justify-content-between w-100"},(0,e.jsx)("div",{className:"d-flex left-content "+(o?"pr-0":"pr-2")},p&&(0,e.jsx)(i.Icon,{className:"header-icon",size:12,icon:p}),(0,e.jsx)("div",{title:this.state.currentLabel,className:"item-label editor"},this.state.currentLabel)),o&&o(t))))))))}}var v=g(5369),f=g.n(v);const b=t=>{const i=window.SVG,{className:o}=t,n=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",o);return i?e.React.createElement(i,Object.assign({className:s,src:f()},n)):e.React.createElement("svg",Object.assign({className:s},n))};class y extends e.React.PureComponent{constructor(t){super(t),this.onDropDownToggle=e=>{const{isOpen:t}=this.state;e.stopPropagation(),!this.dontDismiss&&this.setState({isOpen:!t}),this.dontDismiss=!1},this.onItemClick=(e,t)=>{t.autoHide||void 0===t.autoHide?this.setState({isOpen:!1}):this.dontDismiss=!0,t.event(e)},this.getInteractiveNodeStyle=t=>{var i,o;if("div"!==t)return e.css``;const n=null===(o=null===(i=this.props.theme)||void 0===i?void 0:i.components)||void 0===o?void 0:o.dropdown;return e.css`
        padding: 0 !important;
        .toc-dropdown-item {
          padding: 0.25rem 0.5rem;
          outline: none;
          border: none;

          &:hover, &:focus {
            outline: none;
            border: none;
            background-color: ${n.link.hoverBg};
          }
        }
    `},this.state={isOpen:!1}}render(){const{items:t,toggleContent:o,direction:n,disabled:s,title:a,icon:l,caret:r,insideOutline:d=!1,supportInsideNodesAccessible:c=!1,avoidNestedToggle:p,delayToggle:g}=this.props,{isOpen:h}=this.state;return(0,e.jsx)("div",{className:"d-flex align-items-center"},(0,e.jsx)(i.Dropdown,{direction:n||"down",size:"sm",toggle:this.onDropDownToggle,isOpen:h,useKeyUpEvent:!0,supportInsideNodesAccessible:c},(0,e.jsx)(i.DropdownButton,{title:a,arrow:r,icon:l||void 0===l,disabled:s,size:"sm",type:"tertiary",className:(0,e.classNames)("item-inside-button",{"jimu-outline-inside":d})},o||(0,e.jsx)(b,null)),(0,e.jsx)(i.DropdownMenu,{avoidNestedToggle:p,delayToggle:g},t.map(((t,o)=>{var n;const{tag:s="button"}=t;return(t.visible||void 0===t.visible)&&(t.isBtn?(0,e.jsx)(e.React.Fragment,{key:o},t.label):(0,e.jsx)(i.DropdownItem,{tag:s,a11yFocusBack:t.a11yFocusBack,key:o,title:null!==(n=t.title)&&void 0!==n?n:"",className:"no-user-select",css:this.getInteractiveNodeStyle(s),onClick:e=>this.onItemClick(e,t),divider:t.divider},t.label))})))))}}y.defaultProps={caret:!1};class I extends e.React.PureComponent{constructor(e){super(e),this.onItemClick=(e,t)=>{t.event(e)},this.state={}}render(){const{items:t,toggleContent:o,direction:n,disabled:s,title:a,icon:l,caret:r}=this.props;return(0,e.jsx)(i.DropdownSubMenuItem,{direction:n},(0,e.jsx)(i.DropdownButton,{title:a,arrow:r,icon:l||void 0===l,disabled:s,size:"sm",type:"tertiary"},o||(0,e.jsx)(b,null)),(0,e.jsx)(i.DropdownMenu,null,t.map(((t,o)=>{var n,s;return(t.visible||void 0===t.visible)&&(t.isBtn?(0,e.jsx)(i.DropdownSubMenuItem,{key:o,title:null!==(n=t.title)&&void 0!==n?n:"",onClick:e=>this.onItemClick(e,t)},t.label):(0,e.jsx)(i.DropdownItem,{key:o,title:null!==(s=t.title)&&void 0!==s?s:"",className:"no-user-select",onClick:e=>this.onItemClick(e,t)},t.label))}))))}}var x=g(4796);class w extends e.React.PureComponent{constructor(){super(...arguments),this.handleArrowClick=e=>{e.stopPropagation();const{handleExpand:t}=this.props;t&&t()},this.getStyle=()=>{const{theme:t,itemJson:i,level:o}=this.props,{mustShowArrow:n,children:s,isActive:a,isExpand:l}=i;return e.css`
      height: ${30}px;
      width: 100%;
      align-items: center;
      border: 0;
      cursor: pointer;

      &.active {
        background-color: ${t.colors.palette.primary[100]};
        border: 0;
      }

      :hover {
        ${a?"":`background-color: ${e.polished.rgba(t.colors.palette.light[400],.4)};`}
      }

      .tree-item-content {
        padding: 0;
        padding-left: ${30*o}px;
        border: 0;

        .tree-arrow {
          visibility: ${n||s&&s.length>0?"visible":"hidden"};
          height: 24px;
          padding-right: 5px;
          padding-left: 5px;
          width: auto;
          display: flex;
          align-self: center;
          align-items: center;
          justify-content: center;
          transform-origin: center;
          transform: ${`rotate(${l?90:0}deg)`};
          transition: transform .5s;
          .tree-arrow-icon {
            fill: ${t.colors.black};
          }
        }

        .left-and-right {
          overflow-x: hidden;
          .left-content {
            align-items: center;
            overflow-x: hidden;
            flex: auto;
            .item-label{
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: ${.875}rem;
              text-align: start;
            }
            .header-icon {
              margin-right: 0.5rem;
              fill: ${t.colors.black};
            }
          }
        }
      }
    `}}render(){const{itemJson:t,renderRightContent:o,renderHeaderContent:n,arrowIcon:s}=this.props,{icon:a,isActive:l}=t;return(0,e.jsx)("div",{className:`d-flex ${l?"active":""} tree-item-common`,css:this.getStyle()},(0,e.jsx)("div",{className:"d-flex tree-item-content w-100"},(0,e.jsx)("div",{className:"tree-arrow",onClick:this.handleArrowClick},s?s(t):(0,e.jsx)(u,{className:"tree-arrow-icon",size:"s"})),(0,e.jsx)("div",{className:"left-and-right d-flex justify-content-between w-100"},n?n(t):(0,e.jsx)("div",{className:"d-flex left-content "+(o?"pr-0":"pr-2")},a&&(0,e.jsx)(i.Icon,{className:"header-icon",size:12,icon:a}),(0,e.jsx)("div",{title:t.label,className:"item-label"},t.label)),o&&o(t))))}}class S extends e.React.PureComponent{constructor(t){super(t),this.handleClickItem=(e,t=!1)=>{this.setState({isKeyboardMode:t});const{onClickItem:i,itemJson:o}=this.props;i&&i(o,e)},this.shouldHandleKeyEvent=e=>"INPUT"!==e.target.tagName&&("Enter"===e.key||" "===e.key),this.handleKeydownItem=e=>{this.shouldHandleKeyEvent(e)?e.preventDefault():"Tab"===e.key&&this.setState({isKeyboardMode:!0})},this.handleKeyUpItem=e=>{this.shouldHandleKeyEvent(e)&&(e.preventDefault(),this.handleClickItem(e,!0))},this.getStyle=t=>this.state.isKeyboardMode?e.css`
        &.jimu-tree-item{
          padding: 0;
          margin: 0;
          border: 0;
          &:focus,
          &:focus-within {
            .item-inside-button {
              display: inline-flex;

              &.page-item-home-btn {
                display: ${t===e.PageType.Normal?"inline-flex":"none"}
              }
            }

            .item-action-button {
              display: block;
              .dropDown .btn {
                visibility: visible;
              }
            }
          }
        }
      `:e.css`
        &.jimu-tree-item{
          padding: 0;
          margin: 0;
          border: 0;
        }
      `,this.state={isFocus:!1,isKeyboardMode:!1}}render(){var t;const{itemJson:o,theme:n,level:s,handleExpand:a}=this.props,{renderItem:l,renderHeaderContent:r,renderRightContent:d,arrowIcon:c,className:p}=o;return(0,e.jsx)(i.ListGroupItem,{css:this.getStyle(null===(t=null==o?void 0:o.data)||void 0===t?void 0:t.type),role:"option",tabIndex:0,"aria-checked":o.isActive,"aria-label":o.label,onClick:this.handleClickItem,onKeyDown:this.handleKeydownItem,onKeyUp:this.handleKeyUpItem,className:(0,e.classNames)("jimu-tree-item","d-flex","jimu-outline-inside",p||"")},(0,e.jsx)("div",{className:"w-100",ref:e=>{this.itemRef=e}},l?l(o):(0,e.jsx)(w,{itemJson:o,level:s,renderHeaderContent:r,renderRightContent:d,arrowIcon:c,theme:n,handleExpand:a})))}}class C extends e.React.PureComponent{constructor(t){var i;super(t),this.handleSingleClick=(e,t)=>{const{onClickItem:i}=this.props;i&&i(e,t)},this.handleExpand=()=>{const{handleExpand:e}=this.props;let{itemJson:t}=this.props;t=t.set("isExpand",!t.isExpand),e&&e(t)},this.renderSubItemsTimeout=void 0,this.SingleTreeItem=({itemJson:t,level:i})=>e.React.createElement(S,{key:t.id,itemJson:t,level:i,handleExpand:this.handleExpand,onClickItem:this.handleSingleClick,theme:this.props.theme}),this.state={renderSubItems:null===(i=t.itemJson)||void 0===i?void 0:i.isExpand}}componentDidUpdate(e){const{itemJson:t}=this.props,{itemJson:i}=e;(null==t?void 0:t.isExpand)!==(null==i?void 0:i.isExpand)&&(this.renderSubItemsTimeout&&(clearTimeout(this.renderSubItemsTimeout),this.renderSubItemsTimeout=void 0),(null==t?void 0:t.isExpand)?this.setState({renderSubItems:!0}):this.renderSubItemsTimeout=setTimeout((()=>{this.setState({renderSubItems:!1})}),1e3))}render(){const{itemJson:t,level:o}=this.props,{SingleTreeItem:n}=this,{renderSubItems:s}=this.state;return e.React.createElement(e.React.Fragment,null,e.React.createElement(n,{key:t.id,itemJson:t,level:o}),t.children&&t.children.length>0&&e.React.createElement("div",{className:"out-container"},e.React.createElement("div",{className:"in-container"},e.React.createElement(i.Collapse,{isOpen:t.isExpand,role:"group"},s&&this.props.children))))}}const P=(e,t)=>t.label.toLocaleLowerCase().includes(e.toLocaleLowerCase()),D=(e,t,i)=>i(t,e)||e.children&&e.children.length&&!!e.children.find((e=>D(e,t,i))),T=(t,i,o=P)=>{if(o(i,t)||!t.children)return t;const n=t.children.filter((e=>D(e,i,o))).map((e=>T(e,i,o)));return(0,e.Immutable)(Object.assign({},t,{children:n}))},j=(t,i,o=P)=>{let n=t.children;if(!n||0===n.length)return(0,e.Immutable)(Object.assign({},t,{isExpand:!1}));const s=n.filter((e=>D(e,i,o))),a=s.length>0;return a&&(n=s.map((e=>j(e,i,o)))),(0,e.Immutable)(Object.assign({},t,{children:n,isExpand:a}))},k=(e,t)=>{const i=e.children;i&&i.length>0&&i.forEach(((i,o)=>{e=e.setIn(["children",o],k(i,t))}));const o=t.includes(e.id);return e.set("isExpand",o)},O=(e,t)=>{const i=e.children;i&&i.length>0&&i.forEach(((i,o)=>{e=e.setIn(["children",o],O(i,t))}));const o=t.includes(e.id);return e.set("isActive",o)},A=(e,t)=>{if(!e)return null;let i=null==e?void 0:e.children;i&&i.length>0&&i.forEach(((i,o)=>{e=e.setIn(["children",o],A(i,t))})),i=null==e?void 0:e.children;const o=t.includes(null==e?void 0:e.id),n=(null==e?void 0:e.isExpand)||R(i);return e.set("isActive",o).set("isExpand",n)},M=e=>{if(!e)return[];const t=[],i=null==e?void 0:e.children;return i&&i.length>0&&i.forEach((e=>t.push(...M(e)))),(null==e?void 0:e.isExpand)&&t.push(null==e?void 0:e.id),t},R=e=>!!e&&!!e.find((e=>e.isActive||R(e.children)));class L extends e.React.PureComponent{constructor(t){super(t),this.handleSingleClick=(e,t)=>{const{onClickItem:i}=this.props;i&&i(e,t)},this.handleExpand=e=>{const{handleExpand:t}=this.props;t&&t(e)},this.renderItemJson=t=>e.React.createElement(C,{key:t.id,handleExpand:this.handleExpand,itemJson:t,onClickItem:this.handleSingleClick,theme:this.props.theme},t.children&&t.children.map((e=>this.renderItemJson(e)))),this.state={itemJsons:t.itemJsons}}render(){const{itemJson:t,className:i,hideRoot:o,forwardRef:n}=this.props;return e.React.createElement("div",{className:(0,e.classNames)("jimu-tree",i),ref:n,role:"listbox"},o?t&&t.children&&t.children.map((e=>this.renderItemJson(e))):this.renderItemJson(t))}}const N=(0,x.withTheme)(L);class E extends e.React.PureComponent{constructor(t){super(t),this.handleCloseBtn=()=>{this.isActionClick=!1,this.setState({isOpen:!1});const{toggle:e,isOpen:t}=this.props;void 0!==t&&e&&e()},this.handleActionClick=()=>{this.isActionClick=!0,this.setState({isOpen:!1});const{toggle:e,isOpen:t}=this.props;void 0!==t&&e&&e()},this.handleToggle=()=>{const{isOpen:e,tapBlankClose:t}=this.props;if(!t)return;this.setState({isOpen:!e});const{toggle:i,isOpen:o}=this.props;void 0!==o&&i&&i()},this.onModalClosed=()=>{const{onClosed:e}=this.props;e&&e(this.isActionClick),this.isActionClick=!1},this.getStyle=()=>{const t=this.props.theme;return e.css`
      .modal-header {
        .close {
          color: ${t.colors.palette.dark[600]};
          opacity: 1;
          transition: color .15s ease-in-out;
          &:not(:disabled):not(.disabled):hover,
          &:not(:disabled):not(.disabled):focus {
            opacity: 1;
          }
        }
      }
      .modal-body{
        overflow-y: auto;
        max-height: 360px;
      }
      .modal-content{
        width: auto;
      }
      .modal-footer{
        .btn {
          min-width: 80px;
          + .btn {
            margin-left: 10px;
          }
        }
      }
      &.modal-dialog{
        width: auto;
      }
      .choose-template-description{
        width: 100%;
        font-size: ${14/17}rem;
        user-select:none;
      }
    `},this.state={isOpen:!!t.isOpen}}componentDidUpdate(e){const{isOpen:t}=e;void 0!==t&&void 0===this.props.isOpen&&this.setState({isOpen:t})}render(){let{isOpen:t}=this.props;const{isRemove:o}=this.props;return t=void 0===t?this.state.isOpen:t,(0,e.jsx)(i.Modal,{css:this.getStyle(),isOpen:t,onClosed:this.onModalClosed,toggle:this.handleToggle,centered:!0},(0,e.jsx)(i.ModalHeader,{tag:"h4",toggle:this.handleCloseBtn},this.props.title),(0,e.jsx)(i.ModalBody,null,(0,e.jsx)("div",{style:{marginLeft:"10px"}},this.props.children)),(0,e.jsx)(i.ModalFooter,null,(0,e.jsx)(i.Button,{type:o?"danger":"primary",onClick:this.handleActionClick},o?this.props.formatMessage("delete"):this.props.formatMessage("ok")),(0,e.jsx)(i.Button,{onClick:this.handleCloseBtn},this.props.formatMessage("cancel"))))}}const B=e.React.forwardRef(((t,o)=>{const{onKeyDown:n,onClick:s}=t,a=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i}(t,["onKeyDown","onClick"]);return e.React.createElement(i.Button,Object.assign({ref:o},a,{onClick:s,onKeyDown:e=>{!s||"Enter"!==e.key&&" "!==e.key||e.preventDefault()},onKeyUp:e=>{!s||"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),s(e))}}))}));var J=g(663),F=g(6593),$=g.n(F);const z=t=>{const i=window.SVG,{className:o}=t,n=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",o);return i?e.React.createElement(i,Object.assign({className:s,src:$()},n)):e.React.createElement("svg",Object.assign({className:s},n))};var H=g(9788),V=g.n(H);const Z=t=>{const i=window.SVG,{className:o}=t,n=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",o);return i?e.React.createElement(i,Object.assign({className:s,src:V()},n)):e.React.createElement("svg",Object.assign({className:s},n))};var U=g(2640),G=g.n(U);const W=t=>{const i=window.SVG,{className:o}=t,n=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",o);return i?e.React.createElement(i,Object.assign({className:s,src:G()},n)):e.React.createElement("svg",Object.assign({className:s},n))};var _=g(5467),K=g.n(_);const q=t=>{const i=window.SVG,{className:o}=t,n=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",o);return i?e.React.createElement(i,Object.assign({className:s,src:K()},n)):e.React.createElement("svg",Object.assign({className:s},n))};var X=g(9775),Y=g.n(X);const Q=t=>{const i=window.SVG,{className:o}=t,n=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",o);return i?e.React.createElement(i,Object.assign({className:s,src:Y()},n)):e.React.createElement("svg",Object.assign({className:s},n))},ee=(0,e.jsx)(Z,{className:"add-page-more-icon"}),te={value:"",openType:s.OpenTypes.NewWindow,linkType:e.LinkType.WebAddress};let ie;const oe=[{name:"offset",options:{offset:[0,10]}}];class ne extends e.React.PureComponent{constructor(o){super(o),this.linkSettingTrigger=e.React.createRef(),this.getTotalLines=()=>{const{itemJson:e}=this.state;let t=0;return e.children&&e.children.forEach((e=>{var i,o;t++,e.isExpand&&(t+=null!==(o=null===(i=e.children)||void 0===i?void 0:i.length)&&void 0!==o?o:0)})),t},this.getTreeContentHeight=()=>30*this.getTotalLines(),this.handleOnTocDragStatusChange=e=>{this.setState({isTocDragging:e,itemJson:this.getItemJsonByPages()})},this.handleOnTocDraggingStatusChange=e=>{this.setState({tocDraggingStatus:e,itemJson:this.getItemJsonByPages()})},this.handleChooseTemplate=e=>{this.setState({isTemplatePopoverOpen:!1}),this.props.addPageWithType("page",e)},this.handleToggleTemplatePopover=()=>{const{isTemplatePopoverOpen:e}=this.state;this.setState({isTemplatePopoverOpen:!e})},this.closeTemplatePopover=()=>{this.state.isTemplatePopoverOpen&&(this.templateBtn.focus(),this.setState({isTemplatePopoverOpen:!1}))},this.handleRemovePage=e=>{(0,t.getAppConfigAction)().appConfig.pageStructure.find((t=>t[e.id]&&t[e.id].length>0))?(this.setState({willRemovePage:e}),this.handleToggleRemovePopover()):(ie===e.id&&this.setState({isShowLinkSetting:!1}),this.props.removePage(e.id))},this.handleToggleRemovePopover=()=>{const{isRemovePopoverOpen:e}=this.state;this.setState({isRemovePopoverOpen:!e})},this.singleAndDoubleClickTimeout=void 0,this.handleClickItem=t=>{t.data.type!==e.PageType.Folder&&t.data.type!==e.PageType.Link&&(this.singleAndDoubleClickTimeout&&(clearTimeout(this.singleAndDoubleClickTimeout),this.singleAndDoubleClickTimeout=void 0),this.singleAndDoubleClickTimeout=setTimeout((()=>{this.setState({currentSelectedItemId:t.id,itemJson:A(this.state.itemJson,[t.id])},(()=>{this.props.onClickPage(t.data.id)}))}),200))},this.handleOnTocDoubleClick=(e,t)=>{this.singleAndDoubleClickTimeout&&(clearTimeout(this.singleAndDoubleClickTimeout),this.singleAndDoubleClickTimeout=void 0),this.props.changeEditablePageItemId(e.id),t.stopPropagation()},this.handleOnSetLinkClick=(e,t)=>{ie&&e.data.id===ie&&this.state.isShowLinkSetting||(ie=e.data.id,this.resetLinkParam(ie),this.state.isShowLinkSetting?this.setState({isShowLinkSetting:!1},(()=>{this.setState({isShowLinkSetting:!0})})):this.setState({isShowLinkSetting:!0}),t.stopPropagation())},this.handleExpand=e=>{if((!e.children||e.children.length<1)&&!e.mustShowArrow)return;const{expandIds:t}=this;e.isExpand?t.includes(e.id)&&t.splice(t.indexOf(e.id),1):t.includes(e.id)||t.push(e.id),this.setState({itemJson:k(this.state.itemJson,t)})},this.handleArrowClick=e=>{this.handleExpand(e)},this.handleSearchTextChange=e=>{this.setState({filterText:e},(()=>{this.setState({itemJson:this.getItemJsonByPages()})}))},this.handleSearchSubmit=e=>{this.setState({filterText:e},(()=>{this.setState({itemJson:this.getItemJsonByPages()})}))},this.handleSearchBtnClick=e=>{e.stopPropagation();const{showSearch:t}=this.state;t?this.handleSearchTextChange(""):this.searchInput&&(this.searchInput.focus(),this.searchInput.select()),this.setState({showSearch:!t})},this.handleSettingLinkConfirm=e=>{this.setState({isShowLinkSetting:!1}),this.changeUrl(e.value,e.openType)},this.changeUrl=(i,o)=>{const{pages:n}=this.props,s=n[ie],a=(0,e.Immutable)(s).merge({linkUrl:i||"#",openTarget:o});(0,t.getAppConfigAction)().editPage(a).exec(),te.value=i,te.openType=o},this.renamePage=(e,t)=>(this.props.changeEditablePageItemId(""),!!(null==t?void 0:t.trim())&&this.props.renamePage(e.data.id,t)),this.getFirstItemJson=()=>{const{itemJson:e}=this.state;return e.children[0]},this.getLastItemJson=()=>{const{itemJson:e}=this.state;let t=e.children[e.children.length-1];return t.isExpand&&t.children&&t.children.length>0&&(t=t.children[t.children.length-1]),t},this.getLastParentItemJson=()=>{const{itemJson:e}=this.state;return e.children[e.children.length-1]},this.onDidDrop=(t,i,o)=>{e.lodash.defer((()=>{if(this.treeRef.querySelectorAll(".toc-item-drag").forEach((e=>{e.setAttribute("data-itemJson",null)})),"moveInto"===o){this.props.movePageIntoPage(t.data.id,i.data.id);const{expandIds:e}=this;e.includes(i.id)||(e.push(i.id),this.setState({itemJson:k(this.state.itemJson,e)}))}else this.props.reOrderPage(t.data.id,i.data.id,o)}))},this.canDragFunc=e=>!0,this.canDropFunc=(e,t)=>e.id!==t.id,this.canDropIntoFunc=(i,o)=>{const n=(0,t.getAppConfigAction)().appConfig;return t.appConfigUtils.isFirstLevelPage(n,o.id)&&!t.appConfigUtils.isPageHasSubPage(n,i.id)&&i.type!==e.PageType.Folder},this.canOrderFunc=(i,o)=>{const n=(0,t.getAppConfigAction)().appConfig;return!(i.type===e.PageType.Folder&&!t.appConfigUtils.isFirstLevelPage(n,o.id))},this.getItemJsonByPageJson=(i,o,n)=>{const s=i.id,{expandIds:a}=this,{currentPageItemId:l}=this.props,r=a.includes(s),d={id:s,data:i,label:i.label,index:o,level:n,isActive:l===s,isExpand:r,mustShowArrow:i.type===e.PageType.Folder,showDefault:i.type===e.PageType.Normal,allowEditable:!0,renderItem:this.renderPageContent};return d.icon=i.icon,d.icon||(d.icon=t.utils.getDefaultTocPageIcon(i)),d},this.getItemJsonByPages=(i,o)=>{i||(i=this.props.pages),o||(o=this.props.pageStructure);const n={id:"ROOT",children:[],label:""};if(!i||!o)return(0,e.Immutable)(n);let s=o.map(((e,t)=>{const o=Object.keys(e)[0],n=i[o],s=this.getItemJsonByPageJson(n,t,0),a=e[o];return s.children=[],a.forEach(((e,t)=>{const o=i[e],n=this.getItemJsonByPageJson(o,t,1);s.children.push(n)})),s}));if(this.props.isPageTemplateLoading){const i=(0,t.getAppConfigAction)().appConfig,n={id:t.appConfigUtils.getUniqueId(i,"page"),label:t.appConfigUtils.getUniqueLabel(i,"page",this.props.formatMessage("page")),type:e.PageType.Normal},a=this.getItemJsonByPageJson(n,o.length,0);a.children=[],s=s.asMutable({deep:!0}),s.push(a)}n.children=s;let a=(0,e.Immutable)(n);const{filterText:l}=this.state;if(l&&""!==l){const e=T(a,l.trim());a=j(e,l.trim())}return a},this.getMoreDropDownItems=i=>{const o=i.data,n=[],s=(0,e.Immutable)({a11yFocusBack:!1,label:this.props.formatMessage("rename"),event:e=>{this.handleOnTocDoubleClick(i,e)},visible:!0});n.push(s);const a=(0,e.Immutable)({label:this.props.formatMessage("setLink"),event:e=>{this.handleOnSetLinkClick(i,e)},visible:o.type===e.PageType.Link});n.push(a);const l="string"==typeof i.icon?{svg:i.icon}:i.icon,r=(0,e.Immutable)({label:(0,e.jsx)(J.IconPicker,{icon:l,showIcon:!1,showLabel:!0,hideRemove:!0,customLabel:this.props.formatMessage("setIcon"),configurableOption:"none",useKeyUpEvent:!0,buttonOptions:{type:"tertiary",size:"sm",className:"toc-dropdown-item text-left",style:{color:this.props.theme.colors.black,minWidth:"110px"}},onChange:e=>{(0,t.getAppConfigAction)().editPageProperty(i.id,"icon",e).exec()}}),tag:"div",event:e=>{e.stopPropagation()},autoHide:!1,visible:!0});n.push(r);const d=(0,e.Immutable)({label:this.props.formatMessage("duplicate"),event:e=>{e.stopPropagation(),this.props.duplicatePage(o.id)},visible:!0});n.push(d);const c=(0,t.getAppConfigAction)().appConfig,p=(c?t.appConfigUtils.getRealPageCountExcludeOnePage(c,o.id):0)<1,g=(0,e.Immutable)({label:this.props.formatMessage("delete"),event:e=>{this.handleRemovePage(o),e.stopPropagation()},visible:!p});return n.push(g),n},this.getAddPageDropDownItems=()=>{const{addPageWithType:t}=this.props,i=[],o=(0,e.Immutable)({label:this.props.formatMessage("addLink"),a11yFocusBack:!1,event:e=>{ie=t("link").id,this.resetLinkParam(ie),this.setState({isShowLinkSetting:!0}),e.stopPropagation()},visible:!0});i.push(o);const n=(0,e.Immutable)({label:this.props.formatMessage("addFolder"),a11yFocusBack:!1,event:e=>{t("folder"),e.stopPropagation()},visible:!0});return i.push(n),i},this.renderPageItemRightContent=o=>{const{theme:n,onDefaultClick:s}=this.props,{data:a}=o,l=this.getMoreDropDownItems(o),r=e.css`
      margin-right: calc(16px - ${n.components.button.sizes.sm.paddingX});
      .page-item-visible-btn {
        display: ${a.isVisible?"none":"inline-flex"};
      }

      .page-item-home-btn {
        color: ${o.showDefault&&a.isDefault?n.colors.black:n.colors.palette.dark[600]};
        &:hover {
          color: ${n.colors.black};
        }
      }

      .dropDown {
        display: inline-flex;
        .btn {
          display: none;
        }
      }

    `;return(0,e.jsx)("div",{className:"d-flex",css:r},(0,e.jsx)(i.Tooltip,{placement:"bottom",title:this.props.formatMessage("makeHome")},(0,e.jsx)(B,{size:"sm",icon:!0,type:"tertiary","aria-label":this.props.formatMessage("makeHome"),className:"page-item-home-btn page-item-icon item-inside-button jimu-outline-inside",onClick:e=>{e.stopPropagation(),a.isDefault||s(a.id)}},(0,e.jsx)(W,null))),(0,e.jsx)(i.Tooltip,{placement:"bottom",title:a.isVisible?this.props.formatMessage("hideFromMenu"):this.props.formatMessage("showFromMenu")},(0,e.jsx)(B,{size:"sm",type:"tertiary",icon:!0,"aria-label":a.isVisible?this.props.formatMessage("hideFromMenu"):this.props.formatMessage("showFromMenu"),className:"page-item-visible-btn page-item-icon item-inside-button jimu-outline-inside",onClick:e=>{e.stopPropagation(),(0,t.getAppConfigAction)().editPageProperty(a.id,"isVisible",!o.data.isVisible).exec()}},a.isVisible?(0,e.jsx)(q,null):(0,e.jsx)(Q,null))),(0,e.jsx)("div",{title:this.props.formatMessage("more"),className:"dropDown page-item-icon",ref:this.linkSettingTrigger},(0,e.jsx)(y,{modifiers:oe,direction:"down",theme:n,items:l,insideOutline:!0,supportInsideNodesAccessible:!0})))},this.renderPageContent=t=>{var i,o,n;const{intl:s,theme:a,editablePageItemId:l}=this.props,{isTocDragging:r,tocDraggingStatus:d}=this.state,c=null===(i=this.treeRef)||void 0===i?void 0:i.getBoundingClientRect();return(0,e.jsx)(m,{intl:s,itemJson:t,theme:a,canDnd:!0,isFirstItem:this.getFirstItemJson().id===t.id,editable:l===t.id,onArrowClick:this.handleArrowClick,isLastItem:this.getLastItemJson().id===t.id,isTocDragging:r,onTocDragStatusChage:this.handleOnTocDragStatusChange,tocDraggingStatus:d,parentBoundTop:null!==(o=null==c?void 0:c.top)&&void 0!==o?o:-1,renderRightContent:this.renderPageItemRightContent,renameItem:this.renamePage,parentBoundBottom:null!==(n=null==c?void 0:c.bottom)&&void 0!==n?n:-1,canDropIntoFunc:this.canDropIntoFunc,onDidDrop:this.onDidDrop,canDragFunc:this.canDragFunc,canDropFunc:this.canDropFunc,canOrderFunc:this.canOrderFunc,onDoubleClick:this.handleOnTocDoubleClick})},this.getLinkSettingPopup=(t,i,o)=>{var n,a,l,r,d,c;return t&&(null===(n=null==o?void 0:o.pages)||void 0===n?void 0:n[ie])&&!(null===(a=e.urlUtils.getAppIdPageIdFromUrl())||void 0===a?void 0:a.pageId)&&i?(0,e.jsx)(s.LinkSelectorSidePopper,{isOpen:t&&!(null===(l=e.urlUtils.getAppIdPageIdFromUrl())||void 0===l?void 0:l.pageId),isLinkPageSetting:!0,title:null===(d=null===(r=null==o?void 0:o.pages)||void 0===r?void 0:r[ie])||void 0===d?void 0:d.label,position:"left",linkParam:(0,e.Immutable)(te),onSettingCancel:()=>{this.setState({isShowLinkSetting:!1})},onSettingConfirm:this.handleSettingLinkConfirm,trigger:null===(c=this.linkSettingTrigger)||void 0===c?void 0:c.current}):(!i&&t&&setTimeout((()=>{this.setState({isShowLinkSetting:!1})})),null)},this.getWillRemovePageSubCount=()=>{const e=(0,t.getAppConfigAction)().appConfig,{willRemovePage:i}=this.state;if(!e||!i)return 0;const o=e.pageStructure.find((e=>Object.keys(e)[0]===i.id));return o?o[i.id].length:0},this.onExportClick=e=>{const{currentPageItemId:i}=this.props,o=(0,t.getAppConfigAction)().appConfig,n=[{layout:o.pages[i].layout,layouts:o.layouts,widgets:o.widgets,views:o.views,sections:o.sections,name:"Column layout",description:"Align widgets by columns",thumbnail:"./thumbnails/image2.png"}],s=n[0];s.layouts&&Object.keys(s.layouts).forEach((e=>{let t=s.layouts[e].without("id");t.content&&Object.keys(t.content).forEach((e=>{const i=t.content[e].without("id");t=t.setIn(["content",e],i)})),s.layouts=s.layouts.set(e,t)})),s.widgets&&Object.keys(s.widgets).forEach(((e,t)=>{const i=s.widgets[e];s.widgets=s.widgets.set(e,i.without("context","icon","label","manifest","_originManifest","version","useDataSources","useDataSourcesEnabled"))})),s.sections&&Object.keys(s.sections).forEach(((e,t)=>{const i=s.sections[e];s.sections=s.sections.set(e,i.without("id","label"))})),s.views&&Object.keys(s.views).forEach(((e,t)=>{const i=s.views[e];s.views=s.views.set(e,i.without("id","label"))})),console.log(JSON.stringify({pages:n}))},this.expandIds=[],this.state={currentSelectedItemId:o.currentPageItemId,filterText:"",itemJson:void 0,showSearch:!1,isTemplatePopoverOpen:!1,isTocDragging:!1,isRemovePopoverOpen:!1,willRemovePage:void 0,tocDraggingStatus:"on",isShowLinkSetting:!1},this.addPageDropdownItems=this.getAddPageDropDownItems()}componentWillUnmount(){this.dropZoneInteractable&&(this.dropZoneInteractable.unset(),this.dropZoneInteractable=null)}componentDidUpdate(e){const t=this.props;let i=!1,o={};const{pages:n,pageStructure:s,currentPageItemId:a,editablePageItemId:l,isPageTemplateLoading:r}=e;if(t.currentPageItemId!==a||t.pages!==n||t.pageStructure!==s||t.editablePageItemId!==l||t.isPageTemplateLoading!==r)if(i=!0,t.pages===n&&s===t.pageStructure&&t.editablePageItemId===l||t.currentPageItemId===a)if(t.currentPageItemId!==a){const e=A(this.state.itemJson,[t.currentPageItemId]);o={currentSelectedItemId:t.currentPageItemId,itemJson:A(this.state.itemJson,[t.currentPageItemId])},this.expandIds=M(e)}else o={itemJson:this.getItemJsonByPages(t.pages,t.pageStructure)};else{const e=A(this.getItemJsonByPages(t.pages,t.pageStructure),[t.currentPageItemId]);o={currentSelectedItemId:t.currentPageItemId,itemJson:e},this.expandIds=M(e)}i&&this.setState(o)}componentDidMount(){this.setState({itemJson:this.getItemJsonByPages()}),this.dropZoneRef&&(this.dropZoneInteractable=(0,a.interact)(this.dropZoneRef).dropzone({accept:".toc-item-drag",overlap:"pointer",ondragenter:e=>{const{itemJson:t}=this.state;if(t&&this.treeRef){const{relatedTarget:t,dragEvent:i}=e,o=this.treeRef.getBoundingClientRect().top,n=this.getTreeContentHeight(),s=JSON.parse(t.getAttribute("data-itemJson")),a=i.client;a.y<=o?this.getFirstItemJson().data.id!==s.data.id&&this.handleOnTocDraggingStatusChange("top"):a.y<=n+o?this.handleOnTocDraggingStatusChange("on"):this.getLastParentItemJson().data.id!==s.data.id&&this.handleOnTocDraggingStatusChange("bottom")}},ondragleave:e=>{this.handleOnTocDraggingStatusChange("on")},ondrop:e=>{const t=this.state.tocDraggingStatus;if("on"===t)return;let i;i="bottom"===t?this.getLastParentItemJson():this.getFirstItemJson();const o=e.relatedTarget,n=JSON.parse(o.getAttribute("data-itemJson"));this.onDidDrop(n,i,t),this.handleOnTocDraggingStatusChange("on")},ondropdeactivate:e=>{}}))}resetLinkParam(e){const{pages:t}=this.props;te.value="",te.openType=s.OpenTypes.NewWindow;const i=t[e];i&&i.linkUrl&&"#"!==i.linkUrl&&(te.value=i.linkUrl),i&&i.openTarget&&(te.openType=i.openTarget)}render(){const{itemJson:o,willRemovePage:n,isShowLinkSetting:a}=this.state,{theme:l,isPageSectionNav:r}=this.props,d=(0,t.getAppConfigAction)().appConfig,c=e.css`
      height: 100%;
      position: relative;
      .toc-dropzone {
        position: absolute;
        pointer-events: none;
      }
      .text-data-600{
        color: ${l.colors.palette.dark[600]};
      }
      .page-list-top {
        position: absolute;
        right: 15px;
        top: -48px;
        .page-top-btns {
          margin-right: -${l.components.button.sizes.sm.paddingX};

          .my-dropdown {
            margin-left: -5px;
            margin-right: 5px;
          }
        }
      }
      .page-tree {
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        .toc-item-dropzone {
          .toc-item {
            /* padding-left: ${e.polished.rem(4)}; */
          }
        }
      }
    `;return(0,e.jsx)("div",{css:c},(0,e.jsx)("div",{ref:e=>{this.dropZoneRef=e},className:"toc-dropzone h-100 w-100"}),(0,e.jsx)("div",{className:"page-list-top"},(0,e.jsx)("div",{className:"d-flex justify-content-between w-100 align-items-center"},(0,e.jsx)("div",{className:"d-flex page-top-btns align-items-center"},(0,e.jsx)("div",{ref:e=>{this.addPageRef=e},css:e.css`z-index: 11;`},(0,e.jsx)(i.Tooltip,{placement:"bottom",title:this.props.formatMessage("addPage")},(0,e.jsx)(i.Button,{icon:!0,disabled:!o,type:"tertiary","aria-label":this.props.formatMessage("addPage"),ref:e=>{this.templateBtn=e},onClick:this.handleToggleTemplatePopover,size:"sm",className:"add-page-btn"},(0,e.jsx)(z,{className:"add-page-icon"})))),this.state.isTemplatePopoverOpen&&(0,e.jsx)(s.PageTemplatePopper,{theme:l,referenceElement:this.addPageRef,formatMessage:this.props.formatMessage,onItemSelect:this.handleChooseTemplate,onClose:this.closeTemplatePopover}),(0,e.jsx)("div",{title:this.props.formatMessage("more"),className:"dropDown page-item-icon"},(0,e.jsx)(y,{items:this.addPageDropdownItems,theme:l,disabled:!o,direction:"down",toggleContent:ee}))))),(0,e.jsx)(N,{forwardRef:e=>{this.treeRef=e},className:"page-tree mt-2",hideRoot:!0,itemJson:o,onClickItem:this.handleClickItem,handleExpand:this.handleExpand}),n&&(0,e.jsx)(E,{formatMessage:this.props.formatMessage,isRemove:!0,theme:l,tapBlankClose:!1,toggle:this.handleToggleRemovePopover,onClosed:e=>{ie===n.id&&this.setState({isShowLinkSetting:!1}),e&&n&&this.props.removePage(n.id)},title:this.props.formatMessage("delete"),isOpen:this.state.isRemovePopoverOpen,intl:this.props.intl},this.props.formatMessage("removePageTip",{subCount:this.getWillRemovePageSubCount(),label:n.label})),this.getLinkSettingPopup(a,r,d))}}const se=e.ReactRedux.connect((e=>{var t,i,o;const n=e.appStateInBuilder&&e.appStateInBuilder.appConfig;return{pages:n&&n.pages,pageStructure:n&&n.pageStructure,isPageSectionNav:"page"===(null===(o=null===(i=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.sectionNavInfos)||void 0===i?void 0:i["opts-section"])||void 0===o?void 0:o.currentViewId)}}))(ne);var ae=g(6262);class le extends d{constructor(t){super(t),this.onDropHover=e=>{this.state.dropType!==e&&this.setState({dropType:e})},this.labelChanged=e=>{this.setState({currentLabel:e})},this.handleLabelBlur=(e,t)=>{var i,o;let n=""!==e.trim();n&&(n=this._checkLabel("dialog",t,e).valid),n||(e=this.props.itemJson.label,null===(o=(i=this.props).renameItem)||void 0===o||o.call(i,this.props.itemJson,e)),this.labelChanged(e)},this.getStyle=()=>{var t;const i=(0,e.getAppStore)().getState(),o=null===(t=null==i?void 0:i.appContext)||void 0===t?void 0:t.isRTL,{theme:n,editable:s,itemJson:a,isTocDragging:l}=this.props,{mustShowArrow:r,children:d,level:c,isActive:p,isExpand:g}=a,{isDragging:h,isHovering:u}=this.state;return e.css`
      min-height: ${30}px;
      width: auto;
      min-width: 100%;
      align-items: center;
      cursor: pointer;
      ${h?"z-index: 100;":""}

      &.drag-move-into {
        border: 1px solid ${n.colors.palette.primary[700]};
      }

      .dialog-item-splash-btn {
        display: ${a.isSplash&&!s?"inline-flex":"none"};
      }

      :hover {
        ${p||l?"":`background-color: ${n.colors.palette.light[400]};`}
        .dialog-item-page-btn {
          display: ${s?"none":"inline-flex"};
          z-index: 2;
        }
        .dialog-item-splash-btn {
          display: ${s||!a.isSplash&&l?"none":"inline-flex"};
          z-index: 2;
        }
        .dropDown {
          .btn {
            display: ${l||s?"none":"inline-flex"};
          }
          z-index: 2;
        }
      }

      &.active {
        ${l?"":`background-color: ${n.colors.primary};`}
        border: 0;
      }

      .toc-dialog-dropzone {
        touch-action: none;
        position: relative;

        .toc-dialog-drag:hover {
          cursor: pointer !important;
        }

        .toc-dialog-drag {
          pointer-events: ${u?"all":"none"};
          visibility: ${a.allowEditable&&s?"hidden":"visible"};
          z-index: 1;
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background-color: ${h?e.polished.rgba(n.colors.palette.light[400],.6):"transparent"};
          box-shadow: ${h?n.boxShadows.lg:n.boxShadows.none};
        }

        .toc-item {
          padding: 0;
          border: 0;
          position: relative;
          .toc-item-content {
            margin-left: ${10*c}px;
            position: relative;
            .toc-arrow {
              z-index: 2;
              padding-right: ${e.polished.rem(1)};
              visibility: hidden;
               /* ${r||d&&d.length>0?"visible":"hidden"}; */

              .toc-arrow-icon {
                fill: ${n.colors.black};
                transform-origin: center;
                transform: ${`rotate(${g?90:o?180:0}deg)`};
                transition: transform .5s;
              }
            }

            .left-and-right {
              overflow-x: hidden;
              margin-left: -5px;
              .left-content {
                align-items: center;
                overflow-x: hidden;
                flex: auto;
                .editor {
                  overflow: hidden;
                  text-overflow: ${s?"clip":"ellipsis"};
                  white-space: nowrap;
                  font-size: ${.875}rem;
                  user-select: none;
                  flex: auto;
                  text-align: start;
                }
                [contenteditable="true"] {
                  user-select: text;
                  -webkit-user-select: text;
                  background-color: ${n.colors.white};
                }
                .header-icon {
                  margin-right: 0.3rem;
                  flex: none;
                }
              }
            }
          }

          &.toc-drag-move-last {
            :after{
              content: '';
              position: absolute;
              left: 0;
              top: auto;
              bottom: 0;
              right: auto;
              height: 2px;
              width: 100%;
              background-color: ${n.colors.palette.primary[700]};
            }
          }

          &.toc-drag-move-first {
            :before {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              bottom: auto;
              right: auto;
              height: 2px;
              width: 100%;
              background-color: red;
              /* ${n.colors.palette.primary[700]}; */
            }
          }

          .drag-move-out-order-bottom {
            :after{
              content: '';
              position: absolute;
              left: 0;
              top: auto;
              bottom: 0;
              right: auto;
              height: 2px;
              width: 100%;
              background-color: ${n.colors.palette.primary[700]};
            }
          }

          .drag-move-out-order-top {
            :before {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              bottom: auto;
              right: auto;
              height: 2px;
              width: 100%;
              background-color: ${n.colors.palette.primary[700]};
            }
          }
        }
      }
    `},this.state={dropType:"none",isDragging:!1,isHovering:!1,currentLabel:this.props.itemJson.label},this.dropZoneRef=e.React.createRef(),this.dragRef=e.React.createRef()}componentWillUnmount(){this.dragInteractable&&(this.dragInteractable.unset(),this.dragInteractable=null),this.dropZoneInteractable&&(this.dropZoneInteractable.unset(),this.dropZoneInteractable=null)}componentDidMount(){super.componentDidMount(),this.initDragEvent()}componentDidUpdate(e){super.componentDidUpdate(e)}initDragEvent(){var t;const{canDnd:i,canDropFunc:o,onDidDrop:n,itemJson:s}=this.props;if(i&&this.dropZoneRef.current&&this.dragRef.current){let i=null;this.dragRef.current.setAttribute("itemJson",JSON.stringify(s));const l=(null===(t=s.data)||void 0===t?void 0:t.mode)===e.DialogMode.Fixed?".toc-fixed-dialog-drag":".toc-anchored-dialog-drag";this.dropZoneInteractable=(0,a.interact)(this.dropZoneRef.current).dropzone({accept:l,overlap:"pointer",ondropmove:e=>{const t=e.relatedTarget,i=e.target,n=JSON.parse(t.getAttribute("itemJson"));if(!o||!o(s.data,n.data))return;const a=i.getBoundingClientRect(),l=a.bottom-a.top,r=2*l/3,d=1*l/3,c=e.dragEvent.client.y-a.top;let p=this.state.dropType;c>r?p="bottom":c<d&&(p="top"),this.onDropHover(p)},ondragleave:e=>{this.onDropHover("none")},ondrop:e=>{const t=this.state.dropType;if("none"===t)return;const i=e.relatedTarget,o=JSON.parse(i.getAttribute("itemJson"));n&&n(o,s,t),this.onDropHover("none")}}),this.dragInteractable=(0,a.interact)(this.dragRef.current).draggable({inertia:!1,modifiers:[],autoScroll:!0,onstart:e=>{this.setState({isDragging:!0});const{onTocDragStatusChage:t}=this.props;t&&t(!0)},onmove:e=>{const{clientX:t,clientY:o,clientX0:n,clientY0:s,target:a}=e,l=parseFloat(a.getAttribute("start-x"))||0,r=parseFloat(a.getAttribute("start-y"))||0;let d=t-n+l,c=o-s+r;const p=-a.clientWidth/2,g=a.clientWidth/2;d<p?d=p:d>g&&(d=g);const{parentBoundBottom:h,parentBoundTop:u}=this.props;if(h>-1&&u>-1){const e=u-s,t=h-s;c<=e?c=e:c>=t&&(c=t)}i&&cancelAnimationFrame(i),i=requestAnimationFrame((()=>{a.style.webkitTransform=a.style.transform="translate("+d+"px, "+c+"px)",i=null}))},onend:e=>{const{target:t}=e;i&&cancelAnimationFrame(i),t.style.webkitTransform=t.style.transform="translate(0px, 0px)",this.setState({isDragging:!1});const{onTocDragStatusChage:o}=this.props;o&&o(!1)}})}}render(){const{itemJson:t,renderRightContent:o,editable:n,canDnd:s,theme:a,isFirstItem:l,isLastItem:r,tocDraggingStatus:d,isTocDragging:c,tocDraggingMode:p}=this.props,{icon:g,isActive:h}=t,{dropType:m,isDragging:v}=this.state;let f;f=g&&g.svg?g:{svg:g};const b="moveInto"===m?"drag-move-into":"",y="drag-move-out-order-"+m;let I="";return c&&"on"!==d&&p===t.data.mode&&("bottom"===d&&r?I="toc-drag-move-last":"top"===d&&l&&(I="toc-drag-move-first")),(0,e.jsx)("div",{className:`d-flex ${h?"active":""}   ${b}`,css:this.getStyle(),onMouseEnter:e=>this.setState({isHovering:!0}),onMouseLeave:e=>this.setState({isHovering:!1})},(0,e.jsx)("div",{ref:this.dropZoneRef,className:"toc-dialog-dropzone h-100 w-100"},(0,e.jsx)("div",{className:"d-flex w-100 h-100",onDoubleClick:this.handleDoubleClickItem,onClick:this.handleClick},(0,e.jsx)("div",{className:`d-flex justify-content-between w-100 toc-item ${I}`},(0,e.jsx)("div",{className:`d-flex toc-item-content ${y} w-100`},(0,e.jsx)(i.Button,{className:"toc-arrow",icon:!0,type:"tertiary",onClick:this.handleArrowClick},(0,e.jsx)(u,{className:"toc-arrow-icon",size:"s"})),(0,e.jsx)("div",{className:"left-and-right d-flex justify-content-between w-100"},(0,e.jsx)("div",{className:"d-flex left-content "+(o?"pr-0":"pr-2")},g&&(0,e.jsx)(i.Icon,{autoFlip:t.needFlip,className:"header-icon",color:a.colors.palette.dark[600],size:12,icon:f.svg}),(0,e.jsx)("div",{title:this.state.currentLabel,className:"item-label editor"},t.allowEditable&&n?(0,e.jsx)(i.TextInput,{size:"sm",ref:e=>{this.editor=e},value:this.state.currentLabel,onChange:e=>this.labelChanged(e.target.value),onAcceptValue:this.onRenameAccept,checkValidityOnChange:e=>this._checkLabel("dialog",t.id,e),checkValidityOnAccept:e=>this._checkLabel("dialog",t.id,e),onBlur:e=>this.handleLabelBlur(e.target.value,t.id)}):(0,e.jsx)(e.React.Fragment,null,this.state.currentLabel))),o&&o(t)))),s&&(0,e.jsx)("div",{className:(0,e.classNames)("toc-dialog-drag",{"toc-fixed-dialog-drag":t.data.mode===e.DialogMode.Fixed,"toc-anchored-dialog-drag":t.data.mode===e.DialogMode.Anchored}),ref:this.dragRef},v&&(0,e.jsx)("div",{className:"d-flex justify-content-between w-100 toc-item"},(0,e.jsx)("div",{className:"d-flex toc-item-content w-100"},(0,e.jsx)(i.Button,{icon:!0,type:"tertiary",className:"toc-arrow"},(0,e.jsx)(u,{className:"toc-arrow-icon",size:"s"})),(0,e.jsx)("div",{className:"left-and-right d-flex justify-content-between w-100"},(0,e.jsx)("div",{className:"d-flex left-content "+(o?"pr-0":"pr-2")},g&&(0,e.jsx)(i.Icon,{className:"header-icon",size:12,icon:g}),(0,e.jsx)("div",{title:this.state.currentLabel,className:"item-label editor"},this.state.currentLabel)),o&&o(t))))))))}}var re=g(6009),de=g.n(re);const ce=t=>{const i=window.SVG,{className:o}=t,n=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",o);return i?e.React.createElement(i,Object.assign({className:s,src:de()},n)):e.React.createElement("svg",Object.assign({className:s},n))};var pe=g(1513),ge=g.n(pe);const he=t=>{const i=window.SVG,{className:o}=t,n=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",o);return i?e.React.createElement(i,Object.assign({className:s,src:ge()},n)):e.React.createElement("svg",Object.assign({className:s},n))};var ue=g(710),me=g.n(ue);const ve=t=>{const i=window.SVG,{className:o}=t,n=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",o);return i?e.React.createElement(i,Object.assign({className:s,src:me()},n)):e.React.createElement("svg",Object.assign({className:s},n))};var fe=g(1964),be=g.n(fe);const ye=t=>{const i=window.SVG,{className:o}=t,n=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",o);return i?e.React.createElement(i,Object.assign({className:s,src:be()},n)):e.React.createElement("svg",Object.assign({className:s},n))},Ie=[{name:"offset",options:{offset:[0,10]}}];class xe extends e.React.PureComponent{constructor(o){super(o),this.getTotalLines=()=>{const{itemJson:e}=this.state;let t=0;return e.children&&e.children.forEach((e=>{var i,o;t++,e.isExpand&&(t+=null!==(o=null===(i=e.children)||void 0===i?void 0:i.length)&&void 0!==o?o:0)})),t},this.getTreeContentHeight=()=>30*this.getTotalLines(),this.handleOnTocDragStatusChange=e=>{var t;const i=this.getItemJsonByDialogs();this.setState({isTocDragging:e,tocDraggingMode:null===(t=i.data)||void 0===t?void 0:t.mode,itemJson:i})},this.getFirstItemJson=e=>{const{itemJson:t}=this.state;return t.children.filter((t=>t.data.mode===e&&0===t.data.index))[0]},this.getLastItemJson=e=>{const{itemJson:t}=this.state,i=t.children.filter((t=>t.data.mode===e));return i.filter((e=>e.data.index===i.length-1))[0]},this.getLastParentItemJson=()=>{const{itemJson:e}=this.state;return e.children[e.children.length-1]},this.handleOnTocDraggingStatusChange=e=>{this.setState({tocDraggingStatus:e,itemJson:this.getItemJsonByDialogs()})},this.onDidDrop=(e,t,i)=>{"moveInto"!==i&&this.props.reOrderDialog(e.data.id,t.data.id,i)},this.canDropFunc=(e,t)=>e.id!==t.id,this.handleChooseTemplate=e=>{this.setState({isTemplatePopoverOpen:!1}),this.props.addDialog(e)},this.handleToggleTemplatePopover=()=>{const{isTemplatePopoverOpen:e}=this.state;this.setState({isTemplatePopoverOpen:!e})},this.closeTemplatePopover=()=>{this.state.isTemplatePopoverOpen&&(this.templateBtn.focus(),this.setState({isTemplatePopoverOpen:!1}))},this.singleAndDoubleClickTimeout=void 0,this.handleClickItem=e=>{this.singleAndDoubleClickTimeout&&(clearTimeout(this.singleAndDoubleClickTimeout),this.singleAndDoubleClickTimeout=void 0),this.singleAndDoubleClickTimeout=setTimeout((()=>{this.setState({currentSelectedItemId:e.id,itemJson:A(this.state.itemJson,[e.id])},(()=>{this.props.onClickDialog(e.data.id)}))}),200)},this.handleOnTocDoubleClick=(e,t)=>{this.singleAndDoubleClickTimeout&&(clearTimeout(this.singleAndDoubleClickTimeout),this.singleAndDoubleClickTimeout=void 0),this.props.changeEditableDialogItemId(e.id),t.stopPropagation()},this.renameDialog=(e,t)=>(this.props.changeEditableDialogItemId(""),!!(null==t?void 0:t.trim())&&this.props.renameDialog(e.data.id,t)),this.getItemJsonByDialogJson=e=>{const i=e.id,{currentDialogItemId:o}=this.props,n={id:i,isSplash:!!e.isSplash,data:e,label:e.label,index:e.index,level:0,isActive:o===i,allowEditable:!0,renderItem:this.renderDialogContent};return n.icon=e.icon,n.icon||(n.icon=t.utils.getDefaultTocDialogIcon()),n},this.getItemJsonByDialogs=t=>{t||(t=this.props.dialogs);const i={id:"ROOT",children:[],label:""};if(!t)return(0,e.Immutable)(i);const o=Object.keys(t).map(((e,i)=>{const o=this.getItemJsonByDialogJson(t[e]);return o.children=[],o}));return i.children=o,(0,e.Immutable)(i)},this.getMoreDropDownItems=t=>{const i=t.data,o=[],n=(0,e.Immutable)({a11yFocusBack:!1,label:this.props.formatMessage("rename"),event:e=>{this.handleOnTocDoubleClick(t,e)},visible:!0});o.push(n);const s=(0,e.Immutable)({label:this.props.formatMessage("duplicate"),event:e=>{e.stopPropagation(),this.props.duplicateDialog(i.id)},visible:!0});o.push(s);const a=(0,e.Immutable)({label:this.props.formatMessage("delete"),event:e=>{this.props.removeDialog(i.id),e.stopPropagation()},visible:!0});return o.push(a),o},this.renderDialogItemRightContent=o=>{const{theme:n,onSplashClick:s}=this.props,{data:a}=o,l=this.getMoreDropDownItems(o),r=e.css`
      margin-right: calc(16px - ${n.components.button.sizes.sm.paddingX});
      .dialog-item-splash-btn {
        color: ${o.isSplash?n.colors.black:n.colors.palette.dark[600]};
        &:hover {
          color: ${n.colors.black};
        }
      }
      .dropDown {
        display: inline-flex;
        .btn {
          display: none;
        }
      }
    `;let d=null;if(a.mode===e.DialogMode.Fixed){const e=t.utils.getPageListByDialogId(this.props.pages,a.id);e.length&&(d=this.props.formatMessage("openedWithPages",{pages:e.map((e=>e.label)).join(", ")}))}return(0,e.jsx)("div",{className:"d-flex",css:r},d?(0,e.jsx)(i.Tooltip,{placement:"bottom",title:d},(0,e.jsx)(i.Button,{icon:!0,size:"sm",type:"tertiary",tag:"div",style:{cursor:"inherit"},className:"dialog-item-page-btn dialog-item-icon d-flex align-items-center"},(0,e.jsx)(he,{size:12}))):a.mode===e.DialogMode.Fixed&&(0,e.jsx)(i.Tooltip,{placement:"bottom",title:this.props.formatMessage("makeSplash")},(0,e.jsx)(B,{size:"sm",icon:!0,type:"tertiary","aria-label":this.props.formatMessage("makeSplash"),className:"dialog-item-splash-btn dialog-item-icon item-inside-button jimu-outline-inside",onClick:e=>{e.stopPropagation(),s(a.id)}},(0,e.jsx)(ve,null))),(0,e.jsx)("div",{title:this.props.formatMessage("more"),className:"dropDown dialog-item-icon"},(0,e.jsx)(y,{modifiers:Ie,direction:"down",theme:n,items:l,insideOutline:!0})))},this.renderDialogContent=t=>{var i,o,n;const{intl:s,theme:a,editableDialogItemId:l}=this.props,{isTocDragging:r,tocDraggingStatus:d,tocDraggingMode:c}=this.state,p=null===(i=t.data.mode===e.DialogMode.Fixed?this.treeRefForFixed:this.treeRefForAnchored)||void 0===i?void 0:i.getBoundingClientRect();return(0,e.jsx)(le,{intl:s,itemJson:t,theme:a,canDnd:!0,tocDraggingMode:c,isFirstItem:0===t.data.index,isLastItem:this.getLastItemJson(t.data.mode).id===t.id,isTocDragging:r,onTocDragStatusChage:this.handleOnTocDragStatusChange,tocDraggingStatus:d,parentBoundTop:null!==(o=null==p?void 0:p.top)&&void 0!==o?o:-1,parentBoundBottom:null!==(n=null==p?void 0:p.bottom)&&void 0!==n?n:-1,editable:l===t.id,renderRightContent:this.renderDialogItemRightContent,onDidDrop:this.onDidDrop,canDropFunc:this.canDropFunc,renameItem:this.renameDialog,onDoubleClick:this.handleOnTocDoubleClick})},this.getItemJsonByMode=e=>{const{itemJson:t}=this.state,i=t?{id:t.id,isActive:t.isActive,isExpand:t.isExpand,label:"",children:[]}:null;if(i){const o={};t.children.forEach((t=>{var i;(null===(i=t.data)||void 0===i?void 0:i.mode)===e&&(o[t.index]=t)})),Object.keys(o).forEach((e=>{i.children.push(o[e])}))}return i},this.state={currentSelectedItemId:o.currentDialogItemId,itemJson:void 0,isTemplatePopoverOpen:!1,isFixedGroupShown:!0,isAnchoredGroupShown:!0,isTocDragging:!1,tocDraggingMode:null,tocDraggingStatus:"on"}}componentWillUnmount(){this.dropZoneInteractable&&(this.dropZoneInteractable.unset(),this.dropZoneInteractable=null)}componentDidUpdate(e){const t=this.props;let i=!1,o={};const{dialogs:n,currentDialogItemId:s,editableDialogItemId:a,forceRefresh:l}=e;if(t.forceRefresh&&!l||t.currentDialogItemId!==s||t.dialogs!==n||t.editableDialogItemId!==a)if(i=!0,t.dialogs===n&&t.editableDialogItemId===a||t.currentDialogItemId===s)o=t.currentDialogItemId!==s?{currentSelectedItemId:t.currentDialogItemId,itemJson:A(this.state.itemJson,[t.currentDialogItemId])}:{itemJson:this.getItemJsonByDialogs(t.dialogs)};else{const e=A(this.getItemJsonByDialogs(t.dialogs),[t.currentDialogItemId]);o={currentSelectedItemId:t.currentDialogItemId,itemJson:e}}i&&this.setState(o)}componentDidMount(){this.setState({itemJson:this.getItemJsonByDialogs()}),this.initDragEvent(e.DialogMode.Fixed),this.initDragEvent(e.DialogMode.Anchored)}initDragEvent(t){const i=t===e.DialogMode.Fixed?".toc-fixed-dialog-drag":".toc-anchored-dialog-drag",o=t===e.DialogMode.Fixed?this.dropZoneRefForFixed:this.dropZoneRefForAnchored,n=t===e.DialogMode.Fixed?this.treeRefForFixed:this.treeRefForAnchored;o&&(this.dropZoneInteractable=(0,a.interact)(o).dropzone({accept:i,overlap:"pointer",ondragenter:e=>{const{itemJson:i}=this.state;if(i&&n){const{relatedTarget:i,dragEvent:o}=e,s=n.getBoundingClientRect().top,a=this.getTreeContentHeight(),l=JSON.parse(i.getAttribute("itemJson")),r=o.client;r.y<=s?this.getFirstItemJson(t).data.id!==l.data.id&&this.handleOnTocDraggingStatusChange("top"):r.y<=a+s&&this.handleOnTocDraggingStatusChange("on")}},ondragleave:e=>{this.handleOnTocDraggingStatusChange("on")},ondrop:e=>{const t=e.relatedTarget,i=JSON.parse(t.getAttribute("itemJson")),o=this.state.tocDraggingStatus;if("on"===o)return;const n="bottom"===o?this.getLastParentItemJson():this.getFirstItemJson(i.data.mode);this.onDidDrop(i,n,o),this.handleOnTocDraggingStatusChange("on")},ondropdeactivate:e=>{}}))}render(){const{itemJson:t}=this.state,{theme:o}=this.props,n=e.css`
      height: 100%;
      position: relative;
      .toc-dropzone {
        position: absolute;
        pointer-events: none;
      }
      .text-data-600{
        color: ${o.colors.palette.dark[600]};
      }
      .dialog-list-top {
        position: absolute;
        right: 16px;
        top: -44px;
        .dialog-top-btns {
          margin-right: -${o.components.button.sizes.sm.paddingX};

          .my-dropdown {
            margin-left: -5px;
            margin-right: 5px;
          }
        }
      }
      .dialog-list-content{
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;

        .dialog-group{
          display: flex;
          align-items: center;
          padding: 0.25rem 0.575rem 0.25rem 1rem;
          .dialog-group-title{
            font-size: 14px;
            color: ${o.colors.palette.dark[600]};
            flex-grow: 1;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }

        .dialog-tree {
          overflow: hidden;
        }
      }
    `,a=this.getItemJsonByMode(e.DialogMode.Fixed),l=this.getItemJsonByMode(e.DialogMode.Anchored);return(0,e.jsx)("div",{css:n},(0,e.jsx)("div",{className:"dialog-list-top"},(0,e.jsx)("div",{className:"d-flex justify-content-between w-100 align-items-center"},(0,e.jsx)("div",{className:"d-flex dialog-top-btns align-items-center"},(0,e.jsx)("div",{ref:e=>{this.addDialogRef=e},css:e.css`z-index: 11;`},(0,e.jsx)(i.Tooltip,{placement:"bottom",title:this.props.formatMessage("addDialog")},(0,e.jsx)(i.Button,{icon:!0,disabled:!t,type:"tertiary","aria-label":this.props.formatMessage("addDialog"),ref:e=>{this.templateBtn=e},onClick:this.handleToggleTemplatePopover,size:"sm",className:"add-dialog-btn mt-1"},(0,e.jsx)(ye,{className:"add-dialog-icon"})))),this.state.isTemplatePopoverOpen&&(0,e.jsx)(s.TemplateSelector,{theme:this.props.theme,templateContentStyle:{height:"calc(100vh - 190px)"},title:this.props.formatMessage("addDialog"),templates:(0,ae.getWindowTemplates)(),referenceElement:this.addDialogRef,onItemSelect:this.handleChooseTemplate,onClose:this.closeTemplatePopover})))),(0,e.jsx)("div",{className:"dialog-list-content"},(0,e.jsx)("div",null,(0,e.jsx)("div",{className:"dialog-group"},(0,e.jsx)("div",{className:"dialog-group-title"},this.props.formatMessage("fixedWindows")),(0,e.jsx)(i.Button,{icon:!0,size:"sm",type:"tertiary",disabled:!((null==a?void 0:a.children.length)>0),onClick:e=>this.setState({isFixedGroupShown:!this.state.isFixedGroupShown})},this.state.isFixedGroupShown&&(null==a?void 0:a.children.length)?(0,e.jsx)(ce,null):(0,e.jsx)(Z,null))),(0,e.jsx)(i.Collapse,{isOpen:this.state.isFixedGroupShown},(0,e.jsx)("div",{ref:e=>{this.dropZoneRefForFixed=e},className:"toc-dropzone toc-dialog-dropzone w-100",style:{height:30*(null==a?void 0:a.children.length)+"px"}}),(0,e.jsx)(N,{forwardRef:e=>{this.treeRefForFixed=e},className:"dialog-tree",hideRoot:!0,itemJson:(0,e.Immutable)(a),onClickItem:this.handleClickItem})),(0,e.jsx)("div",{className:"dialog-group"},(0,e.jsx)("div",{className:"dialog-group-title"},this.props.formatMessage("anchoredWindows")),(0,e.jsx)(i.Button,{icon:!0,size:"sm",type:"tertiary",disabled:!((null==l?void 0:l.children.length)>0),onClick:e=>this.setState({isAnchoredGroupShown:!this.state.isAnchoredGroupShown})},this.state.isAnchoredGroupShown&&(null==l?void 0:l.children.length)?(0,e.jsx)(ce,null):(0,e.jsx)(Z,null))),(0,e.jsx)(i.Collapse,{isOpen:this.state.isAnchoredGroupShown},(0,e.jsx)("div",{ref:e=>{this.dropZoneRefForAnchored=e},className:"toc-dropzone toc-dialog-dropzone w-100",style:{height:30*(null==l?void 0:l.children.length)+"px"}}),(0,e.jsx)(N,{forwardRef:e=>{this.treeRefForAnchored=e},className:"dialog-tree",hideRoot:!0,itemJson:(0,e.Immutable)(l),onClickItem:this.handleClickItem})))))}}const we=e.ReactRedux.connect((e=>{const t=e.appStateInBuilder&&e.appStateInBuilder.appConfig;return{pages:t&&t.pages,dialogs:t&&t.dialogs}}))(xe);var Se;!function(e){e.Widget="WIDGET",e.Section="SECTION",e.View="View",e.ScreenGroup="SCREEN_GROUP",e.Screen="SCREEN",e.ScreenMainStage="SCREEN_MAIN_STAGE",e.ScreenSrollingPanel="SCREEN_SCROLLING_PANEL",e.Layout="LAYOUT",e.Label="Label"}(Se||(Se={}));const Ce=e.ReactRedux.connect(((t,i)=>{var o,n,s,a,l;return{updateRightContentByAppMode:!!i.itemJson.isActive&&(null===(n=null===(o=null==t?void 0:t.appStateInBuilder)||void 0===o?void 0:o.appRuntimeInfo)||void 0===n?void 0:n.appMode)===e.AppMode.Run,updateRightContentByLockLayout:!!i.itemJson.isActive&&(null===(l=null===(a=null===(s=t.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===a?void 0:a.forBuilderAttributes)||void 0===l?void 0:l.lockLayout)}}))(class extends d{constructor(t){super(t),this.checkValidity=e=>{const{itemJson:t}=this.props;let i={valid:!0};if((null==t?void 0:t.type)===Se.View){const o=t.id.split(r);i=this._checkLabel("view",o[o.length-1],e)}return i},this.labelChanged=e=>{this.setState({currentLabel:e})},this.handleLabelBlur=e=>{var t,i;const{itemJson:o}=this.props;let n=""!==e.trim();n&&(null==o?void 0:o.type)===Se.View&&(n=this._checkLabel("view",o.id,e).valid),n||(e=this.props.itemJson.label,null===(i=(t=this.props).renameItem)||void 0===i||i.call(t,this.props.itemJson,e)),this.labelChanged(e)},this.getStyle=()=>{var t;const i=(0,e.getAppStore)().getState(),o=null===(t=null==i?void 0:i.appContext)||void 0===t?void 0:t.isRTL,{theme:n,editable:s,itemJson:a}=this.props,{mustShowArrow:l,children:r,level:d,isActive:c,isExpand:p}=a;return e.css`
      min-height: ${30}px;
      width: auto;
      min-width: 100%;
      align-items: center;
      cursor: pointer;

      :hover {
        ${c?"":`background-color: ${n.colors.palette.light[400]};`}
        .dropDown {
          z-index: 2;
          display: inline-flex;
          .btn {
            visibility: visible;
          }
        }
        .editor {
          color: ${n.colors.black};
        }
      }

      .item-action-button {
        display: none;
      }

      &.active {
        background-color: ${n.colors.primary};
        border: 0;
        .editor {
          color: ${n.colors.black};
        }

        &:hover {
          .item-action-button {
            display: block;
          }
        }
      }

      &.insideActive {
        background-color: ${n.colors.palette.light[500]};
      }

      .toc-item {
        padding: 0;
        border: 0;
        .toc-item-content {
          margin-left: ${10*d}px;
          position: relative;
          .toc-arrow {
            z-index: 2;
            padding-right: ${e.polished.rem(1)};
            visibility: ${l||r&&r.length>0?"visible":"hidden"};
            .jimu-icon {
              fill: ${n.colors.black};
              transform-origin: center;
              transform: ${`rotate(${p?90:o?180:0}deg)`};
              transition: transform .5s;
            }
          }

          .left-and-right {
            overflow-x: hidden;
            margin-left: -5px;
            /* margin-left: calc(8px - ${n.components.button.sizes.sm.paddingX} - 0.6875rem + ${e.polished.rem(4)}); */
            .left-content {
              align-items: center;
              overflow-x: hidden;
              flex: auto;
              .editor {
                overflow: hidden;
                text-overflow: ${s?"clip":"ellipsis"};
                white-space: nowrap;
                font-size: ${.875}rem;
                user-select: none;
                flex: auto;
                text-align: start;
              }
              [contenteditable="true"] {
                user-select: text;
                -webkit-user-select: text;
                background-color: ${n.colors.white};
              }
              .header-icon {
                margin-right: 0.3rem;
                flex: none;
              }
            }
          }
        }
      }
    `},this.state={currentLabel:this.props.itemJson.label}}componentDidMount(){super.componentDidMount()}componentDidUpdate(e){super.componentDidUpdate(e)}render(){const{itemJson:t,renderRightContent:o,editable:n,theme:s,className:a}=this.props,{icon:l,isActive:r}=t;let d;return d=l&&l.svg?l:{svg:l},(0,e.jsx)("div",{className:(0,e.classNames)("d-flex",a,{active:r}),css:this.getStyle()},(0,e.jsx)("div",{className:"d-flex w-100 h-100",onDoubleClick:this.handleDoubleClickItem,onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},(0,e.jsx)("div",{className:"d-flex justify-content-between w-100 toc-item"},(0,e.jsx)("div",{className:"d-flex toc-item-content w-100"},(0,e.jsx)(B,{className:"toc-arrow jimu-outline-inside",icon:!0,type:"tertiary",onClick:this.handleArrowClick},(0,e.jsx)(u,{size:"s"})),(0,e.jsx)("div",{className:"left-and-right d-flex justify-content-between w-100"},(0,e.jsx)("div",{className:"d-flex left-content "+(o?"pr-0":"pr-2")},l&&(0,e.jsx)(i.Icon,{autoFlip:t.needFlip,className:"header-icon",color:s.colors.palette.dark[600],size:12,icon:d.svg}),(0,e.jsx)("div",{title:this.state.currentLabel,className:"item-label editor"},t.allowEditable&&n?(0,e.jsx)(i.TextInput,{size:"sm",ref:e=>{this.editor=e},value:this.state.currentLabel,onChange:e=>this.labelChanged(e.target.value),onAcceptValue:this.onRenameAccept,checkValidityOnChange:this.checkValidity,checkValidityOnAccept:this.checkValidity,onBlur:e=>this.handleLabelBlur(e.target.value)}):(0,e.jsx)(e.React.Fragment,null,this.state.currentLabel))),o&&o(t))))))}});class Pe extends e.React.PureComponent{constructor(t){super(t),this.handleChange=e=>{const t=(null==e?void 0:e.target.value)||"";this.setState({searchText:t},(()=>{const{onSearchTextChange:e}=this.props;e&&e(t)}))},this.handleSubmit=e=>{const{onSubmit:t}=this.props;t&&t(e)},this.onKeyUp=e=>{e&&e.target&&"Enter"===e.key&&this.handleSubmit(e.target.value)},this.handleClear=e=>{this.setState({searchText:""}),e.stopPropagation()},this.getStyle=()=>e.css`
      position: relative;
      .toc-search-input {
        .search-close-icon {
          padding: 0.125rem;
        }
      }
    `,this.state={searchText:t.searchText||""}}componentDidUpdate(e){if(this.props.searchText!==e.searchText&&this.props.searchText!==this.state.searchText){const{searchText:e}=this.props;this.setState({searchText:e})}}render(){const{placeholder:t,className:o,inputRef:n,onFocus:s,onBlur:a}=this.props,{searchText:l}=this.state;return(0,e.jsx)("div",{css:this.getStyle(),className:o},(0,e.jsx)(i.TextInput,{className:"toc-search-input",ref:n,placeholder:t,allowClear:!0,onChange:this.handleChange,onBlur:a,onFocus:s,value:l,onKeyDown:e=>this.onKeyUp(e)}))}}function De(e,t){let i=e.id;return t===Se.Widget||t===Se.Section||t===Se.ScreenGroup?i=e.layoutId+r+e.layoutItemId+r+e.id:t!==Se.View&&t!==Se.Screen&&t!==Se.ScreenMainStage&&t!==Se.ScreenSrollingPanel||(i=e.layoutId+r+e.layoutItemId+r+(e.sectionId||e.screenGroupId)+r+e.id,t!==Se.ScreenMainStage&&t!==Se.ScreenSrollingPanel||(i=i+r+t)),i}function Te(e){var t;const i=null===(t=null==e?void 0:e.id)||void 0===t?void 0:t.split(r);return!i||i.length<2?null:{layoutId:i[0],layoutItemId:i[1]}}function je(e){const t=Te(e);(0,o.pendLayoutItem)(t)}function ke(e){var t;return(null===(t=null==e?void 0:e.children)||void 0===t?void 0:t.length)>0}function Oe(t,i){const{theme:o}=t,{showSearch:n}=i;return e.css`
    height: 100%;
    padding-bottom: 10px;
    position: relative;
    .toc-dropzone {
      position: absolute;
      pointer-events: none;
    }
    .outline-list-top {
      height: ${n?82:44}px;
      padding: 10px ${16}px;
      padding-top: 0;
      .outline-title {
        user-select: none;
        color: ${o.colors.palette.dark[600]};
        font-weight: ${o.typography.weights.extraBold};
      }
      .outline-top-btns {
        margin-right: -${o.components.button.sizes.sm.paddingX};
        // .btn:hover {
        //   svg {
        //     color: ${o.colors.black};
        //   }
        // }
      }
      .toc-search-input {
        margin-top: calc(12px - ${o.components.button.sizes.sm.paddingY});
      }
    }
    .outline-tree-container {
      color: ${o.colors.palette.dark[600]};
      height: calc(100% - ${n?82:44}px);
      overflow-y: auto;
      .outline-tree {
        >div {
          overflow: hidden;
          >div {
            overflow-x: auto;
            >.collapse {
              min-width: fit-content;
            }
          }
        }
        .tree-item-common {
          padding-left: ${16}px;
          .tree-arrow {
            display: none;
          }
        }
        .outline-title-item {
          margin-top: ${e.polished.rem(6)};
          .tree-item-common {
            .left-content {
              font-weight: ${o.typography.weights.extraBold};
              color: ${o.colors.palette.dark[600]};
            }
          }
          .tree-item-common:hover {
            background-color:${e.polished.rgba(o.colors.palette.light[400],.6)};
          }
        }
        .toc-item-dropzone {
          .toc-item {
            padding-left: ${e.polished.rem(4)};
          }
        }
      }
    }

  `}var Ae,Me,Re,Le,Ne;function Ee(e,t,i){return e?e[t]||e[i]:null}!function(e){e[e.BringForward=0]="BringForward",e[e.SendBackward=1]="SendBackward",e[e.BringToFront=2]="BringToFront",e[e.SendToBack=3]="SendToBack"}(Ae||(Ae={})),function(e){e.Page="PAGE",e.Widget="WIDGET",e.View="VIEW",e.Screen="SCREEN"}(Me||(Me={})),function(e){e.Auto="auto",e[e.Normal=0]="Normal",e[e.BoundaryDropArea=10]="BoundaryDropArea",e[e.DragMoveTip=20]="DragMoveTip",e[e.HandlerTools=30]="HandlerTools",e[e.DraggingItem=40]="DraggingItem"}(Re||(Re={})),function(e){e[e.Row=0]="Row",e[e.Column=1]="Column",e[e.Tab=2]="Tab",e[e.Plain=3]="Plain"}(Le||(Le={})),function(e){e.Auto="AUTO",e.Stretch="STRETCH",e.Custom="CUSTOM"}(Ne||(Ne={}));var Be=g(8683),Je=g.n(Be),Fe=g(687),$e=g.n(Fe),ze=g(5543),He=g.n(ze),Ve=g(4175),Ze=g.n(Ve),Ue=g(760),Ge=g.n(Ue),We=g(1745),_e=g.n(We),Ke=g(4767),qe=g.n(Ke);let Xe;function Ye(t,i,o,n){var s,a;let l;const{appConfig:r}=i,{id:d,layoutId:c,layoutItemId:p,type:g,sectionId:h,screenGroupId:u}=t,m=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i}(t,["id","layoutId","layoutItemId","type","sectionId","screenGroupId"]);g===Se.Widget?l=r.widgets[d]:g===Se.Section?l=r.sections[d]:g===Se.View?l=r.views[d]:g===Se.ScreenGroup?l=r.screenGroups[d]:g!==Se.Screen&&g!==Se.ScreenMainStage&&g!==Se.ScreenSrollingPanel||(l=r.screens[d]);const{currentSelectedItemId:v}=o,f={layoutId:c,layoutItemId:p,id:d};g===Se.View&&(f.sectionId=h),g!==Se.Screen&&g!==Se.ScreenMainStage&&g!==Se.ScreenSrollingPanel||(f.screenGroupId=u);const b=De(f,g),{expandIds:y,renderOutlineContent:I}=Xe,x=y.includes(b),w=function(t,i){let o;return o=t===e.PagePart.Header?i.allowEditableForHeader:t===e.PagePart.Footer?i.allowEditableForFooter:t===e.PagePart.Body?i.allowEditable:i.allowEditableForDialog,o}(t.pagePart,i),S=Object.assign({id:b,data:l,label:null!=n?n:l.label,type:g,allowEditable:w,isExpand:x,isActive:v===b,renderItem:I},m);if(S.icon=l.icon,"string"==typeof l.icon){const i=null===(s=null==r?void 0:r.layouts)||void 0===s?void 0:s[t.layoutId];if((null==i?void 0:i.type)===e.LayoutType.FlowLayout){const e=null===(a=null==i?void 0:i.content)||void 0===a?void 0:a[t.layoutItemId];(null==e?void 0:e.widgetId)&&(S.icon=Je())}}return S.icon||(g===Se.Widget?S.icon={svg:$e()}:g===Se.Section?S.icon={svg:He()}:g===Se.View?S.icon={svg:Ze()}:g===Se.ScreenGroup?S.icon={svg:Ge()}:g===Se.Screen&&(S.icon={svg:_e()})),S}function Qe(t,i,o,n,s,a){var l;const{appConfig:r,browserSizeMode:d}=s,c=Ee(t,d,r.mainSizeMode);if(!c)return;const p=null===(l=null==r?void 0:r.layouts)||void 0===l?void 0:l[c],{currentSelectedItemId:g}=a,{expandIds:h,renderOutlineContent:u}=Xe,m=h.includes(c),v={id:c,label:p.label,index:i,level:o,pagePart:n,icon:qe(),type:Se.Layout,isExpand:m,isActive:g===c,renderItem:u},f=tt(e.LayoutItemType.Widget,r.layouts[c])||[],b=tt(e.LayoutItemType.Section,r.layouts[c])||[];return v.children=ot(b,f,v.level+1,n,s,a),v}function et(e,t,i){var o,n,s,a;const{appConfig:l}=t,r=Ye(e,t,i);r.needFlip=null===(s=null===(n=null===(o=null==r?void 0:r.data)||void 0===o?void 0:o.manifest)||void 0===n?void 0:n.properties)||void 0===s?void 0:s.flipIcon;const d=l.widgets[e.id];if(d.layouts){const e=Object.keys(d.layouts).filter((e=>0!==e.indexOf("_")));if(1===e.length){const e=d.layouts[Object.keys(d.layouts)[0]];r.children=null===(a=Qe(e,0,r.level,r.pagePart,t,i))||void 0===a?void 0:a.children}else r.children=[],e.forEach(((e,o)=>{const n=Qe(d.layouts[e],o,r.level+1,r.pagePart,t,i);n&&r.children.push(n)}))}return r}function tt(t,i){let o;return t===e.LayoutItemType.Widget?o="widgetId":t===e.LayoutItemType.Section?o="sectionId":t===e.LayoutItemType.ScreenGroup&&(o="screenGroupId"),i&&i.content&&i.order?i.order.asMutable().filter((e=>{var n;return(null===(n=i.content[e])||void 0===n?void 0:n.type)===t&&i.content[e][o]&&!i.content[e].isPending})).map((e=>({id:i.content[e][o],layoutId:i.id,layoutItemId:e}))):[]}function it(t,i,o,n){var s;let a=[],l=[],r=[];const{appConfig:d,browserSizeMode:c}=o;if(t===e.ContainerType.Header||t===e.ContainerType.Footer){if(d[t]){const i=Ee(d[t].layout,c,d.mainSizeMode);a=tt(e.LayoutItemType.Widget,d.layouts[i])||[],l=tt(e.LayoutItemType.Section,d.layouts[i])||[]}}else if(d[t]&&d[t][i]){const o=d[t][i],p=Ee(n?null===(s=o[n[0]])||void 0===s?void 0:s[n[1]]:o.layout,c,d.mainSizeMode);a=tt(e.LayoutItemType.Widget,d.layouts[p])||[],l=tt(e.LayoutItemType.Section,d.layouts[p])||[],r=tt(e.LayoutItemType.ScreenGroup,d.layouts[p])||[]}return{widgets:a,sections:l,screens:r}}function ot(t,i,o,n,s,a){const l=[];return l.push(...t.map(((t,i)=>(t.index=i,t.level=o,t.pagePart=n,t.type=Se.Section,function(t,i,o){const{appConfig:n}=i,{level:s,pagePart:a,layoutId:l,layoutItemId:r,id:d}=t,c=Ye(t,i,o),p=n.sections[t.id];return p.views&&(c.children=p.views.asMutable().map(((t,n)=>function(t,i,o){const n=Ye(t,i,o),{widgets:s,sections:a}=it(e.ContainerType.View,t.id,i);return n.children=ot(a,s,n.level+1,n.pagePart,i,o),n}({id:t,sectionId:d,layoutId:l,layoutItemId:r,index:n,level:s+1,pagePart:a,type:Se.View},i,o)))),c}(t,s,a))))),l.push(...i.map(((e,t)=>(e.index=t,e.level=o,e.pagePart=n,e.type=Se.Widget,et(e,s,a))))),l}function nt(e,t,i,o,n,s,a){var l;let r=[];if(e.length){let t=[];if(i.length){const o=null===(l=i[0]||e[0])||void 0===l?void 0:l.layoutId,n=s.appConfig.layouts[o].order.asMutable(),a={};i.forEach((e=>{e.type=Se.Widget,a[e.layoutItemId]=e})),e.forEach((e=>{a[e.layoutItemId]=e})),n.forEach((e=>{a[e]&&t.push(a[e])}))}else t=e;r.push(...t.map(((e,t)=>(e.index=t,e.level=o,e.pagePart=n,e.type===Se.Widget?et(e,s,a):(e.type=Se.ScreenGroup,function(e,t,i){const{appConfig:o}=t,{level:n,pagePart:s,layoutId:a,layoutItemId:l,id:r}=e,d=Ye(e,t,i),c=o.screenGroups[e.id];return c.screens&&(d.children=c.screens.asMutable().map(((e,o)=>function(e,t,i){const o=Ye(e,t,i);e.level=o.level+1,e.type=Se.ScreenMainStage;const n=Ye(e,t,i,t.formatMessage("mainStage"));e.type=Se.ScreenSrollingPanel;const s=Ye(e,t,i,t.formatMessage("scrollingPanel")),{widgets:a,sections:l}=it("screens",e.id,t,["main","layout"]),{widgets:r,sections:d}=it("screens",e.id,t,["panel","layout"]);return n.children=ot(l,a,o.level+2,o.pagePart,t,i),s.children=ot(d,r,o.level+2,o.pagePart,t,i),n.allowEditable=!1,s.allowEditable=!1,o.children=[n,s],o}({id:e,screenGroupId:r,layoutId:a,layoutItemId:l,index:o,level:n+1,pagePart:s,type:Se.Screen},t,i)))),d}(e,s,a))))))}else r=ot(t,i,o,n,s,a);return r}var st=g(224),at=g.n(st);const lt=t=>{const i=window.SVG,{className:o}=t,n=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",o);return i?e.React.createElement(i,Object.assign({className:s,src:at()},n)):e.React.createElement("svg",Object.assign({className:s},n))};var rt=g(6465),dt=g.n(rt);const ct=t=>{const i=window.SVG,{className:o}=t,n=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",o);return i?e.React.createElement(i,Object.assign({className:s,src:dt()},n)):e.React.createElement("svg",Object.assign({className:s},n))},pt=[{name:"offset",options:{offset:[0,10]}}];class gt extends e.React.Component{constructor(n){var s,a;super(n),this.singleAndDoubleClickTimeout=void 0,this.handleOnTocDoubleClick=(e,t)=>{this.singleAndDoubleClickTimeout&&(clearTimeout(this.singleAndDoubleClickTimeout),this.singleAndDoubleClickTimeout=void 0),this.checkIfReadOnly(e)||this.setState({editableItemId:e.id})},this.handleRename=(e,i)=>((null==i?void 0:i.trim())||(i=e.label),this.setState({editableItemId:""}),function(e,i){return!(!i||""===i||""===i.replace(/(\r\n|\n|\r)/g,"")||(e.type===Se.Widget?(0,t.getAppConfigAction)().editWidgetProperty(e.data.id,"label",i).exec():e.type===Se.Section?(0,t.getAppConfigAction)().editSectionProperty(e.data.id,"label",i).exec():e.type===Se.View?(0,t.getAppConfigAction)().editView(e.data.set("label",i)).exec():e.type===Se.ScreenGroup?(0,t.getAppConfigAction)().editScreenGroupProperty(e.data.id,"label",i).exec():e.type===Se.Screen&&(0,t.getAppConfigAction)().editScreen(e.data.set("label",i)).exec(),0))}(e,i)),this.checkIfReadOnly=e=>{var t,i;const o=e.id.split(r);let n;return n=e.type===Se.ScreenGroup||e.type===Se.Section?o[0]===(null===(t=this.props.selection)||void 0===t?void 0:t.layoutId)&&o[1]===(null===(i=this.props.selection)||void 0===i?void 0:i.layoutItemId):this.state.currentSelectedItemId===e.id,!(n&&e.allowEditable&&e.pagePart===this.props.activePagePart)},this.handleClickItem=(e,t)=>{this.singleAndDoubleClickTimeout&&(clearTimeout(this.singleAndDoubleClickTimeout),this.singleAndDoubleClickTimeout=void 0),e.allowEditable&&(this.singleAndDoubleClickTimeout=setTimeout((()=>{if(e.type===Se.Label||e.type===Se.Layout)return void this.handleExpand(e);const{currentSelectedItemId:t,itemJson:i}=this.state;t!==e.id?e.type===Se.Label||e.type===Se.Layout?(this.setState({itemJson:Object.assign({},i)}),this.props.onClickItem(e)):(this.setState({currentSelectedItemId:e.id,itemJson:O(i,[e.id])}),this.props.onClickItem(e)):this.handleExpand(e)}),200))},this.handleExpand=e=>{const{expandIds:t}=this;e.isExpand?t.includes(e.id)&&t.splice(t.indexOf(e.id),1):t.includes(e.id)||t.push(e.id),this.setState({itemJson:k(this.state.itemJson,t)})},this.handleExpandIdsByInsideLayouts=(e,t,i)=>{ke(e)&&(i?t[e.id]=!0:delete t[e.id],e.children.forEach((e=>{this.handleExpandIdsByInsideLayouts(e,t,i)})))},this.handleExpandOrCollapseAll=(e,t,i)=>{i.stopPropagation();const o={};this.expandIds.forEach((e=>{o[e]=!0})),this.handleExpandIdsByInsideLayouts(t,o,e),this.expandIds=Object.keys(o).map((e=>e)),this.setState({itemJson:k(this.state.itemJson,this.expandIds)})},this.handleArrowClick=e=>{this.handleExpand(e)},this.handleSearchTextChange=e=>{this.setState({filterText:e},(()=>{this.setState({itemJson:this.getItemJsonByAppConfig()})}))},this.handleSearchSubmit=e=>{this.setState({filterText:e},(()=>{this.setState({itemJson:this.getItemJsonByAppConfig()})}))},this.handleSearchBtnClick=e=>{e.stopPropagation(),this.state.showSearch&&this.handleSearchTextChange(""),this.setState({showSearch:!this.state.showSearch})},this.handleSearchOpened=()=>{this.searchInput&&(this.searchInput.select(),this.searchInput.focus())},this.getItemJsonByAppConfig=i=>function(i,n,s){var a;const l=[],{appConfig:d,currentPageId:c,currentDialogId:p,activePagePart:g}=i,{filterText:h,currentSelectedItemId:u}=n,m=[i.formatMessage("variableHeader"),i.formatMessage("variableFooter"),i.formatMessage("variableBody")],v=[e.PagePart.Header,e.PagePart.Footer,e.PagePart.Body];Xe=s;const{expandIds:f,renderTitleRightContent:b,lastPageId:y}=Xe,I={id:"ROOT",type:Se.Label,children:l,label:""};if(!d)return(0,e.Immutable)(I);if(p){const{widgets:t,sections:o}=it(e.ContainerType.Dialog,p,i);I.children=ot(o,t,0,null,i,n)}else for(let s=0;s<3;s++){if(0===s&&!i.enableHeader||1===s&&!i.enableFooter)continue;const p=s+"-"+m[s],I=u===p;I&&(f.includes(p)||f.push(p));const x=f.includes(p),w={label:m[s],pagePart:v[s],id:p,index:s,level:0,mustShowArrow:!0,isActive:I,isExpand:x,type:Se.Label,className:"outline-title-item",allowEditable:!0,renderRightContent:b,arrowIcon:t=>e.React.createElement("div",null)};let S,C,P=!0;if(w.label===i.formatMessage("variableHeader")?(S=e.ContainerType.Header,C="header",i.enableHeader||(P=!1)):w.label===i.formatMessage("variableBody")?(S=e.ContainerType.Page,C=c,t.appConfigUtils.isRealPage(d,c)?Xe.lastPageId=c:C=y):(S=e.ContainerType.Footer,C="footer",i.enableFooter||(P=!1)),P){const{widgets:t,sections:s,screens:l}=it(S,C,i),d=nt(l,s,t,w.level,w.pagePart,i,n),c=w.pagePart===e.PagePart.Body&&(null===(a=i.appConfig.pages[i.currentPageId])||void 0===a?void 0:a.mode)===e.PageMode.AutoScroll;w.children=c?d.filter((e=>{var t;const i=e.id.split(r);return(0,o.supportSinking)({layoutId:i[0],layoutItemId:i[1]})||(null===(t=e.children)||void 0===t?void 0:t.length)>0})):d,(h&&""!==h||g===w.pagePart)&&w.children&&w.children.length>0&&(w.isExpand=!0,f.includes(w.id)||f.push(w.id))}l.push(w)}let x=(0,e.Immutable)(I);if(h&&""!==h){const e=T(x,h.trim());x=j(e,h.trim()),Xe.expandIds=M(x),t.builderAppSync.publishChangeSelectionToApp(null)}return x}(null!=i?i:this.props,this.state,this),this.getAlignmentsDropDownItems=e=>{const t=[{label:this.props.formatMessage(this.isRTL?"snapToRight":"snapToLeft"),event:t=>{!function(e){const t=Te(e);t&&o.fixedLayoutActions.alignTo(t,"left")}(e),t.stopPropagation()}},{label:this.props.formatMessage("alignHCenter"),event:t=>{!function(e){const t=Te(e);t&&o.fixedLayoutActions.alignHorizontalCenter(t)}(e),t.stopPropagation()}},{label:this.props.formatMessage(this.isRTL?"snapToLeft":"snapToRight"),event:t=>{!function(e){const t=Te(e);t&&o.fixedLayoutActions.alignTo(t,"right")}(e),t.stopPropagation()}},{label:this.props.formatMessage("snapToTop"),event:t=>{!function(e){const t=Te(e);t&&o.fixedLayoutActions.alignTo(t,"top")}(e),t.stopPropagation()}},{label:this.props.formatMessage("alignVCenter"),event:t=>{!function(e){const t=Te(e);t&&o.fixedLayoutActions.alignVerticalCenter(t)}(e),t.stopPropagation()}},{label:this.props.formatMessage("snapToBottom"),event:t=>{!function(e){const t=Te(e);t&&o.fixedLayoutActions.alignTo(t,"bottom")}(e),t.stopPropagation()}},{label:this.props.formatMessage("fullWidth"),event:t=>{!function(e){const t=Te(e);t&&o.fixedLayoutActions.alignFullWidth(t)}(e),t.stopPropagation()}},{label:this.props.formatMessage("fullHeight"),event:t=>{!function(e){const t=Te(e);t&&o.fixedLayoutActions.alignFullHeight(t)}(e),t.stopPropagation()}},{label:this.props.formatMessage("fullSize"),event:t=>{!function(e){const t=Te(e);t&&o.fixedLayoutActions.alignFullSize(t)}(e),t.stopPropagation()}}];return t},this.getPinDropDownItems=t=>{const i=["TR","TC","TL","MR","MC","ML","BR","BC","BL"],n=[];return["TL","TC","TR","ML","MC","MR","BL","BC","BR"].forEach(((s,a)=>{const l=this.props.formatMessage(this.isRTL?i[a]:s);n.push({label:l,event:i=>{!function(t,i){const n=Te(t);if(n){const t=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`),s=(t.contentDocument||t.contentWindow.document).querySelector(`div.exb-rnd[data-layoutid="${n.layoutId}"][data-layoutitemid="${n.layoutItemId}"]`);if(s){const e={TL:1,TC:2,TR:3,ML:4,MC:5,MR:6,BL:7,BC:8,BR:9};(0,o.floatingLayoutItem)(n,s.getBoundingClientRect(),e[i])}}}(t,s),i.stopPropagation()}})})),n},this.getArrangementsDropDownItems=e=>{const t=[{label:this.props.formatMessage("sendBackward"),event:t=>{!function(e){const t=Te(e);t&&o.fixedLayoutActions.sendBackward(t)}(e),t.stopPropagation()}},{label:this.props.formatMessage("bringForward"),event:t=>{!function(e){const t=Te(e);t&&o.fixedLayoutActions.bringForward(t)}(e),t.stopPropagation()}},{label:this.props.formatMessage("sendToBack"),event:t=>{!function(e){const t=Te(e);t&&o.fixedLayoutActions.sendToBack(t)}(e),t.stopPropagation()}},{label:this.props.formatMessage("bringToFront"),event:t=>{!function(e){const t=Te(e);t&&o.fixedLayoutActions.bringToFront(t)}(e),t.stopPropagation()}}];return t},this.isOnlyOneViewOrScreen=e=>{const{appConfig:t}=this.props,i=e.id.split(r)[2];return e.type===Se.View&&1===t.sections[i].views.length||e.type===Se.Screen&&1===t.screenGroups[i].screens.length},this.getDropdwnItemsForSpecialCases=(t,i)=>{const{browserSizeMode:o,lockLayout:n,runMode:s}=this.props;if(s||n){if(t.type===Se.Section||t.type===Se.View||t.type===Se.ScreenGroup||t.type===Se.Screen||t.type===Se.Widget&&t.data.manifest.widgetType===e.WidgetType.Layout)return i.slice(0,1)}else if(t.type===Se.View||t.type===Se.Screen||t.type===Se.ScreenGroup){if(t.type===Se.ScreenGroup&&o===e.BrowserSizeMode.Large)i.push({label:this.props.formatMessage("pendingTip"),event:e=>{je(t),e.stopPropagation()}});else{if((t.type===Se.ScreenGroup||t.type===Se.Screen)&&o!==e.BrowserSizeMode.Large)return i.slice(0,1);if(this.isOnlyOneViewOrScreen(t))return i.slice(0,2)}return i}return null},this.isSupportDropDown=e=>e===Se.Section||e===Se.View||e===Se.ScreenGroup||e===Se.Screen||e===Se.Widget,this.getDropDownItems=i=>{var n;if(!this.isSupportDropDown(i.type))return[];const{theme:s,appConfig:a,currentPageId:l,lockLayout:d,runMode:c}=this.props,p=[{a11yFocusBack:!1,label:this.props.formatMessage("rename"),event:e=>{this.handleOnTocDoubleClick(i,e)}},{label:this.props.formatMessage("duplicate"),event:e=>{!function(e){const i=e.id.split(r),n=i[0],s=i[1],a=(0,t.getAppConfigAction)();e.type===Se.Widget||e.type===Se.Section||e.type===Se.ScreenGroup?(0,o.duplicateLayoutItem)({layoutId:n,layoutItemId:s}):e.type===Se.View?(a.duplicateView(i[3],i[2],!0),a.exec()):e.type===Se.Screen&&(a.duplicateScreen(i[3],i[2],!0),a.exec())}(i),e.stopPropagation()}},{label:this.props.formatMessage("delete"),event:o=>{!function(i){const o=i.id.split(r),n=o[0],s=o[1];if(i.type===Se.View){if(i.id.indexOf(r)<0)return;(0,t.getAppConfigAction)().removeView(i.data.id,i.id.split(r)[2]).exec()}else if(i.type===Se.Screen){if(i.id.indexOf(r)<0)return;(0,t.getAppConfigAction)().removeScreen(i.data.id,i.id.split(r)[2]).exec()}else(0,e.getAppStore)().dispatch(t.builderActions.confirmDeleteContentChanged({layoutId:n,layoutItemId:s}))}(i),o.stopPropagation()}}];let g=[];ke(i)&&(g=[{divider:!0},{label:this.props.formatMessage("expandAll"),event:e=>{this.handleExpandOrCollapseAll(!0,i,e)}},{label:this.props.formatMessage("collapseAll"),event:e=>{this.handleExpandOrCollapseAll(!1,i,e)}}]);const h=this.getDropdwnItemsForSpecialCases(i,p);if(h)return h.push(...g),h;if(c)return p.splice(1,p.length-1),p.push(...g),p;if(d)return p.splice(1,1),p.push(...g),p;const u=Te(i),m=a.layouts[u.layoutId],v=m.content[u.layoutItemId];if(((null==m?void 0:m.type)!==e.LayoutType.FlowLayout||(0,o.supportFloating)(u)||(0,o.supportSinking)(u))&&p.push({label:this.props.formatMessage("pendingTip"),event:e=>{je(i),e.stopPropagation()}}),(null==m?void 0:m.type)===e.LayoutType.FixedLayout){const t=[{label:(null===(n=null==v?void 0:v.setting)||void 0===n?void 0:n.lockLayout)?this.props.formatMessage("unlockLayout"):this.props.formatMessage("lockLayout"),event:e=>{!function(e){const t=Te(e);t&&o.fixedLayoutActions.toggleLockLayout(t)}(i),e.stopPropagation()}},{label:(0,e.jsx)(I,{toggleContent:this.props.formatMessage("arrange"),modifiers:pt,direction:"right",theme:s,items:this.getArrangementsDropDownItems(i),icon:!1}),isBtn:!0},{label:(0,e.jsx)(I,{toggleContent:this.props.formatMessage("align"),modifiers:pt,direction:"right",theme:s,items:this.getAlignmentsDropDownItems(i),icon:!1}),isBtn:!0}];p.push(...t)}else null==m||m.type,e.LayoutType.FlowLayout;return this.props.lockLayout||(null==a?void 0:a.pages[l].mode)!==e.PageMode.AutoScroll||i.pagePart!==e.PagePart.Body||((0,o.supportFloating)(u)?p.push({label:(0,e.jsx)(I,{toggleContent:this.props.formatMessage("floating"),modifiers:pt,direction:"right",theme:s,items:this.getPinDropDownItems(i),icon:!1}),isBtn:!0}):(0,o.supportSinking)(u)&&p.push({label:this.props.formatMessage("sinking"),event:t=>{!function(t){if(t){const i=document.querySelector(`iframe[name="${e.APP_FRAME_NAME_IN_BUILDER}"]`),n=(i.contentDocument||i.contentWindow.document).querySelector(`div.exb-rnd[data-layoutid="${t.layoutId}"][data-layoutitemid="${t.layoutItemId}"]`);n&&(0,o.sinkingLayoutItem)(t,n.getBoundingClientRect())}}(u),t.stopPropagation()}})),p.push(...g),p},this.renderTitleRightContent=t=>{const o=function(t,i){const{theme:o}=i;return e.css`
    margin-right:calc(14px - ${o.components.button.sizes.sm.paddingX});
    .title-arrow .jimu-icon {
      transform-origin: center;
      transform: ${`rotate(${t.isExpand?180:0}deg)`};
      transition: transform .5s;
    }

  `}(t,this.props);return(0,e.jsx)("div",{css:o},(0,e.jsx)(i.Button,{icon:!0,type:"tertiary",size:"sm",className:"title-arrow jimu-outline-inside"},(0,e.jsx)(Z,null)))},this.renderCommonRightContent=t=>{const{theme:i,runMode:o}=this.props,n=this.getDropDownItems(t);if(n.length<1)return(0,e.jsx)("div",null);const s=function(t){const{theme:i}=t;return e.css`
    margin-right:calc(16px - ${i.components.button.sizes.sm.paddingX});
    .dropDown {
      visibility: visible;
      .btn {
        visibility: hidden;
        color: ${i.colors.palette.dark[600]};
      }
      .btn:hover {
        color: ${i.colors.black};
      }
    }
  `}(this.props);return(0,e.jsx)("div",{className:"d-flex item-action-button",css:s},(0,e.jsx)("div",{title:this.props.formatMessage("more"),className:"dropDown"},(0,e.jsx)(y,{modifiers:pt,direction:"down",theme:i,items:n,insideOutline:!0,avoidNestedToggle:o,delayToggle:o?0:150})))},this.renderOutlineContent=t=>{var i;const{intl:o,theme:n}=this.props,s=!this.checkIfReadOnly(t),{editableItemId:a}=this.state,{type:l}=t,r=[Se.Section,Se.View,Se.ScreenGroup,Se.Screen,Se.Widget],d=(t.type===Se.Section||t.type===Se.ScreenGroup)&&(null===(i=this.state.currentSelectedItemId)||void 0===i?void 0:i.includes(t.id));return(0,e.jsx)(Ce,{className:d?"insideActive":"",intl:o,itemJson:t,onArrowClick:this.handleArrowClick,editable:a===t.id,onDoubleClick:s&&this.handleOnTocDoubleClick,renderRightContent:s&&r.includes(l)&&this.renderCommonRightContent,renameItem:this.handleRename,theme:n})},this.state={editableItemId:n.editableItemId,currentSelectedItemId:n.currentSelectedItemId,filterText:"",itemJson:void 0,showSearch:!1,showAlign:!1,showArrange:!1},this.expandIds=[],this.isRTL=null===(a=null===(s=(0,e.getAppStore)().getState())||void 0===s?void 0:s.appContext)||void 0===a?void 0:a.isRTL,this.alignRef=e.React.createRef(),this.arrangeRef=e.React.createRef(),this.tocItemCss=function(t){const{theme:i}=t;return e.css`
    :hover {
      .dropDown {
        z-index: 2;
        .btn {
          display: inline-flex;
        }
      }
      .editor {
        color: ${i.colors.black};
      }
    }
    &.active {
      .editor {
        color: ${i.colors.black};
      }
    }
  `}(n)}componentDidMount(){this.setState({itemJson:this.getItemJsonByAppConfig()})}shouldComponentUpdate(e,t){var i,o,n,s,a,l;const{appConfig:r}=this.props;let d=!1;if(e&&Object.keys(e).some((t=>this.props?"appConfig"!==t&&e[t]!==this.props[t]?(d=!0,!0):void 0:(d=!0,!0))),d)return!0;if(t&&Object.keys(t).some((e=>this.state?t[e]!==this.state[e]?(d=!0,!0):void 0:(d=!0,!0))),d)return!0;if(e.appConfig&&r&&e.appConfig!==r){const t=null==r?void 0:r.layouts,d=null===(i=e.appConfig)||void 0===i?void 0:i.layouts;if(t&&d&&t!==d&&function(e,t){let i=!1;return Object.keys(e).length!==Object.keys(t).length?i=!0:e&&Object.keys(e).some((o=>{const n=e[o],s=t[o];if(n!==s){if(n&&!s||!n&&s)return i=!0,!0;const e=n.content,t=s.content,o=n.order,a=s.order;if((e!==t||o!==a)&&(o!==a||e&&!t||Object.keys(e||{}).length!==Object.keys(t||{}).length))return i=!0,!0;if(e&&Object.keys(e).some((o=>{var n,s;const a=e[o],l=t[o];if(a&&!l||(null===(n=null==a?void 0:a.setting)||void 0===n?void 0:n.lockLayout)!==(null===(s=null==l?void 0:l.setting)||void 0===s?void 0:s.lockLayout)||(null==a?void 0:a.isPending)!==(null==l?void 0:l.isPending))return i=!0,!0})),i)return!0}})),i}(t,d))return!0;const c=null==r?void 0:r.widgets,p=null===(o=e.appConfig)||void 0===o?void 0:o.widgets;if(c&&p&&c!==p&&function(e,t){let i=!1;return Object.keys(e).length!==Object.keys(t).length?i=!0:Object.keys(e).some((o=>{const n=e[o],s=t[o];return s?n.label!==s.label||n.icon!==s.icon?(i=!0,!0):void 0:(i=!0,!0)})),i}(c,p))return!0;const g=null==r?void 0:r.sections,h=null===(n=e.appConfig)||void 0===n?void 0:n.sections;if(g&&h&&g!==h&&function(e,t){let i=!1;return Object.keys(e).length!==Object.keys(t).length?i=!0:Object.keys(e).some((o=>{const n=e[o],s=t[o];return s?n.label!==s.label||n.icon!==s.icon||s.views!==n.views?(i=!0,!0):void 0:(i=!0,!0)})),i}(g,h))return!0;const u=null==r?void 0:r.views,m=null===(s=e.appConfig)||void 0===s?void 0:s.views;if(u&&m&&u!==m&&function(e,t){let i=!1;return Object.keys(e).length!==Object.keys(t).length?i=!0:Object.keys(e).some((o=>{const n=e[o],s=t[o];return s?n.label!==s.label?(i=!0,!0):void 0:(i=!0,!0)})),i}(u,m))return!0;const v=null==r?void 0:r.screenGroups,f=null===(a=e.appConfig)||void 0===a?void 0:a.screenGroups;if(v&&f&&v!==f&&function(e,t){let i=!1;return Object.keys(e).length!==Object.keys(t).length?i=!0:Object.keys(e).some((o=>{const n=e[o],s=t[o];return s?n.label!==s.label||n.icon!==s.icon||s.screens!==n.screens?(i=!0,!0):void 0:(i=!0,!0)})),i}(v,f))return!0;const b=null==r?void 0:r.screens,y=null===(l=e.appConfig)||void 0===l?void 0:l.screens;if(b&&y&&b!==y&&function(e,t){let i=!1;return Object.keys(e).length!==Object.keys(t).length?i=!0:Object.keys(e).some((o=>{const n=e[o],s=t[o];return s?n.label!==s.label?(i=!0,!0):void 0:(i=!0,!0)})),i}(b,y))return!0}return!1}componentDidUpdate(e,t){const i=this.props,{itemJson:o,currentSelectedItemId:n,editableItemId:s}=this.state;let a,l=!1;if(i.currentSelectedItemId!==this.state.currentSelectedItemId||s!==t.editableItemId||i.enableFooter!==e.enableFooter||i.enableHeader!==e.enableHeader||i.appConfig!==e.appConfig||i.currentPageId!==e.currentPageId||i.currentDialogId!==e.currentDialogId||i.browserSizeMode!==e.browserSizeMode){if(l=!0,i.appConfig===e.appConfig&&i.currentPageId===e.currentPageId&&i.currentDialogId===e.currentDialogId&&i.browserSizeMode===e.browserSizeMode||i.currentSelectedItemId===this.state.currentSelectedItemId)if(i.currentSelectedItemId!==n){const e=A(o,[i.currentSelectedItemId]);a={currentSelectedItemId:i.currentSelectedItemId,itemJson:e},this.expandIds=M(e)}else{if(void 0!==e.lockLayout&&this.props.lockLayout!==e.lockLayout)return;a={itemJson:this.getItemJsonByAppConfig(i)}}else{const e=A(this.getItemJsonByAppConfig(i),[i.currentSelectedItemId]);a={currentSelectedItemId:i.currentSelectedItemId,itemJson:e},this.expandIds=M(e)}l&&this.setState(a)}}render(){const{itemJson:t,showSearch:o}=this.state,{theme:n}=this.props;return(0,e.jsx)("div",{css:Oe(this.props,this.state)},(0,e.jsx)("div",{className:"outline-list-top"},(0,e.jsx)("div",{className:"w-100 d-flex justify-content-center"},(0,e.jsx)(ct,{color:n.colors.palette.dark[400]})),(0,e.jsx)("div",{className:"d-flex justify-content-between align-items-end"},(0,e.jsx)("div",{className:"outline-title h5 mb-0 text-truncate"},this.props.formatMessage("outline")),(0,e.jsx)("div",{className:"d-flex outline-top-btns"},(0,e.jsx)(i.Button,{icon:!0,size:"sm",type:"tertiary",title:this.props.formatMessage("search"),"aria-label":this.props.formatMessage("search"),"aria-pressed":o,className:"search-btn",onClick:this.handleSearchBtnClick},(0,e.jsx)(lt,{className:"search-icon"})))),(0,e.jsx)(i.Collapse,{isOpen:o,onEntered:this.handleSearchOpened},(0,e.jsx)(Pe,{theme:n,placeholder:this.props.formatMessage("search"),searchText:this.state.filterText,onSearchTextChange:this.handleSearchTextChange,onSubmit:this.handleSearchSubmit,inputRef:e=>{this.searchInput=e}}))),(0,e.jsx)("div",{className:"w-100 outline-tree-container"},(0,e.jsx)(N,{hideRoot:!0,className:"outline-tree",itemJson:t,onClickItem:this.handleClickItem,handleExpand:this.handleExpand})))}}const ht=e.ReactRedux.connect(((t,i)=>{var o,n,s,a,l,r,d,c,p,g,h,u,m,v,f,b,y,I,x,w,S,C,P,D,T,j,k,O,A,M,R,L,N,E,B;const J=i.currentPageId,F=t.appStateInBuilder&&t.appStateInBuilder.appRuntimeInfo&&t.appStateInBuilder.appRuntimeInfo.selection,$=t.appStateInBuilder&&t.appStateInBuilder.appConfig,z=F&&$.layouts[F.layoutId]&&$.layouts[F.layoutId].content&&$.layouts[F.layoutId].content[F.layoutItemId];let H,V,Z;if(z)if(z.type===e.LayoutItemType.Section){const e=null===(s=null===(n=null===(o=t.appStateInBuilder)||void 0===o?void 0:o.appRuntimeInfo)||void 0===n?void 0:n.sectionNavInfos)||void 0===s?void 0:s[z.sectionId],i=null===(a=t.appStateInBuilder)||void 0===a?void 0:a.appConfig.sections[z.sectionId];V=null!==(l=null==e?void 0:e.currentViewId)&&void 0!==l?l:null==i?void 0:i.views[0],H=V?De(Object.assign(Object.assign({},F),{id:V,sectionId:z.sectionId}),Se.View):De(Object.assign({id:z.sectionId},F),Se.Section)}else if(z.type===e.LayoutItemType.ScreenGroup){const e=null===(c=null===(d=null===(r=t.appStateInBuilder)||void 0===r?void 0:r.appRuntimeInfo)||void 0===d?void 0:d.screenGroupNavInfos)||void 0===c?void 0:c[z.screenGroupId],i=t.appStateInBuilder.appConfig.screenGroups[z.screenGroupId].screens[null!==(p=null==e?void 0:e.activeIndex)&&void 0!==p?p:0],o=null===(g=t.appStateInBuilder)||void 0===g?void 0:g.appConfig.screens[i];Z=null==o?void 0:o.id,H=Z?De(Object.assign(Object.assign({},F),{id:Z,screenGroupId:z.screenGroupId}),Se.Screen):De(Object.assign({id:z.screenGroupId},F),Se.ScreenGroup)}else z.type===e.LayoutItemType.Widget&&(H=De(Object.assign({id:z.widgetId},F),Se.Widget));const U=!!(null===(u=null===(h=null==$?void 0:$.pages)||void 0===h?void 0:h[J])||void 0===u?void 0:u.header),G=!!(null===(v=null===(m=null==$?void 0:$.pages)||void 0===m?void 0:m[J])||void 0===v?void 0:v.footer);return{currentSelectedItemId:H,selection:F,activePagePart:null===(b=null===(f=null==t?void 0:t.appStateInBuilder)||void 0===f?void 0:f.appRuntimeInfo)||void 0===b?void 0:b.activePagePart,allowEditableForDialog:!!(null===(w=null===(x=null===(I=null===(y=null==t?void 0:t.appStateInBuilder)||void 0===y?void 0:y.appConfig)||void 0===I?void 0:I.dialogs)||void 0===x?void 0:x[i.currentDialogId])||void 0===w?void 0:w.layout[i.browserSizeMode]),allowEditableForHeader:!(!U||!(null===(P=null===(C=null===(S=null==t?void 0:t.appStateInBuilder)||void 0===S?void 0:S.appConfig)||void 0===C?void 0:C.header)||void 0===P?void 0:P.layout[i.browserSizeMode])),allowEditableForFooter:!(!G||!(null===(j=null===(T=null===(D=null==t?void 0:t.appStateInBuilder)||void 0===D?void 0:D.appConfig)||void 0===T?void 0:T.footer)||void 0===j?void 0:j.layout[i.browserSizeMode])),allowEditable:!!(null===(M=null===(A=null===(O=null===(k=null==t?void 0:t.appStateInBuilder)||void 0===k?void 0:k.appConfig)||void 0===O?void 0:O.pages)||void 0===A?void 0:A[J])||void 0===M?void 0:M.layout[i.browserSizeMode]),appConfig:$,lockLayout:null===(N=null===(L=null===(R=null==t?void 0:t.appStateInBuilder)||void 0===R?void 0:R.appConfig)||void 0===L?void 0:L.forBuilderAttributes)||void 0===N?void 0:N.lockLayout,enableHeader:U,enableFooter:G,runMode:(null===(B=null===(E=null==t?void 0:t.appStateInBuilder)||void 0===E?void 0:E.appRuntimeInfo)||void 0===B?void 0:B.appMode)===e.AppMode.Run}}))(gt);var ut=function(e,t,i,o){return new(i||(i=Promise))((function(n,s){function a(e){try{r(o.next(e))}catch(e){s(e)}}function l(e){try{r(o.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,l)}r((o=o.apply(e,t||[])).next())}))};const mt=Object.assign({},l,e.defaultMessages,n.defaultMessages,i.defaultMessages);class vt extends e.React.PureComponent{constructor(o){super(o),this.lastResizeCall=null,this.emptyLayout={},this.formatMessage=(e,t)=>this.props.intl.formatMessage({id:e,defaultMessage:mt[e]},t),this.getUniqueIds=(t,i,o)=>{const n=[];for(let s=0;s<o;s++){const o=e.appConfigUtils.getUniqueId(t,i);n.push(o),t=t.setIn([i+"s",o],{id:o})}return n},this.getUniqueLabels=(t,i,o)=>{const n=[];for(let s=0;s<o;s++){const o=e.appConfigUtils.getUniqueId(t,i),s=e.appConfigUtils.getUniqueLabel(t,i,i);n.push(s),t=t.setIn([i+"s",o],{id:o,label:s})}return n},this.changeSelection=e=>{t.builderAppSync.publishChangeSelectionToApp(e)},this.changeContent=e=>{const t=e.id.split(r);this.changeSelection({layoutId:t[0],layoutItemId:t[1],autoScroll:!0})},this.changeView=e=>{const i=e.id.split(r);this.changeSelection({layoutId:i[0],layoutItemId:i[1],autoScroll:!0}),t.builderAppSync.publishSectionNavInfoToApp(i[2],{currentViewId:i[3],useProgress:!1})},this.changeScreen=e=>{const i=e.id.split(r);this.changeSelection({layoutId:i[0],layoutItemId:i[1],autoScroll:!0}),t.builderAppSync.publishScreenGroupNavInfoToApp(i[2],e.index)},this.changeLayout=e=>{},this.getCurrentPageId=()=>{let e;const i=(0,t.getAppConfigAction)().appConfig;return i.pageStructure.some(((o,n)=>{const s=Object.keys(o)[0];if(t.appConfigUtils.isRealPage(i,s))return e=s,!0})),e||i.pageStructure.some(((o,n)=>o[Object.keys(o)[0]].some((o=>{if(t.appConfigUtils.isRealPage(i,o))return e=o,!0})))),t.builderAppSync.publishPageChangeToApp(e),e},this.renderActionBtn=(t,o,n)=>(0,e.jsx)(i.Button,{title:t,size:"sm",color:"link",className:" rounded icon page-action-btn",onClick:n},(0,e.jsx)(i.Icon,{size:12,icon:o})),this.PageListWrapper=()=>(0,e.jsx)(se,{formatMessage:this.formatMessage,onDefaultClick:this.setHomePage,addPageWithType:this.addPageWithType,isPageTemplateLoading:this.state.isPageTemplateLoading,editablePageItemId:this.state.editablePageItemId,theme:this.props.theme,changeEditablePageItemId:this.changeEditablePageId,currentPageItemId:this.props.currentDialogId?null:this.props.currentPageId,removePage:this.removePage,intl:this.props.intl,duplicatePage:this.duplicatePage,renamePage:this.renamePage,reOrderPage:this.orderPageBelowPage,onClickPage:this.changeCurrentPage,movePageIntoPage:this.movePageIntoPage,browserSizeMode:this.props.browserSizeMode}),this.DialogListWrapper=()=>(0,e.jsx)(we,{formatMessage:this.formatMessage,forceRefresh:"dialog"===this.state.selectedTabId,onSplashClick:this.setSplashDialog,theme:this.props.theme,intl:this.props.intl,currentDialogItemId:this.props.currentDialogId,addDialog:this.addDialog,removeDialog:this.removeDialog,duplicateDialog:this.duplicateDialog,renameDialog:this.renameDialog,editableDialogItemId:this.state.editableDialogItemId,changeEditableDialogItemId:this.changeEditableDialogId,reOrderDialog:this.orderDialogBelowDialog,onClickDialog:this.changeCurrentDialog}),this.getStyle=t=>{const{pageTocH:i}=this.state;return e.css`
      overflow: hidden;

      .page-toc {
        background-color: ${t.colors.palette.light[300]};
        height: ${i>0?`${i}px`:"33%"};

        .page-list,
        .dialog-list{
          height: calc(100% - 10px);
        }
      }

      .outline-toc {
        background-color: ${t.colors.palette.light[300]};
        border: 0;
        border-top: 2px solid ${t.colors.palette.light[800]};
        height: calc(100% - ${i>0?`${i}px`:"33%"});
      }

    `},this.onTabSelect=e=>{"page"===e&&(0,s.changeCurrentPage)(this.props.currentPageId),this.setState({selectedTabId:e})},this.state={editablePageItemId:"",editableDialogItemId:"",editableOutlineItemId:"",isTemplatePopoverOpen:!1,pageTocH:-1,selectedTabId:null,isPageTemplateLoading:!1},this.resizeRef=e.React.createRef(),this.pageTocRef=e.React.createRef(),this.popoverRef=e.React.createRef(),this.changeEditablePageId=this.changeEditablePageId.bind(this),this.addPageWithType=this.addPageWithType.bind(this),this.handleOutlineItemClick=this.handleOutlineItemClick.bind(this),this.changeCurrentPage=this.changeCurrentPage.bind(this),this.movePageIntoPage=this.movePageIntoPage.bind(this),this.removePage=this.removePage.bind(this),this.setHomePage=this.setHomePage.bind(this),this.formatMessage=this.formatMessage.bind(this),this.loadPageTemplate=this.loadPageTemplate.bind(this),this.parsePageTemplate=this.parsePageTemplate.bind(this),this.duplicatePage=this.duplicatePage.bind(this),this.renamePage=this.renamePage.bind(this),this.orderPageBelowPage=this.orderPageBelowPage.bind(this),this.changeEditableDialogId=this.changeEditableDialogId.bind(this),this.addDialog=this.addDialog.bind(this),this.removeDialog=this.removeDialog.bind(this),this.renameDialog=this.renameDialog.bind(this),this.duplicateDialog=this.duplicateDialog.bind(this),this.setSplashDialog=this.setSplashDialog.bind(this),this.changeCurrentDialog=this.changeCurrentDialog.bind(this),this.loadDialogTemplate=this.loadDialogTemplate.bind(this),this.parseDialogTemplate=this.parseDialogTemplate.bind(this),this.orderDialogBelowDialog=this.orderDialogBelowDialog.bind(this)}componentDidMount(){this.resizeRef&&this.resizeRef.current&&(this.interactable=(0,a.interact)(this.resizeRef.current).resizable({edges:{top:!0,left:!1,bottom:!1,right:!1},modifiers:[a.interact.modifiers.restrictEdges({outer:"parent",endOnly:!0}),a.interact.modifiers.restrictSize({min:{width:20,height:100}})],inertia:!1,onstart:e=>{e.stopPropagation()},onmove:e=>{e.stopPropagation(),this.lastResizeCall&&cancelAnimationFrame(this.lastResizeCall);const t=e.rect;let i=0;this.pageTocRef.current&&(i=this.pageTocRef.current.getBoundingClientRect().top);const o=t.top-i;o<100||(this.lastResizeCall=requestAnimationFrame((()=>{this.setState({pageTocH:o})})))},onend:e=>{e.stopPropagation(),this.lastResizeCall&&cancelAnimationFrame(this.lastResizeCall),this.lastResizeCall=requestAnimationFrame((()=>{const t=e.rect;let i=0;this.pageTocRef.current&&(i=this.pageTocRef.current.getBoundingClientRect().top),this.lastResizeCall=requestAnimationFrame((()=>{this.setState({pageTocH:t.top-i})}))}))}}))}componentWillUnmount(){this.lastResizeCall&&cancelAnimationFrame(this.lastResizeCall),this.interactable&&(this.interactable.unset(),this.interactable=null)}handleOutlineItemClick(e){e.type!==Se.Label&&(e.type===Se.ScreenGroup||e.type===Se.Section||e.type===Se.Widget?this.changeContent(e):e.type===Se.View?this.changeView(e):[Se.Screen,Se.ScreenMainStage,Se.ScreenSrollingPanel].includes(e.type)?this.changeScreen(e):e.type===Se.Layout&&this.changeLayout(e),e.pagePart&&t.builderAppSync.publichActivePagePartChangeToApp(e.pagePart))}changeCurrentPage(e){(0,s.changeCurrentPage)(e)}changeEditablePageId(e){e!==this.state.editablePageItemId&&this.setState({editablePageItemId:e})}movePageIntoPage(i,o){if(i===o)return;const n=(0,t.getAppConfigAction)().appConfig;(0,t.getAppConfigAction)().movePageIntoPage(i,o).exec(),n.pages[i].type===e.PageType.Normal&&this.changeCurrentPage(i)}removePage(e){const i=(0,t.getAppConfigAction)().appConfig,o=i.pages[e];let n;if(i.pageStructure.some(((o,s)=>{const a=Object.keys(o)[0];return a!==e&&(t.appConfigUtils.isRealPage(i,a)?(n=a,!0):void 0)})),n||i.pageStructure.some(((o,s)=>{const a=Object.keys(o)[0];return a!==e&&!!o[a].some((o=>o!==e&&(t.appConfigUtils.isRealPage(i,o)?(n=o,!0):void 0)))})),!n)return;let s=o.isDefault;s||i.pageStructure.some(((t,o)=>{if(Object.keys(t)[0]===e)return i.pageStructure[o][e].some((e=>{if(i.pages[e].isDefault)return s=!0,!0})),!0})),t.builderAppSync.publishPageChangeToApp(n),(0,t.getAppConfigAction)().removePage(e,s?n:null).exec()}setHomePage(e){(0,t.getAppConfigAction)().replaceHomePage(e).exec()}duplicatePage(i){const o=(0,t.getAppConfigAction)().appConfig,n=(0,t.getAppConfigAction)(),s=n.duplicatePage(i);n.exec();const a=o.pages[i];a.type!==e.PageType.Folder&&a.type!==e.PageType.Link&&this.changeCurrentPage(s.id)}duplicateDialog(e){const i=(0,t.getAppConfigAction)(),o=i.duplicateDialog(e);i.exec(),this.changeCurrentDialog(o.id)}renamePage(e,i){return!(!i||""===i||((0,t.getAppConfigAction)().editPageProperty(e,"label",i).exec(),this.changeEditablePageId(""),0))}orderPageBelowPage(e,i,o){(0,t.getAppConfigAction)().orderPageToPage(e,i,o).exec()}addPageWithType(i,o){let n;const s=(0,t.getAppConfigAction)().appConfig;switch(i){case"page":this.setState({isPageTemplateLoading:!0}),this.loadPageTemplate(o).then((e=>{this.setState({isPageTemplateLoading:!1}),n=e,n&&(t.builderAppSync.publishChangeBrowserSizeModeToApp((0,t.getAppConfigAction)().appConfig.mainSizeMode),this.changeEditablePageId(n.id))}));break;case"link":n=(0,e.Immutable)({}).merge({id:e.appConfigUtils.getUniqueId(s,"page"),type:e.PageType.Link,label:e.appConfigUtils.getUniqueLabel(s,"page",this.formatMessage("link")),linkUrl:"#",isVisible:!0}),(0,t.getAppConfigAction)().addPage(n).exec();break;case"folder":n=(0,e.Immutable)({}).merge({id:e.appConfigUtils.getUniqueId(s,"page"),type:e.PageType.Folder,label:e.appConfigUtils.getUniqueLabel(s,"page",this.formatMessage("folder")),isVisible:!0}),(0,t.getAppConfigAction)().addPage(n).exec()}return n&&this.changeEditablePageId(n.id),n}loadPageTemplate(e){return ut(this,void 0,void 0,(function*(){const i=(0,t.getAppConfigAction)().appConfig;return yield this.parsePageTemplate(e,i)}))}parsePageTemplate(i,n){return ut(this,void 0,void 0,(function*(){return i?((0,e.getAppStore)().dispatch(e.appActions.setIsBusy(!0,e.LoadingType.Primary)),yield(0,o.createPageFromTemplate)(n,i,{}).then((({appConfig:i,newPageId:o})=>{const n=i.pages[o];if(!n)return;const s=i.set("pageStructure",i.pageStructure.concat([{[n.id]:[]}]));return(0,t.getAppConfigAction)(s).exec(),this.changeCurrentPage(n.id),this.changeEditablePageId(n.id),(0,e.getAppStore)().dispatch(e.appActions.setIsBusy(!1)),n})).catch((()=>(0,e.getAppStore)().dispatch(e.appActions.setIsBusy(!0,e.LoadingType.Secondary))))):yield Promise.resolve()}))}changeCurrentDialog(e,t=!1){(0,s.changeCurrentDialog)(e,t)}changeEditableDialogId(e){e!==this.state.editableDialogItemId&&this.setState({editableDialogItemId:e})}removeDialog(i){let o=null;const n=(0,t.getAppConfigAction)().appConfig,a=n.dialogs,l=a[i],{currentDialogId:r}=this.props;if(i===r){let e=null;Object.keys(a).some(((t,i)=>{const n=a[t];if(n.mode===l.mode){if(n.index===l.index-1)return o=n.id,!0;n.index===l.index+1&&(e=n.id)}})),o||(o=e||Object.keys(a).filter((e=>a[e].mode===l.mode&&0===a[e].index&&a[e].id!==i))[0]||Object.keys(a).filter((e=>a[e].mode!==l.mode&&0===a[e].index))[0]);const n=(0,s.handelDialogInfos)(o);t.builderAppSync.publishDialogInfosChangeToApp(n),t.builderAppSync.publishDialogChangeToApp(o)}(0,t.getAppConfigAction)().removeDialog(i).exec(),l.isSplash||l.mode!==e.DialogMode.Fixed||t.utils.getPageListByDialogId(n.pages,i).map((e=>{(0,t.getAppConfigAction)().editPageProperty(e.id,"autoOpenDialogId","").exec()}))}setSplashDialog(i){const o=(0,t.getAppConfigAction)().appConfig,n=Object.keys(o.dialogs).filter((e=>o.dialogs[e].isSplash))[0],s=(0,e.getAppStore)().getState().appStateInBuilder.appRuntimeInfo.currentDialogId;(0,t.getAppConfigAction)().replaceSplashDialog(i,n).exec(),n===i&&i===s&&this.changeCurrentDialog(i,!0)}renameDialog(e,i){return!(!i||""===i||((0,t.getAppConfigAction)().editDialogProperty(e,"label",i).exec(),this.changeEditableDialogId(""),0))}orderDialogBelowDialog(e,i,o){(0,t.getAppConfigAction)().orderDialogToDialog(e,i,o).exec()}addDialog(e){const i=this.loadDialogTemplate(e);return t.builderAppSync.publishChangeBrowserSizeModeToApp((0,t.getAppConfigAction)().appConfig.mainSizeMode),i}loadDialogTemplate(e){const i=(0,t.getAppConfigAction)().appConfig;this.parseDialogTemplate(e,i)}parseDialogTemplate(i,n){i&&((0,e.getAppStore)().dispatch(e.appActions.setIsBusy(!0,e.LoadingType.Secondary)),(0,o.createDialogFromTemplate)(n,i,{}).then((({appConfig:i,newDialogId:o})=>{const n=i.dialogs[o];return(0,t.getAppConfigAction)(i).exec(),this.changeCurrentDialog(n.id),this.changeEditableDialogId(n.id),(0,e.getAppStore)().dispatch(e.appActions.setIsBusy(!1)),n})).catch((()=>(0,e.getAppStore)().dispatch(e.appActions.setIsBusy(!0)))))}render(){const{PageListWrapper:t,DialogListWrapper:o}=this,{currentPageId:n,currentDialogId:s,browserSizeMode:a}=this.props;let l;return l=s||"dialog"===this.state.selectedTabId?"dialog":"page",(0,e.jsx)("div",{css:this.getStyle(this.props.theme),className:"jimu-widget widget-builder-toc bg-white w-100 h-100"},(0,e.jsx)("div",{className:"page-toc",ref:this.pageTocRef},(0,e.jsx)(i.Tabs,{value:l,type:"underline",css:e.css`
          height: 100%;
          .jimu-nav {
            border-bottom: none;
            padding: 12px 1px 5px 1px;
            width: calc(100% - 60px);
            overflow: hidden;
          }
          .tab-content{
            height: calc(100% - 56px);
            overflow-y: inherit !important;
            .tab-pane{
              width: 100%;
            }
          }
          .nav-item {
            margin: 0 1rem;
            &:last-of-type{
              margin-right: 0;
            }
            .nav-link{
              padding: 0.5rem 0.25rem;
            }
          }
        `,onChange:this.onTabSelect},(0,e.jsx)(i.Tab,{id:"page",title:this.formatMessage("page")},(0,e.jsx)("div",{className:"page-list"},(0,e.jsx)(t,null))),(0,e.jsx)(i.Tab,{id:"dialog",title:this.formatMessage("dialog")},(0,e.jsx)("div",{className:"dialog-list"},(0,e.jsx)(o,null))))),(0,e.jsx)("div",{className:"outline-toc",ref:this.resizeRef},(0,e.jsx)(ht,{formatMessage:this.formatMessage,currentPageId:n,currentDialogId:s,browserSizeMode:a,onClickItem:this.handleOutlineItemClick,editableOutlineItemId:this.state.editableOutlineItemId,theme:this.props.theme,intl:this.props.intl})))}}vt.mapExtraStateProps=e=>{var t,i,o,n,s,a,l;return{currentPageId:null===(i=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo)||void 0===i?void 0:i.currentPageId,currentDialogId:null===(n=null===(o=null==e?void 0:e.appStateInBuilder)||void 0===o?void 0:o.appRuntimeInfo)||void 0===n?void 0:n.currentDialogId,browserSizeMode:null===(s=null==e?void 0:e.appStateInBuilder)||void 0===s?void 0:s.browserSizeMode,dialogInfos:null===(l=null===(a=null==e?void 0:e.appStateInBuilder)||void 0===a?void 0:a.appRuntimeInfo)||void 0===l?void 0:l.dialogInfos}}})(),h})())}}}));