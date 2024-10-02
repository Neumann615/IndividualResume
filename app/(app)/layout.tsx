import {GlobalBg} from "@/components/GlobalBg"
import {Main} from "@/components/Main"
import dynamic from "next/dynamic"
// 导入 代码 样式
const Header = dynamic(() => import("@/components/Header"), {ssr: false})
// import '@/style/prism-coldark-dark.css';
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className={"w-full h-full overflow-y-auto overflow-x-hidden"}>
            <GlobalBg/>
            {/* 内容区域盒子 */}
            <Header></Header>
            <Main>{children}</Main>
        </div>
    )
}
