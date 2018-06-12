var express                 = require("express"),
    app                     = express(),
    mongoose                = require('mongoose'),
    passport                = require('passport'),
    bodyParser              = require('body-parser'),
    LocalStrategy           = require('passport-local'),
    passportLocalMongoose   = require('passport-local-mongoose'),
    User                    = require('./models/user');

mongoose.connect('mongodb://localhost/authdemo');

app.use(require('express-session')({
    secret: "Hello World",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

//methods needed to read session, takes encoded date, decodes it then reencodes & puts data back in session
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//==============================
//          ROUTES
//==============================

app.get('/', function(req, res) {
    res.render('home');
});

//secret page will only render if isLoggedIn function returns
app.get('/secret', isLoggedIn, function(req, res) {
    res.render('secret')
})


//==============================
//        SIGN UP ROUTES
//==============================

//shows sign up form
app.get('/register', function(req, res){
    res.render('register');
});
//handling user sign up
app.post('/register', function(req, res) {
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err) {
            console.log(err);
            return res.render('register');
        }
        //authenticate using local strategy - can also use facebook, google etc.
        passport.authenticate('local')(req, res, function() {
            res.redirect('/secret');
        })
    })
});

//==============================
//        LOGIN ROUTES
//==============================

//shows login form
app.get('/login', function(req, res) {
    res.render('login')
})
//login logic with middleware to check auth before callback runs
app.post('/login', passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/login'
}), function(req, res) {
    //empty
});

//==============================
//        LOGOUT ROUTE
//==============================

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
})

//==============================
//     MIDDLEWARE FUNCTION
//==============================

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

app.listen(3000, function() {
    console.log("Server Started on Port 3000")
})