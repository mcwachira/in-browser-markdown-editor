import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'
import { CreateUserDocumentFromAuth } from '../../utils/firebase'
import { SignUpContainer } from './SignUp.styles'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import FormInput from '../FormInput/FormInput'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button.component'

const SignUp = () => { 

    const [formFields, setFormFields] = useState({
        displayName:"",
        email: "",
        password: "",
        confirmPassword:""
    })


    const navigate =  useNavigate()
    const auth = getAuth()
    const { displayName, email, password, confirmPassword } = formFields
    



//function gets data from the input
    const handleChange = (e) =>{

        //this enables us to get the changes in each input at once base on the name of the input . id can also be used in place of the name. just assign each input an id.
        const {name, value} = e.target
        setFormFields((prevState) =>(
            {
            ...formFields,
            [name]:value
        } )
        )
        
    }


    //reset from inputs

    const resetFormInputs = () => {
        //set the form fields to the initial state
      setFormFields(formFields)
    }

    //async function to enable create a user via  firebase
    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(password !== confirmPassword){
            toast.error('passwords do not match')
            return 
        }

        try{
            //creating user with email and password
            const {user} =  await createUserWithEmailAndPassword(auth, email, password);

            console.log(user)
            // await CreateUserDocumentFromAuth(user, {displayName})
            toast.success('user created successfully')
            resetFormInputs()
            navigate('/')

        }catch(error){
            toast.error('error signing up user ')
            console.log('error', error)
        }



    }


  return (
    <SignUpContainer>
    <h2>
        Sign Up
    </h2>
          <form onSubmit={handleSubmit}>


              <FormInput
                  label="Display Name"
                  type="text"
                  required
                  onChange={handleChange}
                  name='displayName'
                  value={displayName}
              />

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