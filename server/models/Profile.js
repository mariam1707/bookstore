const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.Object,
        ref: 'users'
    },
    handle: {
        type: String,
        required: true,
        max:40,
    },
    //usual or admin
    user_type: {
        type: String,
        required: true
    },       
});

module.exports = Profile = mongoose.model('profiles', ProfileSchema);