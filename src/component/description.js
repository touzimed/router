import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Description({filmeList}) {
    const param=useParams()
const discrip=filmeList.find(element=>element.title===param.title)
console.log(discrip.trailer)

  return (
    <div >
{discrip.description}

<video width="560" height="315" controls>
  <source src={discrip.trailer} type="video/mp4" />
</video>
<br/> 

<Link className="btn btn-primary" to={"/"}>HOME</Link>
</div>
  )
}
