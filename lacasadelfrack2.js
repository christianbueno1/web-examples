const classFoo = document.querySelector(".meni , .menu")
console.log(classFoo)
console.log("hello my friends")

const allLis = document.querySelectorAll(".menu> ul> li")
console.log(allLis)
// ForEach
const fruits = ['apple', 'pear', 'grape']
fruits.forEach(fruit => console.log(fruit))
// Reduce
const nums = [1,2,3,4]
const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sum)
const sumDoubleEach = (accumulator, currentValue) => {
    console.log(accumulator, currentValue)
    return accumulator + 2*currentValue
}
const sum2 = nums.reduce(sumDoubleEach, 0)
console.log(sum2)
// array of objects
const fruitsObj = [
    {name: 'apple', price: 1},
    {name: 'grape', price: 2},
    {name: 'kiwi', price: 13},
]
const fruitPrices = fruitsObj.reduce(
    (acc, val) => {
        acc[name] = val.price
        return acc
    },
    {}
)
console.log("-->" + Object.keys(fruitPrices).length)
console.log(fruitPrices)
// Advance reduce
const prices = [12, 23,1,3,14,19]
// important, use 3 points
console.log(Math.min(...prices), Math.max(...prices))
const minMax = prices.reduce((acc, price) => [Math.min(acc[0],price), Math.max(acc[1], price)], [100,0])


// creating objects
let element = {}, cart = []
element.id = 2
element.quantity = 23
// insenting a object with the key 'element'
cart.push({element})
console.log(cart)
console.log('key without quote', cart[0].element)
console.log('key without quote', cart[0].element.id)
console.log('key without quote', cart[0].element.quantity)
// console.log(cart[0]['element'])