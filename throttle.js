


function throttle(func, delay) {
    let run = 0
    return function (...args) {
        if (run == 0) {
            run = 1
            func(...args)
            setTimeout(() => {
                run = 0;
            }, delay)
        } else { }
    }
}



// to work on it more than this !!!!
//  really not a simple implementation 
function opThrottle(func, delay, options = {}) {
    let run = 0
    let trealing_invoked = false
    return function (...args) {
        if (options.leading) {
            if (run == 0) {
                func(...args)
                run = 1
                setTimeout(() => {
                    run = 0;
                }, delay)
            } else { return }
        } else if (!options.leading && options.trailing) {
            if (run == 0) {
                setTimeout(() => {
                    run = 0;
                }, delay)
                if (!trealing_invoked) {
                    trealing_invoked = true
                } else {
                    func(...args)
                }

                run = 1
            } else { return }
        }
    }
}
































// function opThrottle(func, delay, options = { leading: true, trealing: true }) {
//     let run =0
//      return function (...args) {
//          switch (options) {
//              case (options.leading && options.trealing):
//                  throttle(func(args), delay)
//                  break;
//              case (!options.leading && options.trealing):
//                  if (run === 0) {
//                      setTimeout(() => {
//                          run = 1
//                      }, delay)
//                      func(...args)
//                  } else { return }
//                  break;
//              case (options.leading && !options.trealing):
//                  func(...args)
//                  return
//              case (!options.leading && !options.trealing):
//                  break;
//          }
//      }
//  }