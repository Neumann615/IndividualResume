"use client"
import React, {useEffect, useRef, useState} from "react"
import "@/index.css"


export function GlobalLoading(props: {
    loadingFinished: () => void
}) {
    const loadingVideoRef = useRef<HTMLVideoElement | null>(null)
    const [isReady, setIsReady] = useState<boolean>(false)

    useEffect(() => {
        if (loadingVideoRef.current) {
            loadingVideoRef.current.addEventListener('ended', () => {
                setTimeout(props.loadingFinished, 0)
            })
        }
    }, [isReady])

    useEffect(() => {
        setTimeout(() => {
            setIsReady(true)
        }, 2000)
    }, [])
    return (
        <div
            className={
                "z-[999] absolute bottom-0 left-0 right-0 top-0 w-full h-full select-none bg-black animate-out fade-out duration-500"
            }
        >
            {isReady ? <video
                ref={loadingVideoRef}
                className="mix-blend-screen w-full h-full object-cover"
                src="/video/loader_end.mp4"
                autoPlay muted playsInline></video> : <video
                className="mix-blend-screen opacity-60 w-full h-full object-cover"
                src="/video/loader.mov"
                autoPlay loop muted playsInline></video>}
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