import styled from '@emotion/styled'
import Heading from '@/components/shared/heading'
import Container from '@/layouts/container'
import Button from './shared/button'
import { useRef, useState } from 'react'
import { PROJECTS_DATA } from '@/lib/constants'

const categories = ['Projects', 'Github Repos']

const Projects = ({ projects, metadata }) => {
  const ref = useRef(null)
  const [currentCategory, setCurrentCategory] = useState(categories[0])

  return (
    <ProjectsWrapper>
      <Container>
        <div className="window" ref={ref}>
          <div className="window-toolbar">
            <div className="window-dots">
              <div className="dot-close"></div>
              <div className="dot-minimize"></div>
              <div className="dot-expand"></div>
            </div>
            <div className="path">
              <Button
                className="transparent"
                size="2rem"
                onClick={() =>
                  ref.current.scrollIntoView({
                    block: 'center'
                  })
                }
              >
                Viewing – Projects
              </Button>
            </div>
            <div className="media">
              <a
                href="https://github.com/kerekatu"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <img src="/static/icons/github.svg" alt="Github Icon" />
                </i>
              </a>
              <a
                href="https://linkedin.com/konradtrosa"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <img src="/static/icons/linkedin.svg" alt="Linkedin Icon" />
                </i>
              </a>
            </div>
          </div>
          <div className="window-content">
            <ul className="categories">
              {categories.map((category, index) => (
                <li key={index}>
                  <Button
                    size="2.4rem"
                    className={`tertiary${
                      currentCategory === categories[index] ? ' active' : ''
                    }`}
                    height="5rem"
                    padding="2rem"
                    onClick={() => setCurrentCategory(categories[index])}
                  >
                    {category}
                  </Button>
                </li>
              ))}
            </ul>
            <ul className="projects">
              {currentCategory === 'Projects'
                ? PROJECTS_DATA.map((project, index) => (
                    <li className="item" key={index}>
                      <img
                        src="/static/images/placeholder.jpg"
                        alt="Placeholder"
                      />

                      {/* {project.title} */}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </Container>
    </ProjectsWrapper>
  )
}

const ProjectsWrapper = styled.section`
  background-color: var(--color-green);

  .window {
    position: relative;
    display: block;
    width: 100%;
    height: 60rem;
    margin: 0 auto;
    top: -8rem;
    background-color: #2c2c2c;
    border-radius: var(--radius-large);
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0 6.7px 5.3px rgba(0, 0, 0, 0.029), 0 12.5px 10px rgba(0, 0, 0, 0.036),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.051),
      0 100px 80px rgba(0, 0, 0, 0.07);

    i > img {
      display: block;
      filter: invert(1);
    }

    .window-toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--color-gray-2);
      height: 8rem;
      border-radius: 1.6rem 1.6rem 0 0;
      padding: 0 4rem;

      & .window-dots {
        display: flex;
        gap: 1rem;
      }

      & .path {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        font-size: 2rem;
        color: var(--color-gray);
        font-weight: 600;
      }

      & .media {
        display: flex;
        gap: 2rem;
      }

      & .dot-close,
      & .dot-minimize,
      & .dot-expand {
        display: block;
        height: 2rem;
        width: 2rem;
        border-radius: var(--radius-full);
      }

      & .dot-close {
        background-color: var(--color-red);
      }

      & .dot-minimize {
        background-color: var(--color-yellow);
      }

      & .dot-expand {
        background-color: var(--color-green);
      }
    }
  }

  .window-content {
    padding: 4rem;
    height: calc(100% - 8rem);

    & .categories {
      display: flex;
      gap: 2rem;
    }

    & .projects {
      display: grid;
      grid-template-columns: repeat(3, min-content);
      gap: 4rem;
      margin-top: 4rem;
    }

    & .projects > .item {
      display: block;
      background-color: var(--color-gray-2);
      border-radius: var(--radius-small);
      height: 100%;

      & img {
        display: block;
        width: 100%;
        object-fit: cover;
        border-radius: var(--radius-small);
      }
    }
  }
`

export default Projects
