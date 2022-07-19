import React  from 'react'
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
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
}

export const PageHeader: React.FC<IPageHeader> = ({title, clickReject, clickApprove,titleReject,titleApprove}) => {

  const currentLoacation= useLocation();

  // must refactoring
const location  = () => {
  const  locationArr = currentLoacation.pathname.split('/').filter(location => location)

  return  locationArr.map((item, index,arr) => {
      if(arr.length-1 === index ){
        return <span key={item} className='pageHeader__location-item'>{item}</span>
      } else {
        return <React.Fragment key={item} ><span className='pageHeader__location-item'>{item}</span><span>{'>'}</span></React.Fragment>
      }
  })
}
  return (
    <section className='pageHeader'>
      <div className="pageHeader__info">
        <div className="pageHeader__info-location">  <img src={ExamsIMG} alt="" />{location()}</div>
       
        <h1 className="pageHeader__info-title">{title}</h1>
      </div>
      {/* buttom -> componentsUI */}
      <div className="pageHeader__actions">
        <button className='pageHeader__actions-btn'>
          <img src={RejectImg} alt="" />
          {titleReject}</button>
        <button className='pageHeader__actions-btn active'>
        <img src={ApproveImg} alt="" />
          {titleApprove}</button>
      </div>
    </section>
  )
}
