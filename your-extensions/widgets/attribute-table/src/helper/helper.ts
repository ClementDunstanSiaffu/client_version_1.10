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
        console.log(activeTable,"check active table")
        if (renderer){
            switch(renderer.type){
                case "class-breaks":
                    // this.updateVisulaVariables(renderer,color,activeTable.layer.objectIdField,highlightedItems)
                    this.loopUpdateSymbol(renderer?.classBreakInfos,color,fields,highlightedItems);
                    break;
                case "unique-value":
                    // this.updateVisulaVariables(renderer,color,activeTable.layer.objectIdField,highlightedItems)
                    // console.log(renderer.field,activeTable.layer.objectIdField)
                    this.loopUpdateSymbol(renderer?.uniqueValueInfos,color,fields,highlightedItems)
                    break;
                case "simple":
                    if (renderer.hasOwnProperty("symbol")){
                        // this.updateVisulaVariables(renderer,color,activeTable.layer.objectIdField,highlightedItems)
                        // this.makeFieldInvisible(fields,highlightedItems)
                        renderer.symbol.color = color;
                        if (renderer.symbol?.outline){
                            renderer.symbol.outline.color = color;
                        }
                    }
                    break;
            }
        }
    }

    updateVisulaVariables = (renderer:any,color:string,field:string,highlighedItems:string[])=>{
        if (renderer){
            renderer.visualVariables = [
                {
                    type:"color",
                    field:field,
                    stops: this.getStops(highlighedItems,color)
                }
            ]
        }
        console.log(renderer)
    }

    getStops = (highlighedItems:string[],color:string)=>{
        let stopsArray = [];
        for (let i =0;i< highlighedItems.length;i++){
            const object = {value:highlighedItems[i],color:color,label:`label-${highlighedItems[i]}`};
            stopsArray.push(object);
        }
        return stopsArray;
    }

    // makeFieldInvisible = (fields:any[],highlighedItems:any[])=>{
    //     if (fields?.length && highlighedItems?.length){
    //         for (let j=0;j < fields.length;j++){
    //             if (highlighedItems.includes(fields[j])){
    //                 if (fields[j].hasOwnProperty("visible") && !fields[j].visible){
    //                     fields[j].visible = true;
    //                 } 
    //             }else{
    //                 if (fields[j].hasOwnProperty("visible") && fields[j].visible){
    //                     fields[j].visible = false;
    //                 } 
    //             }
    //         }
    //     }
    //     console.log(fields,"check fields")
    // }

    loopUpdateSymbol = (classBreakInfos:any[],color:string,fields:any[],highlighedItems:any[])=>{
        console.log(classBreakInfos,"check infos")
        if (classBreakInfos?.length && color){
            for (let i = 0;i < classBreakInfos.length;i++){
                // this.makeFieldInvisible(fields,highlighedItems)
                classBreakInfos[i].symbol.color = color;
                if (classBreakInfos[i].symbol.hasOwnProperty("outline")){
                    classBreakInfos[i].symbol.outline.color = color;
                }
            }
        }
    }

}

export default new Helper();