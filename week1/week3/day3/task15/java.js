let num = [1,2,3,4]
let hasil=1
let cem=0
for (let i=0;i<num.length;i++){
    hasil*=num[i]
    } 
if(hasil%2==0){
for(let index =0;index<num.length;index++){
    cem+=num[index]
}
console.log(`Cutdur ${cem}`);
}
else{
    console.log(0);
}
