import React from 'react'
import { ExamInfoSmall } from '../ExamInfoSmall'
import './ExamInfoLarge.scss'

interface IExamInfoLarge{
  infoImgTop:any,
  infoImgBottom:any
}

export const ExamInfoLarge: React.FC<IExamInfoLarge> = ({infoImgTop,infoImgBottom}) => {
  return (
    <div className='examInfoLarge'>
       <ExamInfoSmall infoImg={infoImgTop} title='Course' value='Biology' />
       <span></span>
      <ExamInfoSmall infoImg={infoImgBottom}  title='Amount of Time to Complete the Exam' value='180 minutes' />
    </div>
  )
}
