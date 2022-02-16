import { Box, Flex, Image, Text } from '@chakra-ui/react'
import * as React from 'react'

interface IServiceCardProps {
  title: string
  image: string
  desc: string
}

const ServiceCard: React.FunctionComponent<IServiceCardProps> = (props) => {
  const { title, image, desc } = props
  return (
    <Flex
      flexDir={'column'}
      justify={'center'}
      align={'center'}
      rounded={'40px'}
      p={'50px 26px 87px 26px'}
      w={'370px'}
      h={'420px'}
      cursor={'pointer'}
      border={'1px solid transparent'}
      transition={'all .3s'}
      style={{ gap: '20px' }}
      _hover={{
        borderColor: 'rgba(0, 0, 0, 0.1)',
        boxShadow: '0px 2px 30px rgba(0, 0, 0, 0.04)',
        transition: 'all .3s',
      }}
    >
      <Image src={image} alt="logo" />
      <Text fontSize={'24px'} fontWeight={600} textAlign={'center'}>
        {title}
      </Text>
      <Text fontSize={'16px'} textAlign={'center'}>
        {desc}
      </Text>
    </Flex>
  )
}

export default ServiceCard
