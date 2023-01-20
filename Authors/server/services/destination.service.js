const { Destination } = require('../models/destination.model')

const createDestination = async (data) => {
    const destination = await Destination.create(data)
    return destination
};

const getAllDestinations = async () => {
    const destinations = await Destination.find();
    return destinations;
};

const getDestinationById = async (id) => {
    const destination = await Destination.findById(id);
    return destination
};

const deleteDestinationById = async (id)=> {
    const destination = await Destination.findByIdAndDelete(id);
    return destination
};

const updateDestinationById = async (id, data) => {
    const destination = await Destination.findByIdAndUpdate(id, data, {
        // re-run validations.
        runValidators: true,
        // return updated destination.
        new: true,
    });

    return destination;
};

// export all services methods in an object
module.exports = {
    // long-form key: value
    createDestination: createDestination,

    // shorthand cna be used when key name matches var name
    getAllDestinations,
    getDestinationById,
    deleteDestinationById,
    updateDestinationById,
};