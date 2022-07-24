import React from 'react'
import './TrashIcon.scss'
import TrashLogo from '../../../assets/icons/trash.png'

interface ITrashIcon {
	click: () => void
}

export const TrashIcon:React.FC<ITrashIcon> = ({click}) => {
	return (
		<div className='trashIcon' onClick={() => click()} >
			<img src={TrashLogo} alt='trash' className='trashIcon-img' />
		</div>
	)
}
