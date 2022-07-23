import React from 'react'
import { IQuestionState } from '../../../types'
import { QuestionsItem } from '../QuestionsItem'
import './Questions.scss'

interface IQuestion {
    questions: IQuestionState[]
}

export const Questions:React.FC<IQuestion> = (questions) => {
	return (
		<section className='questions'>
			<div className='questions__header'>
				<span>#</span><span>Question</span><span>Standart</span><span>Actions</span>
			</div>
			<div className='questions__body'>
				<QuestionsItem/>
			</div>
		</section>      
	)
}
