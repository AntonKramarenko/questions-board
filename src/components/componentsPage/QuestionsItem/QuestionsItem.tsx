import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TrashIcon } from '../../componentsUI/TrashIcon'
import { EditIcon } from '../../componentsUI/EditIcon'
import { QuestionValue } from '../QuestionValue'
import { IMatchingItemAnswer, IMatchingItemQuestion, IMultipleInputAnswer, IMultipleInputQuestion } from '../../../types'
import { useAppDispatch } from '../../../store'
import { removeQuestion } from '../../../store/questions'
import './QuestionsItem.scss'

interface IQuestionsItem{
	id:number
    indexValue:number,
    questonType:string,
	inputQuestion:IMultipleInputQuestion| IMatchingItemQuestion[] ,
	answer:IMultipleInputAnswer[] | IMatchingItemAnswer[]
}

export const QuestionsItem:React.FC<IQuestionsItem> = ({indexValue,questonType, inputQuestion,answer,id}) => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const clickDeleteItemHandler = () => {
		dispatch(removeQuestion(id))
	}

	const clickEditHansler = () =>{
		navigate(`/exams/New-Exam-Title-Here/new-question/${ id }`)
	}

	return (
		<div className='questionsItem'>
			<div className='questionsItem__counter'>{indexValue}</div>
			<div className='questionsItem__question'>
				<QuestionValue questonType={questonType} inputQuestion={inputQuestion} answer={answer}/>
			</div>
			<div className='questionsItem__standart'>7A</div>
			<div className='questionsItem__actions'>
				<TrashIcon click={clickDeleteItemHandler}/>
				<EditIcon click ={clickEditHansler}/>
			</div>
		</div>
	)
}