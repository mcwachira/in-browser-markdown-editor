import React, { useContext } from 'react'
import { MarkdownEditorContainer, MarkdownInput } from './MarkdownEditor'
import { MarkDownContext } from '../../context/Markdown-context'

const MarkDownEditor = () => {

    const {markDownText, setMarkDownText ,showContent} = useContext(MarkDownContext)

    const handleChange = (e) => {

        setMarkDownText(e.target.value)
        

    }



  return (
    <>





          <MarkdownInput value={markDownText} onChange={(e) => handleChange(e)} style={{ display: showContent === true ? 'none' : 'flex' }}>
              {markDownText}

          </MarkdownInput>




         

    </>
  )
}

export default MarkDownEditor