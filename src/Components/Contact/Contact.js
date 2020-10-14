import React from 'react';
import './Contact.css';
import contact from './../img/contact-pic.jpg'

class Contact extends React.Component {
	render() {
		return (
			<>
				<h1> Contato</h1>
				<div className='bodyForm'>				
					<div className="form" >
						<img src={contact} alt="contact"></img>
						<form className = "formLabels" action="">
							<label for="name">Nome</label>
							<input type="text" name="name" id="formName" />
							<label for="email">Email</label>
							<input type="email" name="email" id="formEmail" />
							<label for="message">Mensagem</label>
							<textarea name="message" id="formMessage" cols="30" rows="10" />
						</form>
					</div>
				</div>
			</>
		)
	}
}

export default Contact;
