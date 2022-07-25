import React from 'react'
import { SelectImagesBox } from '../SelectImagesBox'
import './ShowQuestion.scss'

interface IShowQuestion{
  id?:string,  
  questionValue:string,
  imagesQuestion:string[]
}

export const ShowQuestion:React.FC<IShowQuestion> = React.memo((props) => {
	const {id, questionValue, imagesQuestion} = props
	return (
		<div className='showQuestion'>
			<div className='showQuestion__value'>
				{id?.length && <span className='showQuestion__count'>{id}.</span> }
				<div className='showQuestion__answer'>{questionValue}</div>
			</div>
			<SelectImagesBox images={imagesQuestion} isCanDelete={false}/>
		</div>
	)
})