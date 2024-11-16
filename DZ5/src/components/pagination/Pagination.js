import React from 'react';
import classes from "./Pagination.module.scss";

const Pagination = ({prev, page, next}) => {
    return (
        <div>
            <div className={classes.pagination}>
                <button onClick={prev}>Prev</button>
                <div>{page}</div>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default Pagination;