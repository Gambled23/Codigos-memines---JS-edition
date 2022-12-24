function timeOut(number1: number) { //Podemos especificar de qué tipo de dato es
    return new Promise((res => setTimeout(res, number1)));
}

export async function addNumber(a: number, b: number) {
    await timeOut(1000);
    return a + b;
}

;(async () => { //Hacer que corra el programa
    console.log(await addNumber(3,4))
})() 