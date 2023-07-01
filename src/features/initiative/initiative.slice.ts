import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import { RootState } from '../../store/store'
import { range } from 'src/functions/array.functions'
import { z } from 'zod'
import { createStateStorage } from 'src/store/persist/state-storage'

export const combatantSchema = z.object({
  id: z.string(),
  name: z.string(),
  initiative: z.number(),
  hasGone: z.boolean(),
})

export type Combatant = z.infer<typeof combatantSchema>

const initiativeStateSchema = z.object({
  combat: z.array(combatantSchema),
})

type InitiativeState = z.infer<typeof initiativeStateSchema>

const INITIATIVE_STATE_STORAGE_KEY = 'mapState'
export const localStorageInitiativeState = createStateStorage<InitiativeState>({
  key: INITIATIVE_STATE_STORAGE_KEY,
  label: 'MAP',
  schema: initiativeStateSchema,
})

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length
  let randomIndex: number

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex = currentIndex - 1

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

const shuffledArray = (length: number) =>
  shuffle(range(length).map((_, i) => i + 1))

// Define the initial state using that type
const initialInitiativeState: InitiativeState = {
  combat: [],
}

const initiativeSlice = createSlice({
  name: 'initiative',
  initialState: localStorageInitiativeState
    .load()
    .unwrapOr(initialInitiativeState),
  reducers: {
    addPerson(state, action: PayloadAction<{ name: string }>) {
      state.combat.push({
        id: nanoid(),
        name: action.payload.name,
        initiative: 0,
        hasGone: false,
      })
    },
    removePerson(state, action: PayloadAction<{ id: string }>) {
      state.combat = state.combat.filter(
        (person) => person.id !== action.payload.id,
      )
    },
    removeAll(state) {
      state.combat = []
    },
    newCombat(state) {
      const initiative = shuffledArray(state.combat.length)
      state.combat = state.combat.map((person, i) => ({
        ...person,
        initiative: initiative[i],
        hasGone: false,
      }))
      state.combat.sort((a, b) => b.initiative - a.initiative)
    },

    toggleHasGone(state, action: PayloadAction<{ id: string }>) {
      const card = state.combat.find((card) => card.id === action.payload.id)
      if (card) {
        card.hasGone = !card.hasGone
      }
    },
  },
})

export default initiativeSlice.reducer

export const { addPerson, newCombat, removeAll, removePerson, toggleHasGone } =
  initiativeSlice.actions

export const selectInitiative = (state: RootState) => state.initiative
