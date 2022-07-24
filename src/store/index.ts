import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import createQuestion from './createQuestion'
import examInfo from './examInfo'
import questions from './questions'



export const store = configureStore({
	reducer: {
		createQuestion: createQuestion,
		questions: questions,
		examInfo: examInfo
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector