import React from 'react'
import './EditIcon.scss'
import PenLogo from '../../../assets/icons/pen.png'

export const EditIcon = () => {
	return (
		<div className='editIcon'>
			<img src={PenLogo} alt='editIcon'  className='editIcon-img'/>
		</div>
	)
}
