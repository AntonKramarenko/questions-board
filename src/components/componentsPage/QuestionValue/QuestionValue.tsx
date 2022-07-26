import React, { useState } from 'react'
import { ShowAnswer } from '../../componentsUI/ShowAnswer'
import { ShowQuestion } from '../../componentsUI/ShowQuestion'
import {  IMatchingItemAnswer, IMatchingItemQuestion, IMultipleInputAnswer, IMultipleInputQuestion } from '../../../types'
import './QuestionValue.scss'
import { QUESTIONS } from '../../../types/Enum'

interface IQuestionItemMultiple{
	questonType:string,
	inputQuestion:IMultipleInputQuestion| IMatchingItemQuestion[] ,
	answer:IMultipleInputAnswer[] | IMatchingItemAnswer[]
}

export const QuestionValue:React.FC<IQuestionItemMultiple> = React.memo((props) => {
	const {questonType,inputQuestion,answer} = props
	const [ isVisible,setVisible ] = useState<boolean>(false)

	return (
		<div className='questionValue'>
			{questonType === QUESTIONS.MATCHING
				? <h5 className='questionValue__type matching'>{questonType}</h5>
				: <h5 className='questionValue__type multiple'>{questonType}</h5>
			}
			<div className='questionValue__question'>
				{Array.isArray(inputQuestion) 
					? inputQuestion.map(question => <ShowQuestion key={question.id} {...question}/> )
					: <ShowQuestion key={inputQuestion.questionValue} {...inputQuestion}/>
				}
			</div>
			{isVisible && <div className='questionValue__answers'>
				<div className='questionValue__answers-title'>Answer(s)</div>
				{answer.map(ans =><ShowAnswer key={ans.id} id={ans.id} answerValue={ans.answerValue} imagesAnswer={ans.imagesAnswer}/> )}
			</div>
			}
			<div 
				className='questionValue__showAnswer' 
				onClick={()=> setVisible(!isVisible)}> 
				{isVisible 
					? 'Hide Answer(s)'
					:  'Show Answer(s)'
				}
			</div>
		</div>
	)
})