import { IMThemeVariables, css, SerializedStyles, polished } from 'jimu-core'

export function getPanelStyle (theme: IMThemeVariables): SerializedStyles {
  return css`
    .system-config-panel {
      .wkid-link {
        cursor: pointer;
        color: ${theme.colors.palette.primary[700]};
        padding: 3px 2px;
        font-size: ${polished.rem(12)};
        text-decoration: none;
        &:hover {
          color: ${theme.colors.palette.primary[800]};
        }
      }
      .system-name {
        font-style: italic;
        font-size: 12px;
        color: ${theme.colors.palette.dark[500]};
        margin-top: 5px;
        .invalid-tips {
          width: calc(100% - 20px);
          margin: 0 4px;
          color: ${theme.colors.danger}
        }
      }
    }
  `
}

export function getSettingStyle (theme: IMThemeVariables): SerializedStyles {
  return css`
    .empty-placeholder {
      display: flex;
      flex-flow: column;
      justify-content: center;
      height: calc(100% - 255px);
      overflow: hidden;
      .empty-placeholder-inner {
        padding: 0px 20px;
        flex-direction: column;
        align-items: center;
        display: flex;
        .empty-placeholder-text {
          color: ${theme.colors.palette.dark[500]};
          font-size: ${polished.rem(14)};
          margin-top: 16px;
          text-align: center;
        }
        .empty-placeholder-icon {
          color: ${theme.colors.palette.dark[200]};
        }
      }
    }
    .arrange-style-container {
      .arrange_container {
        margin-top: 10px;
        display: flex;
        .jimu-btn {
          padding: 0;
          background: ${theme.colors.palette.light[200]};
          &.active {
            border: 2px solid ${theme.colors.palette.primary[600]};
          }
        }
      }
    }
  `
}
