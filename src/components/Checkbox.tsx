import { ComponentPropsWithoutRef, useRef } from 'react'
import {
  AriaCheckboxProps,
  VisuallyHidden,
  useCheckbox,
  useFocusRing,
} from 'react-aria'
import { useToggleState } from 'react-stately'

type CheckboxProps = AriaCheckboxProps & ComponentPropsWithoutRef<'input'>
const Checkbox = (props: CheckboxProps) => {
  const state = useToggleState(props)
  const ref = useRef(null)
  const { inputProps } = useCheckbox(props, state, ref)
  const { isFocusVisible, focusProps } = useFocusRing()
  const isSelected = state.isSelected && !props.isIndeterminate

  return (
    <label
      className={`flex cursor-pointer items-center rounded-md pr-1 transition-colors hover:bg-stone-100
    ${props.className ?? ''}
    ${props.isDisabled ? 'opacity-50' : ''}
    `}
    >
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <svg width={24} height={24} aria-hidden="true" style={{ marginRight: 4 }}>
        <rect
          x={isSelected ? 4 : 5}
          y={isSelected ? 4 : 5}
          width={isSelected ? 16 : 14}
          height={isSelected ? 16 : 14}
          fill={isSelected ? 'rgb(16 185 129 / 1.0)' : 'none'}
          stroke={isSelected ? 'none' : 'rgb(214 211 209 / 1.0)'}
          strokeWidth={2}
          rx={4}
        />
        {isSelected && (
          <path
            transform="translate(7 7)"
            d={`M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1
            1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712
            6A.999.999 0 0 1 3.788 9z`}
            fill="white"
          />
        )}
        {props.isIndeterminate && (
          <rect
            x={7}
            y={11}
            width={10}
            height={2}
            fill="rgb(214 211 209 / 1.0)"
          />
        )}
        {isFocusVisible && (
          <rect
            x={1}
            y={1}
            width={22}
            height={22}
            fill="none"
            stroke="orange"
            strokeWidth={2}
          />
        )}
      </svg>
      {props.children}
    </label>
  )
}

export default Checkbox
