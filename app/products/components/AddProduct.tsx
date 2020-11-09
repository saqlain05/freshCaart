import React, { useState } from 'react'
import styles from '../../styles/AddProduct.module.scss'
import {Form , Field} from 'react-final-form'
import { Router, useMutation } from 'blitz'
import upsertProduct from '../mutations/upsertProduct'


const AddProduct = () => {

    // const [upsertProductMutation] = useMutation(upsertProduct)

    // const handleForm = async (formObj) => {
    //     try {
    //         const product = await upsertProductMutation({
    //             where: {
                    
    //             },
    //             update: {
    //                 name: formObj.name,
    //                 imageUrl: formObj.imageUrl,
    //                 price: formObj.price,
    //                 minQuantity: formObj.minQuantity,
    //                 measureUnit: formObj.measureUnit,
    //                 description: formObj.description,
    //                 stock: formObj.stock,
    //                 category : {connect : {id: formObj.categoryId}}
                    
                   
    //             },
    //             create: {
                   
    //                name: formObj.name,
    //                imageUrl: formObj.imageUrl,
    //                price: formObj.price,
    //                minQuantity: formObj.minQuantity,
    //                measureUnit: formObj.measureUnit,
    //                description: formObj.description,
    //                stock: formObj.stock,
    //                category : {connect : {id: formObj.categoryId}}
                   
    //             }
    //         })
    //         Router.push('/products')
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <div className={styles.mainDiv}>
            <h3 className={styles.header}>Add Products</h3>
            <Form onSubmit={(formObj)=>{
                alert("submitting!");
                console.log(formObj)
                // handleForm(formObj)
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
                        <Field name="Price">
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
                             <option value="Peace">Peace</option>
                        </Field>

                        <Field name="stock" component="select">
                             <option >Select Stocks availability</option>
                             <option value="true">In Stock</option>
                             <option value="false">Out of Stock</option>
                        </Field>
                        <Field name="category" component="select">
                             <option>Select category</option>
                             <option value="1">Fruits</option>
                             <option value="2">Vegitables</option>
                        </Field>
                       

                        <button type="submit">Add Products</button>

                    </form>
                )}
            </Form>
        </div>
    )
}

export default AddProduct
