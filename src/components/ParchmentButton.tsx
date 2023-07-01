import { CheckIcon } from '@heroicons/react/20/solid'
import { ComponentProps, useRef } from 'react'
import { AriaButtonProps, useButton } from 'react-aria'

export type ParchmentButtonProps = AriaButtonProps &
  ComponentProps<'button'> & {
    small?: boolean
    buttonType?:
      | 'secondary'
      | 'primary'
      | 'danger'
      | 'ghost'
      | 'ghost-secondary'
      | 'link'
      | 'sourceRavland'
      | 'sourceBitterReach'
    forwardedRef?: React.Ref<HTMLButtonElement>
    fullWidth?: boolean
  }

export const ParchmentButton = (props: ParchmentButtonProps) => {
  const ref = useRef(null)
  const { buttonProps } = useButton(props, ref)
  const { children, buttonType = 'primary', small, isDisabled } = props

  return (
    <button
      ref={ref}
      {...buttonProps}
      className={`
        group min-w-fit
        ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}
        ${props.fullWidth ? 'w-full' : 'w-fit'}
        z-0

          rounded-lg border transition-colors focus:outline-none
          focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2
          ${buttonType === 'link' ? '' : 'shadow'}
          ${
            isDisabled && buttonType !== 'ghost'
              ? 'border-stone-500 bg-stone-500'
              : ''
          }
          ${
            isDisabled && buttonType === 'ghost'
              ? 'border-stone-200 bg-stone-200 text-stone-500'
              : ''
          }
          ${
            !isDisabled
              ? {
                  primary:
                    'border-emerald-500 bg-emerald-500 hover:border-emerald-700  hover:bg-emerald-700',
                  secondary:
                    'border-stone-500 bg-stone-500 hover:border-amber-700 hover:bg-amber-900',
                  ghost:
                    'border-stone-500 bg-transparent text-stone-500 hover:border-amber-900 hover:bg-amber-100',
                  'ghost-secondary':
                    'border-stone-500 bg-transparent text-stone-500 hover:border-amber-900 hover:bg-amber-100',
                  link: 'border-transparent bg-transparent text-stone-500 hover:border-amber-900 ',
                  danger:
                    'border-rose-800 bg-rose-600 hover:border-rose-800 hover:bg-rose-800',
                  sourceRavland:
                    'source-bg source-bg-ravland border-emerald-800 hover:border-emerald-800 hover:text-white',
                  sourceBitterReach:
                    'source-bg source-bg-bitterreach border-sky-500 hover:border-sky-700 hover:text-white',
                }[buttonType] ?? ''
              : ''
          }
          z-10 col-start-1 col-end-2 row-start-1 row-end-2
          flex items-center gap-2 font-medium transition-colors
        ${small ? 'px-3 py-1' : 'px-4 py-2'}
        ${isDisabled ? 'text-gray-600' : ''}
        ${
          !isDisabled &&
          {
            primary: 'text-white',
            secondary: 'text-white',
            danger: 'text-white',
            sourceRavland: 'source-text text-emerald-800 hover:text-white',
            sourceBitterReach: 'source-text text-sky-800 hover:text-white',
            ghost: 'text-amber-900',
            link: 'text-amber-900',
            'ghost-secondary': '',
          }[buttonType]
        }
        `}
    >
      {children}
    </button>
  )
}

export type ParchmentToggleButtonProps = ParchmentButtonProps & {
  active: boolean
}
export const ParchmentToggleButton = (props: ParchmentToggleButtonProps) => {
  return (
    <ParchmentButton
      {...props}
      buttonType={props.active ? 'primary' : 'ghost'}
      type="button"
      role="switch"
      aria-checked={props.active}
    >
      {props.active ? (
        <CheckIcon className="aspect-square w-5" />
      ) : (
        <span className="w-5"></span>
      )}
      {props.children}
    </ParchmentButton>
  )
}
