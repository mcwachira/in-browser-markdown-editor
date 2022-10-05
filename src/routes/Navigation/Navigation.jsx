import React, { useContext } from 'react'
import { FaBars, FaSave } from 'react-icons/fa'
import {RiDeleteBin5Line} from 'react-icons/ri'
// import data from '../../data/data.json
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

import { MarkDownContext  } from '../../context/Markdown-context'
import SideNav from '../../components/SideNav/SideNav'
import { Outlet } from 'react-router-dom'



const Navigation = () => {

    const { isVisible, setIsVisible, documentName, setDocumentName } = useContext(MarkDownContext)

    const handleClick = () => {
setIsVisible(() =>!isVisible)
 console.log('clicked')
    }
        const handleChange = (e) => {
            console.log(e.target.value)
    setDocumentName(e.target.value)
 }

    
    return (
        <>
            <NavBarContainer>

                <NavBarContainerLeft>
                {/* <SideNav/> */}
                    <OpenButton onClick={handleClick}>
                        <FaBars size={35} style={{color:'white'}}/>
                  
                    </OpenButton>
                 
                        <NavLink to='/'>
                           <h2>
                               MARKDOWN
                           </h2>
                         
                        </NavLink>
               

                    <InputBox name='name' onChange={handleChange} value={documentName}/>
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