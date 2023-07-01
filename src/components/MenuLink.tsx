import { FC } from 'react'
import { LinkProps, useLocation, useResolvedPath, Link } from 'react-router-dom'

type MenuLinkProps = LinkProps & {
  indent?: 0 | 1
  onClick?: () => void
}

export const MenuLink: FC<MenuLinkProps> = ({
  to,
  children,
  indent = 0,
  onClick,
}: MenuLinkProps) => {
  const { pathname } = useLocation()
  const { pathname: toPathname } = useResolvedPath(to)

  const isLinkActive = pathname === toPathname

  return (
    <Link
      onClick={onClick}
      className={`w-full rounded-lg font-medium hover:bg-emerald-500 hover:text-emerald-50
      ${isLinkActive ? 'bg-stone-200  hover:bg-emerald-500 ' : ''}
      ${indent === 0 ? 'px-4 py-1' : ''}
      ${indent === 1 ? 'py-1 pl-8 pr-4' : ''}
      `}
      to={to}
    >
      {children}
    </Link>
  )
}
