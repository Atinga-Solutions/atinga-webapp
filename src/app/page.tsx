import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
    <div className='items-center gap-12 flex flex-col  w-full min-h-screen justify-center'>
      <h1 className='text-4xl'>Atinga Solutions</h1>

      <Button className='w-32'>
        Home
      </Button>
      <ModeToggle />
    </div>
  )
}

export default Home
