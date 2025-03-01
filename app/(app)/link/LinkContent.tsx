'use client'
import { config } from "@/config"
import { cn, openUrl } from "@/utils"
import { Github, Home } from "lucide-react"
import { useState } from "react"


export function LinkContent() {
    const [currentIndex, setCurrentIndex] = useState(0)
    return <div
        className={
            "animate-in fade-in zoom-in duration-1000 gap-4 h-auto flex flex-col items-start  xl:flex-row"
        }
    >
        <div className="xl:block  flex flex-wrap gap-2">
            {config.linkData.map((item, index) => {
                return (
                    <div
                        key={item.name}
                        onClick={() => {
                            setCurrentIndex(index)
                        }}
                        className={cn(
                            "xl:w-[200px] xl:h-14 xl:text-lg   text-sm h-a p-3 w-a  items-center flex  justify-center  mb-2 rounded-lg cursor-pointer duration-300",
                            currentIndex === index
                                ? "bg-blue-500 text-white dark:bg-blue-800"
                                : "bg-zinc-100 dark:bg-zinc-900 hover:bg-blue-500 hover:text-white  "
                        )}
                    >
                        {item.label}
                    </div>
                )
            })}
        </div>
        <div className="flex-1 grid gap-2 grid-cols-2 sm:grid-cols-3  sm:gap-3  md:grid-cols-4 md:gap-4 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-4">
            {config.linkData[currentIndex].list.map((item) => {
                return (
                    <div
                        onClick={() => {
                            openUrl(item.home)
                        }}
                        key={item.name}
                        className={
                            "w-100%  cursor-pointer px-4 pt-5 pb-3 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 hover:dark:bg-zinc-800   rounded-lg  overflow-hidden animate-in fade-in duration-300"
                        }
                    >
                        <div className="flex items-center justify-center mb-3">
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="h-9 w-auto max-w-22 object-contain"
                            ></img>
                        </div>
                        <div className="text-center mb-2 text-xl font-bold truncate">
                            {item.name}
                        </div>
                        <div className="text-center mb-2 h-[2.5rem] text-xs text-ellipsis line-clamp-2 text-zinc-400">
                            {item.desc}
                        </div>

                        <div className="flex justify-between items-center h-8">
                            {item.home?.length && item.contribute?.length ? (
                                <>
                                    <Home className="text-zinc-500"></Home>
                                    <Github
                                        onClick={() => {
                                            openUrl(item.contribute)
                                        }}
                                        className="text-zinc-500"
                                    ></Github>
                                </>
                            ) : (
                                <div className={"line-clamp-1 text-sm text-zinc-500"}>
                                    {item.home}
                                </div>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
}