import Link from 'next/link'
import { Button } from '@heroui/button'

const getData = async () => {
  const hero = {
    heading: 'Software & DevOps Engineering Enthusiast',
    subHeading: "I'm Lebogang Phoshoko.",
    description:
      'I am a passionate BSc (Mathematics & Computer Science) student at UNISA.',
    cta: [
      {
        label: 'See My Work',
        href: '/projects',
      },
      {
        label: 'My Experience',
        href: '/experience',
      },
    ],
  }

  return {
    hero,
  }
}

const Home = async () => {
  const { hero } = await getData()

  return (
    <>
      <main className="min-h-[calc(100vh-64px)] w-full flex flex-col justify-center items-start gap-2">
        <h1>{hero.heading}</h1>
        <h2 className="mt-4">{hero.subHeading}</h2>
        <p className="mt-4">{hero.description}</p>

        <div className="border-t border-default-300 py-4 max-w-7xl mr-auto mt-4 flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 w-full">
          {hero.cta.map((item) => (
            <Button
              color="primary"
              as={Link}
              size="lg"
              key={item.href}
              href={item.href}
              className="w-full md:w-auto"
            >
              <span className="font-bold">{item.label}</span>
            </Button>
          ))}
        </div>
      </main>
    </>
  )
}

export default Home
