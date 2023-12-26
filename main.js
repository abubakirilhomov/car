let body = document.querySelector("body")
let time = document.querySelector('#time')



setInterval(() => {
    let date = new Date()
    
    let hours = date.getHours()
    let minuts = date.getMinutes()
    let seconds = date.getSeconds()

    if(seconds >= 0 && seconds < 10) {
        seconds = "0" + seconds
    } else {
        seconds = seconds
    }
    if(minuts >= 0 && minuts < 10) {
        minuts = "0" + minuts
    } else {
        minuts = minuts
    }
    
    let dateTime = hours+":"+minuts+":"+seconds

    time.innerHTML = dateTime
}, 1000);