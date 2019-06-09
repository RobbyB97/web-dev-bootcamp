const doWork = async () => {
  throw new Error('Something went wrong')
  return 'Robby'
}

doWork().then((result) => {
  console.log('result', result)
}).catch((e) => {
  console.log(e)
})
