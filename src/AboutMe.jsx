import React from 'react'
import aboutMePic from './assets/Questions-bro.png'
import photoshopIcon from './assets/adobe-photoshop-2.svg'
import XdIcon from './assets/adobe-xd-2.svg'
import bootsrapIcon from './assets/bootstrap-5-1.svg'
import cssIcon from './assets/css-3.svg'
import figmaIcon from './assets/figma-logo.png'
import htmlIcon from './assets/html-1.svg'
import laravelIcon from './assets/laravel-2 (1).svg'
import javascriptIcon from './assets/logo-javascript.svg'
import phpIcon from './assets/php-1.svg'
import reactIcon from './assets/react-2.svg'
import tailwindIcon from './assets/tailwind-css-2.svg'

function AboutMe() {

    const designTools = [photoshopIcon, XdIcon]
    const progTools = [htmlIcon, cssIcon, javascriptIcon, tailwindIcon, reactIcon, bootsrapIcon, phpIcon, laravelIcon]

    return (
        <section className='mt-4'>
            <div className='flex justify-center px-20 items-center'>
                <div className='basis-1/2'>
                    <img src={aboutMePic} width={500} height={500} alt="" />
                </div>
                <div className='basis-1/2'>
                    <div className='bg-[#202024] p-10 rounded-md'>
                        <h2 className='text-xl font-bold text-purple-600'>About Me</h2>
                        <div className='w-full mt-3'>Hi, I'm Isaac Luis Balabbo, a passionate Web Developer and UI/UX Designer based on the Philippines</div>

                        <div>
                            <div className='flex gap-3 mt-3'>
                                <button className='text-lg text-purple-600 border-b border-purple-600'>Skills</button>
                                <button className='text-lg'>Certifications</button>
                            </div>
                            <div className='mt-3'>Design Tools</div>
                            <div className='flex gap-5 mt-2'>
                                {designTools.map(icons =>
                                    <img src={icons} width={40} height={40} alt="" />
                                )}
                                <img src={figmaIcon} width={25} height={40} alt="" />
                            </div>
                            <div className='mt-3'>Programming Tools</div>
                            <div className='flex gap-5 items-center mt-2'>
                                {progTools.map(icons =>
                                    <img src={icons} width={40} height={40} alt="" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe