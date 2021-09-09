import React, { useState } from 'react'
import api from '../../lib/api'

import{
    Col,
} from 'reactstrap'
import ProductForm from '../../Components/ProductForm'


const CreateProduct = () => {
    const [ productData, setProductData ] = useState({})
    const [ success, setSuccess ] = useState( false )

    const inputHandler = event => {
        const { name, value } = event.target
        setProductData({...productData, [name]:value})
    }

    const showSuccess = () => {
        setSuccess( true )
        setTimeout( function(){
            setSuccess( false )
        },2000)
    }

    const buttonHandler = async () => {
        const result = await api.createProduct( productData )
        result.name && showSuccess() 
    }
    return(
        <Col xs="12">
            <ProductForm
                inputHandler = { inputHandler }
                buttonHandler = { buttonHandler }
                buttonText = "Guardar Producto"
                success = { success }
                defaultData = { productData }
            />
        </Col>
    )
}

export default CreateProduct