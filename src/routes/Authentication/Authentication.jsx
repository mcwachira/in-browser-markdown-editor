import React from 'react'
import Preview from '../../components/Preview-Bar/Preview'
import SideNav from '../../components/SideNav/SideNav'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'
import { AuthContainer } from './Authentication.styles'

const Authentication = () => {
  return (
 <>
          <SideNav/>

          <Preview/>
    <AuthContainer>
        <SignIn/>
        <SignUp/>
    </AuthContainer>
 </>
  )
}

export default Authentication