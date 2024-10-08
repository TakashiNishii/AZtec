import Image from 'next/image'
import React from 'react'

export const QuemSomos = () => {
  return (
    <div className='flex flex-col gap-6 justify-center mt-10'>
      <h2 className="text-4xl text-primary font-bold text-center">
        Quem Somos?
      </h2>

      <div className='flex flex-col md:flex-row justify-center'>
        <div className='flex flex-col gap-4 text-center p-2 lg:px-11 lg:w-1/2 lg:text-start'>
          <h3 className='text-2xl text-primary font-bold'>
            Estrutura
          </h3>
          <p
            className='text-lg font-semibold text-justify'
          >
            Fundada em 2013, com origem Paulista, a <span className='text-primary font-bold'>Aztec </span>
            é uma empresa sólida especializada em manutenção. Nosso foco principal é o investimento no capital humano,
            contando com uma equipe de engenheiros e técnicos altamente capacitados para solucionar os mais complexos problemas relacionados a válvulas e equipamentos correlatos.
          </p>
          <p
            className='text-lg font-semibold text-justify'
          >

            Promovemos um programa contínuo de desenvolvimento e aprimoramento da nossa equipe, garantindo qualidade e confiabilidade em nossos serviços.
          </p>

          <button className="hidden md:block mt-3 btn btn-primary btn-circle w-full text-secondary text-xl font-bold">Saiba Mais</button>
        </div>
        <div className='justify-center lg:flex md:flex-1'>
          <Image src={'/images/QuemSomos.png'} width={500} height={500} alt='Quem Somos' />
        </div>
        <button className="md:hidden mt-3 btn btn-primary btn-circle w-full text-secondary text-xl font-bold">Saiba Mais</button>
      </div>
    </div>
  )
}