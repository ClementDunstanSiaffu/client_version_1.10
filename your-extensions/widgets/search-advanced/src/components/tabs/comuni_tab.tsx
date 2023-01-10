
import {React,jsx} from 'jimu-core';
import {Select,Option,Alert,Loading} from 'jimu-ui';
import { SearchWidgetContext } from '../../context/context';
import LocatingPositionLoader from '../common/locating_position_loader';

export default class ComuniTab extends React.PureComponent<any,any>{

    static contextType?: React.Context<any> = SearchWidgetContext;

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
                    <Alert className="w-100" form="basic" open text="Selezionare il comune" type="info" withIcon/>
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
                      <Select className="w-100" onChange={searchWidget.onChangeSelectComuni} placeholder="Seleziona un comune">
                        {listComuni.map((el, i) => {
                          return <Option value={el.attributes.OBJECTID}>
                            {el.attributes[Object.keys(el.attributes)[1]]}
                            {/*TODO -it requires vpn to work */}
                            {/* {el.attributes.NOMECOMUNE} */}
                          </Option>
                        })}
                      </Select>
                  }
                  <LocatingPositionLoader locatingPosition={locatingPosition}/>
                  {
                    !locatingPosition["status"] && locatingPosition["error"] && 
                    <Alert 
                      open = {!locatingPosition["status"] && locatingPosition["error"]  ?true:false}
                      text = {"Failed to locate position"}
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