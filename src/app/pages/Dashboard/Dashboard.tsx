import { StateCard } from '../../components/StateCard'
import { TypeStateCard } from '../../schemes/TypeStateCard'
import { ProfileIcon } from '../../../assets/ProfileIcon'
import { ButtonAction } from '../../components/ButtonAction'
import { NavLinkCustom } from '../../../shared/components/NavLinkCustom'
import { PathnameApp } from '../../schemes/pathname'
import { ActivityBadge } from '../../components/ActivityBadge'

export function Dashboard () {
  return (
    <>
      <section className="my-5 flex w-full h-fit justify-left gap-4 items-center">
        <div className="relative w-10 h-10 bg-amber-50 rounded-full flex justify-center items-center backdrop-blur-2xl p-2">
          <ProfileIcon/>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full"></div>
        </div>

        <div className='leading-4 flex flex-col gap-0 h-fit'>
          <p><small>Good Morning.</small></p>
          <p><strong>Arturo</strong></p>
        </div>
      </section>

      <section className="flex gap-10">
        <StateCard type={TypeStateCard.Revenue}/>
        <StateCard type={TypeStateCard.ActiveProjects}/>
      </section>

      <section className="flex flex-col w-full justify-center gap-4 items-left">
        <h3 className="font-semibold text-black text-lg">Quick Actions</h3>

        <div className="flex gap-4">
          <ButtonAction as='button'>+ New Invoice</ButtonAction>
          <ButtonAction as='button'>+ Add Client</ButtonAction>
        </div>
      </section>

      <section className="flex flex-col w-full justify-center gap-4 items-left">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-black text-lg">Recent Activity</h3>
          <NavLinkCustom to={`${PathnameApp.Dashboard}/all-activity`}>See all</NavLinkCustom>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <ActivityBadge/>
          <ActivityBadge/>
          <ActivityBadge/>
        </div>
      </section>
    </>
  )
}