import ProductItem from "./ProductItem"

const ProductList = (props) => {
    const {arrProduct, updateModal, addToCart} = props

    return (
        <div className="row">
            {arrProduct.map((product) => {
                return (
                    <div className="col-3 p-3" key={product.id}>
                        <ProductItem item={product} updateModal={updateModal} addToCart={addToCart}/>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList
