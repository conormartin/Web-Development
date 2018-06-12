var mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost/blog_demo2");

var Post = require("./models/post");
var User = require("./models/user");


// User.create({
//     email: "email@bob.com",
//     name: "brad"
// });

//create new post, find user and save post id to that user
// Post.create({
//     title: "Second Post",
//     content: "fdgdfgfdgdf shfbjhkfbsdjf"
// }, function(err, post){
//     User.findOne({email: "email@bob.com"}, function (err, foundUser) {
//         if(err) {
//             console.log(err)
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data) {
//                 if(err) {
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             })
//         }
//     })
// });

//puts full post in user instead of just post id
// User.findOne({email: "email@bob.com"}).populate("posts").exec(function(err, user) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });