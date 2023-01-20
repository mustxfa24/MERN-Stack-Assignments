// import installed package from node modules
// can't use import syntax due to project type
const mongoose = require('mongoose')

// normally the db name or connection string would go in a .env or config files that is git ignored so the production app can choose a different name if needed and also, hide values from public repo
const dbName = 'trip-planner';

mongoose.connect(`mongodb://127.0.0.1/${ dbName }`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the ${ dbName } database!`))
    .catch(err => console.log(`Something went wrong when connecting to the ${ dbName } database`, err));