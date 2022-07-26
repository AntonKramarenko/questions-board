import React from 'react'
import { IoCaretForward } from 'react-icons/io5'
import './SchoolBoardItem.scss'

interface ISchoolBoardItem{
 schollName:string
}

export const SchoolBoardItem:React.FC<ISchoolBoardItem> = React.memo(({schollName}) => {  
	return (
		<li className='schoolBoardItem'>
			<IoCaretForward/>
			<div className='schoolBoardItem__name'>{schollName}</div>
			<input type='checkbox'  className='schoolsBoard__item-checkbox'/>
		</li>
	)
})
