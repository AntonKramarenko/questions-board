import React from 'react'
import TrashLogo from '../../../assets/icons/trash.png'
import './TrashIcon.scss'

interface ITrashIcon {
	click: () => void
}

export const TrashIcon:React.FC<ITrashIcon> = React.memo(({click}) => {
	return (
		<div className='trashIcon' onClick={() => click()} >
			<img src={TrashLogo} alt='trash' className='trashIcon-img' />
		</div>
	)
})
