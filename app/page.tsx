import React from 'react'
import { Button } from "@/components/ui/button"
import Container from '@/components/Container'

const Home = () => {
  return (
    <Container>
      <h2 className='font-medium text-sky-500'>Hellow world</h2>
      <Button variant="destructive"> checkit</Button>
    </Container>
  )
}

export default Home
