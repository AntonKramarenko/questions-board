import React, { useState } from 'react'
import { IoCaretDownOutline } from 'react-icons/io5'
import ThinkLogo from '../../../assets/img/think.png'
import { useAppDispatch } from '../../../store'
import { changeType } from '../../../store/createQuestion'
import { QUESTIONS } from '../../../types/Enum'
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
				<div className='questionTypeSelect__body-values' onClick={()=> clickValueHandler(QUESTIONS.MULTIPLE_CHOICE)}> <img src={ThinkLogo} alt='' />{QUESTIONS.MULTIPLE_CHOICE}</div>
				<div className='questionTypeSelect__body-values' onClick={()=> clickValueHandler(QUESTIONS.MATCHING)}> <img src={ThinkLogo} alt='' /> {QUESTIONS.MATCHING}</div>
			</div>}
		</div>
	)
})