

import {React,jsx} from 'jimu-core';
import {Select,Option,Alert,Loading} from 'jimu-ui';
import { SearchWidgetContext } from '../../context/context';
import LocatingPositionLoader from '../common/locating_position_loader';
import Table from '../common/table';
import Query from 'esri/rest/support/Query';
import query from 'esri/rest/query';
import Graphic from 'esri/Graphic';
import helper from '../../helper/helper';

export default class SitoTab extends React.PureComponent<any,any>{

    static contextType?: React.Context<any> = SearchWidgetContext;

    constructor(props:any){
        super(props);
        this.onChangeSelectSTO = this.onChangeSelectSTO.bind(this);
    }

    nls = (id:string)=>{
        const searchWidget = this.context?.parent;
        return searchWidget.nls(id);
    }

    async onChangeSelectSTO (e) {
        const searchWidget = this.context?.parent;
        const jimuMapView = this.context?.jimuMapView;
        const searchSTO = this.context?.searchSTO

        searchWidget.setLocatingPostion(true,false)
        searchWidget.graphicLayerFound.removeAll();
        const queryObject = new Query();
        //TODO
        // queryObject.where = `IDCOMPARTIMENTO = ${e.target.value}`;
        queryObject.where = `FID = ${e.target.value}`
        queryObject.returnGeometry = true;
        // @ts-expect-error
        queryObject.outFields = '*';
        try{
          const results = await query.executeQueryJSON(searchSTO.url, queryObject);
            //---TODO ---//
          // results.features.sort(function (a, b) {
          //   return ((a.attributes.NOMECOMUNE < b.attributes.NOMECOMUNE) ? -1 : ((a.attributes.NOMECOMUNE == b.attributes.NOMECOMUNE) ? 0 : 1));
          // })
    
          const feature = results.features;
          const totalpolygonGraphic = []
          if (feature?.length){
            feature.forEach((el,i)=>{
                const polygon = helper.returnGraphicsGeometry(el);
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
                const polygonGraphic = new Graphic({geometry: polygon,symbol: symbol});
                searchWidget.graphicLayerFound.add(polygonGraphic);
                totalpolygonGraphic.push(polygonGraphic);
            })
            if (totalpolygonGraphic.length){
              jimuMapView.view.goTo({center:totalpolygonGraphic});
              searchWidget.setLocatingPostion(false,false);
            }
            searchWidget.setState({resultSTO:feature});
          }else{
            searchWidget.setLocatingPostion(false,true);
          }
        }catch(err){
            searchWidget.setLocatingPostion(false,true);
        }
      }

    render(): React.ReactNode {

        const listSTO = this.context?.listSTO;
        const urlFetched = this.context?.urlFetched;
        const searchWidget = this.context?.parent;
        const locatingPosition = this.context?.locatingPosition;
        const resultSTO = this.context?.resultSTO

        return(
            <div className="mt-4 container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-2">
                            {
                                (!listSTO.length && urlFetched["sito"]) && 
                                <Alert className="w-100" form="basic" open text={this.nls("siteALert")} type="info" withIcon/>
                            }
                            {
                            (!listSTO.length && !urlFetched["sito"]) && 
                                <div style={{height:'80px',position:'relative',width:'100%',marginLeft:"auto",marginRight:"auto"}}>
                                    <Loading />
                                </div>
                            }
                        </div>
                        <div className="mb-2">
                            {
                                listSTO.length > 0 && 
                                <Select className="w-100" onChange={this.onChangeSelectSTO} placeholder={this.nls("selectAMunicipality")}>
                                {
                                    listSTO.map((el, i) => {
                                    return<Option value={el.attributes.FID}>
                                            {el.attributes[Object.keys(el.attributes)[1]]}
                                            </Option>
                                            //TODO - it requires where-tech map with the required field
                                            // return<Option value={el.attributes.IDCOMPARTIMENTO}>
                                            //         {/* {el.attributes.NOMECOMPARTIMENTO} */}
                                            //       </Option>
                                        })
                                }
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
                        <div style={{maxHeight: 350, overflowY: 'auto'}}>
                            { !resultSTO?.length
                                ? ""
                                : <Table 
                                    className="w-100" 
                                    list={resultSTO} 
                                    handleClick={(e)=>searchWidget.onClickViewTable(e,"searchSTO")}
                                    locatingPosition = {locatingPosition}
                                />
                            }
                        </div>
                  </div>
                </div>
            </div>
        )
    }
}