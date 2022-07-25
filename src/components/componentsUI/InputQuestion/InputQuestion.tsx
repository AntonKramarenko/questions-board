import React, { useContext, useEffect, useRef, useState } from 'react'
import { SelectImagesBox } from '../SelectImagesBox'
import { SelectQuestionContext } from '../../../pages/AddQuestionPage'
import QuestionLogo from '../../../assets/img/question.png'
import InputLogo from '../../../assets/icons/mountain.png'
import { useAppDispatch } from '../../../store'
import { inputQuestion } from '../../../store/createQuestion'
import './InputQuestion.scss'

export const InputQuestion:React.FC = React.memo(({}) => {
	const [ selectImages, setSelectImages ] = useState<string[]>([])
	const [ questionValue, setQuestionVaue ] = useState<string>('')
	const [ isInputClick, setInputClick ] = useState<boolean>(false)
	const [ isEmpty, setIsEmpty ] = useState<boolean>(true)
	const dispatch = useAppDispatch()
	const inputRef = useRef<HTMLTextAreaElement>(null)
	const context = useContext(SelectQuestionContext)

	useEffect(() => {
		inputRef.current?.focus()
	  	return () => {
			revokeEventFiles(selectImages)
	  	}
	}, [])

	useEffect(() => {
		if(context && !Array.isArray(context.inputQuestion) ){
			setQuestionVaue(context.inputQuestion.questionValue)
			setSelectImages(context.inputQuestion.imagesQuestion)
		}
	}, [ context ])

	useEffect(() => {
		if(questionValue.length || selectImages.length) setIsEmpty(false)
		else setIsEmpty(true)

		dispatch(inputQuestion({imagesQuestion:selectImages, questionValue: questionValue}))
	}, [ selectImages, questionValue ])
	
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
		setInputClick(true)
		setQuestionVaue(e.target.value)
		inputHeight(e)
	}

	const inputHeight:React.ChangeEventHandler<HTMLTextAreaElement> =(e) =>{
		e.target.style.height = '32px'
		e.target.style.height = `${ e.target.scrollHeight }px` 
	}

	return (
		<div className={isInputClick && isEmpty  ? 'inputQuestion isEmpty': 'inputQuestion'} >
			<div className='inputQuestion__header'>
				<img src={QuestionLogo} alt='question' />
				<textarea 
					ref={inputRef}
					placeholder='Question Text...' 
					required 
					wrap='soft' 
					value={questionValue}
					onChange={(e)=>writeTextHandler(e)}
				/>
				<input type='file' id={'file-uploader-question'} multiple onChange={(e)=> readFile(e)}/>
				<label htmlFor={'file-uploader-question'}>
					<img src={InputLogo} alt='inputFile' />
				</label>
			</div>
			{selectImages.length>0  && <SelectImagesBox isCanDelete={true} images={selectImages}/>}
		</div>
	)
})