import React, { useState } from 'react'
import './QuestionTypeSelect.scss'
import { IoCaretDownOutline,IoCaretUpOutline } from "react-icons/io5";
import ThinkLogo from '../../../assets/img/think.png'
import { isVisible } from '@testing-library/user-event/dist/utils';

interface IQuestionTypeSelect{
  questonType:string,
  setType:(value:string)=> void
}

export const QuestionTypeSelect: React.FC<IQuestionTypeSelect> = ({questonType,setType}) => {
  const [isVisible,setVisible] = useState(false)


  const clickValueHandler =(valueType:string) =>{
    setType(valueType)
    setVisible(false)
  }


  return (
    <div className='questionTypeSelect'>
      <div className='questionTypeSelect__currentValue ' onClick={() => setVisible(!isVisible)}>
        <div className='questionTypeSelect__value'> <img src={ThinkLogo} alt="" /> {questonType}</div>
        <IoCaretDownOutline/>
      </div>
      {isVisible && <div className="questionTypeSelect__body">
        <div className='questionTypeSelect__body-values' onClick={()=> clickValueHandler('Multiple choice')}> <img src={ThinkLogo} alt="" /> Multiple choice</div>
        <div className='questionTypeSelect__body-values' onClick={()=> clickValueHandler('Matching')}> <img src={ThinkLogo} alt="" /> Matching</div>
      </div>}
    </div>
  )
}
