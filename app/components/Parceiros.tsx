import React from 'react'
import ParceirosList from './ParceirosContent/ParceirosList'
import ParceirosListMobile from './ParceirosContent/ParceirosListMobile'

const Parceiros = () => {
  return (
    <>
      <div
        className="hero min-h-[200px] bg-[url('/images/parceiros.png')] bg-cover bg-center"
        id='parceiros'
      >
        <div className="hero-overlay bg-primary bg-opacity-75"></div>

        <div className="hero-content w-full md:w-1/2 flex-col gap-2 text-neutral-content text-center">
          <h2 className="text-2xl text-secondary font-bold">
            Nossos Parceiros
          </h2>
          <div className='divider divider-secondary w-full my-0 md:min-w-md' />
          <p className='text-base text-secondary font-semibold'>
            Após anos no mercado, estabelecemos parcerias sólidas com empresas que depositam total confiança em nossos serviços, tais como:
          </p>
        </div>
      </div>
      <ParceirosListMobile />
      <ParceirosList />
    </>

  )
}

export default Parceiros