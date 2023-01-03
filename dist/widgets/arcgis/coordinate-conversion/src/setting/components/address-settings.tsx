/** @jsx jsx */ // <-- make sure to include the jsx pragma
import { React, jsx, IntlShape, IMThemeVariables, Immutable, UseUtility, SupportedUtilityType, ImmutableArray } from 'jimu-core'
import { NumericInput, Label, Icon, Tooltip, defaultMessages as jimuUIDefaultMessages } from 'jimu-ui'
import { UtilitySelector } from 'jimu-ui/advanced/utility-selector'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import { getAddressSettingsStyle } from '../lib/style'
import defaultMessages from '../translations/default'
import Portal from 'esri/portal/Portal'
import { IMAddressSettings } from '../../config'

const infoIcon = require('jimu-icons/svg/outlined/suggested/info.svg')

interface Props {
  intl: IntlShape
  theme: IMThemeVariables
  portalSelf: Portal
  config: IMAddressSettings
  isRTL: boolean
  onAddressSettingsUpdated: (prop: string | any[], value: string | number | ImmutableArray<UseUtility> | []) => void
}

interface State {
  geocodeLocatorUrl: string
  updateGeocodeLocatorUrl: string
  candidateScoreInput: number
  maxSuggestionsInput: number
  isAlertPopupOpen: boolean
  isInvalidValue: boolean
  utilities: ImmutableArray<UseUtility> | []
  showDefaultGeocodeUrl: boolean
}

export default class AddressSettings extends React.PureComponent<Props, State> {
  private readonly geocodeTextBox = React.createRef<HTMLInputElement>()
  constructor (props) {
    super(props)
    this.geocodeTextBox = React.createRef<HTMLInputElement>()

    let geocodeServiceUrl = 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer'

    let showDefaultGeocodeUrl: boolean = true
    if (this.props.config?.useUtilitiesGeocodeService?.length > 0) {
      showDefaultGeocodeUrl = false
    } else if (this.props.config && this.props.config.geocodeServiceUrl) {
      geocodeServiceUrl = this.props.config.geocodeServiceUrl
    } else if (this.props.portalSelf && this.props.portalSelf.helperServices &&
      this.props.portalSelf.helperServices.geocode &&
      this.props.portalSelf.helperServices.geocode.length > 0 &&
      this.props.portalSelf.helperServices.geocode[0].url) { //Use org's first geocode service if available
      geocodeServiceUrl = this.props.portalSelf.helperServices.geocode[0].url
    }

    let minCandidateScore = 100
    if (this.props.config && this.props.config.minCandidateScore) {
      minCandidateScore = this.props.config.minCandidateScore
    }

    let maxSuggestions = 6
    if (this.props.config?.maxSuggestions || this.props.config?.maxSuggestions === 0) {
      maxSuggestions = this.props.config.maxSuggestions
    }

    this.state = {
      geocodeLocatorUrl: geocodeServiceUrl,
      updateGeocodeLocatorUrl: geocodeServiceUrl,
      candidateScoreInput: minCandidateScore,
      maxSuggestionsInput: maxSuggestions,
      isAlertPopupOpen: false,
      isInvalidValue: false,
      utilities: this.props.config?.useUtilitiesGeocodeService ? this.props.config.useUtilitiesGeocodeService : [],
      showDefaultGeocodeUrl: showDefaultGeocodeUrl
    }
  }

  nls = (id: string) => {
    //for unit testing no need to mock intl we can directly use default en msg
    const messages = Object.assign({}, defaultMessages, jimuUIDefaultMessages)
    if (this.props.intl && this.props.intl.formatMessage) {
      return this.props.intl.formatMessage({ id: id, defaultMessage: messages[id] })
    } else {
      return messages[id]
    }
  }

  componentDidMount = () => {
    //When using geocode service URL from helper services it was not getting updated in config
    //as we were updating service URL only on OK button click
    // so set geocodeServiceUrl from here it will be updated in config
    this.props.onAddressSettingsUpdated('geocodeServiceUrl', this.state.geocodeLocatorUrl)
  }

  onCandidateScoreChange = (value: number | undefined) => {
    this.setState({
      candidateScoreInput: value
    })
    this.props.onAddressSettingsUpdated('minCandidateScore', value)
  }

  onMaxSuggestionsChange = (value: number | undefined) => {
    this.setState({
      maxSuggestionsInput: value
    })
    this.props.onAddressSettingsUpdated('maxSuggestions', value)
  }

  onUtilityChange = (utilities: ImmutableArray<UseUtility>) => {
    let showDefaultGeocodeUrl: boolean = false
    //if no utility selected show and use the default geocode URL
    if (utilities.length < 1) {
      showDefaultGeocodeUrl = true
    }
    this.setState({
      showDefaultGeocodeUrl: showDefaultGeocodeUrl,
      utilities: utilities
    })
    this.props.onAddressSettingsUpdated('useUtilitiesGeocodeService', utilities)
  }

  render () {
    return <div style={{ height: '100%', marginTop: '5px' }}>
      <div css={getAddressSettingsStyle(this.props.theme)}>
        <SettingRow flow='wrap'>
          <UtilitySelector
            useUtilities={Immutable(this.state.utilities ? this.state.utilities : [])}
            onChange={this.onUtilityChange}
            showRemove={true}
            closePopupOnSelect
            type={SupportedUtilityType.GeoCoding}
          />
        </SettingRow>

        {this.state.showDefaultGeocodeUrl &&
          <SettingRow className={'locator-url'}>
            <Label tabIndex={0} aria-label={this.state.geocodeLocatorUrl}>{this.state.geocodeLocatorUrl}</Label>
            <Tooltip role={'tooltip'} tabIndex={0} aria-label={this.nls('defaultGeocodeUrlTooltip')}
              title={this.nls('defaultGeocodeUrlTooltip')} showArrow placement='top'>
              <div className='ml-2 d-inline defGeocode-tooltip'>
                <Icon size={14} icon={infoIcon} />
              </div>
            </Tooltip>
          </SettingRow>
        }

        <SettingRow label={this.nls('minCandidateScore')}>
          <NumericInput aria-label={this.nls('minCandidateScore')} className={'addrSettingNumericInput'}
            size={'sm'} min={0} max={100} defaultValue={this.state.candidateScoreInput}
            onChange={this.onCandidateScoreChange} />
        </SettingRow>

        <SettingRow label={this.nls('maxSuggestions')}>
          <NumericInput aria-label={this.nls('maxSuggestions')} className={'addrSettingNumericInput'}
            size={'sm'} min={0} max={100} defaultValue={this.state.maxSuggestionsInput}
            onChange={this.onMaxSuggestionsChange} />
        </SettingRow>
      </div>
    </div>
  }
}
