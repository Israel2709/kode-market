import React, { useState } from 'react'

import{
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Alert
} from 'reactstrap'
const ProductForm = props => {
    const { 
        inputHandler, 
        buttonHandler, 
        buttonText, 
        success, 
        defaultData
    } = props
    return(
        <Col xs="12">
            <Form className="bg-dark text-white p-3 border rounded shadow">
                { success && <Alert color="success">
                   El producto se guardó con éxito
                </Alert>}
                <FormGroup>
                    <Label>Nombre</Label>
                    <Input 
                        type="text" 
                        name="name" 
                        onChange={ inputHandler }
                        value = { defaultData.name || "" }
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Descripción:</Label>
                    <Input 
                        type="text" 
                        name="description" 
                        onChange={ inputHandler }
                        value = { defaultData.description || "" }/>
                </FormGroup>
                <FormGroup>
                    <Label>Imagen:</Label>
                    <Input 
                        type="text" 
                        name="picture" 
                        onChange={ inputHandler }
                        value = { defaultData.picture || "" }
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Precio:</Label>
                    <Input 
                        type="text" 
                        name="price" 
                        onChange={ inputHandler }
                        value = { defaultData.price || "" }
                    />
                </FormGroup>
                <Button className="mt-3" color="primary" onClick={buttonHandler}>{ buttonText }</Button>
            </Form>
        </Col>
    )
}

export default ProductForm