import { AddUserIcon } from '../../../assets/AddUserIcon'
import { ClientBadge } from '../../components/ClientBadge'
import { Searcher } from '../../components/Searcher'
import { TagFilter } from '../../components/TagFilter'

export function Clients () {
  return (
    <>
      <section className="flex w-full h-fit justify-left gap-4 items-center flex-wrap">
        <h2 className="font-bold text-2xl mb-4">Clients</h2>

        <Searcher placeholder="Search clients..."/>

        <TagFilter type='client' text='All'/>
        <TagFilter type='client' text='Active'/>
        <TagFilter type='client' text='Inactive'/>
        <TagFilter type='client' text='OnHold'/>

        <div className="w-full flex justify-left items-center gap-4">
          <p className='font-bold text-lg'>All Clients</p>
          <p className='font-bold text-lg'>•</p>
          <data className='font-normal text-muted-foreground text-lg' value="3">3 total</data>

          <div className='shadow-md w-10 h-10 ml-auto bg-primary rounded-full text-primary-foreground p-1 cursor-pointer hover:scale-105 active:scale-95 active:rotate-z-12 transition-transform'>
            <AddUserIcon className='w-full h-full'/>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-start items-center gap-6 w-full min-h-fit p-4 rounded-2xl bg-background text-foreground">
        <ClientBadge state='Active'/>
        <ClientBadge state='Inactive'/>
        <ClientBadge state='OnHold'/>
      </section>
    </>
  )
}