import React from 'react'
import { AnswerPoints } from '../../componentsUI/AnswerPoints'
import { TeacherComments } from '../../componentsUI/TeacherComments/TeacherComments'
import { UniversalInput } from '../../componentsUI/UniversalInput'
import './MatchingTypeQuestion.scss'

export const MatchingTypeQuestion = () => {
  return (
    <div className='matchingTypeQuestion'>
        <div className="matchingTypeQuestion__title">2. Questions / Answers</div>
        <div className="matchingTypeQuestion__questions-body">
            <div className="matchingTypeQuestion__body-title question">Question</div>
            <div className="matchingTypeQuestion__body-title answer">Correct Answer</div>
            <div className="matchingTypeQuestion__body-item question"> <span>1.</span> <UniversalInput placeholder='Question Text'/></div>
            <div className="matchingTypeQuestion__body-item answer"><UniversalInput placeholder='Answer Text'/></div>
            <div className="matchingTypeQuestion__body-item question"><span>2.</span>  <UniversalInput placeholder='Question Text'/></div>
            <div className="matchingTypeQuestion__body-item answer"><UniversalInput placeholder='Answer Text'/></div>
            <div className="matchingTypeQuestion__body-item question"><span>3.</span>  <UniversalInput placeholder='Question Text'/></div>
            <div className="matchingTypeQuestion__body-item answer"><UniversalInput placeholder='Answer Text'/></div>
            <div className="matchingTypeQuestion__body-item question"><span>4.</span>  <UniversalInput placeholder='Question Text'/></div>
            <div className="matchingTypeQuestion__body-item answer"><UniversalInput placeholder='Answer Text'/></div>
        </div>
        <div className="matchingTypeQuestion__title">3. Points</div>
        <AnswerPoints/>
        <div className="matchingTypeQuestion__title">4. Comments</div>
        <TeacherComments/>
    </div>
  )
}
