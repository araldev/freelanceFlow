import type { HTMLAttributes } from 'react'
import { CurrencyIcon } from '../../assets/CurrencyIcon'
import { Currency } from '../../shared/schemes/Currency'
import { TypeStateCard } from '../schemes/TypeStateCard'
import { ProjectsIcon } from '../../assets/ProjectsIcon'
import { TrendIcon } from '../../assets/TrendIcon'
import { Trend } from '../../shared/schemes/Trend'

export function StateCard ({ type = TypeStateCard.Revenue, className, ...props }: HTMLAttributes<HTMLElement> & {type?: TypeStateCard}) {
  return (
    <article className={`${className}`} {...props}>

      {type === TypeStateCard.Revenue && 
      <header>
        <div>
          <CurrencyIcon currency={Currency.Euro}/>
        </div>

        <div>
          <TrendIcon trend={Trend.Up} />
        </div>
      </header>}

      {type === TypeStateCard.ActiveProjects && 
      <header>
        <div >
          <ProjectsIcon/>
        </div>

        <div>

        </div>
      </header> }

    </article>
  )
}