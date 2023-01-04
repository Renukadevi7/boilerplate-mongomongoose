require('dotenv').config();

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

let Person;

const createAndSavePerson = (done) => {
  done(null /*, data*/);
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
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

  done(null /*, data*/);
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
