import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {  IQuestionState } from '../types'

const initialState: IQuestionState[] = []

export const question = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		addQuestion(state:IQuestionState[],action:PayloadAction<IQuestionState>){
			state.push(action.payload)
		},
		removeQuestion(state:IQuestionState[],action:PayloadAction<number>){
			return state.filter(question => question.id !== action.payload)
		},
		changeQuestion(state:IQuestionState[], action:PayloadAction<IQuestionState>){
			const filterArr = state.filter(item => item.id !==action.payload.id)
			return state = [...filterArr, action.payload]
		}
	}
})

export const { addQuestion,removeQuestion,changeQuestion} = question.actions
export default question.reducer