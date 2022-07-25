import React, { useContext, useEffect, useState } from 'react'
import { SelectQuestionContext } from '../../../pages/AddQuestionPage'
import { SelectImagesBox } from '../SelectImagesBox'
import { UniversalInput } from '../UniversalInput'
import './MultipleInputAnswer.scss'

interface IMultipleInputAnswer{
    id:string,
	setData:(value:any) => void,
}

export const MultipleInputAnswer:React.FC<IMultipleInputAnswer> = React.memo(({id,setData}) => {
	const [ selectImagesValue,setSelectImages ] = useState<string[]>([])
	const [ isCorrectAnswer,setCorrectAnswer ] = useState<boolean>(false)
	const [ answerValue,setAnswerValue ] = useState<string>('')
	const [ isInputClick, setInputClick ] = useState(false)
	const [ isEmpty, setIsEmpty ] = useState(true)
	const context = useContext(SelectQuestionContext)

	const inputData = {imagesAnswer:selectImagesValue, isCorrectAnswer: isCorrectAnswer,answerValue:answerValue,id: id}

	useEffect(() => {
		if(context ){
			context.answer.forEach((item => {
				if(item.id === id){
					setAnswerValue(item.answerValue)
					setSelectImages(item.imagesAnswer)
					setCorrectAnswer(item.isCorrectAnswer || false)
				}
			}))
		}
	}, [ context ])

	useEffect(() => {
		if(isInputClick){
			if(answerValue.length || selectImagesValue.length) {
				setData(inputData)
				setIsEmpty(false)
			} else {
				setData(inputData)
				setIsEmpty(true)
			}
		}
	}, [ selectImagesValue, isCorrectAnswer, answerValue ])

	return (
		<div className={isInputClick && isEmpty  ? 'multipleInputAnswer isEmpty' : 'multipleInputAnswer'} >
			<div className='multipleInputAnswer__header'>
				<input type='checkbox' checked={isCorrectAnswer} onChange={() => setCorrectAnswer(!isCorrectAnswer)}/>
				<UniversalInput 
					id={id}
					placeholder='Answer Text...' 
					selectImages={selectImagesValue} 
					setSelectImages={setSelectImages}
					inputValue={answerValue}
					setInputValue={setAnswerValue}
					inputClick={setInputClick}
				/>
			</div>
			{selectImagesValue.length>0  && <SelectImagesBox isCanDelete={true} images={selectImagesValue}/>}
			{isCorrectAnswer ? <div className='multipleInputAnswer__correct'> <span>&#10003;</span>Correct Answer</div> : null }
		</div>    
	)
})