import React, { useEffect, useRef } from 'react'
import './UniversalInput.scss'
import InputLogo from '../../../assets/icons/mountain.png'

interface IUniversalInput{
  id: string,
  placeholder: string,
  selectImages:string[],
  inputValue:string,
  setSelectImages:([]) => void,
  setInputValue:(value:string) => void,
  inputClick?: (value:boolean) => void
}

export const UniversalInput:React.FC<IUniversalInput> = (props) => {
	const {placeholder, selectImages,setSelectImages,id,inputValue,setInputValue,inputClick} = props

	useEffect(() => {
   
		return () => {
			revokeEventFiles(selectImages)
		}
	}, [])

	const readFile = (event:any) => {
		if(event.target.files) {
			const fileArr = Array.from(event.target.files).map((file:any) => URL.createObjectURL(file))
			setSelectImages([ ...selectImages,...fileArr ])
		}    
	}

	const revokeEventFiles =(files:string[]) =>{
		Array.from(files).map((file:string) => URL.revokeObjectURL(file))
	}

	const writeTextHandler:React.ChangeEventHandler<HTMLTextAreaElement>  =(e)=> {
		if(inputClick)inputClick(true)
		setInputValue(e.target.value)
		e.target.style.height = '32px'
		e.target.style.height = `${ e.target.scrollHeight }px` 
	}
	

	return (
		<div className='universalInput'>
			<textarea 
				value={inputValue}
				wrap='soft' 
				placeholder={placeholder} 
				onChange={(e)=> writeTextHandler(e)} 
			/>
			<input type='file' id={`file-uploader${ placeholder }${ id }`} multiple onChange={(e)=> readFile(e)}/>
			<label htmlFor={`file-uploader${ placeholder }${ id }`}>
				<img src={InputLogo} alt='' />
			</label>
		</div>
	)
}
