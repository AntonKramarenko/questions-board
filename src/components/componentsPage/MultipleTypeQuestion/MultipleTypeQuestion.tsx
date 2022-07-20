import React from 'react'
import { AnswerPoints } from '../../componentsUI/AnswerPoints'
import { ButtonOutline } from '../../componentsUI/ButtonOutline'
import { InputQuestion } from '../../componentsUI/InputQuestion'
import { MultipleInputAnswer } from '../../componentsUI/MultipleInputAnswer'
import { TeacherComments } from '../../componentsUI/TeacherComments/TeacherComments'
import './MultipleTypeQuestion.scss'

export const MultipleTypeQuestion = () => {
  return (
    <div className='multipleTypeQuestion'>
        <div className="multipleTypeQuestion__title">2. Question</div>
        <InputQuestion/>
        <div className="multipleTypeQuestion__title">3. Answers <span>(please tick the correct answers)</span></div>
        <MultipleInputAnswer/>
        <MultipleInputAnswer/>
        <MultipleInputAnswer/>
        <ButtonOutline/>
        <div className="multipleTypeQuestion__title">4. Points</div>
        <AnswerPoints/>
        <div className="multipleTypeQuestion__title">4. Comments</div>
        <TeacherComments/>
    </div>
  )
}
