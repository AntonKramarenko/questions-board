import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../store'
import { answers, changeType } from '../../../store/createQuestion'
import { IMultipleInputItem } from '../../../types'
import { AnswerPoints } from '../../componentsUI/AnswerPoints'
import { ButtonOutline } from '../../componentsUI/ButtonOutline'
import { InputQuestion } from '../../componentsUI/InputQuestion'
import { MultipleInputAnswer } from '../../componentsUI/MultipleInputAnswer'
import { TeacherComments } from '../../componentsUI/TeacherComments/TeacherComments'
import './MultipleTypeQuestion.scss'

interface IMultipleTypeQuestion{
}


export const MultipleTypeQuestion:React.FC<IMultipleTypeQuestion> = () => {
	const [ answersCount,setAnswersCount ] = useState<string[]>([ '1','2' ])
	const [ data, setData ] = useState<IMultipleInputItem[]>([])
	const dispatch = useAppDispatch()

	useEffect(() => {
	  return () => {
			dispatch(changeType())
		}
	}, [])
	
	useEffect(() => {
		if(data.length){
			dispatch(answers(data))
		}
	}, [ data ])

	const addData = (InputValue:any)=>{
		if(data){
			const arr = [ ...data, InputValue ].reverse()
			const filteredData = arr.filter((value, index, self) => self.findIndex(v => v.id === value.id ) === index)
		  	setData(filteredData)
		}else{ setData([ InputValue ]) }
	}
  
	const addInputAnswerHandler =() => {
		const newAnswerId = `${ answersCount.length+1 }`
		setAnswersCount([ ...answersCount, newAnswerId ])
	}

	return (
		<div className='multipleTypeQuestion'>
			<div className='multipleTypeQuestion__title'>2. Question</div>
			<InputQuestion />
			<div className='multipleTypeQuestion__title'>3. Answers <span>(please tick the correct answers)</span></div>
			{
				answersCount.map(ans =>  <MultipleInputAnswer key={ans} id={ans} setData={addData}/>)
			}
			<ButtonOutline btnName='Add Answer' click={()=>addInputAnswerHandler()}/>
			<div className='multipleTypeQuestion__title'>4. Points</div>
			<AnswerPoints/>
			<div className='multipleTypeQuestion__title'>5. Comments</div>
			<TeacherComments/>
		</div>
	)
}