import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const QuemSomosComplete = () => {
  return (
    <div className='flex flex-col gap-6 justify-center'>
      <Link href={"/#quem-somos"} className='flex items-center mt-24'>
        <ChevronLeftIcon className='w-10 h-10 text-primary' />
        <p className='text-primary font-semibold'>Voltar</p>
      </Link>
      <h2 className="text-4xl text-primary font-bold text-center">
        Quem Somos?
      </h2>

      <div className='flex flex-row justify-between'>
        <div className='flex flex-col gap-4 text-center p-2 lg:px-11 lg:w-1/2 lg:text-start'>
          <h3 className='text-2xl text-primary font-bold'>
            Estrutura
          </h3>
          <p
            className='text-lg font-semibold'
          >
            Fundada em 2013, com origem Paulista, a <span className='text-primary font-bold'>Aztec </span>
            é uma empresa sólida especializada em manutenção. Nosso foco principal é o investimento no capital humano,
            contando com uma equipe de engenheiros e técnicos altamente capacitados para solucionar os mais complexos problemas relacionados a válvulas e equipamentos correlatos.
            Promovemos um programa contínuo de desenvolvimento e aprimoramento da nossa equipe, garantindo qualidade e confiabilidade em nossos serviços.
          </p>

          <h3 className='text-xl text-primary font-bold'>
            Nossas especialidades incluem:
          </h3>
          <ul className='text-lg font-semibold text-start'>
            <li>
              ▶︎ Manutenção em válvulas de controle;
            </li>
            <li>
              ▶︎ Manutenção em válvulas de segurança/alívio (conforme NR-13);
            </li>
            <li>
              ▶︎ Manutenção em válvulas manuais;
            </li>
            <li>
              ▶︎ Manutenção em sopradores de fuligem fixos/retráteis;
            </li>
            <li>
              ▶︎ Termografia e Manutenção;
            </li>
            <li>
              ▶︎ Manutenção em bombas centrífugas;
            </li>
            <li>
              ▶︎ Serviço de usinagem (De precisão, leve, média e pesada);
            </li>
          </ul>

          <h3 className='text-xl text-primary font-bold'>
            Também fazemos inspeções e laudos técnicos conforme NR-11, NR-12, NR-13 E NR-18 para:
          </h3>
          <ul className='text-lg font-semibold text-start'>
            <li>
              ▶︎ Caldeiras e vasos de pressão;
            </li>
            <li>
              ▶︎ Código ASME e VIII;
            </li>
            <li>
              ▶︎ ABNT NBR 12177 1/2 (Caldeiras Flomotubulares e Aquatubulares);
            </li>
            <li>
              ▶︎ ABNT NBR 15417 (Vasos de pressão).
            </li>
          </ul>
        </div>
        <div className='hidden items-center justify-between gap-2 lg:flex lg:flex-col md:flex-1'>
          <Image src={'/images/imageHero.png'} width={500} height={300} alt='Quem Somos' className='border-4 border-primary rounded-lg shadow-2xl max-h-[295px]' />
          <Image src={'/images/QuemSomos.png'} width={500} height={500} alt='Quem Somos' />
        </div>
      </div>
    </div>
  )
}