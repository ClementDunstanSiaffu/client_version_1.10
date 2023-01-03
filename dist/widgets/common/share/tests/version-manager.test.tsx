import { Immutable } from 'jimu-core'
import { versionManager } from '../src/version-manager'
import { UiMode, ItemsName } from '../src/config'

let upgrader = null

describe('Test allow users to reorder the media list, #6473', () => {
  beforeAll(() => {
    upgrader = versionManager.versions?.filter(function (version) {
      return version.version === '1.10.0'
    })[0]?.upgrader
  })

  // 1. all medias
  it('1.All media-items test', () => {
    const oldConfig = Immutable({
      uiMode: UiMode.Inline,
      popup: {
        icon: '',
        items: ['embed', 'qrcode', 'email', 'facebook', 'twitter', 'pinterest', 'linkedin'],
        tooltip: ''
      },
      inline: {
        items: ['facebook', 'twitter', 'pinterest', 'linkedin', 'embed', 'qrcode', 'email', 'sharelink'],
        design: {
          direction: 'HORIZONTAL',
          hideLabel: false,
          btnRad: 0,
          btnColor: '',
          iconColor: '',
          size: 'default'
        }
      }
    })

    const newConfig = upgrader(oldConfig)

    // popup
    expect(newConfig.popup.items).toStrictEqual([
      { id: ItemsName.Embed, enable: true },
      { id: ItemsName.QRcode, enable: true },
      { id: ItemsName.Email, enable: true },
      { id: ItemsName.Facebook, enable: true },
      { id: ItemsName.Twitter, enable: true },
      { id: ItemsName.Pinterest, enable: true },
      { id: ItemsName.Linkedin, enable: true }
    ])
    // inline
    expect(newConfig.inline.items).toStrictEqual([
      { id: ItemsName.Facebook, enable: true },
      { id: ItemsName.Twitter, enable: true },
      { id: ItemsName.Pinterest, enable: true },
      { id: ItemsName.Linkedin, enable: true },
      { id: ItemsName.Embed, enable: true },
      { id: ItemsName.QRcode, enable: true },
      { id: ItemsName.Email, enable: true },
      { id: ItemsName.Sharelink, enable: true }
    ])
  })

  // 2. part of medias
  it('2. part of media-items test', () => {
    const oldConfig = Immutable({
      uiMode: UiMode.Popup,
      popup: {
        icon: '',
        items: ['embed', /*'qrcode', 'email',*/ 'facebook'/*, 'twitter', 'pinterest', 'linkedin'*/],
        tooltip: ''
      },
      inline: {
        items: [/*'facebook', 'twitter', 'pinterest',*/'linkedin', /*'embed',*/ 'qrcode'/*, 'email', 'sharelink'*/],
        design: {
          direction: 'HORIZONTAL',
          hideLabel: false,
          btnRad: 0,
          btnColor: '',
          iconColor: '',
          size: 'default'
        }
      }
    })

    const newConfig = upgrader(oldConfig)

    // popup
    expect(newConfig.popup.items).toStrictEqual([
      { id: ItemsName.Embed, enable: true },
      { id: ItemsName.QRcode, enable: false },
      { id: ItemsName.Email, enable: false },
      { id: ItemsName.Facebook, enable: true },
      { id: ItemsName.Twitter, enable: false },
      { id: ItemsName.Pinterest, enable: false },
      { id: ItemsName.Linkedin, enable: false }
    ])
    // inline
    expect(newConfig.inline.items).toStrictEqual([
      { id: ItemsName.Facebook, enable: false },
      { id: ItemsName.Twitter, enable: false },
      { id: ItemsName.Pinterest, enable: false },
      { id: ItemsName.Linkedin, enable: true },
      { id: ItemsName.Embed, enable: false },
      { id: ItemsName.QRcode, enable: true },
      { id: ItemsName.Email, enable: false },
      { id: ItemsName.Sharelink, enable: false }
    ])
  })

  // 3. empty medias
  it('3. empty media-items test', () => {
    const oldConfig = Immutable({
      uiMode: UiMode.Popup,
      popup: {
        icon: '',
        items: [/*'embed', 'qrcode', 'email', 'facebook', 'twitter', 'pinterest', 'linkedin'*/],
        tooltip: ''
      },
      inline: {
        items: [/*'facebook', 'twitter', 'pinterest','linkedin', 'embed', 'qrcode', 'email', 'sharelink'*/],
        design: {
          direction: 'HORIZONTAL',
          hideLabel: false,
          btnRad: 0,
          btnColor: '',
          iconColor: '',
          size: 'default'
        }
      }
    })

    const newConfig = upgrader(oldConfig)

    // popup
    expect(newConfig.popup.items).toStrictEqual([
      { id: ItemsName.Embed, enable: false },
      { id: ItemsName.QRcode, enable: false },
      { id: ItemsName.Email, enable: false },
      { id: ItemsName.Facebook, enable: false },
      { id: ItemsName.Twitter, enable: false },
      { id: ItemsName.Pinterest, enable: false },
      { id: ItemsName.Linkedin, enable: false }
    ])
    // inline
    expect(newConfig.inline.items).toStrictEqual([
      { id: ItemsName.Facebook, enable: false },
      { id: ItemsName.Twitter, enable: false },
      { id: ItemsName.Pinterest, enable: false },
      { id: ItemsName.Linkedin, enable: false },
      { id: ItemsName.Embed, enable: false },
      { id: ItemsName.QRcode, enable: false },
      { id: ItemsName.Email, enable: false },
      { id: ItemsName.Sharelink, enable: false }
    ])
  })
})
