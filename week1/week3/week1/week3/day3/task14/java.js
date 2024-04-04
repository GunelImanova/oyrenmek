 let num = [1,2,3,4]
let cut=0
let tek=0
for(let i=0;i<num.length;i++)
if(i%2==0){
    cut+=num[i]
}
else{
    tek+=num[i]
}
console.log(tek*cut);