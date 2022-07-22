import React, {  useEffect, useState } from 'react'
import { useAppDispatch } from '../../../store'
import {  clearCreateQuestion, questionType } from '../../../store/createQuestion'
import { QuestionTypeSelect } from '../../componentsUI/QuestionTypeSelect'
import { MatchingTypeQuestion } from '../MatchingTypeQuestion'
import { MultipleTypeQuestion } from '../MultipleTypeQuestion'
import './CeateQuestion.scss'



export const CeateQuestion:React.FC = () => {
	const [ questonType,setType ] = useState<string>('Multiple choice')
	const dispatch = useAppDispatch()

  

	useEffect(()=>{
		dispatch(questionType(questonType))
    dispatch(clearCreateQuestion())
	},[ questonType ])


	return (
		<div className='ceateQuestion'>
			<div className='ceateQuestion__title'>1. Question Type</div>
			<QuestionTypeSelect questonType={questonType} setType={setType}/>
			{
				questonType === 'Matching' 
					? <MatchingTypeQuestion />
					: <MultipleTypeQuestion />
			}
		</div>
	)
}