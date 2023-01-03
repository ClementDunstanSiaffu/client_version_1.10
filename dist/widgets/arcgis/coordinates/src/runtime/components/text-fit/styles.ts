import { css, SerializedStyles } from 'jimu-core'

export function getStyles (): SerializedStyles {
  return css`
    width: 100%;
    height: 100%;
    font-size: 20px;
    overflow: hidden;
    .text {
      display: inline-block;
      white-space: nowrap;
      transform-origin: left top;
    }
  `
}
