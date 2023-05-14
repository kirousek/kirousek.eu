import Link from "next/link";

export default function Home() {
  return (
      <main>
          <nav className="flex items-center flex-wrap p-5">
              <Link className="font-bold mr-5 text-2xl inline-flex items-center uppercase" href="/" prefetch={true}>Kirousek</Link>
          </nav>
          <div className="flex flex-col flex-grow">
              <div className="p-5">
                  <div className="max-w-3xl mx-auto text-center items-center mt-10 py-10">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-snug md:leading-snug lg:leading-snug xl:leading-snug">Hi, I'm Patrik</h1>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-snug md:leading-snug lg:leading-snug xl:leading-snug text-gray-400">Hi, I'm Patrik</h1>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-snug md:leading-snug lg:leading-snug xl:leading-snug text-gray-600">Hi, I'm Patrik</h1>
                      <div className="text-xl md:text-2xl lg:text-3xl font-semibold py-3.5">
                          <p className="text-gray-400">Frontend/Software Developer</p>
                      </div>
                      <div className="md:text-lg py-1.5">
                          <p className="text-gray-400">
                              Currently in high school learning IT
                              <br />
                              ~
                              <br />
                              I use Arch, btw
                          </p>
                      </div>
                  </div>
              </div>
              <div className="m-5 flex-grow max-w-screen-lg lg:mx-auto lg:flex lg:flex-wrap">
                  <div className="lg:pr-20 lg:w-2/3">
                      <div className="my-20">
                          <Link className="group focus:outline-none" href="/projects/class" prefetch={true}>
                              <h2 className="font-bold text-2xl lg:text-4xl lg:leading-snug group-hover:underline group-focus:underline">
                                  Class Project
                              </h2>
                              <p className="my-5 text-lg text-gray-500">
                                  Project that started as simple project in html and evolved into Next.js...
                              </p>
                          </Link>
                      </div>
                  </div>
                  <div className="lg:w-1/3 lg:p-5">
                      <div className="my-16">
                          <h3 className="uppercase text-sm font-bold py-2 text-gray-500">
                              Categories
                          </h3>
                          <ul className="text-xl font-medium leading-loose">
                              <li>
                                  <Link href="/aboutme" prefetch={true}>About Me</Link>
                              </li>
                              <li id="">
                                  <Link href="/projects" prefetch={true}>Projects</Link>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </main>
  )
}
