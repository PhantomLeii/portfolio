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
        <h2>{hero.subHeading}</h2>
        <p className="text-xl md:text-2xl tracking-tight mt-8">
          {hero.description}
        </p>
      </main>
    </>
  )
}

export default Home
