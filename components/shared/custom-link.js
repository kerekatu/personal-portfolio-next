import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'

const CustomLink = ({ href, children }) => {
  const router = useRouter()

  return (
    <Link href={href}>
      <LinkWrapper className={router.pathname === href ? 'active' : undefined}>
        {children}
      </LinkWrapper>
    </Link>
  )
}

const LinkWrapper = styled.a`
  font-size: 1.8rem;
  cursor: pointer;

  &.active {
    font-weight: 900;
  }
`

export default CustomLink
