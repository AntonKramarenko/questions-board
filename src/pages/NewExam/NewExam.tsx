import React from 'react'
import { ExamInfo } from '../../components/componentsPage/ExamInfo'
import { PageHeader } from '../../components/componentsPage/PageHeader'
import { QuestionsBox } from '../../components/componentsPage/QuestionsBox'
import { SchoolsBoard } from '../../components/componentsPage/SchoolsBoard'
import './NewExam.scss'

export const NewExam = () => {
    
  return (
    <section className='newExam'>
        <PageHeader 
          title='New Exam Title Here' 
          clickReject={console.log} 
          clickApprove={console.log} 
          titleReject='Delete Exam' 
          titleApprove='Save Exam'
        />
        <div className="newExam__info">
          <ExamInfo/>
          <SchoolsBoard/>
        </div>
     </section>
  )
}
