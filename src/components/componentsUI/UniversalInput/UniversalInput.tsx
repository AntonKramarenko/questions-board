import React from 'react'
import './UniversalInput.scss'
import InputLogo from '../../../assets/icons/mountain.png'

interface IUniversalInput{
  placeholder: string
}

export const UniversalInput:React.FC<IUniversalInput> = ({placeholder}) => {
  return (
    <div className='universalInput'>
        <input type="text"  placeholder={placeholder}/>
        <img src={InputLogo} alt="" />
    </div>
  )
}
