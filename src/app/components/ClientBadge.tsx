import { type ComponentPropsWithRef, type HTMLAttributes } from 'react'
import { ClientState } from '../schemes/ClientState'
import { UserSvg } from '../../assets/UserSvg'
import { ButtonAction } from './ButtonAction'
import { ArrowRightIcon } from '../../assets/ArrowRigthIcon'

const StateStyles: Record<ClientState, string> = {
  [ClientState.OnHold]: 'bg-orange-500/20 text-orange-600',
  [ClientState.Active]: 'bg-green-500/20 text-green-600',
  [ClientState.Inactive]: 'bg-black/20 text-black'
}

interface ClientStateBadgeProps extends HTMLAttributes<HTMLDivElement> {
  state?: keyof typeof ClientState | ClientState
}

interface ClientBadgeProps extends ComponentPropsWithRef<'article'> {
  state?: keyof typeof ClientState | ClientState
}

export function ClientStateBadge ({ state = ClientState.Active, className, ...props }: ClientStateBadgeProps) {
  const styles = StateStyles[state as ClientState]

  return (
    <div className={`bg-black px-3 py-1.5 rounded-xl text-xs font-bold w-fit flex justify-center items-center ${styles} ${className}`} {...props}>
      {state}
    </div>
  )
}

export function ClientBadge ({ state = ClientState.Active, ref,  className, ...props }: ClientBadgeProps) {

  return (
    <article ref={ref} className={`shadow-2xs shrink-0 bg-muted text-foreground p-6 rounded-2xl overflow-hidden flex flex-col justify-center items center gap-10 w-full ${className}`} {...props}>
      <header className="flex justify-left items-center gap-4">
        <UserSvg className='w-10 h-10' /> {/* aquí va el logo de la empresa */}

        <div>
          <h3 className="font-semibold text-lg"><strong>Nombre Empresa</strong></h3>
          <p className='font-medium text-sm text-muted-foreground'> <span>Arturo Alba</span> • <span>example@gmail.com</span> </p>
        </div>

        <ClientStateBadge className='ml-auto' state={state}/>
      </header>

      <div className='h-0.5 w-full bg-muted-foreground rounded-full'/>

      <div className="flex justify-between items-center">
        <div>
          <p className='text-muted-foreground text-sm font-semibold'>PROJECTS</p>
          <data className="font-bold text-xl" value="3">3 Active</data>
        </div>

        <div>
          <p className='text-muted-foreground text-sm font-semibold'>TOTAL BILLED</p>
          <data className="font-bold text-xl" value="12.4">€12.4K</data>
        </div>
      </div>

      <ButtonAction className='w-full flex justify-center items-center gap-4'>View Profile <ArrowRightIcon/></ButtonAction>
    </article>
  )
}