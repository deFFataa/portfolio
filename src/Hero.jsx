import HeroPic from './assets/hero.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faSquareUpwork } from "@fortawesome/free-brands-svg-icons"
import Resume from './assets/Resume-Isaac.pdf'
import Typewriter from "typewriter-effect";


function Hero() {

    const iconUpwork = <FontAwesomeIcon icon={faSquareUpwork} />
    const iconLinkedIn = <FontAwesomeIcon icon={faLinkedin} />
    const iconGithub = <FontAwesomeIcon icon={faGithub} />

    return (
        <section className='h-auto flex flex-wrap flex-row items-center px-10 mt-6 sm:mt-0' id='Home'>
            <div className='sm:basis-1/2 h-100 sm:ps-20'>
                <div className='text-[14px]'>Hello, I'm Isaac</div>
                <div className='text-purple-600 font-bold text-[30px] sm:text-[35px]'>
                    <Typewriter
                        options={{
                            strings: ['WEB DEVELOPER', 'UI/UX DESIGNER', 'DIGITAL ARTIST'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <div className="my-5">
                    <a href={Resume} target='_blank' download={Resume} className='py-3 px-5 bg-purple-600 rounded-md text-zinc-200 mt-5 hover:bg-purple-700 hover:text-zinc-100'>Download CV</a>
                </div>

                <div className='flex gap-2 mt-4'>
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
            <div className='hidden sm:block drop-shadow-md z-[-1]'>
                <img src={HeroPic} width={580} height={580} alt="" />
            </div>
        </section>
    )
}

export default Hero