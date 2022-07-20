import React from 'react'
import { QuestionTypeSelect } from '../../componentsUI/QuestionTypeSelect'
import { MultipleTypeQuestion } from '../MultipleTypeQuestion'
import './CeateQuestion.scss'

export const CeateQuestion = () => {
  return (
    <div className='ceateQuestion'>
        <div className="ceateQuestion__title">1. Question Type</div>
        <QuestionTypeSelect/>

        <MultipleTypeQuestion/>
    </div>
  )
}
