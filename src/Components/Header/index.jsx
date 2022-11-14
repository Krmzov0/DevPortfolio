import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

function Header() {
    return (
        <>
            <div className='flex justify-between items-center'>
                <Link to='/'><h1 className='font-regular text-3xl text-[#141414] tracking-[-0.05em]'>KRMZOV.</h1></Link>

                <div className='flex items-center w-[12rem] justify-between'>
                    <motion.div transition={{
                        type: "spring",
                        stiffness: 700
                    }}
                        initial={{ scale: 1 }}
                        whileHover={{
                            scale: 1.15
                        }} whileTap={{
                            y: 2.5
                        }}><svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer icon icon-tabler icon-tabler-menu" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.2" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="4" y1="8" x2="20" y2="8" />
                            <line x1="4" y1="16" x2="20" y2="16" />
                        </svg></motion.div>

                        <motion.div transition={{
                            type: "spring",
                            stiffness: 800
                        }}
                        
                            initial={{ scale: 1 }}
                            whileHover={{
                                scale: 1.15
                            }}
                            whileTap={{
                                y: 2.5
                            }}><button className='px-5 py-2 w-max text-[#ffffff] flex text-lg font-regular items-center rounded-full bg-[#222222]'>
                                Let's
                                Talk
                            </button></motion.div>
                </div>
            </div>
        </>
    )
}

export default Header