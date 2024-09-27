"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navigation= [
  {
    id:1,
    path:'/',
    title:"Acceuil"
  },
  {
    id:2,
    path:'/projets',
    title:"Mes projets"
  },
  {
    id:3,
    path:'/blog',
    title:"Blog"
  },
  {
    id:4,
    path:'#',
    title:"Contact"
  },
]
function Header() {
  const currentPath = usePathname();
  const isActivate = (path:string) => (currentPath === path ? "border-b-3 shadow-sl shadow-primary/10 bg-primary/15 text-primary  rounded-md " : "")
  
  
  return (
   <header className='flex items-center gap-2'>
    <Link href="/" className='rounded-full flex md:w-[14%] max-sm:bg-yellow-500  justify-between items-center'>
    <Image src={"/assets/images/logo1.png"} alt="alt" width={50} height={20} className='rounded-full'/>
    <p className='font-extrabold text-3xl sm:text-xl max-lg:hidden '>Code<span className=' text-primary'>Craft</span></p>
    </Link>

    <div className="ml-auto "> </div>
    <div className="  flex justify-between">
<div className=" flex justify-between gap-5">

{
  navigation.map((nav,index)=>(

    <Link href={nav.path}  key={index} className={cn(`${'text-primary  border-primary transition-colors duration-500 p-2  '}  ${isActivate(nav.path)}`)}  >{nav.title}</Link>
  ))
}
</div>
    {/* <Link href="/" className='text-primary'>Acceuil</Link>
    <Link href="/blog"  className={cn(`${'text-primary border-b-2  border-blue-700'} ${({ isActive }:{isActive:boolean}) => (isActive ? "bg-red-500" : "")} `)}>Blog</Link>
    <Link href="#" className='text-primary' >Contact</Link> */}
    </div>
   </header>
  )
}

export default Header