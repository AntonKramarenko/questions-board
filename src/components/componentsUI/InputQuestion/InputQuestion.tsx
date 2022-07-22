import React, { useContext, useEffect, useState } from 'react'
import './InputQuestion.scss'
import QuestionLogo from '../../../assets/img/question.png'
import InputLogo from '../../../assets/icons/mountain.png'
import { SelectImagesBox } from '../SelectImagesBox'
import { IQuestionValueTotal } from '../../../types'

interface IInputQuestion{
//   setQuestionValueTotal:(value:IQuestionValueTotal) =>void
}

export const InputQuestion:React.FC<IInputQuestion> = ({}) => {
	const [ selectImages, setSelectImages ] = useState<string[]>([])
	const [ questionValue, setQuestionVaue ] = useState<string>('')

	const readFile:React.ChangeEventHandler<HTMLInputElement>  = (event) => {
		if(event.target.files) {
			const fileArr = Array.from(event.target.files).map((file:any) => URL.createObjectURL(file))
			setSelectImages([ ...selectImages,...fileArr ])
		}    
	}

	const revokeEventFiles =(files:string[]) =>{
		Array.from(files).map((file:string) => URL.revokeObjectURL(file))
	}

	const writeTextHandler:React.ChangeEventHandler<HTMLTextAreaElement> = (e) =>{
		setQuestionVaue(e.target.value)
		inputHeight(e)
	}

	const inputHeight:React.ChangeEventHandler<HTMLTextAreaElement> =(e) =>{
		e.target.style.height = '32px'
		e.target.style.height = `${ e.target.scrollHeight }px` 
	}

	return (
		<div className='inputQuestion'>
			<div className='inputQuestion__header'>
				<img src={QuestionLogo} alt='question' />
				<textarea 
					placeholder='Question Text...' 
					required 
					wrap='soft' 
					onChange={(e)=>writeTextHandler(e)}
				/>
				<input type='file' id={'file-uploader-question'} multiple onChange={(e)=> readFile(e)}/>
				<label htmlFor={'file-uploader-question'}>
					<img src={InputLogo} alt='inputFile' />
				</label>
			</div>
			{selectImages.length>0  && <SelectImagesBox images={selectImages}/>}
		</div>
	)
}