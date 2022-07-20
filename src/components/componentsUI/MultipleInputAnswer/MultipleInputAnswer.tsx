import React from 'react'
import { UniversalInput } from '../UniversalInput'
import './MultipleInputAnswer.scss'

interface IMultipleInputAnswer{
    id:string
}

export const MultipleInputAnswer:React.FC<IMultipleInputAnswer> = () => {
  return (
    <div className='multipleInputAnswer'>
        <input type="checkbox" />
        <UniversalInput placeholder='Answer Text...'/>
    </div>
  )
}
