var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/demo");

// mongo shell functions:
// mongod --dbpath /path_to/data/db
// mongo; starts mongo shell
// show dbs; shows db names
// use cat_app; makes db if doesnt exist then switches to it
// show collections; 
// bd.cats.insert({}); posts new data to db
// db.cats.find({}); gets data from db
// db.cats.update({},{$set:{}}); updates data
// db.cats.remove({}); removes data from db
// db.cats.drop(); deletes all data in db

//create new schema detailing db structure
var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperment: String
});

//compiles schema in a model which returns object with methods(create, find etc)
var Cat = mongoose.model("Cat",catSchema);

//creates new cat object(var name doesnt get saved in db)
// var george = new Cat({
// 	name: "George",
// 	age: 5,
// 	temperment: "grouchy"
// });

// //function to save object to database
// george.save(function(err,cat) {
// 	if(err){
// 		console.log("Soemthing went wrong!");
// 	} else {
// 		console.log("You just saved a cat to the DB")
// 		console.log(cat);
// 	}
// });

//creates new cat object and posts it to the database
Cat.create({
	name: "Snow White",
	age: 15,
	temperment: "Bland"
}, function(err, cat) {
	if(err) {
		console.log(err);
	} else {
		console.log(cat);
	}
});

//shows all cat objects in the db
Cat.find({}, function(err, cats) {
	if(err) {
		console.log("Error");
		console.log(err);
	} else {
		console.log("All the cats.....");
		console.log(cats);
	}
})