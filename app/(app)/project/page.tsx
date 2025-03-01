import { Container } from '@/components/Container'
import { config } from "@/config"
import { Metadata } from 'next'
import { ProjectCard } from './ProjectCard'

export const metadata: Metadata = {
    title: "Z - 项目经历"
}

export default function Project() {
    return (<Container className={'xl:container w-auto '}>
        <div className={"text-center mb-12 animate-in slide-in-from-left duration-1000"}>
            <div className={"text-3xl font-bold tracking-wide mb-4"}>项目</div>
            <div className={"text-2xl text-slate-400 tracking-widest mb-4"}>
                🏅列举一些参与过可以展示的项目🥇
            </div>
        </div>
        <div
            className={"gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4 animate-in fade-in zoom-in duration-1000"}>
            {config.projectData.map((item, index) => {
                return <ProjectCard model={item} key={index}></ProjectCard>
            })}
        </div>
    </Container>
    )
}
