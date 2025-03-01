'use client'
import { Tag, TagColor } from "@/components/Tag";
import { ProjectItem, ProjectTypeEnum } from "@/type";
import { Building2, UserRound } from "lucide-react";
import Image from "next/image";

export function ProjectCard(props: {
    model: ProjectItem
}) {
    return <div
        onClick={() => {
            window.open(props.model.url)
        }}
        className={"w-92 p-4 duration-300 relative cursor-pointer bg-zinc-50 dark:bg-zinc-900 rounded-xl overflow-hidden hover:bg-zinc-100 hover:dark:bg-zinc-800"}
    >
        <div className={"absolute right-0 top-0 rounded-bl-[999px]  pr-2 pt-2 pl-4 pb-4 bg-blue-400 text-zinc-50 dark:bg-blue-600 dark:text-zinc-50"}>
            {props.model.type === ProjectTypeEnum.公司 ? <Building2></Building2> : null}
            {props.model.type === ProjectTypeEnum.个人 ? <UserRound></UserRound> : null}
        </div>
        <div className={"mb-6"}>
            <Image
                width={44}
                height={44}
                alt={"头像"}
                src={props.model.icon}
                className={"w-11 h-11 rounded-full"}
            ></Image>
        </div>
        <h2 className={"mb-2 text-lg font-bold text-zinc-800 dark:text-zinc-200"}>
            {props.model.title}
        </h2>
        <div
            className={
                "relative z-10 mb-4 text-sm text-zinc-600 dark:text-zinc-400"
            }
        >
            {props.model.description}
        </div>
        <div className={"flex gap-4 mb-4 flex-wrap"}>
            {props.model.tags.map((item, index) => {
                return (
                    <Tag
                        key={index}
                        text={item.text}
                        color={item.color as TagColor}
                        size={"small"}
                    ></Tag>
                )
            })}
        </div>
        <div className={"text-zinc-400 text-xs text-ellipsis overflow-hidden"}>{props.model.url}</div>
    </div>
}