const {
    createDestination,
    getAllDestinations,
    getDestinationById,
    deleteDestinationById,
    updateDestinationById,
} = require('../services/destination.service');

const handleCreateDestination = async (req, res) => {
    console.log(req.body)
    try {
        const destination = await createDestination(req.body)
        return res.json(destination);
    } catch(error) {
        return res.status(400).json(error)
    }
} 

const handleGetAllDestinations = async (req, res) => {
    try {
        const destinations = await getAllDestinations();
        return res.json(destinations);
    } catch(error) {
        return res.status(400).json(error);
    }
};

const handleGetDestinationById = async (req, res) => {
    try {
        const destination = await getDestinationById(req.params.id);
        return res.json(destination)
    } catch(error) {
        return res.status(400).json(error);
    }
};

const handleDeleteDestinationById = async (req, res) => {
    try {
        const destination = await deleteDestinationById(req.params.id);
        return res.json(destination);
    } catch(error) {
        return res.status(400).json(error);
    }
};

const handleUpdateDestinationById = async (req, res) => {
    try {
        const destination = await updateDestinationById(req.params.id, req.body);
        return res.json(destination);
    } catch(error) {
        return res.status(400).json(error);
    }
};

// export an object of our controller methods so they can be added to routes.
module.exports = {
    handleCreateDestination: handleCreateDestination,
    handleGetAllDestinations,
    handleGetDestinationById,
    handleDeleteDestinationById,
    handleUpdateDestinationById,
};
