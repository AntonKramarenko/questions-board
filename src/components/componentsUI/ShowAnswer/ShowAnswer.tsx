import React from 'react'
import './ShowAnswer.scss'
import { SelectImagesBox } from '../SelectImagesBox'

export const ShowAnswer = () => {
	return (
		<div className='showAnswer'>
			<div className='showAnswer__value'>
				<span className='showAnswer__count'>1.</span>  
				<div className='showAnswer__answer'>Long long text here non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet
				</div>
			</div>
			<SelectImagesBox images={[ '' ]}/>
		</div>
	)
}