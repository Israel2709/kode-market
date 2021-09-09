import React, { useState, useEffect } from 'react'

import {
    Col,
    Row
} from 'reactstrap'
import ProductCard from '../../Components/ProductCard'
import api from '../../lib/api'
const ProductCatalog = () => {
    const [products, setProducts] = useState({})
    useEffect(async () => {
        const result = await api.getAllProducts()
        console.log(result)
        setProducts(result)
    }, [])
    return (
        <Col xs="12" >
            <h2>Catálogo de productos</h2>
            <Row>
                {
                    Object.keys(products).map(product => {
                        return (
                            <ProductCard 
                                productKey = { product }
                                productData = { products[product]}
                            />
                        )
                    })
                }
            </Row>
        </Col>
    )
}

export default ProductCatalog