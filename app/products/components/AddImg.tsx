import React, { useState } from 'react'
import { Field, Form } from 'react-final-form';

const AddImg = () => {

    const [img, setImg] = useState("")
    const [url, setUrl] = useState("")
    const uploadFile = async (e)=>{
        const files = e.target.files;
        const data = new FormData()
        data.append('file' , files[0])
        data.append('upload_preset' , "fileUpload")
        data.append('cloud_name' , "dlccpotyg")
        const res = await fetch("https://api.cloudinary.com/v1_1/dlccpotyg/image/upload",{
            method:"Post",
            body:data
        })
        const file = await res.json()
        console.log(file.url)
        setUrl(file.url)
    //    var imageUrl = ({imageUrl: file.secure_url})
        //  this.setState({image: file.secure_url})
    }


    

    return (
        <div>
            <Form onSubmit={(formObj)=>{
                // imgUpload()
                alert("Product Add Successfully!");
                console.log(formObj)
                // handleForm(formObj)
            }}>
            {({ handleSubmit })=>(
                    <form onSubmit={handleSubmit}>
                       <Field
                                id="file"
                                onChange={uploadFile}
                                name="file"
                                component="input"
                                type="file"
                            />
                        <button type="submit">Add image</button>
                        </form>
                )}
           

            </Form>
            <br/>
            <input style={{fontSize:'.5rem', width:'85%', marginLeft:'1.6rem', height:'1rem'}} 
            value={url} placeholder="copy image Url Here" />
        </div>
    )
}

export default AddImg
