let num=[3,6,9,4,1]
let sum=0
let or=0
for(let i=0; i<num.length; i++){
sum+=num[i]
or=sum/num.length;
}
console.log(parseInt(or));