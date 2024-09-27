"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function Avatar() {
  const router = useRouter()
  return (
    <div className={"cursor-pointer"} onClick={() => router.push("/")}>
      <Image
        width={44}
        height={44}
        className={"w-12 h-12 rounded-full"}
        src={"/logo.jpg"}
        alt={"小诺小诺"}
      ></Image>
    </div>
  )
}
