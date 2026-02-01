import { UserSvg } from '../../shared/components/UserSvg.tsx'
import type { HTMLProps } from 'react'

export function CommentCard({ className, ...props }: HTMLProps<HTMLElement>) {
  return (
    <figure className={`w-fit min-w-72 h-fit min-h-36 bg-white/5 backdrop-blur-md p-8 rounded-md text-white flex flex-col justify-center items-center gap-4 ${className}`} {...props}>
      <blockquote>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsam natus odio accusantium cumque cum accusamus! Minus autem magnam adipisci culpa est. Quo amet doloremque minus laboriosam cupiditate deserunt quasi.&rdquo;</blockquote>

      <figcaption className="w-full flex justify-start items-start gap-2">
        <UserSvg/>

        <div className="flex flex-col justify-center items-start">
          <cite><em>Arturo Alba García</em></cite>
          <span className="text-muted">Frontent Development</span>
        </div>
      </figcaption>
    </figure>
  )
}