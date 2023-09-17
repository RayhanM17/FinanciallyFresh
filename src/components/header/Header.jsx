import Link from 'next/link'
import { useState } from 'react'
import { FaUser, FaBars, FaTimes } from 'react-icons/fa'
import Styles from '../../styles/Home.module.css'
import logo from "../../assets/saitemap.svg";
import Image from 'next/image';


const Header = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <header tabIndex={0} className="relative flex w-full justify-between items-center py-10 px-8 flex-wrap">
      <div className='flex items-center justify-between lg:w-auto w-full'>

        <Image src={logo} alt="Picture of the author"></Image>


        <button className='lg:hidden block btn-ghost rounded-lg' onClick={() => setShowNav(!showNav)}>
          {showNav ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
        </button>
      </div>


      <ul className={`lg:flex ${showNav ? 'flex' : 'hidden'} lg:justify-center lg:flex-row lg:w-auto w-full flex-col items-center font-['Poppins'] uppercase`}>
        <li className='xl:mr-32 lg:mr-12 lg:mt-auto mt-6'>
          <Link
            href='/howtouse'
            className="font-bold text-sm relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-secondary before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"
          >
            how to use
          </Link>
        </li>
        <li className='xl:mr-32 lg:mr-12 lg:mt-auto mt-6'>
          <Link
            href='/howtouse'
            className="font-bold text-sm relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-secondary before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"
          >
            Examples
          </Link>
        </li>
        <li className='lg:mt-auto mt-6'>
          <Link
            href='/howtouse'
            className="font-bold text-sm relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-secondary before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"
          >
            Pricing
          </Link>
        </li>
        <li className='lg:mt-auto mt-6 lg:hidden block'>
          <Link
            href='/login'
            className="font-bold text-sm relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-accent before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"
          >
            Login
          </Link>
        </li>
      </ul>

      <Link href='/login' className="btn border-none px-10 bg-[#14b9ff] text-[#F0F3F5] hover:text-[#D9D9D9]">
        Login
      </Link>

    </header>
  );
}

export default Header;