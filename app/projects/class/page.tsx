import Link from "next/link"

export default function AboutMe() {
    return (
        <main>
            <nav className="flex items-center flex-wrap p-5">
                <Link className="font-bold mr-5 text-2xl inline-flex items-center uppercase" href="/">Kirousek</Link>
            </nav>
            <div className="p-5 break-words">
                <div className="max-w-3xl mx-auto my-10">
                    <p className="py-5 flex items-center font-bold text-lg md:text-xl">
                        <Link href="/projects">Projects</Link>
                        <p>&nbsp;&gt;&nbsp;</p>
                        <Link href="/projects/class">Class Web</Link>
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-snug lg:leading-snug">
                        Class web (Next.js)
                    </h1>
                </div>
                <div>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg lg:text-xl font-semibold text-gray-600">
                            Updated 14/05/23 23:55 (I can&apos;t sleep lol)
                        </p>
                        <article className="max-w-none my-10 text-gray-500">
                            <p>It started as a HTML, CSS and JS project, because of my stupid classmates, that can&apos;t do basic shit in frameworks. After that I created second project that I have done alone, but teacher said no, so it is at HTML again. I&apos;m very sad about this, but at least I have a reason to beat up my classmates everyday.</p>
                            <p>Because my classmates are fat fucks I made entire website in both Next.js and HTML. Next.js version is now discontinued, but it&apos;s working so you can use it as template or something I don&apos;t really care.</p>
                        </article>
                    </div>
                </div>
            </div>
        </main>
    )
}