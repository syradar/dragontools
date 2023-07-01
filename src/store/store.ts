import { StateFromReducersMapObject, configureStore } from '@reduxjs/toolkit'
import translationSlice from './translations/translation.slice'
import initiativeSlice, {
  localStorageInitiativeState,
} from 'src/features/initiative/initiative.slice'

const rootReducer = {
  translation: translationSlice,
  initiative: initiativeSlice,
}
export type RootState = StateFromReducersMapObject<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

store.subscribe(() => {
  const state = store.getState()

  localStorageInitiativeState.save(state.initiative)
  // localStorageCalendarState.save(state.calendar)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
