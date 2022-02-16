import { Box, Flex, Image, Text } from '@chakra-ui/react'
import StatisticsCard from 'components/StatisticsCard'
import * as React from 'react'

interface IStatisticsListProps {}

const statistics = [
  {
    image: '/images/statistics/image-1.png',
    title: 'Our Team Members',
    number: 150,
  },
  {
    image: '/images/statistics/image-2.png',
    title: 'Countries Worldwide',
    number: 10,
  },
  {
    image: '/images/statistics/image-3.png',
    title: 'Completed Projects',
    number: 100,
  },
  {
    image: '/images/statistics/image-4.png',
    title: 'Our Happy Clients',
    number: 99,
  },
  {
    image: '/images/statistics/image-5.png',
    title: 'Years of Company',
    number: 6,
  },
]

const StatisticsList: React.FunctionComponent<IStatisticsListProps> = (props) => {
  return (
    <Flex
      flexDir={'column'}
      justify={'center'}
      align={'center'}
      py={'70px'}
      px={'20px'}
      color={'white'}
      bg={'linear-gradient(180deg, #131399 0%, #0057A7 100%)'}
      position={'relative'}
      style={{ gap: '20px' }}
    >
      <Text fontSize={'16px'} fontWeight={600}>
        We are Here to Help
      </Text>
      <Text fontSize={'38px'} fontWeight={800}>
        <Text as={'span'} color={'#07B25D'}>
          DNF.
        </Text>{' '}
        at a glance
      </Text>
      <Flex justify={'center'} align={'center'} flexWrap={'wrap'} mt={'70px'} style={{ gap: '42px' }}>
        {statistics.map((item, index) => (
          <StatisticsCard {...item} key={index} />
        ))}
      </Flex>

      <Image src="/images/statistics/group.png" alt="group" position={'absolute'} top={'40px'} left={'40px'} />
    </Flex>
  )
}

export default StatisticsList
