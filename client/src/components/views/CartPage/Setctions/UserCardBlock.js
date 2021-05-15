import React from 'react'

function UserCardBlock(props) {

    const renderItems = () => {
        props.products && props.products.map(product => (
            <tr key={product._id}>
                <td>
                    <img style={{ width: '70px'}} src="" alt="product" />
                </td>
                <td>{product.quantity} EA</td>
                <td>$ {product.price}</td>
                <td><button onClick>Remove</button></td>
            </tr>
        ))
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product quantity</th>
                        <th>Product Price</th>
                        <th>Product form Cart</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default UserCardBlock
