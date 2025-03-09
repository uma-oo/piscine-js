


function throttle(func, delay) {
    let last_execution = 0
    return function (...args) {
        let now = Date.now()
        if (now - last_execution >= delay) {
            func(...args)
            last_execution = now
        }
    }

}