import Link from "next/link"

export default function AboutMe() {
    return (
        <main>
            <nav className="flex items-center flex-wrap p-5">
                <Link className="font-bold mr-5 text-2xl inline-flex items-center uppercase" href="/">Kirousek</Link>
            </nav>
            <div className="p-5 break-words">
                <div className="max-w-3xl mx-auto my-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-snug lg:leading-snug">
                        About me
                    </h1>
                </div>
                <div>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg lg:text-xl font-semibold text-gray-600">
                            Updated 14/05/23 23:55 (I can&apos;t sleep lol)
                        </p>
                        <article className="max-w-none my-10 text-gray-500">
                            <p>Hey, my name is Patrik</p>
                            <p>I am obviously developer and I can do some shitty websites in Next.js or anything you want, I can learn almost everything if it&apos;s not about physics</p>
                            <h2 className="font-semibold text-gray-400 text-xl py-2">Contact</h2>
                            <span className="flex">
                                <h3 className="font-semibold text-md text-gray-400">Discord:&nbsp;</h3>
                                <p>Kir#0001</p>
                            </span>
                            <span className="flex">
                                <h3 className="font-semibold text-md text-gray-400">Github:&nbsp;</h3>
                                <a href="https://github.com/kirousek">kirousek</a>
                            </span>
                            <span className="flex">
                                <h3 className="font-semibold text-md text-gray-400">Email:&nbsp;</h3>
                                <a href="mailto:polynek@kirousek.eu">polynek@kirousek.eu</a>
                            </span>
                        </article>
                    </div>
                </div>
            </div>
        </main>
    )
}