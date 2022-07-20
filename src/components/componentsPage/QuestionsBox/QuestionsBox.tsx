import React from 'react'
import {useNavigate } from 'react-router-dom'
import { ButtonOutline } from '../../componentsUI/ButtonOutline'
import './QuestionsBox.scss'

export const QuestionsBox = () => {
  let navigate = useNavigate();

  const addQuestionHandler =()=>{
    console.log(1);
    return navigate('/exams/New-Exam-Title-Here/new-question')
  }
  return (
    <section className='questionsBox'>
       <div className="questionsBox__header">
            <div className="questionsBox__counter">Questions (0)</div>
            <ButtonOutline btnName='Add Question' click={addQuestionHandler}/>
       </div>
    </section>
  )
}
