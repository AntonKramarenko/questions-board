import React, {useEffect, useState } from 'react'
import { SelectImagesBox } from '../../../componentsUI/SelectImagesBox'
import { UniversalInput } from '../../../componentsUI/UniversalInput'
import { IMatchingItem } from '../../../../types'
import './MatchingQuestionItem.scss'
import { useAppSelector } from '../../../../store'

interface IMatchingQuestionItem{
    id:string,
	change:(value:IMatchingItem) => void
}

export const MatchingQuestionItem: React.FC<IMatchingQuestionItem> = ({id,change}) => {
	const [ imagesQuestion,setImagesQuestion ] = useState<string[]>([])
	const [ imagesAnswer,setImagesAnswer ] = useState<string[]>([])
	const [ questionValue,setQuestionValue ] = useState<string>('')
	const [ answerValue,setAnswerValue ] = useState<string>('')

	const [ isInputClick, setInputClick ] = useState(false)
	const [ isEmpty, setIsEmpty ] = useState(true)
	const createQuestionValue = useAppSelector(state => state.createQuestion)

	const dataItem = {
		id:id,  
		questionValue:questionValue,
		imagesQuestion:imagesQuestion,
		answerValue:answerValue,
		imagesAnswer:imagesAnswer
	}

	useEffect(() => {
		if(createQuestionValue.id){
			createQuestionValue.answer.forEach((item => {
				if(item.id === id){
					setAnswerValue(item.answerValue)
					setImagesAnswer(item.imagesAnswer)
				}})
			)
			if(Array.isArray(createQuestionValue.inputQuestion)){
				createQuestionValue.inputQuestion.forEach(item =>{
					if(item.id === id){
						setQuestionValue(item.questionValue)
						setImagesQuestion(item.imagesQuestion)
					}
				})
			}
		}
	}, [ createQuestionValue ])
	
	useEffect(() => {
		if(imagesQuestion.length || questionValue && imagesAnswer.length || answerValue){
			setIsEmpty(false)
			change(dataItem)
		}else {
			setIsEmpty(true)
		}
	}, [ imagesQuestion, imagesAnswer, questionValue,answerValue ])

	return (
		<>
			<div className={ isInputClick && isEmpty ? 'matchingQuestionItem question isEmpty' : 'matchingQuestionItem question'} > 
				<div className='matchingQuestionItem__header'>
					<span>{id}.</span> 
					<UniversalInput 
						inputValue={questionValue}
						setInputValue={setQuestionValue}
						id={id+ 'question'}
						placeholder='Question Text' 
						selectImages={imagesQuestion} 
						setSelectImages={setImagesQuestion} 
						inputClick={setInputClick}
					/>
				</div> 
				{imagesQuestion.length>0  && <SelectImagesBox isCanDelete={true} images={imagesQuestion}/>}
			</div>
			<div className={ isInputClick && isEmpty ? 'matchingQuestionItem answer isEmpty' : 'matchingQuestionItem answer'}>
				<div className='matchingQuestionItem__header'>
					<UniversalInput 
						inputValue={answerValue}
						setInputValue={setAnswerValue}
						id={id + 'answer'}
						placeholder='Answer Text' 
						selectImages={imagesAnswer} 
						setSelectImages={setImagesAnswer}
						inputClick={setInputClick}
					/>
				</div>
				{imagesAnswer.length>0  && <SelectImagesBox isCanDelete={true} images={imagesAnswer}/>}
			</div>
		</>
	)
}
