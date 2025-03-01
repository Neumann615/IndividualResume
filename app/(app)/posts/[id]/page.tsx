import { Container } from "@/components/Container"
import { TagIcon } from "@/components/Icon"
import { Tag } from "@/components/Tag"
import { cn } from "@/utils"
import { allPosts, type Post } from "contentlayer/generated"
import dayjs from "dayjs"
import { SquareChevronLeft } from "lucide-react"
import { useMDXComponent } from "next-contentlayer/hooks"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Tocbot } from "./Tocbot"

interface TypeParams {
  id: string
}

// 预渲染动态路由时生成所有可能的参数组合。
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    id: post.slug,
  }))
}

export const generateMetadata = ({ params }: { params: TypeParams }) => {
  const post = allPosts.find((post) => post.slug === params.id)
  if (!post) throw new Error(`Post not found for id: ${params.id}`)
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags?.join(","),
  }
}

const mdxComponents = {}

const Page = ({ params }: { params: TypeParams }) => {
  let postIndex = 0
  const post = allPosts.find((post) => {
    postIndex++
    return post.slug === params.id
  })
  const sortedPosts = allPosts
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .slice(0, allPosts.length - 1)
  if (!post) notFound()
  const MDXContent = useMDXComponent(post.body.code)
  const prevPost = sortedPosts[postIndex - 2]
  const nextPost = sortedPosts[postIndex]
  const computeTitle = (p: Post) => {
    if (p.title.length > 20) {
      return p.title.slice(0, 20) + "..."
    } else {
      return p.title
    }
  }
  return (
    <Container className={"max-w-[1024px] w-auto"}>
      <div className="w-full flex gap-4 m-auto justify-center">
        <aside className="hidden w-[180px] shrink-0 lg:block animate-in slide-in-from-left fade-in duration-1000">
          <div className="sticky top-2 pt-14">
            <div className="mb-2 cursor-pointer flex justify-end text-zinc-800">
              <Link href="/posts" ><SquareChevronLeft size={32} className="text-blue-600"></SquareChevronLeft></Link>
            </div>
            <Tocbot />
          </div>
        </aside>
        <div className="animate-in slide-in-from-right fade-in duration-1000">
          <article
            data-postid={post._id}
            className="rich-text-viewer prose px-4 m-auto"
          >
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-3">{post.title}</h1>
              <div className="flex justify-center mb-3 rounded-md items-center space-x-4 text-sm text-gray-600">
                {dayjs(post.date).format("YYYY-MM-DD")}
              </div>
              <div className="flex w-full justify-center gap-3 mb-4">
                {post.tags.map((tag) => (
                  <Tag key={tag} color={"blue"} size={"medium"}>
                    {tag}
                  </Tag>
                ))}
              </div>
              {/* 描述渲染 */}
              {post.description && (
                <div className="bg-zinc-100 dark:bg-zinc-800 relative p-5 rounded-xl w-full">
                  <TagIcon className="absolute right-2 bottom-2 text-2xl text-zinc-500" />
                  <p className="text-gray-700 m-0 dark:text-gray-300 text-left text-sm tracking-wider">
                    {post.description}
                  </p>
                </div>
              )}
            </div>
            <div className="js-toc-content" id="article">
              <MDXContent components={mdxComponents} />
            </div>
          </article>
          <div className="flex px-4 justify-between mt-8">
            {/* 上一个 */}
            {prevPost ? (
              <Link
                href={`/posts/${prevPost.slug}`}
                className={cn(
                  "inline-flex items-center justify-center rounded-md  px-4 py-2 text-sm  font-medium text-blue-500  dark:text-blue-300 shadow-sm hover:bg-blue-200 dark:hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
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
                  "inline-flex items-center justify-center rounded-md  px-4 py-2 text-sm font-medium text-blue-500 dark:text-blue-300 shadow-sm hover:bg-blue-200  dark:hover:bg-blue-500  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
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
        </div>
      </div>
    </Container>
  )
}

export default Page
