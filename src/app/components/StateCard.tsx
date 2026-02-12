import type { HTMLAttributes } from 'react'
import { CurrencyIcon } from '../../assets/CurrencyIcon'
import { Currency } from '../../shared/schemes/Currency'
import { TypeStateCard } from '../schemes/TypeStateCard'
import { ProjectsIcon } from '../../assets/ProjectsIcon'
import { TrendIcon } from '../../assets/TrendIcon'
import { Trend } from '../../shared/schemes/Trend'

export function StateCard ({ type = TypeStateCard.Revenue, className, ...props }: HTMLAttributes<HTMLElement> & {type?: TypeStateCard}) {
  return (
    <>
      {type === TypeStateCard.Revenue && 
      <article className={`shadow-lg bg-primary text-primary-foreground h-40 w-80 rounded-3xl p-8 flex flex-col gap-3 ${className}`} {...props}>
        <header className="flex justify-between">
          <div className="bg-background/50 rounded-full p-1 text-primary-foreground backdrop-blur-3xl">
            <CurrencyIcon currency={Currency.Euro}/>
          </div>

          <div className="flex gap-1 bg-background/50 rounded-full p-1 text-primary-foreground backdrop-blur-3xl">
            <TrendIcon trend={Trend.Up} />
            <data value="15">+15%</data>
          </div>
        </header>

        <div>
          <p className="font-light text-lg">Total Revenue</p>
          <data className="text-2xl font-bold" value="12000">12000€</data>
        </div>
      </article>}

      {type === TypeStateCard.ActiveProjects && 
      <article className={`shadow-lg bg-primary text-primary-foreground h-40 w-80 rounded-3xl p-8 flex flex-col gap-3 ${className}`} {...props}>
        <header>
          <div className="bg-background/50 rounded-full p-1 text-primary-foreground backdrop-blur-3xl w-fit">
            <ProjectsIcon/>
          </div>
        </header>

        <div>
          <p className="font-light text-lg">Active Projects</p>
          <data className="text-2xl font-bold" value="4">4</data>
        </div>
      </article>}
    </>

  )
}