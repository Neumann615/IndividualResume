'use client'
import {config} from "@/config"
import {Tag} from "@/components/base/Tag"

export default function project() {
    return <div className={'w-a h-auto'}>
        <div className={'text-center mb-12'}>
            <div className={'text-4xl font-bold tracking-wide mb-4'}>项目</div>
            <div className={'text-2xl text-slate-400 tracking-widest mb-4'}>🏅列举一些我参与过可以展示的项目🥇</div>
        </div>
        <div className={'grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'}>
            {config.projectData.map((item, index) => {
                return <div key={index} onClick={() => {
                    window.open(item.url)
                }} className={'w-92 p-4 cursor-pointer bg-zinc-50 rounded-xl'}>
                    <div className={'mb-6'}>
                        <img className={'w-10 h-10 rounded-full'} src={item.icon}/>
                    </div>
                    <h2 className={'mb-2 text-base font-bold text-zinc-800'}>{item.title}</h2>
                    <div
                        className={'relative z-10 mb-4 text-sm text-zinc-600 dark:text-zinc-400'}>{item.description}</div>
                    <div className={'flex gap-4 mb-6'}>
                        {item.tags.map((item, index) => {
                            return <Tag key={index} text={item.text} color={item.color} size={'small'}></Tag>
                        })}
                    </div>
                    <div
                        className={'text-zinc-300 text-sm'}>
                        {item.url}
                    </div>
                </div>
            })}
        </div>
    </div>
}