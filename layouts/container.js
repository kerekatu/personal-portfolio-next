import styled from '@emotion/styled'

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>
}

const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr min(100rem, 100%) 1fr;

  & > * {
    grid-column: 2;
  }
`

export default Container
