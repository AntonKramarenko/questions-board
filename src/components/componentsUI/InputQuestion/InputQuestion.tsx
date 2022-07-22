import React, { useState } from 'react'
import './InputQuestion.scss'
import QuestionLogo from '../../../assets/img/question.png'
import InputLogo from '../../../assets/icons/mountain.png'
import { SelectImagesBox } from '../SelectImagesBox'

export const InputQuestion = () => {
  const [selectImages,setSelectImages] = useState<string[]>([])

  const readFile = (event:any) => {
    if(event.target.files) {
      const fileArr = Array.from(event.target.files).map((file:any) => URL.createObjectURL(file))
      setSelectImages([...selectImages,...fileArr])
  
      revokeEventFiles(event.target.files)
    }    
  }

const revokeEventFiles =(files:any) =>{
    Array.from(files).map((file:any) => URL.revokeObjectURL(file))
}

function auto_grow(e:any) {
  e.target.style.height = '32px';
  e.target.style.height = `${e.target.scrollHeight}px`; 
}

  return (
    <div className='inputQuestion'>
      <div className="inputQuestion__header">
        <img src={QuestionLogo} alt='' />
        <textarea placeholder='Question Text...' required wrap='soft' onChange={(e)=>auto_grow(e)}/>
        <input type="file" id={`file-uploader-question`} multiple onChange={(e)=> readFile(e)}/>
            <label htmlFor={`file-uploader-question`}>
              <img src={InputLogo} alt="" />
        </label>
      </div>
      {selectImages.length>0  && <SelectImagesBox images={selectImages}/>}
    </div>
  )
}
