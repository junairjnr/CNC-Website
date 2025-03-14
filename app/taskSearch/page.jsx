"use client"

import { useEffect } from "react";
import { useState } from "react"

export default function TaskSearch() {

    const [input, setInput] = useState("");
    const [result, setResult] = useState([]);

    const fetchData = async () => {
        const data = await fetch("https://dummyjson.com/recipes/search?q=" + input)
        //throtling/debouncing
        console.log(data)

        const json = await data.json()

        const res = json?.recipes
        setResult(res)
    }

    useEffect(() => {
        fetchData()
    }, [input])
    // useEffect(() => {
    //     console.log(result, "result")
    // }, [result])


    return (
        // <div className="w-full h-screen bg-gray-300 flex items-center justify-center ">
        //     <div className="w-[500px] border border-black">
        //         <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="w-full h-[30px]  border border-black p-2" />
        //         <div className="w-fu h-[300px] bg-green-50 p-2">
        //             <ul className="h-[300px] text-left overflow">
        //                 {result?.map((x) => (
        //                     <li className="text-[12px]" key={x.id}>{x.name}</li>
        //                 ))}
        //             </ul>
        //         </div>
        //     </div>

        // </div>
        <div className="w-full h-screen flex items-center justify-center bg-gray-200">
            <div className="w-[500px] border border-gray-400 rounded-lg shadow-lg bg-white p-4">
                {/* Search Input */}
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search for recipes..."
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                {/* Results List */}
                <div className="mt-3 h-[300px] bg-green-50 p-2 rounded-lg overflow-y-auto border border-gray-300">
                    {result.length > 0 ? (
                        <ul className="space-y-2">
                            {result.map((x) => (
                                <li key={x.id} className="text-sm p-2 bg-white rounded-md shadow">
                                    {x.name}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500 text-sm text-center mt-5">No recipes found.</p>
                    )}
                </div>
            </div>
        </div>
    )
}