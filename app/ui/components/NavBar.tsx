import Image from 'next/image'
import React from 'react'

const NavBar = () => {
    return (
        <nav className="elementWidth">
            <Image
                src="/logo2_without_bkgr.svg"
                alt="Weby Team Logo"
                width={230}
                height={60}
            />
        </nav>
    )
}

export default NavBar