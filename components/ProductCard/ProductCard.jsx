import { useState } from 'react'

const ProductCard = ({ item })  => {
    return (
        <div className="product-item" style={{border: '1px solid #aaa', padding: '15px', width: '25%'}}>
            <h3>({item.id}){item.name}</h3>
            <h4>{item.category}</h4>
            <p>{item.rating}</p>
            <p>{item.price}</p>
        </div>
    )
};

export default ProductCard;