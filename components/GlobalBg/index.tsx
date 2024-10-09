"use client"
import React from "react"
import "@/index.css"

export function GlobalBg() {
    //const bgContainer = useRef<HTMLDivElement>(null)
    // const {theme, setTheme} = useTheme()

    return (
       <div
                className={
                    "z-[-999] absolute bottom-0 left-0 right-0 top-0 w-full h-full select-none"
                }
            >
                <div className="w-full h-full relative overflow-hidden">
                    {/*<div className={'absolute left-0 top-0  w-full h-full wxx-container1'}></div>*/}
                    {/*<div className={'absolute left-0 top-0  w-full h-full wxx-container3'}></div>*/}
                    {/*<div className={'absolute left-0 top-0  w-full h-full wxx-container4'}></div>*/}
                    {/*<video style={{display: theme === 'dark' ? 'block' : 'none'}}*/}
                    {/*       className="mix-blend-screen opacity-90 w-full h-full object-cover"*/}
                    {/*       src="/video/loader.mov"*/}
                    {/*       autoPlay loop muted playsInline></video>*/}

                    {/*<Image*/}
                    {/*    src="/image/blue-lock/凯撒/4.jpeg"*/}
                    {/*    className="absolute -left-0"*/}
                    {/*    width={500}*/}
                    {/*    height={500}*/}
                    {/*    alt={""}*/}
                    {/*></Image>*/}
                    {/*<Image*/}
                    {/*    src="/image/blue-lock/凯撒/2.jpeg"*/}
                    {/*    className="absolute left-0 top-0"*/}
                    {/*    width={700}*/}
                    {/*    height={500}*/}
                    {/*    alt={""}*/}
                    {/*></Image>*/}
                    {/*<Image*/}
                    {/*    src="/image/blue-lock/凯撒/1.jpeg"*/}
                    {/*    className="absolute -right-12 rotate-[16deg]"*/}
                    {/*    width={800}*/}
                    {/*    height={400}*/}
                    {/*    alt={""}*/}
                    {/*></Image>*/}
                </div>
            </div>
    )
    // return <div
    //     className={`z-[-1] absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:16px_16px]`}
    // />
    // return <div
    //     className={`z-[-1] absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] ${
    //         theme === 'dark' && mounted // 注意这里增加了 mounted 判断
    //             ? '[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'
    //             : '[mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]'
    //     }`}
    // />
}