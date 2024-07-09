import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <Image
            src="/logo2_without_bkgr.svg"
            alt="Weby Team Logo"
            width={230}
            height={60}
        />
    )
}

export default Logo