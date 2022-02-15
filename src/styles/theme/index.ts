import { extendTheme } from '@chakra-ui/react'
import colors from './colors'
import { buttonStyles } from './components/button'
import { headingStyles } from './components/heading'
import { linkStyles } from './components/link'
import { fonts } from './fonts'
import { globalStyles } from './styles'
// import { mode } from "@chakra-ui/theme-tools";

export default extendTheme(
  globalStyles, // Global styles
  colors,
  { fonts },
  buttonStyles, // Button styles
  headingStyles, // input styles
  linkStyles, // Link styles
)
