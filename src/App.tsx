import { Suspense, useCallback, useEffect, useState } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import { useMediaQuery } from 'usehooks-ts'
import './App.css'
import { Menu, appRoutes, menuRoutes } from './Menu'
import { ParchmentButton } from './components/ParchmentButton'
import { LanguageSwitcher } from './components/language-switcher'
import { useAppDispatch, useAppSelector } from './store/store.hooks'
import {
  initTranslations,
  selectTranslateFunction,
} from './store/translations/translation.slice'

const App = () => {
  const routes = useRoutes(appRoutes)

  return (
    <div
      className={`App h-full min-h-screen w-screen max-w-full  bg-stone-100`}
    >
      <div className="flex flex-col lg:min-h-screen lg:flex-row">
        <AppMenu></AppMenu>
        <Suspense fallback={<div>Loading...</div>}>
          <main className="block  max-h-screen w-full overflow-auto p-0">
            <div className="px-2 py-8 lg:px-4">{routes}</div>
          </main>
        </Suspense>
      </div>
    </div>
  )
}

export default App

const AppMenu = () => {
  const dispatch = useAppDispatch()
  const initTranslationSystem = useCallback(
    async () => await dispatch(initTranslations),
    [dispatch],
  )
  useEffect(() => {
    initTranslationSystem()
  }, [initTranslationSystem])

  const t = useAppSelector(selectTranslateFunction(['core']))
  const [isOpen, setIsOpen] = useState(false)
  const isLg = useMediaQuery('(min-width: 1024px)')

  const handleMenuClick = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="flex flex-col gap-4 bg-stone-300 py-4 lg:min-h-screen lg:min-w-[14rem]">
      <div className="flex justify-between gap-2 bg-stone-300 px-2">
        <Link to="/" className="block" onClick={() => !isLg && close()}>
          <div className="yx-heading text-xl font-bold text-stone-500 transition-colors hover:text-emerald-500">
            DragonTools
          </div>
        </Link>
        {!isLg ? (
          <ParchmentButton buttonType="ghost" small onPress={handleMenuClick}>
            {t('core:menu.home')}
          </ParchmentButton>
        ) : null}
      </div>
      {isOpen || isLg ? (
        <div className="flex h-full flex-col justify-between gap-4">
          <div className="flex flex-col gap-2 px-2">
            <Menu close={closeMenu} menuRoutes={menuRoutes} />
          </div>

          <div className="mt-auto flex flex-col items-center gap-4">
            <LanguageSwitcher></LanguageSwitcher>

            <a
              className="mb-4 mt-auto text-center text-emerald-600 hover:underline"
              href="https://github.com/syradar/dragontools/issues/new/choose"
            >
              {t('core:GiveFeedback')}
            </a>
          </div>
        </div>
      ) : null}
    </div>
  )
}
