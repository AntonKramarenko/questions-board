import React, { useMemo }  from 'react'
import { useLocation } from 'react-router-dom'
import './PageHeader.scss'

import ExamsIMG from '../../../assets/icons/Frame.svg'
import RejectImg from '../../../assets/icons/reject.png'
import ApproveImg from '../../../assets/icons/approve.png'

interface IPageHeader{
  title: string,
  titleReject: string,
  titleApprove:string,
  clickReject: () => void,
  clickApprove: () => void,
  isCanSave: boolean
}

export const PageHeader: React.FC<IPageHeader> = ({title, clickReject, clickApprove,titleReject,titleApprove,isCanSave}) => {
	const currentLoacation= useLocation()
	const  locationArr = useMemo(() => currentLoacation.pathname.split('/').filter(location => location), [ currentLoacation ])

	const location  = useMemo(() => {
		return  locationArr.map((item, index,arr) => {
			if(arr.length-1 === index ){
				return <span key={item} className='pageHeader__location-item'>{item}</span>
			} else {
				return <React.Fragment key={item} ><span className='pageHeader__location-item'>{item}</span><span>{'>'}</span></React.Fragment>
			}
		})
	}, [ locationArr ])

	return (
		<section className='pageHeader'>
			<div className='pageHeader__info'>
				<div className='pageHeader__info-location'>  
					<img src={ExamsIMG} alt='' />{location}
				</div>
				<h1 className='pageHeader__info-title'>{title}</h1>
			</div>
			<div className='pageHeader__actions'>
				<button 
					className='pageHeader__actions-btn clickReject' 
					onClick={clickReject}>
					<img src={RejectImg} alt='' />
					{titleReject}
				</button>
				<button 
					className={isCanSave ? 'pageHeader__actions-btn active': 'pageHeader__actions-btn noActive'} 
					onClick={clickApprove}>
					<img 
						src={ApproveImg} 
						alt='ApproveImg' 
						className={isCanSave ? 'pageHeader__actions-img isCanSave' : 'pageHeader__actions-img' }
					/>
					{titleApprove}
				</button>
			</div>
		</section>
	)
}