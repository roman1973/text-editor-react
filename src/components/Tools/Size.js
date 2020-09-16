import React, {useContext} from 'react';
import Icon from '../UI/Icon'
import {textAreaContext} from '../../utils/helper'
import { toolHelper } from '../../utils/helper'

const Size = ({type}) => {
        return( 
      <div className="tool">
        <Icon 
          type={type}
        />
        <span className="tool-text">size</span>
        <select onChange={(e) => toolHelper(e, type)}>
           <option selected>- font-size -</option>
           <option value="1">Tiny</option>
           <option value="2">Small</option>
           <option value="3">Normal</option>
           <option value="4">Big</option>
           <option value="5">Bigger</option>
           <option value="6">Biggest</option>
           <option value="7">Huge</option>
        </select>
     </div>
    )
}

export default Size