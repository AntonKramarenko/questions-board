import React, { useState } from 'react'
import { ShowAnswer } from '../ShowAnswer'
import { ShowQuestion } from '../ShowQuestion'
import './QuestionItemMatching.scss'

export const QuestionItemMatching = () => {
	const [ isVisible,setVisible ] = useState<boolean>(false)


	return (
		<div className='questionItemMatching'>
			<h5 className='questionItemMatching__type'>Matching</h5>
			<div className='questionItemMatching__questions'>
				<ShowQuestion/>
				<ShowQuestion/>
				<ShowQuestion/>
				<ShowQuestion/>
			</div>
			
			{isVisible && <div className='questionItemMatching__answers'>
				<div className='questionItemMatching__answers-title'>Answer(s)</div>
				<ShowAnswer/>
				<ShowAnswer/>
				<ShowAnswer/>
				<ShowAnswer/>
			</div>}
			<div 
				className='questionItemMatching__showAnswer' 
				onClick={()=> setVisible(!isVisible)}> 
				{isVisible 
					? 'Hide Answer(s)'
					:  'Show Answer(s)'
				}
			</div>
		</div>
	)
}
