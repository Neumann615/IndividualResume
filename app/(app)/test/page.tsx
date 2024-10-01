'use client';
import {Tag, tagColorList} from '@/components/base/Tag'
import {fakerZH_CN as faker} from '@faker-js/faker'
import {Container} from '@/components/Container'
import * as a from "@/components/base/Icon"

const iconComponentList: any[] = []
for (const key in a) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (a[key]) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        iconComponentList.push(a[key])
    }
}

const tagList = tagColorList.map(color => {
    return {
        color: color,
        text: faker.person.fullName()
    }
})

export default function Test() {

    return <Container className={'w-4/5'}>
        <div>
            <p className={'text-center text-3xl font-bold mb-8'}>标签(Tag)</p>
            <div className={'flex flex-wrap gap-4 mb-8'}>
                {tagList.map((item) => {
                    return <Tag key={item.color} color={item.color} text={item.text} size={'small'}></Tag>
                })}
            </div>
            <div className={'flex flex-wrap gap-4 mb-8'}>
                {tagList.map((item) => {
                    return <Tag key={item.color} color={item.color} text={item.text} size={'medium'}></Tag>
                })}
            </div>
            <div className={'flex flex-wrap gap-4'}>
                {tagList.map((item) => {
                    return <Tag key={item.color} color={item.color} text={item.text} size={'large'}></Tag>
                })}
            </div>
        </div>
        <div className={"mt-12"}>
            <p className={'text-center text-3xl font-bold mb-8'}>图标(Icon)</p>
            <div className={'flex flex-wrap gap-4 mb-8'}>
                {iconComponentList.map((Icon, index) => {
                    return <div key={index}
                                className={'w-12 h-12 cursor-pointer bg-zinc-50 hover:bg-zinc-200 grid place-content-center rounded-md'}>
                        <Icon className={'text-2xl'}></Icon>
                    </div>
                })}
            </div>
        </div>
    </Container>
}