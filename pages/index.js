import Button from '@/components/shared/button'
import Heading from '@/components/shared/heading'
import Layout from '@/layouts/layout'
import styled from '@emotion/styled'
import Link from 'next/link'

const Home = () => {
  return (
    <Layout>
      <HeroWrapper>
        <div className="hero-container">
          <div className="hero-text">
            <Heading size="h2">Web Front-end Developer</Heading>
            <Heading size="h5" weight="200">
              Hey, my name is Konrad and I specialize in building excellent
              customer-focused websites. I am currently based in{' '}
              <p>Bydgoszcz, Poland.</p>
            </Heading>
            <Button size="1.8rem" className="primary upper" padding="0 4rem">
              See my projects &#8594;
            </Button>
          </div>
        </div>
        <div className="profiles">
          <Link href="https://github.com/kerekatu">
            <a title="Open my Github Profile">Github</a>
          </Link>
          /
          <Link href="https://linkedin.com/konradtrosa">
            <a title="Open my Linkedin Profile">Linkedin</a>
          </Link>
          /
          <Link href="/">
            <a title="Open CV">CV</a>
          </Link>
        </div>
      </HeroWrapper>
    </Layout>
  )
}

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  .profiles {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 4rem;
    margin-top: 14rem;

    a {
      font-size: 1.8rem;
      text-decoration: underline;
    }
  }

  .hero-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .hero-text {
    & > h2 {
      position: relative;
      margin-bottom: 3rem;

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

    p {
      display: inline-block;
      font-weight: 700;
      margin-bottom: 5rem;
    }
  }
`

export default Home
