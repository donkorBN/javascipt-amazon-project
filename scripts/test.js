arr = [2, 'Naana', 'Philip', 'Joy', 'Arthur', 'Arthur', 2]
acc_value = 0

arr.map((item) => {
    console.log(item + " "+ "ate")
})

arr.filter((item) => {
    console.log(item + " "+ "ate")
})

arr.reduce((acc, item) => {
    console.log(item + " "+ "ate")
}, acc_value)

console.log(acc_value)
console.log("close")