"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.WebAppSettings=void 0;var ArcGISClient_1=require("./ArcGISClient"),WebAppSettings=function(){function e(){}return e.getBusinessAnalystOrganizationalSettings=function(){return ArcGISClient_1.ArcGISClient.getPortalResource("BusinessAnalyst_Organizational_Settings.json")},e.getDisabledReports=function(){return new Promise((function(t){var n=function(e){t({}),console.log(e)};ArcGISClient_1.ArcGISClient.executeSelf().then((function(r){var i=r.user.roleId||r.user.role;e.getBusinessAnalystOrganizationalSettings().then((function(e){var n=e["userRoles.disabledAreas.reports"];n&&n[i]?t(n[i]):t({})})).catch(n)})).catch(n)}))},e.getUserGalleryInfographicReportIds=function(){return new Promise((function(t,n){e._searchGalleryInfographicPreferencesItem().then((function(e){if(e){var r=e.id;ArcGISClient_1.ArcGISClient.getItemData(r).then((function(e){t(e&&e.data&&e.data.myGalleryInfographicReportIds)})).catch((function(e){return n(e)}))}else n(null)})).catch((function(e){return n(e)}))}))},e._searchGalleryInfographicPreferencesItem=function(){return e._searchUserItem("esriFavoriteReportTemplates")},e._searchUserItem=function(e){return new Promise((function(t,n){ArcGISClient_1.ArcGISClient.executeSelf().then((function(r){var i=r.user.username,c={type:"Web Mapping Application",typekeywords:e,owner:i};ArcGISClient_1.ArcGISClient.searchItems(c,{num:1},void 0).then((function(e){t(e&&e.length&&e[0])})).catch((function(e){return n(e)}))})).catch((function(e){return n(e)}))}))},e}();exports.WebAppSettings=WebAppSettings;