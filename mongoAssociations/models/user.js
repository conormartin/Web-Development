var mongoose = require("mongoose");

//USER - email, name, posts 
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId, //only saves id of post
        ref: "Post"
    }]
});

module.exports = mongoose.model("User", userSchema);