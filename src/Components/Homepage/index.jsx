import React from 'react'
import Header from '../Header'
import { motion } from "framer-motion";
import heroImg from '../../Images/heroImg.png';

function Homepage() {
    return (
        <>
            <div className='w-[100%] h-[95vh] bg-[#E2E2E2] rounded-3xl p-20 mx-auto'>
                <Header />

                <div className='relative top-[25vh]'>
                    <div className='flex items-end justify-between'>
                        <div>
                            <motion.div initial={{ y: 140, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} ><h1 className='flex text-9xl font-bold text-[#222222]'>Full Stack</h1></motion.div>
                            <motion.div initial={{ y: 140, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 }} ><h1 className='flex text-9xl font-bold text-[#222222]'>Web Developer.</h1></motion.div>
                        </div>

                        <div>
                            <p className='text-[34.56px] font-medium text-[#222222] leading-[44.928px]'>I help clients around the world <br /> create more engaging <br /> experiences through my <br /> development skills.</p>
                        </div>
                    </div>

                    <div className='flex items-center mt-24 ml-2'>
                        <div className='w-[8rem] flex items-center justify-between'>
                            <a href="/"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="37" height="37" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg></a>
                            <a href="/"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="37" height="37" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <rect x="4" y="4" width="16" height="16" rx="4" />
                                <circle cx="12" cy="12" r="3" />
                                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                            </svg></a>
                            <a href="/"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="37" height="37" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                <line x1="8" y1="11" x2="8" y2="16" />
                                <line x1="8" y1="8" x2="8" y2="8.01" />
                                <line x1="12" y1="16" x2="12" y2="11" />
                                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                            </svg></a>
                        </div>


                        <motion.div transition={{
                            type: "spring",
                            stiffness: 700
                        }}
                            initial={{ scale: 1 }}
                            whileHover={{
                                scale: 1.15
                            }}
                            whileTap={{
                                y: 2.5
                            }}><button className='border ml-5 p-2 bg-[#222222] text-[#fff] px-4 rounded-full'>ABOUT ME</button></motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage