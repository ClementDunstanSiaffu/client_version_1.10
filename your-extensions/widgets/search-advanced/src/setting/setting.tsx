/** @jsx jsx */
import { React, jsx, FormattedMessage } from "jimu-core";
import { AllWidgetSettingProps } from "jimu-for-builder";
import {MapWidgetSelector, SettingRow, SettingSection} from "jimu-ui/advanced/setting-components";
import { Select, Option } from "jimu-ui";
import { ChangeEvent } from "react";



export default class Setting extends React.PureComponent<AllWidgetSettingProps<any>, any> {

  constructor(props:AllWidgetSettingProps<any>){
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  state = {showInputs:false,inputsType:" "};

  onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: useMapWidgetIds
    });
  };

  saveState(val,key,value){
    const newObject = {...this.props.config[val],[key]:value};
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(val,newObject)
    }); 
  }

  onChangeHandler(e:ChangeEvent){
    //@ts-ignore
    this.setState({showInputs:true,inputsType:e.target.value})
  }

  render() {
    return (
        <div className="widget-setting-search-advanced">
          <SettingSection title={"Sorgente Mappa"}>
            <MapWidgetSelector useMapWidgetIds={this.props.useMapWidgetIds} onSelect={this.onMapWidgetSelected} />
          </SettingSection>
          <SettingSection title={" "}>
            <Select onChange={this.onChangeHandler} placeholder="Select search option">
              {Object.keys(this.props.config).map((el, i) => (
                <Option id={i} value={el}>
                  <div className="text-truncate">{el}</div>
                </Option>
              ))}
            </Select>
          </SettingSection>
          <SettingSection title={"Options"}>
            <SettingRow label={<FormattedMessage id="idWidgetTable" defaultMessage={"Id Widget table"}/>}>
              <input defaultValue={this.props.config.idWidgetTable} onChange={(e) => this.saveState("idWidgetTable",'idWidgetTable',e.target.value)}/>
            </SettingRow>
            {
              this.state.showInputs ?
              Object.keys(this.props.config).map((val,i)=>{
                if (this.state.inputsType === val){
                  const item = this.props.config[val];
                  const keys = Object.keys(item);
                  return(
                    keys.map((key,j)=>(
                      <SettingRow label={<FormattedMessage id = {key} defaultMessage = {key}/>} key = {`${j}`+{key}}>
                        <input defaultValue={item[key]} onChange = {(e)=>this.saveState(val,key,e.target.value)}/>
                      </SettingRow>
                    ))
                  )
                }
                return null;
              })
              :null
            }
          </SettingSection>
        </div>
    );
  }
}

