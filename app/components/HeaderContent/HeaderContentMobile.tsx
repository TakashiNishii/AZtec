"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeaderContentMobile = () => {
  const closeDrawer = () => {
    //  click on label to close drawer
    const drawerButton = document.getElementById('my-drawerButton')
    drawerButton?.click()
  }
  return (
    <nav className="drawer fixed bg-primary z-50 md:hidden">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content navbar">
        <div className="flex-none">
          <label htmlFor="my-drawer-4" className="btn btn-sm btn-square btn-ghost text-white p-0 drawer-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-full w-full stroke-current">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>

        <Link href={"/"} className='mx-auto shadow-sm'>
          <Image src="/images/LogoHero.png" alt="Logo AZtec" width="200" height="200" />
        </Link>
      </div>

      <div className="drawer-side z-40">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu gap-5 bg-primary bg-opacity-75 text-base-content min-h-full w-80 p-4">

          <label htmlFor="my-drawer-4" id='my-drawerButton' className="btn btn-sm btn-square font-bold text-white p-0 drawer-button z-50">
            X
          </label>

          <Link href={"/"} onClick={() => closeDrawer()} className='text-white text-lg font-bold hover:text-black'>Home</Link>
          <Link href={"/quem-somos"} onClick={() => closeDrawer()} className='text-white text-lg font-bold hover:text-black'>Quem Somos?</Link>
          <Link href={"/#servicos"} onClick={() => closeDrawer()} className='text-white text-lg font-bold hover:text-black'>Serviços</Link>
          <Link href={"/#parceiros"} onClick={() => closeDrawer()} className='text-white text-lg font-bold hover:text-black'>Parceiros</Link>
          <Link href={"/#onde-estamos"} onClick={() => closeDrawer()} className='text-white text-lg font-bold hover:text-black'>Onde Estamos</Link>
        </ul>
      </div>
    </nav>
  )
}

export default HeaderContentMobile