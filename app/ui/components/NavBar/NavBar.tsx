"use client";

import { FC, useState } from 'react'
import { navigationLinks } from './navigationLinks'
import Logo from '../../logo/Logo';
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link';
import Menu from '../../icons/Menu';
import Close from '../../icons/Close';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import { NavHashLink } from 'react-router-hash-link';

const NavBar: FC = () => {
  const desktop = useMediaQuery({ query: '(min-width: 768px)' })
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header>
      <nav className='elementWidth'>
        {/* {!desktop && ( */}
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
          >{toggleMenu ? <Close /> : <Menu />}</button>
        {/* )} */}
        
        {/* {!desktop && (
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
          >{toggleMenu ? <Close /> : <Menu />}</button>
        )} */}
        {/* {(toggleMenu || desktop) && ( */}
          <div className='navigation'>
            <div className="navigation__links">
              {navigationLinks.map((nav, ind) => (
                <Link
                  key={ind}
                  href={nav.link}
                  onClick={() => setToggleMenu(false)}
                >{nav.title}</Link>
              ))}
            </div>
            <div className="navigation__contact">
              <Link
                href="/contact"
              >
                דברו איתנו
              </Link>
            </div>
          </div>
          {/* )} */}
          <Logo />
          
      </nav>
    </header >
  )
}

export default NavBar

// /*

//       <div className='navigation'>
//         {desktop ? <> {/* desktop */}
//         <div className='navigation__logo'>
//         <Logo />
//       </div>
//       <div className='navigation__links'>
//         {navigationLinks.map((nav, ind) => (
//           <Link
//             key={ind}
//             href={nav.link}
//           >{nav.title}</Link>
//         ))}
//         {/* <Link href="/blog">בלוג</Link> */}
//       </div>
//       <div className='navigation__contact'>
//         <Link
//           href="/contact"
//         >
//           דברו איתנו
//         </Link>
//       </div>
//     </>
//       :


//       <> {/* mobile */}
//         <div className='menu-btn' onClick={() => setToggleMenu(!toggleMenu)}>{toggleMenu ?
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
//           </svg>
//           :
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//           </svg>
//         }</div>
//         {(toggleMenu) && (
//           <div className='navigation__menu'>
//             <div className='navigation__links'>
//               {navigationLinks.map((nav, ind) => (
//                 <Link
//                   key={ind}
//                   href={nav.link}
//                   onClick={() => {
//                     setToggleMenu(!toggleMenu)
//                   }}
//                 >{nav.title}</Link>
//               ))}
//               {/* <NavHashLink
//                 to="/blog#"
//                 onClick={() => {
//                   setToggleMenu(!toggleMenu)
//                 }}
//               >בלוג</NavHashLink> */}
//             </div>
//             <div className='navigation__contact'>
//               {/* <NavHashLink
//                 to="#contact"
//                 smooth
//                 onClick={() => setToggleMenu(!toggleMenu)}
//               >
//                 דברו
//               </NavHashLink> */}
//             </div>
//           </div>)}
//         <div className='navigation__logo' onClick={() => setToggleMenu(false)}>
//           <Logo />
//         </div>
//       </>}
//   </div>
// */