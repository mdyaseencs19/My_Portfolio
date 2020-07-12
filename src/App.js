import React from 'react';
import Main from './components/MainComponent';
import { Sugar } from 'react-preloaders'; 

function App () {
	return (
		<React.Fragment>
			<Main />
			<Sugar background="#D3D3D3" color="#6b0e55" animation="slide" />
		</React.Fragment>
	);
}

export default App;