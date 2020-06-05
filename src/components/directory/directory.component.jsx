import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = ({ sections }) => (
	//on a besoin de stocker le statevalue des menu-item
	//on a donc besoin d'un constructeur et de super pour récupérer
	//tout ce dont on a besoin de React.Component dans notre classe

	//on veut retourner ce qu'on a en homepage, cad le directory-menu
	//on map notre section et on passe les objets de sections dans notre menu item

	<div className='directory-menu'>
		{sections.map(({ id, ...otherSectionProps }) => (
			//on destructure les valeurs de nos sections avec map
			<MenuItem key={id} {...otherSectionProps} />
		))}
	</div>
);

const mapStateTProps = createStructuredSelector({
	sections: selectDirectorySections
});

export default connect(mapStateTProps)(Directory);
