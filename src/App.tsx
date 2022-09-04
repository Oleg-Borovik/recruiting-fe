import React from 'react';
import './App.css';
import {ResumeComponent} from "./component/Resume/ResumeComponent";
import {Link, Route, Routes} from "react-router-dom";
import {CategoryComponent} from "./component/Cotegory/CategoryComponent";

function App() {
    return (
        <div className="App">
            <nav className="App-link">
                <Link to={'/'}>Заполнить резюме</Link>
                <Link to={'/category'}>Посмотреть категории</Link>
            </nav>
            <Routes>
                <Route path={'/'} element={<ResumeComponent/>}></Route>
                <Route path={'/category'} element={<CategoryComponent/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
