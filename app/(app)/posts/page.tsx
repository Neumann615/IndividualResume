import {Separator} from '@/components/base/Separator'
import {cn} from '@/utils'
import {allPosts, type Post} from '@/.contentlayer/generated'
import dayjs from 'dayjs'
import Link from 'next/link'
import {Tag} from '@/components/base/Tag'
import {Container} from '@/components/Container'


function PostCard({post, showCover}: { post: Post; showCover?: boolean }) {
    return (
        <Link
            href={`/posts/${post.slug}`}
            className={cn(
                'text-violet-500 relative dark:text-violet-400',
                showCover ? 'hover:drop-shadow-2xl' : ' hover:text-violet-700'
            )}
        >
            <div className="px-4 py-4 rounded-sm border-b-[1px] border-violet-200 sm:border-none  cursor-pointer">
                <h2 className="mb-1 text-xl font-medium">
                    <span>{post.title}</span>
                </h2>
                <div className="hidden sm:flex flex-wrap mt-2 justify-start  items-center space-x-4 text-sm">
                    <time dateTime={post.date} className=" block text-xs text-gray-600">
                        {dayjs(post.date).format('YYYY-MM-DD')}
                    </time>
                    <Separator orientation="vertical" className="h-5"/>
                    {post.tags.map((tag) => (
                        <Tag size={'small'} key={tag} text={tag} color={'purple'}></Tag>
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
        .slice(0, allPosts.length - 1);
    return <Container>
        <div className={"text-center mb-12"}>
            <div className={"text-4xl font-bold tracking-wide mb-4"}>博客</div>
            <div className={"text-2xl text-slate-400 tracking-widest mb-4"}>
                🐛兴趣爱好和技术分享🔧
            </div>
        </div>
        <div>
            <div className={cn('grid grid-cols-1 gap-4', false ? 'grid-cols-2' : '')}>
                {sortedPosts.map((post, idx) => (
                    <PostCard showCover={false} key={idx} post={post}/>
                ))}
            </div>
        </div>
    </Container>
}