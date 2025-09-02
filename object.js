let a={
    name:"Amit",
    lname:"Patel",
    detail:{
        age:21,
        roll:22
    }
}
let {age,roll}=a.detail
 console.log(a.name,a.lname)
 console.log(a.detail.age,a.detail.roll)
 console.log(age,roll)
 for(let key in a){
    console.log(key,a[key])
 }
 console.log(Object.keys(a))