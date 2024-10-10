"use client"
import { servicos, } from './data/servicos'
import Image from 'next/image'
import ServicosCard from './ServicosContent/ServicosCard'
import animationData from "../../public/lotties/Gesto.json"
import Lottie from "react-lottie"
import { useKeenSlider } from 'keen-slider/react'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Servicos = () => {

  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1200px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 1400px)": {
        slides: { perView: 4, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  })

  return (
    <div className='w-full p-2 md:px-11' id='servicos'>
      <div className='bg-primary w-full rounded-3xl flex flex-col gap-4 py-8'>
        <h2 className='text-center text-4xl text-secondary font-bold'>
          Áreas de atuação
        </h2>
        <div className="carousel rounded-box gap-2 w-[99%] self-end">

        </div>
        <div ref={ref} className="keen-slider cursor-grab active:cursor-grabbing">
          {servicos.map((servico) => (
            <div key={servico.id} className="keen-slider__slide ">
              <ServicosCard
                key={servico.id}
                id={servico.id}
                image={servico.image[0]}
                title={servico.title}
              />
            </div>
          ))}
        </div>
        <Lottie
          options={defaultOptions}
          height={100}
          width={200}
        />
      </div>
      <div className='mt-10 flex flex-col md:flex-row justify-center items-center md:gap-20 '>
        <div className='flex-1 md:max-w-[25%]'>
          <Image src={"/images/24horas.png"} alt={"24 horas plantão!"} width={500} height={500} />
        </div>
        <div className='flex-1 md:max-w-[30%] md:text-lg font-semibold'>
          Para garantir um atendimento eficiente e oportuno, contamos com equipes de plantão disponíveis
          <span className='text-lg font-bold text-primary'> 24 horas por dia </span>, prontas para atender às necessidades dos nossos clientes,
          <span className='text-lg font-bold text-primary'> independentemente do dia ou da hora.</span>
          <div className='divider divider-primary  w-full' />
        </div>
      </div>
    </div>
  )
}

export default Servicos