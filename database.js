const mongoose = require("mongoose");
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.set('useFindAndModify', false);
mongoose.set('strictQuery', false);

class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect("mongodb+srv://raj713335:s2hC8E79Df@twitterclonecluster.vl3kyhh.mongodb.net/TwitterCloneDB?retryWrites=true&w=majority")
        .then(() => {
            console.log("databse connection successful");
        })
        .catch((err) => {
            console.log("databse connection error "+ err);
        })
    }
}

module.exports = new Database();

