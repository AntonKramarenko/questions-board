import React from 'react'
import { ButtonOutline } from '../ButtonOutline'
import './AnswerPoints.scss'

export const AnswerPoints = () => {
  return (
    <div className='answerPoints'>
      <div className="answerPoints__values">
        <div className="answerPoints__value">1</div>
        <span className="answerPoints__text">point for the right answer</span>
      </div>
      <ButtonOutline/>
    </div>
  )
}
