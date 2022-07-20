import React from 'react'
import './SchoolBoardItem.scss'
import { IoCaretForward } from "react-icons/io5";


export const SchoolBoardItem = () => {
  return (
         <li className='schoolBoardItem'>
            <IoCaretForward/>
            <div className="cname">School A</div>
            <input type="checkbox"  className='schoolsBoard__item-checkbox'/>
        </li>
  )
}
