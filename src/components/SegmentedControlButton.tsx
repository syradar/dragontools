import { ComponentProps } from 'react'
import { AriaButtonProps } from 'react-aria'
import { ParchmentButton, ParchmentButtonProps } from './ParchmentButton'

type SegmentedControlButtonProps = AriaButtonProps &
  ParchmentButtonProps &
  ComponentProps<'button'> & {
    active?: boolean
  }

export const SegmentedControlButton = ({
  children,
  active,
  ...props
}: SegmentedControlButtonProps) => {
  return (
    <ParchmentButton
      small
      buttonType={active ? 'secondary' : 'link'}
      {...props}
    >
      {children}
    </ParchmentButton>
  )
}
