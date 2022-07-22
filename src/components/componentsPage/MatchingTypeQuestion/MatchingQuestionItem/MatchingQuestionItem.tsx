import React, { useState } from 'react'
import { SelectImagesBox } from '../../../componentsUI/SelectImagesBox'
import { UniversalInput } from '../../../componentsUI/UniversalInput'
import './MatchingQuestionItem.scss'

interface IMatchingQuestionItem{
    id:string
}

export const MatchingQuestionItem: React.FC<IMatchingQuestionItem> = ({id}) => {
	const [ imagesQuestion,setImagesQuestion ] = useState<string[]>([])
	const [ imagesAnswer,setImagesAnswer ] = useState<string[]>([])
	const [ questionValue,setQuestionValue ] = useState<string>('')
	const [ answerValue,setAnswerValue ] = useState<string>('')
    
	return (
		<>
			<div className='matchingQuestionItem question'> 
				<div className='matchingQuestionItem__header'>
					<span>1.</span> 
					<UniversalInput 
						inputValue={questionValue}
						setInputValue={setQuestionValue}
						id={id+ 'question'}
						placeholder='Question Text' 
						selectImages={imagesQuestion} 
						setSelectImages={setImagesQuestion} 
					/>
				</div> 
				{imagesQuestion.length>0  && <SelectImagesBox images={imagesQuestion}/>}
			</div>
			<div 
				className='matchingQuestionItem answer'>
				<div className='matchingQuestionItem__header'>
					<UniversalInput 
						inputValue={answerValue}
						setInputValue={setAnswerValue}
						id={id + 'answer'}
						placeholder='Answer Text' 
						selectImages={imagesAnswer} 
						setSelectImages={setImagesAnswer}
					/>
				</div>
				{imagesAnswer.length>0  && <SelectImagesBox images={imagesAnswer}/>}
			</div>
		</>
	)
}
