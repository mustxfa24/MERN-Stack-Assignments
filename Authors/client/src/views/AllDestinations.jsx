import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import {
    getAllDestinations,
    deleteDestinationById
} from '../services/internalApiService';


// named export: import { AllDestinations, Name2 } from './components/AllDestinations';
const AllDestinations = (props) => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        getAllDestinations()
            .then(data => {
                setDestinations(data)
            })
            .catch(error => [
                console.log(error)
            ])
    }, [])

    const handleDelete = (idToDelete) => {
        deleteDestinationById(idToDelete)
            .then(data => {
                const filteredDestinations = destinations.filter((destination) => {
                    return destination._id !== idToDelete
                })

                setDestinations(filteredDestinations)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="w-50 mx-auto text-center">
            <h2> Authors </h2>

            { destinations.map((destination) => {
                const { _id, title, location, description } = destination;
                return (
                    <div key={_id} className="shadow mb-4 rounder border p-4">
                        <Link to={ `/destinations/${ _id }` }>{ title }</Link>
                        <p> { location } </p>
                        <Link
                            to={ `/destinations/${ _id }/edit` } className='btn btn-sm btn-outline-warning mx-1'
                        >
                            Edit
                        </Link>
                        <button
                            onClick={(e => handleDelete(_id))} className="btn btn-sm btn-outline-danger mx-1"> Delete </button>
                    </div>
                );
            })}
        </div>
    );
    
    
};

export default AllDestinations;