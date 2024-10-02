"use client"
import {config} from "@/config"
import {usePathname, useRouter} from "next/navigation"
import {ThemeSwitch} from '@/components/Header/ThemeSwitch'

export function Navigation() {
    const router = useRouter()
    const pathname = usePathname()

    return (
        <div className={"flex items-center justify-center gap-8"}>
            {config.menuData.map((item) => {
                return (
                    <div
                        key={item.path}
                        onClick={() => router.push(item.path)}
                        className={
                            "cursor-pointer text-base tracking-wide " +
                            (pathname === item.path
                                ? "font-bold text-zinc-500"
                                : "font-medium text-zinc-500")
                        }
                    >
                        {item.text}
                    </div>
                )
            })}
            <ThemeSwitch></ThemeSwitch>
        </div>
    )
}
