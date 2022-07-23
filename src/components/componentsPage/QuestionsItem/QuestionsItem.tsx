import React from 'react'
import './QuestionsItem.scss'
import { TrashIcon } from '../../componentsUI/TrashIcon'
import { EditIcon } from '../../componentsUI/EditIcon'
import { QuestionItemMatching } from '../../componentsUI/QuestionItemMatching'

export const QuestionsItem = () => {
	return (
		<div className='questionsItem'>
			<div className='questionsItem__counter'>1</div>
			<div className='questionsItem__question'>
                <QuestionItemMatching/>
            </div>
			<div className='questionsItem__standart'>7A</div>
			<div className='questionsItem__actions'>
				<TrashIcon/>
				<EditIcon/>
			</div>
		</div>
	)
}
