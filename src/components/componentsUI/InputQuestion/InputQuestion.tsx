import React from 'react'
import './InputQuestion.scss'
import QuestionLogo from '../../../assets/img/question.png'

export const InputQuestion = () => {
  return (
    <div className='inputQuestion'>
      
        <img src={QuestionLogo} alt="" />
        <input placeholder='Question Text...' required />
    </div>
  )
}
