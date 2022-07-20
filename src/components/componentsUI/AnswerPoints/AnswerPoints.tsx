import React, { useState } from 'react'
import { ButtonOutline } from '../ButtonOutline'
import './AnswerPoints.scss'

export const AnswerPoints = () => {
  const [answerPoit,setAnswerPoint] = useState<number>(1)

  const setAnswerPointsHandler =()=>{
    const valueHandler:string | null = prompt('How many points you want to give for a correct answer', '1');
    if( valueHandler && +valueHandler) setAnswerPoint(+valueHandler)
  }
  
  return (
    <div className='answerPoints'>
      <div className="answerPoints__values">
        <div className="answerPoints__value">{answerPoit}</div>
        <span className="answerPoints__text">point for the right answer</span>
      </div>
      <ButtonOutline btnName='Change' click={()=>setAnswerPointsHandler()}/>
    </div>
  )
}
