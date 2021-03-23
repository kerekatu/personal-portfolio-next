import styled from '@emotion/styled'
import { CONSTANTS } from '@/lib/constants'
import { useEffect, useState } from 'react'
import Button from '@/components/shared/button'
import Heading from '@/components/shared/heading'
import Container from '@/layouts/container'

const Hero = () => {
  const [heading, setHeading] = useState(CONSTANTS.jobTitle[0])

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (CONSTANTS.jobTitle.length - 1 <= i) {
        setHeading(CONSTANTS.jobTitle[0])
        i = 0

        return
      }

      i++
      setHeading(CONSTANTS.jobTitle[i])
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <HeroWrapper>
      <Container>
        <div className="hero-container" data-backdrop={heading}>
          <div className="hero-text">
            <Heading size="h1" weight="900">
              {heading} Developer
            </Heading>
            <Heading size="h4" weight="200">
              A JAMStack enthusiast building for the web in an effective and
              user-oriented way, specilizing in tools like React, Next.js and
              Express. Currently based in <strong>Aarhus, Denmark.</strong>
            </Heading>
            <div className="cta">
              <Button
                size="1.8rem"
                className="primary upper"
                padding="0 4rem"
                link="/projects"
              >
                Download resume
              </Button>
            </div>
          </div>
        </div>
        <div className="scroll">
          <i>
            <img src="/static/icons/chevron-down.svg" alt="Arrow Down" />
          </i>
        </div>
      </Container>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 14rem);
  justify-content: center;
  overflow: visible;

  .hero-container {
    padding: 0 4rem;
    margin-bottom: 4rem;

    &[data-backdrop]::before {
      content: attr(data-backdrop);
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      overflow: hidden;
      word-break: none;
      -webkit-text-stroke: var(--color-gray-3);
      -webkit-text-stroke-width: 1px;
      top: calc(50% - 4rem);
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 40rem;
      font-weight: var(--font-weight-3);
      z-index: -1;
      color: transparent;
      width: 100%;
      white-space: nowrap;
      animation: opacity 0.15s ease-in-out;
    }
  }

  .hero-text {
    text-align: center;
    margin-bottom: 12rem;

    & > h1 {
      margin-bottom: 1rem;
    }

    & > h4 {
      display: inline-block;
      font-weight: 700;
      margin-bottom: 4rem;
    }

    & .cta {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0 4rem;
    }
  }

  .scroll {
    position: relative;

    & i {
      position: absolute;
      top: -8rem;
      left: 50%;
      transform: translateX(-50%);
    }

    & i img {
      display: block;
      filter: invert(1);
      opacity: 0.4;
      height: 4rem;
      animation: moveUpDown 1.5s infinite;
    }
  }
`

export default Hero
