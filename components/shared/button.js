import styled from '@emotion/styled'
import Link from 'next/link'

const Button = ({ className, padding, color, size, icon, link, children }) => {
  if (link) {
    return (
      <Link href={link}>
        <LinkWrapper
          className={className}
          size={size}
          color={color}
          padding={padding}
          icon={icon}
        >
          {children}
          {icon && (
            <i>
              <img src={icon.path} alt={icon?.alt || 'Icon'} className="icon" />
            </i>
          )}
        </LinkWrapper>
      </Link>
    )
  }

  return (
    <ButtonWrapper
      className={className}
      size={size}
      color={color}
      padding={padding}
      icon={icon}
    >
      {children}
      {icon && (
        <i>
          <img src={icon.path} alt={icon?.alt || 'Icon'} className="icon" />
        </i>
      )}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  display: flex !important;
  align-items: center;
  font-size: 1.8rem;
  height: 6rem;
  padding: 0 10rem;
  cursor: pointer;
  ${({ size }) => size && { fontSize: size + ' !important' }}
  ${({ padding }) => padding && { padding: padding + ' !important' }}
  ${({ color }) => color && { color: color + ' !important' }}
  ${({ icon }) =>
    icon && {
      justifyContent: 'center',

      gap: icon.gap || '0.8rem',
      flexDirection: icon.position === 'left' ? 'row-reverse' : 'row',
    }}

  &.primary {
    border: none;
    max-width: max-content;
    font-weight: var(--font-weight-2);
    background-color: var(--color-green);
    color: var(--color-white);
    border-radius: var(--radius-full);
    transition: all var(--transition);

    &:hover {
      transform: scale(1.05);
      backface-visibility: hidden;
    }
  }

  &.secondary {
    border: 0.1rem solid var(--color-white);
    background-color: var(--color-gray-4);
    color: var(--color-white);
    border-radius: var(--radius-full);
    transition: opacity var(--transition);

    &:hover {
      opacity: 0.6;
    }
  }

  &.upper {
    text-transform: uppercase;
  }

  &.transparent {
    border: none;
    background-color: transparent;
    color: var(--color-white);
  }

  .icon {
    display: block;
    filter: invert(1);
    height: 2rem;
  }
`

const LinkWrapper = ButtonWrapper.withComponent('a')

export default Button
