

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
}

export default new Helper();