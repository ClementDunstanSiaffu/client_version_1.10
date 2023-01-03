import Color from "esri/Color";

class Helper {

    openSideBar(checkedLayers:string[],numberOfAttributes:{[id:string]:number}){
        const currentCheckedLayer = checkedLayers ??[];
        const sidebar = document.querySelector(".sidebar-controller");
        if (currentCheckedLayer.length > 0 && Object.keys(numberOfAttributes).length > 0){
             //@ts-ignore
            if(sidebar?.getAttribute("aria-expanded") === "false"){
                //@ts-ignore
                if(sidebar) sidebar.click();
            }
        }
       
        if (currentCheckedLayer.length <= 0){
            if (sidebar){
                if (sidebar.getAttribute("aria-expanded") === "true"){
                    //@ts-ignore
                    sidebar.click();
                }
            }
        }
    }

    hideLayer = (jimuLayerViews:any,id:string)=>{
        const keys = Object.keys(jimuLayerViews);
        if (keys.length > 0){
            keys.forEach((key)=>{
                if (id === jimuLayerViews[key]?.layer?.id){
                    if (jimuLayerViews[key].hasOwnProperty("highLightHandle")){
                        jimuLayerViews[key]?.highLightHandle?.remove()
                    }
                    if(jimuLayerViews[key].layer?.hasOwnProperty("visible")){
                        jimuLayerViews[key].layer.visible = false;
                    }
                    if (jimuLayerViews[key].hasOwnProperty("view")){
                        if (jimuLayerViews[key].view?.hasOwnProperty("visible")){
                            jimuLayerViews[key].view.visible = false;
                        }
                    }
                }
            })
        } 
    }

    getNewNumberOfAttributes = (currentNumberOfAttribute:{[id:string]:number},id:string)=>{
        let copiedNumberOfAttribute = {...currentNumberOfAttribute};
        if (Object.keys(copiedNumberOfAttribute).length > 0 && copiedNumberOfAttribute[id]){
            delete copiedNumberOfAttribute[id];
        }
        return copiedNumberOfAttribute;
    }

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

    unhighlightAllLayer = (jimuLayerViews)=>{
        const keys = Object.keys(jimuLayerViews);
        if (keys.length > 0){
            keys.forEach((key)=>{
                jimuLayerViews[key]?.highLightHandle?.remove()
            })
        } 
    }

    deactivateAllLayer = (jimuLayerViews)=>{
        const keys = Object.keys(jimuLayerViews);
        if (keys.length > 0){
            keys.forEach((key)=>{
                    if(jimuLayerViews[key].layer?.hasOwnProperty("visible")){
                        jimuLayerViews[key].layer.visible = false;
                        
                    }
                    if (jimuLayerViews[key].hasOwnProperty("view")){
                        if (jimuLayerViews[key].view?.hasOwnProperty("visible")){
                            jimuLayerViews[key].view.visible = false;
                            
                        }
                    }
                
            })
        } 
    }

    updateSymbol = (activeTable:any,color:string)=>{
        const renderer = activeTable.layer.renderer;
        const highlightedItems = activeTable?.highlightIds?._items??[];
        const fields = activeTable.layer.fields;
        console.log(highlightedItems,fields,"check atctive table");
        if (renderer){
            switch(renderer.type){
                case "class-breaks":
                    this.loopUpdateSymbol(renderer?.classBreakInfos,color,fields,highlightedItems);
                    break;
                case "unique-value":
                    console.log(renderer.field,activeTable.layer.objectIdField)
                    this.loopUpdateSymbol(renderer?.uniqueValueInfos,color,fields,highlightedItems)
                    break;
                case "simple":
                    if (renderer.hasOwnProperty("symbol")){
                        this.makeFieldInvisible(fields,highlightedItems)
                        renderer.symbol.color = color;
                        if (renderer.symbol?.outline){
                            renderer.symbol.outline.color = color;
                        }
                    }
                    break;
            }
        }
    }

    makeFieldInvisible = (fields:any[],highlighedItems:any[])=>{
        if (fields?.length && highlighedItems?.length){
            for (let j=0;j < fields.length;j++){
                if (highlighedItems.includes(fields[j])){
                    if (fields[j].hasOwnProperty("visible") && !fields[j].visible){
                        fields[j].visible = true;
                    } 
                }else{
                    if (fields[j].hasOwnProperty("visible") && fields[j].visible){
                        fields[j].visible = false;
                    } 
                }
            }
        }
    }

    loopUpdateSymbol = (classBreakInfos:any[],color:string,fields:any[],highlighedItems:any[])=>{
        if (classBreakInfos?.length && color){
            for (let i = 0;i < classBreakInfos.length;i++){
                this.makeFieldInvisible(fields,highlighedItems)
                classBreakInfos[i].symbol.color = color;
                if (classBreakInfos[i].symbol.hasOwnProperty("outline")){
                    classBreakInfos[i].symbol.outline.color = color;
                }
            }
        }
    }

}

export default new Helper();