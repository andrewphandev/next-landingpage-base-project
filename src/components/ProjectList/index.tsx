import { Flex, Text } from '@chakra-ui/react'
import Project from 'components/Project'
import * as React from 'react'

interface IProjectsProps {}

const projects = [
  {
    title: 'King Coffee',
    desc: 'Since our establishment, we have been delivering high-quality.',
    url: '/',
    image: '/images/projects/image-1.png',
    width: '570px',
    height: '370px',
  },
  {
    title: 'King Coffee',
    desc: 'Since our establishment, we have been delivering high-quality.',
    url: '/',
    image: '/images/projects/image-2.png',
    width: '570px',
    height: '370px',
  },
  {
    title: 'King Coffee',
    desc: 'Since our establishment, we have been delivering high-quality.',
    url: '/',
    image: '/images/projects/image-3.png',
    width: '370px',
    height: '330px',
  },
  {
    title: 'King Coffee',
    desc: 'Since our establishment, we have been delivering high-quality.',
    url: '/',
    image: '/images/projects/image-4.png',
    width: '370px',
    height: '330px',
  },
  {
    title: 'King Coffee',
    desc: 'Since our establishment, we have been delivering high-quality.',
    url: '/',
    image: '/images/projects/image-5.png',
    width: '370px',
    height: '330px',
  },
]

const ProjectList: React.FunctionComponent<IProjectsProps> = (props) => {
  return (
    <Flex
      flexDir={'column'}
      bg={'#F6FBFF'}
      p={'50px 20px 130px 20px'}
      justify={'center'}
      align={'center'}
      style={{ gap: '20px' }}
    >
      <Text fontSize={'16px'} fontWeight={600} color={'#184174'}>
        Successful Some Projects
      </Text>
      <Text fontSize={'38px'} fontWeight={800} lineHeight={'120%'} textAlign={'center'}>
        Some of our{' '}
        <Text as={'span'} color={'#07B25D'}>
          Works
        </Text>
      </Text>
      <Flex w={'100%'} maxW={'1170px'} flexWrap={'wrap'} justify={'space-between'} style={{ gap: '20px' }}>
        {projects.map((item, index) => (
          <Project {...item} key={index} />
        ))}
      </Flex>
    </Flex>
  )
}

export default ProjectList
