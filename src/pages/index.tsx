import { Box } from '@chakra-ui/react'
import AboutDNF from 'components/AboutDNF'
import Banner from 'components/Banner'
import OurServices from 'components/OurServices'
import OurTechnologies from 'components/OurTechnologies'
import OurPartners from 'components/OutPartners'
import ProjectList from 'components/ProjectList'
import StatisticsList from 'components/StatisticsList'
import Testimonials from 'components/Testimonials'

const Home = () => {
  return (
    <Box display={{ md: 'flex' }} flexDir={'column'} w="full">
      <Banner />
      <AboutDNF />
      <OurServices />
      <ProjectList />
      <StatisticsList />
      <OurPartners />
      <OurTechnologies />
      <Testimonials />
    </Box>
  )
}

export default Home
