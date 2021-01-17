import styled from '@emotion/styled'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <LogoWrapper>
        <img src="/static/images/logo.svg" alt="Logo" className="img" />
      </LogoWrapper>
    </Link>
  )
}

const LogoWrapper = styled.a`
  .img {
    display: block;
    height: 4rem;
    cursor: pointer;
  }
`

export default Logo
