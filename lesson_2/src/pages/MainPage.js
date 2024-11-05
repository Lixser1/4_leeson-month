import React, {useState} from 'react';
import MyComponents from "../components/MyComponents";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Example from "../components/Example/Example";
import Modal from "../components/Modal/Modal";
import Count from "../components/count/Count";
import Buttons from "../components/Buttons/Buttons";
import List from "../components/List/List";

const MainPage = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [name, setName] = useState("");
    const [input, setInput] = useState("");
    const [task, setTask] = useState([
        {
            id: 1,
            title: 'coding',
            completed: false
        },
        {
            id: 2,
            title: 'eat',
            completed: false
        },
        {
            id: 3,
            title: 'sleep',
            completed: false
        }
    ]);
    const handleShow = (name) => {
        setName(name)
        if (name === "show") {
        }
        setShow(prevState => !prevState);
        if (name === "show2") {
            setShow2(prevState => !prevState);
        }
    }
    const handleInput = (event) => {
        setInput(event.target.value);
        console.log(event.target.value)
    }
    return (
        <div>
            {/*<Header/>*/}
            {/*<MyComponents/>*/}
            {/*<Footer/>*/}
            {/*<Example name={"Nikita"}>*/}
            {/*    <div style={{backgroundColor: 'blue'}}>*/}
            {/*        <p style={{backgroundColor: 'red'}}>name: Nikita</p>*/}
            {/*    </div>*/}
            {/*</Example>*/}
            inputValue: {input}
            {/*<button onClick={() => handleShow("show")}>open</button>*/}
            {/*<button onClick={() => handleShow("show2")}>open</button>*/}
            <Buttons textValue={"open"} action={() => handleShow("show")}/>
            <Buttons textValue={"open"} action={() => handleShow("show2")}/>
            {
                show && <Modal handleShow={handleShow} name={name} handleInput={handleInput}>
                    <h1>hello</h1>
                </Modal>
            }
            {
                show2 && <Modal handleShow={handleShow} name={name}>
                    <h1>hello2</h1>
                </Modal>
            }
            <Count/>
            <List tasks={task}/>
        </div>
    );
};

export default MainPage;