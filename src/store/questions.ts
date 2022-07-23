import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {  IQuestionState } from '../types'


const initialState: IQuestionState[] = []

export const question = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		addQuestion(state:IQuestionState[],action:PayloadAction<IQuestionState>){
			state.push(action.payload)
		}
	}
})

export const { addQuestion} = question.actions
export default question.reducer