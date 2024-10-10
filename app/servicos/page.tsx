"use client"
import { useSearchParams } from 'next/navigation'
import { servicos } from '../components/data/servicos'
import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'


export default function ServicosPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const servicoInfo = servicos.filter(servico => servico.id === Number(id))[0]

  const descriptionWithFormatting = servicoInfo.description
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Para negrito
    .replace(/\n/g, '<br/>'); // Para quebras de linha
  return (
    <div className='flex flex-col gap-6 justify-center'>
      <Link href={"/"} className='flex items-center'>
        <ChevronLeftIcon className='w-10 h-10 text-primary' />
        <p className='text-primary font-semibold'>Voltar</p>
      </Link>
      <h2 className="text-4xl text-primary font-bold text-center mt-10">
        {servicoInfo.title}
      </h2>
      {servicoInfo.subtitle && (
        <h3 className='text-2xl text-primary font-bold text-center'>
          {servicoInfo.subtitle}
        </h3>)
      }

      <span
        className='text-lg font-semibold text-justify px-4'
        dangerouslySetInnerHTML={{ __html: descriptionWithFormatting }}
      />

      {servicoInfo.list && <h3 className='text-xl text-primary font-bold text-start px-4'>
        Vantagens
      </h3>}
      {servicoInfo.list && servicoInfo.list.map((item, index) => (
        <ul key={index} className='text-lg font-semibold text-start px-4'>
          <li>
            {item}
          </li>
        </ul>
      ))}

      <div className='flex flex-row flex-wrap justify-center my-2 gap-2'>
        {servicoInfo.image.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={servicoInfo.title}
            width={200}
            height={150}
            className='w-full md:w-1/4 max-w-[300px] rounded border-4 border-primary'
          />
        ))}
      </div>
    </div>
  )
}
