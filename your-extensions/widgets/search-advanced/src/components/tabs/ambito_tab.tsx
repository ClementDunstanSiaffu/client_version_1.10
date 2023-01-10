

import {React,jsx} from 'jimu-core';
import {Select,Option,Alert,Loading} from 'jimu-ui';
import { SearchWidgetContext } from '../../context/context';
import LocatingPositionLoader from '../common/locating_position_loader';
import Table from '../common/table';

export default class AmbitoTab extends React.PureComponent<any,any>{

    static contextType?: React.Context<any> = SearchWidgetContext;

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
                    <Alert className="w-100" form="basic" open text="Selezionare prima l'ambito, poi fare click sul comune per evidenziarlo" type="info" withIcon/>
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
                    <Select onChange={searchWidget.onChangeSelectAmbiti} placeholder="Seleziona un comune">
                      {listAmbiti.map((el, i) => {
                        return <Option value={el.attributes.OBJECTID}>{el.attributes[Object.keys(el.attributes)[1]]}</Option>
                        //TODO-require vpn 
                        // return <Option value={el.attributes.IDAMBITO}>
                        //   {el.attributes.NOMEAMBITO}
                        // </Option>
                      })}
                    </Select>}
                  <LocatingPositionLoader locatingPosition={locatingPosition}/>
                </div>
                <div style={{maxHeight: 350, overflowY: 'auto'}}>
                  { !resultsAmbiti?.length
                      ? ""
                      : <Table className="w-100" list={resultsAmbiti} handleClick={searchWidget.onClickViewTable} />
                  }
                </div>
              </div>
            </div>
          </div>
        )
    }
}