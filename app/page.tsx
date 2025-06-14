import React from 'react'
import { Button } from "@/components/ui/button"
import Container from '@/components/Container'
import Hero from '@/components/Hero'
import Services from '@/components/Services'

const Home = () => {
  return (
    <Container className='bg-gradient-to-br from-teal-100 via-cyan-50 to-blue-50 max-w-full' >
      
      <Hero/>
      <Services />
      
    </Container>
  )
}

export default Home
