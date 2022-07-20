import React from 'react'
import './Search.scss'
import { HiSearch } from "react-icons/hi";

export const Search = () => {
  return (
    <div className='search'> 
        <HiSearch/>
        <input  type='text'/>
    </div>
  )
}
