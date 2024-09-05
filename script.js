const arr = [10,20,304,94,584,493,1,2,4,5]

const result = arr.map((i)=>{
    return i%2===0?`Even Numbers ${i}` :`Odd Numbers ${i}`
})

console.log(result);