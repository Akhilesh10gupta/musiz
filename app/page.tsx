import React from 'react'
import Container from '@/components/Container'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import About from '@/components/aboutus'


const Home = () => {
  return (
    <Container className='bg-gradient-to-br from-teal-100 via-cyan-50 to-blue-50 max-w-full' >
      
      <Hero/>
      <Projects/>
      <Services />
      <About/>
    </Container>
  )
}

export default Home
