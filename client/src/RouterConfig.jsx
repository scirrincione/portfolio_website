import NavBar from './NavBar.jsx';
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx';
import { Routes, Route } from 'react-router';
import Work from './pages/Work.jsx'; 
import Chatbot from './pages/Chatbot.jsx'

export default function RouterConfig() {
    return (
        <>
        <NavBar />
        <div className="pt-35"></div>
        <Routes>
            <Route index element={<Chatbot />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Work' element={<Work />} />
        </Routes>
        </>
    );
}