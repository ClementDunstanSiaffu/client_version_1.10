

import {React,jsx} from 'jimu-core';
import {Select,Option,Alert,Loading} from 'jimu-ui';
import { SearchWidgetContext } from '../../context/context';
import LocatingPositionLoader from '../common/locating_position_loader';
import Table from '../common/table';
import Query from 'esri/rest/support/Query';
import query from 'esri/rest/query';
import Graphic from 'esri/Graphic';
import helper from '../../helper/helper';

export default class AmbitoTab extends React.PureComponent<any,any>{

    static contextType?: React.Context<any> = SearchWidgetContext;

    constructor(props:any){
        super(props);
        this.onChangeSelectAmbiti = this.onChangeSelectAmbiti.bind(this);
    }

    nls = (id:string)=>{
        const searchWidget = this.context?.parent;
        return searchWidget.nls(id);
    }

    async onChangeSelectAmbiti (e) {
        const searchWidget = this.context?.parent;
        const jimuMapView = this.context?.jimuMapView;
        const searchAmbiti = this.context?.searchAmbiti

        searchWidget.setLocatingPostion(true,false);
        searchWidget.graphicLayerFound.removeAll();
        const queryObject = new Query();
        //TODO
        // queryObject.where = `IDAMBITO = "${e.target.value}"`;
        queryObject.where = `FID = ${e.target.value}`;
        queryObject.returnGeometry = true;
        // @ts-expect-error
        queryObject.outFields = '*';
        try{
          const results = await query.executeQueryJSON(searchAmbiti?.url, queryObject);
          //TODO
          // results.features.sort(function (a, b) {
          //   return ((a.attributes.NOMECOMUNE < b.attributes.NOMECOMUNE) ? -1 : ((a.attributes.NOMECOMUNE == b.attributes.NOMECOMUNE) ? 0 : 1))
          // })
          const feature = results.features;
          const totalpolygonGraphic = [];
          if (feature.length){
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
                const polygonGraphic = new Graphic({geometry: polygon,symbol:symbol});
                searchWidget.graphicLayerFound.add(polygonGraphic);
                totalpolygonGraphic.push(polygonGraphic);
            })
            if (totalpolygonGraphic.length){
              console.log("go to")
              jimuMapView.view.goTo({center:totalpolygonGraphic});
              searchWidget.setLocatingPostion(false,false);
            }
            searchWidget.setState({resultsAmbiti: results.features})
          }else{
            searchWidget.setLocatingPostion(false,true);
          }
          }catch(err){
            searchWidget.setLocatingPostion(false,true);
          }
      }

    render(): React.ReactNode {

        const listAmbiti = this.context?.listAmbiti??[];
        const urlFetched = this.context?.urlFetched;
        const searchWidget = this.context?.parent;
        const locatingPosition = this.context?.locatingPosition;
        const resultsAmbiti = this.context?.resultsAmbiti

        return(
            <div className="mt-4 container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-2">
                  {
                    (!listAmbiti.length && urlFetched["ambito"]) && 
                    <Alert className="w-100" form="basic" open text={this.nls("scopeAlert")} type="info" withIcon/>
                  }
                  {
                    (!listAmbiti.length && !urlFetched["ambito"]) && 
                      <div style={{height:'80px',position:'relative',width:'100%',marginLeft:"auto",marginRight:"auto"}}>
                        <Loading />
                      </div>
                  }
                  {/* <Alert className="w-100" form="basic" open text="Selezionare prima l'ambito, poi fare click sul comune per evidenziarlo" type="info" withIcon/> */}
                </div>
                <div className="mb-2">
                  {listAmbiti.length > 0 && 
                    <Select onChange={this.onChangeSelectAmbiti} placeholder="Seleziona un comune">
                      {listAmbiti.map((el, i) => {
                        return <Option value={el.attributes.FID}>{el.attributes[Object.keys(el.attributes)[1]]}</Option>
                        //TODO-require vpn 
                        // return <Option value={el.attributes.IDAMBITO}>
                        //   {el.attributes.NOMEAMBITO}
                        // </Option>
                      })}
                    </Select>}
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
                  { !resultsAmbiti?.length
                      ? ""
                      : <Table 
                            className="w-100" 
                            list={resultsAmbiti} 
                            handleClick={(e)=>searchWidget.onClickViewTable(e,"searchAmbiti")} 
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