"use client"
import { useState } from "react"

type DemoType = "loading" | "background"

const demoData = [
  {
    title: "加载",
    type: "loading",
    list: [
      {
        title: "旋转加载",
        description: "纯CSS旋转加载中loading特效",
        url: "/beautiful/assets/纯CSS旋转加载中loading特效/index.html",
      },
    ],
  },
  {
    title: "背景",
    type: "background",
    list: [
      {
        title: "",
        description: "",
        url: "",
      },
    ],
  },
]

function getDemoDataList(type: DemoType) {
  const demoSet: any = {}
  demoData.forEach((item) => {
    demoSet[item.type] = item
  })
  return demoSet[type].list
}

export default function Demo() {
  const [currentType, setCurrenType] = useState("loading")

  return (
    <div className={"w-full h-full"} style={{ border: "1px solid red" }}>
      <div
        className={"w-full p-4 flex items-center justify-center gap-12"}
        style={{ border: "1px solid blue" }}
      >
        {demoData.map((item, index) => {
          return (
            <div
              key={index}
              className={
                "text-xl border-4 border-amber-200 pl-8 pr-8 p-4  rounded-full cursor-pointer"
              }
              onClick={() => {
                setCurrenType(item.type as DemoType)
              }}
            >
              {item.title}
            </div>
          )
        })}
      </div>
      <div className={"grid"}>
        {getDemoDataList(currentType as DemoType).map(
          (item: any, index: number) => {
            return (
              <div key={index} className={"p-4"}>
                <div>{item.title}</div>
                <div>{item.description}</div>
                <div className={"scale-75"}>
                  <iframe
                    width={"100%"}
                    style={{ aspectRatio: 1920 / 1080 }}
                    frameBorder={"none"}
                    src={item.url}
                  ></iframe>
                </div>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}
