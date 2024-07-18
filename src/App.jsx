import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Services from './Services.jsx'
import AboutMe from './AboutMe.jsx'
import Footer from './Footer.jsx'
import Projects from './Projects.jsx'
import ContactMe from './ContactMe.jsx'
import { useRef, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import AOS from 'aos'
import 'aos/dist/aos.css'



function App() {

  const arrowIcon = <FontAwesomeIcon icon={faArrowUp} />

  const moveUpBtn = useRef(null)

  const displayMoveUpBtn = () => {
    if (window.scrollY > 200) {
      moveUpBtn.current.style.display = 'block'
    }
    else {
      moveUpBtn.current.style.display = 'none'
    }
  }

  const handleMoveUpBtn = () => {
    // document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", displayMoveUpBtn);

    return () => {
      window.removeEventListener("scroll", displayMoveUpBtn)
    }
  }, [])




  return (
    <div className='h-100 w-100'>
      <button
        ref={moveUpBtn}
        onClick={handleMoveUpBtn}
        id='Hero'
        className='fixed bottom-[40px] right-[40px] bg-purple-600 hidden w-10 h-10 text-zinc-200 rounded-full hover:bg-purple-700 active:scale-90 transition ease'>
        {arrowIcon}
      </button>
      <Navbar />
      <Hero data-aos="fade-right"/>
      <AboutMe data-aos="fade-left"/>
      <Services />
      <Projects data-aos="fade-right"/>
      <ContactMe data-aos="fade-right"/>
      <Footer data-aos="fade-right"/>
    </div>
  )
}

export default App
