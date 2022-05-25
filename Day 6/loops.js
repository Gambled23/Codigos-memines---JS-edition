for (let index = 1; index <= 10; index++) {
    console.log(index)
}
let i = 0
let paises = ['Mexico','Canada','Estados unidos','Argelia','Andorra','España','Argentina','Suiza','Francia','Inglaterra']
while (i < 10) {
    if (paises[i] == 'Suiza') {
        break
    }
    console.log(paises[i])
    i++
}