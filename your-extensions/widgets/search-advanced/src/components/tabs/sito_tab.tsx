

import {React,jsx} from 'jimu-core';
import {Select,Option,Alert,Loading} from 'jimu-ui';
import { SearchWidgetContext } from '../../context/context';
import LocatingPositionLoader from '../common/locating_position_loader';
import Table from '../common/table';

export default class SitoTab extends React.PureComponent<any,any>{

    static contextType?: React.Context<any> = SearchWidgetContext;

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
                                <Alert className="w-100" form="basic" open text="Selezionare prima lo STO, poi fare click sul comune per evidenziarlo." type="info" withIcon/>
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
                            <Select className="w-100" onChange={searchWidget.onChangeSelectSTO} placeholder="Seleziona un comune">
                            {
                                listSTO.map((el, i) => {
                                return<Option value={el.attributes.OBJECTID}>
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
                        </div>
                        <div style={{maxHeight: 350, overflowY: 'auto'}}>
                        { !resultSTO?.length
                            ? ""
                            : <Table className="w-100" list={resultSTO} handleClick={searchWidget.onClickViewTable}/>
                        }
                        </div>
                  </div>
                </div>
            </div>
        )
    }
}