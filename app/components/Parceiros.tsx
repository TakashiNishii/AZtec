import React from 'react'

const Parceiros = () => {
  return (
    <div
      className="hero min-h-[300px] bg-[url('/images/parceiros.png')] bg-cover bg-center"
    >
      <div className="hero-overlay bg-primary bg-opacity-75"></div>

      <div className="hero-content w-1/4 flex-col gap-2 text-neutral-content text-center">
        <h2 className="text-2xl text-secondary font-bold">
          Nossos Parceiros
        </h2>
        <div className='divider divider-secondary w-full my-0 min-w-md' />
        <p className='text-base text-secondary font-semibold'>
          Após anos no mercado, estabelecemos parcerias sólidas com empresas que depositam total confiança em nossos serviços, tais como:
        </p>
      </div>
    </div>
  )
}

export default Parceiros