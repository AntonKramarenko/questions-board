import React from 'react'
import { SelectImagesBox } from '../SelectImagesBox'
import './ShowQuestion.scss'

export const ShowQuestion = () => {
  return (
    <div className='showQuestion'>
        <div className="showQuestion__value">2. Ullamco est sit aliqua dolor do amet sint?</div>
        <SelectImagesBox images={['']}/>
    </div>
  )
}
