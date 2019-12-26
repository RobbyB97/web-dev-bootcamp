import moment from 'moment'

// Selects which expenses to render based on filter state
export default (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt)
    const startDateMatch = startDate ? createdAtMoment.isSameOrBefore() : true
    const endDateMatch = endDate ?  endDate.isSameOrAfter(createdAtMoment, 'day') : true
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  })
}
