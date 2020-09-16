import React from 'react';
import Color from './Tools/Color'
import Size from './Tools/Size'
import Fill from './Tools/Fill'
import Undo from './Tools/Undo'
import Redo from './Tools/Redo'


const ToolsPanel = ({tools}) => (
   <div className="tools-wrapper">
   {
     tools.map((tool, i) => {
        switch(tool) {
         case 'foreColor':
           return (
             <Color 
               key={i}
               type={tool}
             />
            )
         case 'fontSize':
           return (
             <Size 
               key={i}
               type={tool}
             />
           )
           case 'hiliteColor':
            return (
              <Fill 
                key={i}
                type={tool}
              />
             )          
            case 'undo':
              return (
                <Undo 
                  key={i}
                  type={tool}
                />
              )  
            case 'redo':
              return (
                <Redo 
                  key={i}
                  type={tool}
                />
              )     
          default:
           return (<span>icon</span>)   
       }    
     })
   }
   </div>
)


export default ToolsPanel