"use client"
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Button from '../button/Button'
import Styles from './header.module.sass'
import Image from 'next/image';


const Header = () => {
    const [showNav, setShowNav] = useState(false);
  
    // Define your navigation items as an array of objects
    const navItems = [
      { text: 'how to use', link: '/howtouse' },
      { text: 'Examples', link: '/examples' },
      { text: 'Pricing', link: '/pricing' },
      { text: 'Login', link: '/login', hidden: true }, // Hidden item
    ];
  
    return (
      <header tabIndex={0} className={Styles['custom-header']}>
        <div className={Styles['custom-header-left']}>
          <Image 
            src="/logo.png" 
            alt="Picture of the author"
            className={Styles['custom-header-logo']}
            height="55"
            width="259"
          />
          <button className={Styles['custom-nav-button']} onClick={() => setShowNav(!showNav)}>
            {showNav ? <FaTimes className={Styles['custom-nav-button-icon']} /> : <FaBars className={Styles['custom-nav-button-icon']} />}
          </button>
        </div>
  
        <ul className={`${Styles['custom-nav-list']} ${showNav ? Styles['custom-nav-show'] : Styles['custom-nav-hide']}`}>
          {navItems.map((item, index) => (
            <li key={index} className={Styles['custom-nav-item']}>
              {!item.hidden ? (
                <Link href={item.link} className={Styles['custom-nav-link']}>
                  {item.text}
                </Link>
              ) : null}
            </li>
          ))}
        </ul>
  
        <div className={showNav ? Styles['custom-nav-show'] : Styles['custom-nav-hide']}>
            <Button href='/contact' icon="ARROW_RIGHT">
                Contact
            </Button>
        </div>
      </header>
    );
}
  
export default Header;