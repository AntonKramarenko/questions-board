import React from 'react'
import './SelectImgQuestion.scss'
import TrashLogo from '../../../assets/icons/trash.png'

interface ISelectImgQuestion{
    img:string,
    clickTrash:(id:string) => void
}

export const SelectImgQuestion:React.FC<ISelectImgQuestion> = ({img,clickTrash}) => {
  return (
    <div className='selectImgQuestion'>
        <div className="selectImgQuestion__trash" onClick={()=> clickTrash(img)}>
          <img src={TrashLogo} alt="" className='selectImgQuestion__trash-img'/>
        </div>
        <img src={img} alt={img}  className='selectImgQuestion__main'/>
    </div>
  )
}
