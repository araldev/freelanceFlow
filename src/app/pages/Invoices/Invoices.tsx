import { InvoiceBadge } from '../../components/InvoiceBadge'
import { Searcher } from '../../components/Searcher'
import { TagFilter } from '../../components/TagFilter'

export function Invoices() {
  return (
    <>

      <section className="flex w-full h-fit justify-left gap-4 items-center flex-wrap">
        <h2 className="font-bold text-2xl mb-4">Invoices</h2>

        <Searcher placeholder='Search Invoice...'/>
        
        <TagFilter type='invoices' text='All'/>
        <TagFilter type='invoices' text='Paid'/>
        <TagFilter type='invoices' text='Pending'/>
        <TagFilter type='invoices' text='Overdue'/>

      </section>

      <section className="flex flex-col justify-start items-center gap-6 w-full min-h-fit p-4 rounded-2xl bg-background text-foreground">
        <InvoiceBadge/>
        <InvoiceBadge state='Overdue'/>
        <InvoiceBadge state='Paid'/>
      </section>

    </>
  )
}