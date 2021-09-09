import React, { useState, useEffect } from 'react'
import api from '../../lib/api'
import {
    useParams,
    useHistory
} from 'react-router-dom'
import ProductForm from '../../Components/ProductForm'

const EditProduct = ( ) => {
    const productId = useParams().id
    const [ productData, setProductData ] = useState({})
    const [ success, setSuccess ] = useState( false )
    const history = useHistory()

    useEffect(  async () => {
        const result = await api.getProductById( productId )
        setProductData( result )
    },[])

    const showSuccess = () => {
        setSuccess( true )
        setTimeout( function(){
            setSuccess( false )
            history.push("/product-catalog")
        },2000)
    }

    const inputHandler = event => {
        const { name, value } = event.target
        setProductData({...productData, [name]:value})
    }

    const buttonHandler = async () => {
        const result = await api.patchProduct( productData, productId )
        result.name && showSuccess() 
    }

    return(
        <ProductForm 
            inputHandler = { inputHandler }
            buttonHandler = { buttonHandler }
            success = { success }
            buttonText = "Guardar Cambios"
            defaultData = { productData }
        />
    )
}

export default EditProduct