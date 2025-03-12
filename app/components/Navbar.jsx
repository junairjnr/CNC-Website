// import { Search, ShoppingCart } from 'lucide-react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// export default function Navbar({ setClicked }) {
//   return (
//     <div className="w-full h-full flex flex-row justify-center items-center p-2 top-0 left-0 right-0">
//       <div className="w-[75%] h-[20px] font-bold text-center flex justify-center flex-row gap-2">
//         <Search className="h-full w-full" />
//         <p>Product List</p>
//         <input
//           className="h-full w-full block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//           placeholder="Search..."
//         />
//       </div>
//       <div className="w-[25%] flex justify-end relative">
//         {/* <Link href={'/form'} className="relative"> */}
//           <ShoppingCart onClick={() => setClicked(true)} size={40} />
//           <span className="absolute top-[-5px] right-[-10px] bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//             10
//           </span>
//         {/* </Link> */}
//       </div>
//     </div>
//   );
// }
import { useState } from 'react';
import { FaBook, FaPlus, FaSignInAlt, FaSignOutAlt, FaTimes, FaUser, } from 'react-icons/fa';// You can use any icons

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [login, setLogin] = useState(false)

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const currentTime = new Date().toLocaleTimeString();

  return (


    <div>
      {/* Header */}
      {/* <header className="w-full top-0 left-0 flex justify-between items-center p-4 bg-gray-800 text-white "> */}
      {/* <h1 className="text-xl font-semibold">Your App</h1> */}
      {/* <div className="flex items-center space-x-4">
          <span>{currentTime}</span>
          {login ?
            <button onClick={toggleSidebar} className="text-2xl">
              <FaBook />
            </button> :
            <button>
              <FaUser className="text-2xl" />
            </button>
          }
        </div> */}
      <div
        className="fixed top-2 lg:right-[100px] right-4 flex items-center space-x-4 bg-inherit p-2 hover:rounded-md hover:shadow-md hover:text-white hover:bg-black text-black"
        style={{ zIndex: 50 }}
      >
        {/* <span>{currentTime}</span> */}
        {login ? (
          <button onClick={toggleSidebar} className="text-2xl">
            <FaBook />
          </button>
        ) : (
          <button>
            <FaUser className="text-2xl" />
          </button>
        )}
      </div>
      {/* </header> */}

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 ">
          <div className="fixed right-0 top-0 bg-white w-[250px] h-full p-6 shadow-lg flex flex-col items-center justify-start space-x-5 ">
            <div className="flex justify-between items-center p-6">
              <div className="flex flex-col items-center space-y-2 justify-center">
                {/* User icon */}
                <FaUser className="text-4xl" /> {/* Increased size */}
                <span className="font-semibold text-lg">John Doe</span> {/* Placed text under the icon */}
              </div>
              <button onClick={toggleSidebar} className="absolute top-4 right-4 text-xl">
                <FaTimes />
              </button>
            </div>
            <div className="mt-10 space-y-4">
              <button className="flex items-center space-x-2 w-full p-2 text-left">
                <FaBook />
                <span>Book</span>
              </button>
              <button className="flex items-center space-x-2 w-full p-2 text-left">
                <FaPlus />
                <span>Add</span>
              </button>
              <button className="flex items-center space-x-2 w-full p-2 text-left">
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
