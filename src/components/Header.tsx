import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
   <header className='flex items-center gap-2'>
    <Link href="/" className='rounded-full flex md:w-[14%] max-sm:bg-yellow-500  justify-between items-center'>
    <Image src={"/assets/images/logo1.png"} alt="alt" width={50} height={20} className='rounded-full'/>
    <p className='font-extrabold text-3xl sm:text-xl max-lg:hidden '>CodeCraft</p>
    </Link>

    <div className="ml-auto "> </div>
    <div className=" w-[30%] flex justify-between">

    <Link href="/" className='text-primary'>Acceuil</Link>
    <Link href="/projets" className='text-primary hover:border-b-2  border-white' >Mes projet</Link>
    <Link href="/blog" className='text-primary'>Blog</Link>
    <Link href="#" className='text-primary'>Contact</Link>
    </div>
   </header>
  )
}

export default Header