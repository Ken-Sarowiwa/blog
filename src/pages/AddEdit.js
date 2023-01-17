import React from 'react'
import {useState} from "react"
import {MDBValidation, MDBInput, MDBBtn} from "mdb-react-ui-kit"
import axios from 'axios'
import { Toast } from 'react-toastify'
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

  const handleSubmit = () => {

  };
  
  return (
    <MDBValidation className='row g-3' style={{marginTop: "100px"}} noValidate onSubmit={handleSubmit}>
      <p className='fs-2 fw-bold'>Add Blog</p>
    </MDBValidation>
  )
}

export default AddEdit