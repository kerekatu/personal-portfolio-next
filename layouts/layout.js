import Header from '@/layouts/header'
import Footer from '@/layouts/footer'
import styled from '@emotion/styled'
import Container from './container'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const Layout = ({ children, isFullscreen }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleShowOnScroll = () => {
      const currentScrollPos = window.pageYOffset

      setVisible(currentScrollPos > 200)
    }

    window.addEventListener('scroll', handleShowOnScroll)

    return () => window.removeEventListener('scroll', handleShowOnScroll)
  }, [visible])

  return (
    <LayoutWrapper ref={ref}>
      <Container>
        <Header />
        <main className={isFullscreen && 'full-layout'}>{children}</main>
        {/* <Footer /> */}
      </Container>
      <motion.button
        className="scroll-top"
        initial={{ opacity: 0, y: 200 }}
        animate={visible ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 200 }}
        transition={{
          delay: 0.2,
          x: { type: 'spring', stiffness: 100 },
          duration: 1
        }}
        onClick={() =>
          ref.current.scrollIntoView({
            block: 'start'
          })
        }
      >
        <i>
          <img src="/static/icons/chevron-up.svg" alt="Arrow Up" />
        </i>
      </motion.button>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  & > div {
    grid-template-rows: 14rem 1fr 64rem;
  }

  header,
  main,
  footer {
    padding: 0 4rem;
  }

  header {
    grid-row: 1 / 2;
  }

  main {
    grid-row: 2 / 3;
    width: 100%;
    max-width: 100rem;
    min-height: calc(100vh - 14rem);
    margin: 0 auto;
  }

  footer {
    grid-row: 3 / -1;
  }

  .scroll-top {
    position: fixed;
    right: 4rem;
    bottom: 4rem;
    height: 5rem;
    width: 5rem;
    border-radius: var(--radius-full);
    background-color: var(--color-gray-2);
    border: none;
    transition: opacity var(--transition);

    & i img {
      filter: invert(1);
      height: 3.2rem;
    }
  }
`

export default Layout
