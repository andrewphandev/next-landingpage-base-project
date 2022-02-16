import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import * as React from 'react'

interface IAboutDNFProps {}

const AboutDNF: React.FunctionComponent<IAboutDNFProps> = (props) => {
  return (
    <Flex flexDir={{ base: 'column-reverse', md: 'row' }} align={'center'} p={'20px'} style={{ gap: '50px' }}>
      <Flex flex={1} flexDir={{ base: 'column', md: 'row' }} justify={'end'} mt={'100px'} style={{ gap: '20px' }}>
        <Flex flexDir={'column'} style={{ gap: '20px' }}>
          <Image src="/images/about/image-1.png" alt="image-1" />
          <Image src="/images/about/image-2.png" alt="image-2" />
        </Flex>
        <Image src="/images/about/image-3.png" alt="image-3" />
      </Flex>

      <Flex flex={1} flexDir={'column'} p={'20px'}>
        <Flex flexDir={'column'} maxW={'600px'} style={{ gap: '30px' }}>
          <Text fontSize={'16px'} fontWeight={600} color={'#184174'}>
            What About DNF.
          </Text>
          <Text fontSize={'38px'} fontWeight={800} color={'#35373E'} lineHeight={'120%'}>
            Revolutionizing F&B industry with DNF Services
          </Text>
          <Text fontSize={'16px'}>
            DNF. Worldwide based custom software development & consulting company focusing on web, mobile, desktop &
            embedded software development. It’s committed to meet the highest of ethical standards of work by
            implementing web & mobile solutions without making any compromise on their quality & functionality. & get
            back to you within one business day with free consultation & to discuss the next steps.
          </Text>

          <Button
            bg={'#07B35D'}
            rounded={'8px'}
            w={'140px'}
            h={'50px'}
            color={'white'}
            transition={'all 0.3s'}
            _hover={{
              filter: 'brightness(1.2)',
              transition: 'all 0.3s',
            }}
          >
            Learn More
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default AboutDNF
