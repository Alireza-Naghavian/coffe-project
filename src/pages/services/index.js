import HeaderPage from '@/components/sharedUi/HeaderPage'
import Services from '@/components/template/Services'
import axios from 'axios'
import React from 'react'

function ServicesPage({services}) {
  return (
   <>
   <HeaderPage route={"services"}/>
   <Services services={services} />
   </>
  )
}
export async function getStaticProps(){
  
  const {data:services}= await axios.get("http://localhost:4000/services");

  return{
props:{
services
}
  }
}
export default ServicesPage