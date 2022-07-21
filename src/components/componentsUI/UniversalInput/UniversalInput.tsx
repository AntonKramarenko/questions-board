import React, { useEffect, useState } from 'react'
import './UniversalInput.scss'
import InputLogo from '../../../assets/icons/mountain.png'

interface IUniversalInput{
  placeholder: string,
  selectImages:string[],
  setSelectImages:([]) => void
}

export const UniversalInput:React.FC<IUniversalInput> = ({placeholder, selectImages,setSelectImages}) => {

  const readFile = (event:any) => {
    if(event.target.files) {
      const fileArr = Array.from(event.target.files).map((file:any) => URL.createObjectURL(file))
      setSelectImages([...selectImages,...fileArr])
      revokeEventFiles(event.target.files)
    }    
  }

const revokeEventFiles =(files:any) =>{
    Array.from(files).map((file:any) => URL.revokeObjectURL(file))
}

  return (
    <div className='universalInput'>
            <input type="text"  placeholder={placeholder}/>
            <input type="file" id={`file-uploader${placeholder}`} multiple onChange={(e)=> readFile(e)}/>
            <label htmlFor={`file-uploader${placeholder}`}>
              <img src={InputLogo} alt="" />
            </label>
    </div>
  )
}
