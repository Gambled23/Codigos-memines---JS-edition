function sayHi() {
    console.log('Hi')
}
setInterval(sayHi, 1000) // it prints hello in every second, 1000ms is 1s

function sayHello() {
    console.log('Hello')
}
setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.