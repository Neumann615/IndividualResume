export function Main({
                         children
                     }: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="px-7 py-10 of-x-hidden flex-1 pt-16 overflow-y-auto" style={{boxSizing: 'border-box'}}>
        <div className={'flex justify-center'}>
            {children}
        </div>
    </main>
}
