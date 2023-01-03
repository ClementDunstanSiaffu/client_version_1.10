/** @jsx jsx */
import { React, jsx } from 'jimu-core'
import { AllWidgetSettingProps } from 'jimu-for-builder'
import { GridLayoutSetting } from 'jimu-layouts/layout-builder'

export default class Setting extends React.PureComponent<AllWidgetSettingProps<{}>> {
  formatMessage = (id: string): string => {
    return this.props.intl.formatMessage({ id })
  }

  render (): JSX.Element {
    const layoutName = Object.keys(this.props.layouts)[0]

    const layouts = this.props.layouts[layoutName]

    return <GridLayoutSetting layouts={layouts} appTheme={this.props.theme2} formatMessage={this.formatMessage} />
  }
}
