const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');

// express config:
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) )

// faker company
const createCompany = () => {
    const newCompany = {
        _id: faker.database.mongodbObjectId(),
        company: faker.company.name(),
        address: {
            street : faker.address.streetAddress(false),
            city : faker.address.city(),
            state : faker.address.stateAbbr(),
            zip : faker.address.zipCodeByState(),
            country : faker.address.country() 
        }
    }
    return newCompany;
};

const newFakeCompany = createCompany();
console.log(newFakeCompany);

// faker user
const createUser = () => {
    const newUser = {
        password : faker.internet.password(20, true),
        email : faker.internet.email(),
        phoneNumber : faker.phone.number(),
        lastName : faker.name.lastName(),
        firstName : faker.name.firstName(),
        employer : createCompany(),
        _id : faker.database.mongodbObjectId()
    }
    return newUser;
};

const newFakeUser = createUser();
console.log(newFakeUser);

// create = GET 
app.get("/api/newCompany", (req, res) => {
    res.json( createCompany() )
} )

app.get("/api/newUser", (req, res) => {
    res.json( createUser() )
} )

app.listen( 8000, () => console.log( "Listening to port 8000") )