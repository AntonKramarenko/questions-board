import React from 'react'
import { CeateQuestion } from '../../components/componentsPage/CeateQuestion'
import { PageHeader } from '../../components/componentsPage/PageHeader'
import './AddQuestionPage.scss'

export const AddQuestionPage = () => {
  return (
    <div className='addQuestionPage'>
        <PageHeader  
        title='Add Question' 
          clickReject={console.log} 
          clickApprove={console.log} 
          titleReject='Delete Exam' 
          titleApprove='Save Exam'
          />
          <div className="addQuestionPage__box">
            <CeateQuestion/>
          </div>
    </div>
  )
}
