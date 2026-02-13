import { type ComponentPropsWithRef, type ElementType } from 'react'
import { InvoiceState } from '../schemes/InvoiceState'
import { DotsIcon } from '../../assets/DotsIcon'

const StateStyles: Record<InvoiceState, string> = {
  [InvoiceState.Pending]: 'bg-orange-500/20 text-orange-600',
  [InvoiceState.Paid]: 'bg-green-500/20 text-green-600',
  [InvoiceState.Overdue]: 'bg-red-500/20 text-red-600'
}


interface InvoiceBadgeProps extends ComponentPropsWithRef<ElementType> {
  state?: keyof typeof InvoiceState | InvoiceState
}

export function InvoiceStateBadge ({ state = InvoiceState.Pending, className, ...props }: InvoiceBadgeProps) {
  const styles = StateStyles[state as InvoiceState]

  return (
    <div className={`px-3 py-1.5 rounded-xl text-xs font-bold w-fit flex justify-center items-center ${styles} ${className}`} {...props}>
      {state}
    </div>
  )
}

export function InvoiceBadge ({ state = InvoiceState.Pending, ref,  className, ...props }: InvoiceBadgeProps) {
  const date = new Date()

  return (
    <article ref={ref} className={`shrink-0 bg-muted text-foreground p-4 rounded-2xl overflow-hidden flex flex-col justify-center items center gap-4 w-full ${className}`} {...props}>
      <div className="flex justify-left items-center gap-4">
        <data className="text-muted-foreground" value="id_actura">Id Factura</data>

        <InvoiceStateBadge state={state}/>

        <DotsIcon className="ml-auto cursor-pointer hover:scale-105 active:scale-95 transition-transform flex justify-center items-center p-1 w-8 h-8"/>
      </div>

      <p className="font-semibold text-xl"><strong>Nombre Empresa</strong></p>

      <fieldset className="flex justify-between items-center">
        <div className="flex flex-col justify-center items-left">
          <small>Due Date</small>
          <time 
            dateTime={date.toISOString()} 
            className="text-muted-foreground text-xs italic"
          >
            {date.toLocaleTimeString()}
          </time>
        </div>

        <data className="text-xl font-semibold" value="12000">12000€</data>
      </fieldset>
    </article>
  )
}