import React, { useEffect, useState } from 'react'
import { Type } from 'typescript'
import { useAppDispatch } from '../../../store'
import { values } from '../../../store/createQuestion'
import { IMultipleInputItem } from '../../../types'
import { AnswerPoints } from '../../componentsUI/AnswerPoints'
import { ButtonOutline } from '../../componentsUI/ButtonOutline'
import { InputQuestion } from '../../componentsUI/InputQuestion'
import { MultipleInputAnswer } from '../../componentsUI/MultipleInputAnswer'
import { TeacherComments } from '../../componentsUI/TeacherComments/TeacherComments'
import './MultipleTypeQuestion.scss'

interface IMultipleTypeQuestion{
}


export const MultipleTypeQuestion:React.FC<IMultipleTypeQuestion> = ({}) => {
	const [ answersCount,setAnswersCount ] = useState<string[]>([ 'answer1','answer2' ])
	const [ data, setData ] = useState<IMultipleInputItem[]>([])
	const dispatch = useAppDispatch()

	useEffect(() => {
		if(data.length){
			dispatch(values(data))
		}
	}, [data])
	


	const add = (InputValue:any)=>{
		if(data){
			const arr = [ ...data, InputValue ].reverse()
			const filteredData = arr.filter((value, index, self) => self.findIndex(v => v.id === value.id ) === index)
		  	setData(filteredData)
		}else{
			setData([ InputValue ])
		}
		
	}


  
	const addInputAnswerHandler =() => {
		const newAnswerId = `answer${ answersCount.length+1 }`
		setAnswersCount([ ...answersCount, newAnswerId ])
	}

	return (
		<div className='multipleTypeQuestion'>
			<div className='multipleTypeQuestion__title'>2. Question</div>
			<InputQuestion />
			<div className='multipleTypeQuestion__title'>3. Answers <span>(please tick the correct answers)</span></div>
			{
				answersCount.map(ans =>  <MultipleInputAnswer key={ans} id={ans} setData={add}/>)
			}
			<ButtonOutline btnName='Add Answer' click={()=>addInputAnswerHandler()}/>
			<div className='multipleTypeQuestion__title'>4. Points</div>
			<AnswerPoints/>
			<div className='multipleTypeQuestion__title'>5. Comments</div>
			<TeacherComments/>
		</div>
	)
}