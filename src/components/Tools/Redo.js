import React from 'react';
import { toolHelper } from '../../utils/helper'


const Redo = ({type}) => ( 
    <div 
      className="tool undo" 
      onClick={(e) => toolHelper(e, type)}
     >
       redo
    </div>
)

export default Redo