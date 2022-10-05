import React, { useContext } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import CloseIcon from '../../assets/icon-close.svg'
import AddButton from '../../assets/icon-document.svg'
import { MarkDownContext } from '../../context/Markdown-context'
import { toast } from 'react-toastify'
import {
    SideNavContainer,
    SideNavHeader,
    CloseButton,
    SideNavBody,
    AddDocument,
} from './SideNav.styles'



const SideNav = () => {

    const { isVisible, setIsVisible, markDownText, setMarkDownText, setDocumentName } = useContext(MarkDownContext)
    const x = -100;
    const y = 0;

    const toggleSideNav = () => {
    setIsVisible(!isVisible)
    }

    const handleClick = () => {
        setMarkDownText("")
        setDocumentName("")
        toggleSideNav()
        toast.success('new document created')

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
                    <AddDocument onClick={handleClick}>
                        New Document
                    </AddDocument>
                </SideNavBody>
            </SideNavContainer>
        </>
     
    )
}

export default SideNav