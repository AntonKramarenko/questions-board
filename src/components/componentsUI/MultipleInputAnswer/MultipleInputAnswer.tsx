import React, { useState } from 'react'
import { SelectImagesBox } from '../SelectImagesBox'
import { UniversalInput } from '../UniversalInput'
import './MultipleInputAnswer.scss'

interface IMultipleInputAnswer{
    id:string
}

export const MultipleInputAnswer:React.FC<IMultipleInputAnswer> = ({id}) => {
  const [selectImages,setSelectImages] = useState<string[]>([])
  const [isCorrectAnswer,setCorrectAnswer] = useState<boolean>(false)
  
  return (
    <div className='multipleInputAnswer'>
      <div className="multipleInputAnswer__header">
        <input type="checkbox" checked={isCorrectAnswer} onChange={() => setCorrectAnswer(!isCorrectAnswer)}/>
        <UniversalInput 
          id={id}
          placeholder='Answer Text...' 
          selectImages={selectImages} 
          setSelectImages={setSelectImages}/>
      </div>
      {selectImages.length>0  && <SelectImagesBox images={selectImages}/>}
      {isCorrectAnswer ? <div className='multipleInputAnswer__correct'> <span>&#10003;</span> Correct Answer</div> : null }
    </div>    
  )
}
