import {useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import c2wadMockup from "./assets/images/C2WAD.jpg";
import gradSysMockup from "./assets/images/GradSys.jpg";
import BrainScanMockup from "./assets/images/BrainScan.jpg";
import PixelPositionsMockup from "./assets/images/Pixel Positions.jpg";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Projects() {

  
  const iconGithub = <FontAwesomeIcon icon={faGithub} />;
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <section className="sm:p-10 p-5 text-zinc-400" data-aos="fade-up">
      <div className="basis-1/2 h-100">
        <div className="text-center text-[30px] text-purple-600 font-bold">
          Sample Works
        </div>
        <div className="grid grid-rows-2 grid-cols-1 mt-5 lg:grid-cols-2 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 place-items-center lg:gap-4 gap-5">
          <div className="bg-[#202024] flex flex-col h-auto w-auto p-3 rounded-md border shadow-lg border-zinc-700">
            <div>
              <img
                src={c2wadMockup}
                className="w-[162] h-[162] rounded object-cover"
                alt=""
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="bg-purple-600 py-1 px-3 rounded-full text-xs text-zinc-200">
                HTML
              </div>
              <div className="bg-gray-600 py-1 px-3 rounded-full text-xs text-zinc-200">
                CSS
              </div>
              <div className="bg-purple-600 py-1 px-3 rounded-full text-xs text-zinc-200">
                PHP
              </div>
              <div className="bg-gray-600 py-1 px-3 rounded-full text-xs text-zinc-200">
                MySQL
              </div>
              <div className="bg-purple-600 py-1 px-3 rounded-full text-xs text-zinc-200">
                JavaScript
              </div>
            </div>
            <div className="mt-4">
              <span className="text-lg font-bold">
                Cabagan 2-Wheels Angkas Delivery
              </span>
            </div>
            <div>
              <span className="text-sm text-center my-5">
                A web-based booking and delivery management system to enhance
                the efficiency of client order requests and delivery services at
                Cabagan 2 Wheels Angkas Delivery (C2WAD).
              </span>
            </div>
            <div className="text-center my-5">
              <a
                href="https://github.com/deFFataa/c2wad"
                target="_blank"
                className="py-2 px-5 text-sm bg-purple-600 rounded-full text-zinc-200 font-semibold mt-5 hover:bg-purple-700 hover:text-zinc-100"
              >
                <span className="me-1">{iconGithub}</span>Github
              </a>
            </div>
          </div>

          <div className="bg-[#202024] flex flex-col h-auto w-auto p-3 rounded-md border shadow-lg border-zinc-700">
            <div>
              <img
                src={PixelPositionsMockup}
                className="w-[162] h-[162] rounded object-cover"
                alt=""
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="bg-purple-600 py-1 px-3 rounded-full text-xs text-zinc-200">
                HTML
              </div>
              <div className="bg-gray-600 py-1 px-3 rounded-full text-xs text-zinc-200">
                Tailwind CSS
              </div>
              <div className="bg-purple-600 py-1 px-3 rounded-full text-xs text-zinc-200">
                Laravel
              </div>
              <div className="bg-gray-600 py-1 px-3 rounded-full text-xs text-zinc-200">
                MySQL
              </div>
              <div className="bg-purple-600 py-1 px-3 rounded-full text-xs text-zinc-200">
                JavaScript
              </div>
            </div>
            <div className="mt-4">
              <span className="text-lg font-bold">Pixel Positions</span>
            </div>
            <div>
              <span className="text-sm text-center">
                A personal web-based project that allows users to find and apply
                for jobs online. The app features user registration, profile
                creation, job listings, and search functionality.
              </span>
            </div>
            <div className="text-center my-5">
              <a
                href="https://github.com/deFFataa/pixel-positions"
                target="_blank"
                className="py-2 px-5 text-sm bg-purple-600 rounded-full text-zinc-200 font-semibold mt-5 hover:bg-purple-700 hover:text-zinc-100"
              >
                <span className="me-1">{iconGithub}</span>Github
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 mt-4 lg:mt-4 md:grid-cols-2 md:grid-rows-2 place-items-center lg:gap-4 gap-5">
          <div className="bg-[#202024] flex flex-col h-auto w-auto p-3 rounded-md border shadow-lg border-zinc-700">
            <div>
              <img
                src={gradSysMockup}
                className="w-[162] h-[162] rounded object-cover"
                alt=""
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="bg-purple-600 py-1 px-3 rounded-full text-xs text-zinc-200">
                HTML
              </div>
              <div className="bg-gray-600 py-1 px-3 rounded-full text-xs text-zinc-200">
                Tailwind CSS
              </div>
              <div className="bg-purple-600 py-1 px-3 rounded-full text-xs text-zinc-200">
                PHP
              </div>
              <div className="bg-gray-600 py-1 px-3 rounded-full text-xs text-zinc-200">
                MySQL
              </div>
              <div className="bg-purple-600 py-1 px-3 rounded-full text-xs text-zinc-200">
                JavaScript
              </div>
            </div>
            <div className="mt-4">
              <span className="text-lg font-bold">Grading System</span>
            </div>
            <div>
              <span className="text-sm text-center">
                A grading report system for Cabagan Riverside National High
                School. It helps the school from enrolling the students to their
                grade reports.
              </span>
            </div>
            <div className="text-center my-5">
              <a
                href="https://github.com/deFFataa/pixel-positions"
                target="_blank"
                className="py-2 px-5 text-sm bg-purple-600 rounded-full text-zinc-200 font-semibold mt-5 hover:bg-purple-700 hover:text-zinc-100"
              >
                <span className="me-1">{iconGithub}</span>Github
              </a>
            </div>
          </div>

          <div className="bg-[#202024] flex flex-col h-auto w-auto p-3 rounded-md border shadow-lg border-zinc-700">
            <div>
              <img
                src={BrainScanMockup}
                className="w-[162] h-[162] rounded object-cover"
                alt=""
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="bg-purple-600 py-1 px-3 rounded-full text-xs text-zinc-200">
                Flutter
              </div>
              <div className="bg-gray-600 py-1 px-3 rounded-full text-xs text-zinc-200">
                Material UI
              </div>
              <div className="bg-purple-600 py-1 px-3 rounded-full text-xs text-zinc-200">
                Figma
              </div>
            </div>
            <div className="mt-4">
              <span className="text-lg font-bold">BrainScan</span>
            </div>
            <div>
              <span className="text-sm text-center">
              A mobile application that scans MRI images to detect brain tumors. The app uses image processing and machine learning to analyze MRI scans.
              </span>
            </div>
            <div className="text-center my-5">
              <a
                href="https://github.com/deFFataa/pixel-positions"
                target="_blank"
                className="py-2 px-5 text-sm bg-purple-600 rounded-full text-zinc-200 font-semibold mt-5 hover:bg-purple-700 hover:text-zinc-100"
              >
                <span className="me-1">{iconGithub}</span>Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
