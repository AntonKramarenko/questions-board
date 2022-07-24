import React from 'react'
import { ExamInfoSmall } from '../ExamInfoSmall'
import './ExamInfoLarge.scss'

interface IExamInfoLarge{
  infoImgTop:any,
  valueTop:string,
  infoImgBottom:any,
  valueBottom:string
}

export const ExamInfoLarge: React.FC<IExamInfoLarge> = React.memo(({infoImgTop,infoImgBottom,valueTop,valueBottom}) => {
	return (
		<div className='examInfoLarge'>
			<ExamInfoSmall infoImg={infoImgTop} title='Course' value={valueTop} />
			<span></span>
			<ExamInfoSmall infoImg={infoImgBottom}  title='Amount of Time to Complete the Exam' value={valueBottom} />
		</div>
	)
})
