"use client"
import {config} from "@/config"
import {usePathname, useRouter} from "next/navigation"

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
                            "cursor-pointer text-zinc-200 tracking-wide " +
                            (pathname === item.path
                                ? "text-xl  font-bold"
                                : "text-lg font-medium")
                        }
                    >
                        {item.text}
                    </div>
                )
            })}
        </div>
    )
}
