import React from 'react'
import { Button } from "@/components/ui/button"
import Container from '@/components/Container'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'

const Home = () => {
  return (
    <Container className='bg-gradient-to-br from-teal-100 via-cyan-50 to-blue-50 max-w-full' >
      
      <Hero/>
      <Projects/>
      <Services />
      
    </Container>
  )
}

export default Home
