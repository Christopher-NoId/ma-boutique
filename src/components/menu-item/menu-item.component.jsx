import React from "react";
import { withRouter } from "react-router-dom";
//withRouter est un higherordercomponent, une fonction qui prend en argument un component et
//retourne un component modifié
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	//on destructure title car on veut générer dynamiquement en passant un title dans le component
	//MenuItem comme un props, on en pofite pour faire passer d'autres propriétés
	<div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<div
			className='background-image'
			style={{
				backgroundImage: `url(${imageUrl})`
				//on applique un style directement sur notre component
			}}
		/>

		<div className='content'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<span className='subtitle'>Passez en boutique</span>
		</div>
	</div>
);

export default withRouter(MenuItem);
