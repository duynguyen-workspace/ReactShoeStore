const CartItem = (props) => {
    const { item, index, updateQuantity, removeItem } = props

    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>
                <img src={item.image} alt="item image" style={{width: 80, height: 80}} />
            </td>
            <td>{item.name}</td>
            <td>
                <div className="d-flex align-items-center">
                    <button className='btn btn-outline-success' onClick={() => {updateQuantity(item.id, 1)}}>+</button>
                    <span className="mx-2">{item.cartQuantity}</span>
                    <button className='btn btn-outline-danger' onClick={() => {updateQuantity(item.id, -1)}}>-</button>
                </div>
            </td>
            <td>{item.price}</td>
            <td>{item.price * item.cartQuantity}</td>
            <td>
                <button className='btn btn-danger' onClick={() => {
                    removeItem(item.id)
                    alert(`Delete ${item.name} successfully`)
                }}>Xoá</button>
            </td>
        </tr>
    )
}

export default CartItem
