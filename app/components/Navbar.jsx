import { Search, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar({ setClicked }) {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center p-2 top-0 left-0 right-0">
      <div className="w-[75%] h-[20px] font-bold text-center flex justify-center flex-row gap-2">
        <Search className="h-full w-full" />
        <p>Product List</p>
        <input
          className="h-full w-full block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search..."
        />
      </div>
      <div className="w-[25%] flex justify-end relative">
        {/* <Link href={'/form'} className="relative"> */}
          <ShoppingCart onClick={() => setClicked(true)} size={40} />
          <span className="absolute top-[-5px] right-[-10px] bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            10
          </span>
        {/* </Link> */}
      </div>
    </div>
  );
}
