import BackButton from '@/components/back-btn'
import { SquareDashedMousePointer } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {

  return (
    <div className='flex flex-col items-center pt-[30vh] w-full h-full'>
      <div className='mb-3'>
        <SquareDashedMousePointer className='w-48 h-48' strokeWidth="1"/>
      </div>
      <div className='flex flex-col gap-2 text-center items-center'>
        <h1 className='text-3xl'>
          Ой!
        </h1>
        <h2 className='text-lg'>
          Такой страницы не существует
        </h2>
        <div className='flex gap-3'>
          <BackButton/>
          <Link href="/" className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'>
            На главную
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound