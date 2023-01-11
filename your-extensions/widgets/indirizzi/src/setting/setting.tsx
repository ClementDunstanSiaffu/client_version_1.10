/** @jsx jsx */
import { React, jsx, FormattedMessage } from "jimu-core";
import { AllWidgetSettingProps } from "jimu-for-builder";
import {MapWidgetSelector, SettingRow, SettingSection} from "jimu-ui/advanced/setting-components";
import {Select,Option} from 'jimu-ui';
import { ChangeEvent } from "react";

export default class Setting extends React.PureComponent<AllWidgetSettingProps<any>, any> {

  constructor(props:AllWidgetSettingProps<any>){
    super(props);
    this.state = {showInputs:false,inputsType:" ",categoryType:null};
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: useMapWidgetIds
    });
  };

  saveState(val,key,value){
    const categoryType = this.state.categoryType;
    if (categoryType){
      const currentValue = this.props.config[categoryType];
      let newObject = this.props.config;
      if (typeof currentValue[val] === "object"){
        const innerObject = {...currentValue[val],[key]:value};
        newObject = {...currentValue,[val]:innerObject};
      }else{
        newObject = {...currentValue,[key]:value}
      }
      this.props.onSettingChange({
        id: this.props.id,
        config: this.props.config.set(categoryType,newObject)
      });
    }
  }

  // saveState(val,key,value){
  //   const currentValue = this.props.config[val];
  //   let newObject = this.props.config;
  //   if (typeof currentValue === "object"){
  //     newObject = {...this.props.config[val],[key]:value};
  //   }else{
  //     newObject = value
  //   }
  //   this.props.onSettingChange({
  //     id: this.props.id,
  //     config: this.props.config.set(val,newObject)
  //   }); 
  // }

  onChangeHandler(e:ChangeEvent,category:string){
    //@ts-ignore
    this.setState({showInputs:true,inputsType:e.target.value,categoryType:category})
  }

  render() {
    return (
        <div className="widget-setting-search-advanced">
          <SettingSection title={"Sorgente Mappa"}>
            <MapWidgetSelector useMapWidgetIds={this.props.useMapWidgetIds} onSelect={this.onMapWidgetSelected} />
          </SettingSection>
          <SettingSection title={"Settings"}>
            <Select onChange={(e)=>this.onChangeHandler(e,"settings")} placeholder="Select search option">
              {Object.keys(this.props.config["settings"]).map((el, i) => (
                <Option id={i} value={el}>
                  <div className="text-truncate">{el}</div>
                </Option>
              ))}
            </Select>
          </SettingSection>
          <SettingSection title={"Services"}>
            <Select onChange={(e)=>this.onChangeHandler(e,"services")} placeholder="Select search option">
              {Object.keys(this.props.config["services"]).map((el, i) => (
                <Option id={i} value={el}>
                  <div className="text-truncate">{el}</div>
                </Option>
              ))}
            </Select>
          </SettingSection>
          <SettingSection title={"Options"}>
            {/* <SettingRow label={<FormattedMessage id="idWidgetTable" defaultMessage={"Id Widget table"}/>}>
              <input 
                defaultValue={this.props.config.idWidgetTable} 
                onChange={(e) => this.saveState('idWidgetTable',"idWidgetTable",e.target.value)}
              />
            </SettingRow> */}
            {
                this.state.showInputs && this.state.categoryType ?
                Object.keys(this.props.config[this.state.categoryType]).map((val,i)=>{
                  if (this.state.inputsType === val){
                    const item = this.props.config[this.state.categoryType][val];
                    let currentItem = item;
                    let keys;
                    if (typeof currentItem === "object"){
                      keys = Object.keys(currentItem);
                    }
                    if (Array.isArray(keys)){
                      return(
                        keys.map((key,j)=>(
                          <SettingRow label={<FormattedMessage id = {key} defaultMessage = {key}/>} key = {`${j}`+{key}}>
                            <input 
                              defaultValue={currentItem[key]} 
                              onChange = {(e)=>this.saveState(val,key,e.target.value)}
                            />
                          </SettingRow>
                        ))
                      )
                    }
                    return (
                      <SettingRow label={<FormattedMessage id = {val} defaultMessage = {val}/>}>
                        <input 
                          defaultValue={currentItem} 
                          onChange = {(e)=>this.saveState(val,val,e.target.value)}
                        />
                    </SettingRow>
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

