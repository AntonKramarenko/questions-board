import React, { useState } from 'react'
import { AnswerPoints } from '../../componentsUI/AnswerPoints'
import { TeacherComments } from '../../componentsUI/TeacherComments/TeacherComments'
import { UniversalInput } from '../../componentsUI/UniversalInput'
import { MatchingQuestionItem } from './MatchingQuestionItem/MatchingQuestionItem'
import './MatchingTypeQuestion.scss'

export const MatchingTypeQuestion = () => {

  return (
    <div className='matchingTypeQuestion'>
        <div className="matchingTypeQuestion__title">2. Questions / Answers</div>
        <div className="matchingTypeQuestion__questions-body">
            <div className="matchingTypeQuestion__body-title question">Question</div>
            <div className="matchingTypeQuestion__body-title answer">Correct Answer</div>
            <MatchingQuestionItem/>
            <MatchingQuestionItem/>
            <MatchingQuestionItem/>
            <MatchingQuestionItem/>
        </div>
        <div className="matchingTypeQuestion__title">3. Points</div>
        <AnswerPoints/>
        <div className="matchingTypeQuestion__title">4. Comments</div>
        <TeacherComments/>
    </div>
  )
}
