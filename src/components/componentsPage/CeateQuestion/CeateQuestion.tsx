import React, {  useContext, useEffect, useState } from 'react'
import { SelectQuestionContext } from '../../../pages/AddQuestionPage'
import { QuestionTypeSelect } from '../../componentsUI/QuestionTypeSelect'
import { MatchingTypeQuestion } from '../MatchingTypeQuestion'
import { MultipleTypeQuestion } from '../MultipleTypeQuestion'
import { useAppDispatch} from '../../../store'
import { questionType } from '../../../store/createQuestion'
import './CeateQuestion.scss'
import { QUESTIONS } from '../../../types/Enum'


export const CeateQuestion:React.FC = React.memo(() => {
	const [ questonType,setType ] = useState<string>(QUESTIONS.MULTIPLE_CHOICE)
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
				questonType === QUESTIONS.MATCHING 
					? <MatchingTypeQuestion />
					: <MultipleTypeQuestion />
			}
		</div>
	)
})