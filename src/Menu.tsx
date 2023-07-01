import { nanoid } from 'nanoid'
import { ReactNode, lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { useMediaQuery } from 'usehooks-ts'
import { MenuLink } from './components/MenuLink'

import { useAppSelector } from './store/store.hooks'
import { TranslationKey } from './store/translations/translation.model'
import { selectTranslateFunction } from './store/translations/translation.slice'

const HomePage = lazy(() => import('./features/home/page/HomePage'))
const InitiativePage = lazy(
  () => import('./features/initiative/page/InitiativePage'),
)

type MenuRoute = {
  readonly path: string
  readonly id: string
  readonly label: TranslationKey<'core'>
  readonly element?: ReactNode
  readonly children?: MenuRoute[]
  readonly showInMenu?: boolean
}

export const menuRoutes: MenuRoute[] = [
  {
    path: '',
    label: 'core:menu.home',
    id: nanoid(),
    element: <HomePage />,
  },
  {
    path: 'initiative',
    id: nanoid(),
    label: 'core:menu.initiative',
    element: <InitiativePage />,
  },
]

const createAppRouteRecurisvely = (menuRoutes: MenuRoute[]): RouteObject[] => {
  return menuRoutes.map((route) => {
    if (route.children && route.children.length > 0) {
      const childRoutes = createAppRouteRecurisvely(route.children)

      const children = childRoutes.length === 0 ? undefined : childRoutes
      const element =
        route.element && route.children.every((c) => c.showInMenu === false)
          ? route.element
          : undefined

      return {
        path: route.path,
        children,
        element,
      }
    }

    return {
      path: route.path,
      element: route.element,
    }
  })
}

export const appRoutes: RouteObject[] = createAppRouteRecurisvely(menuRoutes)

type MenuProps = {
  menuRoutes: MenuRoute[]
  close: () => void
}
export const Menu = ({ menuRoutes, close }: MenuProps) => {
  const isLg = useMediaQuery('(min-width: 1024px)')

  return (
    <>
      {menuRoutes
        .filter((mr) => mr.path !== '' || mr.showInMenu !== false)
        .map((route) => {
          return (
            <MenuItem
              key={route.id}
              label={route.label}
              to={route.path}
              indent={0}
              onClick={() => !isLg && close()}
            />
          )
        })}
    </>
  )
}
type MenuItemProps = {
  label: TranslationKey<'core'>
  to: string
  indent: 0 | 1
  onClick: () => void
}
const MenuItem = ({ indent, label, onClick, to }: MenuItemProps) => {
  const t = useAppSelector(selectTranslateFunction(['core']))

  return (
    <MenuLink to={to} indent={indent} onClick={onClick}>
      {t(label)}
    </MenuLink>
  )
}
