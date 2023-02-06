export default function Dashboard({ title, children }) {
    return (        
        <main>
            <div className="py-6">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    <h1 className="text-3xl font-bold mb-4">{title}</h1>
                    {children}
                </div>
            </div>
        </main>
    )
}