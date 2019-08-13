export const setStartDate = (startDate) => {
  if (startDate) {
    return {
      type: 'SET_START_DATE',
      startDate
    }
  }
  return {
    type: 'SET_START_DATE',
    startDate: undefined
  }
}

export const setEndDate = (endDate) => {
  if (endDate) {
    return {
      type: 'SET_END_DATE',
      endDate
    }
  }
  return {
    type: 'SET_END_DATE',
    endDate: undefined
  }
}

export const setTextFilter = (text) => ({
  type: 'SET_TEXT_FILTER',
  text
})

export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})
