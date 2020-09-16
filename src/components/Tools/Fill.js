import React, {useContext} from 'react';
import Icon from '../UI/Icon'
import {textAreaContext, toolHelper} from '../../utils/helper'

const Fill = ({type}) => {
  const textRef = useContext(textAreaContext)  
  return( 
    <div className="tool">
    <Icon 
       type={type}
       className="tool-icon"
    />
    <span className="tool-text">fill</span>
    <input 
       type="color" 
       className="tool-value" 
       onChange={(e) => toolHelper(e, type, textRef)}
    />
    </div>
  )
}
export default Fill