import { IMThemeVariables, css, SerializedStyles } from 'jimu-core'
import { WidgetRect } from '../config'

export function getStyle (theme: IMThemeVariables, isClassic: boolean, widgetRect: WidgetRect): SerializedStyles {
  return css`
    flex-direction: row;
    align-items: center;
    min-width: 160px;
    width: ${widgetRect.width};
    height: ${widgetRect.height};
    display: flex;
    .coordinates-widget-container {
      height: 28px;
      width: 100%;
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.palette.light[400]};
      .coordinates-locate {
        border-radius: unset;
      }
      .coordinates-card {
        border: none;
        min-width: ${isClassic ? '160px' : '240px'};
        min-height: ${isClassic ? '26px' : '138px'};
        background-color: ${theme.colors.white};
        .widget-card-content {
          height: calc(100% - 40px);
          padding: 16px;
          .info-container {
            height: 100%;
            .textfit-container {
              width: 48%;
              margin-right: 2%;
              height: 100%;
              float: left;
            }
            .coordinates-computing {
              font-size:14px;
            }
            .coordinates-card-text-geo,
            .coordinates-card-text-empty,
            .coordinates-card-text {
              height: calc(100% - 18px);
              width: 100%;
            }
            .coordinates-card-text-geo {
              height: 100%;
            }
            .coordinates-card-text-empty {
              display: flex;
              align-items: center;
            }
            .info-unit {
              font-weight: 500;
              font-size: 12px;
              line-height: 16px;
            }
          }
        }
        .widget-card-footer {
          padding: 2px 10px;
          height: 32px;
          background-color: unset !important;
        }
      }
      .coordinates-info {
        padding: 0 4px;
        border: 1px solid ${theme.colors.palette.light[400]};
        border-top: none;
        border-bottom: none;
        color: ${theme.colors.palette.dark[800]};
        line-height: 26px;
        flex-grow: 2;
      }
      .copy-btn {
        cursor: pointer;
        border-right: ${
          isClassic ? `1px solid ${theme.colors.palette.light[400]}` : 'unset'
        };
        border-radius: unset;
      }
      .widget-card-footer {
        margin: 0;
        padding: 10px;
      }
    }
  `
}
