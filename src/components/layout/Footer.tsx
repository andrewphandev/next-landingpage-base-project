import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'

const Footer = () => {
  return (
    <Box px={'20px'} pt="146px" color={'#F8F8F8'} bg={'#00006F'} as="footer">
      <Box maxW={'1170px'} mx={'auto'}>
        <Flex wrap={'wrap'} alignItems={'flex-start'} style={{ gap: '66px' }} pb={'52px'}>
          <Box minW={{ base: '45%', md: 'auto' }} maxW={'276px'}>
            <Text color="#fff" mb="20px" fontWeight={'800'} fontSize={'32px'} lineHeight={'40px'}>
              DNF.
            </Text>
            <Text>
              Since our establishment, we have been delivering high-quality and sustainable software solutions for
              corporate purposes of worldwide businesses.
            </Text>
          </Box>
          <Box minW={{ base: '45%', md: '190px' }} maxW={'225px'}>
            <Text color="#fff" mb="20px" fontWeight={'600'} fontSize={'20px'} lineHeight={'30px'}>
              Social Links
            </Text>
            <VStack spacing={'8px'} alignItems={'flex-start'}>
              <Link passHref href={'#facebook'}>
                <Text as="a">Facebook</Text>
              </Link>
              <Link passHref href={'#Twitter'}>
                <Text as="a">Twitter</Text>
              </Link>
              <Link passHref href={'#Linkdin'}>
                <Text as="a">Linkdin</Text>
              </Link>
              <Link passHref href={'#Youtube'}>
                <Text as="a">Youtube</Text>
              </Link>
              <Link passHref href={'#Google'}>
                <Text as="a">Google</Text>
              </Link>
            </VStack>
          </Box>
          <Box minW={{ base: '45%', md: 'auto' }} maxW={{ base: 'auto', md: '205px' }}>
            <Text color="#fff" mb="20px" fontWeight={'600'} fontSize={'20px'} lineHeight={'30px'}>
              What We Do
            </Text>
            <VStack spacing={'8px'} alignItems={'flex-start'}>
              <Link passHref href={'#web'}>
                <Text as="a">Web Development </Text>
              </Link>
              <Link passHref href={'#app'}>
                <Text as="a">App Development</Text>
              </Link>
              <Link passHref href={'#ui'}>
                <Text as="a">UI/UX Design</Text>
              </Link>
              <Link passHref href={'#blockchain'}>
                <Text as="a">Blockchain Development</Text>
              </Link>
              <Link passHref href={'#backend'}>
                <Text as="a">Backend Development</Text>
              </Link>
              <Link passHref href={'#service'}>
                <Text as="a">Support Service</Text>
              </Link>
            </VStack>
          </Box>
          <Box minW={{ base: '45%', md: 'auto' }} maxW={{ base: 'auto', md: '239px' }}>
            <Text color="#fff" mb="20px" fontWeight={'600'} fontSize={'20px'} lineHeight={'30px'}>
              Contact Us
            </Text>

            <VStack spacing={'8px'} alignItems={'flex-start'}>
              <Flex alignItems={'center'}>
                <Image width={'16px'} height={'16px'} src={'/images/icons/phone.png'} alt={'icon phone'} />
                <Text fontSize="14px" ml="17px">
                  +880 1752 598862
                </Text>
              </Flex>
              <Flex alignItems={'center'}>
                <Image width={'16px'} height={'14px'} src={'/images/icons/mail.png'} alt={'icon phone'} />
                <Text fontSize="14px" ml="17px">
                  info@weprosis.com
                </Text>
              </Flex>
              <Flex alignItems={'start'}>
                <Image width={'16px'} height={'20px'} src={'/images/icons/location.png'} alt={'icon phone'} />
                <Text fontSize="14px" ml="17px">
                  House-05, Level-06, Line-13, Sector-10, Mirpur, Dhaka-1216
                </Text>
              </Flex>
              <VStack pt="20px" alignItems={'flex-start'}>
                <Link passHref href={'#Policy'}>
                  <Text as="a">Privacy Policy</Text>
                </Link>
                <Link passHref href={'#Terms'}>
                  <Text as="a">Terms & Conditions</Text>
                </Link>
              </VStack>
            </VStack>
          </Box>
        </Flex>

        <Box
          borderTop={'1px solid rgba(255, 255, 255, 0.12)'}
          p={'25px'}
          fontWeight={'bold'}
          fontSize={'14px'}
          lineHeight={'20px'}
          textAlign={'center'}
        >
          Copyright @ 2021 weprosis
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
