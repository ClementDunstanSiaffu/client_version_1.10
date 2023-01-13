
import {React,jsx} from 'jimu-core';
import {Select,Option,Alert,Loading} from 'jimu-ui';
import { SearchWidgetContext } from '../../context/context';
import LocatingPositionLoader from '../common/locating_position_loader';
import Query from 'esri/rest/support/Query';
import query from 'esri/rest/query';
import Graphic from 'esri/Graphic';
import helper from '../../helper/helper';
import { symbol } from 'prop-types';

export default class ComuniTab extends React.PureComponent<any,any>{

    static contextType?: React.Context<any> = SearchWidgetContext;

    constructor(props:any){
        super(props);
        this.onChangeSelectComuni = this.onChangeSelectComuni.bind(this);
    }

    nls = (id:string)=>{
        const searchWidget = this.context?.parent;
        return searchWidget.nls(id);
    }

    async onChangeSelectComuni (e) {

        const searchWidget = this.context?.parent;
        const jimuMapView = this.context?.jimuMapView;
        const searchItems = this.context?.searchItems

        searchWidget.graphicLayerFound.removeAll();
        const queryObject = new Query();
        // queryObject.where = `OBJECTID = ${e.target.value}`;---TODO
        queryObject.where = `FID = ${e.target.value}`;
        queryObject.returnGeometry = true;
        queryObject.outFields = searchItems?.outFields;
        searchWidget.setLocatingPostion(true,false);
        try{
          const results = await query.executeQueryJSON(searchItems?.url, queryObject);
          if(results && results.features?.length){
            const feature = results.features[0];
            const polygon = helper.returnGraphicsGeometry(feature);
            let symbol = searchWidget.symbolSelected
            if (polygon.type === "point"){
              symbol = {
                type: "simple-marker", 
                color:[51, 51, 204, 0.5],
                size:"100px",
                outline:{
                  color:"transparent",
                  width:0
                }
              }
            }      
            const polygonGraphic = new Graphic({geometry: polygon,symbol:symbol})
            searchWidget.graphicLayerFound.add(polygonGraphic);
            jimuMapView.view.goTo({center: polygonGraphic});
            searchWidget.setLocatingPostion(false,false);      
          }else{
            searchWidget.setLocatingPostion(false,true);
          }
        }catch(err){
            searchWidget.setLocatingPostion(false,true);
        }
     
      }

    render(): React.ReactNode {

        const listComuni = this.context?.listComuni??[];
        const urlFetched = this.context?.urlFetched;
        const searchWidget = this.context?.parent;
        const locatingPosition = this.context?.locatingPosition;
        
        return(
            <div className="mt-4 container-fluid" style={{overflow: 'hidden'}}>
            <div className="row">
              <div className="col-md-12">
                <div className="mb-2">
                  {(!listComuni.length && urlFetched["comuni"]) &&
                    <Alert className="w-100" form="basic" open text={this.nls("selectTheMunicipality")} type="info" withIcon/>
                  }
                  {
                  (!listComuni.length && !urlFetched["comuni"]) &&
                    <div style={{height:'80px',position:'relative',width:'100%',marginLeft:"auto",marginRight:"auto"}}>
                      <Loading />
                    </div>
                  }
                </div>
                <div className="mb-2">
                  {
                   listComuni.length > 0 &&
                      <Select className="w-100" onChange={this.onChangeSelectComuni} placeholder={this.nls("selectAMunicipality")}>
                        {listComuni.map((el, i) => {
                            return <Option value={el.attributes.FID}>
                             {el.attributes[Object.keys(el.attributes)[1]]}
                           </Option>
                           //TODO ---
                          // return <Option value={el.attributes.OBJECTID}>
                          //   {el.attributes.NOMECOMUNE}
                          // </Option>
                        })}
                      </Select>
                  }
                  <LocatingPositionLoader locatingPosition={locatingPosition}/>
                  {
                    !locatingPosition["status"] && locatingPosition["error"] && 
                    <Alert 
                      open = {!locatingPosition["status"] && locatingPosition["error"]  ?true:false}
                      text = {this.nls("failedToLocatePosition")}
                      type = "error"
                      onClose={()=>searchWidget.setLocatingPostion(false,false)}
                    />
                  }
                </div>
              </div>
            </div>
          </div>
        )
    }
}