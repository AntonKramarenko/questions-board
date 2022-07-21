import React from 'react'
import './SelectImgQuestion.scss'

interface ISelectImgQuestion{
    img:string
}

export const SelectImgQuestion:React.FC<ISelectImgQuestion> = ({img}) => {
  return (
    <div className='selectImgQuestion'>
        <img src={img} alt={img} />
    </div>
  )
}
