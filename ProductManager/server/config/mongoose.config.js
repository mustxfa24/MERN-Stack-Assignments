const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/project_manager_1' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log('Established a connection with the database! '))
    .catch( err => console.log('Something went wrong when connection to the database ', err));
    