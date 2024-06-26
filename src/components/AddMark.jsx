import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddMark = () => {
    const [data, setData] = useState(

        {
            "membername": " ",
            "email": "",
            "phone": ""
        }

    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(data)
                if (response.data.status=="success") {
                    alert("Successfully Added")
                    
                } else {
                    alert("Error")
                    
                }
            }
        ).catch().finally()
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                                <br /><br />
                                <label for="" class="form-label">MEMBER NAME</label>
                                <input type="text" className="form-control" name='membername' value={data.membername} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                                <br /><br />
                                <label for="" class="form-label">EMAIL ID</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                            </div>
                            <center>
                                <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                                    <br /><br />
                                    <label for="" class="form-label">PHONE NO</label>
                                    <input type="text" className="form-control" name='phone' value={data.phone} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                                    <br></br>
                                    <button class="btn btn-dark" onClick={readValue}>ADD</button>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddMark