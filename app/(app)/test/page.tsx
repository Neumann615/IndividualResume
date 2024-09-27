'use client'
import {Tag, tagColorList} from '@/components/base/Tag'
import {fakerZH_CN as faker} from '@faker-js/faker'

const tagList = tagColorList.map(color => {
    return {
        color: color,
        text: faker.person.fullName()
    }
})

export default function Test() {

    return <div className={'w-3/4'}>
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

    </div>
}