import type { HTMLAttributes } from 'react'
import { Currency } from '../shared/schemes/Currency'

export function CurrencyIcon({ currency = Currency.Euro, className, ...props }: HTMLAttributes<SVGSVGElement> & {currency?: Currency}) {
  return (
    <>
      {currency === Currency.Euro && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon icon-tabler icons-tabler-outline icon-tabler-currency-euro ${className}`} {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M17.2 7a6 7 0 1 0 0 10" />
        <path d="M13 10h-8m0 4h8" />
      </svg>}

      {currency === Currency.Dolar && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon icon-tabler icons-tabler-outline icon-tabler-currency-dollar ${className}`} {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
        <path d="M12 3v3m0 12v3" />
      </svg>}

      {currency === Currency.Libra && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon icon-tabler icons-tabler-outline icon-tabler-currency-pound ${className}`} {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 18.5a6 6 0 0 1 -5 0a6 6 0 0 0 -5 .5a3 3 0 0 0 2 -2.5v-7.5a4 4 0 0 1 7.45 -2m-2.55 6h-7" /></svg>}
    </>
  )
}