import { Container } from "@/components/Container"
import { Metadata } from 'next'
import { LinkContent } from "./LinkContent"

export const metadata: Metadata = {
  title: "Z - 链接汇总"
}

export default function Link() {

  return (
    <Container className={"lg:max-w-[1280px] w-auto"}>
      <div
        className={
          "xl:mb-12 mb-4 text-center  animate-in slide-in-from-left duration-1000"
        }
      >
        <div className={"text-3xl font-bold tracking-wide mb-4"}>链接</div>
        <div className={"text-2xl text-slate-400 tracking-widest mb-4"}>
          ‍💥高效工作，常用链接汇总🔗
        </div>
      </div>
      <LinkContent></LinkContent>
    </Container>
  )
}
