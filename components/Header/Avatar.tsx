'use client'
import {useRouter} from 'next/navigation'

export function Avatar() {
    const router = useRouter()
    return <div className={'cursor-pointer'} onClick={() => router.push('/')}>
        <img className={'w-12 h-12 rounded-full'} src={'/logo.jpg'}/>
    </div>
}