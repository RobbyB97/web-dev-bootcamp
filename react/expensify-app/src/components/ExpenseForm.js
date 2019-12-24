import React from 'react'

export default class ExpenseForm extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                    />
                    <input 
                        type="number"
                        placeholder="Amount"
                    />
                    <textarea
                        placeholder="Expense note (optional)"
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}