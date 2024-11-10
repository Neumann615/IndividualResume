import {Container} from '@/components/Container'
import {Metadata} from 'next'


export const metadata: Metadata = {
    title: "Z",
    description: "记录学习笔记、技术文档以及一些生活日常",
}
export default function Home() {
    return <Container className={'lg:w-[65ch] md:w-[65ch] w-auto animate-in fade-in duration-1000'}>
        <div className={'slide-in-from-left duration-1000 mb-6'}>
            <h1 className={'text-3xl font-bold'}>Z</h1>
        </div>
        <article className={'fade-in zoom-in duration-1000'}>
            <div className={'m-auto prose'}>
                <p className={'text-zinc-500 m-0 mb-4 text-lg'}>你好，我是
                    <span className={'font-bold mx-1 text-blue-400 dark:text-blue-600'}>Z</span>
                    ，一名前端开发工程师</p>

                <p className={''}>
                    在前端开发这条路上有三年的工作经验，目标是能成为一名前端架构师，带领团队做出优秀的产品，在日常的工作中除开本职工作，其余则是以提升前端同事工作效率、降低工作难度为核心思想来驱动的，在这个问题上我思考了很多，我也将其作为我职业发展道路上非常重要的一个命题在解决，而在博客中也会将这个命题的思考以及目前遇到的一些技术问题和关于人生的思考记录😶在博客上，如果你有兴趣查看希望对你有帮助。
                </p>
                <p className={''}>
                    梦想过上自由自在的数字游民生活，目前在武汉学习和工作，如果你有什么好的想法或者技术问题，十分欢迎与我讨论
                </p>
            </div>
        </article>
    </Container>
}
