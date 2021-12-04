import Head from 'next/head'
import Image from 'next/image'
export default function About() {
    return (
        <div className="p-2 bg-primary font-main">
            <Head>
                <title>About - Myself and My Moves</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/mmm-icon.jpg" />
            </Head>
            <main className="min-w-full flex flex-col items-center">
                <section>Our story</section>
                <section className="grid grid-cols-8 gap-4 place-content-between">
                    <div className="flex flex-col items-center justify-center col-span-2">
                        <Image className="mb-2" src="/images/meditation-icon.png" alt="yoga" width={25} height={25} />
                        <h1 className="h-10 w-10 font-bold text-3xl">1M</h1>
                        <p>CLASS VIEWS</p>
                    </div>
                    <div className="flex flex-col items-center justify-center col-span-2">
                        <Image className="mb-2" src="/images/meditation-icon.png" alt="yoga" width={25} height={25} />
                        <h1 className="h-10 w-10 font-bold text-3xl">1M</h1>
                        <p>CLASS VIEWS</p>
                    </div>
                    <div className="flex flex-col items-center justify-center col-span-2">
                        <Image className="mb-2" src="/images/meditation-icon.png" alt="yoga" width={25} height={25} />
                        <h1 className="h-10 w-10 font-bold text-3xl">1M</h1>
                        <p>CLASS VIEWS</p>
                    </div>
                    <div className="flex flex-col items-center justify-center col-span-2">
                        <Image className="mb-2" src="/images/meditation-icon.png" alt="yoga" width={25} height={25} />
                        <h1 className="h-10 w-10 font-bold text-3xl">1M</h1>
                        <p>CLASS VIEWS</p>
                    </div>
                </section>
            </main>
        </div>
    )
}