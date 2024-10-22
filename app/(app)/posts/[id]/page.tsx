import { Container } from '@/components/Container'
import { TagIcon } from "@/components/Icon"
import { Tag } from "@/components/Tag"
import { cn } from '@/utils'
import { allPosts, type Post } from 'contentlayer/generated'
import dayjs from 'dayjs'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Tocbot } from './Tocbot'

// const variantStyles = {
//     primary:
//         'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-200 dark:text-black dark:hover:bg-zinc-300 dark:active:bg-zinc-300/70',
//     secondary:
//         'group rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20'
// };

interface TypeParams {
    id: string;
}

// 预渲染动态路由时生成所有可能的参数组合。
export async function generateStaticParams() {
    return allPosts.map((post) => ({
        id: post.slug
    }));
}

export const generateMetadata = ({params}: { params: TypeParams }) => {
    const post = allPosts.find((post) => post.slug === params.id);
    if (!post) throw new Error(`Post not found for id: ${params.id}`);
    return {
        title: post.title,
        description: post.description,
        keywords: post.tags?.join(',')
    };
};

const Page = ({params}: { params: TypeParams }) => {
    let postIndex = 0;
    const post = allPosts.find((post) => {
        postIndex++;
        return post.slug === params.id;
    });
    const sortedPosts = allPosts
        .sort((a, b) => {
            // 按照日期降序排序
            return new Date(b.date).getTime() - new Date(a.date).getTime()
        })
        .slice(0, allPosts.length - 1)
    if (!post) notFound();
    const MDXContent = useMDXComponent(post.body.code)
    // 找到上一个和下一个帖子
    const prevPost = sortedPosts[postIndex - 2];
    const nextPost = sortedPosts[postIndex];
    const computeTitle = (p: Post) => {
        if (p.title.length > 20) {
            return p.title.slice(0, 20) + '...';
        } else {
            return p.title;
        }
    };
    return (
        <Container className={'w-auto'}>
            <div className="w-full flex gap-4 m-auto justify-center">
                <aside
                    className="hidden w-[200px] shrink-0 lg:block animate-in slide-in-from-left fade-in duration-1000">
                    <div className="sticky top-2 pt-16">
                        <Tocbot/>
                    </div>
                </aside>
                <div className="animate-in slide-in-from-right fade-in duration-1000">
                    {/*<Link*/}
                    {/*    href="/posts"*/}
                    {/*    className={cn(*/}
                    {/*        'group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0',*/}
                    {/*        variantStyles.secondary*/}
                    {/*    )}*/}
                    {/*    aria-label="返回博客页面"*/}
                    {/*>*/}
                    {/*    /!*<UTurnLeftIcon*!/*/}
                    {/*    /!*    className="h-8 w-8 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"/>*!/*/}
                    {/*</Link>*/}
                    <article
                        data-postid={post._id}
                        className="rich-text-viewer prose px-4 m-auto"
                    >
                        <div className="mb-8 text-center">
                            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
                            <div
                                className="flex justify-center mb-2 rounded-md items-center space-x-4 text-sm text-gray-600">
                                {dayjs(post.date).format('YYYY-MM-DD')}
                            </div>
                            <div className="flex w-full justify-center gap-2 mb-4">
                                {post.tags.map((tag) => (
                                    <Tag key={tag} color={'sky'} size={'small'}>
                                        {tag}
                                    </Tag>
                                ))}
                            </div>
                            {/* 描述渲染 */}
                            {post.description && (
                                <div className="bg-zinc-100 dark:bg-zinc-800 relative p-4 rounded-xl w-full">
                                    <TagIcon className="absolute right-1.5 bottom-1 text-lg text-zinc-500"/>
                                    <p className="text-gray-700 m-0 dark:text-gray-300 text-left text-sm tracking-wider">
                                        {post.description}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className="js-toc-content">
                            <MDXContent/>
                        </div>
                    </article>
                    {/* 上一个，下一个功能 */}
                    <div className="flex px-4 justify-between mt-8">
                        {/* 上一个 */}
                        {prevPost ? (
                            <Link
                                href={`/posts/${prevPost.slug}`}
                                className={cn(
                                    'inline-flex items-center justify-center rounded-md  px-4 py-2 text-sm  font-medium text-blue-500  dark:text-blue-300 shadow-sm hover:bg-blue-200 dark:hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2'
                                )}
                            >
                                {computeTitle(prevPost)}
                            </Link>
                        ) : (
                            <span className="leading-10 text-zinc-500 dark:text-zinc-200">
									已经是第一个了
								</span>
                        )}

                        {/* 下一个 */}
                        {nextPost ? (
                            <Link
                                href={`/posts/${nextPost.slug}`}
                                className={cn(
                                    'inline-flex items-center justify-center rounded-md  px-4 py-2 text-sm font-medium text-blue-500 dark:text-blue-300 shadow-sm hover:bg-blue-200  dark:hover:bg-blue-500  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2'
                                )}
                            >
                                {computeTitle(nextPost)}
                            </Link>
                        ) : (
                            <span className="leading-10 text-zinc-500 dark:text-zinc-200">
									没有下一个啦
								</span>
                        )}
                    </div>
                    {/* 文章还会出现的地址 */}
                </div>
            </div>
        </Container>
    );
};

export default Page;
