import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import * as React from 'react'

interface IBannerProps {}

const Banner: React.FunctionComponent<IBannerProps> = (props) => {
  return (
    <Flex
      minH={'calc(100vh - 90px)'}
      w={'full'}
      bg={'#06026D'}
      color={'white'}
      p={'20px'}
      justify={'center'}
      align={'center'}
      position={'relative'}
    >
      <Flex
        flexDir={{ base: 'column-reverse', lg: 'row' }}
        maxW={'1170px'}
        w={'100%'}
        justify={'space-between'}
        align={'center'}
        style={{ gap: '20px' }}
      >
        <Flex flexDir={'column'} maxW={'700px'} style={{ gap: '20px' }}>
          <Text fontSize={{ base: '30px', md: '52px' }} fontWeight={'800'} lineHeight={'120%'}>
            We are building success with tech, trusted by top F&B companys.
          </Text>
          <Text maxW={'600px'} fontSize={'16px'}>
            Since our establishment, we have been delivering high-quality and sustainable software solutions for
            corporate purposes of your businesses.
          </Text>
          <Button
            bg={'#07B35D'}
            rounded={'8px'}
            w={'140px'}
            h={'50px'}
            transition={'all 0.3s'}
            _hover={{
              filter: 'brightness(1.2)',
              transition: 'all 0.3s',
            }}
          >
            Get Started
          </Button>
        </Flex>
        <Box>
          <Image src="/images/banner/banner.png" alt={'banner'} w={'100%'} h={'100%'} zIndex={3} />
        </Box>

        <Image
          src="/images/banner/group.png"
          alt={'banner'}
          w={'60px'}
          h={'30px'}
          position={'absolute'}
          bottom={'70px'}
        />
        <Image
          src="/images/banner/group.png"
          alt={'banner'}
          w={'60px'}
          h={'30px'}
          position={'absolute'}
          top={'70px'}
          left={0}
          zIndex={1}
        />
      </Flex>
    </Flex>
  )
}

export default Banner
