import React from 'react'

/**
 * Component returned array of tag
 */

const StructureRender = ({ structure }) => {console.log('structure')
  if (structure && structure.length) {
     return structure.map((node, i) => {
    const {value} = node
    const style = {...node}
    delete style.value
    return (
        <span
          key={i}
          style={style}
        >
          {value}
        </span>
    )
   })
   
} else {
    return (<span></span>)
}
}

export default StructureRender