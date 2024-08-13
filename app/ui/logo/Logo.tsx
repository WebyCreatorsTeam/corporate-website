import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href="/" title="מעבר לעמוד הבית">
            <Image
                src="/logo2_without_bkgr.svg"
                alt="Weby Team Logo"
                width={230}
                height={60}
            />
        </Link>
    )
}

export default Logo