import React, { useState } from 'react'
import styles from '../../styles/AddProduct.module.scss'
import {Form , Field} from 'react-final-form'
import { Router, useMutation } from 'blitz'
import upsertProduct from '../mutations/upsertProduct'
import createProduct from '../mutations/createProduct'
import AddImg from './AddImg'
import Loader from './Loader'


const AddProduct = () => {

    const [createProductMutation] = useMutation(createProduct)
    const [img, setImg] = useState('')

    const uploadFile = async (e) => {
       const files = e.target.files
       const data = new FormData()
       data.append('file', files[0])
       data.append('upload_preset', 'fileUpload')
       const res = await fetch("https://api.cloudinary.com/v1_1/dlccpotyg/image/upload", {
            method:"Post",
            body:data
       })
       const file = await res.json()
    //    console.log(file.secure_url)
       setImg(file.secure_url)
    //    console.log(img)
    }

    const handleForm = async (formObj) => {
        // console.log(formObj)
        // console.log(img)
        try {
            const product = await createProductMutation({
                data: {
                   name: formObj.name,
                   imageUrl: img,
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
        {/* <AddImg /> */}
        <div className={styles.mainDiv}>
            <h3 className={styles.header}>Add Products</h3>
            <Form onSubmit={(formObj)=>{
                alert("Product add Successfully");
                <Loader />
                // console.log(formObj)
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
                                <input placeholder="Enter Image URL" type="file" {...input} onChange={(e) => uploadFile(e)}/>
                            )}
                        </Field>
                        {/* <input style={{fontSize:'.5rem', width:'85%', marginLeft:'1.6rem', height:'1rem'}} 
                           value={img} readOnly placeholder="copy image Url Here" /> */}
                          { img=='' && <p>Upload and wait for image...</p> }                            { img!='' && 
                        //    <>
                           <img src={img} style={{width:'10rem', height:'10rem'}} />
                        //    </>
                        }
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
