import CustomLink from '@/components/shared/custom-link'
import Link from 'next/link'
import styled from '@emotion/styled'

const Navbar = () => {
  return (
    <NavbarWrapper>
      <ul>
        <li>
          <CustomLink href="/">Home</CustomLink>
        </li>
        <li>
          <CustomLink href="/projects">Projects</CustomLink>
        </li>
        <li>
          <Link href="mailto:konradtrosa@gmail.com">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  & > ul {
    display: flex;
    gap: 4rem;
  }

  a {
    font-size: 1.8rem;
  }
`

export default Navbar
