import { Flex, Text } from '@chakra-ui/react'
import ServiceCard from 'components/ServiceCard'
import * as React from 'react'

interface IOurServicesProps {}

const services = [
  {
    image: '/images/ourServices/image-1.png',
    title: 'Web Development',
    desc: 'Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses.',
  },
  {
    image: '/images/ourServices/image-2.png',
    title: 'App Development',
    desc: 'Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses.',
  },
  {
    image: '/images/ourServices/image-3.png',
    title: 'UX/UI Design',
    desc: 'Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses.',
  },
  {
    image: '/images/ourServices/image-4.png',
    title: 'Blockchain Development',
    desc: 'Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses.',
  },
  {
    image: '/images/ourServices/image-5.png',
    title: 'Backend Development',
    desc: 'Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses.',
  },
  {
    image: '/images/ourServices/image-6.png',
    title: 'Support Service',
    desc: 'Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses.',
  },
]
const OurServices: React.FunctionComponent<IOurServicesProps> = (props) => {
  return (
    <Flex flexDir={'column'} align={'center'} justify={'center'} p={'20px'} mt={'50px'}>
      <Text fontSize={'16px'} fontWeight={600} color={'#184174'}>
        Our Services
      </Text>
      <Text fontSize={'38px'} fontWeight={700} color={'#35373E'} textAlign={'center'} lineHeight={'120%'}>
        See what we can do for you
      </Text>
      <Flex w={'100%'} maxW={'1170px'} flexWrap={'wrap'} mt={'50px'} style={{ gap: '30px' }}>
        {services.map((item, index) => (
          <ServiceCard {...item} key={index} />
        ))}
      </Flex>
    </Flex>
  )
}

export default OurServices
