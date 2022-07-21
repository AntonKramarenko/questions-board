import React, { useState } from 'react'
import { SelectImagesBox } from '../SelectImagesBox'
import { SelectImgQuestion } from '../SelectImgQuestion'
import { UniversalInput } from '../UniversalInput'
import './MultipleInputAnswer.scss'

interface IMultipleInputAnswer{
    id:string
}

export const MultipleInputAnswer:React.FC<IMultipleInputAnswer> = () => {
  const [selectImages,setSelectImages] = useState<string[]>([])

  return (
    <div className='multipleInputAnswer'>
      <div className="multipleInputAnswer__header">
        <input type="checkbox" />
        <UniversalInput placeholder='Answer Text...' selectImages={selectImages} setSelectImages={setSelectImages}/>
      </div>
      {selectImages.length>0  && <SelectImagesBox images={selectImages}/>}
    </div>
  )
}
