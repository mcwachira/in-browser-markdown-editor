import { createContext, useEffect, useState } from "react";
import data from '../data/data.json'
import MarkdownIt from "markdown-it";
import  '../theme/theme.css'
import highlightjs from "markdown-it-highlightjs";




export const MarkDownContext = createContext({

    markDownText:"",
    showContent:false,
    parsedContent:"",

    setParsedContent:() =>{},
    setMarkDownText: () => {},
    setShowContent: () => {},

})

export const MarkDownProvider = ({children}) => {
    const [markDownText, setMarkDownText] = useState("");
    const [parsedContent,setParsedContent] = useState("");
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
            data.map((d) => setMarkDownText(d.content))
            const md = new MarkdownIt().use(highlightjs);
            setParsedContent(md.render(markDownText))
    }, [markDownText])

    const value ={
        markDownText,
        setMarkDownText,
        parsedContent,
        setParsedContent,
        setShowContent

    }

    return  <MarkDownContext.Provider value={value}>{children} </MarkDownContext.Provider>
} 