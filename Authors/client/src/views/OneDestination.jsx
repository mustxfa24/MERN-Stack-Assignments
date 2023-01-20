import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
    getDestinationById,
    deleteDestinationById
} from '../services/internalApiService';

export const OneDestination = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [destination, setDestination] = useState(null);

    useEffect(() => {
        getDestinationById(id)
            .then(data => {
                setDestination(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    const handleDelete = () => {
        deleteDestinationById(id)
            .then(data => {
                navigate("/destinations")
            })
            .catch(err => {
                console.log(err)
            })
    }

    if (destination === null) {
        return <h3> No Destination </h3>
    }

    const { title, location, description } = destination;

    return (
        <div className='w-100 mx-auto shadow mb-4 rounded border p-4'>
            <h4> { title } </h4>
            <p> { location } </p>
            <p> { description } </p>
            <button onClick={ handleDelete } className="btn btn-sm btn-outline-danger mx-1"> Delete </button>
        </div>
    );
};

export default OneDestination;