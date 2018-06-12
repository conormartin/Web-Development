var mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String, 
    content: String
});
var Post = mongoose.model("Post", postSchema);

//USER - email, name, posts
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema] //associates posts with user by pasing in whole schema
});
var User = mongoose.model("User", userSchema);

//create new user
// var newUser = new User({
//     email: "sdjhbsjhf@kdsjbgsd.com",
//     name: "jhsgfs",
// });

// //push into posts array in newUser
// newUser.posts.push({
//     title: "First post",
//     content: "sjhkbgksjdhfbjkd"
// });

// //save newUser to db
// newUser.save(function(err, user) {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(user);
//     }
// })

//to add new post to existing user
User.findOne({name: "jhsgfs"}, function(err, user) {
    if(err) {
        console.log(err);
    } else {
        user.posts.push({
            title: "Second post",
            content: "sdjhfbsdkjhfbsadh"
        });
        user.save(function(err, user) {
            if(err) {
                console.log(err);
            } else {
                console.log(user);
            }
        })
    }
});