import { Box, Image, Text } from '@chakra-ui/react'
import * as React from 'react'

interface ITechnologyProps {
  image: string
  name: string
}

const Technology: React.FunctionComponent<ITechnologyProps> = (props) => {
  const { image, name } = props
  return (
    <Box
      p={'20px 10px'}
      transition={'all .3s ease'}
      _hover={{
        backgroundColor: 'white',
        boxShadow: '0px 1px 4px 2px rgba(168, 168, 168, 0.1)',
        borderRadius: '8px',
        transition: 'all .3s ease',
      }}
    >
      <Image src={image} alt={'logo'} />
      <Text fontSize={'24px'} fontWeight={500} textAlign={'center'} mt={'20px'}>
        {name}
      </Text>
    </Box>
  )
}

export default Technology
