import React, {  useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SelectQuestionContext } from '../../../pages/AddQuestionPage'
import { useAppDispatch, useAppSelector } from '../../../store'
import { questionType } from '../../../store/createQuestion'
import { IQuestionState } from '../../../types'
import { QuestionTypeSelect } from '../../componentsUI/QuestionTypeSelect'
import { MatchingTypeQuestion } from '../MatchingTypeQuestion'
import { MultipleTypeQuestion } from '../MultipleTypeQuestion'
import './CeateQuestion.scss'


export const CeateQuestion:React.FC = React.memo(() => {
	const [ questonType,setType ] = useState<string>('Multiple choice')
	const dispatch = useAppDispatch()
	const context = useContext(SelectQuestionContext)

	useEffect(() => {
		if(context ){
			setType(context.questonType)
		}
	}, [ context ])
	
	

	useEffect(()=>{
		dispatch(questionType(questonType))
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
})