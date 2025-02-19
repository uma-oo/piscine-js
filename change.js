const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log,
  }


const get =(key)=> sourceObject[key];
function set(key , value ){
    sourceObject[key]=value;
}


