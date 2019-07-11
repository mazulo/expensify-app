import React from 'react';

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        amount: '',
        note: '',
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text"
                        placeholder="Description"
                        autoFocus
                        value={ this.state.description }
                        onChange={ this.onDescriptionChange }
                    />
                    <input type="text"
                        placeholder="Amount"
                        value={ this.state.amount }
                        onChange={ this.onAmountChange }
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={ this.state.note }
                        onChange={ this.onNoteChange }
                    ></textarea>
                </form>
            </div>
        )
    }
}
