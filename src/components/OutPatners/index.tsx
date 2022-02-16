import { Box, Flex, Image, Text, Center } from '@chakra-ui/react'
import * as React from 'react'
import Slider from 'react-slick'

interface IOurPartnersProps {}

const OurPartners: React.FunctionComponent<IOurPartnersProps> = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Box className="partner-slick" flexDir={'column'} py={'130px'}>
      <Text fontSize={'16px'} fontWeight={600} color={'#184174'} textAlign={'center'}>
        Our Clients Partners
      </Text>
      <Text fontSize={'38px'} fontWeight={800} color={'#35373E'} lineHeight={'120%'} textAlign={'center'} mt={'15px'}>
        Our{' '}
        <Text as={'span'} color={'#07B25D'}>
          Trusted
        </Text>{' '}
        Clients & Partners{' '}
      </Text>

      <Box w={'100%'} maxW={'1170px'} m={'0 auto'} pt={'60px'}>
        <Slider {...settings} className={'partner-slider'}>
          {[...Array(6)].map((_, key) => (
            <Flex
              key={key}
              justify={'center'}
              align={'center'}
              w={'full'}
              h={'full'}
              border={'1px solid #D8EEFF'}
              rounded={'10px'}
              p={'16px 30px'}
            >
              <Image src={`/images/partners/image-${key + 1}.png`} alt={'partner'} />
            </Flex>
          ))}
          {[...Array(6)].map((_, key) => (
            <Flex
              key={key}
              justify={'center'}
              align={'center'}
              w={'full'}
              h={'full'}
              border={'1px solid #D8EEFF'}
              rounded={'10px'}
              p={'16px 30px'}
            >
              <Image src={`/images/partners/image-${key + 1}.png`} alt={'partner'} />
            </Flex>
          ))}
        </Slider>
      </Box>
    </Box>
  )
}

export default OurPartners
