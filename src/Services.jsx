import React from 'react'
import Card from './Card.jsx'
import codeSvg from './assets/code.png'
import figma from './assets/figma.png'
import pen from './assets/pen.png'

function Services() {
    return (
        <section className='px-10 '>
            <div className='text-center text-[30px] text-zinc-200 font-bold'>What I do?</div>
            <div className='flex flex-row justify-center items-center gap-10 mt-4'>
                <Card
                    icon={codeSvg}
                    title="DEVELOPMENT"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus egestas orci, at eleifend nisi ultricies ac. Etiam lobortis, nisl nec ullamcorper dictum, sem tellus placerat erat, vel hendrerit justo tortor eu enim."
                />
                <Card
                    icon={figma}
                    title="UI/UX"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus egestas orci, at eleifend nisi ultricies ac. Etiam lobortis, nisl nec ullamcorper dictum, sem tellus placerat erat, vel hendrerit justo tortor eu enim."
                />
                <Card
                    icon={pen}
                    title="DIGITAL ART"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus egestas orci, at eleifend nisi ultricies ac. Etiam lobortis, nisl nec ullamcorper dictum, sem tellus placerat erat, vel hendrerit justo tortor eu enim."
                />
            </div>
        </section>
    )
}

export default Services