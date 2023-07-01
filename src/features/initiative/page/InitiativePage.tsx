import Checkbox from 'src/components/Checkbox'
import { ParchmentButton } from 'src/components/ParchmentButton'
import { useAppDispatch, useAppSelector } from 'src/store/store.hooks'
import {
  InitiativeCard,
  drawNewInitiative,
  selectInitiative,
  toggleHasGone,
} from '../initiative.slice'
import { useRef } from 'react'
import { AriaButtonProps, useButton } from 'react-aria'
import { selectTranslateFunction } from 'src/store/translations/translation.slice'

const InitiativePage = () => {
  const { cards } = useAppSelector(selectInitiative)
  const dispatch = useAppDispatch()
  const t = useAppSelector(selectTranslateFunction(['initiative']))

  return (
    <div>
      <ParchmentButton onPress={() => dispatch(drawNewInitiative())}>
        {t('initiative:drawNewInitiative')}
      </ParchmentButton>
      <div className="mt-8 grid grid-cols-1 gap-1 lg:grid-cols-5">
        {cards.map((card) => (
          <InitiativeCardButton
            key={card.id}
            card={card}
            onPress={() => dispatch(toggleHasGone({ id: card.id }))}
          />
        ))}
      </div>
    </div>
  )
}

export default InitiativePage

type InitiativeCardProps = AriaButtonProps & {
  card: InitiativeCard
}

const InitiativeCardButton = (props: InitiativeCardProps) => {
  const ref = useRef(null)
  const { buttonProps } = useButton(props, ref)
  const { card } = props
  const t = useAppSelector(selectTranslateFunction(['initiative']))

  return (
    <button ref={ref} {...buttonProps}>
      <div
        className={`
              grid max-w-xs grid-cols-2 place-items-center
              gap-4 rounded-lg
            border border-stone-300  p-2
            shadow transition-colors hover:bg-stone-100
            lg:aspect-2/3 lg:grid-cols-1
            ${card.hasGone ? 'bg-stone-200' : 'bg-white'}
            `}
      >
        <div className="text-xl md:text-2xl lg:text-3xl">{card.value}</div>
        <Checkbox isSelected={card.hasGone}>{t('initiative:done')}</Checkbox>
      </div>
    </button>
  )
}
