import React from 'react'
import { Link } from 'react-router-dom'

export default function navBar() {
    
  return (
    <div className="navbar bg-light"> 
    <p>FILMEz</p>
    <div  style={{display:'flex'}}>  
    <div>
      <Link to='/'>HOME</Link>
      <Link to='/Add'>ADD</Link>
    </div>
      
 <div>rating:
 <select >
 <option ></option>
 <option value="1">1</option>
 <option value="2">2</option>
 <option value="3">3</option>
 <option value="4">4</option>
 <option value="5">5</option>
 <option value="6">6</option>
 <option value="7">7</option>
 <option value="8">8</option>
 <option value="9">9</option>
 <option value="10">10</option>
</select></div>
<form  >
     <input  type="text" placeholder="Search" />
     <button class="btn btn-outline-success" type="submit">Search</button>
     
   </form>
    </div>


</div> )
}
