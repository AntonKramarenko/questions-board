import React from 'react'
import './SelectImgQuestion.scss'
import TrashLogo from '../../../assets/icons/trash.png'

interface ISelectImgQuestion{
    img:string,
    clickTrash:(id:string) => void,
    isCanDelete: boolean
}

export const SelectImgQuestion:React.FC<ISelectImgQuestion> = ({img,clickTrash,isCanDelete}) => {

	console.log('SelectImgQuestion',  isCanDelete)
  
	return (
		<div className='selectImgQuestion'>
			{isCanDelete 
				? <div className='selectImgQuestion__trash' onClick={()=> clickTrash(img)}>
					<img src={TrashLogo} alt='' className='selectImgQuestion__trash-img'/>
			  </div>
				: null
			}
			<img src={img} alt={img}  className='selectImgQuestion__main'/>
		</div>
	)
}
