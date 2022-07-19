import React from 'react'
import { ExamInfoSmall } from '../ExamInfoSmall'
import './ExamInfoLarge.scss'

export const ExamInfoLarge = () => {
  return (
    <div className='examInfoLarge'>
       <ExamInfoSmall/>
       <span></span>
      <ExamInfoSmall/>
    </div>
  )
}
