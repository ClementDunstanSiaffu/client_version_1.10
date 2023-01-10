

import {React,jsx, appActions} from 'jimu-core';
import { Button,Popper,Switch} from 'jimu-ui';
import '../assets/css/style.scss'
import Widget from '../runtime/widget';

type PropsType = {
    parent:Widget;
    filterValue:number
}

export default class SelectFilterType extends React.PureComponent<PropsType,any>{

    constructor(props:PropsType){
        super(props);
        this.onHandleChange = this.onHandleChange.bind(this);
    }


    nls = (id:string)=>{
        const searchWidget = this.props.parent;
        return searchWidget.nls(id);
    }

    onHandleChange = (item:{value:number,label:string})=>{
        const self = this.props.parent;
        self.props.dispatch(appActions.widgetStatePropChange("value","filterValue",item.value));
        if (Widget.selectedResults){
            self.setState({disableButton:false});
        }
    }

    render(): React.ReactNode {

        const filterByExtention = this.nls("filterByExtention");
        const filterByValueBuffer = this.nls("filterByValueBuffer")

        const filters = [{label:filterByExtention,value:1},{label:filterByValueBuffer,value:2}]

        const selectedItem = (value)=>{
            const val = this.props.filterValue
            let defaultValue = false;
            if (val){
                if (val === value)defaultValue =  true;
            }else if (value === 1){
                defaultValue = true;
            }
            return defaultValue;
        }

        return(
            <>
                <div style = {{width:"100%",height:"fit-content",backgroundColor:"transparent"}}>
                    {
                        filters.map((filter,k)=>{
                            const itemSelected = selectedItem(filter.value);
                                return(
                                    <div 
                                        key = {`${k}`+filter.label} 
                                        className = "layer-content-container row-color-hover margin-top-10 add-padding-all"
                                    >
                                        <div className='flex-auto cursor-style' >
                                            {filter.label}
                                        </div>
                                        <div className='check-box-container'>
                                            <Switch  checked = {itemSelected} onChange={()=>this.onHandleChange(filter)} />
                                        </div>
                                    </div>
                                )
                            })
                    }
                </div>
               
          </>
        )
    }
}