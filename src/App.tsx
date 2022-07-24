import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.scss'
import { SideBar } from './components/componentsPage/SideBar'
import { AddQuestionPage } from './pages/AddQuestionPage'
import { NewExam } from './pages/NewExam'

const App = () => {

	return (
		<div className='app'>
			<SideBar/>
			<Routes>
				<Route path='/exams/New-Exam-Title-Here/new-question' element={<AddQuestionPage/>}/> {/* add valiable name exam */}
				<Route path='/exams/New-Exam-Title-Here' element={<NewExam />}/> {/* add valiable name exam */}
				<Route path='*' element={ <Navigate to={'/exams/New-Exam-Title-Here'} /> } /> {/* add valiable name exam */}
			</Routes>
		</div>
	)
}

export default App