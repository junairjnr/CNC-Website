// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { Search, ShoppingCart } from 'lucide-react';

// // export default function Dashboard() {
// //   return (
// //     <div className="w-full  p-3 h-full bg-gray-100 flex justify-center items-center ">
// //       <div className="w-[80%] h-full flex flex-col">
// //         <div className="w-full h-full flex flex-row justify-center items-center p-2  top-0 left-0 right-0">
// //           <div className="w-[75%] h-[20px] font-bold text-center flex justify-center flex row gap-2">
// //             <Search className="h-full w-full" />
// //             <input
// //               className="h-full w-full block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
// //               placeholder="Search..."
// //             />
// //           </div>
// //           {/* <div className="w-[25%] flex justify-end ">
// //             <Link href={'/form'}>
// //               <button className="w-[100px] h-[50px] bg-gray-200 rounded-md shadow-md hover:bg-white font-bold">
// //                 Create
// //               </button>
// //               <ShoppingCart />
// //             </Link>
// //           </div> */}
// //           <div className="w-[25%] flex justify-end relative">
// //             <Link href={'/form'} className="relative">
// //               <ShoppingCart size={40} />
// //               {/* {cartItemCount > 0 && ( */}
// //               <span className="absolute top-[-5px] right-[-10px] bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
// //                 10
// //               </span>
// //               {/* )} */}
// //             </Link>
// //           </div>
// //         </div>
// //         <div className="grid md:grid-cols-4 gap-2 grid-rows-1 p-3 ">
// //           <div className="md:w-[350px]  h-full w-full p-4 bg-white rounded rounded-md shadow shadow-lg ">
// //             <div className="w-full h-full flex flex-col p-5">
// //               <div className="flex justify-center items-center">
// //                 <Image alt={''} src={''} height={80} width={100} />
// //               </div>
// //               <div className="w-full md:h-[50px] flex justify-between items-center">
// //                 <p className="font-bold">Item name</p>
// //                 <button className="w-[80px] h-[30px] rounded-md bg-green-200 text-gray-500 font-semibold hover:bg-gray-300">
// //                   save
// //                 </button>
// //               </div>
// //               <div className="w-full h-full pt-5 ">
// //                 <p className="text-[12px] md:text-[14px] ">
// //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
// //                   eget felis volutpat, scelerisque leo sed, egestas ex.
// //                   Pellentesque at vestibulum erat, a dignissim nisi. Donec vitae
// //                   tincidunt turpis. Proin erat neque, pharetra sed molestie a,
// //                   porta vitae libero. Pellentesque laoreet fringilla erat
// //                   ullamcorper aliquam. Praesent sodales, diam vitae interdum
// //                   gravida, sapien neque tincidunt ante, et eleifend velit velit
// //                   sit amet nunc. Proin lobortis ex quis lacus semper, nec congue
// //                   quam bibendum.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// 'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Search, ShoppingCart } from 'lucide-react';
// import { motion } from 'framer-motion';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

// export default function Dashboard() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products').then((res) => {
//       console.log(res);
//       if (res) {
//         setData(res.data);
//       }
//     });
//   }, []);

//   return (
//     <div className="grid md:grid-cols-4 grid-cols-1  gap-6 grid-rows-1">
//       {data?.map((x) => (
//         <motion.div
//           key={x?.id}
//           className="md:w-[350px] h-full w-full p-4 bg-white rounded-md shadow shadow-lg"
//           whileHover={{
//             scale: 1.05,
//             boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
//           }}
//           transition={{ duration: 0.3 }}
//         >
//           <div className="w-full h-full flex flex-col p-5">
//             <div className="flex justify-center items-center">
//               <motion.div
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <Image alt={''} src={x?.image} height={80} width={80} />
//               </motion.div>
//             </div>
//             <div className="w-full md:h-[50px] flex justify-between items-center">
//               <motion.div
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <p className="font-bold truncate">{x?.category}</p>
//               </motion.div>
//               <button className=" h-full p-2 rounded-md bg-green-200 text-gray-500 font-semibold hover:bg-gray-300">
//                 Add to cart
//               </button>
//             </div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="w-full h-full pt-5"
//             >
//               <p className="text-[12px] md:text-[14px]">{x?.description}</p>
//             </motion.div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetching products data from API
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      if (res) {
        setData(res.data);
      }
    });
  }, []);

  // Filter products based on search term
  const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full p-4 bg-gray-100 flex flex-col items-center">
      {/* Top Navigation Bar */}
      <div className="w-full flex justify-between items-center mb-6">
        {/* Search Input */}
        <div className="flex gap-2 items-center w-full md:w-[70%]">
          <Search size={24} />
          <input
            type="text"
            placeholder="Search..."
            className="block w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* Shopping Cart Icon */}
        <div className="relative">
          <Link href={'/cart'} className="relative">
            <ShoppingCart size={40} />
            {/* Cart badge */}
            <span className="absolute top-[-5px] right-[-10px] bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              10
            </span>
          </Link>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 w-full">
        {filteredData.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white p-5 rounded-md shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-full flex flex-col items-center">
              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </motion.div>

              {/* Product Details */}
              <div className="w-full mt-4 flex flex-col items-center text-center">
                <p className="font-bold text-lg ">{product.title}</p>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                  {product.description}
                </p>

                {/* Save Button */}
                <button className="mt-4 w-full bg-green-200 text-gray-700 py-2 rounded-md hover:bg-green-300">
                  Save
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
