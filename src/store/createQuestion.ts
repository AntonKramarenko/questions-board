import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMultipleInputQuestion, IMatchingItemAnswer, IMatchingItemQuestion, IMultipleInputAnswer } from '../types'

interface CreateQuestioState {
	questonType: string,
	inputQuestion: IMultipleInputQuestion | IMatchingItemQuestion[],
	answer:IMultipleInputAnswer[] | IMatchingItemAnswer[]
	points:number,
	teacherComment:string
}

const initialState: CreateQuestioState = {
	questonType: '',
	inputQuestion:{
		selectImagesValue:[],
		questionValue:''
	},
	answer:[],
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
		inputQuestion(state:CreateQuestioState,action:PayloadAction<IMultipleInputQuestion| IMatchingItemQuestion[]>){
			state.inputQuestion = action.payload
		},
		answers(state:CreateQuestioState, action:PayloadAction<IMultipleInputAnswer[] | IMatchingItemAnswer[]>){
			state.answer = action.payload
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

export const { questionType,inputQuestion,point,teacherComment,answers,clearCreateQuestion} = createQuestion.actions
export default createQuestion.reducer