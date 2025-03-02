import { Container } from '@/components/Container'
import { GitHubIcon, WxIcon } from '@/components/Icon'
import { Metadata } from 'next'
import Link from 'next/link'


export const metadata: Metadata = {
    title: "Z",
    description: "记录学习笔记、技术文档以及一些生活日常",
}
export default function Home() {
    return <Container className={'max-w-[520px] w-auto'}>
        <div className={'animate-in fade-in duration-1000 mt-12'}>
            <h1 className={'text-5xl font-bold'}>Z</h1>
        </div>
        <article className={'animate-in fade-in duration-1000 mt-6'}>
            <div className={'m-auto prose tracking-wider '}>
                <p className={'text-zinc-600 m-0 mb-4  leading-[1.4] '}>你好，我是Z，一名前端开发工程师。</p>
                <p className={'text-zinc-600 m-0 mb-4  leading-[1.4]'}>目前正在努力过上向往的数字游民生活，爱好养猫、睡觉以及读东野圭吾的小说，无聊也喜欢关心关心国家大事，可能这就是人迈向中年的标志吧😑。</p>
                <p className='text-zinc-600 m-0 mb-4  leading-[1.4]'>
                    平时有时间会在这写点东西，欢迎一起讨论交流。
                </p>
            </div>
        </article>
        <div className="flex gap-30 mt-6 text-3xl text-zinc-500 animate-in slide-in-from-bottom duration-1000">
            <div className={'mr-4 cursor-pointer'}>
                <Link href="https://github.com/Neumann615">
                    <GitHubIcon></GitHubIcon>
                </Link>
            </div>
            <div className={'cursor-pointer'}>
                <Link href="/wx-qr-code.jpg">
                    <WxIcon></WxIcon>
                </Link>
            </div>
        </div>
    </Container>
}
