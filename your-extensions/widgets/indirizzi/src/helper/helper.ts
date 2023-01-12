
import Query from "esri/rest/support/Query";
import query from 'esri/rest/query';
import FeatureLayer from "esri/layers/FeatureLayer";


class Helper {

    getServiceName = (serviceUrl:string,serviceKey:string)=>{
        let serviceName = serviceKey;
        const stringArray = serviceUrl.split("/");
        const serviceIndex = stringArray.indexOf("services");
        if (serviceIndex !== -1){
            if (stringArray[serviceIndex+1]){
                serviceName = stringArray[serviceIndex+1];
            }
        }
        return serviceName;
    }

    queryFeatureService = (url:string)=>{
        // const queryObject = new Query();
        // queryObject.returnGeometry = true;
        // queryObject.where = "1=1"
        // const results = await query.executeQueryJSON(url, queryObject);
        try{
            const layer = new FeatureLayer({url:url});
            return layer
        }
        catch(err){
            return null;
        }
    }

    getSelectedLayerFromSearch = (results:any[])=>{
        const selectedIds = [];
        if (results.length > 0){
            for (let i =0;i < results.length;i++){
                const innerResults = results[i];
                if (innerResults.length){
                    for (let j = 0;j < innerResults.length;j++){
                        const layer = innerResults[j].layer;
                        const object = {featureServer:layer.url,id:layer.layerId}
                        selectedIds.push(object)
                    }
                }
            }
        }
        return selectedIds;
    }
}

export default new Helper();