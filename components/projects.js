import styled from '@emotion/styled'
import Heading from '@/components/shared/heading'
import { PROJECTS_DATA } from '@/libconstants'
import Button from './shared/button'
import Container from '@/layouts/container'
import { useState } from 'react'
import { motion } from 'framer-motion'

const ProjectList = ({ items }) => {
  return <div>dupa</div>
}

export const Projects = ({ projects }) => {
  return (
    <ProjectsWrapper>
      {projects ? (
        <ProjectList items={projects} />
      ) : (
        <Container>
          <div className="products full-layout">
            <Heading size="h2" weight="900">
              Recent Projects
            </Heading>

            <ul className="list">
              {PROJECTS_DATA?.map((project, index) => (
                <ProjectWrapper
                  key={index}
                  whileHover={{
                    height: '23rem',
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="item">
                    <Heading size="h4" weight="900">
                      {`0${index + 1}`}
                    </Heading>
                    <Heading size="h2" weight="600">
                      {project.title}
                    </Heading>
                  </div>
                </ProjectWrapper>
              ))}
            </ul>

            <Button
              className="secondary"
              padding="0 6rem"
              icon={{
                path: '/static/icons/arrow-right.svg',
                alt: 'Arrow Right',
              }}
            >
              See All Projects
            </Button>
          </div>
        </Container>
      )}
    </ProjectsWrapper>
  )
}

const ProjectsWrapper = styled.section`
  min-height: 100vh;
  margin-bottom: 14rem;

  .products {
    display: flex;
    flex-direction: column;
    gap: 8rem 0;

    & > h2,
    & > button {
      max-width: 100rem;
      margin: 0 auto;
      padding: 0 4rem;
    }
  }

  .item {
    display: flex;
    align-items: center;
    width: 100rem;
    margin: 0 auto;

    & > h3 {
      opacity: 0.6;
    }

    & > h4 {
      position: relative;
      margin-right: 10rem;
      opacity: 0.6;
    }

    & > h4::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 6rem;
      height: 0.1rem;
      width: 100rem;
      opacity: 0.1;
      background-color: var(--color-white);
    }
  }
`

const ProjectWrapper = styled(motion.li)`
  display: flex;
  align-items: center;
  padding: 6rem;

  &:not(:nth-child(2n)) {
    background-color: var(--color-gray-3);
  }
`

export default Projects
