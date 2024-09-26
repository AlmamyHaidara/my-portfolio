import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
   <header className='flex items-center gap-2'>
    <Link href="/" className='rounded-full'>
    <Image src={"/assets/images/logo1.png"} alt="alt" width={50} height={20} className='rounded-full'/>
    </Link>

    <div className="ml-auto"> </div>
    <Link href="/" className='text-primary'>Acceuil</Link>
    <Link href="/projets" className='text-primary'>Mes projet</Link>
    <Link href="/blog" className='text-primary'>Blog</Link>
   </header>
  )
}

export default Header