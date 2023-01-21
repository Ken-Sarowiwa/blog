import React from 'react'
import {useState} from "react"
import {MDBValidation, MDBInput, MDBBtn} from "mdb-react-ui-kit"
import axios from 'axios'
import { Toast, toast } from 'react-toastify'
import {useNavigate} from "react-router-dom"
import config from '../components/config'
 



const initialstate = {
  title : "",
  description: "",
  category : "",
  imageUrl : "",
}


const blog_options = ["Travel", "Fashion", "Fitenss", "Sports", "Food", "Tech"];
function AddEdit() {
  const [formData, setFormData] = useState(initialstate);
  const [error, setError]  = useState(null);
  const {title, description,category,imageUrl} = formData;
  const Navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category){
      setError("please select a category");
    }
    if (title && description&& category&& imageUrl){
      const updated = {...formData};
      const response = await axios.post("http://localhost:5000/blogs", updated);
    }
  };

  const onCategoryChange = (e) => {
    setFormData({...formData, category: e.target.value})

  }

  const onUploadImage = (file) => {
    const config = {
          params: {
            api_key: "187512453143324",
          }
  }
    const cloudimage = new FormData();
    cloudimage.append("file", file)
    cloudimage.append("upload_preset", "za5gjpw7" )
    axios.post("https://api.cloudinary.com/v1_1/za5gjpw7/image/upload", cloudimage, config).then((response)=>{
      toast.info("Image uploaded successfully")
      console.log(response.data)
      setFormData({...formData, imageUrl: response.data.url})
    }).catch("error")
  }

  const onInputChange= (e)=>{
    let {name, value} = e.target
    setFormData({...formData,[name]: value } )

  }


  const onDescChange= (e)=>{
    setFormData({...formData,description: e.target.value})
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
        onChange={onDescChange}
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
        onChange={(e)=>onUploadImage(e.target.files[0])}
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
      <MDBBtn type='Danger' style={{marginRight: "10px"}} onClick={()=>Navigate("/")}>Go back</MDBBtn>
      
      </div>
    </MDBValidation>
  )
}


export default AddEdit