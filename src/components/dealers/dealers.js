import React from 'react';
import './dealers.css';
import dealers from './dealers.json';

console.log(dealers.dealers);

const Dealers = prop => {
	return (
		<div>
			foreach(dealers.dealers as dealer) {
				<h1>{dealer.data.name}</h1>
			}
		</div>
	);
}

export default Dealers;