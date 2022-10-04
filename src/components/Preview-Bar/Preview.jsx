import React, { useContext, useState } from 'react'
import { MarkDownContext } from '../../context/Markdown-context'
import EyeBtnShow from '../../assets/icon-show-preview.svg'

import EyeBtnHide from '../../assets/icon-hide-preview.svg'
import {
    PreviewContainer,
    MarkDownSide,
    PreviewSide,
    PreviewButton,
} from './Preview.styles'



const Preview = () => {

    const { showContent,setShowContent } = useContext(MarkDownContext)
    const [isClicked, setIsClicked] = useState(false)

    const ShowFullScreen = () => {

        setIsClicked(!isClicked)
        console.log('clicked')
        setShowContent(() => !showContent)
    }
    return (
        <>
            <PreviewContainer>
                <MarkDownSide>
                    <h3>
                        MARKDOWN
                    </h3>
                </MarkDownSide>

                <PreviewSide>
                    <h3>
                        PREVIEW
                    </h3>

                    <PreviewButton onClick={() => ShowFullScreen()}>
                        {isClicked ? <img src={EyeBtnShow} alt=" show preview button" />: <img src={EyeBtnHide} alt="hide preview button" />}
                    </PreviewButton>
                </PreviewSide>
            </PreviewContainer>
        </>
    )
}

export default Preview