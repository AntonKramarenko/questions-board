import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { ExamInfo } from '../../components/componentsPage/ExamInfo'
import { PageHeader } from '../../components/componentsPage/PageHeader'
import { SchoolsBoard } from '../../components/componentsPage/SchoolsBoard'
import { Loader } from '../../components/componentsUI/Loader'
import { setExamInfo } from '../../store/examInfo'
import { useAppDispatch, useAppSelector } from '../../store'
import { IExamInfo } from '../../types'
import './NewExam.scss'

export const NewExam:React.FC = React.memo(() => {
	const [ examTitle,setExamTitle ] = useState<string>('New Exam Title Here')
	const questions = useAppSelector(state => state.questions)
	const [ load,setLoad ] = useState<boolean>(true)
	const dispatch = useAppDispatch()
	const socket = io('wss://front-test-sockets.herokuapp.com')

	useEffect(() => {	
		socket.emit('get data')
		socketGetInfo()
		return () => {
			socket.disconnect()
		}
	}, [])

	const socketGetInfo = () =>{
		try {
			socket.on('data', (data:IExamInfo) => {
				dispatch(setExamInfo(data))
				if(load) setLoad(false)
			})
		} catch (error) {
			throw new Error('Error socket get data')
		}
	}

	if(load) return <Loader/>
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
})