const mongoose = require('mongoose');

const uri = 'mongodb+srv://tefazapata:database.@cluster-g7auc.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true })
        .then(db => console.log('Data base is connected'))
        .catch(err => console.error(err));
module.exports = mongoose;