import React from 'react'
import { ExamInfoLarge } from '../../componentsUI/ExamInfoLarge'
import { ExamInfoSmall } from '../../componentsUI/ExamInfoSmall'
import './ExamInfo.scss'


export const ExamInfo = () => {
  return (
    <div className='examInfo'>
         <ExamInfoSmall/>
         <ExamInfoSmall/>

        <ExamInfoLarge />
    </div>
  )
}
