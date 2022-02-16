import { Box, Button, Flex, Text } from '@chakra-ui/react'
import * as React from 'react'

interface IProjectProps {
  title: string
  desc: string
  url: string
  image: string
  width: string
  height: string
}

const Project: React.FunctionComponent<IProjectProps> = (props) => {
  const { title, desc, url, image, width, height } = props
  return (
    <Flex
      flexDir={'column'}
      justify={'center'}
      align={'center'}
      bgImage={`url('${image}')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      w={width}
      h={height}
      rounded={'16px'}
      role={'group'}
    >
      <Flex
        w={'full'}
        h={'full'}
        rounded={'16px'}
        flexDir={'column'}
        justify={'center'}
        align={'center'}
        color={'white'}
        p={'0 50px'}
        style={{ gap: '20px' }}
        visibility={'hidden'}
        bg={'rgba(0, 46, 100, 0.4)'}
        _groupHover={{
          visibility: 'visible',
        }}
      >
        <Text fontSize={'38px'} fontWeight={700} lineHeight={'120%'} textAlign={'center'}>
          {title}
        </Text>
        <Text fontSize={'20px'} textAlign={'center'}>
          {desc}
        </Text>
        <Button bg={'white'} color={'blue.500'} w={'170px'} h={'50px'} rounded={'8px'} as={'a'} href={url}>
          View Projects
        </Button>
      </Flex>
    </Flex>
  )
}

export default Project
