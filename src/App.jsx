import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Home from './pages/Home';
import About from './pages/About';
import MeteoPage from './pages/MeteoPage';

	function App(){
		return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} /> 
        		<Route path="/about" element={<About />} />
				<Route path="/meteo" element={<MeteoPage />} />
			</Routes>
		</Router>
		)
	}

export default App;