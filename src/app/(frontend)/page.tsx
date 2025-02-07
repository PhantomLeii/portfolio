import React from 'react'
import { Button } from '@heroui/button'

export default function Home() {
  return (
    <>
      <main className='h-screen flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold'>Home</h1>
        <p className='text-lg'>Welcome to the home page</p>
        <Button color='primary'>Click Me!</Button>
      </main>
    </>
  )
}
