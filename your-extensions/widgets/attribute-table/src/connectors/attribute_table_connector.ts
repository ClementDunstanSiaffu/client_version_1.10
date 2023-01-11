import { JimuMapView } from "jimu-arcgis";

type spatialRelationshipType = "intersects" | "contains" | "crosses" | "disjoint" | "envelope-intersects" | "index-intersects" | "overlaps" | "touches" | "within" | "relation"

type layerOpenType = {
    geometry:any,
    typeSelected:spatialRelationshipType,
    where?:string,
    graphicsFound?:any,
    valueBuffer?:any
}

type selectedLayerType = {
    id:string,
    attributes:any[]
}

class AttributeTableConnector {

    static activeView:JimuMapView = null;
    static self:any = null;

    checkedLayers?:string[];
    numberOfAttributes?:{[key:string]:string};
    allCheckedLayers?:any[];
    createTable:boolean;
    layerOpen:layerOpenType


    constructor(activeView:JimuMapView,self:any){
        AttributeTableConnector.activeView = activeView;
        AttributeTableConnector.self = self;
    }

    init(
        layer:any,
        createTable:boolean,
        results:any[],
        allCheckedLayers?:any[],
        checkedLayers?:string[],
        numberOfAttributes?:{[key:string]:string},
        layerOpen?:layerOpenType
    ){  
        this.createTable = createTable;
        this.setCheckedLayers(layer,checkedLayers);
        this.setAllCheckedLayers(layer,allCheckedLayers);
        this.setNumberOfAttributes(results,numberOfAttributes);
        this.setLayerOpen(layerOpen);
    }


    isArray = (val)=>Array.isArray(val);

    isObject = (val)=>Object.keys(val).length > 0;

    loopLayerGetIds = (layer:any[])=>{
        let idsArray = [];
        if (layer.length){
            idsArray = layer.reduce((newArray,item)=>{
                if (item.id){
                    newArray.push(item.id)
                }
                return newArray;
            },[])
        }
        return idsArray;
    }

    setCheckedLayers = (layer:any,checkedLayers?:string[],)=>{
        if (checkedLayers){
            this.checkedLayers = checkedLayers;
            return;
        }
        let checkedLayersArr = [];
        if (layer){
            if (this.isObject(layer)){
                checkedLayers.push(layer.id);
            }
            if (this.isArray(layer)){
                checkedLayers = [...checkedLayersArr,this.loopLayerGetIds(layer)];
            }
        }
        this.checkedLayers = checkedLayers;
    }

    setAllCheckedLayers = (layer:any,allCheckedLayers:any[])=>{
        const activeView = AttributeTableConnector.activeView;
        if(allCheckedLayers){
            this.allCheckedLayers = allCheckedLayers;
            return;
        }
        if (activeView){
            //@ts-ignore
            const allMapLayers = activeView.view.map.allLayers?.items;
            const checkedLayers = this.checkedLayers??[];
            let newMapLayer = [];
            if (allMapLayers?.length > 0 && checkedLayers.length > 0){
                newMapLayer = allMapLayers.reduce((newArray,item)=>{
                    if (checkedLayers.includes(item.id)){
                        newArray.push(item);
                    }
                    return newArray;
                },[])
                this.allCheckedLayers = newMapLayer;
                return;
            }
            this.allCheckedLayers = newMapLayer;
            return;
        }
       this.allCheckedLayers = [layer] 
    }


    getSelectedContentsLayer =(results:any):selectedLayerType[]=>{
        const checkedLayers = this.checkedLayers??[];
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

    setNumberOfAttributes = (results:any[],numberOfAttributes?:{[key:string]:string},)=>{
        if (numberOfAttributes){
            this.numberOfAttributes = numberOfAttributes;
            return;
        }
        const layersContents = this.getSelectedContentsLayer(results);
        let layerContentsObject = {};
        for (let i=0;i < layersContents.length;i++){
             layerContentsObject = {...layerContentsObject,[layersContents[i]?.id]:layersContents[i]?.attributes?.length??0}
        }
        this.numberOfAttributes = layerContentsObject
    }

    setLayerOpen = (layerOpen?:layerOpenType)=>{
        if (layerOpen){
            this.layerOpen = layerOpen;
            return;
        }
        this.layerOpen = {
            geometry:null,
            typeSelected:"contains",
        }
    }

    getActiveView = ()=>AttributeTableConnector.activeView;
    
    getAllCheckedLayers = ()=> this.allCheckedLayers;

    dispatchingAll = ()=>{
        const self = AttributeTableConnector.self;
        if (self){

        }
    }

    

  
}