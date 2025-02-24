import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Today from './components/Today.tsx'
import Monthly from './components/Monthly.tsx'
import Weekly from './components/Weekly.tsx'
import Home from './components/Home.tsx'
import './App.css'
import Navbar from "./components/Navbar.tsx";

function App() {
    const links = ['today', 'weekly', 'monthly']

    return (
        <BrowserRouter>
            <Navbar links={links}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/today" element={<Today/>}/>
                <Route path="/weekly" element={<Weekly/>}/>
                <Route path="/monthly" element={<Monthly/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default App
