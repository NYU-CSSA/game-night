
// connect to mongodb database
// TODO: use environment variable
let url =  ""

const mongoose = require('mongoose');
const bcrypt = require("bcrypt-node")
mongoose.connect(url);

// define the schema for our user model
var staffSchema = mongoose.Schema({
	email :String,
	password :String,
	role : String,
	game : String
});

staffSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// create the model for users and expose it to our app
let Staff = mongoose.model('Staff', staffSchema);

// define a list of staff's email
let emailList = `cs5075@nyu.edu
xl2228@nyu.edu
mikechenwm@gmail.com
yw3210@nyu.edu
xm535@nyu.edu
yc3361@nyu.edu
xc1295@nyu.edu
changgeng@nyu.edu
ah4771@nyu.edu
ts3385@nyu.edu
my1793@nyu.edu
kl3348@nyu.com
xw1901@nyu.edu
yf874@nyu.edu
xz2183@nyu.edu
lw1952@nyu.edu
hl3003@nyu.edu
tl2594@nyu.edu
ys3453@nyu.edu
yz5164@nyu.edu
jk5542@nyu.edu
zd470@nyu.edu
yf1204@nyu.edu
qw735@nyu.edu
xg542@nyu.edu
pp1813@nyu.edu
fw724@nyu.edu
zy1222@nyu.edu
ms10001@nyu.edu
cathyes@163.com
`

const createStaff = (emailList, defaultPassword) => {

	var emailList = emailList.split("\n")

	for(var i=0; i < emailList.length; i++){
		var newUser = new Staff();
		var email = emailList[i];
		var password = defaultPassword;
		newUser.email = email; 
		newUser.password = newUser.generateHash(password);
		console.log(`creating staff ${email}`);
		newUser.save(function (err) {
			if (err) {throw err;}
		});
	}

	console.log(`${emailList.length} staffs created`)

}

let defaultPassword = "123"
createStaff(emailList, defaultPassword)


