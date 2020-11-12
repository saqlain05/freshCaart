import React, { useState } from 'react'
import styles from '../../styles/AddProduct.module.scss'
import {Form , Field} from 'react-final-form'
import { Router, useMutation } from 'blitz'
import upsertProduct from '../mutations/upsertProduct'
import createProduct from '../mutations/createProduct'
import AddImg from './AddImg'


const AddProduct = () => {

    const [createProductMutation] = useMutation(createProduct)

    const handleForm = async (formObj) => {
        try {
            const product = await createProductMutation({
                data: {
                   name: formObj.name,
                   imageUrl: formObj.imageUrl,
                   price: parseFloat(formObj.price),
                   minQuantity: parseInt(formObj.minQuantity),
                   measureUnit: formObj.measureUnit,
                   description: formObj.description,
                   stock: Boolean(formObj.stock),
                   category : {connect : {id: parseInt(formObj.category)}}
                }
            }, {})
            Router.push('/products')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <AddImg />
        <div className={styles.mainDiv}>
            <h3 className={styles.header}>Add Products</h3>
            <Form onSubmit={(formObj)=>{
                alert("submitting!");
                console.log(formObj)
                handleForm(formObj)
            }}>
                {({ handleSubmit })=>(
                    <form className={styles.formDiv} onSubmit={handleSubmit}>
                        <Field name="name" >
                            {({input})=>(
                                <input placeholder="Enter Product Name" type="text" {...input} />
                            )}
                        </Field>
                        <Field name="imageUrl" >
                            {({input})=>(
                                <input placeholder="Enter Image URL" type="text" {...input} />
                            )}
                        </Field>
                        <Field name="price">
                            {({input})=>(
                                <input placeholder="Product Price" type="number" {...input} />
                            )}
                        </Field>
                        <Field name="description">
                            {({input})=>(
                                <input placeholder="Product Description" type="text" {...input} />
                            )}
                        </Field>
                        <Field name="minQuantity">
                            {({input})=>(
                                <input placeholder="Product Minimum Quantity" type="number" {...input} />
                            )}
                        </Field>
                        
                        <Field name="measureUnit" component="select">
                             <option>Select Measure unit</option>
                             <option value="Kg">KG</option>
                             <option value="Item">Item</option>
                        </Field>

                        <Field name="stock" component="select">
                             <option >Select Stocks availability</option>
                             <option value="true">In Stock</option>
                             <option value="false">Out of Stock</option>
                        </Field>
                        <Field name="category" component="select">
                             <option>Select category</option>
                             <option value="1">Fruits</option>
                             <option value="2">Vegetables</option>
                        </Field>
                       

                        <button type="submit">Add Products</button>

                    </form>
                )}
            </Form>
        </div>
        </>
    )
}

export default AddProduct
