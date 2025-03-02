import NavBar from './NavBar.jsx';
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx';
import { Routes, Route } from 'react-router';

export default function RouterConfig() {
    return (
        <>
        <NavBar />
        <div className="pt-35"></div>
        <Routes>
            <Route index element={<Home />} />
            <Route path='/Projects' element={<Projects />} />
        </Routes>
        </>
    );
}