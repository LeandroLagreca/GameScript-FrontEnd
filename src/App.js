import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './App.css';
import {ColorContextProvider} from './components/Theme/Theme';
import axios from 'axios';

axios.defaults.baseURL = 'https://gamescript-backend-production.up.railway.app/'


function App() {
	
	return (
		<ColorContextProvider >
			<BrowserRouter>
				<Routes />	
			</BrowserRouter>
		</ColorContextProvider>
	);
}

export default App;