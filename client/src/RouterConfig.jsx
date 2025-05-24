import NavBar from './NavBar.jsx';
import KenaiCorner from './kenai_corner.jsx';
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx';
import { Routes, Route } from 'react-router';
import Work from './pages/Work.jsx'; 

export default function RouterConfig() {
    return (
        <>
        <NavBar />
        <KenaiCorner />
        <div className="pt-35"></div>
        <Routes>
            <Route index element={<Home />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Work' element={<Work />} />
        </Routes>
        </>
    );
}