// creation de promesse
const promesse = ()=>{
 
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promise')
        },20000)
    this.resolve = resolve;
    }) 
}

function resolve(params){
    console.log("ce parametre est fait : "+params)
}
const promisse = promesse(); 
// promisse.then(resolve);