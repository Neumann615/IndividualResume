/* eslint-disable @next/next/no-img-element */
"use client"
import { Container } from "@/components/Container"
import { config } from "@/config"
import { openUrl } from "@/utils"
import { Github, Home } from "lucide-react"
import { useState } from "react"

// export const metadata: Metadata = {
//     title: "w",
//     description: "记录学习笔记、技术文档以及一些生活日常",
// }

export default function Link() {
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <Container className={"lg:max-w-[1280px] w-auto"}>
      <div
        className={
          "text-center mb-12 animate-in slide-in-from-left duration-1000"
        }
      >
        <div className={"text-4xl font-bold tracking-wide mb-4"}>链接</div>
        <div className={"text-2xl text-slate-400 tracking-widest mb-4"}>
          ⛓️‍💥工作中积累的好用的库或工具的链接地址🔗
        </div>
      </div>
      <div
        className={
          "animate-in fade-in zoom-in duration-1000 flex items-start gap-4 h-auto"
        }
      >
        <div className="w-[200px] hidden xl:block">
          {config.linkData.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => {
                  setCurrentIndex(index)
                }}
                className={
                  "text-center p-3 mb-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg cursor-pointer"
                }
              >
                {item.label}
              </div>
            )
          })}
        </div>
        <div className="flex-1 grid gap-2 grid-cols-2 sm:grid-cols-3  sm:gap-3  md:grid-cols-4 md:gap-4 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-4">
          {config.linkData[currentIndex].lists.map((item) => {
            return (
              <div
                onClick={() => {
                  openUrl(item.home)
                }}
                key={item.id}
                className={
                  "w-100%  cursor-pointer px-4 pt-5 pb-3 bg-zinc-100 dark:bg-zinc-900  rounded-lg  overflow-hidden"
                }
              >
                <div className="flex items-center justify-center mb-3">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-10 h-10"
                  ></img>
                </div>
                <div className="text-center mb-1 text-xl font-bold  truncate">
                  {item.name}
                </div>
                <div className="text-center mb-2 h-[2.5rem] text-xs text-ellipsis line-clamp-2 text-zinc-400">
                  {item.desc}
                </div>
                <div className="flex justify-between">
                  {item.home?.length ? (
                    <Home className="text-zinc-500"></Home>
                  ) : null}
                  {item.contribute?.length ? (
                    <Github
                      onClick={() => {
                        openUrl(item.contribute)
                      }}
                      className="text-zinc-500"
                    ></Github>
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}
