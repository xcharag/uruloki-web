//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import DefaultLayout from "./components/DeafultLayout.jsx";
import Home from "./pages/Home.jsx";

function App() {

  return (
      <Router>
        <Routes>
            <Route path="/" element={
                <DefaultLayout>
                    <Home />
                </DefaultLayout>
            } />


        </Routes>
      </Router>
  )
}

export default App
