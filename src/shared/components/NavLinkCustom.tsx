import { NavLink, type NavLinkProps } from 'react-router'

export function NavLinkCustom ({ to, className, ...props }: NavLinkProps) {
  return (
    <NavLink to={to} className={className} {...props}></NavLink>
  )
}