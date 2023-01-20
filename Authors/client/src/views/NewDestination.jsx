import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createDestination } from "../services/internalApiService";

export const NewDestination = (props) => {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState("");

    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();

    const handleNewDestinationSubmit = (e) => {
        e.preventDefault();

        const newDestination = {
            location: location,
            description,
            title,
        }
    
        createDestination(newDestination)
            .then(data => {
                console.log('new destination data: ', data)
                navigate(`/destinations`)
            })
            .catch(error => {
                setErrors(error.response?.data?.errors);
                console.log(error.response)
            })
        }

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h3 className="text-center"> New Author </h3>
            <form
                onSubmit={(e) => {
                    handleNewDestinationSubmit(e)
                }}    
            >
                <div className="form-group">
                    <label className="h6"> Title </label>
                    <input type="text" className="form-control" onChange={(event) => {
                        setTitle(event.target.value);
                    }} 
                    />
                </div>

                <div className="form-group">
                    <label className="h6"> Location </label>
                    <input type="text" className="form-control" onChange={(event) => {
                        setLocation(event.target.value);
                    }} 
                    />
                </div>

                <div className="form-group">
                    <label className="h6"> Description </label>
                    {
                        errors?errors.description && (
                            <span style={{ color: 'red' }}>  {errors.description?errors.message :} </span>
                        )
                    }
                    <textarea
                        onChange={(event) => {
                            setDescription(event.target.value);
                        }}
                        type = 'text'
                        className="form-control" 
                    ></textarea>
                </div>
                    
                <button className="mt-3 btn btn-sm btn-outline-secondary"> Cancel </button>
                <button className="mt-3 btn btn-sm btn-outline-success"> Submit </button>
            </form>
        </div>
    )
    
};
export default NewDestination;