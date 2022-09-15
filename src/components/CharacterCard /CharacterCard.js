import React from 'react'
import './CharacterCard.css'


const CharacterCard  = () => {
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
    <div>CharacterCard </div>
  )
}




export default CharacterCard 