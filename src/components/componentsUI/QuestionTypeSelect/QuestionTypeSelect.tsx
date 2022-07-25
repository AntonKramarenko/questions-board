import React, { useState } from 'react'
import { IoCaretDownOutline } from 'react-icons/io5'
import ThinkLogo from '../../../assets/img/think.png'
import { useAppDispatch } from '../../../store'
import { changeType } from '../../../store/createQuestion'
import './QuestionTypeSelect.scss'

interface IQuestionTypeSelect{
  questonType:string,
  setType:(value:string)=> void
}

export const QuestionTypeSelect: React.FC<IQuestionTypeSelect> = React.memo(({questonType,setType}) => {
	const [ isVisible,setVisible ] = useState(false)
	const dispatch = useAppDispatch()
	
	const clickValueHandler =(valueType:string) =>{
		dispatch(changeType())
		setType(valueType)
		setVisible(false)
	}

	return (
		<div className='questionTypeSelect'>
			<div className='questionTypeSelect__currentValue ' onClick={() => setVisible(!isVisible)}>
				<div className='questionTypeSelect__value'> <img src={ThinkLogo} alt='' /> {questonType}</div>
				<IoCaretDownOutline/>
			</div>
			{isVisible && <div className='questionTypeSelect__body'>
				<div className='questionTypeSelect__body-values' onClick={()=> clickValueHandler('Multiple choice')}> <img src={ThinkLogo} alt='' /> Multiple choice</div>
				<div className='questionTypeSelect__body-values' onClick={()=> clickValueHandler('Matching')}> <img src={ThinkLogo} alt='' /> Matching</div>
			</div>}
		</div>
	)
})