
import React from 'react';
import Button from '../button/Button';
import classes from "./BookList.css";

const BookList = ({ books, onDelete }) => {
    return (
        <div className="book-list">
            <table>
                <thead>
                <tr>
                    <th>Название</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book, index) => (
                    <tr key={index}>
                        <td>{book}</td>
                        <td>
                            <Button label="Удалить" onClick={() => onDelete(index)} />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookList;
