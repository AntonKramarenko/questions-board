import React from 'react'
import TrashLogo from '../../../assets/icons/trash.png'
import './SelectImgQuestion.scss'

interface ISelectImgQuestion{
    img:string,
    clickTrash:(id:string) => void,
    isCanDelete: boolean
}

export const SelectImgQuestion:React.FC<ISelectImgQuestion> = React.memo(({img,clickTrash,isCanDelete}) => {
	return (
		<div className='selectImgQuestion'>
			{isCanDelete && 
				 <div className='selectImgQuestion__trash' onClick={()=> clickTrash(img)}>
				 	<img src={TrashLogo} alt='' className='selectImgQuestion__trash-img'/>
			  	 </div>
			}
			<img src={img} alt={img}  className='selectImgQuestion__main'/>
		</div>
	)
})