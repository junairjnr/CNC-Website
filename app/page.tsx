'use client';

import Image from 'next/image';
import Dashboard from './card/page';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import BeautifulScanner from './components/QRcode';
import { Fragment, useState } from 'react';

export default function Home() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <header className="mb-8 flex items-center justify-between border-b py-4 md:mb-12 md:py-8 xl:mb-16">
            {/* <!-- logo - start --> */}
            <a
              href="/"
              className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
              aria-label="logo"
            >
              <svg
                width="95"
                height="94"
                viewBox="0 0 95 94"
                className="h-auto w-6 text-indigo-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
              </svg>
              TFM
            </a>
            {/* <!-- logo - end --> */}

            {/* <!-- nav - start --> */}
            <nav className="hidden gap-12 lg:flex">
              <a href="#" className="text-lg font-semibold text-indigo-500">
                Home
              </a>
              <a
                href="#"
                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Features
              </a>
              <a
                href="#"
                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                About
              </a>
            </nav>
            {/* <!-- nav - end --> */}

            {/* <!-- buttons - start --> */}
            <a
              href="#"
              className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
            >
              Contact Sales
            </a>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              Menu
            </button>
            {/* <!-- buttons - end --> */}
          </header>

          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            {/* <!-- content - start --> */}
            <div className="flex flex-col justify-between xl:w-5/12">
              <div></div>

              <div className="sm:text-center lg:py-12 lg:text-left xl:py-24">
                <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
                  Very proud to introduce
                </p>

                <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                  Revolutionary way to build the web
                </h1>

                <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                  <a
                    href="#"
                    className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                  >
                    Start now
                  </a>

                  <a
                    href="#"
                    className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                  >
                    Take tour
                  </a>
                </div>
              </div>

              {/* <!-- social - start --> */}
              <div className="mt-8 flex items-center justify-center gap-4 sm:mt-16 lg:justify-start">
                <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">
                  Social
                </span>
                <span className="h-px w-12 bg-gray-200"></span>

                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* <!-- social - end --> */}
            </div>
            {/* <!-- content - end --> */}

            {/* <!-- image - start --> */}
            <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
              <img
                src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&q=75&fit=crop&w=1000"
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* <!-- image - end --> */}
          </section>
        </div>
      </div>
      <Fragment>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">
              {/* <!-- content - start --> */}
              <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
                <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">
                  Summer Sale
                  <br />
                  Up to 70% off.
                </h2>

                <p className="mb-8 max-w-md text-gray-400">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>

                <div className="mt-auto">
                  <a
                    href="#"
                    className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                  >
                    Save now
                  </a>
                </div>
              </div>
              {/* <!-- content - end --> */}

              {/* <!-- image - start --> */}
              <div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
                <img
                  src="https://images.unsplash.com/photo-1505846951821-e25bacf2eccd?auto=format&q=75&fit=crop&crop=top&w=1000&h=500"
                  loading="lazy"
                  alt="Photo by Dom Hill"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              {/* <!-- image - end --> */}
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );

  // return (
  // <div className="w-full p-3 h-full bg-gray-100 flex justify-center items-center">
  //   <div className="w-[80%] h-full flex flex-col">
  //     {/* <Navbar setClicked={setClicked}/> */}
  //     <div className="w-full flex flex-row m-0 p-0">
  //       <Dashboard />
  //       {/* {clicked && <Cart />} */}
  //     </div>
  //     {/* <BeautifulScanner /> */}
  //     <div className="w-full"></div>
  //   </div>
  // </div>
  {
    /* <div className="w-full h-full">

</div> */
  }

  <></>;

  // <main className="flex min-h-screen flex-col items-center justify-between p-24">
  //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
  //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
  //       Get started by editing&nbsp;
  //       <code className="font-mono font-bold">app/page.tsx</code>
  //     </p>
  //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
  //       <a
  //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
  //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         By{' '}
  //         <Image
  //           src="/vercel.svg"
  //           alt="Vercel Logo"
  //           className="dark:invert"
  //           width={100}
  //           height={24}
  //           priority
  //         />
  //       </a>
  //     </div>
  //   </div>

  //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
  //     <Image
  //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
  //       src="/next.svg"
  //       alt="Next.js Logo"
  //       width={180}
  //       height={37}
  //       priority
  //     />
  //   </div>

  //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
  //     <a
  //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       <h2 className={`mb-3 text-2xl font-semibold`}>
  //         Docs{' '}
  //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //           -&gt;
  //         </span>
  //       </h2>
  //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
  //         Find in-depth information about Next.js features and API.
  //       </p>
  //     </a>

  //     <a
  //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       <h2 className={`mb-3 text-2xl font-semibold`}>
  //         Learn{' '}
  //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //           -&gt;
  //         </span>
  //       </h2>
  //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
  //         Learn about Next.js in an interactive course with&nbsp;quizzes!
  //       </p>
  //     </a>

  //     <a
  //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       <h2 className={`mb-3 text-2xl font-semibold`}>
  //         Templates{' '}
  //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //           -&gt;
  //         </span>
  //       </h2>
  //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
  //         Explore the Next.js 13 playground.
  //       </p>
  //     </a>

  //     <a
  //     <a
  //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       <h2 className={`mb-3 text-2xl font-semibold`}>
  //         Deploy{' '}
  //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //           -&gt;
  //         </span>
  //       </h2>
  //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
  //         Instantly deploy your Next.js site to a shareable URL with Vercel.
  //       </p>
  //     </a>
  //   </div>
  // </main>
  // );
}
