import React, { useState, useEffect } from 'react'
import api from '../../lib/api'
import './styles.scss'
import {
    useParams,
    Link
} from 'react-router-dom'

import {
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button
} from 'reactstrap'

const ProductDetail = () => {
    const [productData, setProductData] = useState({})
    const [showPreview, setShowPreview] = useState(false)
    const productId = useParams()

    console.log(productId.id)

    useEffect(async () => {
        const result = await api.getProductById(productId.id)
        setProductData(result)
        console.log(result)
    }, [])

    const { name, description, picture, price } = productData
    return (
        <Col xs="12" className="position-relative">
            {showPreview && <div
                className="img-preview"
                style={{ backgroundImage: `url(${picture})` }}
                onClick={() => setShowPreview(!showPreview)}
            ></div>}
            <Card>
                <div
                    className="cover"
                    style={{ backgroundImage: `url(${picture})` }}
                    onClick={() => setShowPreview(!showPreview)}
                >

                </div>

                <CardBody>
                    <CardTitle tag="h5">{name}</CardTitle>
                    <CardText>{description}</CardText>
                    <CardText>{price}</CardText>
                    <Link to={`/edit-product/${productId.id}`}>
                        <Button>Editar</Button>
                    </Link>
                    
                </CardBody>
            </Card>
        </Col>
    )
}

export default ProductDetail