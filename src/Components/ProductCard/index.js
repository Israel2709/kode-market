import React from 'react'

import {
    Link
} from 'react-router-dom'

import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
    CardImg,
    Col
} from 'reactstrap'

const ProductCard = props => {
    const { productKey } = props
    const { picture, name, description, price } = props.productData
    return(
        <Col xs="12" md="3" key={productKey} className="mb-3">
            <Card shadow dark >
                <CardImg top width="100%" src={picture} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{name}</CardTitle>
                    <CardText>{description}</CardText>
                    <CardText className="d-flex justify-content-end text-success">{price}</CardText>
                    <Link to={`product-detail/${productKey}`}>
                        <Button type="button">Ver detalles</Button>
                    </Link>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ProductCard