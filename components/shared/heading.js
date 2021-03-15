import styled from '@emotion/styled'

const Heading = ({ size, weight, children }) => {
  const validSizes = ['h1', 'h2', 'h3', 'h4', 'h5']
  const title = validSizes.includes(size) && size.toLowerCase()

  return (
    <HeadingWrapper as={title} className={title} weight={weight}>
      {children}
    </HeadingWrapper>
  )
}

const HeadingWrapper = styled.div`
  line-height: var(--leading-heading);
  ${(props) => props.weight && { fontWeight: props.weight + ' !important' }}

  &.h1 {
    font-size: 9.6rem;
    font-weight: var(--font-weight-3);
  }

  &.h2 {
    font-size: 4.8rem;
    font-weight: var(--font-weight-3);
  }

  &.h3 {
    font-size: 3.6rem;
    font-weight: var(--font-weight-3);
  }

  &.h4 {
    font-size: 2.4rem;
    font-weight: var(--font-weight-2);
  }

  &.h5 {
    font-size: 1.8rem;
    font-weight: var(--font-weight-2);
  }
`

export default Heading
