import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = () => {
    const id = this.props.expense.id;
    this.props.editExpense(id, this.props.expense);
    this.props.history.push('/');
  }

  onClick = () => {
    const id = this.props.expense.id;
    this.props.removeExpense({ id });
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <ExpenseForm
          expense={ this.props.expense }
          onSubmit={ this.onSubmit }
        />
        <button
          onClick={ this.onClick }
        >
          Remove
        </button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editExpense: (id, expense) => dispatch(
      editExpense(id, expense)
    ),
    removeExpense: (data) => dispatch(
      removeExpense(data)
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
