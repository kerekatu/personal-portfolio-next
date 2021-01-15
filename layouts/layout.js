import Header from '@/layouts/header'
import Footer from '@/layouts/footer'
import styled from '@emotion/styled'
import Container from './container'

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Container>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  & > div {
    grid-template-rows: 12rem 1fr 64rem;
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

    display: grid;
    width: 100%;
    grid-template-columns: 1fr min(80em, 100%) 1fr;
    max-width: 96rem;
    margin: 0 auto;
  }

  footer {
    grid-row: 3 / -1;
  }
`

export default Layout
