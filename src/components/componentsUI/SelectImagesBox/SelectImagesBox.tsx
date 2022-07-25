import React, { useEffect, useState } from 'react'
import { SelectImgQuestion } from '../SelectImgQuestion'
import './SelectImagesBox.scss'

interface ISelectImagesBox{
    isCanDelete: boolean
    images: string[]  
}

export const SelectImagesBox: React.FC<ISelectImagesBox> = React.memo(({images,isCanDelete}) => {
	const [ imageSselect, setImageSselect ] = useState<string[]>(images)

	useEffect(()=>{
		setImageSselect(images)
	},[ images ])

	const deleteImgHandler =(idImg:string)=>{
		setImageSselect(imageSselect.filter((img:string) => img !== idImg))
	}

	return (
		<div className='selectImagesBox'>
			{imageSselect.map((img:string) => <SelectImgQuestion isCanDelete={isCanDelete} img={img} key={img} clickTrash={deleteImgHandler} />)}
		</div>
	)
})