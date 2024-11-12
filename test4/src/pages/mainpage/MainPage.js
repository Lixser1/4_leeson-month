
import React, { useState } from 'react';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import BookList from '../../components/bookList/BookList';
import classes from "./MainPage.module.css";


const MainPage = () => {
    const [books, setBooks] = useState([]);
    const [bookName, setBookName] = useState('');

    const addBook = () => {
        if (bookName.trim() !== '') {
            setBooks([...books, bookName]);
            setBookName('');
        }
    };

    const deleteBook = (index) => {
        const newBooks = books.filter((_, i) => i !== index);
        setBooks(newBooks);
    };

    return (
        <div className={classes.app}>
            <h1>Добавить книгу</h1>
            <div className={classes.inputGroup}>
                <div>название</div>
                <Input
                    placeholder="Введите название"
                    onChange={setBookName}
                    value={bookName}
                />
                <div className={classes.button}>
                    <Button label="Добавить" onClick={addBook} />
                </div>
            </div>
            <BookList books={books} onDelete={deleteBook} />
        </div>
    );
};

export default MainPage;


