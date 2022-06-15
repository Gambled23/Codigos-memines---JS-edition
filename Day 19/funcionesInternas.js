function funcionExterna(aux) {
    function funcionInterna1() {
        return aux + 2
    }
    function funcionInterna2() {
        return aux - 2
    }
    return funcionInterna1()
}

console.log(funcionExterna(3))