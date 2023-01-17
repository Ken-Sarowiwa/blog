import React from 'react'
import {useState} from "react"
import {MDBValidation, MDBInput, MDBBtn} from "mdb-react-ui-kit"
import axios from 'axios'
import { Toast } from 'react-toastify'
import {useNavigate} from "react-router-dom"
//za5gjpw7


const initialstate = {
  title : "",
  description: "",
  category : "",
  imageUrl : "",
}


const blog_options = ["Travel", "Fashio", "Fitenss", "Sports", "Food", "Tech"];
function AddEdit() {
  const [formData, setFormData] = useState(initialstate);
  const [error, setError]  = useState(null);
  const {title, description,category,imageUrl} = formData;
  const Navigate = useNavigate()

  const handleSubmit = () => {

  };

  const onCategoryChange = (category) => {

  }

  const onUploadImage = (file) => {

  }

  const onInputChange= (e)=>{

  }
  
  return (
    <MDBValidation className='row g-3' style={{marginTop: "100px"}} noValidate onSubmit={handleSubmit}>
      <p className='fs-2 fw-bold'>Add Blog</p>
      <div style={{margin:"auto", padding:"15px", maxWidth:"400px",alignContent:"center"}}>
      <MDBInput
        name='title'
        value={title}
        type="text"
        placeholder="title"
        validation="Please provide a title"
        required
        textarea
        rows={4}
        label="title"
        invalid
        onChange={onInputChange}
        
      />
      <br></br>

      <MDBInput
        name='Description'
        value={description}
        type="text"
        placeholder="description"
        validation="Please provide a description"
        required
        textarea
        rows={4}
        label="description"
        invalid
        onChange={onInputChange}
      />
      <br></br>
      <MDBInput
        name='image'
        value={imageUrl}
        type="file"
        validation="Please provide an image file"
        required
        rows={4}
        invalid
        onUpload={(e)=>onUploadImage(e.target.files)}
      />
      <br></br>
      <select className='categoryDropdown' onChange={onCategoryChange} value={category}>
        <option>Please select a category</option>
       {blog_options.map((blog_options, index) =>(
          <option value={blog_options || ""} key={index}>{blog_options}</option>
       ))}
      </select>
      <br></br>
      <br></br>
      <MDBBtn type='submit' style={{marginRight: "10px"}}>Add</MDBBtn>
      <MDBBtn type='danger' style={{marginRight: "10px"}} onClick={()=>Navigate("/")}>Go back</MDBBtn>
      
      </div>
    </MDBValidation>
  )
}

export default AddEdit