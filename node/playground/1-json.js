const fs = require('fs')
//const book = {
//  title: 'Oh My',
//  author: 'Gat'
//}

//const bookJSON = JSON.stringify(book)
//fs.writeFileSync('1-json.json', bookJSON)
//const dataBuffer = fs.readFileSync('1-json.json')
//const dataJSON = dataBuffer.toString()
//const data = JSON.parse(dataJSON)
//console.log(data.title)

let dBuffer = fs.readFileSync('1-json.json')
let dataJSON = dBuffer.toString()
let data = JSON.parse(dataJSON)
data.name = 'Robby'
data.age = 22
fs.writeFileSync('1-json.json', JSON.stringify(data))

let dBuffers = fs.readFileSync('1-json.json')
let dataJSONs = dBuffers.toString()
let datas = JSON.parse(dataJSONs)
console.log(datas)
