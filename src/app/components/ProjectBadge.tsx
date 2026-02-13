import { type ComponentPropsWithRef, type ElementType } from 'react'
import { ProjectState } from '../schemes/ProjectState'
import { UserSvg } from '../../assets/UserSvg'
import { ArrowRightIcon } from '../../assets/ArrowRigthIcon'

const StateStyles: Record<ProjectState, string> = {
  [ProjectState.Completed]: 'bg-green-500/20 text-green-600',
  [ProjectState.Review]: 'bg-orange-500/20 text-orange-600',
  [ProjectState.InProgress]: 'bg-primary/40 text-primary',
  [ProjectState.Started]: 'bg-black/10 text-muted-foreground',
  [ProjectState.Idle]: 'bg-black/80 text-primary-foreground',

}


interface ProjectBadgeProps extends ComponentPropsWithRef<ElementType> {
  state?: keyof typeof ProjectState | ProjectState
}

export function ProjectStateBadge ({ state = ProjectState.Idle , className, ...props }: ProjectBadgeProps) {
  const styles = StateStyles[state as ProjectState]
  
  const textState = state ===  ProjectState.InProgress ? 'In Progress' : state

  return (
    <div className={`px-3 py-1.5 rounded-xl text-xs font-bold w-fit flex justify-center items-center ${styles} ${className}`} {...props}>
      {textState}
    </div>
  )
}

export function ProjectBadge ({ state = ProjectState.Idle, ref,  className, ...props }: ProjectBadgeProps) {
  const styles = StateStyles[state as ProjectState]
  
  return (
    <article ref={ref} className={`shrink-0 bg-muted text-foreground p-4 rounded-2xl overflow-hidden flex flex-col justify-center items center gap-4 w-full ${className}`} {...props}>
      <fieldset className="flex justify-between items-center gap-4">
        <div>
          <p className="leading-4 font-semibold text-xl"><strong>Project name</strong></p>
          <data className="leading-4 text-sm font-light text-muted-foreground" value="client_name">Client name</data>
        </div>


        <ProjectStateBadge state={state}/>
      </fieldset>

      <fieldset>
        <div className='flex justify-between items-center'>
          <span className="text-sm font-semibold text-muted-foreground">PROGRESS</span>
          <data value="15">15%</data>
        </div>

        <div className="relative w-full h-3 rounded-full bg-muted-foreground/20 overflow-hidden" >
          <div className={`w-1/2 h-full rounded-full ${styles}`}></div>
        </div>
      </fieldset>

      <fieldset className="flex justify-between items-center">
        <div className="flex justify-left items-center -space-x-3">
          {/* Aqui se pondrá dinámicamente la gente que trabaje en el projecto */}
          <UserSvg className='bg-black rounded-full'/>
          <UserSvg className='bg-black rounded-full'/>
        </div>

        <ArrowRightIcon className="cursor-pointer hover:scale-105 active:scale-95 transition-transform"/>
      </fieldset>
    </article>
  )
}