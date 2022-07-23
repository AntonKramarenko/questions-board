import React from 'react'
import { SchoolBoardItem } from '../../componentsUI/SchoolBoardItem'
import { Search } from '../../componentsUI/Search'
import './SchoolsBoard.scss'
import TeacherLogo from '../../../assets/img/teacher.png'
import { ButtonOutline } from '../../componentsUI/ButtonOutline'

export const SchoolsBoard = () => {
	return (
		<section className='schoolsBoard'>
			<div className='schoolsBoard__header'>
				<img src={TeacherLogo} alt='' />
            Assigned Teachers
			</div>
			<Search/>
			<div className='schoolsBoard__container'>
				<div className='schoolsBoard__container-header'>
					<div className='schoolsBoard__header-title'>All Schools</div>
					<input type='checkbox'  className='schoolsBoard__header-checkbox'/>
				</div>
				<ul className='schoolsBoard__body'>
					<SchoolBoardItem/>
					<SchoolBoardItem/>
					<SchoolBoardItem/>
					<SchoolBoardItem/>
					<SchoolBoardItem/>
					<SchoolBoardItem/>
					<SchoolBoardItem/>
					<SchoolBoardItem/>
					<SchoolBoardItem/>
					<SchoolBoardItem/>
				</ul>
			</div>
			<ButtonOutline btnName='Assign To Class' click={console.log}/>
		</section>
	)
}
