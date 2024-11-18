import './App.css';
import MainPage from './pages/MainPage';
import React from 'react';
import TodoPage from './pages/TodoPage';
import UserPage from './pages/userPage/UserPage';
import PokemonPage from "./pages/pokemonPage/PokemonPage";
import ModalWindow from "./pages/modalWindow/ModalWindow";


function App() {
    return (
        <div className="App">
            {/*<MainPage/>*/}
            {/*<TodoPage/>*/}
            {/*<UserPage/>*/}
            {/*<PokemonPage/>*/}
            <ModalWindow/>
        </div>
    );
}


export default App;