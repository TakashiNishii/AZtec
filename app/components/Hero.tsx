import React from 'react'

export const Hero = () => {
  return (
    <div
      className="hero min-h-[calc(100dvh-10dvh)] bg-[url('/images/imageHero.png')] bg-cover bg-center"
    >
      <div className="hero-overlay bg-primary bg-opacity-75"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md flex flex-col items-center gap-5">
          <h2 className="text-2xl text-secondary font-bold">
            {`Soluções integradas de engenharia
            e 
            Manutenção agroindustrial`}
          </h2>
        </div>
      </div>
    </div>
  )
}
