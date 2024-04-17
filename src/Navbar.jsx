import React from 'react'
import { useState } from 'react'

function Navbar() {

    const [backgroundColor, setBackgroundColor] = useState("#18181B")

    const scrollDown = () => {
      
        if(window.scrollY >= 80){
            setBackgroundColor("#202024")
        }
        else{
            setBackgroundColor("#18181B")
        }

    }

    window.addEventListener("scroll", scrollDown)

    return (
        <section className='sticky top-0'>
            <nav style={{ backgroundColor: backgroundColor }} className='w-100 bg-[#202024] shadow-md transition ease-in h-[80px] flex items-center justify-between px-10'>
                <div className='font-extrabold text-zinc-100'>
                    LOGO HERE
                </div>
                <ul className='flex flex-row text-base gap-6 text-zinc-300'>
                    <li><a className='hover:text-purple-400 text-purple-600 font-semibold' href="#About">About</a></li>
                    <li><a className='hover:text-purple-400 ' href="#Services">Services</a></li>
                    <li><a className='hover:text-purple-400 ' href="#Skills">Skills</a></li>
                    <li><a className='hover:text-purple-400 ' href="#Contact">Contact</a></li>
                </ul>

            </nav>
        </section>
    )
}

export default Navbar