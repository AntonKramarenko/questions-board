import React, { useEffect, useState } from 'react'
import './SelectImagesBox.scss'
import { SelectImgQuestion } from '../SelectImgQuestion'

interface ISelectImagesBox{
    isCanDelete: boolean
    images: string[]  
}

export const SelectImagesBox: React.FC<ISelectImagesBox> = ({images,isCanDelete}) => {

  

	const [ imageSselect, setImageSselect ] = useState<string[]>(images)

	useEffect(()=>{
		setImageSselect(images)
	},[ images ])

	//useMemo use
	//   const renderSelectImg = (sourse:string[]) =>{
	//     return sourse.map((img:string) => {      
	//         return <SelectImgQuestion img={img} key={img}/>
	//     })
	//   }

	const deleteImgHandler =(idImg:string)=>{
		setImageSselect(imageSselect.filter((img:string) => img !== idImg))
	}

	return (
		<div className='selectImagesBox'>
			{
				imageSselect.map((img:string) => <SelectImgQuestion isCanDelete={isCanDelete} img={img} key={img} clickTrash={deleteImgHandler} />)
			}
		</div>
	)
}