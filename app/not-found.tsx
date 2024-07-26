import BackButton from '@/components/back-btn'
import { Button } from '@/components/ui/button'
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
          <Link href="/">
            <Button type='button'>
              На главную
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound