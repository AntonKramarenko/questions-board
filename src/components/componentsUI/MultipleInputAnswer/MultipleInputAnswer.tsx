import React, { useEffect, useRef, useState } from 'react'
import { SelectImagesBox } from '../SelectImagesBox'
import { UniversalInput } from '../UniversalInput'
import './MultipleInputAnswer.scss'

interface IMultipleInputAnswer{
    id:string,
	setData:(value:any) => void
}

export const MultipleInputAnswer:React.FC<IMultipleInputAnswer> = ({id,setData}) => {
	const [ selectImagesValue,setSelectImages ] = useState<string[]>([])
	const [ isCorrectAnswer,setCorrectAnswer ] = useState<boolean>(false)
	const [ answerValue,setAnswerValue ] = useState<string>('')
	const inputData = {imagesAnswer:selectImagesValue, isCorrectAnswer: isCorrectAnswer,answerValue:answerValue,id: id}

	useEffect(() => {
		if(answerValue  || selectImagesValue.length){
			setData(inputData)
		}
	}, [ selectImagesValue, isCorrectAnswer, answerValue ])

	return (
		<div className='multipleInputAnswer'>
			<div className='multipleInputAnswer__header'>
				<input type='checkbox' checked={isCorrectAnswer} onChange={() => setCorrectAnswer(!isCorrectAnswer)}/>
				<UniversalInput 
					id={id}
					placeholder='Answer Text...' 
					selectImages={selectImagesValue} 
					setSelectImages={setSelectImages}
					inputValue={answerValue}
					setInputValue={setAnswerValue}
				/>
			</div>
			{selectImagesValue.length>0  && <SelectImagesBox isCanDelete={true} images={selectImagesValue}/>}
			{isCorrectAnswer ? <div className='multipleInputAnswer__correct'> <span>&#10003;</span>Correct Answer</div> : null }
		</div>    
	)
}
