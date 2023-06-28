import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx'

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>  
        <Navbar />
        <App />
        <Footer />
    </>

    
);
