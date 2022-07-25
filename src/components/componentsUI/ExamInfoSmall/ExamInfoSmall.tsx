import React from 'react'
import './ExamInfoSmall.scss'

interface IExamInfoSmall{
  infoImg:any,
  title:string,
  value: string
}

export const ExamInfoSmall:React.FC<IExamInfoSmall> = React.memo(({infoImg,title,value}) => {
	return (
		<div className='examInfoSmall'>
			<img src={infoImg} alt='' />
			<div className='examInfoSmall__info'>
				<h2 className='examInfoSmall__title'>{title}</h2>
				<div className='examInfoSmall__value'>{value}</div>
			</div>
		</div>
	)
})