import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Image } from '@chakra-ui/react'
import Technology from 'components/Technology'
import * as React from 'react'

interface IOurTechnologiesProps {}

const technologies = [
  {
    name: 'Kotlin',
    image: '/images/technologies/kotlin-icon.png',
  },
  {
    name: 'Android',
    image: '/images/technologies/android-icon.png',
  },
  {
    name: 'C++',
    image: '/images/technologies/c++-icon.png',
  },
  {
    name: 'Flutter',
    image: '/images/technologies/flutter-icon.png',
  },
  {
    name: 'Ionic',
    image: '/images/technologies/Ionic-icon.png',
  },
  {
    name: 'IOS',
    image: '/images/technologies/ios-icon.png',
  },
]

const OurTechnologies: React.FunctionComponent<IOurTechnologiesProps> = (props) => {
  return (
    <Flex flexDir={'column'} justify={'center'} align={'center'} bg={'#F6FBFF'} pt={'52px'} style={{ gap: '20px' }}>
      <Text fontSize={'16px'} fontWeight={600} color={'#184174'} textAlign={'center'}>
        Our Technologies
      </Text>
      <Text fontSize={'38px'} fontWeight={800} color={'#35373E'} lineHeight={'120%'} textAlign={'center'} mt={'15px'}>
        <Text as={'span'} color={'#07B25D'}>
          Technologies{' '}
        </Text>{' '}
        We Work With
      </Text>

      <Tabs color={'#566566'} w={'100%'} maxW={'1170px'}>
        <TabList display={'flex'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} border={'none'}>
          <Tab _selected={{ color: 'green.400', borderColor: 'green.400', shadow: 'none', outline: 'none' }}>
            Mobile
          </Tab>
          <Tab _selected={{ color: 'green.400', borderColor: 'green.400', shadow: 'none', outline: 'none' }}>
            Frontend
          </Tab>
          <Tab _selected={{ color: 'green.400', borderColor: 'green.400', shadow: 'none', outline: 'none' }}>
            Backend
          </Tab>
          <Tab _selected={{ color: 'green.400', borderColor: 'green.400', shadow: 'none', outline: 'none' }}>
            Database
          </Tab>
          <Tab _selected={{ color: 'green.400', borderColor: 'green.400', shadow: 'none', outline: 'none' }}>
            Engine
          </Tab>
        </TabList>
        <TabPanels p="2rem">
          <TabPanel
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexWrap={'wrap'}
            style={{ gap: '80px' }}
          >
            {[...technologies, ...technologies].map((item, index) => (
              <Technology {...item} key={index} />
            ))}
          </TabPanel>
          <TabPanel
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexWrap={'wrap'}
            style={{ gap: '80px' }}
          >
            {[...technologies, ...technologies].map((item, index) => (
              <Technology {...item} key={index} />
            ))}
          </TabPanel>
          <TabPanel
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexWrap={'wrap'}
            style={{ gap: '80px' }}
          >
            {[...technologies, ...technologies].map((item, index) => (
              <Technology {...item} key={index} />
            ))}
          </TabPanel>
          <TabPanel
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexWrap={'wrap'}
            style={{ gap: '50px' }}
          >
            {[...technologies, ...technologies].map((item, index) => (
              <Technology {...item} key={index} />
            ))}
          </TabPanel>
          <TabPanel
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexWrap={'wrap'}
            style={{ gap: '80px' }}
          >
            {[...technologies, ...technologies].map((item, index) => (
              <Technology {...item} key={index} />
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default OurTechnologies
