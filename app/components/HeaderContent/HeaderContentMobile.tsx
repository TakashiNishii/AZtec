import Image from 'next/image'
import React from 'react'

const HeaderContentMobile = () => {
  return (
    <nav className="navbar md:hidden">
      <div className="flex-none">
        <button className="btn btn-sm btn-square btn-ghost text-white p-0">
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
        </button>
      </div>

      <Image src="/images/Logo.png" alt="Logo AZtec" width="125" height="125" className='mx-auto' />
    </nav>
  )
}

export default HeaderContentMobile