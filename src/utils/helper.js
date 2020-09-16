import React from 'react'

/**
 * create contex
 */
export const textAreaContext = React.createContext(null)

/**
 * helper for execute execComannds
 * @param {*Objct} e 
 * @param {*String} command 
 * @param {*NodeList} textRef 
 */
export const toolHelper = (e, command, textRef) => {
    document.execCommand(command, false, e.target.value || null)
}

/**
 * cancel selection of text
 * @param {*Objct} e 
 * @param {*NodeList} textRef 
 */
export const selectionCollapse = (e,textRef) => {
  if (textRef !== null) {
     window.getSelection().collapse(textRef)
    }
}

/**
 * helper for checkbox HTML
 * @param {*Objct} e 
 * @param {*NodeList} textRef 
 */
export const setDocMode = (e, textRef, setIsHTML) => {
    if (e.target.checked) {
        textRef.textContent = textRef.innerHTML
        setIsHTML(true)
    } else {
        textRef.innerHTML = textRef.textContent
        setIsHTML(false)
    }
}
 
/**
 * helper for checkbox JSON
 * @param {*Objct} e 
 * @param {*NodeList} textRef 
 * @param {*Function}setRender 
 * @param {*Boolean} render 
 * @param {*Objct} isinnerHTML 
 */
export const jsonMode = (e, textRef, setRender,render, isinnerHTML, setIsJSON) => {
    if (e.target.checked) {
       setRender(textRef.innerHTML)
       textRef.innerHTML = `<pre>${JSON.stringify(isinnerHTML, null, 4)}</pre>`
       setIsJSON(true)
    } else {
        textRef.innerHTML = render
        setIsJSON(false)
    }  
}

/**
 * return array of span
 * @param {*Array} structure 
 */
export const createInnerHTML = (structure) => {
  if (structure && structure.length) { 
    return structure.reduce((acc, node) => {
      return acc + `<span style="font-size: ${node.fontSize}; color: ${node.color}; background-color: ${node.backgroundColor};">${node.value}</span>`
    }, '')
  } else {
      return ''
    }  
}

/**
 * record text structure into state
 * @param {*Function} setInnerHTML 
 * @param {*NodeList} textAreaRef 
 */
export const inputHandler = (setInnerHTML, textAreaRef) => {
    setInnerHTML(mergeStructure([
        ...textAreaRef.current.childNodes.length === 1 && textAreaRef.current.childNodes[0].nodeName === "#text"
            ? [{
                value: textAreaRef.current.innerText,
                fontSize: 'medium',
                backgroundColor: 'transparent',
                color: '#4f5bba'
            }]
        : createStructure(Array.from(textAreaRef.current.childNodes))
    ])
    )
}

/**
 * return array of object
 * @param {Array} arr 
 */
const createStructure = (arr) => {
    return Array
    .from(arr)
    .reduce(
        (acc,node) => {
            if (node.childNodes.length > 0) {    
                if (node.childNodes.length === 1 && node.childNodes[0].nodeName === "#text") {
                    const computedStyle = window.getComputedStyle(node, null)
                    return [
                        ...acc,
                        {
                            value: node.childNodes[0].nodeValue,
                            fontSize: computedStyle.getPropertyValue('font-size'),
                            backgroundColor: computedStyle.getPropertyValue('background-color'),
                            color: computedStyle.getPropertyValue('color')
                        }  
                    ]
                } else {
                    return [
                        ...acc,
                        ...createStructure(Array.from(node.childNodes))
                    ]
                }
            } else {
                return []
            }
        },
        []
    )

}

/**
 * merge array of tag
 * 
 */
const mergeStructure = (arr) => {
    const map = new Map()
    arr.forEach((elem, index) => {
       const copyElem = {...elem}
       delete copyElem.value
       const key = JSON.stringify({...copyElem})
        if (map.has(key)) {
            const copyMapElem = map.get(key) 
           if (copyMapElem.index+1 === index) {
              map.delete(key)
              map.set(
                  key, 
                  {...elem, value: copyMapElem.value + elem.value, index}
                  )
           } else {
            map.set(key, {...elem, index})
           }
        } else {
            map.set(key, {...elem, index})
        }
    })
    return Array
    .from(map.values())
    .map(
      elem => {
         delete elem.index
         return elem
        }
    ) 
}


