import React from 'react'
import './MultipleInputAnswer.scss'

export const MultipleInputAnswer = () => {
  return (
    <div className='multipleInputAnswer'>
        <input type="checkbox" />
        <input type="text" className='multipleInputAnswer__text' placeholder='Answer Text...'/>
    </div>
  )
}
