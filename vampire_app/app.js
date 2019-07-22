// 1. Require your node modules
const mongoose = require('mongoose');
// 2. Require your model (and possibly your extra data source);
//require model
const Vampire = require('./models/vampire');
//require given data
const populateVampires = require('./populateVampires');
// 3. Connect your database and collection name
// 4. Open your mongoose connection
connectionString = 'mongodb://localhost/vampire';
mongoose.connect(connectionString, {useNewUrlParser:true});

mongoose.connection.on('connected', () => {
  console.log(`mongoose connected to ${connectionString}`)
})
mongoose.connection.on('disconnected', () => {
  console.log(`mongoose disconnected to ${connectionString}`)
})
mongoose.connection.on('error', (err) => {
  console.log(`mongoose error: ${err}`)
})
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
//working!!!!!
// Vampire.collection.insertMany(populateVampires,(err, data) => {
//     console.log("added provided vampire data");
//     mongoose.connection.close();
//   });

//find data
// Vampire.find({}, (err, company) => {
//   if(err){
//     console.log(err);
//   } else {
//     console.log(company);
//   }
// });
// ### Add some new vampire data

//Create 1.
// Vampire.create({
//     name:'Duboo Hayaa',
//     dob: new Date(2019, 4, 1, 18, 45),
//     hair_color: 'black',
//     eye_color: 'grey',
//     loves: ['bowling', 'pingpang', 'ham'],
//     location: 'New Orleans, Louisiana, US',
//     gender: 'm',
//     victims: 10
// })

//Create 2.
// Vampire.create({
//     name:'Dashazi',
//     dob: new Date(2010, 5, 15, 8, 5),
//     hair_color: 'dark grey',
//     eye_color: 'yellow',
//     loves: ['chinese food', 'swming', 'fight'],
//     location: 'Liaoning, Shenyang, China',
//     gender: 'm',
//     victims: 145
// })

//Create 3.
// Vampire.create({
//     name:'Kumaqi',
//     dob: new Date(1894, 12, 11, 3, 9),
//     hair_color: 'black',
//     eye_color: 'red',
//     loves: ['fly', 'sleep', 'fish'],
//     location: 'Tokoy, Japan',
//     gender: 'f',
//     victims: 3850
// })

//Create 4.
// Vampire.create({
//     name:'Chunli',
//     dob: new Date(1980, 7, 15, 5, 25),
//     hair_color: 'black',
//     eye_color: 'black',
//     loves: ['being merry', 'reading', 'play chess'],
//     location: 'Denver, Colorado, US',
//     gender: 'f',
//     victims: 59
// })
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
//1.
// Vampire.find({gender: 'f'}, (err, vampire) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(vampire);
// 	}
// })
//2.
// Vampire.find({victims: {$gt:500}}, (err, vampire) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(vampire);
// 	}
// })
//3.
// Vampire.find({victims: {$lte:500}}, (err, vampire) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(vampire);
// 	}
// })
//4.
// Vampire.find({victims: {$ne:210234}}, (err, vampire) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(vampire);
// 	}
// })
//5.
// Vampire.find({victims: {$gt:150 , $lt:500}}, (err, vampire) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(vampire);
// 	}
// })


/////////////////////////////////////////////////
// ### Select by exists or does not exist
// Vampire.find({title: {$exists: true}}, (err, vampire) => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(vampire);
// 	}
// })

// Vampire.find({victims: {$exists: false}}, (err, vampire) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(vampire);
// 	}
// })

// Vampire.find({victims: {$exists: false}, title:{$exists: true}}, (err, vampire) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(vampire);
// 	}
// })

// Vampire.find({victims: {$exists: true}, victims: {$gt: 1000}}, (err, vampire) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(vampire);
// 	}
// })


/////////////////////////////////////////////////
// ### Select with OR

// Vampire.find({$or: [{location: 'New York, New York, US'}, 
// 				   {location: 'New Orleans, Louisiana, US'}]} , 
// 				   (err, vampire) => {
// 				   		if(err) {
// 						console.log(err);
// 						} else {
// 						console.log(vampire);
// 						}
// 				   })

// Vampire.find({$or: [{loves: 'brooding'}, 
// 				   {loves: 'being tragic'}]} , 
// 				   (err, vampire) => {
// 				   		if(err) {
// 						console.log(err);
// 						} else {
// 						console.log(vampire);
// 						}
// 				   })

// Vampire.find({$or: [{loves: 'marshmallows'}, 
// 				   {victims: {$gt: 1000}}]} , 
// 				   (err, vampire) => {
// 				   		if(err) {
// 						console.log(err);
// 						} else {
// 						console.log(vampire);
// 						}
// 				   })

// Vampire.find({$or: [{hair_color: 'red'}, 
// 				   {eye_color: 'green'}]} , 
// 				   (err, vampire) => {
// 				   		if(err) {
// 						console.log(err);
// 						} else {
// 						console.log(vampire);
// 						}
// 				   })

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
