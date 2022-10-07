import React, { useContext ,useEffect } from 'react'
import { MarkdownEditorContainer, MarkdownInput } from './MarkdownEditor'
import { MarkDownContext } from '../../context/Markdown-context'
import MarkdownIt from "markdown-it";
import '../../theme/theme.css'
import highlightjs from "markdown-it-highlightjs";

const MarkDownEditor = () => {

    const {markDownText, setMarkDownText ,showContent} = useContext(MarkDownContext)

    const handleChange = (e) => {

      const text = e.target.value;
      console.log(text)
      setMarkDownText(text)
        

      
    }
    const handleSubmit = (e) =>{
        console.log(markDownText)
        e.preventDefault();
        
        useEffect(() => {
            const md = new MarkdownIt().use(highlightjs);
            setParsedContent(md.render(markDownText))
        }, [markDownText])
    }

  


  return (
    <>





{/* added a show condition to toggle to make the preview page occupy the full width when a button is clicked. */}

          <MarkdownEditorContainer onSubmit={handleSubmit}>
              <MarkdownInput value={markDownText}  onChange={(e) => handleChange(e)}  style={{ display: showContent === true ? 'none' : 'flex' }}></MarkdownInput>
             
          </MarkdownEditorContainer>
      




         

    </>
  )
}

export default MarkDownEditor