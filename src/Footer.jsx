import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faSquareUpwork } from "@fortawesome/free-brands-svg-icons"

function Footer() {

    const iconUpwork = <FontAwesomeIcon icon={faSquareUpwork} />
    const iconLinkedIn = <FontAwesomeIcon icon={faLinkedin} />
    const iconGithub = <FontAwesomeIcon icon={faGithub} />
    return (
        <section className='border-t border-zinc-500 px-10 py-10'>
            <div className='flex flex-wrap'>
                <div className='mr-auto'>
                    <span className='text-zinc-300'>Isaac Luis Balabbo - Copyright 2024</span>
                </div>
                <div className='flex gap-2'>
                    <a href="https://github.com/deFFataa" className='text-zinc-300 text-lg hover:text-purple-400'>
                        {iconGithub}
                    </a>
                    <a href="https://www.upwork.com/freelancers/~013e9669c0e3d117bf" className='text-zinc-300 text-lg hover:text-purple-400'>
                        {iconUpwork}
                    </a>
                    <a href="https://www.linkedin.com/in/isaac-balabbo-29a766318/" className='text-zinc-300 text-lg hover:text-purple-400'>
                        {iconLinkedIn}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Footer