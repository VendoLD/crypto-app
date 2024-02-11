import React from "react";
import './styles/App.css'
import { Routes, Route } from 'react-router-dom';
import TokenList from "./pages/TokenList";
import TokenPage from "./pages/TokenPage";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<TokenList></TokenList>}/>
                <Route path="/token/:id" element={<TokenPage></TokenPage>}/>
            </Routes>
        </div>
    );
}

export default App;
