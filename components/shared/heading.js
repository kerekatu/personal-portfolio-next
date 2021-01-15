import styled from '@emotion/styled'

const Heading = ({ size, children }) => {
  const validSizes = ['h1', 'h2', 'h3', 'h4', 'h5']
  const title = validSizes.includes(size) && size.toLowerCase()

  return (
    <HeadingWrapper as={title} className={title}>
      {children}
    </HeadingWrapper>
  )
}

const HeadingWrapper = styled.div`
  &.h1 {
    font-size: 6.4rem;
    font-weight: 900;
  }

  &.h2 {
    font-size: 4.8rem;
    font-weight: 900;
  }

  &.h3 {
    font-size: 3.6rem;
    font-weight: 700;
  }

  &.h4 {
    font-size: 2.4rem;
    font-weight: 700;
  }

  &.h5 {
    font-size: 1.8rem;
    font-weight: 700;
  }
`

export default Heading
