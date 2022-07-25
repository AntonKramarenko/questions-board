import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SideBar } from './components/componentsPage/SideBar'
import { AddQuestionPage } from './pages/AddQuestionPage'
import { NewExam } from './pages/NewExam'

const App:React.FC = () => {
	return (
		<div className='app'>
			<SideBar/>
			<Routes>
				<Route path='/exams/New-Exam-Title-Here/new-question' element={<AddQuestionPage/>}/> 
				<Route path='/exams/New-Exam-Title-Here' element={<NewExam />}/> 
				<Route path='*' element={ <Navigate to={'/exams/New-Exam-Title-Here'} /> } /> 
				<Route path='/exams/New-Exam-Title-Here/new-question/:id' element={<AddQuestionPage />}/>
			</Routes>
		</div>
	)
}

export default App