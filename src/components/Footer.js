import React, {useContext} from 'react'

import {textAreaContext, setDocMode, jsonMode} from '../utils/helper'


const Footer = ({setRender, render, isinnerHTML, isHTML, setIsHTML, isJSON, setIsJSON}) => {
    const textRef = useContext(textAreaContext)
    return(
    <div className="tools-wrapper footer">
      <div>
        <input 
          id="switchBox" 
          type="checkbox" 
          onInput={(e) => setDocMode(e, textRef, setIsHTML)} 
          {
            ...(isJSON && { disabled: "disabled"})
          }
        /> 
        <label for="switchBox">  Show HTML</label>
      </div>
      <div>
      <input 
         id="switchBox" 
         type="checkbox" 
         {
            ...(isHTML && { disabled: "disabled"})
         }
         onInput={(e) => jsonMode(e, textRef, setRender, render,isinnerHTML, setIsJSON)}
       /> 
      <label for="switchBox">  Show Structure</label>
      </div>
    </div>
)
}
export default Footer