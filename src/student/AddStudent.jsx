import axios from 'axios';
import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom';


export default function AddStudent() {

    let navigate=useNavigate()

    const [student,setStudent] = useState ({
        username: "",
        name: "",
        email:""
    })

        const {username,name,email}=student

        const onInputChange=(e)=>{
            setStudent ({...student, [e.target.name]: e.target.value});
        };

        const onSubmit=async (e)=>{
                 e.preventDefault();
                 await axios.post("http://127.0.0.1:8080/api/student",student)
                 navigate("/")
        };

  return (
    <div className='container-addstudent'>
    <div className='row justify-content-center'>
        <div className='col-md-6 border rounded p-4 mt-4 shadow stu-container'>
            <h2 className='text-center mb-4 fw-bold'>Register Student</h2>

            <form onSubmit={(e)=>onSubmit(e)}>

            <div className='mb-3 text-center'>
                <label htmlFor='Username' className='form-label fw-bold'>
                    User Name
                </label>
            <input type={"text"} 
            className='form-control' 
            placeholder='Enter Student User Name'
            name='username'
            value={username}
            onChange={(e)=>onInputChange(e)}
            />
            
            </div>

            <div className='mb-3 text-center'>
                <label htmlFor='Name' className='form-label fw-bold'>
                    Name
                </label>
            <input type={"text"} 
            className='form-control' 
            placeholder='Enter Student Name'
            name='name'
            value={name}
            onChange={(e)=>onInputChange(e)}/>
            
            </div>

            <div className='mb-3 text-center'>
                <label htmlFor='Email' className='form-label fw-bold'>
                    Email
                </label>
            <input type={"text"} 
            className='form-control' 
            placeholder='Enter Student e-mail address'
            name='email'
            value={email}
            onChange={(e)=>onInputChange(e)}/>
            </div>
            
            <div className="row justify-content-center">

        <div className="col-auto">
            <button type="submit" className="btn btn btn-primary mx-2">
            Submit
            </button>
            <Link className="btn btn-danger mx-2 " to="/">
            Cancel
            </Link>
            
        </div>
        
        </div>

        </form>

        </div>
      </div>
    </div>
  );
}
