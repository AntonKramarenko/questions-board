import React from 'react'
import { IQuestionState } from '../../../types'
import { QuestionsItem } from '../QuestionsItem'
import './Questions.scss'

interface IQuestion {
    questions: IQuestionState[]
}

export const Questions:React.FC<IQuestion> = ({questions}) => {
	return (
		<section className='questions'>
			<div className='questions__header'>
				<span>#</span><span>Question</span><span>Standart</span><span>Actions</span>
			</div>
			<div className='questions__body'>
				{questions.map((item:IQuestionState ,index: number) => <QuestionsItem 
					key={`${ item.id }`} 
					indexValue={index+1}  
					id={item.id}
					questonType={item.questonType} 
					inputQuestion={item.inputQuestion}  
					answer={item.answer}
				/>  )}
			</div>
		</section>      
	)
}
