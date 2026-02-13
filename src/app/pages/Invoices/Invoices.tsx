import { InvoiceBadge } from '../../components/InvoiceBadge'

export function Invoices() {
  return (
    <>

      <section className="flex w-full h-fit justify-left gap-4 items-center">
        <h2 className="font-bold text-2xl mb-4">Invoices</h2>

        <label className="shadow-md relative min-w-fit z-0 p-2 w-20 text-center bg-background text-foreground rounded-4xl has-checked:bg-primary has-checked:text-primary-foreground has-focus-visible:ring-2 has-focus-visible:ring-offset-2 has-focus-visible:ring-primary" htmlFor="">All
          <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer " value="all" type="checkbox" />
        </label>

        <label className="shadow-md relative min-w-fit z-0 p-2 w-20 text-center bg-background text-foreground rounded-4xl has-checked:bg-primary has-checked:text-primary-foreground has-focus-visible:ring-2 has-focus-visible:ring-offset-2 has-focus-visible:ring-primary" htmlFor="">Paid
          <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer " value="paid" type="checkbox" />
        </label>

        <label className="shadow-md relative min-w-fit z-0 p-2 w-20 text-center bg-background text-foreground rounded-4xl has-checked:bg-primary has-checked:text-primary-foreground has-focus-visible:ring-2 has-focus-visible:ring-offset-2 has-focus-visible:ring-primary" htmlFor="">Pending
          <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer " value="pending" type="checkbox" />
        </label>

        <label className="shadow-md relative min-w-fit z-0 p-2 w-20 text-center bg-background text-foreground rounded-4xl has-checked:bg-primary has-checked:text-primary-foreground has-focus-visible:ring-2 has-focus-visible:ring-offset-2 has-focus-visible:ring-primary" htmlFor="">Overdue
          <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer " value="overdue" type="checkbox" />
        </label>

      </section>

      <section className="flex flex-col justify-start items-center gap-6 w-full min-h-fit p-4 rounded-2xl bg-background text-foreground">
        <InvoiceBadge/>
        <InvoiceBadge state='Overdue'/>
        <InvoiceBadge state='Paid'/>
      </section>

    </>
  )
}