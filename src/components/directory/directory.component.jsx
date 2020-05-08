import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
	//on a besoin de stocker le statevalue des menu-item
	//on a donc besoin d'un constructeur et de super pour récupérer
	//tout ce dont on a besoin de React.Component dans notre classe
	constructor () {
		super();

		this.state = {
			sections: [
				//{
				//	title: "casquettes",
				//	imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
				//	id: 1
				//},
				//{
				//	title: "vestes",
				//	imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
				//	id: 2
				//},
				//{
				//	title: "sneakers",
				//	imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
				//	id: 3
				//},
				{
					title: "Blu-Ray",
					imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Blu_ray_logo.png",
					size: "large",
					id: 4,
					linkUrl: "hats"
				},
				{
					title: "Bande Dessinée",
					imageUrl: "https://pngimage.net/wp-content/uploads/2018/05/bande-dessin%C3%A9e-png-6.png",
					size: "large",
					id: 5,
					linkUrl: ""
				}
			]
		};
	}

	render () {
		//on veut retourner ce qu'on a en homepage, cad le directory-menu
		//on map notre section et on passe les objets de sections dans notre menu item
		return (
			<div className='directory-menu'>
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					//on destructure les valeurs de nos sections avec map
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
