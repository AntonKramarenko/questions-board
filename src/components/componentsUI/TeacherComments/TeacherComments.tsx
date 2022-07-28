import React, {useEffect, useState } from 'react'
import NoteLogo from '../../../assets/img/note.png'
import { useAppDispatch, useAppSelector } from '../../../store'
import { teacherComment } from '../../../store/createQuestion'
import './TeacherComments.scss'

export const TeacherComments:React.FC = React.memo(() => {
	const [ teacherComments,setComments ] = useState<string>('')
	const dispatch = useAppDispatch()
	const createQuestionValue = useAppSelector(state => state.createQuestion)

	useEffect(() => {
		if(createQuestionValue ){
			setComments(createQuestionValue.teacherComment)
		}
	}, [ createQuestionValue ])

	useEffect(() => {
		dispatch(teacherComment(teacherComments))
	}, [ teacherComments ])
  
	return (
		<div className='teacherComments'>
			<img src={NoteLogo} alt='teacherComments' />
			<textarea 
				value={teacherComments}
				placeholder='Teacher comment...' 
				onChange={e => setComments(e.target.value)}
			/>
		</div>
	)
})