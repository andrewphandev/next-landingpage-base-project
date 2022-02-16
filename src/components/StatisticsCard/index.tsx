import { Box, Flex, Image, Text } from '@chakra-ui/react'
import * as React from 'react'

interface IStatisticsCardProps {
  image: string
  title: string
  number: number
}

const StatisticsCard: React.FunctionComponent<IStatisticsCardProps> = (props) => {
  const { image, title, number } = props
  return (
    <Flex
      flexDir={'column'}
      justify={'center'}
      align={'center'}
      p={'25px 20px'}
      rounded={'36px'}
      bg={'white'}
      w={'200px'}
      style={{ gap: '16px' }}
    >
      <Box p={'12px'} bg={'white'} boxShadow={'0px 1px 4px 2px rgba(168, 168, 168, 0.25)'} rounded={'full'}>
        <Image src={image} alt="logo" />
      </Box>

      <Text fontSize={'36px'} fontWeight={700} color={'#35373E'}>
        {number}+
      </Text>
      <Text fontSize={'16px'} fontWeight={500} color={'#666666'} textAlign={'center'} maxW={'85px'}>
        {title}
      </Text>
    </Flex>
  )
}

export default StatisticsCard
