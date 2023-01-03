System.register(["jimu-core","jimu-arcgis"],(function(e,t){var a={},o={};return{setters:[function(e){a.AbstractMessageAction=e.AbstractMessageAction,a.DataSourceManager=e.DataSourceManager,a.Immutable=e.Immutable,a.MessageCarryData=e.MessageCarryData,a.MessageType=e.MessageType,a.MutableStoreManager=e.MutableStoreManager,a.RecordSetChangeType=e.RecordSetChangeType,a.getAppStore=e.getAppStore},function(e){o.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules}],execute:function(){e((()=>{"use strict";var e={26826:e=>{e.exports=o},48891:e=>{e.exports=a}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,r),s.exports}r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{r.r(s),r.d(s,{default:()=>u});var e=r(48891),t=r(26826);function a(e,t){let a=null;return e.clone?a=e.clone():(a=t.fromJSON(Object.assign({},e)),a.attributes=Object.assign({},e.attributes)),a}function o(t,a){var o;const r=function(t,a){var o,r;const s=n(),u=null===(o=null==s?void 0:s.widgets)||void 0===o?void 0:o[t],i=null===(r=null==u?void 0:u.manifest)||void 0===r?void 0:r.publishMessages;let c=e.MessageCarryData.UseDataSource;return null==i||i.forEach((e=>{const t=e;(null==t?void 0:t.messageCarryData)&&(null==t?void 0:t.messageType)===a&&(c=null==t?void 0:t.messageCarryData)})),c}(t,a),s=n(),u=null===(o=null==s?void 0:s.widgets)||void 0===o?void 0:o[t],i=(null==u?void 0:u.useDataSources)||(0,e.Immutable)([]),c=function(t){var a;const o=null!==(a=null==t?void 0:t.map((e=>({dataSourceId:e,mainDataSourceId:e,rootDataSourceId:null}))))&&void 0!==a?a:[];return(0,e.Immutable)(o)}(null==u?void 0:u.outputDataSources)||(0,e.Immutable)([]),l=null==i?void 0:i.asMutable({deep:!0}).concat(null==c?void 0:c.asMutable({deep:!0}));switch(r){case e.MessageCarryData.OutputDataSource:return c;case e.MessageCarryData.UseDataSource:return i;case e.MessageCarryData.BothDataSource:return(0,e.Immutable)(l)}}function n(){var t,a,o;return window.jimuConfig.isBuilder?null===(a=null===(t=(0,e.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===a?void 0:a.appConfig:null===(o=(0,e.getAppStore)().getState())||void 0===o?void 0:o.appConfig}class u extends e.AbstractMessageAction{constructor(){super(...arguments),this.NoLockTriggerLayerWidgets=["Map"]}filterMessageDescription(t){if(t.messageType===e.MessageType.ExtentChange)return!0;if(t.messageType!==e.MessageType.DataRecordSetChange&&t.messageType!==e.MessageType.DataRecordsSelectionChange&&t.messageType!==e.MessageType.DataSourceFilterChange)return!1;{const a=e.DataSourceManager.getInstance();return o(t.widgetId,t.messageType).some((e=>{var t;const o=a.getDataSource(e.dataSourceId);return"WEB_MAP"===o.type||"WEB_SCENE"===o.type||!!(null===(t=o.getDataSourceJson())||void 0===t?void 0:t.geometryType)}))}}filterMessage(e){return!0}getSettingComponentUri(t,a){return t===e.MessageType.DataRecordsSelectionChange||t===e.MessageType.DataRecordSetChange||t===e.MessageType.DataSourceFilterChange?"message-actions/zoom-to-feature-action-setting":null}onExecute(o,r){return(0,t.loadArcGISJSAPIModules)(["esri/Graphic"]).then((t=>{var s;let n=null;switch([n]=t,o.type){case e.MessageType.DataRecordSetChange:const t=o;if(t.changeType===e.RecordSetChangeType.Create||t.changeType===e.RecordSetChangeType.Update){let o={};if(t.dataRecordSet&&t.dataRecordSet.records){const e=[];for(let o=0;o<t.dataRecordSet.records.length;o++)t.dataRecordSet.records[o].feature&&e.push(a(t.dataRecordSet.records[o].feature,n));o={features:e,zoomToOption:r&&r.isUseCustomZoomToOption&&r.zoomToOption.scale?r.zoomToOption:null,type:"zoom-to-graphics"}}e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"zoomToFeatureActionValue.value",o)}break;case e.MessageType.DataRecordsSelectionChange:const u=(0,e.getAppStore)().getState().appConfig.widgets[o.widgetId].manifest.label,i=o;let c={};const l=[];let d=null;if(i.records){if(i.records[0])if(i.records[0].dataSource.layer&&(d=i.records[0].dataSource.layer.id),this.NoLockTriggerLayerWidgets.includes(u)){const e=i.records[0].dataSource.getMainDataSource();if(!(null===(s=null==r?void 0:r.useDataSources)||void 0===s?void 0:s.some((t=>(null==t?void 0:t.mainDataSourceId)===e.id))))break}else{const e=i.records[0].dataSource,t=null==e?void 0:e.getMainDataSource();if(!r.useDataSources.some((e=>(null==e?void 0:e.mainDataSourceId)===t.id)))break}for(let e=0;e<i.records.length;e++)i.records[e].feature&&l.push(a(i.records[e].feature,n))}c={features:l,layerId:d,zoomToOption:r&&r.isUseCustomZoomToOption&&r.zoomToOption.scale?r.zoomToOption:null,type:"zoom-to-graphics"},e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"zoomToFeatureActionValue.value",c);break;case e.MessageType.ExtentChange:const g=o;if(g.getRelatedWidgetIds().includes(this.widgetId))break;const p={value:{features:[g.extent],type:"zoom-to-extent"},relatedWidgets:g.getRelatedWidgetIds()};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"zoomToFeatureActionValue",p);break;case e.MessageType.DataSourceFilterChange:const S=o,m=e.DataSourceManager.getInstance().getDataSource(S.dataSourceId);if(!r.useDataSources.some((e=>(null==e?void 0:e.dataSourceId)===m.id)))break;const y={dataSourceId:S.dataSourceId,zoomToOption:r&&r.isUseCustomZoomToOption&&r.zoomToOption.scale?r.zoomToOption:null,useDataSources:r.useDataSources||[],type:"zoom-to-query-params"};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"zoomToFeatureActionValue.value",y)}return!0}))}}})(),s})())}}}));