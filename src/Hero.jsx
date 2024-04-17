import React from 'react'
import codingBro from './assets/Coding-bro (2).png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons"
import Typewriter from "typewriter-effect";


function Hero() {

    const iconFb = <FontAwesomeIcon icon={faFacebook} />
    const iconTwitter = <FontAwesomeIcon icon={faTwitter} />
    const iconInstagram = <FontAwesomeIcon icon={faInstagram} />
    const iconGithub = <FontAwesomeIcon icon={faGithub} />

    return (
        <section className='h-auto flex flex-row items-center justify-center px-10'>
            <div className='basis-1/2 h-100 ps-20'>
                <div className='text-[14px]'>Hello, I'm Isaac</div>
                <div className='text-purple-600 font-bold text-[30px]'>
                    <Typewriter
                        options={{
                            strings: ['WEB DEVELOPER', 'UI/UX DESIGNER', 'DIGITAL ARTIST'],
                            autoStart: true,
                            loop: true,
                          }}
                    />
                </div>
                {/* <div className='w-full mt-3'>Hi, I'm Isaac Luis Balabbo, a passionate Web Developer and UI/UX Designer based on the Philippines</div> */}
                <button className='py-3 px-5 bg-purple-600 rounded-md text-zinc-200 mt-5 hover:bg-purple-700 hover:text-zinc-100'>Download CV</button>
                <div className='flex gap-2 mt-4'>
                    <a href="https://www.facebook.com/deFFataa/" className='text-zinc-300 text-lg hover:text-purple-400'>
                        {iconFb}
                    </a>
                    <a href="https://twitter.com/DeFFataa" className='text-zinc-300 text-lg hover:text-purple-400'>
                        {iconTwitter}
                    </a>
                    <a href="https://www.instagram.com/iceac_/" className='text-zinc-300 text-lg hover:text-purple-400'>
                        {iconInstagram}
                    </a>
                    <a href="https://github.com/deFFataa" className='text-zinc-300 text-lg hover:text-purple-400'>
                        {iconGithub}
                    </a>
                </div>
            </div>
            <div className='basis-1/2 '>
                <img src={codingBro} width={580} height={580} alt="" />
            </div>
        </section>
    )
}

export default Hero