"use client"
import Outline from "@yaohaixiao/outline.js/outline"
import "@yaohaixiao/outline.js/outline.css"
import { useEffect } from "react"
import "./tocbot.css"

function Tocbot() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let outline: any = null
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    outline = new Outline({
      articleElement: "#article",
      asideElement: "#aside",
      scrollElement: "#z-container",
      position: "sticky",
    })

    return () => {
      if (outline) {
        outline.destroy()
      }
    }
  }, [])

  return <div id="aside"></div>
}

export { Tocbot }

