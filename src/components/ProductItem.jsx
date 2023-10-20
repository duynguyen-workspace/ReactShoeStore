const ProductItem = (props) => {
    const {item, updateModal, addToCart} = props

    return (
        <div className="card w-100">
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.shortDescription}</p>
                <p className="fs-5 fw-semibold text-primary">{`$${item.price}`}</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-success" onClick={() => {
                        addToCart(item)
                        alert(`Add ${item.name} successfully!`)
                    }}>Add To Cart</button>
                    <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#productModal" onClick={() => {
                        updateModal(item)
                    }}>View Detail</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
