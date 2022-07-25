import React from 'react'
import { HiSearch } from 'react-icons/hi'
import './Search.scss'

export const Search:React.FC = React.memo(() => {
	return (
		<div className='search'> 
			<HiSearch/>
			<input  type='text'/>
		</div>
	)
})