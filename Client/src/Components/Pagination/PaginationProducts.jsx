import React, { useState } from 'react';
import styles from './Pagination.module.css';

const PaginationProducts = ({ page, setPage, itemsPerPage, totalItems, input, setInput }) => {
    

    // Calcular el número total de páginas
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const nextPage = () => {
        setInput(parseInt(input) + 1);
        setPage(parseInt(page) + 1);
        console.log(page)
    }

    const previousPage = () => {
        setInput(input - 1);
        setPage(page - 1);
        console.log(page)
    };

    const onKeyDown = e => {
        if (e.keyCode === 13) {
            setPage(parseInt(e.target.value));
            if (
                parseInt(e.target.value) < 1 ||
                parseInt(e.target.value) > totalPages ||
                isNaN(parseInt(e.target.value))
            ) {
                setPage(1);
                setInput(1);
            } else {
                setPage(e.target.value);
            }
        }
    }

    const onChange = e => {
        setInput(e.target.value)
    }

    return (
        <div className={styles.paginationContainer}>
            <button id={styles.buttonP} disabled={page === 1 || page < 1} onClick={previousPage}> {"<<"}
            </button>
            <input
                id={styles.inputPagination}
                onChange={e => onChange(e)}
                onKeyDown={e => onKeyDown(e)}
                name="page"
                autoComplete="off"
                value={input}
            />
            <p> de {totalPages}</p>
            <button id={styles.buttonP} disabled={page === totalPages || page > totalPages} onClick={nextPage} > {">>"}
            </button>
        </div>
    )
}

export default PaginationProducts;
