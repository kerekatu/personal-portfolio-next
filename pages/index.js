import Heading from '@/components/shared/heading'
import Layout from '@/layouts/layout'
import styled from '@emotion/styled'

const Home = () => {
  return (
    <Layout>
      <HeroWrapper>
        <div className="hero-container">
          <Heading size="h2">Web Front-end Developer</Heading>
        </div>
      </HeroWrapper>
    </Layout>
  )
}

const HeroWrapper = styled.section`
  .hero-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    & > h2 {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        background: linear-gradient(
          to right,
          #e5e5e5 0%,
          rgba(0, 0, 0, 0) 100%
        );
        border-radius: var(--radius-full);
        top: 0;
        left: -3.4rem;
        width: 15rem;
        height: 6.6rem;
        z-index: -1;
      }
    }
  }
`

export default Home
