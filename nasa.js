


function nasa(N) {
    let new_str = ""
    for (let i = 1; i <= N; i++) {
        if (i<=N && i!==1){
          new_str+=" "
        }
        if (i % 3 === 0 && i % 5 === 0) new_str = new_str + "NASA";
        else if (i % 3 === 0) new_str = new_str + "NA";
        else if (i % 5 === 0) new_str = new_str + "SA";
        else new_str = new_str + `${i}`;
    }
    return new_str
}


console.log(nasa(6))