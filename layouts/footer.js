import styled from '@emotion/styled'
import Container from '@/layouts/container'
import Heading from '@/components/shared/heading'
import Button from '@/components/shared/button'

const Footer = () => {
  return (
    <FooterWrapper className="full-layout">
      <Container>
        <div className="info">
          <Heading size="h2">Get in Touch.</Heading>
          <div className="info-subtitle">
            <Heading size="h5">
              I’m currently looking for full-time job opportunities.
            </Heading>
            <Heading size="h5" weight="400">
              My inbox is always open, so feel free to contact me and I will do
              my best to get back to you!
            </Heading>
          </div>

          <Button className="primary" size="2.4rem">
            Contact me
          </Button>
        </div>
        <div className="copyright">
          <Heading size="h5">Konrad Rosa @ {new Date().getFullYear()}</Heading>
        </div>
      </Container>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  color: var(--color-white);
  background-color: var(--color-gray-3);

  & > div {
    padding: 12rem 0 4rem 0;
    text-align: center;
    justify-items: center;
    height: 100%;
  }

  .info {
    max-width: 46rem;
  }

  .info-subtitle {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    color: var(--color-gray);
    margin: 3rem 0 5.4rem 0;
  }

  .copyright {
    margin-top: auto;
  }
`

export default Footer
