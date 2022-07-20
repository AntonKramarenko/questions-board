import React from 'react'
import './TeacherComments.scss'
import NoteLogo from '../../../assets/img/note.png'

export const TeacherComments = () => {
  return (
    <div className='teacherComments'>
      <img src={NoteLogo} alt="" />
      <textarea placeholder='Teacher comment...'/>
    </div>
  )
}
