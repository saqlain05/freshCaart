import React, { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, useRouter, useQuery, useMutation, useParam, BlitzPage } from "blitz"
import getProduct from "app/products/queries/getProduct"
import updateProduct from "app/products/mutations/updateProduct"
import ProductForm from "app/products/components/ProductForm"
import { Form, Field } from "react-final-form"
import styles from '../../styles/Edit.module.scss'

const ProductEdit = () => {
    const router = useRouter()
  const productId = useParam("productId", "number")
  const [product, { mutate }] = useQuery(getProduct, { where: { id: productId }, include: {category: true} })
  const [updateProductMutation] = useMutation(updateProduct)

  const onSubmit = async (formObj) => {
    try {
        const updated = await updateProduct({
            where: { id: product.id },
            data: { 
                name: formObj.name,
                   imageUrl: formObj.imageUrl,
                   price: parseFloat(formObj.price),
                   minQuantity: parseInt(formObj.minQuantity),
                   measureUnit: formObj.measureUnit,
                   description: formObj.description,
                   stock: Boolean(formObj.stock),
                   category : {connect : {id: parseInt(formObj.category)}},
                //    {include:{category:(true)}}
                
            }
        })
        mutate(product)
        // router.push("/posts/[postId]", `/posts/${updated.id}`)
        router.push("/products")
    } catch (error) {
        alert("Error creating article " + JSON.stringify(error, null, 2))
    }}
    return (
        <div className={styles.mainDiv}>
            <h3>Edit Product</h3>
             <Form
                onSubmit={onSubmit}
                initialValues={product}
            >
                {({ handleSubmit, submitting, pristine }) => (
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
                            <Field
                                name="imageUrl"
                                component="input"
                                type="text"
                                placeholder="Blog Title"
                            />
                        </div>
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
                             <option >Select Stocks availability</option>
                             <option value="true">In Stock</option>
                             <option value="false">Out of Stock</option>
                        </Field>
                        <Field name="category" component="select" className={styles.select}>
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
    )
}

export default ProductEdit
