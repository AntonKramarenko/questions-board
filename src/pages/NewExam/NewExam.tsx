import React, { useState } from 'react'
import { ExamInfo } from '../../components/componentsPage/ExamInfo'
import { PageHeader } from '../../components/componentsPage/PageHeader'
import { SchoolsBoard } from '../../components/componentsPage/SchoolsBoard'
import { useAppSelector } from '../../store'
import './NewExam.scss'

export const NewExam = () => {
	const [ examTitle,setExamTitle ] = useState<string>('New Exam Title Here')
	const questions = useAppSelector(state => state.questions)
    
	return (
		<section className='newExam'>
			<PageHeader 
				isCanSave={questions.length > 0}
				title={examTitle} 
				clickReject={console.log} 
				clickApprove={console.log} 
				titleReject='Delete Exam' 
				titleApprove='Save Exam'
			/>
			<div className='newExam__info'>
				<ExamInfo />
				<SchoolsBoard/>
			</div>
		</section>
	)
}
