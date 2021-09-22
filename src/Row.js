import React, {useState, useEffect} from 'react';
import './Row.css'

import axios from './axios';
import requests from './Request'

function Row({title, fetchUrl, isLargeRow = false}) {
	const [movies, setMovies] = useState([]);
	
	const base_url = "https://image.tmdb.org/t/p/original/"
	
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
		}
		fetchData()
	}, [fetchUrl])
	
  return (
    <div className="row">
		<h2>{title}</h2>
		<div className="row_posters_group">
			{movies.map(movie => (
			<img 
				className={`row_poster ${isLargeRow && "row_posterLarge"}`}
				key={movie.id}
				src={`${base_url}${
					isLargeRow ? movie.poster_path : movie.backdrop_path
				}`} alt="" />
			))}
		</div>
    </div>
  );
}

export default Row;
