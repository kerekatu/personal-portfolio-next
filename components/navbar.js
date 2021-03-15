import CustomLink from '@/components/shared/custom-link'
import Link from 'next/link'
import styled from '@emotion/styled'

const Navbar = () => {
  return (
    <NavbarWrapper>
      <ul>
        <li>
          <CustomLink href="/">Konrad Rosa</CustomLink>
        </li>
        <li>
          <CustomLink href="/projects">Projects</CustomLink>
        </li>
        <li>
          <CustomLink href="/about">About</CustomLink>
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
    gap: 6rem;
  }

  a {
    font-size: 2rem;
    font-weight: var(--font-weight-2);
    opacity: 0.8;
    transition: opacity var(--transition);

    &:hover {
      opacity: 1;
    }
  }

  li {
    position: relative;
  }
`

export default Navbar
