import Navbar from '@/components/navbar'
import styled from '@emotion/styled'

const Header = () => {
  return (
    <HeaderWrapper>
      <Navbar />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Header
