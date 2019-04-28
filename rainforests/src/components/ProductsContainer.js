import React from 'react'
import ProductCard from './ProductCard'

const ProductsContainer = ({products, toggleCart}) => (
  <div className="ui grid container">
    {products.map(product => <ProductCard {...product} toggleCart={toggleCart} />)}
  </div>
)

export default ProductsContainer
