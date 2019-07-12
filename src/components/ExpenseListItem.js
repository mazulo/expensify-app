import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({
    description,
    amount,
    createdAt,
    id,
    dispatch,
    history,
}) => {
    console.log(dispatch)
    return (
        <div>
            <h3>
                <Link
                    to={`/edit/${id}`}
                >
                    { description }
                </Link>
            </h3>
            <p>{ amount } - { createdAt }</p>
            <button
                onClick={ () => dispatch(removeExpense({ id })) }
            >
                Remove
            </button>
        </div>
    );
}

export default connect()(ExpenseListItem);
