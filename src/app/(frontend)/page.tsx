import { Button } from '@heroui/button'

const Home = () => {
  return (
    <>
      <main className="h-screen w-full flex flex-col justify-center items-center gap-4">
        <h1 className="text-6xl font-bold tracking-wide">Landing Page!</h1>
        <Button color="primary">Click Me!</Button>
      </main>
    </>
  )
}

export default Home
