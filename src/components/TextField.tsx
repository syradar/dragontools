import { useRef } from 'react'
import type { AriaTextFieldProps } from 'react-aria'
import { useKeyboard, useTextField } from 'react-aria'

type TextFieldProps = AriaTextFieldProps & {
  onEnter?: () => void
}
function TextField(props: TextFieldProps) {
  const { label, onEnter } = props
  const ref = useRef(null)
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref)

  const { keyboardProps } = useKeyboard({
    onKeyDown: (e) => {
      if (e.key === 'Enter' && onEnter) {
        onEnter()
      }
    },
  })

  const allRpop = {
    ...inputProps,
    ...keyboardProps,
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 200 }}>
      <label {...labelProps}>{label}</label>
      <input
        {...allRpop}
        className={`
        rounded-md border border-stone-300 bg-white px-3 py-2
      `}
        ref={ref}
      />
      {props.description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {props.description}
        </div>
      )}
      {props.errorMessage && (
        <div {...errorMessageProps} style={{ color: 'red', fontSize: 12 }}>
          {props.errorMessage}
        </div>
      )}
    </div>
  )
}

export default TextField
