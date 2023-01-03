import { IMThemeVariables, css, SerializedStyles/*, polished*/ } from 'jimu-core'

export function getStyle (theme: IMThemeVariables): SerializedStyles {
  const surface = theme.surfaces[1]

  return css`
    /*min-width: 300px;*/
    background-color: ${surface.bg};

    .tool-header {

      .label {
        font-weight: 600;
        font-size: 16px;
      }
    }

    .api-loader {
      position: absolute;
      height: 50%;
      left: 50%;
      z-index: 1;
    }

    .tool-content {
      min-width: 270px;
      min-height: 36px;
      overflow: auto;
      height: calc(100% - 32px);

      .esri-widget__heading {
        display: none;
      }

      .tool-footer {
        margin-top: 4px;

        button {
          border: 1px solid ${theme.colors.palette.primary[500]};
        }
      }
    }
  `
}
