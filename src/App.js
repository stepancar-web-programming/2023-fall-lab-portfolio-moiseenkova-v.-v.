import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import AnimalPage from './AnimalPage';
import styled from 'styled-components';
import Footer from './Footer'


const Main = styled.main`
  margin-top: 0;
`;

function App() {
    return (
        <Router>
            <Navbar />
            <Main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/animals" element={<AnimalPage />} />
                </Routes>
            </Main>
            <Footer/>
        </Router>
    );
}

export default App;
