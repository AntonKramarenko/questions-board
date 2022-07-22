import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInputQuestion, IMatchingItem, IMultipleInputAnswer } from '../types'

interface CreateQuestioState {
	questonType: string,
	inputQuestion?: IInputQuestion,
	values:IMultipleInputAnswer[] | IMatchingItem[]
	points:number,
	teacherComment:string
}

const initialState: CreateQuestioState = {
	questonType: '',
	inputQuestion:{
		selectImagesValue:[],
		questionValue:''
	},
	values:[],
	points: 1,
	teacherComment: ''
}

export const createQuestion = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		questionType(state:CreateQuestioState, action:PayloadAction<string>){
			state.questonType = action.payload
		},
		inputQuestion(state:CreateQuestioState,action:PayloadAction<IInputQuestion>){
			state.inputQuestion = action.payload
		},
		values(state:CreateQuestioState, action:PayloadAction<IMultipleInputAnswer[] | IMatchingItem[]>){
			state.values = action.payload
		},
		point(state:CreateQuestioState, action:PayloadAction<number>){
			state.points = action.payload
		},
		teacherComment(state:CreateQuestioState, action:PayloadAction<string>){
			state.teacherComment = action.payload
		},
		clearCreateQuestion(state:CreateQuestioState){
			return initialState
		}
	}
})

export const { questionType,inputQuestion,point,teacherComment,values,clearCreateQuestion} = createQuestion.actions
export default createQuestion.reducer