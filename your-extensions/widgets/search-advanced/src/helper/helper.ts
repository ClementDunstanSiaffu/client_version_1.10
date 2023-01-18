import Widget from "../runtime/widget";
import Polygon from 'esri/geometry/Polygon';


type selectedLayerType = {
    id:string,
    attributes:any[]
}

class Helper{

    getNewCheckedLayer = (checkedLayers:string[],id:string)=>{
        let newCheckedLayer = [...checkedLayers];
        let index = -1;
        if (newCheckedLayer?.length > 0){
            index = newCheckedLayer.indexOf(id);
            if (index != -1){
                newCheckedLayer.splice(index,1);
            }
        }
        return newCheckedLayer;
    }

    activateLayerOnTheMap = (jimuLayerViews:any,id:string,selected:boolean)=>{
        const keys = Object.keys(jimuLayerViews);
        if (keys.length > 0){
            keys.forEach((key)=>{
                if (id === jimuLayerViews[key]?.layer?.id){
                    if(jimuLayerViews[key].layer?.hasOwnProperty("visible")){
                        if(selected){
                            jimuLayerViews[key].layer.visible = true;
                        }else{
                            jimuLayerViews[key].layer.visible = false;
                        }
                    }
                    if (jimuLayerViews[key].hasOwnProperty("view")){
                        if (jimuLayerViews[key].view?.hasOwnProperty("visible")){
                            if (selected){
                                jimuLayerViews[key].view.visible = true;
                            }else{
                                jimuLayerViews[key].view.visible = false;
                            }
                        }
                    }
                }
            })
        } 
    }

    highlightOnlyCheckedLayer = (checkedLayersArr:string[])=>{
        const jimuLayerViews = Widget.jimuLayerViews??[];
        const keys = Object.keys(jimuLayerViews);
        if (keys.length > 0){
            keys.forEach((key)=>{
                if (!checkedLayersArr.includes(jimuLayerViews[key]?.layer?.id)){
                    jimuLayerViews[key]?.highLightHandle?.remove()
                }
            })
        }
    }

    getNumberOfAttributes = (layersContents:{id:string,attributes:any[]}[])=>{
        let layerContentsObject = {};
        for (let i=0;i < layersContents.length;i++){
             layerContentsObject = {...layerContentsObject,[layersContents[i]?.id]:layersContents[i]?.attributes?.length??0}
        }
        return layerContentsObject;
    }

    getAttributes = (items:any[]):any[]=>{
        const attributesArray = items.reduce((newArray,item)=>{
            if (item?.attributes){
                if (item.geometry){
                    const geometry = item.geometry;
                    const latitude = geometry?.latitude??geometry?.extent?.center?.latitude;
                    const longitude = geometry?.longitude??geometry?.extent?.center?.longitude;
                    if (longitude && latitude){
                        newArray.push({...item.attributes,location:[latitude,longitude]});
                    }else{
                        newArray.push(item.attributes);
                    }       
                }else{
                    newArray.push(item.attributes);
                }
               
            }
            return newArray;
        },[])
        return attributesArray;
    }

    getSelectedContentsLayer =(results:any,checkedLayers:string[]):selectedLayerType[]=>{
        let selectedLayersArray = [];
        if (results?.length > 0){
            selectedLayersArray = results.reduce((newArray,items:any[])=>{
                if (items?.length > 0){
                    let selectedLayerContents = {};
                    let currentLayerId = items[0]?.layer?.id;
                    if (checkedLayers.indexOf(currentLayerId) !== -1){
                        selectedLayerContents["id"] = items[0]?.layer?.id;
                        selectedLayerContents["attributes"] = this.getAttributes(items);
                        newArray.push(selectedLayerContents)
                    }
                }
                return newArray;
            },[])
        }
        return selectedLayersArray;
    }

    unhighlightLayer = ()=>{
        const jimuLayerViews = Widget.jimuLayerViews??[];
        const keys = Object.keys(jimuLayerViews);
        if (keys.length > 0){
            keys.forEach((key)=>{
                jimuLayerViews[key]?.highLightHandle?.remove()
            })
        } 
    }

    getLayersFromSearchResults = (results:any[]):string[]=>{
        let layerIdFromSearch = [];
        if (results?.length > 0){
            const allCheckedLayers = results.reduce((newArray,items:any[])=>{
                if (items?.length > 0){
                    newArray.push(items[0]?.layer.id)
                }
                return newArray;
            },[])
            layerIdFromSearch = allCheckedLayers;
        }
        return layerIdFromSearch;

    }

    returnGraphicsGeometry = (feature)=>{
        let latitude,longitude,polygon;
        const geometry = feature?.geometry;
        const type = geometry.type;
        //@ts-ignore
        if (geometry?.longitude && geometry?.latitude){
            //@ts-ignore
            latitude = geometry.latitude;
            //@ts-ignore
            longitude = geometry.longitude;
        }
        if (type === "point"){
            if (longitude && latitude){
                polygon = {type:type,longitude:longitude,latitude: latitude}
            }
        }else{
            polygon = new Polygon(geometry);
        }
        return polygon;
    }
}

export default new Helper();