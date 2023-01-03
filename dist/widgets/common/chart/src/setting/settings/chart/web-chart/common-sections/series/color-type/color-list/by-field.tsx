/**@jsx jsx */
import { React, jsx, css, ImmutableObject, Immutable, ImmutableArray } from 'jimu-core'
import { ColorsSelector } from './colors-selector'
import { applyPieSlicesColors } from '../utils'
import { ColorItem } from './color-item'
import { WebChartPieChartSlice } from 'jimu-ui/advanced/chart'

export interface ByFieldColorListProps {
  value: ImmutableArray<WebChartPieChartSlice>
  onChange?: (value: ImmutableArray<WebChartPieChartSlice>) => void
  onColorsChange: (colors: string[]) => void
}

const defaultValue = Immutable([]) as ImmutableArray<WebChartPieChartSlice>

const style = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--dark-800);
  > .color-list {
    width: 100%;
    flex-grow: 1;
    overflow-y: auto;
  }
  > .footer {
    height: 43px;
    width: 100%;
    border-top: 1px solid #6a6a6a;
    > div {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }
`

export const ByFieldColorList = (props: ByFieldColorListProps): React.ReactElement => {
  const { value: propValue = defaultValue, onChange, onColorsChange } = props

  const handleChange = (index: number, slice: ImmutableObject<WebChartPieChartSlice>) => {
    const slices = Immutable.set(propValue, index, slice)
    onChange?.(slices)
  }

  const handleColorsChange = (colors: string[]) => {
    onColorsChange?.(colors)
    const slices = applyPieSlicesColors(propValue, colors)
    onChange?.(slices)
  }

  return (
    <div className='color-match w-100' css={style}>
      <div className='color-list px-3'>
        {propValue.map((slice, index) => {
          return (
            <ColorItem
              key={index}
              deletable={false}
              className='mb-2'
              value={slice}
              onChange={(val) => handleChange(index, val)}
            />
          )
        })}
      </div>
      <div className='footer'>
        <div className='px-3'>
          <ColorsSelector
            className='my-2 w-100'
            onChange={handleColorsChange}
          />
        </div>
      </div>
    </div>
  )
}
