import { ProjectBadge } from '../../components/ProjectBadge'
import { Searcher } from '../../components/Searcher'
import { TagFilter } from '../../components/TagFilter'

export function Projects() {
  return (
    <>
      <section className="flex w-full h-fit justify-left gap-4 items-center flex-wrap">
        <h2 className="font-bold text-2xl mb-4">My Projects</h2>

        <Searcher placeholder="Search projects..."/>

        <TagFilter type='projects' text='All'/>
        <TagFilter type='projects' text='Review'/>
        <TagFilter type='projects' text='InProgress'/>
        <TagFilter type='projects' text='Started'/>
        <TagFilter type='projects' text='Idle'/>
        <TagFilter type='projects' text='Completed'/>

      </section>

      <section className="flex flex-col justify-start items-center gap-6 w-full min-h-fit p-4 rounded-2xl bg-background text-foreground">
        <ProjectBadge state='Idle'/>
        <ProjectBadge state='Review'/>
        <ProjectBadge state='Completed'/>
        <ProjectBadge state='InProgress'/>
        <ProjectBadge state='Started'/>
      </section>
    </>
  )
}