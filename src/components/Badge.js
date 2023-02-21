import React from 'react'
import { MDBCard } from 'mdb-react-ui-kit'
import AddEdit from '../pages/AddEdit'
function Badge({imagUrl,}) {
    async function Delete(e){
        e.preventDefault()

    }
  return (
    <div>
        <MDBCard>
        <div class="card">
            <img src={imagUrl} class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#!" class="btn btn-primary" onClick={Delete}>edit</a>
        </div>
    </div>
        </MDBCard>
    </div>
  )
}

export default Badge