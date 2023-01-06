
import {React,jsx,appActions} from 'jimu-core';
import { Button,Popper,Checkbox} from 'jimu-ui';
import '../assets/css/style.scss'
import Widget from '../runtime/widget';

type PropsType = {
    parent:Widget;
    filterValue:number
}

export default class SelectFilterType extends React.PureComponent<PropsType,any>{

    reference = null;
    state = {open:false}

    onHandleChange = (item:{value:number,label:string})=>{
        const self = this.props.parent;
        self.props.dispatch(appActions.widgetStatePropChange("value","filterValue",item.value));
        this.setState({open:false});
    }

    render(): React.ReactNode {

        const filters = [{label:"Filter by extention",value:1},{label:"Filter by value buffer",value:2}]

        const selectedItem = (value)=>{
            const val = this.props?.filterValue??1
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
                <Button ref={(ref)=>this.reference = ref} onClick={() =>this.setState({open:!this.state.open})}>
                    Select filter
                </Button>
                <Popper
                    floating={false}
                    open={this.state.open}
                    reference={this.reference}
                >
                    <div style = {{width:"100%",height:"fit-content",backgroundColor:"white"}}>
                        {
                            filters.map((filter,k)=>{
                                const itemSelected = selectedItem(filter.value);
                                return(
                                    <div 
                                        key = {`${k}`+filter.label} 
                                        className = "layer-content-container row-color-hover margin-top-10 add-padding-all"
                                    >
                                        <div className='check-box-container'>
                                            <Checkbox
                                                aria-label="Checkbox"
                                                checked = {itemSelected}
                                                onChange={()=>this.onHandleChange(filter)}
                                            />
                                        </div>
                                        <div className='flex-auto cursor-style' >
                                            {filter.label}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Popper>
          </>
        )
    }
}