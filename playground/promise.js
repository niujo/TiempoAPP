const asyncAdd=(a,b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof a==='number'&& typeof b==='number'){
                resolve(a+b);
            }else{
                reject('Arguments must be numbers')
            }
        },1500)
    });
}
asyncAdd(5,7).then((res)=>{
console.log('Results: ', res,'..');
},(errorMessage)=>{
    console.log(errorMessage);
}).then((res)=>{
    console.log('deberia ser 45',res)
},(errorMessage)=>{
    console.log(errorMessage)
})
/*
const somePromise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
      resolve('Hey  it worked lala')
      //reject('unable to fulfill promise')
  },2500)
});
somePromise.then((mesasage)=>{
    console.log('Success ',mesasage);
},(errorMessage)=>{
    console.log('error: ',errorMessage);
})*/