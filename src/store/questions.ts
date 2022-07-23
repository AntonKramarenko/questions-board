import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMultipleInputQuestion, IMatchingItemAnswer, IMatchingItemQuestion, IMultipleInputAnswer } from '../types'

interface CreateQuestioState {
	questonType: string,
	inputQuestion: IMultipleInputQuestion | IMatchingItemQuestion[],
	answer:IMultipleInputAnswer[] | IMatchingItemAnswer[]
	points:number,
	teacherComment:string
}

const initialState: CreateQuestioState[] = []

export const question = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		addQuestion(state:CreateQuestioState[],action:PayloadAction<CreateQuestioState>){
			state.push(action.payload)
		}
	}
})

export const { addQuestion} = question.actions
export default question.reducer