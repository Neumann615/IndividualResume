import {config} from "@/config"

export default function project() {
    return <div className={'w-a h-auto'} style={{border: '1px solid green'}}>
        <div className={'text-center'}>
            <div className={'text-4xl font-bold tracking-wide'}>项目</div>
            <div className={'text-2xl mt-4 text-slate-400 tracking-wider'}>一些我参与过的项目</div>
        </div>
        <div className={'grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3'}>
            {config.projectData.map((item, index) => {
                return <div key={index} className={'w-120 p-4 cursor-pointer'} style={{border: '1px solid green'}}>
                    <div className={'mb-6'}>
                        <img className={'w-10 h-10 rounded-full'} src={item.icon}/>
                    </div>
                    <h2 className={'mb-2 text-base font-bold text-zinc-800'}>{item.title}</h2>
                    <div
                        className={'relative z-10 mb-4 text-sm text-zinc-600 dark:text-zinc-400'}>{item.description}</div>
                    <div className={'flex gap-4'}>
                        {item.tags.map((item, index) => {
                            return <div
                                className={'inline-flex items-center rounded-md px-3 text-sm p-1 font-medium bg-violet-200 text-violet-500 hover:bg-purple-500 hover:text-violet-900 dark:bg-violet-300 dark:text-violet-700'}
                                key={index}>
                                {item.text}
                            </div>
                        })}
                    </div>
                    <div
                        className={'pointer-events-none relative z-40 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:text-violet-600 dark:text-zinc-200 dark:group-hover:text-violet-400'}>
                        {item.url}
                    </div>
                </div>
            })}
        </div>
    </div>
}