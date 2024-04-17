let row = document.querySelector(".row")
async function logProducts() {
    const response = await fetch("https://fakestoreapi.com/products")
    const products = await response.json();
    renderProducts(products)
}
logProducts()




function renderProducts(products) {


    products.forEach(element => {
        row.innerHTML += `
     
        <div class="col-3">
                <div class="card" style="width: 18rem;">
                    <img src=${element.image} class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">
                        <h5>Fjallraven-Foldsack No1<br>Price:109.95$ <br>Category: men's clothing <br> Rating: 3.9 <i class="fa-solid fa-star" style="color: #FFD43B;"></i></h5>
                        </p>
                        <button class="btn btn-primary"> info <button>
                    </div>
                </div>
            </div>
        
        
        
        
        `
    });

}