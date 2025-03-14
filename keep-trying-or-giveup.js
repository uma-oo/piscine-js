function retry(count, callback) {
  return async function (...args) {
      for (let i = 0; i <= count; i++) {
          let res = await  callback(...args).then(
              (result) => { return result; }
          ).catch(
              (err) => { return err }
          );
          if (!(res instanceof Error)) {
            return res;
          }
          else if (count === i && ( res instanceof Error)) {
              throw new Error(res.message)
          }
      }
  }
}



function timeout(delay, callback) {
  return async function (...args) {
    const before = Date.now()
    let res = await callback(...args).then(
      (result) => {
        const now = Date.now()
        return [now, result]
      }).catch(err => err)

    if (res.length === 2) {
      let [now, result] = res
      if (now - before >= delay) { // tests khdamin setTO so no need /1000
        throw new Error("timeout")
      }
      return result
    }

   throw new Error("timeout")
  }
}

