import React from 'react'
import Section from '../components/Section'
import FormLogin from '../components/FormLogin'

const LogIn = () => {
  return (
    <Section crosses crossesOffset id="login">
      <div className='container'>
        <div className='flex w-full'>
          <div className='w-10/12 mx-auto lg:w-7/12 bg-n-8 flex items-center justify-center'>
            <FormLogin />
          </div>

          <div className="bg-n-7/90 relative hidden lg:flex w-6/12 items-center justify-center rounded-3xl h-120vh">
            <div className='w-60 h-60 rounded-full bg-gradient-to-tr from-purple-600 to-pink-700 animate-bounce'>
              <img src="./src/assets/webifyLogoForm.png" alt="logo" className='absolute top-10 left-12' />
            </div>
            <div className='w-full h-1/2 bg-n-7/10 backdrop-blur-lg absolute bottom-0 rounded-3xl'/>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default LogIn