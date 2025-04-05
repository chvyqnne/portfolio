/* eslint-disable import/no-default-export */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { About } from './features/about/About';
import { Experience } from './features/experience/Experience';
import { Work } from './features/work/Work';
import { ProjectDetails } from './features/projectDetails/ProjectDetails';
import { useState } from 'react';
import { ContactForm } from './components/ContactForm';
import { Home } from './features/home/Home';

const App = () => {
	const [contactOpen, setContactOpen] = useState(false);
	
	return (
		<Router>
			<Navbar onContactClick={() => { setContactOpen(true); }} />
			<div className='mt-16'>
				<Routes>
					<Route element={<Home />} path='/' />
					<Route element={<About />} path='/about' />
					<Route element={<Experience />} path='/experience' />
					<Route element={<Work />} path='/work' />
					<Route element={<ProjectDetails />} path='/project/:id' />
				</Routes>
			</div>

			{contactOpen ? <div className='fixed bottom-0 left-0 w-full z-40'>
				<ContactForm onClose={() => { setContactOpen(false); }} />
			</div> : null}
			
		</Router>
	);
};

export default App;
