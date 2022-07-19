import React from 'react'
import { PageHeader } from '../../components/componentsPage/PageHeader'
import './NewExam.scss'

export const NewExam = () => {
    
  return (
    <div className='newExam'>
        <PageHeader 
          title='New Exam Title Here' 
          clickReject={console.log} 
          clickApprove={console.log} 
          titleReject='Delete Exam' 
          titleApprove='Save Exam'
        />
        
        <span>NewExam</span>
        
        </div>
  )
}
