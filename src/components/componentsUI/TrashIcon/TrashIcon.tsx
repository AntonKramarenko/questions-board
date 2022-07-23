import React from 'react'
import './TrashIcon.scss'
import TrashLogo from '../../../assets/icons/trash.png'

export const TrashIcon = () => {
	return (
		<div className='trashIcon'>
			<img src={TrashLogo} alt='trash' className='trashIcon-img' />
		</div>
	)
}
