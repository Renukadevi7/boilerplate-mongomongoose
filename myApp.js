require('dotenv').config();
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

mongoose.connect(
  process.env.MONGO_URI,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
  },() => {
  console.log("MongoDb Successfully Connected...");
  }
);

// name : string [required]
// age :  number
// favoriteFoods : array of strings (*)
const schema = new Schema ({
  name: {
    type: String,
    require: true,
  },
  age: Number,
  favoriteFoods: [String],
});

let Person = model('Person', schema);
 
const createAndSavePerson = (done) => {
  const person = new Person({
    name: 'Mary', 
    age: 20, 
    favoriteFoods: ['Chicken Noodles','Burger'],
  });
 
  person.save(function(err, data) {
    //if (err) return console.error(err);
     done(null, data);
  });
};

const arrayOfPeople = [
  { name: 'John', age: 65, favoriteFoods: ['Cake'] },
  { name: 'Jai', age: 35, favoriteFoods: ['Fruits'] },
  { name: 'Nanny', age: 25, favoriteFoods: ['Pizza'] },
];
 
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) =>{
   done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
