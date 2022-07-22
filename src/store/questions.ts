import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInputQuestion, IMatchingItem, IMultipleInputAnswer } from '../types'

interface CreateQuestioState {
	questonType: string,
	inputQuestion?: IInputQuestion,
	values:IMultipleInputAnswer[] | IMatchingItem[]
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