import React, {useEffect, useState } from 'react'
import { QuestionTypeSelect } from '../../componentsUI/QuestionTypeSelect'
import { MatchingTypeQuestion } from '../MatchingTypeQuestion'
import { MultipleTypeQuestion } from '../MultipleTypeQuestion'
import { useAppDispatch, useAppSelector} from '../../../store'
import { questionType } from '../../../store/createQuestion'
import './CeateQuestion.scss'
import { QUESTIONS } from '../../../types/Enum'


export const CeateQuestion:React.FC = React.memo(() => {
	const [ questonType,setType ] = useState<string>(QUESTIONS.MULTIPLE_CHOICE)
	const dispatch = useAppDispatch()
	const createQuestionValue = useAppSelector(state => state.createQuestion)

	useEffect(() => {
		if(createQuestionValue.questonType ){
			setType(createQuestionValue.questonType)
		}
	}, [ createQuestionValue ])

	useEffect(()=>{
		dispatch(questionType(questonType))
	},[ questonType ])

	return (
		<div className='ceateQuestion'>
			<div className='ceateQuestion__title'>1. Question Type</div>
			<QuestionTypeSelect questonType={questonType} setType={setType}/>
			{
				questonType === QUESTIONS.MATCHING 
					? <MatchingTypeQuestion />
					: <MultipleTypeQuestion />
			}
		</div>
	)
})