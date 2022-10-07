import React, { useContext ,useEffect, useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import CloseIcon from '../../assets/icon-close.svg'
import AddButton from '../../assets/icon-document.svg'
import { MarkDownContext } from '../../context/Markdown-context'
import { toast } from 'react-toastify'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../utils/firebase'
import {
    SideNavContainer,
    SideNavHeader,
    CloseButton,
    SideNavList,
    SideNavBody,
    AddDocument,
} from './SideNav.styles'



const SideNav = () => {

    const [documentList, setDocumentList] = useState([])
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
  

    const getMyDocuments = async() => {
        const querySnapShot = await getDocs(collection(db, "mydocuments"));
        querySnapShot.forEach((doc) => {
            const data = doc.data()?.title 
            // if(!documentList.includes(data))
            // documentList.push(data)

            // //if(documnet)
            setDocumentList(data)
           
           
        })

      
    }
    console.log(documentList)
 

    useEffect(() => {
        getMyDocuments()
    }, [])

    return (

  
        <>
            <SideNavContainer style={{transform: isVisible ? `translateX(${y})`: `translateX(${x}%)`}}>
                <SideNavHeader>
                    <h3 style={{margin:'1rem auto'}}>
                        My Documents
                    </h3>
             

                
                    <CloseButton onClick={() => toggleSideNav()}>
                        <img src={CloseIcon} alt="close button" />
                </CloseButton>
                </SideNavHeader>

                <SideNavBody>
                
                    <SideNavList>
                        {documentList}
                    </SideNavList>
                    <AddDocument onClick={handleClick}>
                        New Document
                    </AddDocument>
                </SideNavBody>
            </SideNavContainer>
        </>
     
    )
}

export default SideNav