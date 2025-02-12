import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Today from './components/Today.tsx'
import Monthly from'./components/Monthly.tsx'
import './App.css'
import Navbar from "./components/Navbar.tsx";

function App() {

    const Home = () => <h1>Home Page</h1>
    

    const links = ['home', 'monthly', 'today']

    return (
        <BrowserRouter>
            <Navbar links={links}/>
            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/monthly" element={<Monthly/>}/>
                <Route path="/today" element={<Today/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
