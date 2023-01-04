require('dotenv').config();
const mongoose = require('mongoose');
const{ Schema, model} = mongoose;

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () =>{
    console.log('DB Connection Successful...')
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
    name: 'Jin',
    age: 23,
    favoriteFoods: ['Noodles'],
  });
  person.save(function(err , data){
    done(null , data);
  });
};

const arrayOfPeople = [
  { name: 'Suzy', age: 53, favoriteFoods: ['Burger']},
  { name: 'Jam', age: 32, favoriteFoods: ['Pizza']},
  { name: 'Sam', age: 15, favoriteFoods: ['Mango']},
];
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, person) =>{
    done(null, person);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, person) => {
    done(null, person);
  });

};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, person) => {
    done(null, person);
  });

};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, person ) => {
    done(null , person);
  });

};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById(personId, (err, person) => {
    person.favoriteFoods.push(foodToAdd);
    person.save((error, updatedPerson) => {
      done(null , updatedPerson);
    });
  });

};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  
  Person.findOneAndUpdate(
    { name: personName },
    { age: ageToSet },
    { new: true },
    (err, person) => {
      done(null , person);
    }
  );

};

const removeById = (personId, done) =>{
  Person.findByIdAndRemove(personId, (err, person)=>{
    done(null, person);
  });

};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
   
  Person.remove({ name: nameToRemove}, (err, person) =>{
    done(null, person);
  }); 
  
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  
  Person.find({ favoriteFoods: foodToSearch })
    .sort({ name: 1 })
    .limit(2)
    .select({ age: 0 })
    .exec((err, data) =>{
    done(null, data );
  });
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
