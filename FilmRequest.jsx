
import {useState} from 'react';
import axios from 'axios';
import Film from './Film';

const FilmRequest = () => {
  const [data,setData]= useState([]);
  const [apiKey, setApiKey] = useState("");
  const [filmTitle, setFilmTitle] = useState("");

  const updateApiKey = (e) => {
      e.preventDefault(); 
      setApiKey(e.target.value);
  }
  const updateTitle = (e) => {
      e.preventDefault(); 
      setFilmTitle(e.target.value);
  }

  const makeRequest =(e) => {
      axios.get("http://www.omdbapi.com/?apikey=" + apiKey + "&s=" + filmTitle)
      .then(response => {
          console.log(response.data.Search);
          setData(response.data.Search);
      });
  };

  return (
  <>
      <div>
      <h2>FilmRequest.js</h2>
      <p>Enter your API Key for OMDB Here</p>
      <input type="text" onChange={(e)=>updateApiKey(e)} />
      <p>Enter the name of the film you are searching for here</p>
      <input type="text" onChange={(e)=>updateTitle(e)} />
      <p>
          Do not click this button until the fields above are correctly filled
      </p>
      <button onClick={(e) => makeRequest(e)}>Click me</button>
      <Film data={data}/>
      </div>
      
      
  </>
  );
}
export default FilmRequest;