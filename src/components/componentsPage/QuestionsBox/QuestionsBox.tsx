import React from 'react'
import { ButtonOutline } from '../../componentsUI/ButtonOutline'
import './QuestionsBox.scss'

export const QuestionsBox = () => {
  return (
    <section className='questionsBox'>
       <div className="questionsBox__header">
            <div className="questionsBox__counter">Questions (0)</div>
            <ButtonOutline/>
       </div>
    </section>
  )
}
