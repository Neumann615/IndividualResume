import { Container } from '@/components/Container'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: "Z",
    description: "记录学习笔记、技术文档以及一些生活日常",
}
export default function Home() {
    return <Container className={'max-w-[700px] w-auto'}>
        <div className={'animate-in fade-in duration-1000 mt-6'}>
            <h1 className={'text-5xl font-bold'}>Z & pupu</h1>
        </div>
        <article className={'animate-in fade-in duration-1000  mt-4'}>
            <div className={'m-auto prose tracking-wider '}>
                <p className={'text-zinc-600 m-0 mb-4 text-2xl leading-[1.5]'}>你好我是
                    <span className={'font-bold mx-1 text-purple-500 dark:text-purple-600'}>Z</span>
                    ,和小猫<span className={'font-bold mx-1 text-blue-500 dark:text-blue-600'}>噗噗</span>生活在一起，平时有空会写点东西
                </p>
            </div>
        </article>
        <div className='flex justify-between'>
            <img className='w-[50%]' src="/image/blue-lock/kaiser/2.jpeg"></img>
            <img className='w-[50%]'  src="/image/blue-lock/kaiser/3.jpeg"></img>
        </div>
    </Container>
}
