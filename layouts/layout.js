import Header from '@/layouts/header'
import Footer from '@/layouts/footer'
import styled from '@emotion/styled'
import Container from './container'

const Layout = ({ children, isFullscreen }) => {
  return (
    <LayoutWrapper>
      <Container>
        <Header />
        <main className={isFullscreen && 'full-layout'}>{children}</main>
        <Footer />
      </Container>
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
`

export default Layout
