import {Container} from '@/components/Container'
import {Tag} from "@/components/Tag"


const data1 = [
    {
        text: "Vue",
    },
    {
        text: "React",

    },
    {
        text: "Nuxt.js",
    },
    {
        text: "Next.js"
    }
]

const data2 = [
    {
        text: "音乐",
    },
    {
        text: "游戏",
    },
    {
        text: "健身",
    }
]

export default function Home() {
    return <Container className={'lg:w-[65ch] w-auto'}>
        <div className={'mb-6 animate-in slide-in-from-left duration-1000'}>
            <h1 className={'text-3xl font-bold'}>Pouf Pouf</h1>
        </div>
        <article className={'animate-in fade-in zoom-in duration-1000'}>
            <div className={'m-auto prose'}>
                <p className={'mb-6 text-zinc-500'}>你好，我是噗噗，一名前端开发工程师</p>
                <div className={'flex items-center mb-3'}>
                    <div className={'mr-4 text-zinc-500 text-base'}>技术</div>
                    <div className={'flex justify-center items-center gap-4'}>
                        {data1.map((item) => {
                            return <Tag key={item.text} size={'small'} color={'gray'}>{item.text}</Tag>
                        })}
                    </div>
                </div>
                <div className={'flex items-center mb-6'}>
                    <div className={'mr-4 text-zinc-500 text-base'}>爱好</div>
                    <div className={'flex justify-center items-center gap-4'}>
                        <div className={'flex justify-center items-center gap-4'}>
                            {data2.map((item) => {
                                return <Tag key={item.text} size={'small'} color={'gray'}>{item.text}</Tag>
                            })}
                        </div>
                    </div>
                </div>
                <p className={''}>
                    在前端开发这条路上有三年的工作经验，目标是能成为一名前端架构师，带领团队做出优秀的产品，在日常的工作中除开本职工作，其余则是以提升前端同事工作效率、降低工作难度为核心思想来驱动的，在这个问题上我思考了很多，我也将其作为我职业发展道路上非常重要的一个命题在解决，而在博客中也会将这个命题的思考以及目前遇到的一些技术问题和关于人生的思考记录😶在博客上，如果你有兴趣查看希望对你有帮助。
                </p>
                <p className={''}>
                    无聊会看看动漫，目前比较喜欢蓝色监狱,因此会将其融合在博客的主题中，我有一只小猫叫噗噗，我很爱她，梦想带她一起过上自由自在的数字游民生活，目前在武汉学习和工作，如果你有什么好的想法或者技术问题，十分欢迎与我讨论
                </p>
            </div>
        </article>
    </Container>
}
