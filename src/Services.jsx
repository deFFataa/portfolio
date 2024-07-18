import React from 'react'
import Card from './Card.jsx'
import codeSvg from './assets/code.png'
import figma from './assets/figma.png'
import pen from './assets/pen.png'

function Services() {
    return (
        <section className='p-10 px-5 sm:px-20' id='Services'>
            <div className='text-center text-[30px] text-zinc-200 font-bold'>What I do?</div>
            <div className='grid place-items-center grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-10 mt-4'>
                <div>
                    <Card
                        icon={codeSvg}
                        title="DEVELOPMENT"
                        description="From attracting clients to displaying services and creating online stores, providing comprehensive web development solutions tailored to enhance your online presence and drive business growth."
                    />
                </div>
                <div>
                    <Card
                        icon={figma}
                        title="UI/UX"
                        description="Creating intuitive and visually appealing interfaces with a focus on user-centric designs that enhance engagement and ensure smooth interaction."
                    />
                </div>
                <div>
                    <Card
                        icon={pen}
                        title="DIGITAL ART"
                        description="Offering stunning digital art services that bring creativity and innovation to your projects. From illustrations to digital media, delivering unique and captivating visuals."
                    />
                </div>

            </div>
        </section>
    )
}

export default Services