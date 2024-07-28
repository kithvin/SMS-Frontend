import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

    const [teacher,setTeachers]= useState([])

    useEffect(()=>{
        loadTeachers()
    },[])

  const loadTeachers= async()=>{
      const result=await axios.get("http://127.0.0.1:8080/api/teacher")
      setTeachers(result.data);
  }

  return (

    <div className="container" style={{ marginTop: '20px' }}>
      
      {/* Teacher Table */}
      <h1 className="text-center mb-5" style={{ marginTop: '60px', fontWeight: 'bold', color: '#FF4500' }}>Teacher Table</h1>
      <table className="table table-striped table-bordered shadow-sm rounded mx-auto text-center table table-bordered border-primary" style={{ color: 'purple', fontWeight: 'bold' }} >
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Name</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
        {   
            teacher.map((teacher,index)=>(
              <tr>
                <th scope='row' key={index}>{index+1}</th>
                <td>{teacher.username}</td>
                <td>{teacher.name}</td>
                <td>{teacher.email}</td>
                <td>
                <button className='btn btn-primary mx-2'>View</button>
                <button className='btn btn-outline-primary mx-2'>Edit</button>
                <button className='btn btn-danger mx-2'>Delete</button>

                </td>
              </tr>
             ))
            }
  
           </tbody>
          </table>
      </div>

    
  )
}
