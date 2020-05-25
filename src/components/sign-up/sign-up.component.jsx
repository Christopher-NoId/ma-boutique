import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

class Signup extends React.Component {
	//on a besoin de stocker ce que l'utilisateur tape dans le form input

	constructor () {
		super();

		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: ""
		};
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("les mots de passe ne correspondent pas");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);

			await createUserProfileDocument(user, { displayName });
			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: ""
			});
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = event => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};
	render () {
		const { displayName, email, password, confirmPassword } = this.state;

		return (
			<div className='sign-up'>
				<h2 className='title'>Je n'ai pas de compte</h2>
				<span>Connectez-vous avec vos email et mot de passe</span>
				<form className='sign-up form' onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						onChange={this.handleChange}
						label=' Pseudo'
						required
					/>

					<FormInput
						type='email'
						name='email'
						value={email}
						onChange={this.handleChange}
						label=' Email'
						required
					/>

					<FormInput
						type='password'
						name='password'
						value={password}
						onChange={this.handleChange}
						label=' Mot de passe'
						required
					/>

					<FormInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						onChange={this.handleChange}
						label=' Confirmer le mot de passe'
						required
					/>

					<CustomButton type='submit'>Créer un compte</CustomButton>
				</form>
			</div>
		);
	}
}

export default Signup;
