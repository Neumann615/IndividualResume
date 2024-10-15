"use client"
import {config} from "@/config"
import {usePathname, useRouter} from "next/navigation"
import {ThemeSwitch} from '@/components/Header/ThemeSwitch'
import {createElement} from 'react'
import {cn} from '@/utils'

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
                            cn("cursor-pointer tracking-wide", (pathname === item.path
                                ? "font-bold text-zinc-500"
                                : "font-medium text-zinc-500"))
                        }
                    >
                        <span className={'max-md:hidden text-lg'}> {item.text}</span>
                        <span className={'hidden max-md:block'}>
                        {createElement(item.icon, {
                            className: 'className="w-5 text-zinc-500 cursor-pointer"'
                        })}
                        </span>
                    </div>
                )
            })}
            <ThemeSwitch></ThemeSwitch>
        </div>
    )
}
