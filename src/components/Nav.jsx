import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import {navLinks} from '../constants/';

const Nav = () => {
  return (
    <header className="padding-x py-6 z-10 w-full bg-zinc-800 shadow-md fixed">
        <nav className="flex justify-between max-container items-center">
            <div className="font-extrabold text-slate-300">PORTFOLIO</div>
            <ul className="flex-1 flex justify-center items-center gap-2 max-lg:hidden">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href}
                        className="leading-normal text-[14px] text-zinc-300 max-lg:hidden hover:bg-zinc-700 py-2 px-4 rounded-md hover:text-white"
                        >
                        {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="hidden max-lg:block">
                <img 
                src={hamburger} 
                alt="Hamburger"
                width={25}
                height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav