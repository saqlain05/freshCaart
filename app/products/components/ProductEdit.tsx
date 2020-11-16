import React, { Suspense, useState } from "react"
import Layout from "app/layouts/Layout"
import { Link, useRouter, useQuery, useMutation, useParam, BlitzPage } from "blitz"
import getProduct from "app/products/queries/getProduct"
import updateProduct from "app/products/mutations/updateProduct"
import ProductForm from "app/products/components/ProductForm"
import { Form, Field } from "react-final-form"
import styles from '../../styles/Edit.module.scss'
import AddImg from "./AddImg"

const ProductEdit = ({value}) => {
    let saqimage
    const [img, setImg] = useState(value.imageUrl)
    console.log(img)

    const uploadFile = async (e) => {
        e.preventDefault()
       const files = e.target.files
       const data = new FormData()
       data.append('file', files[0])
       data.append('upload_preset', 'fileUpload')
       const res = await fetch("https://api.cloudinary.com/v1_1/dlccpotyg/image/upload", {
            method:"Post",
            body:data
       })
       const file = await res.json()
        console.log(file.secure_url)
       setImg(file.secure_url)
       
       console.log(img)
    }
    
  const router = useRouter()
  const [updateProductMutation] = useMutation(updateProduct)
  const productimg = value.imageUrl;

  const onSubmit = async (formObj) => {
    console.log(formObj)  
    try {
        let stockType = true
        if(formObj.stock==='2'){
            stockType=false
        }
        const updated = await updateProductMutation({
            where: {id: value.id},
            data: {
                category: {connect: {id: parseInt(formObj.categoryId)}},
                imageUrl: img,
                measureUnit: formObj.measureUnit,
                minQuantity: Number(formObj.minQuantity),
                name: formObj.name,
                price: Number(formObj.price),
                stock: stockType,
                description: formObj.description
            }
        })
        console.log(updated)
        router.push('/products')
    } catch (error) {
        alert("Error creating article " + JSON.stringify(error, null, 2))
    }}
    return (
        <>
        {/* <AddImg /> */}
        <div className={styles.mainDiv}>
        
            <h3>Edit Product</h3>
             <Form
                onSubmit={onSubmit}
                initialValues={value}
            >
                {({ handleSubmit}) => (
                    <form onSubmit={handleSubmit} className={styles.formDiv}>

                        <div>
                            <Field
                            // className={styles.input}
                                name="name"
                                component="input"
                                type="text"
                                placeholder="Blog Title"
                            />
                        </div>
                        <div>
                            <p>Product Image</p>
                        <img src={productimg || ''} alt="missing image"  style={{width:'10rem', height:'10rem'}} />
                        {/* <a href="">edit</a> */}
                        </div>
                        <Field name="imageUrt">
                            {({input})=>(
                                <input placeholder="Enter Image URL" type="file" {...input} onChange={(e) => uploadFile(e)}/>
                            )}
                        </Field>
                        { img=='' && <p>Upload and wait for image...</p> } 
                          { img!='' && 
                           <img src={img} style={{width:'10rem', height:'10rem'}} />
                        }
                        <div>
                            <Field
                                name="price"
                                component="input"
                                type="text"
                                placeholder="Blog Title"
                            />
                        </div>
                        <div>
                            <Field
                                name="minQuantity"
                                component="input"
                                type="text"
                                placeholder="Blog Title"
                            />
                        </div>
                        <div>
                            <Field
                                name="description"
                                component="input"
                                type="text"
                                placeholder="Blog Title"
                            />
                        </div>

                        <Field name="measureUnit" component="select" className={styles.select}>
                             <option>Select Measure unit</option>
                             <option value="Kg">KG</option>
                             <option value="Item">Item</option>
                        </Field>

                        <Field name="stock" component="select" className={styles.select}>
                             <option>Select Stocks availability</option>
                             <option value="1">In Stock</option>
                             <option value="2">Out of Stock</option>
                        </Field>
                        <Field name="categoryId" component="select" className={styles.select}>
                             <option>Select category</option>
                             <option value="1">Fruits</option>
                             <option value="2">Vegetables</option>
                        </Field>
                        
                        
                            <button type="submit">
                                Edit Product
                            </button>
                        
                    </form>
                )}

            </Form>
        </div>
        </>
    )
}

export default ProductEdit