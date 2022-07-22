import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CeateQuestion } from '../../components/componentsPage/CeateQuestion'
import { PageHeader } from '../../components/componentsPage/PageHeader'
import { useAppDispatch, useAppSelector } from '../../store'
import { clearCreateQuestion } from '../../store/createQuestion'
import { addQuestion } from '../../store/questions'
import './AddQuestionPage.scss'

interface IAddQuestionPage{
}

export const AddQuestionPage:React.FC<IAddQuestionPage> = () => {
	const dispatch = useAppDispatch()
	const questionValues = useAppSelector(state => state.createMultipleQuestion)
	const navigate = useNavigate()

	useEffect(() => {
		return ()=>{
			dispatch(clearCreateQuestion())
		}
	}, [])
	

	const clickRejectHandler =()=>{
		navigate('/exams/New-Exam-Title-Here')
	}

	const clickApproveHandler =()=>{
		dispatch(addQuestion(questionValues))
		navigate('/exams/New-Exam-Title-Here')
	}

	

	return (
		<div className='addQuestionPage'>
			<PageHeader  
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
