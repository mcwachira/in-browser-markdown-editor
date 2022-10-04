import React, { useContext } from 'react'
import { MarkdownEditorContainer, MarkdownInput } from './MarkdownEditor'
import { MarkDownContext } from '../../context/Markdown-context'

const MarkDownEditor = () => {

    const {markDownText, setMarkDownText} = useContext(MarkDownContext)

    const handleChange = (e) => {

        setMarkDownText(e.target.value)
        

    }



  return (
    <>
<MarkdownEditorContainer>




                  <MarkdownInput MarkdownInput value={markDownText} onChange={(e) => handleChange(e)}>
                  </MarkdownInput>




            </MarkdownEditorContainer>

    </>
  )
}

export default MarkDownEditor