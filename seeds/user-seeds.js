const { User } = require('../models');

const userData = [
    {
        username: "Jane",
        email: "jane@email.com",
        password: "Password12345"
    },
    {
        username: "Joe",
        email: "joe@email.com",
        password: "Password12345"
    },
    {
        username: "Bob",
        email: "bob@email.com",
        password: "Password12345"
    },


]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;