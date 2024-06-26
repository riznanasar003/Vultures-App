import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewMember = () => {
    const [data,changedData] = useState([])
    const fetchData = ()=>{
        axios.post("http://localhost:8080/view").then(
            (response)=>{
                changedData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <div className="conatiner">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">NAME</th>
                                    <th scope="col">EMAIL ID</th>
                                    <th scope="col">PHONE NO</th>
                                </tr>
                            </thead>
                            <tbody>
                           {data.map(
                            (value,index)=>{
                                return  <tr>
                                <th scope="row">{value.membername}</th>
                                    <th >{value.email}</th>
                                    <td>{value.phone}</td>
                                </tr>
                            }
                           )}
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewMember