function higherNumber(numbers){
    let result = 0
    for(number in numbers){
        if(numbers[number] > result){
            result = numbers[number]
        }
    }
    return result
}

module.exports = {higherNumber}