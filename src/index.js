import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCsVXxsB1Z6CTXcvklA193Re68E8BMxSoM';

const App = () => {
	return  (
	<div>  
		<SearchBar />
	</div> 
	);
}


ReactDOM.render(< App /> , document.querySelector('.container'));


