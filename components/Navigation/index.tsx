'use client'
import {config} from '@/config'
import {usePathname, useRouter} from 'next/navigation'
import {useEffect} from 'react'

export function Navigation() {
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        console.log(router, pathname)
    }, []);
    return <div className={'flex items-center justify-center gap-8'}>
        {config.menuData.map((item) => {
            return <div onClick={() => router.push(item.path)}
                        className={'cursor-pointer text-slate-600 tracking-wide ' + (pathname === item.path ? 'text-lg  font-bold' : 'text-base font-medium')}>{item.text}</div>
        })}
    </div>
}