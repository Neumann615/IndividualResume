"use client"
import { ThemeSwitch } from '@/components/Header/ThemeSwitch'
import { config } from "@/config"
import { cn } from '@/utils'
import { usePathname, useRouter } from "next/navigation"
import { createElement } from 'react'

export function Navigation() {
    const router = useRouter()
    const pathname = usePathname()

    return (
        <div className={"flex items-center justify-center gap-8 max-md:gap-6"}>
            {config.menuData.map((item) => {
                return (
                    <div
                        key={item.path}
                        onClick={() => router.push(item.path)}
                        className={
                            cn("cursor-pointer tracking-wide duration-500", (pathname === item.path
                                ? "font-bold text-zinc-600 scale-125"
                                : "font-medium text-zinc-500"))
                        }
                    >
                        <span className={'max-md:hidden text-lg'}> {item.text}</span>
                        <span className={'hidden max-md:block'}>
                            {createElement(item.icon, {
                                className: cn("cursor-pointer tracking-wide duration-500", (pathname === item.path
                                    ? "text-zinc-700 scale-125"
                                    : "text-zinc-500"))
                            })}
                        </span>
                    </div>
                )
            })}
            <ThemeSwitch></ThemeSwitch>
        </div>
    )
}
