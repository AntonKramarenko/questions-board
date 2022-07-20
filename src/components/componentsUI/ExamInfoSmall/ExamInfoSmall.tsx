import React from 'react'
import './ExamInfoSmall.scss'
import logo from '../../../assets/img/graduetion_cap.png'

export const ExamInfoSmall = () => {
  return (
    <div className='examInfoSmall'>
        <img src={logo} alt="" />
       <div className="examInfoSmall__info">
           <h2 className="examInfoSmall__title">Grade</h2>
           <div className="examInfoSmall__value">Grade 1</div>
       </div>
    </div>
  )
}
