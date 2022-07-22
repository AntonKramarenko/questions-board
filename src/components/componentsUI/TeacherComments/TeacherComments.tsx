import React, { useEffect, useState } from 'react'
import './TeacherComments.scss'
import NoteLogo from '../../../assets/img/note.png'
import { useAppDispatch } from '../../../store'
import { teacherComment } from '../../../store/createQuestion'

export const TeacherComments = () => {
	const [ teacherComments,setComments ] = useState<string>('')

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(teacherComment(teacherComments))
  }, [teacherComments])
  

	return (
		<div className='teacherComments'>
			<img src={NoteLogo} alt='' />
			<textarea 
				placeholder='Teacher comment...' 
				onChange={e => setComments(e.target.value)}
			/>
		</div>
	)
}
