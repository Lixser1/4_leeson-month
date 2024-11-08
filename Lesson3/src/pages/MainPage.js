import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dz1 from '../components/Dz1';
import Example from '../components/Example/Example';
import Modal from '../components/modal/Modal';
import Count from '../components/count/Count';
import Button from '../components/button/Button';
import TodoList from '../components/todoList/TodoList';


const MainPage = () => {


    const a=[1,2,3]
    const b=[4,5,6]
    const c= [...a,...b]

    return (
        <div>
            {/*<Header/>*/}
            {/*<div className='btn'>MainPage</div>*/}
            {/**/}
            {/*<Button name={'Open'} color={'primary'}/>*/}
            {/*<Button name={'Close'} color={'error'}/>*/}
            {/*<Button name={'Save'} color={'secondary'}/>*/}
            {/*<Dz1 name={'Bakyt'} age={18}/>*/}
            {/*/!*<Footer/>*!/*/}
            {/*<Example name={'Bakyt'}>*/}
            {/*    <div style={{backgroundColor: 'blueviolet'}}>*/}
            {/*        <p style={{color: "red"}}>name Bakyt</p>*/}
            {/*    </div>*/}
            {/*</Example>*/}
            <Count/>
        </div>
    );
};

export default MainPage;