import React from 'react'
import MovieList from './movieList'

export default function Home({filmeList}) {
  
  return (
    <div>
<MovieList filmeList={filmeList} />
    </div>
  )
}
