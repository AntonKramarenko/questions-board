import React from 'react'
import './SelectImagesBox.scss'
import { SelectImgQuestion } from '../SelectImgQuestion'

interface ISelectImagesBox{
    images: string[]
}

export const SelectImagesBox: React.FC<ISelectImagesBox> = ({images}) => {


     //useMemo must
//   const renderSelectImg = (sourse:string[]) =>{
//     return sourse.map((img:string) => {      
//         return <SelectImgQuestion img={img} key={img}/>
//     })
//   }

  return (
    <div className='selectImagesBox'>
        {
            images.map((img:string) => <SelectImgQuestion img={img} key={img}/>)
        }
    </div>
  )
}
