
export type spatialRelationshipType = "intersects" | "contains" | "crosses" | "disjoint" | "envelope-intersects" | "index-intersects" | "overlaps" | "touches" | "within" | "relation"


export type stateValueType = {
    stateValue:{
        value:{
            getAllLayers:()=>any,
            layerOpen:{
                geometry:any,
                typeSelected:spatialRelationshipType,
                where?:string,
                graphicsFound?:any,
                valueBuffer?:any
            },
            getActiveView:()=>any,
            checkedLayers:string[],
            numberOfAttribute:{[id:string]:number},
            createTable:boolean,
            initialMapZoom:any,
            filterValue:number
        }
    }
}