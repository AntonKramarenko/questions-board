import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../store'
import { values } from '../../../store/createQuestion'
import { IMatchingItem } from '../../../types'
import { AnswerPoints } from '../../componentsUI/AnswerPoints'
import { TeacherComments } from '../../componentsUI/TeacherComments/TeacherComments'
import { MatchingQuestionItem } from './MatchingQuestionItem/MatchingQuestionItem'
import './MatchingTypeQuestion.scss'

export const MatchingTypeQuestion:React.FC = () => {
	const [values1, setValues1] = useState<IMatchingItem>()
	const [values2, setValues2] = useState<IMatchingItem>()
	const [values3, setValues3] = useState<IMatchingItem>()
	const [values4, setValues4] = useState<IMatchingItem>()
	const dispatch = useAppDispatch()
	
	useEffect(() => {
		if(values1 && values2 &&  values3 && values4){
			dispatch(values([values1, values2, values3,values4]))
		}
	}, [values1, values2, values3,values4])
	

	return (
		<div className='matchingTypeQuestion'>
			<div className='matchingTypeQuestion__title'>2. Questions / Answers</div>
			<div className='matchingTypeQuestion__questions-body'>
				<div className='matchingTypeQuestion__body-title question'>Question</div>
				<div className='matchingTypeQuestion__body-title answer'>Correct Answer</div>
				<MatchingQuestionItem id='1' change={setValues1}/>
				<MatchingQuestionItem id='2' change={setValues2}/>
				<MatchingQuestionItem id='3' change={setValues3}/>
				<MatchingQuestionItem id='4' change={setValues4}/>
			</div>
			<div className='matchingTypeQuestion__title'>3. Points</div>
			<AnswerPoints/>
			<div className='matchingTypeQuestion__title'>4. Comments</div>
			<TeacherComments/>
		</div>
	)
}
