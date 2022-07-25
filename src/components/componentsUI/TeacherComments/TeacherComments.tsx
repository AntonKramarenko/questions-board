import React, { useContext, useEffect, useState } from 'react'
import './TeacherComments.scss'
import NoteLogo from '../../../assets/img/note.png'
import { useAppDispatch } from '../../../store'
import { teacherComment } from '../../../store/createQuestion'
import { SelectQuestionContext } from '../../../pages/AddQuestionPage'

export const TeacherComments = () => {
	const [ teacherComments,setComments ] = useState<string>('')
	const context = useContext(SelectQuestionContext)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if(context ){
			setComments(context.teacherComment)
		}
	}, [ context ])

	useEffect(() => {
		dispatch(teacherComment(teacherComments))
	}, [ teacherComments ])
  

	return (
		<div className='teacherComments'>
			<img src={NoteLogo} alt='' />
			<textarea 
				value={teacherComments}
				placeholder='Teacher comment...' 
				onChange={e => setComments(e.target.value)}
			/>
		</div>
	)
}
