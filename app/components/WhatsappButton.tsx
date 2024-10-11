import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhatsappButton = () => {
  return (
    <div className='btn btn-circle border-0 bg-green-600 fixed bottom-4 right-4 hover:bg-green-600'>
      <Link href='https://wa.me/5516997799898' target='_blank' rel='noreferrer' className='animate-pulse '>
        <Image src='/icons/whatsapp.png' alt='Whatsapp' width={30} height={30} />
      </Link>
    </div>
  )
}

export default WhatsappButton