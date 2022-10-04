import React, { useState } from 'react'
import { MarkdownEditorContainer, MarkdownInput, MarkDownOutput } from './MarkdownEditor'
import MarkdownIt from 'markdown-it'
import highlightjs from 'markdown-it-highlightjs'
import data from '../../data/data.json'
const MarkDownEditor = () => {
    const [markDownText, setMarkDownText] = useState('')
   const [parsedContent , setParsedContent] = useState("")

    const handleChange = (e) => {

        setMarkDownText(e.target.value)
        

    }


    const convertToMarkDown = (e) =>{
        e.preventDefault();
        const md = new MarkdownIt()
        setParsedContent(md.render(markDownText))

    
    }
  return (
    <>
<MarkdownEditorContainer>

<form  onSubmit={convertToMarkDown}>


                  <MarkdownInput MarkdownInput value={markDownText} onChange={(e) => handleChange(e)}>
                  </MarkdownInput>

                  <button type='submit'>

                    Convert 
                  </button>
</form>


              <MarkDownOutput dangerouslySetInnerHTML={{ __html: parsedContent }}></MarkDownOutput>
</MarkdownEditorContainer>

    </>
  )
}

export default MarkDownEditor