import React from 'react';
import Icon from '../UI/Icon'
import { toolHelper } from '../../utils/helper'

const Color = ({type}) => ( 
    <div className="tool">
    <Icon 
       type={type}
       className="tool-icon"
    />
    <span className="tool-text">color</span>
    <input 
       type="color" 
       className="tool-value"
       onChange={(e) => toolHelper(e, type)}
    />
    </div>
)

export default Color