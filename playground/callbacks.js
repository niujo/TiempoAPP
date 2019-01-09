const getUser = (id,callback)=>{
    let user={
        id:id,
        name:'pato'
    };
//poner tiempo de espera por la fuerza
    setTimeout(()=>{
        callback(user);
    },3000)
    
};

getUser(31,(userObj)=>{
    console.log(userObj);
});