import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
export default function Add(props) {
  const [Title,SetTitle]=useState('');
  const [Rating,SetRating]=useState('');
  const [Description,SetDescription]=useState('');
  const [Poster,SetPoster]=useState('');
  const [Link,SetLink]=useState('');

  const navigate=useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
   
       props.onAddMovie({title: Title,
        rating: Rating,trailer:Link,
        description: Description,
        posterURL: Poster
      })
    navigate('/')
  };

  return (
    <div>
     
	
     <form onSubmit={handleSubmit}>
  
    <label for="exampleInputEmail1" class="form-label">Filme Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" value={Title} onChange={(e) => SetTitle(e.target.value)}  ></input>
    <label for="exampleInputEmail1" class="form-label">Rating</label>
    <input type="number" class="form-control" id="exampleInputEmail1" value={Rating} onChange={(e) => SetRating(e.target.value)}></input>
    <label for="exampleInputEmail1" class="form-label">Description</label>
    <input type="text" class="form-control" id="exampleInputEmail1" value={Description} onChange={(e) => SetDescription(e.target.value)} ></input>
    <label for="exampleInputPassword1" class="form-label">Poster URL</label>
    <input type="text" class="form-control" id="exampleInputPassword1" value={Poster} onChange={(e) => SetPoster(e.target.value)}></input><br/>
    <label for="exampleInputPassword1" class="form-label">link trailer</label>
    <input type="text" class="form-control" id="exampleInputPassword1" value={Link} onChange={(e) => SetLink(e.target.value)}></input><br/>
    <button type="submit">Add Movie</button>

    
    
</form>
       
	
    </div>
  )
}
