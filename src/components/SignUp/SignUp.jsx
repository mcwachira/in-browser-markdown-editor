import React, { useState } from 'react'
import { SignUpContainer } from './SignUp.styles'
import FormInput from '../FormInput/FormInput'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button.component'

const SignUp = () => { 

    const [formFields, setFormFields] = useState({
        email: "",
        password: "",
        confirmPassword:""
    })


    const { email, password, confirmPassword } = formFields
    const handleChange = () =>{}
    const handleSubmit = () =>{

    }


  return (
    <SignUpContainer>
    <h2>
        Sign Up
    </h2>
          <form onSubmit={handleSubmit}>


              <FormInput
                  label='Email'
                  type='email'
                  required
                  onChange={handleChange}
                  name='email'
                  value={email}
              />

              <FormInput
                  label='Password'
                  type='password'
                  required
                  onChange={handleChange}
                  name='password'
                  value={password}
              />

              <FormInput
                  label='Confirm Password'
                  type='password'
                  required
                  onChange={handleChange}
                  name='confirmPassword'
                  value={confirmPassword}
              />

              <Button type='submit' buttonType={BUTTON_TYPE_CLASSES.base}>Submit </Button>

          </form>



    </SignUpContainer>
  )
}

export default SignUp