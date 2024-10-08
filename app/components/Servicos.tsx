"use client"
import { useState } from 'react'
import { servicos, } from './data/servicos'
import classNames from 'classnames'

const Servicos = () => {
  const [selectedService, setSelectedService] = useState(servicos[0])
  // const servicesContent = servicosData
  // console.log(selectedService)
  return (
    <div className='w-full p-2 md:px-11'>
      <div className='bg-primary w-full rounded-3xl flex flex-col gap-4 py-8'>
        <h2 className='text-center text-4xl text-secondary font-bold'>
          Serviços
        </h2>
        <div className='flex flex-row flex-wrap max-w-full gap-10 justify-center'>
          {servicos.map((servico) => (
            <button
              key={servico.id}
              className={classNames(
                "badge badge-lg text-lg font-semibold p-4 min-w-[250px]",
                selectedService.id === servico.id ? "badge-secondary text-primary" : " badge-outline badge-secondary text-primary hover:bg-secondary hover:text-primary"
              )}
              onClick={() => setSelectedService(servico)}
            >
              {servico.title}
            </button>
          ))}
        </div>

        {/* <div className='w-3/4 bg-secondary'>
          {servicesContent.find((service) => service.id === selectedService.id)}
        </div> */}
      </div>

    </div>
  )
}

export default Servicos