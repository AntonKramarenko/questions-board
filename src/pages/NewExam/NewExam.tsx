import React, { useEffect, useMemo, useState } from 'react'
import { ExamInfo } from '../../components/componentsPage/ExamInfo'
import { PageHeader } from '../../components/componentsPage/PageHeader'
import { SchoolsBoard } from '../../components/componentsPage/SchoolsBoard'
import { useAppDispatch, useAppSelector } from '../../store'
import { io } from 'socket.io-client'
import './NewExam.scss'
import { IExamInfo } from '../../types'
import { setExamInfo } from '../../store/examInfo'

export const NewExam = () => {
	const [ examTitle,setExamTitle ] = useState<string>('New Exam Title Here')
	const questions = useAppSelector(state => state.questions)
	const dispatch = useAppDispatch()

	const socket = io('wss://front-test-sockets.herokuapp.com')

	useEffect(() => {
		socket.connect()
		socket.emit('get data')

		return () => {
			socket.disconnect()
		  }
	}, [])

	useEffect(() => {		
		try {
			socket.on('data', (data:IExamInfo) => {
				console.log(1)
				dispatch(setExamInfo(data))
			})
		} catch (error) {
			throw new Error('error socket')
		}
	}, [ socket ])
	
    
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
