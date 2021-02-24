const Film = ({data}) => {
    return (
        <>
            {
            data.map((film) => (
                <div>
                <h4>Movie Title: </h4><h3>{film.Title}</h3>
                <h4>Movie Release Date: </h4><h3>{film.Year}</h3>
                <h4>What Type: </h4><h3>{film.Type}</h3>
                <img src={film.Poster} alt="The poster"></img>
                </div>
            ))
}
</>
            // <div className="card" style="width: 18rem;">
            // <img src="{film.Poster}" className="card-img-top" alt="movieimage">
            // <div className="card-body">
            //   <h5 className="card-title">{film.Title}</h5>
            //   <p className="card-text">Release Date:{film.Year}, Type:{film.Type}</p>
            //   <a href="#" className="btn btn-primary">Description</a>
            // </div>
        
            
    )
}    


export default Film;