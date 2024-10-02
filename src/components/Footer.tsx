"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Footer() {
 
  
  return (
   <footer className='bg-muted5 p-5 h-40'>
        <p className="text-primary text-xl font-semibold">
          Contacter moi
        </p>
        
        <p className="text-muted-foreground text-sm ">
          Trouvez moi sur les reseaux sociaux ou envoie moi un mail
        </p>

        <div className="flex">
          <span>
            
          </span>
        </div>
   </footer>
  )
}

export default Footer