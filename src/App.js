import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './App.css';
import {ColorContextProvider} from './components/Theme/Theme';



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