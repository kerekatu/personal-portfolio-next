import Hero from '@/components/hero'
import Layout from '@/layouts/layout'
import Projects from '@/components/projects'

export const getStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/kerekatu')
  const metadata = await response.json()

  return {
    props: {
      metadata,
    },
  }
}

const Home = ({ metadata }) => {
  return (
    <Layout isFullscreen>
      <Hero />
      <Projects metadata={metadata} />
    </Layout>
  )
}

export default Home
