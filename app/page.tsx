// 'use client';

// import Image from 'next/image';
// import Dashboard from './card/page';
// import Navbar from './components/Navbar';
// import Cart from './components/Cart';
// import { Fragment, useState } from 'react';
// import React from 'react';
// import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import Header from './components/Navbar';
// // import 'swiper/swiper-bundle.min.css';

// export default function Home() {
//   const [clicked, setClicked] = useState(false);

//   const data = [
//     { date: "Jan", earnings: 2000, expenses: 1500 },
//     { date: "Feb", earnings: 2500, expenses: 1800 },
//     { date: "Mar", earnings: 2200, expenses: 2000 },
//     { date: "Apr", earnings: 2700, expenses: 2100 },
//   ];
//   const quotes = [
//     "The best way to predict the future is to create it.",
//     "Life is what happens when you're busy making other plans.",
//     "You only live once, but if you do it right, once is enough.",
//     "In the middle of difficulty lies opportunity.",
//     "In the middle of difficulty lies opportunity.",
//     "In the middle of difficulty lies opportunity.",
//     "In the middle of difficulty lies opportunity.",
//     "In the middle of difficulty lies opportunity."
//   ];
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">

//       <Header />


//       {/* Card Section */}

//       <div className="h-[25%] w-full bg-white p-3 flex  justify-center items-center ">
//         <div className='w-full flex flex-wrap justify-around jusity-center items-center max-w-[1200px]'>
//           <div className="bg-gradient-to-r from-green-700 via-slate-200 to-green-600 p-4 w-full sm:w-[30%] text-center rounded-md shadow-md mb-4 sm:mb-0">
//             <h3 className="text-xl font-semibold text-green-600">Total Earnings</h3>
//             <p className="text-2xl font-bold ">$9,400</p>
//           </div>
//           <div className="bg-gradient-to-r from-red-700 via-slate-200 to-red-600 p-4 w-full sm:w-[30%] text-center rounded-md shadow-md">
//             <h3 className="text-xl font-semibold text-red-600">Total Expenses</h3>
//             <p className="text-2xl font-bold ">$7,800</p>
//           </div>
//         </div>
//       </div>

//       {/* <div className='h-[25%] w-full bg-white p-3 flex flex-row justify-around items-center'>
//         <div className='bg-green-100 p-4 w-[30%] text-center rounded-md shadow-md'>
//           <h3 className="text-xl font-semibold text-green-600">Total Earnings</h3>
//           <p className="text-2xl font-bold">$9,400</p>
//         </div>
//         <div className='bg-red-100 p-4 w-[30%] text-center rounded-md shadow-md'>
//         <h3 className="text-xl font-semibold text-red-600">Total Expenses</h3>
//           <p className="text-2xl font-bold">$7,800</p>
//         </div>
//       </div> */}

//       {/* Line Charts */}
//       <div className="flex flex-col flex-grow p-6 bg-white shadow-lg justify-center items-center">
//         <h2 className="text-center text-xl font-semibold mb-4">Earnings vs Expenses</h2>

//         <ResponsiveContainer width="100%" height={300} className="max-w-[1200px] shadow-lg reounde-md">
//           <LineChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             {/* Change line color for earnings to purple */}
//             <Line type="monotone" dataKey="earnings" stroke="#9b59b6" strokeWidth={3} />
//             {/* Change line color for expenses to red */}
//             <Line type="monotone" dataKey="expenses" stroke="#e74c3c" strokeWidth={3} />

//           </LineChart>
//         </ResponsiveContainer>
//       </div>


//       <div className="min-h-[50vh] bg-gray-50 flex flex-col items-center justify-center shadow-lg p-6">
//         {/* <h1 className="text-center text-2xl font-semibold text-gray-800 mb-8">Quotes Section</h1> */}
//         <div className="w-full max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 z">
//           {quotes.map((quote, index) => (
//             <div
//               key={index}
//               className={` p-6 text-gray-900 rounded-md shadow-lg ${index % 3 === 0
//                 ? 'bg-yellow-300 rotate-1'
//                 : index % 3 === 1
//                   ? 'bg-pink-400 -rotate-2'
//                   : 'bg-blue-300 rotate-1'
//                 }`}
//               style={{ minHeight: '150px' }}
//             >
//               <span className=" top-2 right-2 text-sm text-gray-600 opacity-80">
//                 Note #{index + 1}
//               </span>
//               {/* <p className={`text-lg font-semibold ${index % 2 === 0 ? 'font-serif' : 'font-sans'}`}> */}
//               <p className={`text-lg font-semibold font-serif`}>
//                 {quote}
//               </p>
//               {/* <p className="mt-4 text-sm">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel justo quis eros
//           vulputate placerat.
//         </p> */}
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );

//   // return (
//   // <div className="w-full p-3 h-full bg-gray-100 flex justify-center items-center">
//   //   <div className="w-[80%] h-full flex flex-col">
//   //     {/* <Navbar setClicked={setClicked}/> */}
//   //     <div className="w-full flex flex-row m-0 p-0">
//   //       <Dashboard />
//   //       {/* {clicked && <Cart />} */}
//   //     </div>
//   //     {/* <BeautifulScanner /> */}
//   //     <div className="w-full"></div>
//   //   </div>
//   // </div>
//   {
//     /* <div className="w-full h-full">

// </div> */
//   }

//   <></>;

//   // <main className="flex min-h-screen flex-col items-center justify-between p-24">
//   //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//   //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//   //       Get started by editing&nbsp;
//   //       <code className="font-mono font-bold">app/page.tsx</code>
//   //     </p>
//   //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//   //       <a
//   //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//   //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         By{' '}
//   //         <Image
//   //           src="/vercel.svg"
//   //           alt="Vercel Logo"
//   //           className="dark:invert"
//   //           width={100}
//   //           height={24}
//   //           priority
//   //         />
//   //       </a>
//   //     </div>
//   //   </div>

//   //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//   //     <Image
//   //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//   //       src="/next.svg"
//   //       alt="Next.js Logo"
//   //       width={180}
//   //       height={37}
//   //       priority
//   //     />
//   //   </div>

//   //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//   //     <a
//   //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//   //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//   //       target="_blank"
//   //       rel="noopener noreferrer"
//   //     >
//   //       <h2 className={`mb-3 text-2xl font-semibold`}>
//   //         Docs{' '}
//   //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//   //           -&gt;
//   //         </span>
//   //       </h2>
//   //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//   //         Find in-depth information about Next.js features and API.
//   //       </p>
//   //     </a>

//   //     <a
//   //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//   //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//   //       target="_blank"
//   //       rel="noopener noreferrer"
//   //     >
//   //       <h2 className={`mb-3 text-2xl font-semibold`}>
//   //         Learn{' '}
//   //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//   //           -&gt;
//   //         </span>
//   //       </h2>
//   //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//   //         Learn about Next.js in an interactive course with&nbsp;quizzes!
//   //       </p>
//   //     </a>

//   //     <a
//   //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//   //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//   //       target="_blank"
//   //       rel="noopener noreferrer"
//   //     >
//   //       <h2 className={`mb-3 text-2xl font-semibold`}>
//   //         Templates{' '}
//   //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//   //           -&gt;
//   //         </span>
//   //       </h2>
//   //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//   //         Explore the Next.js 13 playground.
//   //       </p>
//   //     </a>

//   //     <a
//   //     <a
//   //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//   //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//   //       target="_blank"
//   //       rel="noopener noreferrer"
//   //     >
//   //       <h2 className={`mb-3 text-2xl font-semibold`}>
//   //         Deploy{' '}
//   //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//   //           -&gt;
//   //         </span>
//   //       </h2>
//   //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//   //         Instantly deploy your Next.js site to a shareable URL with Vercel.
//   //       </p>
//   //     </a>
//   //   </div>
//   // </main>
//   // );
// }
// // "use client"
// // import React from "react";
// // import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// // import Slider from "react-slick"; // For slider
// // // import "slick-carousel/slick/slick.css";
// // // import "slick-carousel/slick/slick-theme.css";

// // const ViewPage = () => {
// //   // Sample data for the area chart
// //   const data = [
// //     { date: "Jan", earnings: 2000, expenses: 1500 },
// //     { date: "Feb", earnings: 2500, expenses: 1800 },
// //     { date: "Mar", earnings: 2200, expenses: 2000 },
// //     { date: "Apr", earnings: 2700, expenses: 2100 },
// //   ];

// //   // Motivational quotes
// //   const quotes = [
// //     "Believe you can and you're halfway there.",
// //     "Success is not final; failure is not fatal.",
// //     "Dream big and dare to fail.",
// //     "Don’t watch the clock; do what it does. Keep going.",
// //   ];

// //   // Slider settings
// //   const sliderSettings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 3000,
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex flex-col">
// //       {/* Slider Section */}
// //       <div className="h-[30%] bg-blue-500 text-white flex items-center justify-center">
// //         <div className="w-full max-w-4xl">
// //           <Slider {...sliderSettings}>
// //             {quotes.map((quote, index) => (
// //               <div key={index} className="text-center p-6">
// //                 <h2 className="text-lg md:text-2xl font-semibold">{quote}</h2>
// //               </div>
// //             ))}
// //           </Slider>
// //         </div>
// //       </div>

// //       {/* Card Section */}
// //       <div className="h-[25%] bg-white flex justify-around items-center shadow-lg">
// //         <div className="bg-green-100 p-4 rounded-lg shadow-md w-[30%] text-center">
// //           <h3 className="text-xl font-semibold text-green-600">Total Earnings</h3>
// //           <p className="text-2xl font-bold">$9,400</p>
// //         </div>
// //         <div className="bg-red-100 p-4 rounded-lg shadow-md w-[30%] text-center">
// //           <h3 className="text-xl font-semibold text-red-600">Total Expenses</h3>
// //           <p className="text-2xl font-bold">$7,800</p>
// //         </div>
// //       </div>

// //       {/* Area Chart Section */}
// //       <div className="flex-grow p-6 bg-gray-100">
// //         <h2 className="text-center text-xl font-semibold mb-4">Earnings vs Expenses</h2>
// //         <ResponsiveContainer width="100%" height="100%">
// //           <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
// //             <CartesianGrid strokeDasharray="3 3" />
// //             <XAxis dataKey="date" />
// //             <YAxis />
// //             <Tooltip />
// //             <Area type="monotone" dataKey="earnings" stroke="#82ca9d" fill="#82ca9d" />
// //             <Area type="monotone" dataKey="expenses" stroke="#f44336" fill="#f44336" />
// //           </AreaChart>
// //         </ResponsiveContainer>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ViewPage;

import React from "react"
import Donec from "./dashSev/page.jsx"
import Progress from "./progress/page.jsx"
import TaskSearch from "./taskSearch/page.jsx"
export default function Home() {

  const bars = [5, 10, 20, 40, 80, 1]

  return (
    <div>
      {/* <Donec /> */}
      {/* {bars.map((x) =>
        <Progress key={x} progress={x} />
      )} */}
      {
        <TaskSearch />
      }
    </div>
  )
}