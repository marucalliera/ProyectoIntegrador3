import React from 'react'

const Movie = () => {
    const url = " https://api.themoviedb.org/3/movie/popular?api_key=73bb2c441012fc5a8247a1d5cb33d69a&language=en-US&page=1"
   

    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.id)
      console.log(data.adult)
    })
    .catch(err => {
      console.log(err.message)
    })
    return (
    <div>Movie</div>
  )
}


export default Movie