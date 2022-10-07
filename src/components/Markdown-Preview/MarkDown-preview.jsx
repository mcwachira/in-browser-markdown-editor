import React, { useContext } from 'react'
import '../../theme/theme.css'
import { MarkDownOutput } from './Markdown-preview.styles'
import { MarkDownContext } from '../../context/Markdown-context'

const MarkDownPreview = () => {

    const {parsedContent} = useContext(MarkDownContext)
    return (
        <>

            <MarkDownOutput dangerouslySetInnerHTML={{ __html: parsedContent }}/>


        </>
        
    )
}

export default MarkDownPreview