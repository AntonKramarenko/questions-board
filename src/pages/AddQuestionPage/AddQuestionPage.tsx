import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CeateQuestion } from '../../components/componentsPage/CeateQuestion'
import { PageHeader } from '../../components/componentsPage/PageHeader'
import './AddQuestionPage.scss'

interface IAddQuestionPage{
}

export const AddQuestionPage:React.FC<IAddQuestionPage> = () => {
  const navigate = useNavigate()

  const clickRejectHandler =()=>{
    navigate('/exams/New-Exam-Title-Here')
  }

  const clickApproveHandler =()=>{
    console.log('clickApproveHandler');
  }

  return (
    <div className='addQuestionPage'>
        <PageHeader  
        title='Add Question' 
          clickReject={()=> clickRejectHandler()} 
          clickApprove={()=>clickApproveHandler()} 
          titleReject='Delete Question' 
          titleApprove='Save Question'
          />
          <div className="addQuestionPage__box">
            <CeateQuestion/>
          </div>
    </div>
  )
}
