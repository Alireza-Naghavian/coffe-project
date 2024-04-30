import React from 'react'
import About from '@/components/template/About'
import HeaderPage from '@/components/sharedUi/HeaderPage'
function AboutPage() {
  return (
    <>
    <HeaderPage route={"about"}/>
    <About/>
    </>
  )
}

export default AboutPage