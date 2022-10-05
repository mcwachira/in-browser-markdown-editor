import { createContext, useEffect, useState } from "react";
import data from '../data/data.json'
import MarkdownIt from "markdown-it";
import  '../theme/theme.css'
import highlightjs from "markdown-it-highlightjs";




export const MarkDownContext = createContext({

    markDownText:"",
    showContent:false,
    parsedContent:"",
    documentName:"",

    setParsedContent:() =>{},
    setMarkDownText: () => {},
    setShowContent: () => {},
    setDocumentName:() => {},

})

const dt = data.map((d) => (d))
console.log(dt[0].name)
console.log(dt[1])


export const MarkDownProvider = ({children}) => {
    const [markDownText, setMarkDownText] = useState(dt[1].content);
    const [documentName, setDocumentName] = useState(dt[1].name)
    const [parsedContent,setParsedContent] = useState("");
    const [showContent, setShowContent] = useState(false);


    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
           
            //console.log(markDownText)
            const md = new MarkdownIt().use(highlightjs);
            setParsedContent(md.render(markDownText))
    }, [markDownText])

    const value ={
        markDownText,
        setMarkDownText,
        parsedContent,
        setParsedContent,
        showContent,
        setShowContent,
        isVisible, 
        setIsVisible,
        documentName,
        setDocumentName,


    }

    return  <MarkDownContext.Provider value={value}>{children} </MarkDownContext.Provider>
} 