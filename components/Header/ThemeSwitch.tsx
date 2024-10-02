'use client';
import {Moon, Sun} from 'lucide-react'
import {useTheme} from 'next-themes'

export function ThemeSwitch() {
    const {theme, setTheme} = useTheme()
    return theme === 'dark' ? (
        <Moon onClick={() => {
            setTheme('light')
        }} className="h-5 w-5 text-zinc-500 cursor-pointer"/>
    ) : (
        <Sun onClick={() => {
            setTheme('dark')
        }} className="h-5 w-5 text-zinc-500 cursor-pointer"/>
    )
}