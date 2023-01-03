import { IMThemeVariables, css, SerializedStyles } from 'jimu-core'

export function getStyle (theme: IMThemeVariables): SerializedStyles {
  return css`
    &.hide-msg {
      .message-wrapper {
        display: none;
      }
    }
  `
}
