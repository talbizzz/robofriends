import React from 'react';
import Card from './Card';


const Cardlist = ( {robots}) => {
	return(
		<fragment>
			{
				robots.map((user , i) => {
					return (
						<Card 
							key={i} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email}
						/>
					);
				})
			};
		</fragment>
	)
}

export default Cardlist; 