import React, {  useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CeateQuestion } from '../../components/componentsPage/CeateQuestion'
import { PageHeader } from '../../components/componentsPage/PageHeader'
import { useAppDispatch, useAppSelector } from '../../store'
import {  clearCreateQuestion } from '../../store/createQuestion'
import { addQuestion } from '../../store/questions'
import './AddQuestionPage.scss'

interface IAddQuestionPage{
}

export const AddQuestionPage:React.FC<IAddQuestionPage> = () => {
	const dispatch = useAppDispatch()
	const questionValues = useAppSelector(state => state.createQuestion)
	const [ isCanSave, setCanSave ] = useState<boolean>(false)
	const navigate = useNavigate()

	useEffect(() => {
		return ()=>{
			dispatch(clearCreateQuestion())
		}
	}, [])


	useEffect(() => {
	  if(Array.isArray(questionValues.inputQuestion)){
			let noEmptyQuestion = questionValues.inputQuestion.filter(item => item.questionValue.length || item.imagesQuestion.length)
			let noEmptyAnswers = questionValues.answer.filter(item => item.answerValue.length || item.imagesAnswer.length)

			if(questionValues.inputQuestion.length === noEmptyQuestion.length 
				&& questionValues.answer.length === noEmptyAnswers.length 
				&& questionValues.inputQuestion.length >3
			) setCanSave(true)
			else setCanSave(false)
	  } else {
			if(questionValues.answer.length >= 2 && questionValues.inputQuestion.questionValue.length || questionValues.inputQuestion.imagesQuestion.length  ){
				let noEmptyAnswers = questionValues.answer.filter(item => item.answerValue.length || item.imagesAnswer.length)

				if(noEmptyAnswers.length === questionValues.answer.length) setCanSave(true)
				else setCanSave(false)
			}
	  }
	}, [ questionValues ])
	

	const clickRejectHandler =()=>{
		navigate('/exams/New-Exam-Title-Here')
	}

	const clickApproveHandler =()=>{
		if(isCanSave){
			const currentQuestion = {...questionValues, id: Date.now()}
			dispatch(addQuestion(currentQuestion))
			navigate('/exams/New-Exam-Title-Here')
		}
	}

	return (
		<div className='addQuestionPage'>
			<PageHeader  
				isCanSave={isCanSave}
				title='Add Question' 
				clickReject={()=> clickRejectHandler()} 
				clickApprove={()=>clickApproveHandler()} 
				titleReject='Delete Question' 
				titleApprove='Save Question'
			/>
			<div className='addQuestionPage__box'>
				<CeateQuestion/>	
			</div>
		</div>
	)
}
