const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(v);
            },
            message: props => `${props.value} is not a valid email address`
        }
    },
    password: {
        type: String,
        require: [true, 'Password is required'],
    }
});



module.exports = model('User', UserSchema);