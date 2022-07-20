import React from 'react'
import { QuestionTypeSelect } from '../../componentsUI/QuestionTypeSelect'
import { MatchingTypeQuestion } from '../MatchingTypeQuestion'
import { MultipleTypeQuestion } from '../MultipleTypeQuestion'
import './CeateQuestion.scss'

export const CeateQuestion = () => {
  return (
    <div className='ceateQuestion'>
        <div className="ceateQuestion__title">1. Question Type</div>
        <QuestionTypeSelect/>

        {/* <MultipleTypeQuestion/> */}
        <MatchingTypeQuestion/>
    </div>
  )
}
