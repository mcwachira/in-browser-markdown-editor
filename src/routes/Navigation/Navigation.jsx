import React from 'react'
import { FaBars, FaSave } from 'react-icons/fa'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {
    NavBarContainer,
    OpenButton,
    NavBarContainerLeft,
    NavBarContainerRight,
    DeleteButton,
    SaveButton,
    InputBox ,
    NavLink

} from './Navigation.styles'

import { MarkDownContext } from '../../context/Markdown-context'
import { Outlet } from 'react-router-dom'



const Navigation = () => {
    return (
        <>
            <NavBarContainer>

                <NavBarContainerLeft>
                    <OpenButton>
                        <FaBars size={35} style={{color:'white'}}/>
                    </OpenButton>
                 
                        <NavLink to='/'>
                           <h2>
                               MARKDOWN
                           </h2>
                         
                        </NavLink>
               

                    <InputBox/>
                </NavBarContainerLeft>

                <NavBarContainerRight>
                    <NavLink to='/authentication'>
                        <h3>
                            Sign In
                        </h3>
                    </NavLink>
                    <DeleteButton>
                        <RiDeleteBin5Line size={35} style={{ color: 'grey' }} />
                    </DeleteButton>

                    <SaveButton>
                        <FaSave size={20} style={{ margin: '0 .5rem' }} />
                        <h3>
                            Save Changes
                        </h3>
                    </SaveButton>
                </NavBarContainerRight>
            </NavBarContainer>

            <Outlet/>
        </>
    )
}

export default Navigation