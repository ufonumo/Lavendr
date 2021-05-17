import React from 'react';
import dummy from '../assets/pic.jpg'

export default function Movie({data}) {
    const ImageAPI = `https://image.tmdb.org/t/p/w500`;
    const setRatings = (ratings) =>{
        if(ratings >= 8){
            return 'green'
        }
        else if(ratings >= 6){
            return 'orange'
        }
        else{
            return 'red'
        }
    }

    return (
        < >
            <div className='movie'>
                <img src={ (data.poster_path ? ImageAPI + data.poster_path : dummy) } alt={data.title}/>
                <div className="movie_info">
                    <h3>{data.title}</h3>
                    <h4 className={`rates ${setRatings(data.vote_average)}`} >{data.vote_average}</h4>
                </div>

                <div className="movie_overview">
                    <h2>Overview:</h2>
                    <p>{data.overview}</p>
                </div>
            </div>
        </>
    )
}
