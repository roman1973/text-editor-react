import React, {useEffect, useRef, useState} from 'react'

import ToolsPanel from './components/ToolsPanel'
import Footer from './components/Footer'
import {textAreaContext, inputHandler, createInnerHTML} from './utils/helper'

const App = () => {
  
  const  textAreaRef= useRef(null);
  const [render, setRender] = useState(false)
  const [isHTML, setIsHTML] = useState(false)
  const [isJSON, setIsJSON] = useState(false)
  const [isinnerHTML, setInnerHTML]=useState([])
      
  useEffect(() => {
    document.execCommand('styleWithCSS', false, true)
    setRender(!render)
  }, [])

  useEffect(() => {
    textAreaRef.current.focus()
    document.execCommand('selectAll', false, null)
    document.getSelection().collapseToEnd()
  },[isinnerHTML])

  return(
    <div className="wrapper">
      <h1 className="title">Text Editor</h1>
      <textAreaContext.Provider value={textAreaRef.current}>
        <ToolsPanel 
          tools={['foreColor', 'fontSize', 'hiliteColor', 'undo', 'redo']}
        />
       <div 
         name={render}
         contenteditable="true"
         ref={textAreaRef}
         className="text-area"
         onInput={(e)=>inputHandler(setInnerHTML, textAreaRef)}
         dangerouslySetInnerHTML={{ __html: createInnerHTML(isinnerHTML)}}
        />
        
      <Footer 
        setRender={setRender}
        render={render}
        isinnerHTML={isinnerHTML}
        isHTML={isHTML}
        setIsHTML={setIsHTML}
        isJSON={isJSON}
        setIsJSON={setIsJSON}
        />
      </textAreaContext.Provider>
    </div>
  )  
}

export default App;
