import { useRef, useState, useEffect } from 'react'
import aboutMePic from './assets/AboutMe.jpg'
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
import EducationInfo from './EducationInfo.jsx'

function AboutMe() {

    const designTools = [
        { icon: photoshopIcon, name: 'Adobe Photoshop' },
        { icon: XdIcon, name: 'Adobe Xd' }
    ]
    const progTools = [
        { icon: htmlIcon, name: 'HTML 5' },
        { icon: cssIcon, name: 'CSS 3' },
        { icon: javascriptIcon, name: 'JavaScript' },
        { icon: tailwindIcon, name: 'Tailwind' },
        { icon: reactIcon, name: 'ReactJS' },
        { icon: bootsrapIcon, name: 'Bootstrap' },
        { icon: phpIcon, name: 'PHP' },
        { icon: laravelIcon, name: 'Laravel' },
    ]

    const skillsTab = useRef(null)
    const certificationTab = useRef(null)
    const educationTab = useRef(null)
    const honorsAndAwardsTab = useRef(null)

    const [changeTabToEducation, setChangeTabToEducation] = useState(true)
    const [changeTabToCertification, setChangeTabToCertification] = useState(false)
    const [changeTabToSkills, setChangeTabToSkills] = useState(false)
    const [changeTabToHonorsAwards, setchangeTabToHonorsAwards] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        handleResize() // Check initial screen size
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleTabChange = (tab) => {
        switch (tab) {
            case 'education':
                goToEducationTab()
                break
            case 'skills':
                goToskillsTab()
                break
            case 'certifications':
                goToCertificationsTab()
                break
            case 'honorsAwards':
                goToHonorsAwardTab()
                break
            default:
                break
        }
    }

    const goToskillsTab = () => {
        skillsTab.current.style.display = "block"
        certificationTab.current.style.display = "none"
        educationTab.current.style.display = "none"
        honorsAndAwardsTab.current.style.display = "none"

        setChangeTabToSkills(true)
        setChangeTabToCertification(false)
        setChangeTabToEducation(false)
        setchangeTabToHonorsAwards(false)
    }

    const goToCertificationsTab = () => {
        skillsTab.current.style.display = "none"
        certificationTab.current.style.display = "block"
        educationTab.current.style.display = "none"
        honorsAndAwardsTab.current.style.display = "none"

        setChangeTabToCertification(true)
        setChangeTabToSkills(false)
        setChangeTabToEducation(false)
        setchangeTabToHonorsAwards(false)
    }

    const goToEducationTab = () => {
        skillsTab.current.style.display = "none"
        certificationTab.current.style.display = "none"
        educationTab.current.style.display = "block"
        honorsAndAwardsTab.current.style.display = "none"

        setChangeTabToCertification(false)
        setChangeTabToSkills(false)
        setChangeTabToEducation(true)
        setchangeTabToHonorsAwards(false)
    }

    const goToHonorsAwardTab = () => {
        skillsTab.current.style.display = "none"
        certificationTab.current.style.display = "none"
        educationTab.current.style.display = "none"
        honorsAndAwardsTab.current.style.display = "block"

        setChangeTabToCertification(false)
        setChangeTabToSkills(false)
        setChangeTabToEducation(false)
        setchangeTabToHonorsAwards(true)
    }

    return (
        <section className='px-10 mt-10' id='About'>
            <div className='flex flex-wrap sm:flex-nowrap gap-3 justify-center'>
                <div className=''>
                    <img src={aboutMePic} width={500} className='rounded-md' alt="" />
                </div>
                <div className=''>
                    <div className='bg-[#202024] p-10 rounded-md border border-zinc-700 shadow-md shadow-gray-900 max-w-[54rem]'>
                        <h2 className='text-xl font-bold text-purple-600'>About Me</h2>
                        <div className='w-full mt-3'>Hi, I'm Isaac Luis Balabbo, a passionate Web Developer and UI/UX Designer based on the Philippines</div>
                        <div>
                            <div className='space-y-3'>
                                {isMobile ? (
                                    <div className='mt-6'>
                                        <select onChange={(e) => handleTabChange(e.target.value)} className="select-about p-3 bg-purple-600 rounded-md text-zinc-100">
                                            <option value="education">Education</option>
                                            <option value="skills">Skills</option>
                                            <option value="certifications">Certifications</option>
                                            <option value="honorsAwards">Honors & Awards</option>
                                        </select>
                                    </div>
                                ) : (
                                    <>
                                        <button onClick={goToEducationTab} className={changeTabToEducation ? 'button-active-about' : 'button-about'}>Education</button>
                                        <button onClick={goToskillsTab} className={changeTabToSkills ? 'button-active-about' : 'button-about'}>Skills</button>
                                        <button onClick={goToCertificationsTab} className={changeTabToCertification ? 'button-active-about' : 'button-about'}>Certifications</button>
                                        <button onClick={goToHonorsAwardTab} className={changeTabToHonorsAwards ? 'button-active-about' : 'button-about'}>Honors & Awards</button>
                                    </>
                                )}
                            </div>
                            <div className='divider p-0 '></div>
                            <div ref={educationTab} className='overflow-auto h-[300px] custom-scrollbar'>
                                <EducationInfo
                                    level="College"
                                    school="Isabela State University – Cabagan Campus"
                                    course="Bachelor of Science in Information Technology"
                                    address="Catabayungan, Cabagan, Isabela"
                                    year="2020 - Present"
                                />
                                <EducationInfo
                                    level="Senior High School"
                                    school="St. Ferdinand College - Cabagan Campus"
                                    course={null}
                                    address="Centro, Cabagan, Isabela"
                                    year="2019 – 2020"
                                />
                                <EducationInfo
                                    level="Junior High School"
                                    school="San Pablo National High School"
                                    course={null}
                                    address="Poblacion, San Pablo, Isabela"
                                    year="2017 – 2018"
                                />
                                <EducationInfo
                                    level="Primary"
                                    school="Calamagui Elementary School"
                                    course={null}
                                    address="Calamagui, San Pablo, Isabela"
                                    year="2012 – 2013"
                                />
                            </div>
                            <div ref={skillsTab} className='hidden'>
                                <div className='mt-3 text-purple-600 font-semibold'>Design Tools</div>
                                <div className='flex gap-5 mt-3'>
                                    {designTools.map(icons =>
                                        <div className="tooltip" data-tip={icons.name}>
                                            <img src={icons.icon} width={30} height={30} alt="" />
                                        </div>
                                    )}
                                    <div className="tooltip" data-tip="Figma">
                                        <img src={figmaIcon} width={20} height={30} alt="" />
                                    </div>
                                </div>
                                <div className='mt-5 text-purple-600 font-semibold'>Programming Tools</div>
                                <div className='flex gap-5 items-center mt-3'>
                                    {progTools.map(icons =>
                                        <div className="tooltip" data-tip={icons.name}>
                                            <img src={icons.icon} width={30} height={30} alt="" />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div ref={certificationTab} className='hidden'>
                                <ul>
                                    <li>
                                        <span className='text-purple-600 font-semibold'>Accenture Technology Academy</span>
                                        <div className='text-white/70 text-sm'>
                                            April 01 to July 04, 2024
                                        </div>
                                    </li>
                                    <li className='mt-3'>
                                        <span className='text-purple-600 font-semibold'>Lingnan University – Hong Kong & Isabela States University Summer Academy 2023</span>
                                        <div className='text-white/70 text-sm'>
                                            July 11 - 22, 2024
                                        </div>
                                    </li>
                                    <li className='mt-3'>
                                        <span className='text-purple-600 font-semibold'>ICT Congress 3.0</span>
                                        <div className='text-white/70 text-sm'>
                                            May 04-06, 2021
                                        </div>
                                    </li>
                                    <li className='mt-3'>
                                        <span className='text-purple-600 font-semibold'>Computing Innovators of the Philippines, Inc. (CIP)</span>
                                        <div className='text-white/70 text-sm'>
                                            April, 2021
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div
                                ref={honorsAndAwardsTab}
                                className='hidden overflow-auto h-[300px] custom-scrollbar'
                            >
                                <ul className='space-y-3'>
                                    <li>
                                        <span className='text-purple-600 font-semibold'>Best Presenter, Student Research Colloquium (Streamlining C2WAD’s Operation: A Booking and Delivery Management System)</span>
                                        <div className='text-white/70 text-sm'>
                                            Jan 2024
                                        </div>
                                    </li>
                                    <li>
                                        <span className='text-purple-600 font-semibold'>University scholar</span>
                                        <div className='text-white/70 text-sm'>
                                            Second Semester S.Y 2021 – 2022 to Second Semester S.Y 2022 – 2023
                                        </div>
                                    </li>
                                    <li>
                                        <span className='text-purple-600 font-semibold'>College Scholar</span>
                                        <div className='text-white/70 text-sm'>
                                            Second Semester S.Y 2020 – 2021 to First Semester S.Y 2021 – 2022
                                        </div>
                                    </li>
                                    <li>
                                        <span className='text-purple-600 font-semibold'>Web Programming Champion – 4th Founding Anniversary of ISU-Cabagan </span>
                                        <div className='text-white/70 text-sm'>
                                            October 2022
                                        </div>
                                    </li>
                                    <li>
                                        <span className='text-purple-600 font-semibold'>Best in Research (The Effects of Social Media on English Literature of Junior High School Students of St. Ferdinand – Cabagan Campus) </span>
                                        <div className='text-white/70 text-sm'>
                                            June 2022
                                        </div>
                                    </li>
                                    <li>
                                        <span className='text-purple-600 font-semibold'>Outstanding Senior, Information Communication Technology (ICT) </span>
                                        <div className='text-white/70 text-sm'>
                                            June 2022
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe