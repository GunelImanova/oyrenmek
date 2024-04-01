function text (params){
let soz="Gunel"
let sozs=soz.toUpperCase();
console.log(sozs);
}
//text();
let sentence="Cox gozel hava var"
function word(params){
  
    let sentenceArr=params.split(" ")
    console.log(sentenceArr)
    let a=" "
    let b=" "
    for(let index =0; index < sentenceArr.length; index++){
        a+=sentenceArr[index].replace(sentenceArr[index][0], sentenceArr[index][0].toUpperCase()) +b
    }
    console.log(a);
}

console.log(word(sentence))



let sentence="Cox gozel hava var"
function word(params){
  
    let sentenceArr=params.split(" ")
    console.log(sentenceArr)
    let a=[]

    for(let index =0; index < sentenceArr.length; index++){
        a.push(sentenceArr[index].replace(sentenceArr[index][0], sentenceArr[index][0].toUpperCase()))
    }
    console.log(a.join(" "));
}

console.log(word(sentence))