import React from 'react'
import ParceirosList from './ParceirosContent/ParceirosList'

const Parceiros = () => {
  return (
    <>
      <div
        className="hero min-h-[300px] bg-[url('/images/parceiros.png')] bg-cover bg-center"
      >
        <div className="hero-overlay bg-primary bg-opacity-75"></div>

        <div className="hero-content w-full md:w-1/4 flex-col gap-2 text-neutral-content text-center">
          <h2 className="text-2xl text-secondary font-bold">
            Nossos Parceiros
          </h2>
          <div className='divider divider-secondary w-full my-0 md:min-w-md' />
          <p className='text-base text-secondary font-semibold'>
            Após anos no mercado, estabelecemos parcerias sólidas com empresas que depositam total confiança em nossos serviços, tais como:
          </p>
        </div>
      </div>
      <ParceirosList />
    </>

  )
}

export default Parceiros