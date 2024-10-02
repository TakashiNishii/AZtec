import Image from 'next/image'
import React from 'react'

const HeaderContent = () => {
  return (
    <div className='hidden md:flex md:flex-row'>
      <Image src="/images/Logo.png" alt="Logo AZtec" width="150" height="150" />
      <nav className="flex w-full text-secondary font-semibold justify-center items-center lg:mr-36">
        <ul className="flex flex-row">
          <li className="p-2">Home</li>
          <li className="p-2">Quem Somos?</li>
          <li className="p-2">Príncipios</li>
          <li className="p-2">Serviços</li>
          <li className="p-2">Parceiros</li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderContent