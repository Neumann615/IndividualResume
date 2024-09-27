import type { Metadata } from "next"
import "./globals.css"

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

export const metadata: Metadata = {
  title: "噗噗的博客",
  description: "记录学习笔记、技术文档以及一些生活日常",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={"m-0 h-full p-0 font-sans"}>
      <body className={`w-full  h-full`}>{children}</body>
    </html>
  )
}
