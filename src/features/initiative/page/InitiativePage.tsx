import { useCallback, useRef, useState } from 'react'
import { AriaButtonProps, useButton } from 'react-aria'
import Checkbox from 'src/components/Checkbox'
import { ParchmentButton } from 'src/components/ParchmentButton'
import { useAppDispatch, useAppSelector } from 'src/store/store.hooks'
import { selectTranslateFunction } from 'src/store/translations/translation.slice'
import {
  Combatant,
  addPerson,
  newCombat,
  removePerson,
  removeAll,
  selectInitiative,
  toggleHasGone,
} from '../initiative.slice'
import TextField from 'src/components/TextField'

import { Typography } from 'src/components/Typography'
import { ArrowPathIcon } from '@heroicons/react/20/solid'

const InitiativePage = () => {
  const { combat } = useAppSelector(selectInitiative)
  const dispatch = useAppDispatch()
  const t = useAppSelector(selectTranslateFunction(['initiative']))

  const [newPersonName, setNewPersonName] = useState('')
  const [buttonEffect, setButtonEffect] = useState(false)
  const handleAddPerson = useCallback(() => {
    const trimmedName = newPersonName.trim()
    setNewPersonName(trimmedName)

    if (!trimmedName) {
      return
    }

    dispatch(addPerson({ name: newPersonName }))
    setNewPersonName('')
  }, [dispatch, newPersonName])

  return (
    <div>
      <div className="mb-8 flex gap-2">
        <TextField
          label={t('initiative:newPerson')}
          onChange={setNewPersonName}
          onEnter={handleAddPerson}
          value={newPersonName}
        />

        <ParchmentButton
          className="self-end"
          onPress={() => handleAddPerson()}
          onKeyDown={(e) => console.log(`key down: ${e.key}`)}
        >
          {t('initiative:addPerson')}
        </ParchmentButton>
      </div>

      <div className="mb-4 flex flex-wrap justify-between gap-4">
        <Typography parchment variant="h2">
          {t('initiative:combatants')}
        </Typography>
        <div>
          <ParchmentButton
            buttonType="linkDanger"
            isDisabled={combat.length === 0}
            onPress={() => dispatch(removeAll())}
          >
            {t('initiative:removeAll')}
          </ParchmentButton>
        </div>
      </div>

      {combat.length > 0 ? (
        <ParchmentButton
          onPress={() => {
            dispatch(newCombat())
            setButtonEffect(true)
          }}
        >
          <ArrowPathIcon
            onAnimationEnd={() => setButtonEffect(false)}
            className={`h-5 w-5
    ${buttonEffect ? 'animate-[spin_500ms_ease-in-out_0.5]' : ''}
                `}
          />
          {t('initiative:drawNewInitiative')}
        </ParchmentButton>
      ) : null}

      <div className="mt-8 grid grid-cols-1 gap-0.5">
        {combat.map((card) => (
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
  card: Combatant
}

const InitiativeCardButton = (props: InitiativeCardProps) => {
  const ref = useRef(null)
  const { buttonProps } = useButton(props, ref)
  const { card } = props
  const t = useAppSelector(selectTranslateFunction(['initiative']))
  const dispatch = useAppDispatch()

  return (
    <button ref={ref} {...buttonProps}>
      <div
        className={`flex
 items-center justify-between
              gap-4 rounded-lg
              border p-2 shadow-sm
             transition-colors hover:bg-stone-100

            ${card.hasGone ? 'bg-stone-200' : 'bg-white'}
            `}
      >
        <Checkbox isSelected={card.hasGone}>{card.initiative}</Checkbox>
        <div className="flex-1 text-left">{card.name}</div>
        <ParchmentButton
          small
          buttonType="linkDanger"
          onPress={() => dispatch(removePerson({ id: card.id }))}
        >
          {t('initiative:removePerson')}
        </ParchmentButton>
      </div>
    </button>
  )
}
