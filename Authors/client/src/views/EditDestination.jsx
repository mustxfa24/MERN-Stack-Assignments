import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {
    getDestinationById,
    updateDestinationById
} from '../services/internalApiService';


export const EditDestination = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const [errors, setErrors] = useState(null);

    useEffect(() => {
        getDestinationById(id)
            .then((data) => {
                const {
                    title,
                    location,
                    description,
                } = data;

                setTitle(title);
                setLocation(location);
                setDescription(description);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleEditDestinationSubmit = (event) => {
        event.preventDefault();

        const editedDestination = {
            title: title,
            location,
            description,
        };

        updateDestinationById(id, editedDestination)
            .then((data) => {
                console.log(`edit destination data: `, data);
                navigate(`/destinations/${ id }`);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='w-50 p-4 rounded mx-auto shadow'>
            <h3 className='text-center'> Edit Author </h3>

            <form onSubmit={(e) => {
                handleEditDestinationSubmit(e)
            }}>
                <div className='form-group'>
                    <label className='h6'> Title </label>
                    <input onChange={(event) => {
                        setTitle(event.target.value);
                    }} type='text' className='form-control' value={ title } />
                </div>

                <div className='form-group'>
                    <label className='h6'> Location </label>
                    <input onChange={(event) => {
                        setLocation(event.target.value);
                    }} type='text' className='form-control' value={ location } />
                </div>

                <div className='form-group'>
                    <label className='h6'> Description </label>
                    <textarea onChange={(event) => {
                        setDescription(event.target.value);
                    }} type='text' className='form-control'value={ description }></textarea>
                </div>

                <button className='mt-3 btn btn-sm btn-outline-success'> Submit </button>
            </form>
        </div>
    )


};

export default EditDestination;
