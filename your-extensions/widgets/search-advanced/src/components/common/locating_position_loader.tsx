
import {React,jsx} from 'jimu-core';
import {Loading} from 'jimu-ui';

type propsType = {
    locatingPosition:{status:boolean,error:boolean},
}

export default class LocatingPositionLoader extends React.PureComponent<propsType,any>{

    constructor(props:propsType){
        super(props);
    }

    render(): React.ReactNode {
        return (
            <>
                {
                    this.props.locatingPosition["status"] && !this.props.locatingPosition["error"] &&
                        (
                          <div 
                                style={{
                                    width:"100%",
                                    display:"flex",
                                    flexDirection:"column",
                                    justifyContent:"center",
                                    height:"auto"
                                }}
                            >
                                <div 
                                    style={{
                                        height:'80px',
                                        position:'relative',
                                        width:'100%',
                                        marginLeft:"auto",
                                        marginRight:"auto"
                                    }}
                                >
                                    <Loading />
                                </div>
                            <div style = {{fontSize:14,color:"grey",width:'100%',textAlign:"center"}}>
                              Locating position on the map....
                            </div>
                          </div>
                        )
                }
            </>
        )
    }
}