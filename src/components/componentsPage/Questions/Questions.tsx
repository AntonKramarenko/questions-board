import React from 'react'
import { QuestionsItem } from '../QuestionsItem'
import { IQuestionState } from '../../../types'
import './Questions.scss'

interface IQuestion {
    questions: IQuestionState[]
}

export const Questions:React.FC<IQuestion> = React.memo(({questions}) => {
	return (
		<section className='questions'>
			<div className='questions__header'>
				<span>#</span>
				<span>Question</span>
				<span>Standart</span>
				<span>Actions</span>
			</div>
			{questions.map((item:IQuestionState ,index: number) => <QuestionsItem 
				key={`${ item.id }`} 
				indexValue={index+1}  
				id={item.id}
				questonType={item.questonType} 
				inputQuestion={item.inputQuestion}  
				answer={item.answer}
			/>  )}
		</section>      
	)
})
