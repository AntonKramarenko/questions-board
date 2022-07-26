import React from 'react'
import {useNavigate } from 'react-router-dom'
import { ButtonOutline } from '../../componentsUI/ButtonOutline'
import { Questions } from '../Questions/Questions'
import { useAppSelector } from '../../../store'
import './QuestionsBox.scss'

export const QuestionsBox:React.FC = React.memo(() => {
	let navigate = useNavigate()
	const questions = useAppSelector(state => state.questions)
  
	const addQuestionHandler =()=>{
		return navigate('/exams/New-Exam-Title-Here/new-question')
	}
	return (
		<section className='questionsBox'>
			<div className='questionsBox__header'>
				<div className='questionsBox__counter'>Questions ({questions.length})</div>
				<ButtonOutline 
					btnName='Add Question' 
					click={addQuestionHandler}
				/>
			</div>
			<div className='questionsBox__body'>
				{questions.length > 0 && <Questions questions={questions}/>}
			</div>
		</section>
	)
})