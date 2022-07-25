import React, { useContext, useEffect, useState } from 'react'
import { SelectQuestionContext } from '../../../pages/AddQuestionPage'
import { useAppDispatch } from '../../../store'
import { answers, changeType, clearCreateQuestion, inputQuestion } from '../../../store/createQuestion'
import { IMatchingItem, IMatchingItemAnswer, IMatchingItemQuestion } from '../../../types'
import { AnswerPoints } from '../../componentsUI/AnswerPoints'
import { TeacherComments } from '../../componentsUI/TeacherComments/TeacherComments'
import { MatchingQuestionItem } from './MatchingQuestionItem/MatchingQuestionItem'
import './MatchingTypeQuestion.scss'

export const MatchingTypeQuestion:React.FC = React.memo(() => {
	const [ questionValues, setQuestionValues ] = useState<IMatchingItem[]>()
	const dispatch = useAppDispatch()

	useEffect(() => {
		if(questionValues ){
			dispatch(inputQuestion(getQuestion(questionValues)))
			dispatch(answers(getAnswers(questionValues)))
		}
	}, [ questionValues ])
	
	const getQuestion =(arr:IMatchingItem[]) =>{
		return arr.map((item:IMatchingItemQuestion )=>{
			return {id:item.id,questionValue: item.questionValue, imagesQuestion: item.imagesQuestion }
		})
	}

	const getAnswers =(arr:IMatchingItem[]) =>{
		return arr.map((item:IMatchingItemAnswer )=>{
			return {id:item.id, answerValue: item.answerValue, imagesAnswer: item.imagesAnswer }
		})
	}
	
	const clickItemHandler =(inputValue:IMatchingItem)=>{
		
		if(questionValues){
			const arr = [ ...questionValues, inputValue ].reverse()
			const filteredData = arr.filter((value, index, self) => self.findIndex(v => v.id === value.id ) === index)
			setQuestionValues(filteredData)
		}else{
			setQuestionValues([ inputValue ])
		}
	}
	
	return (
		<div className='matchingTypeQuestion'>
			<div className='matchingTypeQuestion__title'>2. Questions / Answers</div>
			<div className='matchingTypeQuestion__questions-body'>
				<div className='matchingTypeQuestion__body-title question'>Question</div>
				<div className='matchingTypeQuestion__body-title answer'>Correct Answer</div>
				<MatchingQuestionItem id='1' change={clickItemHandler}/>
				<MatchingQuestionItem id='2' change={clickItemHandler}/>
				<MatchingQuestionItem id='3' change={clickItemHandler}/>
				<MatchingQuestionItem id='4' change={clickItemHandler}/>
			</div>
			<div className='matchingTypeQuestion__title'>3. Points</div>
			<AnswerPoints/>
			<div className='matchingTypeQuestion__title'>4. Comments</div>
			<TeacherComments/>
		</div>
	)
})
