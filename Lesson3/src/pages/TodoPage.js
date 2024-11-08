import React, {useState} from 'react';
import TodoList from '../components/todoList/TodoList';
import Button from '../components/button/Button';
import Modal from '../components/modal/Modal';


const TodoPage = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [name, setName] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([
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
    const handleInput = (event) => {
        setInputValue(event.target.value);
    };

    const handleAdd = () => {
        console.log('add');
        setTodoList(prevState => [...prevState, {
            id: todoList[todoList.length - 1].id + 1,
            title: inputValue,
            completed: false
        }])
    };

    const handleDone = (id) => {
        todoList.map(todo => {
            if (id === todo.id) {
                return todo.completed = !todo.completed
            }
        })
        setTodoList([...todoList])
    }//here

    const handleDelete = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    }
    const handleShow = (name) => {
        setName(name);
        if (name === 'show') setShow(prevState => !prevState);
        if (name === 'show2') setShow2(prevState => !prevState);
    };
    return (
        <div>
            <TodoList
                todoList={todoList}
                handleDone={handleDone}
                handleDelete={handleDelete}
            />
            <Button name={'Открыть'} action={() => handleShow('show')}/>
            <Button name={'Открыть2'} action={() => handleShow('show2')}/>
            <button onClick={() => handleShow('show')}>Открыть</button>
            <button onClick={() => handleShow('show2')}>Открыть</button>
            {
                show && <Modal
                    handleShow={handleShow}
                    name={name}
                    handleInput={handleInput}
                    handleAdd={handleAdd}
                >
                    <h1>Hello</h1>
                </Modal>
            }
            {
                show2 && <Modal handleShow={handleShow} name={name}>
                    <h1>Hello2</h1>
                </Modal>
            }
        </div>
    );
};

export default TodoPage;