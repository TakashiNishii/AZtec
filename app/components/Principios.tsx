import Image from 'next/image'
import React from 'react'

export const Principios = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className="divider divider-primary text-4xl text-primary font-bold">Nossos Valores</div>

      <div className="flex flex-col md:flex-row gap-10 justify-between items-start p-2 lg:px-11">

        <div className="flex flex-col md:flex-row w-full md:w-2/5 justify-center items-center md:items-start gap-5">
          <div className='w-36 h-36'>
            <Image src="/images/missao.png" alt="icone-missão" width={256} height={256} />
          </div>
          <div className='flex flex-col flex-1 justify-center items-center md:justify-start md:items-start'>
            <h3 className="text-xl text-secondary font-bold bg-primary w-52 p-1 text-center">Missão</h3>
            <p className="text-neutral text-center text-lg md:text-start">
              Nosso principal objetivo é prover ás necessidades de nossos clientes, através de soluções integradas de qualidade, segurança e pontualidade.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full md:w-2/5 justify-center items-center md:items-start gap-5">
          <div className='w-36 h-36'>
            <Image src="/images/valor.png" alt="icone-valor" width={256} height={256} />
          </div>
          <div className='flex flex-col flex-1 justify-center items-center md:justify-start md:items-start'>
            <h3 className="text-xl text-secondary font-bold bg-primary w-52 p-1 text-center">Valores</h3>
            <ul className="text-neutral text-center text-lg md:text-start">
              <li>
                ▶︎ Respeito a vida, as pessoas e ao meio ambiente;
              </li>
              <li>
                ▶︎ Ética e transparência;
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="flex flex-col md:flex-row gap-10 justify-between items-center md:items-start p-2 lg:px-11">

        <div className="flex flex-col md:flex-row w-full md:w-2/5 justify-center items-center md:items-start gap-5">
          <div className='w-36 h-36'>
            <Image src="/images/visao.png" alt="icone-visão" width={256} height={256} />
          </div>
          <div className='flex flex-col flex-1 justify-center items-center md:justify-start md:items-start'>
            <h3 className="text-xl text-secondary font-bold bg-primary w-52 p-1 text-center">Visão</h3>
            <p className="text-neutral text-center text-lg md:text-start">
              Ser reconhecida como uma das excelências empresariais no Brasil no setor de manutenção agroindustrial.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full md:w-2/5 justify-center items-center md:items-start gap-5">
          <div className='w-36 h-36'>
            <Image src="/images/atuacao.png" alt="icone segmento de atuação" width={256} height={256} />
          </div>
          <div className='flex flex-col flex-1 justify-center items-center md:justify-start md:items-start'>
            <h3 className="text-xl text-secondary font-bold bg-primary w-52 p-1 text-center">Segmento de atuação</h3>
            <ul className="text-neutral text-center text-lg md:text-start">
              <li>
                ▶︎ Sucro-Energético;
              </li>
              <li>
                ▶︎ Processamento de Grãos;
              </li>
              <li>
                ▶︎ Frigoríficos;
              </li>
              <li>
                ▶︎ Celulose e Papel;
              </li>
              <li>
                ▶︎ Petroquímica;
              </li>
              <li>
                ▶︎ Mineração.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}