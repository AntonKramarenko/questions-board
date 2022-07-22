import React, { useEffect, useState } from 'react'
import { IMultipleAnswer,  IQuestionValueTotal } from '../../../types'
import { AnswerPoints } from '../../componentsUI/AnswerPoints'
import { ButtonOutline } from '../../componentsUI/ButtonOutline'
import { InputQuestion } from '../../componentsUI/InputQuestion'
import { MultipleInputAnswer } from '../../componentsUI/MultipleInputAnswer'
import { TeacherComments } from '../../componentsUI/TeacherComments/TeacherComments'
import './MultipleTypeQuestion.scss'

interface IMultipleTypeQuestion{
}


export const MultipleTypeQuestion:React.FC<IMultipleTypeQuestion> = ({}) => {
  const [answersCount,setAnswersCount] = useState<string[]>(['answer1','answer2'])

  

  const addInputAnswerHandler =() => {
    const newAnswerId = `answer${answersCount.length+1}`
    setAnswersCount([...answersCount, newAnswerId])
  }

  return (
    <div className='multipleTypeQuestion'>
        <div className="multipleTypeQuestion__title">2. Question</div>
        <InputQuestion />
        <div className="multipleTypeQuestion__title">3. Answers <span>(please tick the correct answers)</span></div>
        {
          answersCount.map(ans =>  <MultipleInputAnswer key={ans} id={ans} />)
        }
        <ButtonOutline btnName='Add Answer' click={()=>addInputAnswerHandler()}/>
        <div className="multipleTypeQuestion__title">4. Points</div>
        <AnswerPoints/>
        <div className="multipleTypeQuestion__title">5. Comments</div>
        <TeacherComments/>
    </div>
  )
}
