import React, { useEffect, useState } from 'react'
import { IMultipleAnswer } from '../../../types'
import { SelectImagesBox } from '../SelectImagesBox'
import { UniversalInput } from '../UniversalInput'
import './MultipleInputAnswer.scss'

interface IMultipleInputAnswer{
    id:string,
    // answerTotal:(value:IMultipleAnswer)=>void
}

export const MultipleInputAnswer:React.FC<IMultipleInputAnswer> = ({id,}) => {
	const [ selectImages,setSelectImages ] = useState<string[]>([])
	const [ isCorrectAnswer,setCorrectAnswer ] = useState<boolean>(false)
	const [ answerValue,setAnswerValue ] = useState<string>('')

	return (
		<div className='multipleInputAnswer'>
			<div className='multipleInputAnswer__header'>
				<input type='checkbox' checked={isCorrectAnswer} onChange={() => setCorrectAnswer(!isCorrectAnswer)}/>
				<UniversalInput 
					id={id}
					placeholder='Answer Text...' 
					selectImages={selectImages} 
					setSelectImages={setSelectImages}
					inputValue={answerValue}
					setInputValue={setAnswerValue}
				/>
			</div>
			{selectImages.length>0  && <SelectImagesBox images={selectImages}/>}
			{isCorrectAnswer ? <div className='multipleInputAnswer__correct'> <span>&#10003;</span>Correct Answer</div> : null }
		</div>    
	)
}
