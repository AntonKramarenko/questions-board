import React from 'react'
import './ShowAnswer.scss'
import { SelectImagesBox } from '../SelectImagesBox'
import { IMatchingItemAnswer } from '../../../types'

export const ShowAnswer = (props:IMatchingItemAnswer) => {
	const {id, answerValue, imagesAnswer} = props
	return (
		<div className='showAnswer'>
			<div className='showAnswer__value'>
				{id.length && <span className='showAnswer__count'>{id}.</span>  }
				<div className='showAnswer__answer'>{answerValue}</div>
			</div>
			<SelectImagesBox isCanDelete={false} images={imagesAnswer}/>
		</div>
	)
}