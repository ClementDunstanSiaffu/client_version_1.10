/** @jsx jsx */
import { React, jsx, FormattedMessage } from "jimu-core";
import { AllWidgetSettingProps } from "jimu-for-builder";
import {MapWidgetSelector, SettingRow, SettingSection} from "jimu-ui/advanced/setting-components";
import {Button} from "jimu-ui";
import {PlusOutlined} from "jimu-icons/outlined/editor/plus";


export default class Setting extends React.PureComponent<AllWidgetSettingProps<any>, any> {

    state = {
        reload: false
    }
    constructor (props) {
        super(props)

        this.onMapWidgetSelected = this.onMapWidgetSelected.bind(this);
        this.saveState = this.saveState.bind(this);

        this.addNewRow = this.addNewRow.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.setCol2 = this.setCol2.bind(this);
        this.setLink = this.setLink.bind(this);
    }
    onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: useMapWidgetIds
    });
  };

  saveState(key,value){
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(key, value)
    });
  }
    addNewRow(){
        this.props.config.listvalues.push({
            listIds: "",
            link: ""
        });
        this.saveState('listvalues',this.props.config.listvalues);
        this.setState({reload:!this.state.reload});
    }
    removeRow(e,i){
        this.props.config.listvalues.splice(i, 1);
        this.saveState('listvalues',this.props.config.listvalues);
        this.setState({reload:!this.state.reload});
    }

    setName(event,i){
        this.props.config.listvalues[i].name = event.target.value;
        this.saveState('listvalues',this.props.config.listvalues);
    }
    setCol2(event,i){
        this.props.config.listvalues[i].listIds = event.target.value;
        this.saveState('listvalues',this.props.config.listvalues);
    }

    setLink(event,i){
        this.props.config.listvalues[i].link = event.target.value;
        this.saveState('listvalues',this.props.config.listvalues);
    }

    render() {
      let listvalues = [];
      if(this.props.config.listvalues.length){
          for (let i = 0; i < this.props.config.listvalues.length; i++) {
              listvalues.push(
                  <SettingSection title={"Row "+(i+1)}>
                      <SettingRow label={<FormattedMessage id={"col-"+i+"-2"} defaultMessage={"Nome servizio"}/>}>
                          <input defaultValue={this.props.config.listvalues[i].name} onChange={(e) => this.setName(e,i)}/>
                      </SettingRow>
                      <SettingRow label={<FormattedMessage id={"col-"+i+"-2"} defaultMessage={"Set Ids (0,1,2)"}/>}>
                          <input defaultValue={this.props.config.listvalues[i].listIds} onChange={(e) => this.setCol2(e,i)}/>
                      </SettingRow>
                      <SettingRow label={<FormattedMessage id={"col-"+i+"-link"} defaultMessage={"Service's link"}/>}>
                          <input defaultValue={this.props.config.listvalues[i].link} onChange={(e) => this.setLink(e,i)}/>
                      </SettingRow>
                      <div className="w-100">
                          <Button type="danger" onClick={(e) => this.removeRow(e,i)}> Delete row</Button>
                      </div>
                  </SettingSection>
              );
          }
      }
    return (
        <div className="widget-setting-search-advanced">
          <SettingSection title={"Sorgente Mappa"}>
            <MapWidgetSelector useMapWidgetIds={this.props.useMapWidgetIds} onSelect={this.onMapWidgetSelected} />
          </SettingSection>
          <SettingSection title={"Options"}>
            <SettingRow label={<FormattedMessage id="idWidgetTable" defaultMessage={"Id Widget table"}/>}>
              <input defaultValue={this.props.config.idWidgetTable} onChange={(e) => this.saveState('idWidgetTable',e.target.value)}/>
            </SettingRow>
          </SettingSection>
            <SettingSection title={"List value"}>
                <div className="app-root-emotion-cache-ltr-j80zov jimu-widget-setting--row form-group align-items-center row">
                    <span className="w-100 data-remind">Add the service's uri and layerId (0,1,2) </span>
                </div>
                <div className="app-root-emotion-cache-ltr-j80zov jimu-widget-setting--row form-group align-items-center row">
                    <div className="w-100">
                        <Button type="primary" onClick={this.addNewRow}><PlusOutlined/> New row</Button>
                    </div>
                </div>
            </SettingSection>
            {listvalues}
        </div>
    );
  }
}

