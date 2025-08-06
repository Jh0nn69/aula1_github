function multiplicacao(num1, num2){
    return(num1 * num2)
}

function divisao(num1, num2){
    return(num1 / num2)
}

function soma(num1, num2){
    return(num1 + num2)
}

function subtracao(num1, num2){
    return(num1 - num2)
}

function potenciacao(num1, num2){
    return (num1 ** num2)


}

function calcular(){

    let num1 = Number(document.getElementById("input1").value); 
    let num2 = Number(document.getElementById("input2").value);

    let inputs = document.getElementsByName("operação")

    if (inputs[0].checked) {
    alert(multiplicacao(num1, num2));
} 

    else if (inputs[1].checked) {
    alert(divisao(num1, num2));
} 

    else if (inputs[2].checked) {
    alert(soma(num1, num2));
} 

    else if (inputs[3].checked) {
    alert(subtracao(num1, num2));
} 

    else if (inputs[4].checked){
        alert(potenciacao(num1, num2));
    }

    else {
    alert("Selecione uma operação!");
}


}