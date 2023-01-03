System.register(["jimu-core"],(function(o,r){var e={};return{setters:[function(o){e.css=o.css,e.polished=o.polished}],execute:function(){o((()=>{"use strict";var o={8891:o=>{o.exports=e}},r={};function t(e){var l=r[e];if(void 0!==l)return l.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,t),i.exports}t.d=(o,r)=>{for(var e in r)t.o(r,e)&&!t.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:r[e]})},t.o=(o,r)=>Object.prototype.hasOwnProperty.call(o,r),t.r=o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})};var l={};return(()=>{t.r(l),t.d(l,{Bubble:()=>r,Expression:()=>e,Global:()=>n,Nav:()=>i,Select:()=>d});var o=t(8891);const r=r=>{var e,t;const l=r.theme,i=null===(e=null==l?void 0:l.colors)||void 0===e?void 0:e.palette.light[300],d=null===(t=null==l?void 0:l.colors)||void 0===t?void 0:t.palette.light[800];return o.css`
    user-select: none;
    > * {
      user-select: none;
    }
    border-radius: 10px;
    background-color: ${i};
    border-color: ${d};
    &[data-popper-placement^="top"] {
      > .jimu-popper--arrow::after {
        border-top-color: ${i} !important;
      }
    }
    &[data-popper-placement^="bottom"] {
      > .jimu-popper--arrow::after {
        border-bottom-color: ${i} !important;
      }
    }
    &[data-popper-placement^="left"] {
      > .jimu-popper--arrow::after {
        border-left-color: ${i} !important;
      }
    }
    &[data-popper-placement^="right"] {
      > .jimu-popper--arrow::after {
        border-right-color: ${i} !important;
      }
    }
    
  `},e=r=>{var e,t,l,i,d,n;const{theme:a}=r,s=a.colors.palette.light[300],p=null===(l=null===(t=null===(e=a.colors)||void 0===e?void 0:e.palette)||void 0===t?void 0:t.dark)||void 0===l?void 0:l[600],c=null===(n=null===(d=null===(i=a.colors)||void 0===i?void 0:i.palette)||void 0===d?void 0:d.dark)||void 0===n?void 0:n[200],u=a.colors.black;return o.css`
    > * {
      user-select: none;
    }
    width: ${o.polished.rem("285px")};
    height: ${o.polished.rem("500px")};
    color: ${u};
    background: ${s};
    .panel-header {
      background: ${s};
      color: ${p};
      > .actions > .jimu-btn {
        color: ${p};
        & :hover {
          color: ${u};
        }
        &:disabled {
          color: ${c};
        }
      }
    }
    .expression-body {
      height: 100%;
    }
  `},i=r=>{const e=r.pills;return o.css`
    ${e&&o.css`
      border-top-width: 0;
      border-left-width: 0;
      border-right-width: 0;
      .nav-item {
        .nav-link {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
      }
    `}
  `},d=r=>{var e,t,l;const i=r.theme;return o.css`
    .dropdown-button {
      .caret-icon {
        color: ${null===(l=null===(t=null===(e=null==i?void 0:i.colors)||void 0===e?void 0:e.palette)||void 0===t?void 0:t.dark)||void 0===l?void 0:l[600]};
        svg {
          height: 8px;
          width: 8px;
        }
      }
    }
  `},n=r=>{const e=r.theme;return o.css`
    html, body {
      overflow: hidden;
    }
    html.scrollable {
      overflow: auto;
      body {
        overflow: unset;
      }
    }
    /* Scrollbar */
    ${e&&o.css`
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }

      ::-webkit-scrollbar-thumb {
        background: ${e.colors.palette.light[500]};
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: ${e.colors.palette.light[800]};
      }
    `}
    .jimu-widget-setting--header {
      padding: ${e.sizes[3]} ${e.sizes[3]};
      margin-bottom: 0;
      line-height: 1;
    }
  `}})(),l})())}}}));