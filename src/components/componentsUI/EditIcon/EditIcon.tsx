import React from 'react'
import './EditIcon.scss'
import PenLogo from '../../../assets/icons/pen.png'

interface IEditIcon{
	click:() => void
}

export const EditIcon:React.FC<IEditIcon> = ({click}) => {
	return (
		<div className='editIcon' onClick={() => click()}>
			<img src={PenLogo} alt='editIcon'  className='editIcon-img'/>
		</div>
	)
}
