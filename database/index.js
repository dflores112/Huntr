const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Huntr', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected');
});

const HuntrSchema = new mongoose.Schema({
  name: String,
  location: String,
  position: String,
  description: String,
  wishlist: Boolean,
  applied: Boolean,
  interview: Boolean,
});

const Company = mongoose.model('Company', HuntrSchema);

const saveCompany = (company) => {
  const application = new Company({
    name: company.company,
    location: company.location,
    position: company.position,
    description: company.description,
    wishlist: company.wishlist,
    applied: company.applied,
    interview: company.interview,
  });
  application.save((err) => {
    if (err) {
      console.log(err);
    }
  });
};

const getCompanies = (callback) => {
  Company.find({})
    .then((data) => callback(data))
    .catch((err) => callback(err));
};

module.exports.saveCompany = saveCompany;
module.exports.getCompanies = getCompanies;
