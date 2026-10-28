const onepromiss = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task is completed")
        resolve();
    }, 1000);
})
onepromiss.then(function(){
    console.log("promise comsumed");
})
const promissthree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName:"Hello", email:"examphle@exam.com"})
    },1000)
})
promissthree.then(function(user){
    console.log(user);
})

const promissFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName:"bhawana", password: "123"})
        }else{
            reject('ERROR: something went wrong')
        }
    }, 1000)
})
.then((user)=>{
    console.log(user);
    return user.userName
})
.then((userName)=>{
    console.log(userName);
})
.catch(function(err){
    console.log(err);
}).finally(()=>{
    console.log("The promise is either resolved or reject");
})

const promissfive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName:"javascript", password: "123"})
        }else{
            reject('ERROR: js went wrong')
        }
    }, 1000)
})
async function consumePromiseFive() {
    try {
        const respons = await promissfive;
    console.log(respons)
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()
// async function getAlluser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: data");
//     }
// }
// getAlluser()

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((respons) => {
    return respons.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=> console.log(error)
)