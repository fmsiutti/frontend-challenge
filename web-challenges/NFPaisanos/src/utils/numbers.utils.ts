export const parseNumber = (str:string):number => {
    const formattedString = str.replace(',', '')
    return parseFloat(formattedString);
}

export const toHumanNumber = (num:number|string, decimals:number):string => {
    const numAsString = num.toString()
    const numLength = numAsString.length
    if(numLength <= 4 + decimals) {
        return numAsString;
    }
    const humanNumber = `${numAsString.slice(0, (numLength - decimals - 4))},${numAsString.slice(- 4 - decimals)}`
    return humanNumber;
}

export const toFixedNumber = (num:string):number => {
    const number = parseFloat(num)
    const roundedNumber = Math.round(number * 100) / 100
    return roundedNumber;
}

export const compareNumbers = (numberA:number, numberB:number, direction:number):number => {
    if(direction === 0){
        return numberA - numberB
    }else{
        return numberB - numberA
    }
}