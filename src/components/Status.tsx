
import React from 'react'

function Status() {
  return (
    <section className={"flex max-md:flex-col items-center  "}>
        <div className="flex-[2] flex flex-col gap-2 bg-red-500">Les projets a cote</div>
        <div className="flex-1">
            <div className="work bg-green-500">Travail</div>
            <div className="contact bg-blue-500">Contacter moi</div>
        </div>
    </section>
  )
}

export default Status