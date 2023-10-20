const ProductDetail = (props) => {
    const {data} = props

    return (
        <div className="modal fade" id="productModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">Product Detail</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-4">
                            <img src={data.image} className='img-fluid' alt="" />
                        </div>
                        <div className="col-8">
                            <h2 className="fs-3 fw-bold">{data.name}</h2>
                            <p className="fs-6">{data.description}</p>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
