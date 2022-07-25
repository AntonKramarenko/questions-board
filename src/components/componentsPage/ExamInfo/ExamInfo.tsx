import React, { useMemo }  from 'react'
import { ExamInfoLarge } from '../../componentsUI/ExamInfoLarge'
import { ExamInfoSmall } from '../../componentsUI/ExamInfoSmall'
import { QuestionsBox } from '../QuestionsBox'
import {  useAppSelector } from '../../../store'
import './ExamInfo.scss'

import ClockLogo from '../../../assets/img/clock.png'
import TargetLogo from '../../../assets/img/target.png'
import BooksLogo from '../../../assets/img/books.png'
import HatLogo from '../../../assets/img/hat.png'



export const ExamInfo:React.FC = React.memo(() => {
	const examInfo = useAppSelector(state => state.examInfo)
	
	return (
		<div className='examInfo'>
			<ExamInfoSmall infoImg={HatLogo}  title='Grade' value={examInfo.grade}/>
			<ExamInfoSmall infoImg={BooksLogo}  title='Subject Area' value={examInfo.subject} />
			<ExamInfoLarge  infoImgTop={TargetLogo} infoImgBottom={ClockLogo} valueTop={examInfo.course} valueBottom={examInfo.time}/>
			<QuestionsBox/>
		</div>
	)
})
