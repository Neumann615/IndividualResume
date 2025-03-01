import { allPosts, type Post } from '@/.contentlayer/generated'
import { Container } from '@/components/Container'
import { Separator } from '@/components/Separator'
import { Tag } from '@/components/Tag'
import { cn } from '@/utils'
import dayjs from 'dayjs'
import { Metadata } from 'next'
import Link from 'next/link'


export const metadata: Metadata = {
    title: "Z - 博客文章"
}

function PostCard({ post }: { post: Post; showCover?: boolean }) {
    return (
        <Link
            href={`/posts/${post.slug}`}
            className={cn(
                'relative duration-500',
                'hover:shadow-blue-200/50 dark:hover:shadow-blue-950/50  hover:shadow-lg hover:duration-500'
            )}
        >
            <div className="px-4 py-4 rounded-sm border-b-[1px] border-violet-200 sm:border-none  cursor-pointer">
                <h2 className="mb-1 text-xl  text-black relative dark:text-white font-medium">
                    <span>{post.title}</span>
                </h2>
                <div className="hidden sm:flex flex-wrap mt-2 justify-start  items-center space-x-4 text-sm">
                    <time dateTime={post.date} className=" block text-xs text-gray-600">
                        {dayjs(post.date).format('YYYY-MM-DD')}
                    </time>
                    <Separator orientation="vertical" className="h-5" />
                    {post.tags.map((tag) => (
                        <Tag key={tag} text={tag}></Tag>
                    ))}
                </div>
            </div>
        </Link>
    );
}

export default function Posts() {
    const sortedPosts = allPosts
        .sort((a, b) => {
            // 按照日期降序排序
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        })
    return <Container className={'max-w-[660px] w-auto'}>
        <div className={"text-center mb-4 animate-in slide-in-from-left duration-1000"}>
            <div className={"text-3xl font-bold tracking-wide mb-4"}>博客</div>
            <div className={"text-2xl text-slate-400 tracking-widest mb-4"}>
                🐛兴趣爱好和心得体会❤
            </div>
        </div>
        <div className={'animate-in fade-in zoom-in duration-1000'}>
            <div className={cn('grid grid-cols-1 gap-4', false ? 'grid-cols-2' : '')}>
                {sortedPosts.map((post, idx) => (
                    <PostCard showCover={false} key={idx} post={post} />
                ))}
            </div>
        </div>
    </Container>
}