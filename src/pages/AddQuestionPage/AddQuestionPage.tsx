import React, {  useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CeateQuestion } from '../../components/componentsPage/CeateQuestion'
import { PageHeader } from '../../components/componentsPage/PageHeader'
import { IQuestionState } from '../../types'
import { useAppDispatch, useAppSelector } from '../../store'
import {  clearCreateQuestion, setCreateQuestionValue } from '../../store/createQuestion'
import { addQuestion, changeQuestion } from '../../store/questions'
import './AddQuestionPage.scss'

export const SelectQuestionContext = React.createContext< IQuestionState| null>(null)

export const AddQuestionPage:React.FC = React.memo(() => {
	const [ isCanSave, setCanSave ] = useState<boolean>(false)
	const [ editQuestionValue, setEditQuestionValue ] = useState<IQuestionState | null>(null)
	const questions = useAppSelector(state => state.questions)
	const questionValues = useAppSelector(state => state.createQuestion)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const QuestionId = useParams()

	useEffect(() => {
		return ()=>{
			dispatch(clearCreateQuestion())
		}
	}, [])

	useEffect(() => {
		if(QuestionId.id){			
			let questionItem = questions.filter(item => `${ item.id }`=== QuestionId.id)
			setEditQuestionValue(questionItem[0])
		}
	}, [ QuestionId ])

	useEffect(() => {
		if(editQuestionValue) dispatch(setCreateQuestionValue(editQuestionValue))
	}, [ editQuestionValue ])

	// check the empty inputs and return boolean value
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
			if(editQuestionValue){
				dispatch(changeQuestion(questionValues))
			}else{
				const currentQuestion = {...questionValues, id: Date.now()}
				dispatch(addQuestion(currentQuestion))
			}
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
				titleReject={editQuestionValue ? 'Cancel Edit' :'Delete Question' }
				titleApprove={editQuestionValue ? 'Save changes' :'Save Question' }
			/>
			<div className='addQuestionPage__box'>
				<SelectQuestionContext.Provider value={editQuestionValue}>
					<CeateQuestion />	
				</SelectQuestionContext.Provider>		
							
			</div>
		</div>
	)
})