import { ChevronDownIcon, ChevronRightIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Flex
      flexDir={'column'}
      bg={'#06026D'}
      justify={'center'}
      align={{ base: 'start', md: 'center' }}
      position={'sticky'}
      zIndex={9999}
      top={0}
    >
      <Flex w={'100%'} maxW={'1170px'} color={'white'} minH={'60px'} py={{ base: 2 }} px={{ base: 4 }} align={'center'}>
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex w={'full'} justify={{ base: 'center', md: 'space-between' }} align={'center'}>
          <Link href={'/'}>
            <Image src="/images/header/header.png" alt="logo" w={'65px'} h={'24px'} cursor={'pointer'} />
          </Link>

          <Flex justify={'space-between'} align={'center'} display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
            <Button
              bg={'#07B35D'}
              rounded={'8px'}
              w={'140px'}
              h={'50px'}
              ml={'36px'}
              transition={'all 0.3s'}
              _hover={{
                filter: 'brightness(1.2)',
                transition: 'all 0.3s',
              }}
            >
              Let’s Talk
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Flex>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('white', 'gray.200')
  const linkHoverColor = useColorModeValue('red.400', 'white')
  const popoverContentBgColor = useColorModeValue('gray.400', 'red.400')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '/'}
                fontSize={'16px'}
                fontWeight={700}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
                {navItem.children && <Icon color={'white'} w={5} h={5} as={ChevronDownIcon} />}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent border={0} boxShadow={'xl'} bg={popoverContentBgColor} p={4} rounded={'xl'} minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'} _groupHover={{ color: 'gray' }}>
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('#06026D', 'red.400')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color={useColorModeValue('white', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
            color={'white'}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                <Text color={'white'}>{child.label}</Text>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Products',
    children: [
      {
        label: 'Sub 1',
        subLabel: 'Description 1',
        href: '/',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '/',
      },
    ],
  },
  {
    label: 'Services',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '/',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '/',
      },
    ],
  },
  {
    label: 'Portfolio',
    href: '/',
  },
  {
    label: 'Blogs',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/',
  },
]
