import React, { useContext ,useEffect, useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import CloseIcon from '../../assets/icon-close.svg'
import AddButton from '../../assets/icon-document.svg'
import { MarkDownContext } from '../../context/Markdown-context'
import { toast } from 'react-toastify'
import { collection, getDocs , getDoc, doc} from 'firebase/firestore'
import { db } from '../../utils/firebase'
import { useParams, Link } from 'react-router-dom'
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

    const params = useParams()

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

        console.log(querySnapShot.id)
        console.log(params.title)
        querySnapShot.forEach((doc) => {
            console.log(doc.data())
            const data = doc.data()?.title 
            // if(!documentList.includes(data))
            // documentList.push(data)

            // //if(documnet)
            setDocumentList(data)
           
           
        })
        // const documentRef = collection(db, 'mydocumets')
        // console.log(documentRef)

      
    }
    console.log(documentList)
 

    // const fetchData = async() => {
    //     const docRef = doc(db, 'mydocuments', params.title)
    //     const docSnapshot = await getDoc(docRef)
    //     if(docSnapshot.exists()){
    //         console.log(docSnapshot)
    //     }
    // }

    useEffect(() => {
        // fetchData()
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
                    <Link  to={`/${documentList}`}>
                         {documentList}
                    </Link>
                       
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