
import {React,jsx} from 'jimu-core';
import { Alert } from 'jimu-ui';
import Widget from '../../runtime/widget';

type propsType = {
    open:boolean,
    type:"success"|"info"|"warning"|"error",
    text:string,
    withIcon:boolean,
    closable:boolean,
    onClose:(val?:any)=>void
}

export default class AlertComponent extends React.PureComponent<propsType,any>{

    static defaultProps = {
        closable:true,
        open:false,
        type:"info",
        text:" ",
        withIcon:true,
        onClose:()=>{}
    }

    render(): React.ReactNode {
        return(
            <Alert 
                onClose={this.props.onClose}
                closable = {this.props.closable}
                open = {this.props.open} 
                type = {this.props.type} 
                text = {this.props.text}
                withIcon = {this.props.withIcon}
            />
        )
    }
}