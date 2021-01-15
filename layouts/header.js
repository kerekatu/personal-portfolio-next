import Navbar from '@/components/navbar'
import Logo from '@/components/shared/logo'
import styled from '@emotion/styled'

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Navbar />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default Header
