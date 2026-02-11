import type { HTMLAttributes } from 'react'
import { Trend } from '../shared/schemes/Trend'

export function TrendIcon({ trend = Trend.Up , className, ...props }: HTMLAttributes<SVGSVGElement> & {trend?: Trend}) {
  return (
    <>
      {trend === Trend.Up &&
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon icon-tabler icons-tabler-outline icon-tabler-trending-up ${className}`} {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 17l6 -6l4 4l8 -8" />
        <path d="M14 7l7 0l0 7" />
      </svg>}

      {trend === Trend.Down &&
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon icon-tabler icons-tabler-outline icon-tabler-trending-down ${className}`} {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 7l6 6l4 -4l8 8" />
        <path d="M21 10l0 7l-7 0" />
      </svg>}

      {trend === Trend.Equal &&
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon icon-tabler icons-tabler-outline icon-tabler-equal ${className}`} {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 10h14" />
        <path d="M5 14h14" />
      </svg>}
    </>
  )
}