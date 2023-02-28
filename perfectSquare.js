function square(num){
    let newSquare = []
    const root = Math.sqrt(num)

    newSquare.push(root)
   for (i = 0; i < newSquare.length; i++){
        newSquare[i] += 1
    } 
        return newSquare * newSquare
}

console.log(square(9))

console.log('=========================================================')
const nextPerfect = (num) => {
    if (Number.isInteger(Math.sqrt(num))){
        let next = Math.sqrt(num) + 1
        return next**2
    } else {
        return -1
    }
}

console.log(nextPerfect(3000))