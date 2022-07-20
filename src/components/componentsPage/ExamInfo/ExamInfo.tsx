import React from 'react'
import { ExamInfoLarge } from '../../componentsUI/ExamInfoLarge'
import { ExamInfoSmall } from '../../componentsUI/ExamInfoSmall'
import { QuestionsBox } from '../QuestionsBox'
import './ExamInfo.scss'

import ClockLogo from '../../../assets/img/clock.png'
import TargetLogo from '../../../assets/img/target.png'
import BooksLogo from '../../../assets/img/books.png'
import HatLogo from '../../../assets/img/hat.png'





export const ExamInfo = () => {
  return (
    <div className='examInfo'>
         <ExamInfoSmall infoImg={HatLogo}  title='Grade' value='Grade 1' />
         <ExamInfoSmall infoImg={BooksLogo}  title='Subject Area' value='Science' />
        <ExamInfoLarge  infoImgTop={TargetLogo} infoImgBottom={ClockLogo}/>
        <QuestionsBox/>
    </div>
  )
}
