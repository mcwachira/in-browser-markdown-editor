import React, { useContext } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import CloseIcon from '../../assets/icon-close.svg'
import AddButton from '../../assets/icon-document.svg'
import { MarkDownContext } from '../../context/Markdown-context'
import {
    SideNavContainer,
    SideNavHeader,
    CloseButton,
    SideNavBody,
    AddDocument,
} from './SideNav.styles'



const SideNav = () => {

    const { isVisible, setIsVisible } = useContext(MarkDownContext)
    const x = -100;
    const y = 0;

    const toggleSideNav = () => {
    setIsVisible(!isVisible)
    }

    return (

  
        <>
            <SideNavContainer style={{transform: isVisible ? `translateX(${y})`: `translateX(${x}%)`}}>
                <SideNavHeader>
                    <h3>
                        My Documents
                    </h3>
               

                    <CloseButton onClick={() => toggleSideNav()}>
                        <img src={CloseIcon} alt="close button" />
                </CloseButton>
                </SideNavHeader>

                <SideNavBody>
                    <AddDocument>
                        New Document
                    </AddDocument>
                </SideNavBody>
            </SideNavContainer>
        </>
     
    )
}

export default SideNav