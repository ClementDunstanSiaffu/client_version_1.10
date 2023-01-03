"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(i,n){function s(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((o=o.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,o,i,n,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return n={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function a(n){return function(a){return function(n){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,o&&(i=2&n[0]?o.return:n[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,n[1])).done)return i;switch(o=0,i&&(n=[2&n[0],i.value]),n[0]){case 0:case 1:i=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,o=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==n[0]&&2!==n[0])){s=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){s.label=n[1];break}if(6===n[0]&&s.label<i[1]){s.label=i[1],i=n;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(n);break}i[2]&&s.ops.pop(),s.trys.pop();continue}n=t.call(e,s)}catch(e){n=[6,e],o=0}finally{r=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,a])}}},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var Utils_1=__importDefault(require("./Utils")),DebugLog_1=__importDefault(require("./DebugLog")),arcgisReports_1=require("./arcgisReports"),ElementIds_1=__importDefault(require("./ElementIds")),InfographicsHelper_1=require("./mobile/InfographicsHelper"),TransportUtil_1=__importDefault(require("./mobile/TransportUtil")),GeometryUtil_1=__importDefault(require("./GeometryUtil")),Environments_1=__importDefault(require("./Environments")),InfographicCard=function(){function e(e,t,r,o){this.langCode="en-us",this.sourceCountry="US",this.bufferType="ring",this.bufferUnits="miles",this.bufferSizes=[1,3,5],DebugLog_1.default.showDebugConsoleLogs=!0,this.username=e,this.token=t,this.environment=r,this._idPrefix="ba-infographic-frame-";var i=ElementIds_1.default.generateId(this._idPrefix);this._iFrame={id:i.id,container:null,instance:null},this.setOptions(o)}return e.prototype.setShadowRoot=function(e){this._containerShadowRoot=e},e.prototype.resetOptions=function(){this.bufferType="ring",this.bufferUnits="miles",this.bufferSizes=[1,3,5],this.viewMode="full",this.reportShowHeader=!0,this.reportHeaderButtonPrint=!0,this.reportHeaderButtonZoomLevel=!0,this.reportHeaderButtonFullscreen=!0,this.reportHeaderButtonExcel=!0,this.reportHeaderButtonImage=!0,this.reportHeaderButtonPdf=!0,this.reportHeaderButtonDynHtml=!0,this.reportColorBackground="#fff",this.reportColorHeader="blue",this.reportColorHeaderText="#fff",this.runReportOnClick=!0,this.showSearch=!0},e.prototype.setOptions=function(e,t){if(console.log("%c infographicCard: setOptions()..","color:orange;font-size:9pt;",e),!Utils_1.default.hasText(e))return!1;try{t&&this.resetOptions();var r=JSON.parse(e);return Utils_1.default.hasText(r.bufferType)&&["ring","drivetime","walktime"].includes(r.bufferType)&&(this.bufferType=r.bufferType),Utils_1.default.hasText(r.bufferUnits)&&["miles","kilometers","minutes"].includes(r.bufferUnits)&&(this.bufferUnits=r.bufferUnits),r.bufferSizes&&r.bufferSizes.length>0&&r.bufferSizes.length<=3&&(this.bufferSizes=r.bufferSizes),console.log("%c infographicCard: buffers..","color:orange;font-size:9pt;",this.bufferSizes),Utils_1.default.hasText(r.viewMode)&&["full","stack","slides","stack-all"].includes(r.viewMode)&&(this.viewMode=r.viewMode),r.report&&("undefined"!=r.report.showHeader&&(this.reportShowHeader=r.report.showHeader),"undefined"!=r.report.showPrint&&(this.reportHeaderButtonPrint=r.report.showPrint),"undefined"!=r.report.showZoomLevel&&(this.reportHeaderButtonZoomLevel=r.report.showZoomLevel),"undefined"!=r.report.showFullscreen&&(this.reportHeaderButtonFullscreen=r.report.showFullscreen)),r.export&&("undefined"!=r.export.excel&&(this.reportHeaderButtonExcel=r.export.excel),"undefined"!=r.export.image&&(this.reportHeaderButtonImage=r.export.image),"undefined"!=r.export.pdf&&(this.reportHeaderButtonPdf=r.export.pdf),"undefined"!=r.export.dynamicHtml&&(this.reportHeaderButtonDynHtml=r.export.dynamicHtml)),r.style&&("undefined"!=r.style.backgroundColor&&(this.reportColorBackground=r.style.backgroundColor),"undefined"!=r.style.headerColor&&(this.reportColorHeader=r.style.headerColor),"undefined"!=r.style.headerTextColor&&(this.reportColorHeaderText=r.style.headerTextColor)),r.map&&("undefined"!=r.map.runReportOnClick&&(this.runReportOnClick=r.map.runReportOnClick),"undefined"!=r.map.showSearch&&(this.showSearch=r.map.showSearch)),!0}catch(e){console.log("InfographicCard error: ",e)}return!1},e.prototype._createInfographicPlayerStyleOptions=function(){var e=[],t=[],r=[];if(e.push('"showCloseButton":false'),null!=this.reportShowHeader&&0==this.reportShowHeader&&e.push('"showHeader":false'),null!=this.viewMode){var o={full:"full-pages",stack:"panels-in-stack",slides:"panels-in-slides","stack-all":"panels-in-stack-all"}[this.viewMode];o&&e.push('"viewMode":"'+o+'","resizeMode":"auto"')}return this.reportHeaderButtonFullscreen&&e.push('"showFullscreenButton": true'),this.reportHeaderButtonZoomLevel&&e.push('"disableZoom": true'),this.reportHeaderButtonPrint&&t.push('"print": true'),this.reportHeaderButtonExcel&&t.push('"excel": true'),this.reportHeaderButtonImage&&t.push('"image": true'),this.reportHeaderButtonPdf&&t.push('"pdf": true'),this.reportHeaderButtonDynHtml&&t.push('"dynamicHtml": true'),this.reportColorBackground&&r.push('"background":"'+this.reportColorBackground+'"'),this.reportColorHeader&&r.push('"headerBackground":"'+this.reportColorHeader+'"'),this.reportColorHeaderText&&r.push('"headerText":"'+this.reportColorHeaderText+'"'),t.length>0&&e.push('"exportOptions": {'+t.toString()+"}"),r.length>0&&e.push('"theme": {'+r.toString()+"}"),e.toString()},e.prototype._validateSetup=function(){return!(!Utils_1.default.hasText(this.environment)||(Utils_1.default.hasText(this.token)?Utils_1.default.hasText(this.username)?Utils_1.default.hasText(this.reportId)?!this.reportLocation&&!this.reportGeometry&&(DebugLog_1.default.log("InfographicCard","invalid location or geometry"),1):(DebugLog_1.default.log("InfographicCard","invalid report ID"),1):(DebugLog_1.default.log("InfographicCard","invalid username"),1):(DebugLog_1.default.log("InfographicCard","invalid token"),1)))},e.prototype._checkBuffersAssignDefaults=function(){(null==typeof this.bufferType||null==typeof this.bufferUnits||null==typeof this.bufferSizes||isNaN(this.bufferSizes[0]))&&(null==typeof this.bufferType&&(this.bufferType="ring"),null==typeof this.bufferUnits&&(this.bufferUnits="miles"),(null==typeof this.bufferSizes||isNaN(this.bufferSizes[0]))&&(this.bufferSizes=[1]))},e.prototype.regenerateContent=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r;return __generator(this,(function(o){switch(o.label){case 0:t=this,o.label=1;case 1:return o.trys.push([1,4,,5]),!e||t._iFrame.container&&t._iFrame.instance?(t._iFrame.container&&Utils_1.default.removeChildren(t._iFrame.container),t._iFrame.instance=void 0,[4,t.loadInfographic(t._iFrame.id,t._iFrame.container,t.reportLocation,t.reportGeometry,t.reportId)]):[3,3];case 2:o.sent(),o.label=3;case 3:return[3,5];case 4:return r=o.sent(),console.log("%c InfographicCard: regenerateContent","color:red;font-size:9pt;",r),[3,5];case 5:return[2]}}))}))},e.prototype._validateReportGeometry=function(e){if(e&&e.length>0){for(var t=0;t<e.length;t++){var r=e[t];if(!(r&&Utils_1.default.hasText(r.transport)&&r.latitude&&r.longitude&&r.value&&Utils_1.default.hasText(r.units)&&r.rings))return!1}return!0}return!1},e.prototype._getReportGeometryAnalysisAreas=function(){return __awaiter(this,void 0,void 0,(function(){var e,t;return __generator(this,(function(r){switch(r.label){case 0:return e="",this.reportGeometry?(console.log("%c Analysis checking geometryType=","color:orange;font-size:9pt;"),this.reportGeometry.type&&"polygon"==this.reportGeometry.type?e=GeometryUtil_1.default.getAnalysisAreasFromPolygon(this.reportGeometry):"drivetime"!=this.bufferType&&"walktime"!=this.bufferType||(this._validateReportGeometry(this.reportGeometry)?e=GeometryUtil_1.default.getAnalysisAreasFromRings(this.reportGeometry):DebugLog_1.default.log("_getReportGeometryAnalysisAreas","reportGeometry is invalid",this.reportGeometry)),[3,3]):[3,1];case 1:return"drivetime"!=this.bufferType&&"walktime"!=this.bufferType?[3,3]:(TransportUtil_1.default.setToken(this.username,this.token),[4,TransportUtil_1.default.getBuffers(this.bufferType,this.sourceCountry,this.bufferUnits,this.bufferSizes,this.reportLocation.lon,this.reportLocation.lat)]);case 2:t=r.sent(),e=GeometryUtil_1.default.getAnalysisAreasFromEnrichBuffers(t),r.label=3;case 3:return[2,e]}}))}))},e.prototype._checkBuffers=function(){(null==typeof this.bufferType||null==typeof this.bufferUnits||null==typeof this.bufferSizes||isNaN(this.bufferSizes[0]))&&(null==typeof this.bufferType&&(this.bufferType="ring"),null==typeof this.bufferUnits&&(this.bufferUnits="miles"),(null==typeof this.bufferSizes||isNaN(this.bufferSizes[0]))&&(this.bufferSizes=[1]))},e.prototype.generateNotReadyHtml=function(){return'<div id="'+ElementIds_1.default.generateId("notReadyDiv")+'" class="notReadyOuter" >           <svg class="notReadySvg" preserveAspectRatio="xMidYMid meet" width="66" height="58">             <g transform="matrix(0.65909094 0 0 0.65909094 0.09090962 -0)">               <g>                 <path                   d="M48.445312 0.15625C 48.125 0.234375 47.5625 0.445312 47.195312 0.632812C 46.648438 0.90625 46.375 1.117188 45.734375 1.757812C 45.257812 2.226562 44.765625 2.804688 44.507812 3.203125C 43.84375 4.234375 39.1875 12.441406 21.367188 43.960938C 15.171875 54.91797 7.976562 67.65625 5.375 72.25391C 2.773438 76.85547 0.554688 80.83203 0.445312 81.08984C -0.171875 82.55469 -0.117188 84.171875 0.59375 85.46094C 0.710938 85.67969 1.09375 86.13281 1.4375 86.47656C 2.148438 87.17969 2.820312 87.5625 3.828125 87.84375L3.828125 87.84375L4.421875 88L50.351562 87.984375L96.28906 87.96094L96.921875 87.75C 99.75781 86.78125 100.78125 83.85156 99.296875 80.88672C 99.13281 80.55078 92.27344 68.53906 84.05469 54.183594C 75.83594 39.835938 66.02344 22.695312 62.25 16.097656C 58.46875 9.503906 55.148438 3.75 54.859375 3.320312C 53.9375 1.9375 52.765625 0.890625 51.585938 0.40625C 50.609375 0 49.460938 -0.09375 48.445312 0.15625zM61 26.804688C 67.19531 37.61328 76.77344 54.339844 82.28125 63.96875L82.28125 63.96875L92.30469 81.47266L71.11719 81.49609C 59.460938 81.50391 40.382812 81.50391 28.71875 81.49609L28.71875 81.49609L7.507812 81.47266L20.523438 58.45703C 45.429688 14.402344 49.625 7.011719 49.695312 7.097656C 49.726562 7.128906 54.8125 15.996094 61 26.804688z"                   stroke="none"                   fill="#D4D7DD"                   fill-rule="nonzero"                 />                 <path                   d="M49.140625 26.460938C 49.03125 26.484375 48.664062 26.570312 48.328125 26.65625C 45.28125 27.421875 42.8125 30.363281 42.8125 33.19922C 42.8125 33.558594 42.984375 35.183594 43.203125 36.80078C 43.414062 38.41797 44.085938 43.5 44.6875 48.101562C 46.257812 60.097656 46.242188 59.95703 46.375 60.45703C 46.703125 61.75 47.476562 62.78125 48.492188 63.28125C 49.015625 63.539062 49.164062 63.578125 49.804688 63.601562C 50.992188 63.65625 51.726562 63.367188 52.523438 62.539062C 53.296875 61.71875 53.648438 60.789062 53.898438 58.910156C 53.984375 58.253906 54.375 55.30078 54.765625 52.339844C 55.148438 49.382812 55.789062 44.554688 56.171875 41.59375C 56.5625 38.640625 56.953125 35.683594 57.039062 35.027344C 57.226562 33.60547 57.234375 32.64453 57.070312 32.003906C 56.429688 29.480469 54.257812 27.320312 51.65625 26.640625C 51.070312 26.484375 49.578125 26.382812 49.140625 26.460938z"                   stroke="none"                   fill="#D4D7DD"                   fill-rule="nonzero"                 />                 <path                   d="M49.390625 66.59375C 46.695312 66.9375 44.75 69.49219 45.078125 72.26953C 45.234375 73.56641 45.75 74.62109 46.671875 75.47266C 47.5625 76.30859 48.523438 76.72266 49.726562 76.80078C 51.1875 76.88672 52.351562 76.43359 53.4375 75.33984C 54.484375 74.29297 54.9375 73.20703 54.945312 71.70703C 54.953125 70.796875 54.84375 70.27344 54.492188 69.515625C 53.554688 67.47656 51.53125 66.32031 49.390625 66.59375z"                   stroke="none"                   fill="#D4D7DD"                   fill-rule="nonzero"                 />               </g>             </g>           </svg>         </div>'},e.prototype.loadInfographic=function(e,t,r,o,i){return __awaiter(this,void 0,void 0,(function(){var n,s,a=this;return __generator(this,(function(l){if(n=this,!e||!t||!r&&!o||!i)throw"infographicCard error: invalid args loading infographic";return n._iFrame={id:e,container:t,instance:null},n.reportLocation=r,n.reportGeometry=o,n.reportId=i,Utils_1.default.removeChildren(t),n._iFrame.container.innerHTML='<iframe id="'+n._iFrame.id+'" class="arcgisInfographicFrame"></iframe>',s=function(){return __awaiter(a,void 0,void 0,(function(){var e,t,r,o,i,s,a,l,u,f;return __generator(this,(function(p){switch(p.label){case 0:return n._iFrame.instance=n._containerShadowRoot.querySelector(Utils_1.default.fixId(this._iFrame.id)),n._iFrame.instance?[3,1]:(console.log("%cInfographicCard error: unable to create infographic instance","color:red;font-size:9pt;"),[3,7]);case 1:return p.trys.push([1,6,,7]),e=Environments_1.default.getEnvironment(),console.assert(e===n.environment),n.environment=e,arcgisReports_1.setEnvironment(n.environment),[4,InfographicsHelper_1.InfographicsHelper._getInfographicsPlayerUrl()];case 2:return t=p.sent(),r="dev"===n.environment?"devext":"qa"===n.environment?"qaext":"www",o=n.reportLocation?n.reportLocation.lat:0,i=n.reportLocation?n.reportLocation.lon:0,n.reportGeometry||n.reportLocation&&o&&i?[3,3]:(console.log("%cInfographicCard error: invalid location or geometry","color:red;font-size:9pt;"),[3,5]);case 3:return n.langCode=n.langCode||"en-us",n.sourceCountry=n.sourceCountry||"US",s='{               "server":"https://'+r+'.arcgis.com",                 "userId":"'+n.username+'",                 "token":"'+n.token+'",                 "expires":"'+Math.floor(Date.now()+86400000.5).toString()+'",                 "componentId":"'+n._iFrame.id+'",                 "reportID":"'+n.reportId+'",                 "countryID":"'+n.sourceCountry+'",                 "hierarchy":"census", ',console.log("%c infographicCard running geometry analysis","color:orange;font-size:9pt;"),[4,n._getReportGeometryAnalysisAreas()];case 4:a=p.sent(),console.log("%c infographicCard analysis completed=","color:orange;font-size:9pt;",a),a?(console.log("%c infographicCard rendering geometry =","color:orange;font-size:9pt;",a),s+=a):(console.log("%c infographicCard attempting to generate RINGS","color:orange;font-size:9pt;"),"minutes"==n.bufferUnits&&(n.bufferUnits=n.bufferUnits="miles"),l=GeometryUtil_1.default.getRings(o,i,n.bufferUnits,n.bufferSizes),s+=' "analysisAreas": '+JSON.stringify(l),console.log("%c infographicCard rendering rings =","color:orange;font-size:9pt;",l)),(u=n._createInfographicPlayerStyleOptions())&&u.length>0&&(s+=","+u),s+=" }",console.log("%c infographicCard about to create iframe","color:orange;font-size:9pt;",s),n._iFrame.instance.onload=function(){console.log("%c infographicCard iframe loaded","color:orange;font-size:9pt;"),setTimeout((function(){n._iFrame&&n._iFrame.instance&&n._iFrame.instance.contentWindow&&n._iFrame.instance.contentWindow.postMessage({type:"infographic_parameters",infographicParameters:s},t)}),500)},console.log("%c infographicCard iframe src url =","color:orange;font-size:9pt;",t),n._iFrame.instance.src=t,p.label=5;case 5:return[3,7];case 6:return f=p.sent(),console.log("%cInfographicCard error: ","color:red;font-size:9pt;",f),[3,7];case 7:return[2]}}))}))},setTimeout(s,0),[2]}))}))},e.prototype.updateInfographic=function(){this.regenerateContent()},e.prototype.setReportLocation=function(e){console.log("%c infographicCard: setReportLocation()..","color:orangefont-size:9pt;",e),e&&e.lat&&e.lon&&(this.reportLocation=e,this.regenerateContent(!0))},e.prototype.setReportGeometry=function(e){console.log("%c infographicCard: setReportGeometry()..","color:orange;font-size:9pt;",e),e&&(this.reportGeometry=e,this.regenerateContent(!0))},e.prototype.generateBuffers=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r;return __generator(this,(function(o){switch(o.label){case 0:return this.sourceCountry?!this.bufferType||"drivetime"!=this.bufferType&&"walktime"!=this.bufferType?[2,{success:!1,error:"["+this.bufferType+'] invalid bufferType (must be "drivetime" or "walktime")'}]:!this.bufferSizes||this.bufferSizes.length<=0?[2,{success:!1,error:"missing bufferSizes"}]:!this.bufferUnits||"miles"!=this.bufferUnits&&"kilometers"!=this.bufferUnits&&"minutes"!=this.bufferUnits?[2,{error:"invalid units"}]:this.reportLocation&&this.reportLocation.lat&&this.reportLocation&&this.reportLocation.lon?(TransportUtil_1.default.setToken(this.username,this.token),t=this.reportLocation.lat,r=this.reportLocation.lon,"drivetime"!=this.bufferType?[3,2]:[4,TransportUtil_1.default.getBuffers("drivetime",this.sourceCountry,this.bufferUnits,this.bufferSizes,r,t)]):[2,{error:"invalid latitude"}]:[2,{success:!1,error:"InfographicCard sourceCountry not valid"}];case 1:return e=o.sent(),[3,4];case 2:return[4,TransportUtil_1.default.getBuffers("walktime",this.sourceCountry,this.bufferUnits,this.bufferSizes,r,t)];case 3:e=o.sent(),o.label=4;case 4:return this.reportGeometry=e,[2,e]}}))}))},e}();exports.default=InfographicCard;