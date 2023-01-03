System.register(["jimu-core"],(function(t,r){var e={};return{setters:[function(t){e.css=t.css}],execute:function(){t((()=>{"use strict";var t={891:t=>{t.exports=e}},r={};function o(e){var i=r[e];if(void 0!==i)return i.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.d=(t,r)=>{for(var e in r)o.o(r,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},o.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return(()=>{o.r(i),o.d(i,{Global:()=>l,Nav:()=>r,Select:()=>e});var t=o(891);const r=r=>{const e=r.pills;return t.css`
    ${e&&t.css`
      .nav-item {
        &:not(:first-of-type):not(:last-of-type) {
          .nav-link {
            border-radius: 0;
          }
        }
        &:first-of-type {
          .nav-link {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
        }
        &:last-of-type {
          .nav-link {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
        }
      }
    `}
  `},e=r=>{var e,o,i;const l=r.theme;return t.css`
    .dropdown-button {
      .caret-icon {
        color: ${null===(i=null===(o=null===(e=null==l?void 0:l.colors)||void 0===e?void 0:e.palette)||void 0===o?void 0:o.dark)||void 0===i?void 0:i[600]};
        svg {
          height: 8px;
          width: 8px;
        }
      }
    }
  `},l=r=>{const e=r.theme;return t.css`
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
    ${e&&t.css`
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
      padding-bottom: 0;
      line-height: 1;
    }
  `}})(),i})())}}}));