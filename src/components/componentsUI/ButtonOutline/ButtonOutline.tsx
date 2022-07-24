import React from 'react'
import './ButtonOutline.scss'
interface IButtonOutline{
  btnName:string,
  click:()=> void
}

export const ButtonOutline: React.FC<IButtonOutline> = ({btnName,click}) => {
	return (
		<button 
			className='buttonOutline' 
			onClick={click}
		>
			{btnName}
		</button>
	)
}
