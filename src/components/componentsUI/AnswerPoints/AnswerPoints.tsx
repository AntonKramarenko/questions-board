import React, { useContext, useEffect, useState } from 'react'
import { SelectQuestionContext } from '../../../pages/AddQuestionPage'
import { ButtonOutline } from '../ButtonOutline'
import { useAppDispatch } from '../../../store'
import { point } from '../../../store/createQuestion'
import './AnswerPoints.scss'

export const AnswerPoints:React.FC = React.memo(() => {
	const [ answerPoit,setAnswerPoint ] = useState<number>(1)
	const dispatch = useAppDispatch()
	const context = useContext(SelectQuestionContext)

	useEffect(() => {
		if(context ) setAnswerPoint(context.points)
	}, [ context ])

	useEffect(() => {
		dispatch(point(answerPoit))
	}, [ answerPoit ])
	

	const setAnswerPointsHandler =()=>{
		const valueHandler:string | null = prompt('How many points you want to give for a correct answer', '1')
		if( valueHandler && +valueHandler) setAnswerPoint(+valueHandler)
	}
  
	return (
		<div className='answerPoints'>
			<div className='answerPoints__values'>
				<div className='answerPoints__value'>{answerPoit}</div>
				<span className='answerPoints__text'>point for the right answer</span>
			</div>
			<ButtonOutline btnName='Change' click={()=>setAnswerPointsHandler()}/>
		</div>
	)
})