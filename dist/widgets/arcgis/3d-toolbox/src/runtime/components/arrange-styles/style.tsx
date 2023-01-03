import { IMThemeVariables, css, SerializedStyles/*, polished*/ } from 'jimu-core'

export function getStyle (theme: IMThemeVariables): SerializedStyles {
  const surface = theme.surfaces[1]

  return css`
    /* List mode */
    .list-item-container {
      background-color: ${surface.bg};
      border: 1px solid ${surface.border.color};
      overflow: auto;

      .main-list {

      }

      .hide {
        display: none !important;
      }

      .list-item {
        height: 38px;
        min-width: 240px;

        &:hover {
          background-color: ${theme.colors.palette.light[100]};
        }

        .list-item-icon {

        }
        .list-item-name {

        }
      }
    }

    /* Icon mode */
    .icon-item-container {
      background-color: ${surface.bg};
      border: 1px solid ${surface.border.color};

      .icon-item {
        width: 32px;
        height: 32px;
      }
    }
  `
}

export function getPopperStyle (theme: IMThemeVariables): SerializedStyles {
  const surface = theme.surfaces[1]
  return css`
    .popper-header {
      background-color: ${surface.bg};

      .popper-title {
        margin-bottom: 0;
        font-weight: 600;
        font-size: 16px;
      }
    }
    .popper-content {
      width: 290px;
    }
  `
}
