import React, { useEffect, useState } from 'react'
import { ButtonOutline } from '../ButtonOutline'
import { useAppDispatch, useAppSelector } from '../../../store'
import { point } from '../../../store/createQuestion'
import './AnswerPoints.scss'

export const AnswerPoints:React.FC = React.memo(() => {
	const [ answerPoit,setAnswerPoint ] = useState<number>(1)
	const dispatch = useAppDispatch()
	const createQuestionValue = useAppSelector(state => state.createQuestion)

	useEffect(() => {
		if(createQuestionValue ) setAnswerPoint(createQuestionValue.points)
	}, [ createQuestionValue ])

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
			<ButtonOutline btnName='Change' click={setAnswerPointsHandler}/>
		</div>
	)
})