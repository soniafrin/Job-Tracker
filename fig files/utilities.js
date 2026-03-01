// multiplication
function mul(id){
    const totalMul = document.getElementById(id).innerText
    const leftTotal = document.getElementById(id).innerText = totalMul - 1; 
    return leftTotal;
}

// sum 
function sum(id){
    const totalSum = document.getElementById(id).innerText
    const convertedSum = parseFloat(totalSum);
    const leftSum = document.getElementById(id).innerText = convertedSum + 1; 
    return leftSum;
}


// convert to Number
// function convertedValue(id){
//     const innerTextValue = document.getElementById(id).innerText
//     const converted_value = parseFloat(innerTextValue);
//     return converted_value;
// }
