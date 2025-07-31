export default function Home() {
    return (
        <section className='flex-grow'>
            <div className='relative isolate px-6 pt-14 lg:px-8'>
                <div className='mx-auto max-w-2xl '>
                    <div className='text-center'>
                        <h1 className='text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-7xl'>
                            <span className='bg-gradient-to-r from-primary to-cyan-500 bg-clip-text font-extrabold text-transparent'>
                                Avatar Lipsync
                            </span>{' '}
                        </h1>
                        <p className='mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8'>
                            A case study project for setting up a lipsync
                            animation for Avatar.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
