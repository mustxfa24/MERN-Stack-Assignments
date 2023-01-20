import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err) => console.log(err))
    }, [])

    const updatedProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, {
            title,
            price,
            description
        })
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
    <div>
        <h1> Update a Product </h1>
        <form onSubmit={ updatedProduct }>
            <label className='form-label'> Title:</label>
            <input className='form-control'
                value={ title }
                type="text"
                onChange={(e) => setTitle(e.target.value)} />
            <label className='form-label'> Price: </label>
            <input className='form-control'
                value={price}
                type="number"
                onChange={(e) => setPrice(e.target.value)} />
            <label className='form-label'> Description: </label>
            <input className='form-control'
                value={description}
                type="text"
                onChange={(e) => setDescription(e.target.value)} />
            <button className='btn btn-success'> Submit</button>
        </form>
    </div>
    )
}

export default Update;