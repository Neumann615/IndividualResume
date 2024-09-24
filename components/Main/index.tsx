export function Main({
                         children
                     }: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="px-7 py-10 of-x-hidden flex items-center justify-center">
        {children}
    </main>
}
