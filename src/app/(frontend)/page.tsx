import { Button } from '@heroui/button'

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold tracking-wide">
        Welcome to the Landing Page!
      </h1>
      <p className="text-xl mt-4">
        Get started by editing{' '}
        <code className="bg-gray-200 p-1">src/app/frontend/page.tsx</code>
      </p>
      <Button color="primary">Click Me!</Button>
    </div>
  )
}
