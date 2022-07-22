import React, { useEffect, useState } from 'react'
import { IMatchingItem } from '../../../../types'
import { SelectImagesBox } from '../../../componentsUI/SelectImagesBox'
import { UniversalInput } from '../../../componentsUI/UniversalInput'
import './MatchingQuestionItem.scss'


interface IMatchingQuestionItem{
    id:string,
	change:(value:IMatchingItem) => void
}

export const MatchingQuestionItem: React.FC<IMatchingQuestionItem> = ({id,change}) => {
	const [ imagesQuestion,setImagesQuestion ] = useState<string[]>([])
	const [ imagesAnswer,setImagesAnswer ] = useState<string[]>([])
	const [ questionValue,setQuestionValue ] = useState<string>('')
	const [ answerValue,setAnswerValue ] = useState<string>('')

	const dataItem = {
		id:id,  
		questionValue:questionValue,
		imagesQuestion:imagesQuestion,
		answerValue:answerValue,
		imagesAnswer:imagesAnswer
	}

	useEffect(() => {
		if(imagesQuestion.length || imagesAnswer.length || questionValue||answerValue){
			change(dataItem)
		}
	}, [imagesQuestion, imagesAnswer, questionValue,answerValue])

    
	return (
		<>
			<div className='matchingQuestionItem question'> 
				<div className='matchingQuestionItem__header'>
					<span>{id}.</span> 
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
