let id = new URLSearchParams(window.location.search).get("id");
async function logProducts(){
    try{
        let response=await fetch("https://fakestoreapi.com/products"+`${id}`);
        const praducts=await response.json();
        renderProducts(praducts)
 }catch(error){
    console.log(error);
 }
}
let 
