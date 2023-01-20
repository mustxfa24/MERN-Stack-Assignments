import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/product", {
            title,
            price,
            description
        })
        .then((res) => {
            console.log(res.data)
            setTitle("");
            setPrice("");
            setDescription("");
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="col col-6 mx-auto">
        <form onSubmit={submitHandler}>
            <label className='form-label'> Title:</label>
            <input className='form-control' type="text" onChange={(e) => setTitle(e.target.value)}/>
            <label className='form-label'> Price: </label>
            <input className='form-control' type="number" onChange={(e) => setPrice(e.target.value)} />
            <label className='form-label'> Description: </label>
            <input className='form-control' type="text" onChange={(e) => setDescription(e.target.value)} />
            <button className='btn btn-success'> Submit</button>
        </form>
        </div>
    )
}

export default Form