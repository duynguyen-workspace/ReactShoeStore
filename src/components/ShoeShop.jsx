import React, { useState } from 'react'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import dataJson from '../data.json'
import Cart from './Cart'

const ShoeShop = () => {
    const [cart, setCart] = useState([])
    const [modal, setModal] = useState({})

    const handleAddToCart = (item) => {
        // setCart([...cart, {...item, cartQuantity: 1}])
        
        setCart((prevState) => {
            //* kiểm tra xem trong cart đã có sản phẩm muốn thêm chưa
            const itemIndex = prevState.findIndex((value) => value.id == item.id)

            //? Chưa tồn tại trong cart
            if (itemIndex == -1) {
                prevState.push({...item, cartQuantity: 1})
            } else {
                //TODO: Đã tồn tại trong cart
                prevState[itemIndex].cartQuantity += 1
            }

            return [...prevState]
        })
    }

    const handleRemoveFromCart = (itemId) => {
        // let newCart = cart.splice()
        // let itemIndex = newCart.indexOf(item)
        // if (itemIndex != -1) {
        //     newCart.splice(itemIndex,1)
        //     alert(`Remove ${item.name} successfully!`)
        //     return
        // }
        // alert(`Cannot remove ${item.name}!`)

        setCart((prevState) => {
            return prevState.filter(value => {
                value.id != itemId
            })
        })

    }

    const handleItemQuantity = (itemId, quantity) => {
        
        setCart((prevState) => {
            //* Tìm index của sản phẩm
            const itemIndex = prevState.findIndex((value) => value.id == itemId)

            //* Quantity của sản phẩm có giá trị minimum là 1
            prevState[itemIndex].cartQuantity = prevState[itemIndex].cartQuantity + quantity || 1
            
            return [...prevState]
        })
    }

    const handleSetModal = (data) => {
        setModal(data)
    }

    return (
        <div className='container mt-3'>
            <div className='d-flex justify-content-between align-items-center'>
                <h1 className='text-center'>Shoe Store</h1>
                <div className='fs-3' data-bs-toggle="modal" data-bs-target="#cartModal">
                    <i className="fa-solid fa-cart-plus"></i>
                </div>
            </div>

            
            <ProductList arrProduct={dataJson} updateModal={handleSetModal} addToCart={handleAddToCart}/>
            <ProductDetail data={modal}/>
            <Cart items={cart} updateQuantity={handleItemQuantity} removeItem={handleRemoveFromCart}/>
        </div>
    )
}

export default ShoeShop
