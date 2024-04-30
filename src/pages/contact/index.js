import HeaderPage from '@/components/sharedUi/HeaderPage'
import ContactDetail from '@/components/template/ContactDetail'
import React from 'react'

function ContactPage() {
  return (
    <>
    <HeaderPage route={"contact"}/> 
    <ContactDetail/>
    </>

  )
}

export default ContactPage