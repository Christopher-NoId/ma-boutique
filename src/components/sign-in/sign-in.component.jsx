import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}
	handleSubmit = event => {
		event.preventDefault();

		this.setState({ email: "", password: "" });
	};

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render () {
		return (
			<div className='sign-in'>
				<h2>J'ai déjà un compte</h2>
				<span>Inscrivez-vous avec votre email et mot de passe</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='email'
						value={this.state.email}
						label='email'
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						name='mot de passe'
						type='password'
						value={this.state.email}
						handleChange={this.handleChange}
						label='password'
						required
					/>
					<CustomButton type='submit'>Créez un compte</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
