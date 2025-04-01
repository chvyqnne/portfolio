/* eslint-disable import/no-default-export */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Work } from './pages/Work';
import { ProjectDetails } from './pages/ProjectDetails';

const App = () => {
	return (
		<Router>
			<Navbar />
			<div className='mt-16'>
				<Routes>
					<Route element={<Home />} path='/' />
					<Route element={<About />} path='/about' />
					<Route element={<Experience />} path='/experience' />
					<Route element={<Work />} path='/work' />
					<Route element={<ProjectDetails />} path='/project/:id' />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
