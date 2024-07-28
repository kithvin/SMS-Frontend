import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Route, Link, useParams} from 'react-router-dom'


export default function ViewTeacher() {

  const [teacher,setTeacher] = useState ({
    username: "",
    name: "",
    email:""
})

    const {id} =useParams();

    useEffect(()=> 
    { 
      loadTeacher()
    },[])

    const loadTeacher = async () =>{
      const result = await axios.get(`http://127.0.0.1:8080/api/teacher/${id}`)
      setTeacher(result.data)
    }

  return (
    <div className='container'>
    <div className='row justify-content-center'>
        <div className='col-md-6 border rounded p-4 mt-4 shadow blue-container'>
            <h2 className='text-center mb-4 fw-bold'>Teacher Details</h2>
      <div className='card text-center fw-bold'>
        <div className='card-heder2'>
            Details of Teacher id : {teacher.id}
            <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
            <b>User Name :</b>
            {teacher.username}
            </li>

            <ul className='list-group list-group-flush'></ul>
            <li className='list-group-item'>
            <b>Name :</b>
            {teacher.name}
            </li>

            <ul className='list-group list-group-flush'></ul>
            <li className='list-group-item'>
            <b>E-mail :</b> 
            {teacher.email}
            </li>
            </ul>
            
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-auto">
        <Link className="btn btn-info " to="/" style={{ fontWeight: 'bold' }} >
        Back To Home Page
            </Link>
        </div>
      </div>

      </div>
    </div>
          </div>
           

  )
}
