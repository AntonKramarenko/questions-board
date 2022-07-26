import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IExamInfo } from '../types'

const initialState:IExamInfo = {
	course:'',
	grade:'',
	schools:[],
	subject:'',
	time:''
}

export const examInfo = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		setExamInfo(state:IExamInfo,actions:PayloadAction<IExamInfo>){
			return  state = actions.payload
		}
	}
})

export const {setExamInfo} = examInfo.actions
export default examInfo.reducer