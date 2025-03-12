'use client';

import { Fragment, useState } from 'react';
import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import Header from '../components/Navbar';
// import 'swiper/swiper-bundle.min.css';

export default function Donec() {
  const [clicked, setClicked] = useState(false);

  const data = [
    { date: "Jan", earnings: 2000, expenses: 1500 },
    { date: "Feb", earnings: 2500, expenses: 1800 },
    { date: "Mar", earnings: 2200, expenses: 2000 },
    { date: "Apr", earnings: 2700, expenses: 2100 },
  ];
  const quotes = [
    "The best way to predict the future is to create it.",
    "Life is what happens when you're busy making other plans.",
    "You only live once, but if you do it right, once is enough.",
    "In the middle of difficulty lies opportunity.",
    "In the middle of difficulty lies opportunity.",
    "In the middle of difficulty lies opportunity.",
    "In the middle of difficulty lies opportunity.",
    "In the middle of difficulty lies opportunity."
  ];
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      <Header />
    

      {/* Card Section */}

      <div className="h-[25%] w-full bg-white p-3 flex  justify-center items-center ">
        <div className='w-full flex flex-wrap justify-around jusity-center items-center max-w-[1200px]'>
          <div className="bg-gradient-to-r from-green-700 via-slate-200 to-green-600 p-4 w-full sm:w-[30%] text-center rounded-md shadow-md mb-4 sm:mb-0">
            <h3 className="text-xl font-semibold text-green-600">Total Earnings</h3>
            <p className="text-2xl font-bold ">$9,400</p>
          </div>
          <div className="bg-gradient-to-r from-red-700 via-slate-200 to-red-600 p-4 w-full sm:w-[30%] text-center rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-red-600">Total Expenses</h3>
            <p className="text-2xl font-bold ">$7,800</p>
          </div>
        </div>
      </div>

      {/* <div className='h-[25%] w-full bg-white p-3 flex flex-row justify-around items-center'>
        <div className='bg-green-100 p-4 w-[30%] text-center rounded-md shadow-md'>
          <h3 className="text-xl font-semibold text-green-600">Total Earnings</h3>
          <p className="text-2xl font-bold">$9,400</p>
        </div>
        <div className='bg-red-100 p-4 w-[30%] text-center rounded-md shadow-md'>
        <h3 className="text-xl font-semibold text-red-600">Total Expenses</h3>
          <p className="text-2xl font-bold">$7,800</p>
        </div>
      </div> */}

      {/* Line Charts */}
      <div className="flex flex-col flex-grow p-6 bg-white shadow-lg justify-center items-center">
        <h2 className="text-center text-xl font-semibold mb-4">Earnings vs Expenses</h2>

        <ResponsiveContainer width="100%" height={300} className="max-w-[1200px] shadow-lg reounde-md">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* Change line color for earnings to purple */}
            <Line type="monotone" dataKey="earnings" stroke="#9b59b6" strokeWidth={3} />
            {/* Change line color for expenses to red */}
            <Line type="monotone" dataKey="expenses" stroke="#e74c3c" strokeWidth={3} />

          </LineChart>
        </ResponsiveContainer>
      </div>


      <div className="min-h-[50vh] bg-gray-50 flex flex-col items-center justify-center shadow-lg p-6">
        {/* <h1 className="text-center text-2xl font-semibold text-gray-800 mb-8">Quotes Section</h1> */}
        <div className="w-full max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 z">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className={` p-6 text-gray-900 rounded-md shadow-lg ${index % 3 === 0
                ? 'bg-yellow-300 rotate-1'
                : index % 3 === 1
                  ? 'bg-pink-400 -rotate-2'
                  : 'bg-blue-300 rotate-1'
                }`}
              style={{ minHeight: '150px' }}
            >
              <span className=" top-2 right-2 text-sm text-gray-600 opacity-80">
                Note #{index + 1}
              </span>
              {/* <p className={`text-lg font-semibold ${index % 2 === 0 ? 'font-serif' : 'font-sans'}`}> */}
              <p className={`text-lg font-semibold font-serif`}>
                {quote}
              </p>
              {/* <p className="mt-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel justo quis eros
          vulputate placerat.
        </p> */}
            </div>
          ))}
        </div>
      </div>

    </div>
  );}