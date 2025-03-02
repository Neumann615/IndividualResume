'use client'
import {ThemeProvider} from 'next-themes'
import {GlobalLoading} from '@/components/GlobalLoading'
import "./globals.css"
import {useState} from 'react'

// const geistSans = localFont({
//     src: "./fonts/GeistVF.woff",
//     variable: "--font-geist-sans",
//     weight: "100 900",
// });
// const geistMono = localFont({
//     src: "./fonts/GeistMonoVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <html lang="en" className={"m-0 h-full p-0 font-sans"}>
        <body className={`w-full h-full`}>
        {isLoading ? <GlobalLoading loadingFinished={() => {
                setIsLoading(false)
            }}/> :
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>}

        </body>
        </html>
    )
}
