import React from 'react';
import about from './../img/about-pic.jpg'

class Home extends React.Component {
	render() {
		return (
			<>
				<img src={about} alt=" about"></img>
			</>
		);
	}
}

export default Home;