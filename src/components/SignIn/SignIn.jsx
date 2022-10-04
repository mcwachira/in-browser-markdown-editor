import React , {useState} from 'react'
import { SignInContainer, ButtonContainer } from './SingIn.styles'
import FormInput from '../FormInput/FormInput'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button.component'

const SignIn = () => {
    const [formFields, setFormFields] = useState({
        email:"",
        password:"",
    })

    const {email, password} = formFields

    const handleChange = () => {}

    const handleSubmit = () => {

    }
  return (
    
    <SignInContainer>

    <h2>Sign In</h2>
        <form  onSubmit={handleSubmit}>

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

              <ButtonContainer>
                <Button type='submit' buttonType={BUTTON_TYPE_CLASSES.base}>Submit </Button>
                
                  {/* passed the firebase signInWithGooglePopup method directly on the onclick method 
                    instead of passing another function to help us sign in with google */}
                  <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} >  Google Sign In</Button>

              </ButtonContainer>

        </form>
    </SignInContainer>
  )
}

export default SignIn