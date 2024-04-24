import products from "../data/data.js"
function Products() {
    return (
        <>
            <h1>products</h1>
            <ul>
                {products.map((product) => {
                    return (
                        <div key={product.id}>
                            <li>
                                {product.name}
                            </li>
                            <span>{product.price}</span>
                        </div>
                    )
                })}

            </ul>



        </>
    );
}
export default Products