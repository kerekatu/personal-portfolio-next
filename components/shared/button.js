import styled from '@emotion/styled'

const Button = ({ className, size, children }) => {
  return (
    <ButtonWrapper className={className} size={size}>
      {children}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  ${(props) => props.size && { fontSize: props.size + ' !important' }}

  &.primary {
    border: none;
    font-size: 1.8rem;
    height: 6rem;
    max-width: max-content;
    padding: 0 10rem;
    font-weight: 700;
    background-color: var(--color-blue);
    color: var(--color-white);
    border-radius: var(--radius-full);
  }
`

export default Button
