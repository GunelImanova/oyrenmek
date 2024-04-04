class Product {
    constructor ( id, name , price){
        this.name=name;
        this.id=id;
        this.price=price;
     }

}
class Milk extends Product{
   constructor(id, name ,price,FatPercent,MadeIn){
    super(id,name,price)
    this.FatPercent=FatPercent
    this.MadeIn=MadeIn
}
}
//task1
let milk1=new Milk(1,"Azersud",6,5,"Azerbaycan")
let milk2=new Milk(2,"palsut",2,5,"Turkey")
let milk3=new Milk(3,"india milk",4,5,"Hindistan")
console.log(milk1);
console.log(milk2);
console.log(milk3);

//task2
let Milks=[milk1,milk2,milk3]
function filterRate(Milks){
    return Milks.find((Milks)=>(Milks.id==1))
}
console.log(filterRate(Milks));

//task3
// function ProductArrMath(arr) {
//     let sum = 0
//     let total=arr.reduce((acumulyator,current)=>acumulyator+current.price,sum)
//    return total/arr.length

// }
// console.log(ProductArrMath(Milks));

//task4
function filterRate(Milks){
    return Milks.filter((Milk)=>(Milk.FatPercent>=3))
}
console.log(filterRate(Milks));


//task5
let newarr=Milks.map(milk=>milk.price+10)
console.log(newarr);

//task6git 

function ProductArrMath(arr) {
    let sum = 0
    let total=arr.reduce((acumulyator,current)=>acumulyator+current.price,sum)
   return total


}
console.log(ProductArrMath(Milks));