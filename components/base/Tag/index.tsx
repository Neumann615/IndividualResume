import React from 'react'

interface TagProps {
    color?: TagColor
    size?: TagSize
    text?: string
    children?: React.ReactNode
}

export type TagSize = 'small' | 'medium' | 'large'
export type TagColor =
    'slate'
    | 'gray'
    | 'zinc'
    | 'neutral'
    | 'stone'
    | 'red'
    | 'orange'
    | 'amber'
    | 'yellow'
    | 'lime'
    | 'green'
    | 'emerald'
    | 'teal'
    | 'cyan'
    | 'sky'
    | 'blue'
    | 'indigo'
    | 'violet'
    | 'purple'
    | 'fuchsia'
    | 'pink'
    | 'rose'


export function Tag(props: TagProps) {
    const {color = 'purple', size = 'medium', text} = props

    return <div className={`${colorSet[color]} ${sizeSet[size]} flex  items-center justify-center pt-`}
    >
        {text ? text : props.children}
    </div>
}

const sizeSet: {
    [key in TagSize]: string
} = {
    'small': 'pl-2 pr-2 pt-0.5 pb-0.5 text-sm rounded-sm',
    'medium': 'pl-3 pr-3 pt-1 pb-1 text-base rounded',
    'large': 'pl-4 pr-4 pt-2 pb-2 text-lg rounded-md',
}

const colorSet: {
    [key in TagColor]: string
} = {
    'slate': 'text-slate-600 bg-slate-200 ',
    'gray': 'text-gray-600 bg-gray-200 ',
    'zinc': 'text-zinc-600 bg-zinc-200 ',
    'neutral': 'text-neutral-600 bg-neutral-200 ',
    'stone': 'text-stone-600 bg-stone-200 ',
    'red': 'text-red-600 bg-red-200 ',
    'orange': 'text-orange-600 bg-orange-200 ',
    'amber': 'text-amber-600 bg-amber-200 ',
    'yellow': 'text-yellow-600 bg-yellow-200 ',
    'lime': 'text-lime-600 bg-lime-200 ',
    'green': 'text-green-600 bg-green-200 ',
    'emerald': 'text-emerald-600 bg-emerald-200 ',
    'teal': 'text-teal-600 bg-teal-200 ',
    'cyan': 'text-cyan-600 bg-cyan-200 ',
    'sky': 'text-sky-600 bg-sky-200 ',
    'blue': 'text-blue-600 bg-blue-200 ',
    'indigo': 'text-indigo-600 bg-indigo-200 ',
    'violet': 'text-violet-600 bg-violet-200 ',
    'purple': 'text-purple-600 bg-purple-200',
    'fuchsia': 'text-fuchsia-600 bg-fuchsia-200 ',
    'pink': 'text-pink-600 bg-pink-200 ',
    'rose': 'text-rose-600 bg-rose-200 ',
}

export const tagColorList: Array<TagColor> = ['slate'
    , 'gray'
    , 'zinc'
    , 'neutral'
    , 'stone'
    , 'red'
    , 'orange'
    , 'amber'
    , 'yellow'
    , 'lime'
    , 'green'
    , 'emerald'
    , 'teal'
    , 'cyan'
    , 'sky'
    , 'blue'
    , 'indigo'
    , 'violet'
    , 'purple'
    , 'fuchsia'
    , 'pink'
    , 'rose']