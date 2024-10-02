import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <div
      className="hero max-h-[500px] bg-[url('/images/imageHero.png')] bg-cover bg-center"
    >
      <div className="hero-overlay bg-primary bg-opacity-75"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md flex flex-col items-center gap-5">
          <Image src="/images/LogoHero.png" width={360} height={150} alt="logo" />
          <h2 className="text-2xl text-secondary font-bold">
            Soluções integradas de engenharia
            e manutenção agroindustrial
          </h2>
          <button className="mt-3 btn btn-secondary btn-circle w-full text-primary text-xl font-bold">Saiba Mais</button>
        </div>
      </div>
    </div>
  )
}
