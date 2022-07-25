import React from 'react'
import PenLogo from '../../../assets/icons/pen.png'
import './EditIcon.scss'

interface IEditIcon{
	click:() => void
}

export const EditIcon:React.FC<IEditIcon> = React.memo(({click}) => {
	return (
		<div className='editIcon' onClick={() => click()}>
			<img src={PenLogo} alt='editIcon'  className='editIcon-img'/>
		</div>
	)
})