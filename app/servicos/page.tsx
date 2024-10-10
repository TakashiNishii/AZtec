import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import ServicosInfo from '../components/ServicosContent/ServicosInfo'
import { Suspense } from 'react'


export default function ServicosPage() {
  return (
    <div className='flex flex-col gap-6 justify-center'>
      <Link href={"/"} className='flex items-center mt-24'>
        <ChevronLeftIcon className='w-10 h-10 text-primary' />
        <p className='text-primary font-semibold'>Voltar</p>
      </Link>
      <Suspense fallback={<div>Carregando informações...</div>}>

        <ServicosInfo />
      </Suspense>
    </div>
  )
}
