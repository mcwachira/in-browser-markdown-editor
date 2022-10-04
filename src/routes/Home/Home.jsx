import React from 'react'
import MarkDownEditor from '../../components/Markdown-Editor/MarkDownEditor'
import MarkDownPreview from '../../components/Markdown=Preview/MarkDown-preview'
import Preview from '../../components/Preview-Bar/Preview'
import SideNav from '../../components/SideNav/SideNav'
import { HomeContainer } from './Home.styles'
const Home = () => {
  return (
   <>
   
<SideNav/>
 
      <Preview />
    <HomeContainer>
 
        <MarkDownEditor/>
        <MarkDownPreview/>
    </HomeContainer>
   </>
  )
}

export default Home