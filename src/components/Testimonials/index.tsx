import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex, HStack, IconButton, Image, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import Slider from 'react-slick'
import { CUSTOMER_LIST } from './utils'

interface ITestimonialsProps {}

const Testimonials: React.FunctionComponent<ITestimonialsProps> = (props) => {
  const sliderRef = useRef<any>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  }
  return (
    <Box as="section" maxW={'1270px'} mt="130px" mx={'auto'} px={'20px'}>
      <Text textAlign="center" fontSize={'16px'} lineHeight={'26px'} fontWeight={'600'} color="#184174">
        Testimonials
      </Text>
      <Text my={'15px'} textAlign="center" fontSize={'38px'} lineHeight={'52px'} fontWeight={'800'}>
        Our{' '}
        <Text color="#07B25D" as="span">
          Happy
        </Text>{' '}
        Customers
      </Text>

      <Box pb={{ base: '25px', md: '150px' }}>
        <Slider ref={sliderRef} {...settings}>
          {CUSTOMER_LIST.map((item, key) => {
            return (
              <Box key={key}>
                <Flex
                  flexDirection={{ base: 'column', md: 'row' }}
                  alignItems={'flex-start'}
                  mx={'15px'}
                  maxW={'570px'}
                  style={{ gap: '30px' }}
                >
                  <Image src={item.image} alt="image customer" />
                  <Box maxW={'370px'}>
                    <Text fontWeight={'600'} color={'#566566'}>
                      {item.description}
                    </Text>
                    <Text color={'#35373E'} fontWeight={'bold'} fontSize={'24px'} lineHeight={'36px'} mt={'18px'}>
                      {item.name}
                    </Text>
                    <Text fontWeight={'500'} color={'#203A59'}>
                      {item.title}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            )
          })}
        </Slider>
        <Center mt="40px">
          <HStack spacing="30px">
            <IconButton
              w={'30px'}
              h={'30px'}
              bg={'#07B25D'}
              aria-label="Call Segun"
              icon={<ArrowBackIcon color="white" />}
              onClick={() => sliderRef?.current?.slickPrev()}
            />
            <IconButton
              w={'30px'}
              h={'30px'}
              bg={'#07B25D'}
              aria-label="Call Segun"
              icon={<ArrowForwardIcon color="white" />}
              onClick={() => sliderRef?.current?.slickNext()}
            />
          </HStack>
        </Center>
      </Box>
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        justifyContent={'space-between'}
        alignItems={'center'}
        px={{ base: '20px', md: '75px' }}
        py="32px"
        bg="#07B35D"
        borderRadius={'16px'}
        transform={{ base: 'translateY(55px)', md: 'translateY(50%)' }}
      >
        <Box color="#fff">
          <Text fontWeight={'800'} fontSize="34px" lineHeight={'44px'}>
            Have an idea?
          </Text>
          <Text mt="6px" fontWeight={'600'} fontSize="18px" lineHeight={'26px'}>
            Let&#39;s make something together. Drop a line to.....
          </Text>
        </Box>
        <Button
          mt={{ base: '15px', md: '0' }}
          bg="white"
          borderRadius={'16px'}
          w="170px"
          h={'50px'}
          color="#07B25D"
          fontWeight={'bold'}
        >
          Let’s Talk
        </Button>
      </Flex>
    </Box>
  )
}

export default Testimonials
