import React from "react";

import "./homepage.styles.scss";

const HomePage = () => (
	<div className='homepage'>
		<h1>Bienvenu dans ma boutique</h1>
		<div className='directory-menu'>
			<div className='menu-item'>
				<div className='content'>
					<div className='title'>Bande dessinée</div>
					<span className='subtitle'>Passez en magasin</span>
				</div>
			</div>
			<div className='menu-item'>
				<div className='content'>
					<div className='title'>Blu-Ray</div>
					<span className='subtitle'>Passez en magasin</span>
				</div>
			</div>
			<div className='menu-item'>
				<div className='content'>
					<div className='title'>Livres</div>
					<span className='subtitle'>Passez en magasin</span>
				</div>
			</div>
			<div className='menu-item'>
				<div className='content'>
					<div className='title'>WOMENS</div>
					<span className='subtitle'>Passez en magasin</span>
				</div>
			</div>
			<div className='menu-item'>
				<div className='content'>
					<div className='title'>MENS</div>
					<span className='subtitle'>Passez en magasin</span>
				</div>
			</div>
		</div>
	</div>
);

export default HomePage;
