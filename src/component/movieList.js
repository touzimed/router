

import React from 'react'
import MovieCard from './movieCard'

export default function MovieList(props) {
 

const movieCards=props.filmeList.map((item) => {
return (

<MovieCard  posterURL={item.posterURL} title={item.title} description={item.description} rating={item.rating}/> )
}
)
  return (
    <div style={{display:'flex',flexWrap:'wrap'}}>

      {movieCards}

    </div>
  )
}
