import styled from '@emotion/styled'

const Button = ({ className, padding, size, children }) => {
  return (
    <ButtonWrapper className={className} size={size} padding={padding}>
      {children}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  ${(props) => props.size && { fontSize: props.size + ' !important' }}
  ${(props) => props.padding && { padding: props.padding + ' !important' }}

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

  &.upper {
    text-transform: uppercase;
  }
`

export default Button
