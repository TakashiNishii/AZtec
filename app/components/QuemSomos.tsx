import Image from 'next/image'
import React from 'react'

const QuemSomos = () => {
  return (
    <div className='flex flex-col gap-6 justify-center mt-10'>
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
        <div className='hidden justify-end lg:flex md:flex-1'>

          <Image src={'/images/QuemSomos.png'} width={500} height={500} alt='Quem Somos' />
        </div>
      </div>
    </div>
  )
}

export default QuemSomos