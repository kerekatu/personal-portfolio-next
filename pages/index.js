import Hero from '@/components/hero'
import Layout from '@/layouts/layout'
import Projects from '@/components/projects'

export const getStaticProps = async () => {
  const metadata = await fetch(
    'https://api.github.com/users/kerekatu'
  ).then((result) => result.json())
  const projects = await fetch(
    'https://api.github.com/users/kerekatu/repos'
  ).then((result) => result.json())

  return {
    props: {
      metadata,
      projects
    }
  }
}

const Home = ({ metadata, projects }) => {
  return (
    <Layout isFullscreen>
      <Hero />
      <Projects metadata={metadata} projects={projects} />
    </Layout>
  )
}

export default Home
