let obj1 = { name: { fname: "andy", lname: "howe" }, age: 45 }

function cloneObject(objSrc) {
    let output = {}
    output = { ...objSrc }
    return output
}

let obj2 = cloneObject(obj1)
console.log(obj2)
obj2.name.fname = 'bobby'

console.log(obj1)