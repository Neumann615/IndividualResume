"use client"
import Image from "next/image"
import {useRouter} from "next/navigation"

export function Avatar() {
    const router = useRouter()
    return (
        <div className={"cursor-pointer"} onClick={() => router.push("/")}>
            <Image
                width={40}
                height={40}
                className={"w-10 h-10 rounded-full"}
                src={"/logo.jpg"}
                alt={"小诺小诺"}
            ></Image>
        </div>
    )
}
