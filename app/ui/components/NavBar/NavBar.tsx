"use client";

import { FC, useEffect, useState,useRef  } from 'react'
import { navigationLinks } from './navigationLinks'
import Logo from '../../logo/Logo';
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link';
import Close from './Close';
import Menu from './Menu';

const NavBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const desktop = useMediaQuery({ query: '(min-width: 1024px)' })
  const ref: any = useRef(null);

  useEffect(() => {
    if (desktop) {
      setIsOpen(false)
    }
  }, [desktop])

  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (!ref.current?.contains(event.target)) {
        setIsOpen(false)
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);


  return (
    <header>
      <nav className='elementWidth'>
        <button aria-label='menu' title="menu" className='block lg:hidden' onClick={() => setIsOpen(!isOpen)}>{isOpen ? <Close /> : <Menu />}</button>
        <div className="navigation hidden lg:flex">
          <div className="navigation__logo">
            <Logo />
          </div>
          <div className={`navigation__links ${isOpen ? 'flex' : 'hidden'} lg:flex`} ref={ref}>
            {navigationLinks.map((nav, ind) => (
              <Link
                key={ind}
                href={nav.link}
                onClick={() => setIsOpen(false)}
              >{nav.title}</Link>
            ))}
            {/* mobile */}
            <div className='block lg:hidden navigation__contact'>
              <Link href="tel:+972515183320">
                051-518-3320
              </Link>
            </div>
          </div>
        </div>
        {/* descktop */}
        <div className='hidden lg:block navigation__contact'>
          <Link href="tel:+972515183320" >
            051-518-3320
          </Link>
        </div>
      </nav>
    </header >
  )
}

export default NavBar