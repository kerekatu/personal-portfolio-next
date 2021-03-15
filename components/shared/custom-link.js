import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'

const CustomLink = ({ href, children, ...props }) => {
  const router = useRouter()

  return (
    <Link href={href}>
      <LinkWrapper
        className={router.pathname === href ? 'active' : undefined}
        {...props}
      >
        {children}
      </LinkWrapper>
    </Link>
  )
}

const LinkWrapper = styled.a`
  font-size: 2.4rem;
  cursor: pointer;

  &.active {
    font-weight: var(--font-weight-3);
    opacity: 1;
  }
`

export default CustomLink
