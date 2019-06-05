// Callback:
//const doWorkCallback = (callback) => {
//  setTimeout(() => {
//    //callback('This is an error', undefined)
//    callback(undefined, [1, 2, 3])
//  }, 2000)
//}

//doWorkCallback((error, result) => {
//  if (error) {
//    return console.log(error)
//  }
//
//  console.log(result)
//})

const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve([1, 2, 3, 4])
    reject('Something went wrong')
  }, 2000)
})

doWorkPromise.then((result) => {
  console.log('Success', result)
}).catch((error) => {
  console.log('Error', error)
})
