import React from 'react';
import { toolHelper } from '../../utils/helper'

const Undo = ({type}) => ( 
    <div 
      className="tool undo" 
      onClick={(e) => toolHelper(e, type)}
     >
       undo
    </div>
)

export default Undo