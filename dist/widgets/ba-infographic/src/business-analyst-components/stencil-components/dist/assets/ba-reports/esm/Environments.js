import Utils from"./Utils";var Environments=function(){function e(){}return e.setEnvironment=function(r){var o="prod"===r||"localhost"===r?"www":r;e._env=o,console.log("%cBA Environment: "+o,"color:green;font-size:9pt")},e.getEnvironment=function(){return e._env},e.getPortalBase=function(){var r=e._env;if(!r)return"";var o="https://"+("dev"===r?"devext":"qa"===r?"qaext":"www")+".arcgis.com";return console.log("BA Environments base="+o),o},e.getUrl=function(r){if(!e._env)return console.log("%cEnvironments error: env not set","color:red"),"";if(!r||!Utils.hasText(r))return console.log("%cEnvironments error: invalid subdomain","color:red"),"";var o=e.getPortalBase();if(""===o)return"";try{var t="";switch(r){case"geocode":t="https://www.arcgis.com"===o?"https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer":"https://qaext.arcgis.com"===o?"https://geocodeqa.arcgis.com/arcgis/rest/services/World/GeocodeServer":"https://devext.arcgis.com"===o?"https://geocodedev.arcgis.com/arcgis/rest/services/World/GeocodeServer":"https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer";break;case"arcgis":t=o;break;case"infographics":t="https://www.arcgis.com"===o?"https://bao.arcgis.com/InfographicsPlayer/BAMobile/10.2/reportPlayer/ReportPlayerMobile.html":"https://qaext.arcgis.com"===o?"https://baoqa.arcgis.com/InfographicsPlayer/BAMobile/10.2/reportPlayer/ReportPlayerMobile.html":"https://devext.arcgis.com"===o?"https://baodev.arcgis.com/InfographicsPlayer/BAMobile/10.2/reportPlayer/ReportPlayerMobile.html":"https://bao.arcgis.com/InfographicsPlayer/BAMobile/10.2/reportPlayer/ReportPlayerMobile.html";break;case"geoenrich":t="https://www.arcgis.com"===o?"https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/Geoenrichment/Enrich":"https://qaext.arcgis.com"===o?"https://geoenrichqa.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/Geoenrichment/Enrich":"https://devext.arcgis.com"===o?"https://geoenrichdev.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/Geoenrichment/Enrich":"https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/Geoenrichment/Enrich"}return t}catch(e){console.log("%cEnvironments.getUrl() error ","color:red",e)}return""},e._env="www",e}();export default Environments;