import React from "react";

const API_KEY = '0198ce7967a0cd414f383ce0359b515c';

const requests = {
	fetchRateMovies: `/discover/tv?api_ket=${API_KEY}&with_networks=213`,
	fetchActionMovies: `/discover/tv?api_ket=${API_KEY}&with_genre=28`,
	fetchComedyMovies: `/discover/tv?api_ket=${API_KEY}&with_genre=35`,
};

export default requests