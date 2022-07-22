import React from 'react'
import './UniversalInput.scss'
import InputLogo from '../../../assets/icons/mountain.png'

interface IUniversalInput{
  placeholder: string,
  selectImages:string[],
  setSelectImages:([]) => void,
  id: string
}

export const UniversalInput:React.FC<IUniversalInput> = ({placeholder, selectImages,setSelectImages,id}) => {

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

function auto_grow(e:any) {
  e.target.style.height = '32px';
  e.target.style.height = `${e.target.scrollHeight}px`; 
}
  return (
    <div className='universalInput'>
            <textarea wrap='soft' placeholder={placeholder} onChange={(e)=> auto_grow(e)}/>
            <input type="file" id={`file-uploader${placeholder}${id}`} multiple onChange={(e)=> readFile(e)}/>
            <label htmlFor={`file-uploader${placeholder}${id}`}>
              <img src={InputLogo} alt="" />
            </label>
    </div>
  )
}
