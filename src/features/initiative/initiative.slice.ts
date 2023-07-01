import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import { RootState } from '../../store/store'

export type InitiativeCard = {
  id: string
  value: number
  hasGone: boolean
}

type InitiativeState = {
  cards: InitiativeCard[]
}

const initiativeCards = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].slice()

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

// Define the initial state using that type
const initialInitiativeState: InitiativeState = {
  cards: shuffle(initiativeCards()).map((value) => ({
    id: nanoid(),
    value,
    hasGone: false,
  })),
}

const initiativeSlice = createSlice({
  name: 'initiative',
  initialState: initialInitiativeState,
  reducers: {
    drawNewInitiative(state, _action: PayloadAction) {
      state.cards = shuffle(initiativeCards()).map((value) => ({
        id: nanoid(),
        value,
        hasGone: false,
      }))
    },
    toggleHasGone(state, action: PayloadAction<{ id: string }>) {
      const card = state.cards.find((card) => card.id === action.payload.id)
      if (card) {
        card.hasGone = !card.hasGone
      }
    },
  },
})

export default initiativeSlice.reducer

export const { drawNewInitiative, toggleHasGone } = initiativeSlice.actions

export const selectInitiative = (state: RootState) => state.initiative
