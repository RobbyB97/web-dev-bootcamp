import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'


export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props)
        console.log(props.expense)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : 0,
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            focusCalendar: false,
            error: ''
        }
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({description}))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({note}))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        } else {
            this.setState(() => ({error: 'Must provide a valid dollar amount'}))
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt}))
        }
    }

    onFocusCalendarChange = (focused) => {
        this.setState(() => ({focusCalendar: focused}))
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (!(this.state.description && this.state.amount)) {
            this.setState(() => ({error: 'Please provide a description and dollar amount'}))
        } else {
            this.setState(() => ({error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    
    render() {
        return (
            <div>
                {this.state.error &&
                    <p>{this.state.error}</p>
                }
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.focusCalendar}
                        onFocusChange={this.onFocusCalendarChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Expense note (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}