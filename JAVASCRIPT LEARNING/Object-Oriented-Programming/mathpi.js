const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descripter);

const chai = {
    name : "ginger chai",
    price : 125,
    isAvailable : true,
    orderchai (){
        console.log("chai is not available");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
