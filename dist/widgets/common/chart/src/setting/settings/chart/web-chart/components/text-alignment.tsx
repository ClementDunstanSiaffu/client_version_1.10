import { classNames, React } from 'jimu-core'
import { hooks, Select } from 'jimu-ui'

type VerticalAlignment = 'baseline' | 'top' | 'middle' | 'bottom'
type HorizontalAlignment = 'left' | 'right' | 'center' | 'justify'

export const TextAlignments = {
  verticalAlignment: ['baseline', 'top', 'middle', 'bottom'],
  horizontalAlignment: ['left', 'right', 'center', 'justify']
}

export const getCorrespondingAlignment = (alignment: string): string => {
  let index = TextAlignments.horizontalAlignment.indexOf(alignment)
  if (index > -1) {
    return TextAlignments.verticalAlignment[index]
  } else {
    index = TextAlignments.verticalAlignment.indexOf(alignment)
    if (index > -1) {
      return TextAlignments.horizontalAlignment[index]
    }
  }
}

interface TextAlignmentProps {
  className?: string
  vertical: boolean
  value: VerticalAlignment | HorizontalAlignment
  onChange: (value: VerticalAlignment | HorizontalAlignment) => void
}

export const TextAlignment = (props: TextAlignmentProps): React.ReactElement => {
  const { className, vertical, value, onChange } = props
  const translate = hooks.useTranslate()
  const alignments = vertical ? TextAlignments.verticalAlignment : TextAlignments.horizontalAlignment

  const handleChange = (evt: React.ChangeEvent<HTMLSelectElement>): void => {
    onChange?.(evt.target.value as any)
  }

  return (<Select
    size='sm'
    className={classNames('text-aligment', className)}
    value={value}
    onChange={handleChange}
  >
    {alignments.map(alignment => (
      <option key={alignment} value={alignment}>
        {translate(alignment)}
      </option>
    ))}
  </Select>)
}
