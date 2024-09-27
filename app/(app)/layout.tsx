import { GlobalBg } from "@/components/GlobalBg"
import { Header } from "@/components/Header"
import { Main } from "@/components/Main"
// 导入 代码 样式
// import '@/style/prism-coldark-dark.css';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={"w-full h-full overflow-y-auto"}>
      <GlobalBg />
      {/* 内容区域盒子 */}
      <Header></Header>
      <Main>{children}</Main>
    </div>
  )
}
