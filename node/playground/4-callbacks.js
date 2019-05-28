setTimeout(() => {
  console.log('Two seconds!')
}, 2000)

const names = ['Arya', 'Theon', 'Robb']
const shortNames = names.filter((name) => {
  return name.length <= 4
})

console.log(shortNames)
