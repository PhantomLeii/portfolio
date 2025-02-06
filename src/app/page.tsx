'use client'

import { Button } from '@heroui/button'

export default function Home() {
  return (
    <>
      <h1 className='text-large'>Home</h1>
      <h1 className='text-medium'>Home</h1>
      <h1 className='text-small'>Home</h1>
      <h1 className='text-tiny'>Home</h1>
      <p className=''>Welcome to the home page</p>
      <Button color='primary'>Click Me!</Button>
      <Button variant='ghost'>Click Me!</Button>
    </>
  )
}
