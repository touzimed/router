import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCard(props) {
  return (
    < div className="card" style={{width:"18rem"}}>
  <img src={props.posterURL} className="card-img-top" alt="..." ></img>
  <div className="card-body">
    <h5 class="card-title" >{props.title}</h5>
    <a href="wwwfacebook.com" className="btn btn-primary">Watch</a>
    <Link className="btn btn-primary" to={`/Description/${props.title}`}>see more</Link>
    <em  className=" btn-secondery" style ={{marginLeft:"40px",padding:"10px" ,backgroundColor:"#0D6EFB" ,borderRadius: "10px" ,color:"white"}}>Rating:{props.rating}</em>
  </div>
</div>
  )
}
